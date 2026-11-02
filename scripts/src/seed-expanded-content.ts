import pg from "pg";
const { Pool } = pg;
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL must be set");
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

type Q = {
  topicId: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
};

// Topic IDs
const MV = 4;       // Mechanical Ventilation
const O2 = 6;       // Oxygen Therapy & Modalities
const ASSESS = 8;   // Patient Assessment & Hemodynamics
const CRIT = 10;    // Critical Care & Disease States

const questions: Q[] = [
  // ─────────────────────────────────────────────────────────────
  // MECHANICAL VENTILATION — advanced topics (40 questions)
  // ─────────────────────────────────────────────────────────────
  {
    topicId: MV, difficulty: "hard",
    text: "Airway Pressure Release Ventilation (APRV) uses a high CPAP level (P-high) held for most of the breath cycle with a brief release (P-low). Its primary lung-protective benefit over conventional MV is:",
    options: ["Higher peak inspiratory pressures to recruit lung", "Prolonged time at P-high promotes recruitment while spontaneous breathing augments alveolar ventilation without mandatory breath dyssynchrony", "Elimination of PEEP", "Guaranteed tidal volume delivery"],
    correctIndex: 1,
    explanation: "APRV maintains lung recruitment through sustained P-high (e.g., 25–30 cmH₂O for 4–6 s) while the brief release (typically 0.4–0.8 s to P-low ≈ 0) generates a passive tidal volume. Spontaneous breaths during P-high distribute gas to dependent zones. This 'open lung' strategy may reduce VILI, though evidence versus low-TV CMV remains debated."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "When setting T-low (release duration) in APRV, the goal is to terminate the release when expiratory flow has fallen to what percentage of peak expiratory flow?",
    options: ["10% of peak expiratory flow", "25–50% of peak expiratory flow — to prevent complete derecruitment", "75% of peak expiratory flow", "100% (complete exhalation)"],
    correctIndex: 1,
    explanation: "In APRV, T-low is set so exhalation is terminated at 25–50% of peak expiratory flow (seen on the flow-time waveform). This prevents complete derecruitment between cycles by maintaining a stent of air in the lung. If T-low is too long, alveoli collapse and the lung-protective benefit is lost."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "High-Frequency Oscillatory Ventilation (HFOV) delivers very small tidal volumes at 3–15 Hz. Gas exchange in HFOV is primarily accomplished by:",
    options: ["Bulk convection identical to normal breathing", "Asymmetric velocity profiles, molecular diffusion, pendelluft, and Taylor dispersion — not bulk convection", "Active inspiration and passive expiration", "Pressure support above CPAP"],
    correctIndex: 1,
    explanation: "HFOV delivers tidal volumes smaller than anatomical dead space. Gas exchange relies on: (1) asymmetric inspiratory/expiratory velocity profiles, (2) molecular diffusion near respiratory bronchioles, (3) pendelluft (gas mixing between lung units), and (4) Taylor dispersion. Oxygenation is controlled by mean airway pressure (mPaw); CO2 elimination by amplitude (ΔP) and frequency."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "In HFOV, increasing the oscillatory amplitude (ΔP) while keeping frequency and mPaw constant will primarily affect:",
    options: ["Oxygenation — more O2 delivery", "CO2 elimination — larger ΔP increases tidal volume and CO2 removal", "Mean airway pressure — mPaw rises", "I:E ratio — inspiratory time lengthens"],
    correctIndex: 1,
    explanation: "In HFOV, amplitude (ΔP or 'power') directly controls the size of the oscillatory stroke volume and therefore CO2 elimination. Increasing ΔP improves CO2 clearance. Mean airway pressure (mPaw) primarily determines oxygenation by setting lung volume and recruitment. Frequency affects both: lower frequency → larger effective tidal volume → more CO2 clearance."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Prone positioning in moderate-to-severe ARDS (PaO2/FiO2 < 150) for ≥16 hours/day reduces 28-day mortality. The primary mechanism of benefit is:",
    options: ["Improved cardiac output", "Redistribution of ventilation to previously dorsal (now ventral) lung zones — reducing ventral overdistension, recruiting dorsal zones, and homogenizing V/Q", "Reduction of auto-PEEP", "Elimination of secretions"],
    correctIndex: 1,
    explanation: "In ARDS, the dorsal lung is densely collapsed due to edema and gravity. Prone positioning makes dorsal zones ventral, where they can now be recruited, while the formerly overdistended ventral zones (now dorsal) are partially protected by their own weight. This homogenizes lung stress, reduces driving pressure, and improves V/Q matching. The PROSEVA trial showed 28-day mortality reduction from 32.8% to 16.0%."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "Driving pressure (ΔP = Pplat − PEEP) in ARDS is independently associated with mortality. The target driving pressure to minimize VILI is:",
    options: ["< 20 cmH₂O", "≤ 15 cmH₂O — values above this are associated with increased mortality", "< 30 cmH₂O", "< 10 cmH₂O always"],
    correctIndex: 1,
    explanation: "Driving pressure represents the stress applied to functional lung parenchyma per breath (normalized for respiratory system compliance). Amato et al. (2015) showed ΔP was the strongest ventilator variable associated with ARDS mortality. A ΔP ≤ 15 cmH₂O is the current target. When ΔP cannot be reduced with low TV (6 mL/kg), further PEEP titration or TV reduction to 4 mL/kg may be required."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "The stress index on the pressure-time curve during constant-flow VC ventilation is used to assess dynamic hyperinflation or derecruitment. A stress index > 1.0 suggests:",
    options: ["Progressive recruitment — upward concavity is beneficial", "Progressive overdistension — pressure rises faster than volume, indicating tidal hyperinflation above the upper inflection point", "Optimal PEEP — linear rise indicates perfect compliance", "Auto-PEEP — expiratory time is too short"],
    correctIndex: 1,
    explanation: "At constant flow in VC mode, the pressure-time curve should be linear (stress index ≈ 1.0) indicating stable compliance. A concave-upward curve (SI > 1.0) means each incremental volume costs progressively more pressure → overdistension. SI < 1.0 (concave down) suggests dynamic recruitment with each breath. SI is analyzed in the middle 'ramp' portion of the pressure waveform."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Neuromuscular blockade (NMB) in early severe ARDS (PaO2/FiO2 < 150) for 48 hours was associated with improved survival in the ACURASYS trial. The primary rationale is:",
    options: ["Sedation reduction", "Elimination of P-SILI and dyssynchrony — abolishing spontaneous effort prevents high transpulmonary pressure swings and reverse triggering in severe ARDS", "Airway secretion clearance", "Reduced vasopressor requirements"],
    correctIndex: 1,
    explanation: "In severe ARDS with strong respiratory drive, spontaneous efforts can generate large negative pleural pressure swings, causing P-SILI and worsening edema. NMB eliminates these efforts, ensures lung-protective TV delivery, and prevents 'reverse triggering' dyssynchrony. The ACURASYS trial showed 90-day mortality benefit; the ROSE trial did not replicate this, so NMB in ARDS is now used selectively for persistent dyssynchrony or severe hypoxemia."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "A spontaneous breathing trial (SBT) is considered passed if the patient tolerates 30–120 minutes without:",
    options: ["Any change in vital signs", "SpO2 < 90%, RR > 35, HR > 140 or change > 20%, SBP < 90 or > 180 mmHg, or signs of increased WOB / distress", "Any spontaneous respiratory effort", "A rate > 20 breaths/min"],
    correctIndex: 1,
    explanation: "SBT failure criteria (any one): SpO2 < 90% (or PaO2 < 60 on FiO2 ≤ 0.5), RR > 35/min for > 5 min, HR > 140 or ±20% change, SBP < 90 or > 180 mmHg, or signs of respiratory distress (accessory muscle use, paradoxical breathing, diaphoresis, agitation). If passed, assess the upper airway and ability to handle secretions before extubation."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "The rapid shallow breathing index (RSBI = RR/TV in liters) is measured during an unassisted SBT. An RSBI < 105 predicts:",
    options: ["Failed extubation", "Successful extubation with ~80% sensitivity and specificity when combined with other clinical factors", "The need for tracheostomy", "Adequate cough"],
    correctIndex: 1,
    explanation: "RSBI (Yang-Tobin index) was derived from the observation that patients who fail SBTs breathe rapidly and shallowly. An RSBI < 105 is the traditional threshold for predicting extubation success. However, it has moderate predictive value in isolation. An RSBI > 105 suggests excessive WOB. It should be used as one of several criteria alongside hemodynamics, mental status, cough, and secretion burden."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "A cuff leak test before extubation is used to assess risk for:",
    options: ["Aspiration", "Post-extubation stridor due to subglottic edema — a small or absent cuff leak suggests significant airway edema", "Tracheomalacia", "Ventilator-associated pneumonia"],
    correctIndex: 1,
    explanation: "With the ETT cuff deflated, a leak (heard audibly or measured as > 110–130 mL difference between inspired and expired volumes) suggests the airway is patent around the tube. A small or absent leak suggests subglottic/laryngeal edema; these patients have a higher risk of post-extubation stridor. Prophylactic steroids (methylprednisolone) 12–24 hours before extubation can reduce edema."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Ventilator-associated pneumonia (VAP) prevention bundles include all of the following EXCEPT:",
    options: ["Head-of-bed elevation 30–45°", "Daily sedation interruption and SBT assessment", "Prophylactic systemic antibiotics given to all intubated patients", "Oral care with chlorhexidine and subglottic secretion drainage"],
    correctIndex: 2,
    explanation: "VAP bundles include HOB elevation, daily SAT/SBT, oral decontamination (chlorhexidine), subglottic secretion drainage, and appropriate hand hygiene. Routine prophylactic systemic antibiotics are NOT recommended as they promote antibiotic resistance. Selective oral or digestive decontamination (SOD) is used in some European ICUs but is not universal practice."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "A patient on VC-AC develops flow dyssynchrony — the pressure-time curve shows a concave deceleration during inspiration ('scooping'). The correct intervention is:",
    options: ["Increase PEEP", "Increase inspiratory flow rate or switch to a flow-cycling mode (PSV) — the patient's demand exceeds the set flow, causing them to 'pull' against the ventilator", "Decrease tidal volume", "Add sedation only"],
    correctIndex: 1,
    explanation: "Flow dyssynchrony (flow hunger): the patient's neural inspiratory demand exceeds the delivered constant flow. This creates a characteristic 'scooped' concave appearance on the pressure waveform during the inspiratory phase. Solutions: (1) increase peak flow, (2) switch to decelerating flow pattern, or (3) switch to pressure-targeted mode (PC-AC or PSV) which delivers demand-matching flow."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "Reverse triggering is a form of dyssynchrony where:",
    options: ["The patient's effort triggers mandatory breaths before the set rate", "A mandatory machine breath entrains a patient's respiratory effort — the breath itself causes diaphragm activation via the Hering-Breuer reflex, potentially leading to breath stacking", "Auto-PEEP triggers extra breaths", "The patient cannot trigger any breaths"],
    correctIndex: 1,
    explanation: "Reverse triggering occurs predominantly in deeply sedated patients on controlled ventilation. A machine-delivered breath activates stretch receptors, triggering a patient diaphragm contraction that coincides with machine exhalation — leading to breath stacking and VILI risk. Reverse triggering is often diagnosed by esophageal manometry. Management: adjust sedation, switch modes, or consider NMB."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Permissive hypercapnia in ARDS ventilated with low TV (6 mL/kg IBW) is acceptable as long as:",
    options: ["pH remains > 7.35", "pH ≥ 7.20 — below this, the hemodynamic and cardiac effects of severe acidosis (arrhythmias, myocardial depression) become clinically significant", "PaCO2 < 60 mmHg", "HCO3⁻ is normal"],
    correctIndex: 1,
    explanation: "The ARDSNet protocol accepts rising PaCO2 as a consequence of low TV ventilation. pH ≥ 7.20 is the generally accepted lower limit before considering bicarbonate infusion or increasing TV. Below pH 7.20, risks include cardiac arrhythmias, decreased myocardial contractility, pulmonary vasoconstriction, and impaired tissue oxygen delivery."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "An inhalation recruitment maneuver (RM) in ARDS involves transiently increasing airway pressure (e.g., CPAP 40 cmH₂O × 40 seconds). After the RM, what is critical to prevent derecruitment?",
    options: ["Reducing FiO2 immediately", "Maintaining adequate PEEP post-RM — recruited alveoli will re-collapse if PEEP is insufficient to hold them open", "Increasing tidal volume", "Performing a cuff leak test"],
    correctIndex: 1,
    explanation: "A recruitment maneuver transiently opens collapsed alveoli. Without adequate PEEP to hold them open, rapid derecruitment occurs within seconds to minutes. After an RM, a PEEP titration (decremental trial targeting best compliance or oxygenation) is performed to find the minimum PEEP that maintains recruitment. Routine RMs in ARDS are not universally recommended (ART trial showed harm)."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "Dead space fraction (VD/VT) can be estimated non-invasively from the volumetric capnogram. An elevated dead space fraction (> 0.60) in ARDS is associated with:",
    options: ["Improved prognosis", "Increased mortality — high VD/VT reflects severe V/Q mismatch, impaired CO2 clearance, and microvascular obliteration", "The need for lower PEEP", "Reduced CO2 production"],
    correctIndex: 1,
    explanation: "VD/VT > 0.60 in ARDS reflects extensive alveolar dead space — ventilated but unperfused lung units due to microvascular thrombosis, vasoconstriction, or obliteration (characteristic of ARDS). High VD/VT forces higher minute ventilation to maintain normocapnia, exhausting ventilatory reserve. It is an independent predictor of ARDS mortality and may identify candidates for prone positioning or ECMO."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "A patient with severe air-trapping (auto-PEEP = 14 cmH₂O) on VC-AC develops hypotension. The most immediate intervention is:",
    options: ["IV fluid bolus", "Brief ventilator disconnect (20–30 seconds) to allow complete exhalation and decompress the lungs, then investigate cause (bronchospasm, inadequate expiratory time)", "Increase PEEP to match auto-PEEP", "Increase tidal volume"],
    correctIndex: 1,
    explanation: "Severe dynamic hyperinflation causing auto-PEEP can compress intrathoracic vessels and the right heart, reducing venous return and causing obstructive shock. The fastest treatment is temporarily disconnecting the circuit to allow the lungs to empty completely. Sustained hand-bagging at low rate or allowing passive exhalation can dramatically improve hemodynamics within seconds. Then address the underlying cause."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "To detect intrinsic PEEP (auto-PEEP) at the bedside on a volume-control ventilator, you perform:",
    options: ["An inspiratory hold maneuver", "An expiratory hold (occlusion) at end-exhalation — the resulting pressure above external PEEP reading represents auto-PEEP", "A cuff leak test", "A static P-V curve"],
    correctIndex: 1,
    explanation: "During an end-expiratory hold (occlusion maneuver), the exhalation valve is closed at the end of expiration. Any remaining pressure above the set external PEEP measured at this moment equals intrinsic PEEP (auto-PEEP). This method requires patient effort to be absent during the hold. It measures average auto-PEEP across all lung units (not detecting regional variations)."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Tracheostomy compared to prolonged translaryngeal intubation after 2 weeks of ventilation offers which primary benefit?",
    options: ["Completely eliminates the risk of VAP", "Improved patient comfort, reduced sedation requirements, facilitated oral hygiene, and potentially faster ventilator weaning — though mortality benefit is not clearly established", "Guaranteed airway protection for life", "Eliminates the need for cuff management"],
    correctIndex: 1,
    explanation: "Tracheostomy (usually percutaneous dilation) after 14–21 days of MV offers: reduced WOB (shorter/larger airway), improved patient communication, easier oral hygiene, reduced laryngeal injury risk, and facilitates weaning by allowing trials of trach mask oxygen. Landmark trials (TracMan) showed no mortality benefit to early (4 days) vs. late (10 days) tracheostomy."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "In a patient being weaned on PSV, which waveform finding suggests that the level of PS is too high (over-assist)?",
    options: ["Low respiratory rate and normal flow cycling", "High tidal volume (> 8 mL/kg), long neural expiratory time that begins before the ventilator cycles off (post-inspiration muscle activity seen as pressure spike at cycle-off), and low RR", "High RR with small tidal volumes", "Auto-triggering"],
    correctIndex: 1,
    explanation: "Over-assist on PSV: the set support exceeds patient demand. This produces excessively large TV (> 8 mL/kg), activation of expiratory muscles before the ventilator cycles off (seen as a pressure spike at cycle-off), prolonged inspiratory flow (machine keeps inflating while neural inspiration has ended), low RR, and potentially apneas. Reducing PS level corrects this and allows more patient respiratory work."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Proportional Assist Ventilation (PAV+) differs from PSV in that it delivers pressure assistance proportional to:",
    options: ["A fixed set pressure above PEEP", "The patient's instantaneous respiratory effort — amplifying both flow demand (elastance assist) and volume (resistance assist) in real time", "Respiratory rate only", "Tidal volume targets"],
    correctIndex: 1,
    explanation: "PAV+ uses real-time measurements of respiratory mechanics (compliance and resistance) to deliver pressure that proportionally amplifies the patient's own effort. As the patient inhales harder, more support is given; as effort decreases, support decreases. This dynamic matching reduces dyssynchrony compared to fixed PSV and may improve patient-ventilator interaction during weaning."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Adaptive Support Ventilation (ASV) is a closed-loop mode that automatically adjusts pressure and rate to target a set minute volume. Its control algorithm is based on:",
    options: ["Constant flow delivery based on IBW", "Otis' optimal breathing frequency formula — minimizing the work of breathing by selecting the rate/TV combination that requires the least respiratory muscle energy for the patient's current mechanics", "FiO2 titration based on SpO2", "Patient-triggered PSV only"],
    correctIndex: 1,
    explanation: "ASV calculates the patient's respiratory mechanics (Crs, Rrs) breath-by-breath and uses Otis' equation to deliver the rate and tidal volume combination that minimizes work of breathing while achieving the target %MinVol. The mode automatically transitions from full support to weaning as patient effort increases — acting like an automated weaning protocol."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "Venovenous ECMO (VV-ECMO) is indicated in severe ARDS refractory to conventional management. The minimum criteria generally considered before ECMO referral include:",
    options: ["PaO2/FiO2 < 300 despite any PEEP", "PaO2/FiO2 < 80 on FiO2 1.0 despite optimized prone positioning, NMB, and PEEP — or CO2 retention causing unacceptable pH despite low-TV ventilation", "Any requirement for > 10 cmH₂O PEEP", "PaO2 < 60 on room air"],
    correctIndex: 1,
    explanation: "EOLIA trial ECMO criteria: P/F < 80 mmHg for > 3h, P/F < 100 for > 6h, or pH < 7.25 with PaCO2 > 60 for > 6h despite optimized conventional ventilation (prone, NMB, HFO). ECMO allows 'ultra-protective' ventilation (TV ≤ 3 mL/kg, very low driving pressure) to rest the lung. Referral before development of multi-organ failure yields best outcomes."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Inhaled nitric oxide (iNO) in ARDS improves oxygenation by:",
    options: ["Bronchodilation of all airways equally", "Selective pulmonary vasodilation in ventilated lung units — reducing V/Q mismatch by redirecting blood flow from shunt regions to ventilated regions; also reduces PVR", "Reducing pulmonary edema formation", "Increasing cardiac output"],
    correctIndex: 1,
    explanation: "iNO (5–80 ppm) is a selective pulmonary vasodilator. When inhaled, it only reaches ventilated alveoli and causes local vasodilation, improving blood flow to ventilated zones. Shunted (unventilated) units receive less blood flow → reduced intrapulmonary shunt → improved PaO2. Despite oxygenation improvement, iNO has not shown a mortality benefit in ARDS and is used as a bridge or rescue therapy."
  },
  {
    topicId: MV, difficulty: "easy",
    text: "The ARDSNet low tidal volume protocol targets tidal volume of:",
    options: ["10–12 mL/kg actual body weight", "6 mL/kg ideal body weight (IBW), with a target Pplat ≤ 30 cmH₂O", "8 mL/kg IBW", "4 mL/kg IBW always"],
    correctIndex: 1,
    explanation: "The landmark ARDSNet ARMA trial (2000) demonstrated that 6 mL/kg IBW with Pplat ≤ 30 cmH₂O reduced mortality compared to 12 mL/kg IBW. IBW (not actual body weight) is used because lung size correlates with height, not weight. When Pplat > 30 despite 6 mL/kg, TV is further reduced in 1 mL/kg steps (minimum 4 mL/kg) with permissive hypercapnia."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "A patient on pressure support ventilation has a respiratory rate of 32 and tidal volume of 280 mL. His set PEEP is 8 and PS is 12. What immediate adjustment is most appropriate?",
    options: ["Increase PS to 20 cmH₂O", "Evaluate for pain, anxiety, or unmet WOB; consider increasing PS by 2–4 cmH₂O increments — the high RR and low TV suggest either inadequate support or unmet patient demand", "Decrease PEEP to 5", "Switch to CPAP"],
    correctIndex: 1,
    explanation: "RR 32 with TV 280 mL (RSBI ≈ 114) suggests marginal ventilation on current support. While this may indicate readiness for weaning assessment is premature, the high RR could also reflect inadequate PS, pain, anxiety, fever, or the underlying disease. First assess and treat reversible causes, then titrate PS upward in small increments if WOB remains excessive."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Continuous mandatory ventilation with mandatory breaths occurring regardless of patient effort is best described as:",
    options: ["SIMV", "Assist-Control (AC) / Continuous Mandatory Ventilation (CMV) — every breath is fully supported, whether patient-triggered or time-triggered", "Pressure support only", "CPAP"],
    correctIndex: 1,
    explanation: "In AC/CMV mode, every breath (patient-triggered or time-triggered backup) receives full ventilator support (either preset volume or pressure). If the patient triggers above the backup rate, each triggered breath is also fully supported. This mode prevents breath stacking from unsupported spontaneous breaths (unlike SIMV) but can lead to respiratory alkalosis if the patient's rate is high."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "Neurally Adjusted Ventilatory Assist (NAVA) uses the electrical signal of the diaphragm (Edi) to trigger and proportion ventilator assistance. Its primary advantage over PSV is:",
    options: ["Fixed pressure delivery for simplicity", "Synchrony with neural respiratory drive — the ventilator triggers simultaneously with diaphragm activation and delivers proportional pressure, virtually eliminating trigger delay, auto-cycling, and premature cycling", "Guaranteed tidal volume", "No need for an esophageal catheter"],
    correctIndex: 1,
    explanation: "NAVA uses the Edi signal (via nasogastric catheter with electrodes) as both trigger and assistance controller. Since the Edi signal appears before airway flow/pressure changes, trigger delay is minimal. The ventilator's pressure = NAVA level × Edi, making assistance directly proportional to effort. This prevents over-assist, under-assist, and most forms of dyssynchrony, even with variable neural timing."
  },
  {
    topicId: MV, difficulty: "easy",
    text: "When calculating ideal body weight for ventilator tidal volume settings in a male patient 70 inches (178 cm) tall, the ARDSNet formula gives IBW as:",
    options: ["70 kg", "50 + 2.3 × (height in inches − 60) = 50 + 2.3 × 10 = 73 kg", "80 kg", "60 kg"],
    correctIndex: 1,
    explanation: "ARDSNet IBW formula: Males = 50 + 2.3 × (height in inches − 60). For a 70-inch male: 50 + 2.3 × 10 = 73 kg IBW. Target TV = 6 mL/kg × 73 = 438 mL. For females: 45.5 + 2.3 × (height in inches − 60). This formula ensures TV is based on lung size (height) not actual weight, critical for obese patients."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "A mechanically ventilated patient with COPD has auto-PEEP of 8 cmH₂O. To help the patient trigger the ventilator more easily, you should:",
    options: ["Increase trigger sensitivity to 0.5 L/min", "Apply external PEEP to 75–80% of auto-PEEP (approximately 6 cmH₂O) — this reduces the pressure the patient must generate to trigger by offsetting the intrinsic PEEP threshold", "Increase tidal volume", "Change to pressure control mode"],
    correctIndex: 1,
    explanation: "With auto-PEEP of 8 cmH₂O, the patient must first overcome 8 cmH₂O before reaching the trigger threshold (e.g., −2 cmH₂O), requiring −10 cmH₂O effort. Adding external PEEP ~6 cmH₂O (75% of auto-PEEP) reduces the gap the patient must overcome to only −2 cmH₂O. External PEEP above ~80% of auto-PEEP worsens hyperinflation."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "Volume-targeted pressure control (VTPC) modes (e.g., PRVC, AutoFlow, VC+) combine features of both volume and pressure modes. Their key advantage is:",
    options: ["They guarantee both pressure and volume simultaneously", "They guarantee tidal volume delivery while automatically limiting pressure by adjusting the pressure target breath-to-breath based on measured compliance — providing volume guarantee with decelerating flow benefits", "They eliminate the need for PEEP", "They cannot be used for weaning"],
    correctIndex: 1,
    explanation: "VTPC/dual-control modes measure the patient's compliance each breath and adjust the delivered pressure (within the set pressure limit) to achieve the target tidal volume. Benefits: guaranteed TV (like VC), decelerating flow waveform (better gas distribution, lower PIP like PC), and automatic weaning as compliance improves. Risk: if patient effort suddenly increases, the auto-pressure reduction may under-support."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "Tracheobronchomalacia in a long-term ventilated patient is suspected when:",
    options: ["High plateau pressures are noted", "Excessive cuff volumes (> 10 mL) are needed to maintain seal, and there is tracheal widening on imaging — suggesting tracheal dilation from chronic pressure necrosis", "The patient cannot be weaned from CPAP", "Stridor occurs only on inspiration"],
    correctIndex: 1,
    explanation: "Prolonged mechanical ventilation with an ETT cuff can cause tracheal wall ischemia and necrosis from cuff pressures > 30 cmH₂O (normal capillary pressure). This results in tracheomalacia (loss of tracheal cartilage integrity) or tracheal dilation. Signs: progressive cuff volume requirements, recurrent aspiration despite high cuff pressures, and radiographic tracheal widening. Prevention: maintain cuff pressure 20–30 cmH₂O using a manometer."
  },
  {
    topicId: MV, difficulty: "easy",
    text: "The normal I:E ratio during mechanical ventilation is set at:",
    options: ["2:1 (inspiratory time longer)", "1:2 (inspiratory time shorter than expiratory time) — allowing adequate time for passive exhalation", "1:1", "1:4"],
    correctIndex: 1,
    explanation: "The normal physiologic I:E ratio is 1:2, meaning exhalation takes twice as long as inhalation. This allows passive lung recoil to fully empty the lungs between breaths. Pathologic conditions: COPD/asthma (need longer E, set 1:3 or 1:4 to prevent air trapping); inverse ratio ventilation in ARDS (I:E 1:1 to 4:1) prolongs inspiration to improve gas distribution and create intrinsic PEEP."
  },
  {
    topicId: MV, difficulty: "medium",
    text: "A ventilated ARDS patient has a PaO2 of 55 mmHg on FiO2 1.0 and PEEP 18 cmH₂O. The next rescue therapy to consider, per ARDS management guidelines, is:",
    options: ["Increase tidal volume to 8 mL/kg", "Prone positioning for ≥ 16 hours — if P/F < 150 on optimized settings, prone is the evidence-based next step before ECMO referral", "Reduce PEEP to 10", "Immediate bronchoscopy"],
    correctIndex: 1,
    explanation: "Rescue therapies for severe ARDS in stepwise order: (1) prone positioning ≥ 16h/day (PROSEVA benefit), (2) recruitment maneuvers + optimized PEEP, (3) inhaled vasodilators (iNO, epoprostenol) for refractory hypoxemia, (4) NMB (48h), (5) ECMO referral if P/F < 80. Increasing TV in ARDS is explicitly contraindicated."
  },
  {
    topicId: MV, difficulty: "hard",
    text: "High-frequency jet ventilation (HFJV) is most commonly used in:",
    options: ["ARDS in adults", "Neonatal respiratory distress syndrome and bronchopleural fistula management — the small tidal volumes and low airway pressures are particularly advantageous when air leaks must be minimized", "Weaning from MV in COPD", "Post-cardiac surgery patients"],
    correctIndex: 1,
    explanation: "HFJV delivers short pulses of gas at 100–600 Hz via a jet injector. In bronchopleural fistula (BPF), the very small tidal volumes and low Paw reduce the driving pressure through the fistula, allowing healing. In neonatal RDS, HFJV provides ventilation with minimal pressure fluctuations. The Bunnell Life Pulse HFJV is FDA-approved for neonates with pulmonary interstitial emphysema (PIE)."
  },

  // ─────────────────────────────────────────────────────────────
  // OXYGEN THERAPY & MODALITIES — CPAP, BiPAP, HFNC, airway clearance (50 questions)
  // ─────────────────────────────────────────────────────────────
  {
    topicId: O2, difficulty: "easy",
    text: "High-Flow Nasal Cannula (HFNC) therapy delivers heated, humidified gas at flows up to 60 L/min. At maximum flow, the estimated FiO2 delivered is:",
    options: ["Precisely equal to the set FiO2 regardless of patient breathing", "Approximately equal to the set FiO2 — high flow minimizes entrainment of room air, but actual FiO2 varies with patient's peak inspiratory flow and mouth breathing", "Always 100%", "Always 30%"],
    correctIndex: 1,
    explanation: "HFNC at 40–60 L/min closely approximates the set FiO2 because the delivered flow often meets or exceeds the patient's peak inspiratory flow (typically 30–60 L/min at rest). This minimizes dilution with room air. However, mouth breathing, high RR, or very high inspiratory demand can reduce delivered FiO2. At lower flows (< 20 L/min), significant room air entrainment occurs."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "HFNC reduces the anatomical dead space in the nasopharynx by:",
    options: ["Delivering 100% O2 only", "Continuously flushing the nasopharyngeal dead space with fresh gas, reducing CO2 rebreathing and effectively lowering physiologic dead space", "Applying CPAP through a tight-fitting mask", "Drying secretions to reduce airway resistance"],
    correctIndex: 1,
    explanation: "At high flows, HFNC washes out CO2 from the nasopharynx between breaths. Since the nasopharynx (~50 mL) is normally rebreathed dead space, its washout reduces the effective dead space. Each breath starts with a higher-O2 / lower-CO2 mixture. This 'dead space washout' effect contributes to CO2 clearance, explaining why some patients show modest PaCO2 improvements on HFNC despite no positive pressure."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "The ROX index (SpO2/FiO2 ÷ RR) is used in HFNC to predict the need for intubation. A ROX index < 2.85 at 12 hours of HFNC predicts:",
    options: ["Successful treatment — no intubation needed", "HFNC failure requiring intubation — a low ROX indicates worsening oxygenation relative to respiratory effort", "Adequate CO2 clearance", "The need to switch to NIV"],
    correctIndex: 1,
    explanation: "The ROX index (Roca et al.) was developed to identify patients with pneumonia/ARDS on HFNC who will ultimately need intubation. ROX < 2.85 at any time point, or failure to rise above 3.85 by 12 hours, predicts HFNC failure with good accuracy. It helps clinicians avoid delayed intubation in deteriorating patients, as late intubation worsens outcomes."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "The optimal HFNC flow rate for a spontaneously breathing adult with acute hypoxemic respiratory failure is typically:",
    options: ["5–10 L/min", "30–60 L/min — high enough to match or exceed peak inspiratory flow, minimizing room air entrainment and providing consistent FiO2", "10–20 L/min", "60–80 L/min always"],
    correctIndex: 1,
    explanation: "For acute hypoxemic respiratory failure, HFNC should be started at 30–40 L/min and titrated up to 60 L/min as needed. Higher flows provide more consistent FiO2, better dead space washout, and a modest level of end-expiratory pressure (PEEP effect, approximately 1 cmH₂O per 10 L/min with closed mouth). Titrate to SpO2 ≥ 92–95% and clinical comfort."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "NIV (Non-Invasive Ventilation) with BiPAP is contraindicated in which situation?",
    options: ["Mild COPD exacerbation with pH 7.32", "Cardiac arrest, inability to protect the airway, copious secretions with inability to clear, or facial trauma/surgery that prevents mask application", "Cardiogenic pulmonary edema", "Acute hypercapnic respiratory failure"],
    correctIndex: 1,
    explanation: "Absolute contraindications to NIV: cardiac/respiratory arrest, inability to protect airway (loss of gag reflex), hemodynamic instability requiring immediate intubation, uncooperative or agitated patient, excessive secretions, facial surgery/trauma, and esophageal anastomosis. NIV is highly effective in COPD exacerbation (pH 7.25–7.35), cardiogenic pulmonary edema, and immunocompromised patients."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "In BiPAP for COPD exacerbation, typical initial settings are IPAP 12–16 and EPAP 4–5 cmH₂O. The EPAP level serves primarily to:",
    options: ["Increase tidal volume", "Counteract auto-PEEP, stent open collapsible airways to reduce WOB, and improve FRC — similar to PEEP in invasive ventilation", "Reduce inspiratory muscle work only", "Control the backup rate"],
    correctIndex: 1,
    explanation: "In COPD, dynamic hyperinflation creates auto-PEEP that the patient must overcome to trigger each breath. EPAP (external PEEP) of 4–5 cmH₂O partially counterbalances this intrinsic PEEP, reducing the trigger threshold. EPAP also maintains airway patency in upper airway collapse (OSA) and recruits atelectatic regions. The effective pressure support = IPAP − EPAP."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "CPAP therapy in cardiogenic pulmonary edema reduces the need for intubation by:",
    options: ["Delivering high FiO2 only", "Reducing preload and afterload (decreased venous return and LV transmural pressure), recruiting flooded alveoli, and improving oxygenation — all reducing WOB and correcting hypoxemia", "Stimulating respiratory drive", "Reducing bronchospasm"],
    correctIndex: 1,
    explanation: "CPAP at 5–10 cmH₂O in acute cardiogenic pulmonary edema: (1) increases intrathoracic pressure, reducing venous return (preload reduction), (2) reduces LV afterload by decreasing the pressure difference the LV must generate, (3) recruits flooded alveoli improving V/Q, and (4) reduces WOB. The 3CPO trial confirmed CPAP reduces intubation rate and dyspnea compared to standard oxygen therapy."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "CPAP titration for obstructive sleep apnea (OSA) in the sleep lab aims to find the pressure that:",
    options: ["Delivers the highest FiO2", "Eliminates all apneas, hypopneas, respiratory event-related arousals, and snoring while maintaining SpO2 ≥ 90% throughout all sleep stages and positions", "Achieves minimum possible pressure", "Maintains RR > 20/min"],
    correctIndex: 1,
    explanation: "CPAP titration eliminates flow limitation by pneumatically splinting the upper airway. The optimal CPAP pressure prevents apneas (cessation > 10s), hypopneas (≥30% flow reduction with arousal or desaturation), RERAs, and snoring — across all sleep positions and stages (especially REM in supine position, where OSA is worst). Auto-titrating CPAP (APAP) devices adjust pressure breath-by-breath based on measured resistance."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "Average Volume-Assured Pressure Support (AVAPS) combines BiPAP with automatic adjustment to maintain a target tidal volume. Its primary indication is:",
    options: ["Acute COPD exacerbation", "Obesity hypoventilation syndrome (OHS) or neuromuscular disease — where respiratory drive and chest wall mechanics vary significantly and a fixed IPAP may be inadequate to guarantee alveolar ventilation overnight", "Post-extubation support in ICU", "Cardiogenic pulmonary edema"],
    correctIndex: 1,
    explanation: "AVAPS continuously adjusts IPAP (within set min/max limits) to achieve the target tidal volume. In OHS, where compliance is poor and variable, fixed BiPAP may under- or over-ventilate. AVAPS 'hunts' for the pressure needed to consistently deliver the target TV. It is FDA-cleared for home use in OHS, neuromuscular disease, and central hypoventilation syndromes."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "A non-rebreather mask (NRB) at 10–15 L/min can deliver a maximum FiO2 of approximately:",
    options: ["44%", "60–70% with a 1-way valve functioning; up to 80–90% with both exhalation valves intact", "24–28%", "100%"],
    correctIndex: 1,
    explanation: "A properly fitting NRB mask with a reservoir bag and one-way valves can deliver FiO2 0.60–0.80 at 10–15 L/min (some sources cite up to 0.90 with tight seal and both exhalation port valves). In practice, mask fit is rarely perfect. A simple mask delivers ~35–50%. Venturi masks provide precise FiO2. True 100% FiO2 requires a tight-seal non-vented mask with 100% O2 flow exceeding peak inspiratory demand."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "A Venturi mask (air-entrainment mask) delivers a precise FiO2 by using the Bernoulli principle to entrain a fixed amount of air. Its clinical advantage over a simple mask is:",
    options: ["It delivers higher FiO2 than all other masks", "Precise, consistent FiO2 delivery (24–50%) regardless of the patient's flow demand — critical for COPD patients requiring controlled oxygen therapy", "It is more comfortable than nasal cannula", "It provides CPAP"],
    correctIndex: 1,
    explanation: "The Venturi mask uses the Venturi/Bernoulli effect: a high-velocity O2 jet through a narrow orifice entrains a fixed amount of room air through side ports. By changing jet size and flow, a precise total flow and FiO2 are delivered. Because total flow typically exceeds patient demand, the delivered FiO2 is stable regardless of breathing pattern — essential in COPD where precise FiO2 prevents elimination of hypoxic drive in some patients."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "PEP (Positive Expiratory Pressure) therapy devices (e.g., threshold PEP, oscillating PEP) assist airway clearance primarily by:",
    options: ["Directly suctioning secretions", "Building positive back-pressure during exhalation to stent airways open, reduce dynamic airway collapse, and mobilize secretions proximally via high-velocity airflow oscillations (oscillating PEP) or sustained back-pressure (threshold PEP)", "Stimulating cough only", "Delivering bronchodilators"],
    correctIndex: 1,
    explanation: "PEP devices create a resistance during exhalation (typically 10–20 cmH₂O in threshold PEP). This prevents small airway collapse, allowing air to flow behind secretions and mobilize them toward the central airways. Oscillating PEP devices (Flutter, Acapella, Aerobika) superimpose high-frequency oscillations on PEP, loosening secretions by creating oscillatory shear forces. Used in CF, bronchiectasis, COPD."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "The Flutter valve (oscillating PEP device) is gravity-dependent because:",
    options: ["It requires upright positioning to work", "The steel ball inside the cone creates oscillatory back-pressure only when the device is held at a specific angle (approximately horizontal) — tilting changes the ball's resting position and alters oscillation frequency", "It delivers PEP only in supine position", "Gravity increases expiratory flow"],
    correctIndex: 1,
    explanation: "The Flutter valve contains a steel ball in a conical seat. Expiratory flow lifts the ball (PEP rises), then it falls back (pressure drops), creating oscillations at 6–26 Hz. The angle of the device changes the gravitational force on the ball, altering the oscillation frequency and pressure. Patients must be trained to hold it nearly horizontal for optimal function. The Acapella is not gravity-dependent and works in any position."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "High-Frequency Chest Wall Oscillation (HFCWO / The Vest) aids mucus clearance by:",
    options: ["Applying external CPAP to the chest wall", "Delivering rapid, small compressions to the chest wall at 5–25 Hz, generating oscillatory airflow in the airways that shears and mobilizes secretions — similar to mini-coughs", "Heating the chest wall to liquefy mucus", "Applying vibration only during inhalation"],
    correctIndex: 1,
    explanation: "The inflatable vest wraps around the thorax and delivers rapid oscillatory compressions (programmable frequency and intensity). This creates a two-phase airflow oscillation in the airways: the compression phase generates brief higher flow (mini-cough), and the recoil phase promotes secretion mobilization. HFCWO is used in CF, bronchiectasis, neuromuscular diseases, and is effective without positioning changes."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "Intrapulmonary Percussive Ventilation (IPV) delivers minibursts of compressed gas at 100–300 cycles/min. Its dual benefit is:",
    options: ["CPAP plus bronchodilation", "Airway clearance through high-frequency percussion AND aerosolized medication delivery (bronchodilators can be added to the percussionator) simultaneously — while maintaining percussive effect", "Mechanical ventilation backup", "Oxygen delivery only"],
    correctIndex: 1,
    explanation: "IPV (Percussionaire) delivers high-frequency pulsatile flow via mouthpiece/mask at high cycle rates. The percussive effect mobilizes secretions toward the central airways. Concurrently, aerosolized medications (nebulized saline, bronchodilators) can be entrained into the pulsatile flow, treating bronchospasm while clearing secretions. Used in CF, COPD, pneumonia, and post-operative atelectasis."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "Active cycle of breathing technique (ACBT) consists of three phases. The correct sequence is:",
    options: ["Huff → relaxed breathing → FET", "Breathing control (relaxed tidal breathing) → thoracic expansion exercises (deep breaths) → forced expiration technique (FET/huffing)", "Coughing → deep breathing → rest", "FET → coughing → CPAP"],
    correctIndex: 1,
    explanation: "ACBT cycle: (1) Breathing control — relaxed diaphragmatic breathing to reduce bronchospasm and fatigue, (2) Thoracic expansion exercises — 3–4 deep breaths with breath-hold to allow collateral ventilation behind secretions, (3) Forced Expiration Technique (FET) — 1–2 huffs (open glottis) at mid-to-low lung volume to mobilize secretions. Repeat. More secretion-specific than deep breathing alone."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "Incentive spirometry (IS) is most effective for prevention of:",
    options: ["Ventilator-associated pneumonia", "Post-operative atelectasis — sustained maximal inspiration mimics the normal sighing mechanism, expanding collapsed alveoli in patients who breathe shallowly due to splinting from pain", "Secretion mobilization in CF", "Hypercapnia in COPD"],
    correctIndex: 1,
    explanation: "IS promotes sustained maximal inspiration (SMI) using visual feedback (a rising piston or ball). The sustained inspiration expands the lungs, reopens atelectatic alveoli, and exercises inspiratory muscles. Most beneficial in post-abdominal/thoracic surgery patients who splint and breathe shallowly. Target: 10 attempts per hour while awake. Its benefit over coached deep breathing alone has been questioned in meta-analyses."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "When administering bronchodilators via MDI with spacer to a mechanically ventilated patient, correct technique includes:",
    options: ["Activating the MDI at peak inspiratory flow", "Coordinating MDI actuation 1 second before or at the start of the ventilator's inspiratory cycle — with actuation into the spacer/chamber placed at the elbow of the circuit at least 15 cm from the ETT", "Removing the heat-moisture exchanger temporarily only for SVN delivery", "Actuating directly into the Y-piece without a spacer"],
    correctIndex: 1,
    explanation: "In-line MDI: place a spacer (chamber adapter) in the inspiratory limb ≥15 cm from the ETT Y-piece. Actuate just before or at the beginning of inspiration (1–2 actuations, wait 15–30s between actuations). MDI delivers ~30% of dose to the lung in ventilated patients vs. ~9% without spacer. HME must be bypassed (moved to expiratory limb) during SVN; MDI can be used with HME in place."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "Small-volume nebulizer (SVN) treatment in mechanically ventilated patients: optimal nebulizer placement is:",
    options: ["Directly at the ETT Y-piece", "In the inspiratory limb, 15–30 cm proximal to the Y-piece (at the circuit elbow) — this increases aerosol reservoir and improves delivery by 3× compared to Y-piece placement", "In the expiratory limb", "In the exhalation port of the ventilator"],
    correctIndex: 1,
    explanation: "Aerosol delivery in MV is highly position-dependent. SVN placed 15–30 cm from the Y-piece in the inspiratory limb creates a reservoir of nebulized particles that are inhaled with the next breath. This placement increases lung deposition from ~3% (Y-piece) to ~10–15%. The HME filter must be removed or bypassed during SVN, or condensation will collect medication in the filter rather than delivering it to the patient."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "Heliox (helium-oxygen mixture, typically 70:30 or 80:20) reduces WOB in upper airway obstruction because:",
    options: ["It delivers more oxygen per molecule", "Helium's low density reduces turbulent airflow resistance in the upper airway — turbulent resistance is proportional to gas density, so helium reduces the driving pressure needed to breathe through a stenotic airway", "It bronchodilates the central airways", "It reduces CO2 production"],
    correctIndex: 1,
    explanation: "Turbulent airflow resistance (Re ∝ density/viscosity). Helium density is 0.164 g/L vs. nitrogen 1.25 g/L. A 70:30 heliox mixture has density ~0.43 g/L — about 1/3 that of air. In turbulent flow states (subglottic stenosis, croup, post-extubation stridor, severe asthma), heliox dramatically reduces resistive WOB. It requires a tight-fitting mask or circuit adaptation and the FiO2 cannot exceed 40% with 60% He."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "For aerosol therapy using heliox as the driving gas through a nebulizer, which adjustment is required?",
    options: ["No adjustment — heliox works the same as air", "Increase the flow rate by 1.8× compared to the flow used with air/O2 — because heliox's lower density requires higher flow to achieve the same aerosol output from a jet nebulizer", "Decrease flow by half", "Switch to ultrasonic nebulizer only"],
    correctIndex: 1,
    explanation: "Jet nebulizers are calibrated for air or O2 (density ~1.3 g/L). Heliox (~0.43 g/L) flows faster through the same orifice at the same driving pressure but delivers less mass flow (fewer gas molecules per liter). This means less Venturi effect and reduced nebulizer output. To compensate, flow must be increased ~1.8× (√3 ratio for 70:30 heliox vs. air) to achieve adequate aerosol generation."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "Manual hyperinflation (MHI or 'bagging') is performed to:",
    options: ["Deliver medications only", "Clear secretions (via high peak flow and cough augmentation), recruit atelectatic lung, and temporarily test compliance and resistance before circuit changes", "Provide permanent ventilatory support", "Replace chest physiotherapy entirely"],
    correctIndex: 1,
    explanation: "MHI (bag-squeezing technique) applies a larger-than-tidal-volume breath (typically 1–1.5× TV) followed by a short breath hold and rapid release. The rapid exhalation generates a high expiratory flow mimicking a cough, moving secretions proximally. MHI also recruits atelectatic regions. A fast release of the bag creates the 'squeezing wave' that moves secretions. Use with caution in patients with auto-PEEP, ARDS, or hemodynamic instability."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "The minimum expired tidal volume required to trigger the incentive spirometer piston to a target is 600–1,200 mL for most adults. For a post-abdominal surgery patient unable to achieve this, the BEST modification is:",
    options: ["Discontinue IS and use deep breathing instructions alone", "Lower the target initially to a tolerable level (e.g., 3× normal TV), encourage the patient to build progressively, and ensure adequate analgesia to reduce splinting", "Increase the flow setting", "Switch to BiPAP"],
    correctIndex: 1,
    explanation: "Post-operative patients with pain splint their breathing. Pain management (epidural, nerve block, oral analgesics) is the single most effective intervention to allow deeper breaths. IS goals should be set based on the patient's pre-operative FVC if available, but starting lower and building is better than not using IS. Positioning upright and using pillow splinting for incision pain support are also helpful adjuncts."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "When a patient has a tracheostomy and is being weaned to a tracheostomy collar (trach mask), oxygen delivery should be provided with:",
    options: ["Standard nasal cannula placed in the nares", "An aerosol mask or trach collar with a large-bore nebulizer system providing humidified oxygen at the desired FiO2 — direct delivery to the trach avoids the upper airway bypass problem", "Simple mask over the trach", "Blow-by technique"],
    correctIndex: 1,
    explanation: "Tracheostomy patients have bypassed the upper airway (which normally warms and humidifies inspired gas). Without upper airway conditioning, cold, dry gas causes tracheal mucosal damage, inspissated secretions, and impaired mucociliary clearance. A trach collar or T-piece with a heated aerosol system provides both the prescribed FiO2 and essential humidity directly to the stoma."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "An HME (heat-moisture exchanger) vs. a heated humidifier (HH) in mechanically ventilated patients: HME is contraindicated in which scenario?",
    options: ["Short-term ventilation (< 3 days)", "Thick, copious, or bloody secretions — HME filters can trap secretions, dramatically increasing airway resistance and dead space; also contraindicated in hypothermic patients (< 32°C) and when large air leaks exist", "Post-operative patients", "Patients requiring bronchodilators via MDI"],
    correctIndex: 1,
    explanation: "HME contraindications: (1) copious/thick/bloody secretions (clog the filter), (2) hypothermia (< 32°C — HME cannot add heat and may cool the gas), (3) large air leaks via uncuffed ETT, trach, or bronchopleural fistula (leak prevents moisture recapture), (4) minute ventilation > 10 L/min (inadequate moisture output). HH should be used in these cases. HME adds dead space (30–90 mL) — problematic in low-TV ventilation."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "Oxygen delivery from a liquid oxygen (LOX) system compared to a compressed gas cylinder offers the advantage of:",
    options: ["Higher working pressure suitable for all regulators", "Much greater storage capacity per unit volume — liquid O2 is 875× denser than gaseous O2, allowing portable units to carry significantly more O2 for ambulation and home use", "Lower cost for all quantities", "Better purity (higher O2%)"],
    correctIndex: 1,
    explanation: "Liquid oxygen at −183°C stores 875 L of gaseous O2 per liter of liquid. A 1-liter portable LOX unit holds ~1,000 L of O2, much more than an equivalent-size compressed H-cylinder (6,900 L) or E-cylinder (625 L). LOX is preferred for high-flow, ambulatory home oxygen. Drawbacks: must be refilled (not refillable from wall like cylinders), loss from evaporation, and cryogenic handling requirements."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "A patient on 2 L/min nasal cannula has a cylinder pressure of 1,800 psi. Using a size E cylinder (factor 0.28), how long will the oxygen last?",
    options: ["100 minutes", "1800 × 0.28 ÷ 2 = 252 minutes (4.2 hours)", "500 minutes", "50 minutes"],
    correctIndex: 1,
    explanation: "Duration formula: (gauge pressure × cylinder factor) ÷ flow rate = duration. E-cylinder factor = 0.28. Duration = 1,800 × 0.28 ÷ 2 = 504 ÷ 2 = 252 minutes (~4.2 hours). Common cylinder factors: E = 0.28, G = 2.41, H/K = 3.14. This should be calculated before patient transport to ensure adequate supply."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "NIV failure requiring intubation is most likely to occur within the first how many hours, and the most important predictor is:",
    options: ["24–48 hours; baseline pH", "1–2 hours; failure of pH to improve (pH remaining < 7.30 after 1–2 hours of NIV) — combined with high APACHE II score and poor neurological status", "72 hours; FiO2 requirements", "6 hours; oxygenation"],
    correctIndex: 1,
    explanation: "NIV in acute hypercapnic respiratory failure: reassess within 1 hour for ABG improvement. pH should rise (toward 7.35). pH < 7.30 after 1–2 hours of optimal NIV, worsening encephalopathy, inability to tolerate mask, or hemodynamic instability mandate intubation without further NIV delay. Delay can result in emergency intubation with higher complication risk than elective controlled intubation."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "Bubble CPAP for neonates generates CPAP by submerging the expiratory limb underwater. Its unique secondary benefit over other CPAP generators is:",
    options: ["It provides higher peak pressures", "The bubbling creates small-amplitude oscillations transmitted to the lung, providing gentle high-frequency vibration that may improve gas exchange beyond the CPAP level alone (similar in concept to HFOV)", "It eliminates the need for a blender", "It is more precise than flow-inflation devices"],
    correctIndex: 1,
    explanation: "Bubble CPAP (Fischer & Paykel or similar systems) generates the prescribed pressure via water column depth. The bubbling from gas escaping through the water creates 2–4 Hz high-frequency oscillations transmitted back to the lung. This vibratory effect has been proposed to improve CO2 washout and alveolar recruitment, potentially explaining why bubble CPAP performs at least as well as other CPAP methods in preterm infants."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "The correct FiO2 range for a Venturi mask set to the blue adapter is:",
    options: ["28%", "24% (blue adapter) — each color-coded Venturi adapter has a set FiO2: blue 24%, yellow 28%, white 31%, green 35%, pink 40%, orange 50%", "35%", "40%"],
    correctIndex: 1,
    explanation: "Standard Venturi mask color coding (may vary slightly by manufacturer): Blue = 24%, Yellow = 28%, White = 31%, Green = 35%, Pink = 40%, Orange = 50%. Each adapter has a specific O2 flow recommendation on the label (e.g., 2 L/min for 24%). Using the correct flow is essential — too low a flow may not entrain enough air, too high a flow increases FiO2 above labeled value."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "During aerosol therapy with a small-volume nebulizer, mouthpiece delivery is preferred over mask delivery primarily because:",
    options: ["It delivers higher drug doses always", "Masks result in significant drug deposition on the face and in the nasal turbinates (especially with nose breathing), reducing pulmonary deposition — mouthpiece delivery with mouth breathing and breath-hold improves lung deposition", "Mouthpieces provide PEEP", "Masks increase bronchospasm risk"],
    correctIndex: 1,
    explanation: "With a mask SVN, up to 50% of drug deposits on the face and nasal turbinates. Nasal turbinate deposition is particularly problematic for lung disease medications. Mouthpiece delivery with relaxed tidal volume breathing through the mouth, followed by a 4–10 second breath-hold, optimizes intrapulmonary deposition (10–20% of dose). Masks are appropriate only for young children, confused patients, or those who cannot maintain a tight seal."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "Air-entrainment nebulizers (LVN, all-purpose nebulizers) used for cool aerosol therapy can deliver oxygen concentrations of:",
    options: ["100% only", "35–100% by adjusting the entrainment port — fully open = ~35% (large air entrainment), closed = 100% O2 (no air entrainment)", "21% only (room air)", "40% fixed"],
    correctIndex: 1,
    explanation: "Large-volume air-entrainment nebulizers (e.g., for trach collar or face tent) have an adjustable air-entrainment port. Fully open, room air is entrained, delivering ~35% FiO2 at 10–15 L/min O2 input. Partially or fully closing the port reduces air entrainment, increasing FiO2. Many systems can deliver 35%, 40%, 60%, 70%, 100% by adjusting the entrainment port and O2 flow."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "Oxygen-induced hypercapnia in COPD patients is primarily caused by:",
    options: ["Suppression of all respiratory drive (hypoxic drive theory) — pure reflex suppression of breathing by oxygen", "A combination of mechanisms: release of hypoxic pulmonary vasoconstriction (increasing V/Q mismatch), the Haldane effect (O2 displacing CO2 from hemoglobin), and modest reduction in respiratory drive — with V/Q worsening being the dominant mechanism", "Pure cardiac suppression of breathing", "Increased CO2 production from oxygen"],
    correctIndex: 1,
    explanation: "The 'hypoxic drive' explanation is an oversimplification. Modern evidence shows that O2-induced hypercapnia in COPD results primarily from: (1) release of hypoxic pulmonary vasoconstriction → blood redistribution to poorly ventilated units → worse V/Q mismatch, (2) Haldane effect (deoxyHb carries more CO2; oxyHb releases CO2 from tissues into blood → higher venous PCO2). Respiratory drive suppression is a minor contributor."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "A patient on a non-rebreather mask at 15 L/min still has an SpO2 of 82%. The next escalation in oxygen delivery should be:",
    options: ["Increase to 20 L/min on NRB", "Transition to HFNC at 40–60 L/min with FiO2 0.8–1.0, or to NIV/BiPAP — NRB is near the ceiling of non-invasive O2 delivery; the next step is high-flow or positive pressure therapy", "Add a second NRB mask", "Provide 100% O2 by blow-by"],
    correctIndex: 1,
    explanation: "The NRB at 15 L/min delivers maximum FiO2 achievable by conventional low-flow masks (~80%). Persistent SpO2 of 82% on this mask indicates either refractory hypoxemia (requiring HFNC or NIV) or impending respiratory failure (requiring intubation assessment). HFNC at 60 L/min and FiO2 1.0 is the immediate step up; if the patient shows signs of respiratory distress or fatigue, early intubation should be considered."
  },
  {
    topicId: O2, difficulty: "medium",
    text: "Autogenic drainage (AD) is a secretion clearance technique that uses controlled breathing at different lung volumes. The three phases are:",
    options: ["Inhale → hold → exhale forcefully", "Unstick (low lung volume — loosens peripheral mucus), collect (mid lung volume — accumulates mucus in central airways), evacuate (high lung volume — huffing to expel central mucus)", "Huff → cough → rest", "PEP → deep breath → IS"],
    correctIndex: 1,
    explanation: "Autogenic drainage uses controlled breathing at 3 lung volume ranges: (1) Unsticking — breathing at low lung volume (below FRC) to loosen peripheral mucus with high intraluminal flow-to-volume ratio; (2) Collecting — mid-volume breathing to migrate secretions to central airways; (3) Evacuating — high-volume huffs (open glottis FET) to expel proximal secretions. Requires significant patient training and is used primarily in CF."
  },
  {
    topicId: O2, difficulty: "easy",
    text: "A transtracheal oxygen catheter (TTOC) is inserted directly into the trachea and compared to nasal cannula, it:",
    options: ["Delivers less oxygen per unit flow", "Reduces oxygen requirements by 30–50% by using the trachea as an oxygen reservoir — eliminating dead space dilution, and allows lower flow rates to achieve the same SpO2", "Requires higher flow rates", "Cannot be used with supplemental oxygen > 2 L/min"],
    correctIndex: 1,
    explanation: "TTOC (e.g., SCOOP catheter) delivers O2 directly into the trachea. Benefits: (1) trachea acts as O2 reservoir — inspired gas is already oxygen-rich without nasal dilution, (2) eliminates anatomical dead space washout, (3) oxygen is only used during inspiration (not continuous waste during expiration as with nasal cannula). Result: 30–50% reduction in O2 requirements, making it valuable for patients needing high flows or for cosmetic/comfort reasons."
  },

  // ─────────────────────────────────────────────────────────────
  // PATIENT ASSESSMENT & HEMODYNAMIC MONITORING (40 questions)
  // ─────────────────────────────────────────────────────────────
  {
    topicId: ASSESS, difficulty: "medium",
    text: "A pulmonary artery catheter (Swan-Ganz) is floated through the right heart. The waveform that confirms correct placement in the pulmonary artery (vs. right ventricle) is:",
    options: ["High systolic and low diastolic pressure (40/5 mmHg pattern)", "PA waveform: systolic pressure equal to RV systolic, but a HIGHER diastolic pressure than RV due to pulmonic valve closure — typical PA: 25/10 mmHg; RV: 25/5 mmHg", "A flat line at 15 mmHg", "The same as CVP waveform"],
    correctIndex: 1,
    explanation: "RV waveform: high systolic (similar to PA), low diastolic (near 0–5 mmHg) with no dicrotic notch. PA waveform: same systolic as RV, but diastolic > 8 mmHg (pulmonic valve closes, preventing backward flow) with a dicrotic notch. Normal PA pressures: systolic 15–30, diastolic 8–15, mean 9–20 mmHg. If the catheter slips back into RV, the diastolic drop and loss of dicrotic notch signal repositioning need."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Pulmonary Capillary Wedge Pressure (PCWP) ≥ 18–20 mmHg is consistent with:",
    options: ["Non-cardiogenic pulmonary edema (ARDS)", "Cardiogenic pulmonary edema or left heart failure — elevated PCWP reflects increased left atrial pressure transmitted retrograde to the pulmonary capillaries, causing hydrostatic edema", "Normal LV function", "Right heart failure exclusively"],
    correctIndex: 1,
    explanation: "PCWP (normal 6–12 mmHg) approximates left atrial pressure when the balloon is wedged. PCWP > 18 mmHg: cardiogenic pulmonary edema (LV failure, mitral stenosis). PCWP > 25 mmHg: frank pulmonary edema. In ARDS, PCWP < 18 mmHg with pulmonary edema confirms the noncardiogenic mechanism (increased permeability, not hydrostatic). The classic ARDS vs. cardiogenic edema differentiation by PA catheter: ARDS has PCWP < 18."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Normal cardiac output (CO) and cardiac index (CI) values are:",
    options: ["CO = 2 L/min; CI = 1.5 L/min/m²", "CO = 4–8 L/min; CI = 2.5–4.0 L/min/m² — CI normalizes CO for body surface area, allowing comparison across patients of different sizes", "CO = 10 L/min; CI = 5.0 L/min/m²", "CO = 2–3 L/min; CI = 2.0 L/min/m²"],
    correctIndex: 1,
    explanation: "Normal CO (thermodilution, Fick) = 4–8 L/min (average 5 L/min at rest). CI = CO ÷ BSA; normal 2.5–4.0 L/min/m². Cardiogenic shock: CI < 2.2 L/min/m². Hyperdynamic states (early sepsis, fever): CI > 4. CI is more useful for comparing patients of different sizes — a CI of 3.0 L/min/m² indicates adequate perfusion in both a 50 kg and 100 kg patient."
  },
  {
    topicId: ASSESS, difficulty: "hard",
    text: "Thermodilution cardiac output measurement uses cold saline injection into the right atrium. The principle relies on:",
    options: ["Doppler frequency shift", "Stewart-Hamilton indicator dilution equation — the area under the temperature-time curve downstream (PA thermistor) is inversely proportional to blood flow (CO)", "Oxygen consumption and arteriovenous O2 difference (Fick)", "Pulse pressure variation"],
    correctIndex: 1,
    explanation: "Thermodilution CO: known volume (10 mL) and temperature of cold saline is injected into the RA port. The PA thermistor detects the downstream temperature change. CO = (Vi × ΔT × constants) ÷ ∫ΔT·dt (Stewart-Hamilton). Low CO → prolonged cold dilution → larger AUC → small calculated CO. Average 3 measurements. Pitfalls: tricuspid regurgitation (recirculation), shunts, temperature fluctuations."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Systemic vascular resistance (SVR) is calculated as:",
    options: ["(MAP + CVP) ÷ CO", "SVR = (MAP − CVP) ÷ CO × 80 (dynes·sec·cm⁻⁵) — normal 800–1200 dynes·sec·cm⁻⁵", "MAP × CO", "(MPAP − PCWP) ÷ CO × 80"],
    correctIndex: 1,
    explanation: "SVR = [(MAP − CVP) ÷ CO] × 80 dynes·sec·cm⁻⁵. Normal: 800–1,200. High SVR (> 1,200): vasoconstriction (cardiogenic shock, hypothermia, hypovolemia). Low SVR (< 800): vasodilation (septic/distributive shock, anaphylaxis, neurogenic shock, cirrhosis). PVR = [(MPAP − PCWP) ÷ CO] × 80; normal 20–120 dynes·sec·cm⁻⁵."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Mixed venous oxygen saturation (SvO2) measured from the pulmonary artery reflects:",
    options: ["Arterial oxygen delivery only", "The balance between O2 delivery (DO2) and O2 consumption (VO2) — normal SvO2 60–75% indicates tissues are extracting ~25% of delivered O2; a low SvO2 means either low delivery or high extraction", "Pulmonary gas exchange efficiency", "Hemoglobin saturation in pulmonary veins"],
    correctIndex: 1,
    explanation: "SvO2 is the mixed venous O2 saturation in the PA (true mix of all venous blood). Normal 60–75%. SvO2 < 60%: increased O2 extraction due to decreased DO2 (low CO, low Hgb, low SaO2) or increased VO2 (fever, seizures, shivering). SvO2 > 80%: distributive shock (blood bypassing tissues), cyanide poisoning (cells can't use O2), wedged catheter. ScvO2 (superior vena cava) approximates SvO2 and is used in sepsis protocols (target > 70%)."
  },
  {
    topicId: ASSESS, difficulty: "hard",
    text: "Pulse pressure variation (PPV) and stroke volume variation (SVV) during mechanical ventilation are used to predict fluid responsiveness. PPV > 13% suggests:",
    options: ["Fluid overload", "Preload dependence — the patient is on the steep portion of the Frank-Starling curve and will likely increase CO with a fluid bolus", "High SVR", "The need for vasopressors immediately"],
    correctIndex: 1,
    explanation: "During positive-pressure ventilation, intrathoracic pressure fluctuates. During inspiration, RV preload decreases (impeded venous return), reducing LV output 2–3 beats later. PPV = (PPmax − PPmin) ÷ mean PP. PPV > 13% (or SVV > 10%) indicates significant preload sensitivity → the patient will likely respond to a fluid challenge with increased CO. Requires regular MV without spontaneous breaths and normal sinus rhythm to be valid."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "The passive leg raise (PLR) test assesses fluid responsiveness by:",
    options: ["Measuring the BP response to standing", "Transiently auto-transfusing ~300 mL of venous blood from the legs and pelvis to the thorax by elevating legs to 45° — an increase in CO or pulse pressure ≥ 10% predicts fluid responsiveness without actually giving fluid", "Measuring CVP change with position", "Assessing lower extremity pulses"],
    correctIndex: 1,
    explanation: "PLR is a reversible preload challenge. From 45° head-up, quickly lay flat and raise legs to 45° (alternatively, from flat, raise legs from flat). The mobilized ~300 mL acts as a fluid bolus. Measure CO (or PP) before and 60–90 seconds into PLR. ≥ 10% CO increase = preload-responsive. Advantages: reversible (no actual fluid given), works in spontaneous breathing, AFib. Requires real-time CO measurement for accuracy."
  },
  {
    topicId: ASSESS, difficulty: "easy",
    text: "Central venous pressure (CVP) is measured from a central venous catheter in the superior vena cava or right atrium. The normal CVP range is:",
    options: ["15–20 mmHg", "2–8 mmHg (or 3–10 cmH₂O) — reflecting right atrial filling pressure and, in the absence of tricuspid disease, right ventricular end-diastolic pressure", "−5 to 0 mmHg", "> 20 mmHg"],
    correctIndex: 1,
    explanation: "Normal CVP 2–8 mmHg (some sources 3–8). Elevated CVP (> 10–12 mmHg): RV failure, cardiac tamponade, constrictive pericarditis, volume overload, tension pneumothorax, PEEP effect. Low CVP (< 2 mmHg): hypovolemia, distributive shock (vasodilation). CVP alone poorly predicts fluid responsiveness (its dynamic changes are more informative than absolute values). 1 mmHg ≈ 1.36 cmH₂O."
  },
  {
    topicId: ASSESS, difficulty: "hard",
    text: "Cardiac tamponade classic findings on hemodynamic monitoring (Beck's Triad for clinical diagnosis) combined with the PA catheter findings are:",
    options: ["Low CVP, low PCWP, high CO", "Equalization of diastolic pressures (CVP ≈ RV diastolic ≈ PA diastolic ≈ PCWP) all elevated at similar levels — compression of all cardiac chambers impedes filling uniformly", "High PA systolic, normal CVP", "High CO with low SVR"],
    correctIndex: 1,
    explanation: "Cardiac tamponade: pericardial fluid compresses all chambers. PA catheter shows 'diastolic equalization': CVP ≈ RV diastolic ≈ PA diastolic ≈ PCWP (all approximately equal, typically 15–20 mmHg). CO is low (obstructive shock). Beck's Triad: hypotension, muffled heart sounds, elevated JVP (↑ CVP). Pulsus paradoxus (> 10 mmHg drop in SBP during inspiration) is the hallmark physical finding. Treatment: pericardiocentesis."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Pulsus paradoxus is defined as a drop in systolic BP > 10 mmHg during inspiration. It is most commonly seen in:",
    options: ["Aortic stenosis", "Cardiac tamponade, severe obstructive lung disease (asthma, COPD — significant negative intrathoracic pressure exaggerates normal cardiac interdependence), and large pericardial effusion", "Atrial fibrillation", "Aortic regurgitation"],
    correctIndex: 1,
    explanation: "Normal: SBP drops 3–5 mmHg on inspiration (increased RV filling decreases LV preload via interventricular septum shifting). In tamponade, exaggerated septal shift compresses the LV. In severe asthma, large negative Ppl increases LV afterload and shifts the septum. Pulsus paradoxus > 10 mmHg is abnormal. Measurement: inflate BP cuff above systolic, slowly deflate until Korotkoff sounds heard only on expiration, then only on both phases — the difference is pulsus paradoxus."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Distributive shock (e.g., septic shock) hemodynamic profile on a PA catheter shows:",
    options: ["Low CO, high SVR, high PCWP", "High CO (hyperdynamic), low SVR, normal or low PCWP — the hallmark is massive vasodilation with compensatory increase in CO", "Low CO, low SVR, low CVP", "High CO, high SVR, high PCWP"],
    correctIndex: 1,
    explanation: "Septic shock hemodynamics: (1) high CO/CI (compensatory hyperdynamic state from cytokine-mediated vasodilation, metabolic demand), (2) very low SVR (vasodilation of systemic vessels), (3) normal or low PCWP (venodilation, third-spacing). Compare: cardiogenic shock = low CO, high SVR, high PCWP; hypovolemic = low CO, high SVR, low PCWP; obstructive = low CO, high SVR, variable PCWP. Late septic shock can be 'cold' with low CO."
  },
  {
    topicId: ASSESS, difficulty: "easy",
    text: "The Fick equation for cardiac output requires measurement of:",
    options: ["Blood pressure and heart rate only", "VO2 (oxygen consumption) and the arteriovenous O2 content difference: CO = VO2 ÷ (CaO2 − CvO2)", "Pulmonary artery pressures only", "Stroke volume and ejection fraction"],
    correctIndex: 1,
    explanation: "Fick principle: CO = VO2 ÷ (CaO2 − CvO2) × 10. VO2 is measured by metabolic cart or estimated (3.5 mL/kg/min at rest). CaO2 = (Hgb × 1.34 × SaO2) + (PaO2 × 0.003). CvO2 = (Hgb × 1.34 × SvO2) + (PvO2 × 0.003). Normal a-vO2 difference = 4–6 mL/dL. High a-vO2 difference (> 6) = low CO or high VO2. Low a-vO2 (< 4) = high CO (hyperdynamic) or poor tissue utilization (septic shock, cyanide)."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Arterial waveform (A-line) morphology: a decreased dicrotic notch and a wide pulse pressure in the arterial waveform suggests:",
    options: ["Aortic stenosis (narrow PP)", "Aortic regurgitation (wide PP — regurgitant flow causes rapid pressure dissipation during diastole, low DBP, high SBP) or vasodilation (high compliance)", "Cardiac tamponade", "Peripheral vascular disease"],
    correctIndex: 1,
    explanation: "Wide pulse pressure (high SBP − low DBP): aortic regurgitation (diastolic leak), vasodilation (low SVR, wide compliance), complete heart block (variable stroke volumes). Narrow pulse pressure: aortic stenosis (fixed low SV), cardiac tamponade, severe hypovolemia, low CO states. The dicrotic notch on the arterial waveform marks aortic valve closure (aortic component of S2); its position and depth reflect arterial compliance and vascular resistance."
  },
  {
    topicId: ASSESS, difficulty: "easy",
    text: "Pulse oximetry (SpO2) will give a falsely HIGH reading (overestimating SaO2) in the presence of:",
    options: ["Methemoglobinemia (SpO2 reads ~85% regardless of true SaO2)", "Carbon monoxide poisoning (carboxyhemoglobin absorbs light similarly to oxyhemoglobin at 660 nm, causing SpO2 to read falsely HIGH near 99–100% despite severe tissue hypoxia)", "Severe anemia", "Nail polish (certain colors lower SpO2)"],
    correctIndex: 1,
    explanation: "Carboxyhemoglobin (COHb) has a similar light absorbance to oxyhemoglobin at the 660 nm wavelength used by standard 2-wavelength pulse oximetry. SpO2 reads normal or high (COHb 'looks like' OxyHb) despite functional hemoglobin saturation being severely reduced. In CO poisoning, the patient may have SpO2 = 98% while SaO2 (functional) is only 50%. Diagnosis requires co-oximetry. Methemoglobin drives SpO2 toward 85% regardless of true O2 saturation."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Capnography (ETCO2) in intubated patients is used for all of the following EXCEPT:",
    options: ["Confirming ETT placement in the trachea (vs. esophagus)", "Monitoring trends in CO2 elimination as a surrogate for cardiac output", "Directly measuring arterial PaCO2 without ABG", "Detecting ETT disconnection or esophageal intubation immediately"],
    correctIndex: 2,
    explanation: "ETCO2 is NOT equivalent to PaCO2. The gradient between PaCO2 and ETCO2 (normally 2–5 mmHg, with PaCO2 higher) reflects alveolar dead space — areas ventilated but not perfused. In ARDS, PE, or low CO states, the PaCO2-ETCO2 gradient widens significantly. ETCO2 cannot substitute for ABG in quantifying exact PaCO2 — it only provides a trend. It excels at: ETT placement confirmation, CPR quality monitoring, and detecting sudden cardiovascular events."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "The normal capnography (time-based) waveform Phase III (alveolar plateau) should be:",
    options: ["Steeply upsloping", "Nearly flat (< 3 mmHg/second rise) — a steeply upsloping Phase III ('shark fin' or 'obstructive' pattern) indicates heterogeneous emptying due to airflow obstruction (COPD, asthma)", "Negative (below baseline)", "Zero (no CO2)"],
    correctIndex: 1,
    explanation: "Normal capnogram: Phase I (dead space, 0 CO2) → Phase II (rapid rise as alveolar gas reaches sensor) → Phase III (alveolar plateau, near flat) → Phase 0 (inspiration, rapid drop to baseline). Obstructive pattern: sloped Phase III (shark fin) — slow units empty late, raising ETCO2 throughout expiration. Alveolar hyperventilation: lower ETCO2 but normal morphology. Rebreathing: baseline doesn't return to zero."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "The alveolar-arterial oxygen gradient [P(A-a)O2] is calculated as:",
    options: ["FiO2 × PB − PaCO2", "PAO2 − PaO2, where PAO2 = (FiO2 × [PB − 47]) − PaCO2/RQ — normal P(A-a)O2 on room air is < 10–15 mmHg; increases with V/Q mismatch, diffusion impairment, or shunt", "PaO2 − PaCO2", "PaO2 / FiO2"],
    correctIndex: 1,
    explanation: "The alveolar gas equation: PAO2 = FiO2 × (PB − 47) − PaCO2/RQ. RQ (respiratory quotient) = 0.8. At sea level on room air: PAO2 = 0.21 × (760 − 47) − 40/0.8 = 0.21 × 713 − 50 = 149.7 − 50 = 99.7 mmHg. If PaO2 = 90, P(A-a) = 9.7 (normal). A wide P(A-a) gradient indicates an intrapulmonary problem (V/Q mismatch, shunt, diffusion limitation). Normal P(A-a) with low PaO2 indicates hypoventilation without intrinsic lung disease."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "In a 12-lead ECG obtained as part of a respiratory assessment, ST-segment elevation in leads II, III, and aVF with reciprocal depression in I and aVL indicates:",
    options: ["Pulmonary embolism pattern", "Inferior STEMI (right coronary artery territory) — important for the RT as cardiogenic pulmonary edema and acute MI can coexist; immediate escalation to cardiology is required", "Normal sinus rhythm", "Right heart strain"],
    correctIndex: 1,
    explanation: "Inferior STEMI (ST elevation in II, III, aVF with reciprocal changes in I, aVL) is caused by RCA or LCx occlusion. For the RT: recognize this as a medical emergency warranting immediate cardiology/cath lab activation. LV dysfunction from MI causes acute cardiogenic pulmonary edema, explaining the respiratory failure. PE pattern (McGinn-White): S1Q3T3 — prominent S in I, Q wave and T inversion in III."
  },
  {
    topicId: ASSESS, difficulty: "easy",
    text: "A patient's chest X-ray shows bilateral fluffy infiltrates with Kerley B lines and cephalization of pulmonary vasculature. These findings are most consistent with:",
    options: ["Pneumothorax", "Cardiogenic pulmonary edema — Kerley B lines (interstitial edema in the lymphatics) and cephalization (reversal of normal upper-zone blood flow diversion) are classic CXR signs of elevated LVEDP", "ARDS (noncardiogenic)", "Emphysema"],
    correctIndex: 1,
    explanation: "Cardiogenic pulmonary edema CXR findings: (1) Kerley B lines — horizontal lines at lung periphery from distended lymphatics (interstitial edema), (2) Cephalization — upper-lobe vessels appear larger than lower-lobe (reversed normal dependent distribution as high PCWP distends upper veins), (3) Bat-wing or butterfly perihilar edema, (4) pleural effusions, (5) enlarged cardiac silhouette. ARDS: diffuse bilateral opacities, typically WITHOUT Kerley B or cephalization."
  },
  {
    topicId: ASSESS, difficulty: "hard",
    text: "The oxygen delivery (DO2) formula is:",
    options: ["DO2 = PaO2 × cardiac output", "DO2 = CO × CaO2 × 10 — normal DO2 is ~1,000 mL/min; below 600 mL/min, tissue oxygen debt begins even at rest", "DO2 = VO2 ÷ (1 − SvO2/SaO2)", "DO2 = Hgb × SaO2 × 1.34"],
    correctIndex: 1,
    explanation: "DO2 = CO × CaO2 × 10 (the ×10 converts mL/dL to mL/L). CaO2 = (Hgb × 1.34 × SaO2/100) + (PaO2 × 0.003). Normal DO2 ≈ 5 L/min × 20 mL/dL × 10 = 1,000 mL/min. VO2 ≈ 250 mL/min, so O2 extraction ratio (O2ER) = VO2/DO2 ≈ 25% normally. When DO2 < 600 mL/min (critical DO2), tissues extract maximally → lactic acidosis. The three determinants of DO2 are cardiac output, hemoglobin, and arterial O2 saturation."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "A patient has: SpO2 98%, Hgb 6 g/dL, CO 5 L/min. Despite a normal SpO2, this patient is at risk for tissue hypoxia because:",
    options: ["SpO2 reliability is limited", "Oxygen delivery is severely reduced due to anemia: CaO2 = (6 × 1.34 × 0.98) + (PaO2 × 0.003) ≈ 7.9 mL/dL vs. normal ~20 mL/dL; DO2 ≈ 395 mL/min — below the critical threshold", "The CO is too low despite being '5 L/min'", "RR must be elevated"],
    correctIndex: 1,
    explanation: "SpO2 reflects the % saturation of hemoglobin, NOT the total amount of O2 delivered. With Hgb of 6 g/dL, CaO2 ≈ 7.9 mL/dL (normal 18–20). DO2 = 5 × 7.9 × 10 = 395 mL/min — barely above critical DO2 (~330 mL/min). Even with SpO2 = 100%, severe anemia or low CO impairs DO2. This is why integrated assessment (Hgb, CO, SaO2) is essential, not SpO2 alone."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "A patient in the ICU has a worsening PaO2/FiO2 ratio from 350 to 180 over 24 hours. His CXR shows new bilateral opacities. According to the Berlin Definition, this patient now meets criteria for:",
    options: ["Mild ARDS", "Moderate ARDS — Berlin criteria: bilateral opacities not explained by effusion/atelectasis/nodules; P/F 100–200 on PEEP ≥ 5; onset within 1 week of insult", "Severe ARDS (P/F < 100)", "Acute lung injury (no longer a Berlin category)"],
    correctIndex: 1,
    explanation: "Berlin Definition ARDS categories: Mild: P/F 201–300 on PEEP ≥ 5. Moderate: P/F 101–200 on PEEP ≥ 5. Severe: P/F ≤ 100 on PEEP ≥ 5. P/F must be measured on ≥ PEEP 5 cmH₂O. Onset within 7 days of a known clinical insult. CXR: bilateral opacities not fully explained by effusion, lobar collapse, or nodules. 'ALI' (acute lung injury) was eliminated in the Berlin classification (replaced by mild ARDS)."
  },
  {
    topicId: ASSESS, difficulty: "easy",
    text: "Normal values for a complete pulmonary arterial blood gas from the right heart include:",
    options: ["PO2 = 100 mmHg, PCO2 = 40 mmHg, pH = 7.40", "PO2 = 35–45 mmHg, PCO2 = 41–51 mmHg, pH = 7.32–7.38, SvO2 = 60–75% — reflecting venous blood after tissue O2 extraction", "PO2 = 70 mmHg, PCO2 = 35 mmHg", "PO2 = 80 mmHg, SvO2 = 90%"],
    correctIndex: 1,
    explanation: "Mixed venous blood (drawn from the distal PA catheter port) reflects the average of all venous blood after tissue gas exchange. Normal: PvO2 35–45 mmHg, PvCO2 41–51 mmHg, pH 7.32–7.38, SvO2 60–75%. SvO2 < 60%: increased O2 extraction (low CO, severe anemia, high VO2). SvO2 > 80%: distributive shock or PA catheter wedged in pulmonary vein (sampling oxygenated blood)."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Increased work of breathing (WOB) in a mechanically ventilated patient is recognized on the pressure-time product (PTP) as:",
    options: ["High plateau pressure with low patient effort", "A large area under the negative swing of the airway pressure waveform during patient triggering — indicating high inspiratory effort against the ventilator circuit before flow delivery begins", "Low peak inspiratory pressure", "A flat expiratory flow curve"],
    correctIndex: 1,
    explanation: "WOB assessment: the pressure-time product (PTP) integrates esophageal or airway pressure over time during spontaneous inspiration. Clinically, the 'negative effort' deflection on the Paw waveform before or during ventilator assistance shows patient effort. Large deflections = high WOB. Esophageal manometry (Pes) allows quantification. High WOB on PSV may indicate insufficient support; low WOB (over-assist) risks respiratory muscle atrophy."
  },
  {
    topicId: ASSESS, difficulty: "hard",
    text: "The resistance (R) of the respiratory system in a mechanically ventilated patient is calculated as:",
    options: ["Pplat ÷ TV", "(PIP − Pplat) ÷ inspiratory flow", "Pplat × TV × RR", "(PIP − PEEP) ÷ TV"],
    correctIndex: 1,
    explanation: "In volume-control with constant flow: R = (PIP − Pplat) ÷ inspiratory flow rate. PIP − Pplat is the pressure difference attributable to resistive forces (flow-dependent). At constant flow, dividing by flow gives airway resistance. Normal Raw ~ 0.5–2.5 cmH₂O/L/s. Elevated resistance (> 5 cmH₂O/L/s): bronchospasm, secretions, kinked ETT, biting ETT, or small ETT. Compliance = TV ÷ (Pplat − PEEP)."
  },
  {
    topicId: ASSESS, difficulty: "medium",
    text: "Procalcitonin (PCT) as a biomarker in respiratory infection is most useful for:",
    options: ["Diagnosing ARDS", "Differentiating bacterial from viral/non-infectious causes of respiratory illness — elevated PCT (> 0.5 ng/mL) supports bacterial etiology; PCT-guided protocols reduce antibiotic duration in CAP and COPD exacerbation", "Measuring oxygenation adequacy", "Detecting pneumothorax"],
    correctIndex: 1,
    explanation: "PCT is released by epithelial cells and monocytes in response to bacterial infection. It rises within 6–12 hours of bacterial invasion and falls rapidly with effective treatment. PCT > 0.25–0.5 ng/mL: bacterial cause likely; > 2.0 ng/mL: systemic bacterial infection or sepsis. PCT < 0.1 ng/mL: viral or non-infectious cause likely (safe to withhold or stop antibiotics). PCT-guided antibiotic stewardship reduces antibiotic exposure in CAP by 1–3 days."
  },

  // ─────────────────────────────────────────────────────────────
  // CRITICAL CARE & DISEASE STATES (50 questions)
  // ─────────────────────────────────────────────────────────────
  {
    topicId: CRIT, difficulty: "medium",
    text: "Acute Exacerbation of COPD (AECOPD) is most commonly triggered by:",
    options: ["Exercise and physical activity", "Respiratory tract infections (50–70% of cases — predominantly viral: rhinovirus, influenza; bacterial: H. influenzae, Moraxella, S. pneumoniae) and air pollution", "Oxygen therapy alone", "Diaphragm fatigue without infection"],
    correctIndex: 1,
    explanation: "AECOPD triggers: (1) Respiratory infections — ~50% viral (rhinovirus most common), ~25% bacterial, ~25% both. Common bacteria: H. influenzae, M. catarrhalis, S. pneumoniae. (2) Air pollution (PM2.5, ozone). (3) Non-compliance with maintenance therapy. (4) Cardiac disease (comorbid HF). GOLD guidelines recommend antibiotics when increased sputum purulence + increased dyspnea or sputum volume is present (Anthonisen criteria)."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "The GOLD criteria for initiating NIV in AECOPD include:",
    options: ["Any respiratory distress in COPD", "Acute or acute-on-chronic respiratory acidosis (pH 7.25–7.35, PaCO2 > 45 mmHg), moderate-to-severe dyspnea with accessory muscle use, and RR > 25/min", "Only when intubation has failed", "Hypoxemia alone (PaO2 < 60 mmHg)"],
    correctIndex: 1,
    explanation: "GOLD AECOPD NIV indications: pH 7.25–7.35 with PaCO2 > 45 mmHg (acute hypercapnic respiratory failure), or moderate dyspnea with clinical signs of increased WOB. NIV reduces intubation rate by 65%, hospital mortality by 48%, and length of stay. Below pH 7.25, NIV can be tried but with low threshold to intubate. Hypoxemia alone without hypercapnia is not a primary NIV indication in COPD — controlled O2 and investigation of the cause is first."
  },
  {
    topicId: CRIT, difficulty: "easy",
    text: "Target SpO2 for oxygen therapy in AECOPD to avoid oxygen-induced hypercapnia is:",
    options: ["95–100%", "88–92% — sufficient to maintain adequate tissue oxygenation while avoiding the hypercapnia associated with supranormal oxygen delivery in COPD", "> 94%", "85–88%"],
    correctIndex: 1,
    explanation: "Controlled low-flow oxygen targeting SpO2 88–92% (or PaO2 60–65 mmHg) is the GOLD standard in AECOPD. Higher oxygen (SpO2 > 92%) risks oxygen-induced hypercapnia through Haldane effect and worsened V/Q mismatch. AVOID fixed high-concentration masks (≥ 35%) unless hypercapnia is already excluded. The BTS guideline: use a 24–28% Venturi mask; titrate by ABG."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Status asthmaticus management in a patient who fails initial bronchodilator therapy should include all of the following EXCEPT:",
    options: ["IV/oral systemic corticosteroids", "IV magnesium sulfate (2 g over 20 min) for bronchodilation in severe acute asthma", "Routine sedation without airway assessment", "Heliox (70:30) to reduce turbulent airway resistance if not improving"],
    correctIndex: 2,
    explanation: "Status asthmaticus management: (1) Continuous nebulized SABA (albuterol) ± ipratropium, (2) Systemic corticosteroids (IV methylprednisolone or oral prednisone), (3) IV magnesium sulfate (level A evidence) — blocks Ca²⁺-mediated bronchoconstriction, (4) Heliox for refractory cases to reduce WOB, (5) Consider ketamine for intubation (bronchodilating anesthetic). Routine sedation without airway protection is dangerous — it may suppress respiratory drive without securing the airway."
  },
  {
    topicId: CRIT, difficulty: "hard",
    text: "When mechanically ventilating a patient with severe acute asthma, the primary ventilation strategy is:",
    options: ["High RR to normalize PaCO2", "Controlled hypoventilation with low RR (8–12/min), long expiratory time (I:E ≥ 1:4), and tolerance of hypercapnia — to prevent dynamic hyperinflation and auto-PEEP in a patient with severe airflow obstruction", "High PEEP to stent airways open", "High FiO2 to overcome V/Q mismatch"],
    correctIndex: 1,
    explanation: "In severe asthma, airflow obstruction prevents rapid exhalation. High RR causes breath stacking → auto-PEEP → tension pneumothorax and cardiovascular collapse. Correct strategy: lowest RR compatible with pH > 7.20, long Ti:Te (1:4 or greater), low TV (5–7 mL/kg), minimal external PEEP (avoid adding to auto-PEEP). Accept PaCO2 50–70 mmHg (permissive hypercapnia) until bronchospasm resolves. PEEP in asthma is controversial — usually minimal (< 5 cmH₂O)."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Community-acquired pneumonia (CAP) severity assessment using the CURB-65 score includes all of the following parameters EXCEPT:",
    options: ["Confusion (new)", "Blood urea nitrogen (BUN) > 19 mg/dL", "CRP (C-reactive protein) level", "Respiratory rate ≥ 30/min, BP systolic < 90 or diastolic ≤ 60, Age ≥ 65"],
    correctIndex: 2,
    explanation: "CURB-65: Confusion (new), Urea > 7 mmol/L (BUN > 19 mg/dL), Respiratory rate ≥ 30, Blood pressure (SBP < 90 or DBP ≤ 60), Age ≥ 65. Score 0–1: outpatient, 2: hospital admission, ≥ 3: ICU consideration. CRP is not part of CURB-65 (though it may guide antibiotic duration). PSI/PORT score is an alternative but more complex. For RT: P/F ratio, hypoxemia severity, and need for O2/MV determine RT involvement."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Ventilator-Associated Pneumonia (VAP) is defined as pneumonia occurring:",
    options: ["Any time during mechanical ventilation", "≥ 48–72 hours after endotracheal intubation — distinguishing it from CAP or HAP; early-onset VAP (days 2–4) is usually caused by normal flora; late-onset (≥ 5 days) by MDR organisms (MRSA, Pseudomonas, Acinetobacter)", "Only after 7 days of ventilation", "After extubation"],
    correctIndex: 1,
    explanation: "VAP (per CDC NHSN/IDSA): new pneumonia ≥ 48h after intubation and MV. VAP-related organisms: early (< 5 days): S. pneumoniae, MSSA, H. influenzae, enteric GNR. Late (≥ 5 days): MDR organisms — MRSA, Pseudomonas aeruginosa, Acinetobacter baumannii, Enterobacteriaceae with extended-spectrum β-lactamases. RT-related prevention: oral decontamination, subglottic secretion drainage, HOB 30–45°, circuit not changed > 7 days."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Pulmonary embolism (PE) classic clinical triad includes:",
    options: ["Fever, cough, pleuritic chest pain", "Dyspnea (most common, 73%), pleuritic chest pain, and hemoptysis — though all three are present in < 30% of cases; most PEs present with dyspnea alone", "Hemoptysis, fever, and purulent sputum", "Hypoxemia, hypercapnia, and wheeze"],
    correctIndex: 1,
    explanation: "PE clinical presentation: dyspnea (most common, sudden onset), pleuritic chest pain (infarction), hemoptysis (pulmonary infarction), tachycardia, tachypnea. Massive PE: hypotension, syncope, cardiac arrest. ECG: sinus tachycardia (most common); S1Q3T3 in massive PE (right heart strain). ABG: hypoxemia, hypocapnia (hyperventilation), widened A-a gradient. CXR: often normal; Westermark sign (focal oligemia) or Hampton's hump (wedge infarct) are classic but rare."
  },
  {
    topicId: CRIT, difficulty: "hard",
    text: "Massive pulmonary embolism with hemodynamic instability (SBP < 90 mmHg) requires:",
    options: ["Anticoagulation alone with heparin infusion", "Immediate systemic thrombolysis (tPA 100 mg over 2 hours) or surgical embolectomy / catheter-directed therapy if thrombolysis is contraindicated — anticoagulation alone is insufficient for hemodynamic compromise", "CPAP at 10 cmH₂O", "Emergent bronchoscopy"],
    correctIndex: 1,
    explanation: "Massive PE (obstructive shock): acute cor pulmonale → RV failure → hemodynamic collapse. Treatment: (1) systemic thrombolysis (alteplase 100 mg/2h or 0.6 mg/kg for cardiac arrest), (2) surgical embolectomy for thrombolysis contraindicated or failure, (3) catheter-directed thrombolysis/mechanical thrombectomy. All patients also receive anticoagulation (UFH). Intubation should be avoided if possible (positive pressure reduces RV preload). VV-ECMO as rescue for cardiac arrest."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Pulmonary arterial hypertension (PAH) is defined as mean pulmonary arterial pressure (mPAP) of:",
    options: ["> 15 mmHg at rest", "≥ 25 mmHg at rest (new ESC/ERS 2022 guidelines have lowered this to > 20 mmHg with PVR > 2 WU)", "> 40 mmHg only", "> 35 mmHg for diagnosis"],
    correctIndex: 1,
    explanation: "Historic WHO definition: mPAP ≥ 25 mmHg at rest. Updated 2022 ESC/ERS guidelines define PH as mPAP > 20 mmHg. Pre-capillary PH additionally requires PCWP ≤ 15 mmHg and PVR > 2 Wood Units. PAH (Group 1) is idiopathic or caused by connective tissue disease, HIV, portal hypertension, drugs. RT significance: these patients on home O2 or prostacyclin therapy, requiring special management during hospitalization."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "In a patient with known severe pulmonary arterial hypertension who requires intubation, the highest risk during the intubation procedure is:",
    options: ["Hypoglycemia", "Acute RV failure and cardiovascular collapse — loss of intrinsic respiratory compensation (e.g., hyperventilation to reduce PVR), positive pressure increasing RV afterload, and hypoxemia or acidosis from apnea can precipitate acute cor pulmonale and arrest", "Bronchospasm", "Aspiration"],
    correctIndex: 1,
    explanation: "PAH patients are exquisitely sensitive to: hypoxia (increases PVR), hypercapnia/acidosis (pulmonary vasoconstriction), positive pressure ventilation (impedes RV output by increasing afterload), and vasodilating anesthetic agents (drops SVR → RV ischemia). Intubation should be performed by an experienced team with inhaled vasodilators immediately available, vasopressors running, and consideration of VA-ECMO backup. Mortality from intubation in severe PAH approaches 30%."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Cor pulmonale (right heart failure due to lung disease) on ECG shows:",
    options: ["Left axis deviation", "Right axis deviation (> +90°), P-pulmonale (tall peaked P wave > 2.5 mm in II), right bundle branch block pattern (RSR' in V1), and signs of right ventricular hypertrophy (R wave dominance in V1)", "ST elevation in V1–V4", "Left bundle branch block"],
    correctIndex: 1,
    explanation: "Cor pulmonale ECG: P-pulmonale (right atrial enlargement — tall peaked P in II, III, aVF > 2.5 mm), right axis deviation (> +90°), RVH pattern (R/S > 1 in V1, deep S in V5-V6), right bundle branch block (incomplete or complete). In acute cor pulmonale (massive PE): S1Q3T3, sinus tachycardia, RBBB. These changes reflect right heart pressure overload from chronically elevated PVR."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Tension pneumothorax causes cardiovascular collapse via:",
    options: ["Pulmonary hemorrhage", "Progressive ipsilateral lung compression and mediastinal shift — compressing the contralateral lung, kinking the superior vena cava, reducing venous return, and causing obstructive shock; tracheal deviation is a late sign", "Vagal reflex only", "Cardiac rupture"],
    correctIndex: 1,
    explanation: "Tension pneumothorax: pleural air accumulates under pressure (one-way valve mechanism). This: (1) compresses ipsilateral lung to zero, (2) shifts mediastinum contralaterally, (3) kinks/compresses SVC/IVC → decreased venous return → obstructive shock. Clinical: hypotension, absent breath sounds, JVD, tachycardia, hypoxemia, tracheal deviation (late, inconsistent). TX: immediate needle decompression (2nd ICS MCL) followed by chest tube. In intubated patients, sudden high PIP + hypotension = tension PTX until proven otherwise."
  },
  {
    topicId: CRIT, difficulty: "easy",
    text: "A patient develops sudden hypotension and absent breath sounds on the right with JVD while on mechanical ventilation. The immediate intervention is:",
    options: ["Urgent bronchoscopy", "Needle decompression of the right chest (2nd intercostal space, midclavicular line) followed by chest tube insertion — tension pneumothorax is a clinical diagnosis requiring immediate action, no time for CXR", "Increase PEEP to recruit the lung", "IV fluid bolus"],
    correctIndex: 1,
    explanation: "Tension pneumothorax in a ventilated patient is a life-threatening emergency. Signs: sudden hemodynamic deterioration, high PIP, unilateral absent breath sounds, JVD, tracheal deviation (late). DO NOT wait for CXR. Immediate needle decompression: 14-gauge needle, 2nd ICS, MCL, superior aspect of 3rd rib (avoids NVB). A rush of air confirms diagnosis. Follow immediately with chest tube (4th/5th ICS, anterior axillary line). Disconnect ventilator if needed to decompress."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Pleural effusion on a PA CXR becomes visible as blunting of the costophrenic angle when it reaches approximately:",
    options: ["50–75 mL", "150–200 mL — smaller amounts are detectable on lateral decubitus films (> 75 mL) or CT scan", "500 mL", "1,000 mL"],
    correctIndex: 1,
    explanation: "On a PA CXR, costophrenic angle blunting requires ~150–200 mL of pleural fluid. A lateral decubitus film detects as little as 75–100 mL (fluid layers along the dependent hemithorax). Ultrasound detects < 50 mL. CT is most sensitive. Large effusions (> 500 mL) cause hemidiaphragm obscuration; massive (> 1.5 L) causes mediastinal shift. Transudates (CHF, hypoalbuminemia) vs exudates (infection, malignancy) are differentiated by Light's criteria on thoracentesis."
  },
  {
    topicId: CRIT, difficulty: "hard",
    text: "Light's criteria for exudative pleural effusion require ONE of the following to be met:",
    options: ["LDH > 200 IU/L in the fluid alone", "Pleural/serum protein ratio > 0.5, OR pleural/serum LDH ratio > 0.6, OR pleural LDH > 2/3 the upper limit of normal serum LDH — meeting any one criterion = exudate", "Pleural glucose < 60 mg/dL", "pH < 7.30 in the fluid"],
    correctIndex: 1,
    explanation: "Light's criteria (1972): exudate if ANY of: (1) pleural fluid protein/serum protein > 0.5, (2) pleural fluid LDH/serum LDH > 0.6, (3) pleural fluid LDH > 2/3 upper limit of normal serum LDH. Sensitivity 98%, specificity 83% for exudates. 25% of transudates misclassified as exudates (especially CHF on diuretics) — use serum albumin − pleural albumin gradient (> 1.2 = transudate) as additional test. Low pH (< 7.20): complicated parapneumonic, requires drainage."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Surviving Sepsis Campaign bundles mandate that septic shock patients receive which interventions within the first 3 hours?",
    options: ["CT scan, central line, and immediate intubation", "Measurement of lactate, blood cultures before antibiotics, broad-spectrum antibiotics, and 30 mL/kg IV crystalloid bolus for hypotension or lactate ≥ 4 mmol/L", "Immediate vasopressors only", "Bronchoscopy and chest tube"],
    correctIndex: 1,
    explanation: "Surviving Sepsis Campaign 3-hour bundle (Hour-1 Bundle, updated 2018): (1) Measure lactate; remeasure if initial > 2 mmol/L, (2) Blood cultures before antibiotics (≥ 2 sets), (3) Broad-spectrum antibiotics (within 1 hour of recognition), (4) 30 mL/kg IV crystalloid if hypotension or lactate ≥ 4 mmol/L, (5) Vasopressors (norepinephrine first-line) if hypotension persists after fluids — MAP target ≥ 65 mmHg. RT role: O2 therapy, NIV/MV, airway management."
  },
  {
    topicId: CRIT, difficulty: "easy",
    text: "In septic shock, the vasopressor of first choice per Surviving Sepsis Campaign is:",
    options: ["Dopamine", "Norepinephrine (noradrenaline) — an α1/β1 agonist that increases SVR and MAP with less tachycardia than dopamine; preferred due to lower arrhythmia risk", "Epinephrine", "Phenylephrine"],
    correctIndex: 1,
    explanation: "Norepinephrine is the first-line vasopressor for septic shock. It increases SVR (via α1) and has some inotropic effect (β1), raising MAP effectively. Vasopressin (0.03–0.04 units/min) is added second to reduce norepinephrine dose. Epinephrine: second-line alternative, or for anaphylaxis. Dopamine: associated with higher arrhythmia rates and increased mortality vs. norepinephrine in septic shock (De Backer trial). Dobutamine: added for cardiogenic component (low CO, high PCWP)."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Transfusion-Related Acute Lung Injury (TRALI) presents after blood product transfusion as:",
    options: ["Gradual weight gain over 3 days", "Acute hypoxemia and bilateral pulmonary infiltrates within 6 hours of transfusion, without evidence of fluid overload — PCWP < 18 mmHg, meeting ARDS criteria", "Isolated fever without respiratory symptoms", "Hemolytic jaundice"],
    correctIndex: 1,
    explanation: "TRALI is the leading cause of transfusion-related mortality. Mechanism: donor anti-HLA or anti-neutrophil antibodies activate recipient neutrophils → capillary leak → noncardiogenic pulmonary edema. Presentation: acute onset (≤ 6h post-transfusion) hypoxemia (P/F < 300), bilateral CXR infiltrates, fever, hypotension — with PCWP ≤ 18 (distinguishing from TACO, which is cardiogenic). Treatment: supportive — O2, MV if needed. TACO (transfusion-associated circulatory overload): high PCWP, responds to diuretics."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Idiopathic pulmonary fibrosis (IPF) management with regard to oxygen therapy should aim for:",
    options: ["SpO2 88–92% (same as COPD)", "SpO2 ≥ 92% at rest and ≥ 88% during exertion — IPF patients have impaired gas exchange from fibrosis; high-flow O2 may be needed with exertion without hypercapnia risk", "No supplemental O2 until PaO2 < 55 mmHg even at rest", "100% FiO2 continuously"],
    correctIndex: 1,
    explanation: "IPF has a different physiology than COPD — reduced compliance and diffusion impairment with preserved airway mechanics (no hypercapnia risk from O2). Target SpO2 ≥ 92% at rest; ambulatory O2 is prescribed for exercise-induced desaturation (SpO2 ≤ 88% with exertion). Unlike COPD, high-flow O2 does not cause CO2 retention. Acute exacerbations of IPF (AE-IPF) carry > 50% mortality; MV often futile but may serve as bridge to transplant."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Drowning patients who require resuscitation should receive which intervention that is different from other cardiac arrest causes?",
    options: ["Chest compressions before airway management", "5 rescue breaths before beginning CPR — because drowning cardiac arrest is predominantly hypoxic, initial ventilation takes priority over compression-first protocols", "No epinephrine", "Immediate cardioversion"],
    correctIndex: 1,
    explanation: "Drowning is a hypoxic arrest — the airway is the problem. AHA/ERC guidelines for drowning: begin with 5 rescue breaths/ventilations before starting chest compressions (reversing the standard compression-first sequence). Remove the victim from water and begin resuscitation. HIFLO protocol: Highest priority to airway → Intubation when available → Fluid removal (Heimlich maneuver is NOT recommended — it delays ventilation and risks aspiration). Hypothermia from cold-water drowning can protect the brain."
  },
  {
    topicId: CRIT, difficulty: "hard",
    text: "Venovenous ECMO (VV-ECMO) for severe ARDS differs from venoarterial ECMO (VA-ECMO) in that VV-ECMO:",
    options: ["Provides both cardiac and respiratory support", "Provides only respiratory support (CO2 removal and oxygenation) without direct cardiac support — blood is drained from and returned to the venous circuit, while the heart still pumps oxygenated blood to the systemic circulation", "Has lower risk of recirculation", "Cannot be used for bridging to lung transplant"],
    correctIndex: 1,
    explanation: "VV-ECMO: blood drained from vena cava/RA, oxygenated by membrane lung, returned to RA/RV — the native heart pumps ECMO-oxygenated blood systemically. No direct cardiac support. Used for: severe ARDS (EOLIA), refractory hypoxemia, severe air leak, bridge to transplant. VA-ECMO: blood drained from venous, returned to arterial circulation (aorta) — bypasses both heart and lungs; used for cardiogenic shock, cardiac arrest, bridge to LVAD/transplant. VV-ECMO recirculation is a concern when inflow and outflow cannulas are close."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "A major difference between COPD and emphysema on PFTs is that emphysema specifically shows:",
    options: ["Normal DLCO", "Markedly reduced DLCO (diffusing capacity for CO) due to destruction of alveolar surface area and pulmonary capillary bed — while chronic bronchitis (COPD subtype) may have less DLCO reduction", "High DLCO", "Normal FEV1/FVC ratio"],
    correctIndex: 1,
    explanation: "Emphysema: destruction of alveolar walls → loss of surface area for gas exchange → markedly reduced DLCO (< 70% predicted, often < 50%). Chronic bronchitis (COPD, mucus hypersecretion/airway inflammation): DLCO may be normal or mildly reduced. Combined COPD has variable DLCO. DLCO is also reduced in: pulmonary fibrosis, PAH, pulmonary edema, severe anemia. DLCO is elevated in: polycythemia, intrapulmonary hemorrhage (alveolar hemorrhage — CO absorbed by RBCs in alveoli)."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "COVID-19 pneumonia with severe ARDS often requires prolonged prone positioning. Compared to classic ARDS, COVID-19 ARDS often presents initially with:",
    options: ["Normal compliance and high shunt (L-phenotype)", "Paradoxically preserved compliance (L-phenotype: low elastance, low recruitability, high dead space) in some patients despite severe hypoxemia — the so-called 'silent hypoxemia' or 'happy hypoxia' presentation", "High compliance with hypercapnia", "Normal PaO2 with high PaCO2"],
    correctIndex: 1,
    explanation: "Gattinoni et al. described two COVID-19 ARDS phenotypes: Type L (early): high compliance, low lung weight, low recruitability, high dead space — vasoplegia/micro-thrombosis causing V/Q mismatch without much atelectasis; Type H (late/severe): low compliance, high lung weight, high recruitability — classic ARDS. L-type: HFNC/prone awake may suffice; pushing high PEEP may over-distend. H-type: lung-protective MV + prone. The transition from L to H correlates with worsening mechanical ventilation outcomes."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Diaphragmatic dysfunction in ICU patients (ICU-acquired weakness, diaphragm atrophy) is primarily caused by:",
    options: ["High tidal volume ventilation only", "Controlled mechanical ventilation with complete diaphragmatic inactivity — even 18–69 hours of CMV causes rapid myofiber atrophy (ventilator-induced diaphragmatic dysfunction, VIDD) through autophagy and proteolysis, impairing weaning", "High PEEP settings", "Prone positioning"],
    correctIndex: 1,
    explanation: "VIDD (ventilator-induced diaphragmatic dysfunction): diaphragm atrophy begins within hours of CMV (when the diaphragm is completely unloaded). Mechanisms: autophagy, oxidative stress, ubiquitin-proteasome proteolysis. Diaphragm fiber cross-sectional area decreases ~6% per day of CMV. Prevention: allow spontaneous breathing (partial support modes) from early in MV course; avoid excessive sedation; consider diaphragm ultrasound to guide weaning (diaphragm thickening fraction as a predictor of SBT success)."
  },
  {
    topicId: CRIT, difficulty: "hard",
    text: "Smoke inhalation injury above the glottis (supraglottic) vs. below the glottis (subglottic) differ in that:",
    options: ["Both cause the same damage", "Supraglottic injury is thermally mediated (heat directly burns upper airway mucosa) — causing rapid edema and potential asphyxia, requiring early intubation; subglottic injury is chemical/toxicological (incomplete combustion products), causing tracheobronchitis, cast formation, and delayed effects", "Subglottic injury is always more severe", "Thermal injury occurs only in the lower airway"],
    correctIndex: 1,
    explanation: "Heat from inhalation is efficiently extracted in the upper airway — the glottis is rarely reached by direct heat. Supraglottic: thermal injury causes edema, hoarseness, stridor → early intubation before edema closes the airway. Subglottic: chemical injury from aldehydes, acrolein, CO, HCN — causes chemical tracheobronchitis, sloughing of mucosa, cast formation, bronchospasm. CO poisoning (normobaric or hyperbaric O2 treatment) and cyanide toxicity (hydroxocobalamin antidote) are specific systemic concerns."
  },
  {
    topicId: CRIT, difficulty: "easy",
    text: "Carbon monoxide (CO) poisoning treatment is high-flow 100% oxygen via non-rebreather mask because:",
    options: ["CO increases O2-carrying capacity and needs dilution", "100% O2 reduces CO half-life from ~5 hours (on room air) to ~60–90 minutes by competitively displacing CO from hemoglobin — accelerating carboxyhemoglobin elimination", "It reverses cyanide toxicity", "It prevents pulmonary edema"],
    correctIndex: 1,
    explanation: "CO binds hemoglobin with 200–250× higher affinity than O2. On room air, COHb half-life ~5 hours. On 100% NRB O2: ~60–90 min. On hyperbaric O2 (2.4–3 ATA): ~20–30 min. High FiO2 creates a high alveolar O2 gradient that competitively displaces CO from Hgb. Hyperbaric O2 (HBO) is indicated for: COHb > 25%, LOC, neurological deficits, cardiac involvement, or pregnancy. Also treats CO dissolved in tissues and promotes cellular respiration recovery."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Cystic fibrosis (CF) lung disease management includes all of the following EXCEPT:",
    options: ["DNase (dornase alfa) to reduce sputum viscosity", "Inhaled hypertonic saline to hydrate airway surface liquid", "Routine use of high-dose systemic corticosteroids long-term as the primary anti-inflammatory therapy", "CFTR modulator therapy (e.g., elexacaftor/tezacaftor/ivacaftor) for eligible genotypes"],
    correctIndex: 2,
    explanation: "CF management: (1) Airway clearance — ACTs, HFCWO, Flutter, PEP; (2) DNase (Pulmozyme) — cleaves extracellular DNA that increases sputum viscosity; (3) Hypertonic saline — rehydrates airway surface liquid, improves mucociliary clearance; (4) Azithromycin — long-term anti-inflammatory; (5) CFTR modulators (ivacaftor, lumacaftor/ivacaftor, elexacaftor/tezacaftor/ivacaftor) for specific mutations — dramatically improve lung function. Systemic corticosteroids are NOT used long-term in CF due to growth retardation and infection risk."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Oxygen toxicity (hyperoxia-induced lung injury) primarily occurs with FiO2 > 0.60 for more than:",
    options: ["1 hour", "24–48 hours — prolonged exposure to FiO2 > 0.6 causes reactive oxygen species-mediated damage to the alveolar-capillary membrane, progressing from tracheobronchitis to noncardiogenic pulmonary edema", "1 week", "12 hours only briefly"],
    correctIndex: 1,
    explanation: "Oxygen toxicity: FiO2 > 0.21 eventually exceeds antioxidant defenses. FiO2 0.5–0.6 for < 24h: generally safe. FiO2 > 0.6 for > 24–48h: risk of oxygen toxicity — free radical-mediated injury to alveolar cells (type I pneumocytes), surfactant inactivation, absorption atelectasis, inflammatory cell infiltration → ARDS-like picture. Absorption atelectasis occurs independently at any FiO2 > 0.5 where N2 is displaced. Use lowest FiO2 to achieve SpO2 ≥ 92–95%."
  },
  {
    topicId: CRIT, difficulty: "hard",
    text: "Acute exacerbation of idiopathic pulmonary fibrosis (AE-IPF) is characterized by:",
    options: ["Gradual worsening over months with normal CXR", "Acute (<1 month) unexplained worsening of dyspnea and hypoxemia on the background of known IPF, with new bilateral ground-glass opacities on CT not explained by infection, heart failure, or PE — associated with > 50% short-term mortality", "Reversible bronchospasm responsive to steroids", "Isolated pleural effusion"],
    correctIndex: 1,
    explanation: "AE-IPF criteria (2016 ATS Working Group): acute worsening/development of dyspnea within 30 days; CT with new bilateral ground-glass opacities ± consolidation superimposed on UIP pattern; not explained by infection (BAL negative), heart failure, PE, or other identifiable cause. Treatment: high-dose corticosteroids (evidence weak); supportive care; early palliative care discussion. Intubation/MV is controversial — ICU mortality > 80% for AE-IPF; consider as bridge to transplant only."
  },
  {
    topicId: CRIT, difficulty: "medium",
    text: "Norepinephrine-refractory septic shock unresponsive to high-dose vasopressors may respond to:",
    options: ["Adding dopamine as a third agent", "Hydrocortisone 200 mg/day IV (stress-dose steroids) — restores vascular responsiveness to catecholamines in relative adrenal insufficiency; also used with fludrocortisone in ACTH non-responders per APROCCHSS trial", "Removing all vasopressors and replacing with phenylephrine", "Increasing fluid infusion rate"],
    correctIndex: 1,
    explanation: "Stress-dose steroids (hydrocortisone 200–300 mg/day IV divided or infusion) are recommended in adult septic shock not responding to adequate fluids and vasopressors (norepinephrine ≥ 0.25 mcg/kg/min). Mechanism: cortisol restores adrenergic receptor sensitivity. ADRENAL trial: reduced time on vasopressors but no mortality benefit. APROCCHSS: added fludrocortisone (50 mcg/day), showed 90-day mortality benefit. Do not wait for cosyntropin test results."
  },
  {
    topicId: CRIT, difficulty: "easy",
    text: "The normal arterial blood gas values for a healthy adult at sea level are:",
    options: ["pH 7.25, PaCO2 55, PaO2 80", "pH 7.35–7.45, PaCO2 35–45 mmHg, PaO2 80–100 mmHg, HCO3⁻ 22–26 mEq/L, BE −2 to +2", "pH 7.50, PaCO2 30, PaO2 120", "pH 7.40, PaCO2 40, PaO2 60"],
    correctIndex: 1,
    explanation: "Normal ABG at sea level: pH 7.35–7.45 (mean 7.40), PaCO2 35–45 mmHg (mean 40), PaO2 80–100 mmHg, HCO3⁻ 22–26 mEq/L (mean 24), BE −2 to +2 mEq/L, SaO2 > 95%. PaO2 normally decreases with age: predicted PaO2 = 104 − (0.27 × age) mmHg. At high altitude: lower PaO2 (reduced PiO2), hyperventilation lowers PaCO2 (respiratory alkalosis), compensated metabolic acidosis (HCO3⁻ decreases). SpO2 does not substitute for PaO2 in assessing gas exchange adequacy."
  },
];

async function seedExpandedContent() {
  const client = await pool.connect();
  try {
    let inserted = 0;
    let skipped = 0;

    for (const q of questions) {
      const exists = await client.query(
        "SELECT 1 FROM questions WHERE topic_id = $1 AND text = $2",
        [q.topicId, q.text]
      );
      if (exists.rows.length > 0) {
        skipped++;
        continue;
      }
      await client.query(
        `INSERT INTO questions (topic_id, text, options, correct_index, explanation, difficulty)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [q.topicId, q.text, JSON.stringify(q.options), q.correctIndex, q.explanation, q.difficulty]
      );
      inserted++;
    }

    console.log(`✅ Done — inserted: ${inserted}, skipped (already exists): ${skipped}`);

    const counts = await client.query(
      "SELECT topic_id, COUNT(*) as count FROM questions GROUP BY topic_id ORDER BY topic_id"
    );
    console.log("\nQuestion counts per topic after seed:");
    for (const row of counts.rows) {
      console.log(`  Topic ${row.topic_id}: ${row.count} questions`);
    }
  } finally {
    client.release();
    await pool.end();
  }
}

seedExpandedContent().catch(console.error);
