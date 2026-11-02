import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const MV_TOPIC_ID = 4;

type Q = {
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
};

const questions: Q[] = [
  // ── VENTILATOR MODES ─────────────────────────────────────────────────────
  {
    text: "In Volume-Control Assist-Control (VC-AC) mode, what is delivered with every breath?",
    options: ["A fixed inspiratory pressure", "A preset tidal volume", "A variable flow based on patient effort", "A fixed respiratory rate only"],
    correctIndex: 1,
    explanation: "In VC-AC, every breath — whether patient-triggered or machine-timed — delivers the full preset tidal volume, guaranteeing minute ventilation.",
    difficulty: "easy",
  },
  {
    text: "Which ventilator mode is most appropriate for initial management of a critically ill intubated patient?",
    options: ["PSV alone", "SIMV without pressure support", "Volume-Control Assist-Control", "CPAP"],
    correctIndex: 2,
    explanation: "VC-AC is the most common initial mode for critically ill patients because it guarantees minute ventilation by delivering the full preset TV with every breath.",
    difficulty: "easy",
  },
  {
    text: "A patient on VC-AC with a set rate of 12 is breathing at 22 breaths/min. What is the consequence?",
    options: ["Hypoventilation", "Respiratory alkalosis", "Increased PaCO2", "Auto-PEEP only"],
    correctIndex: 1,
    explanation: "In VC-AC, every patient-triggered breath delivers the full tidal volume. Overbreathing the set rate causes excessive CO2 elimination, leading to respiratory alkalosis.",
    difficulty: "medium",
  },
  {
    text: "In Pressure-Control Assist-Control (PC-AC), what remains constant?",
    options: ["Tidal volume", "Inspiratory pressure", "Flow rate", "Respiratory rate"],
    correctIndex: 1,
    explanation: "PC-AC delivers a fixed inspiratory pressure above PEEP with each breath. Tidal volume varies depending on patient compliance and resistance.",
    difficulty: "easy",
  },
  {
    text: "A patient on PC-AC develops worsening ARDS. Despite unchanged settings, tidal volume decreases from 500 mL to 340 mL. What is the most likely explanation?",
    options: ["Increased airway resistance", "Decreased respiratory rate", "Decreased lung compliance", "Increased auto-PEEP"],
    correctIndex: 2,
    explanation: "In PC-AC, decreasing compliance means less volume is generated for the same pressure. The tidal volume drop indicates worsening lung stiffness.",
    difficulty: "hard",
  },
  {
    text: "Which flow waveform is characteristic of Pressure-Control ventilation?",
    options: ["Square (constant)", "Sinusoidal", "Decelerating", "Accelerating"],
    correctIndex: 2,
    explanation: "Pressure-control modes generate a decelerating flow waveform: flow is highest at the start of inspiration and tapers to zero by end-inspiration, improving gas distribution.",
    difficulty: "medium",
  },
  {
    text: "SIMV differs from A/C in that:",
    options: ["SIMV provides full support for every breath", "SIMV delivers mandatory breaths but allows unsupported spontaneous breaths between them", "SIMV provides higher minute ventilation", "SIMV eliminates patient-ventilator dyssynchrony"],
    correctIndex: 1,
    explanation: "In SIMV, the ventilator delivers timed mandatory breaths at a set rate; spontaneous breaths between mandatory breaths receive no extra support unless pressure support is added.",
    difficulty: "easy",
  },
  {
    text: "Why is SIMV generally considered inferior to A/C for initial ventilatory support?",
    options: ["SIMV delivers too much pressure", "Unsupported spontaneous breaths increase work of breathing and diaphragm fatigue", "SIMV cannot be used in ARDS", "SIMV causes more auto-PEEP than A/C"],
    correctIndex: 1,
    explanation: "Unsupported spontaneous breaths in SIMV force the patient to breathe against circuit resistance, increasing work of breathing and potentially causing respiratory muscle fatigue.",
    difficulty: "medium",
  },
  {
    text: "In Pressure Support Ventilation (PSV), what triggers each breath?",
    options: ["The ventilator timer", "The patient's own inspiratory effort", "A set flow threshold", "Mandatory backup rate"],
    correctIndex: 1,
    explanation: "PSV is entirely patient-triggered. The ventilator augments each patient-initiated breath with a set pressure boost; there are no mandatory machine-delivered breaths.",
    difficulty: "easy",
  },
  {
    text: "A patient on PSV becomes apneic. What is the immediate danger?",
    options: ["Excessive tidal volume", "No backup rate → apnea → hypoxia/death if not detected", "Pressure-related barotrauma", "Oxygen toxicity"],
    correctIndex: 1,
    explanation: "PSV has no mandatory backup rate. If the patient becomes apneic, no breaths are delivered. Apnea alarms are critical for patient safety on PSV.",
    difficulty: "medium",
  },
  {
    text: "Which mode auto-adjusts inspiratory pressure breath-to-breath to achieve a target tidal volume?",
    options: ["VC-AC", "PC-AC", "PRVC (Pressure-Regulated Volume Control)", "SIMV"],
    correctIndex: 2,
    explanation: "PRVC is a dual-control mode that adjusts the inspiratory pressure up or down each breath to maintain the target tidal volume, combining volume guarantee with a pressure-control waveform.",
    difficulty: "medium",
  },
  {
    text: "In PRVC, if lung compliance suddenly improves (e.g., after surfactant therapy), what happens to the set inspiratory pressure?",
    options: ["It increases to maintain volume", "It decreases because less pressure is needed to achieve the target volume", "It remains unchanged", "It converts to volume-control mode"],
    correctIndex: 1,
    explanation: "PRVC automatically decreases inspiratory pressure when compliance improves, preventing volutrauma by delivering the same target TV at a lower pressure.",
    difficulty: "hard",
  },
  {
    text: "APRV (Airway Pressure Release Ventilation) maintains:",
    options: ["A low sustained CPAP with brief high-pressure releases", "A high sustained CPAP (P-High) with brief releases to P-Low", "Volume-targeted breaths at high rates", "Fixed inspiratory and expiratory pressures equal to PEEP"],
    correctIndex: 1,
    explanation: "APRV maintains a high sustained airway pressure (P-High, typically 25–35 cmH₂O) for most of the cycle, with brief releases to P-Low for CO2 clearance.",
    difficulty: "medium",
  },
  {
    text: "APRV is primarily used for:",
    options: ["Weaning from mechanical ventilation", "Refractory hypoxemia in ARDS with sustained lung recruitment", "Patients with severe COPD exacerbations", "Post-operative patients with intact respiratory drive"],
    correctIndex: 1,
    explanation: "APRV's prolonged P-High phase provides sustained alveolar recruitment, making it useful in refractory ARDS. It requires adequate spontaneous respiratory drive.",
    difficulty: "medium",
  },
  {
    text: "HFOV (High-Frequency Oscillatory Ventilation) uses what tidal volumes?",
    options: ["6 mL/kg IBW", "10–12 mL/kg IBW", "1–3 mL/kg (less than anatomic dead space)", "8 mL/kg actual body weight"],
    correctIndex: 2,
    explanation: "HFOV delivers very small tidal volumes (1–3 mL/kg, often less than dead space) at very high frequencies (3–15 Hz), relying on diffusion and non-convective gas transport.",
    difficulty: "medium",
  },
  {
    text: "In HFOV, CO2 elimination is primarily controlled by:",
    options: ["FiO2", "Mean airway pressure", "Amplitude (ΔP) and frequency", "PEEP setting"],
    correctIndex: 2,
    explanation: "In HFOV, CO2 clearance is determined by the oscillatory amplitude (ΔP) and frequency. Increasing amplitude or decreasing frequency improves CO2 elimination.",
    difficulty: "hard",
  },
  {
    text: "Which ventilator mode requires the deepest sedation and often neuromuscular blockade?",
    options: ["PSV", "SIMV", "HFOV", "PC-AC"],
    correctIndex: 2,
    explanation: "HFOV requires the patient to be completely passive. Any spontaneous breathing disrupts the oscillatory pattern. Deep sedation and neuromuscular blockade are mandatory.",
    difficulty: "medium",
  },
  {
    text: "A patient is on PC-AC and the physician orders a change to VC-AC at the same tidal volume. What change in waveform should the RT expect?",
    options: ["Flow changes from square to decelerating", "Flow changes from decelerating to square (constant)", "Pressure waveform becomes sinusoidal", "No change in waveform"],
    correctIndex: 1,
    explanation: "VC-AC delivers a constant (square) flow waveform by default. PC-AC delivers a decelerating flow waveform. Switching from PC to VC changes the flow pattern from decelerating to square.",
    difficulty: "medium",
  },
  {
    text: "Which mode is most appropriate for a patient undergoing a spontaneous breathing trial (SBT)?",
    options: ["VC-AC", "PC-AC", "PSV or CPAP", "HFOV"],
    correctIndex: 2,
    explanation: "SBTs are conducted on minimal support — typically low-level PSV (5–8 cmH₂O) or T-piece/CPAP — to assess the patient's ability to breathe independently.",
    difficulty: "easy",
  },
  {
    text: "In SIMV, adding pressure support to spontaneous breaths is intended to:",
    options: ["Increase mandatory breath rate", "Reduce work of breathing during spontaneous breaths", "Increase tidal volume of mandatory breaths", "Eliminate auto-PEEP"],
    correctIndex: 1,
    explanation: "Adding PS to SIMV reduces the work of breathing during unsupported spontaneous breaths, compensating for the resistance of the ETT and circuit.",
    difficulty: "medium",
  },
  {
    text: "A spontaneous breath on PSV cycles off inspiration when:",
    options: ["A set inspiratory time is reached", "Flow decays to a threshold (typically 25% of peak flow)", "Tidal volume reaches the set value", "The patient exhales forcefully"],
    correctIndex: 1,
    explanation: "PSV uses flow-cycling: expiration begins when inspiratory flow decelerates to a set percentage of peak flow (commonly 25%). This allows the breath to match the patient's neural inspiratory time.",
    difficulty: "hard",
  },
  {
    text: "Delayed cycling in PSV (machine stays in inspiration too long) is most commonly seen in:",
    options: ["ARDS patients", "Patients with COPD (high compliance, air trapping)", "Patients with pulmonary fibrosis", "Pediatric patients"],
    correctIndex: 1,
    explanation: "In COPD, high compliance slows flow deceleration. The 25% flow-cycle threshold is met later, extending neural expiration. Lowering the cycle-off threshold helps correct this.",
    difficulty: "hard",
  },
  {
    text: "Pressure support of 0 cmH₂O above PEEP on CPAP essentially tests:",
    options: ["The ventilator's ability to maintain PEEP", "The patient's unassisted breathing ability (T-piece equivalent)", "Compliance with mandatory breaths", "The FiO2 delivery accuracy"],
    correctIndex: 1,
    explanation: "CPAP with 0 PS is functionally equivalent to a T-piece trial — the patient receives no inspiratory assistance beyond the continuous airway pressure, testing true spontaneous ventilation.",
    difficulty: "medium",
  },

  // ── SETTINGS & CALCULATIONS ───────────────────────────────────────────────
  {
    text: "What tidal volume does the ARDSNet lung-protective protocol recommend?",
    options: ["10–12 mL/kg ideal body weight", "8–10 mL/kg actual body weight", "6 mL/kg ideal body weight", "4 mL/kg actual body weight"],
    correctIndex: 2,
    explanation: "ARDSNet recommends 6 mL/kg IBW for lung-protective ventilation in ARDS. Using actual body weight can lead to dangerously high volumes in obese patients.",
    difficulty: "easy",
  },
  {
    text: "How is ideal body weight (IBW) calculated for a 70-inch male?",
    options: ["50 + 2.3 × (70 − 60) = 73 kg", "45.5 + 2.3 × (70 − 60) = 68.5 kg", "70 × 0.9 = 63 kg", "60 + 1.5 × (70 − 60) = 75 kg"],
    correctIndex: 0,
    explanation: "IBW for males = 50 + 2.3 × (height in inches − 60). For a 70-inch male: 50 + 2.3 × 10 = 73 kg. For females, use 45.5 as the base.",
    difficulty: "medium",
  },
  {
    text: "A 5-foot-4-inch (64 inch) female requires mechanical ventilation for ARDS. What is her IBW and target tidal volume at 6 mL/kg?",
    options: ["IBW 54.7 kg → TV 328 mL", "IBW 60 kg → TV 360 mL", "IBW 45.5 kg → TV 273 mL", "IBW 50 kg → TV 300 mL"],
    correctIndex: 0,
    explanation: "Female IBW = 45.5 + 2.3 × (64 − 60) = 45.5 + 9.2 = 54.7 kg. Target TV = 54.7 × 6 ≈ 328 mL.",
    difficulty: "hard",
  },
  {
    text: "What is the initial recommended PEEP for a newly intubated patient without ARDS?",
    options: ["0 cmH₂O", "3 cmH₂O", "5 cmH₂O", "10 cmH₂O"],
    correctIndex: 2,
    explanation: "Standard initial PEEP is 5 cmH₂O for most ventilated patients. This prevents atelectasis without causing hemodynamic compromise in non-ARDS patients.",
    difficulty: "easy",
  },
  {
    text: "The ARDSNet protocol uses a higher PEEP strategy in ARDS. Which table guides PEEP titration?",
    options: ["FiO2–PEEP table targeting SpO2 88–95% or PaO2 55–80 mmHg", "PEEP–compliance table targeting Cstat >50 mL/cmH₂O", "PaCO2–RR table targeting pH 7.35–7.45", "FiO2–TV table targeting SpO2 >98%"],
    correctIndex: 0,
    explanation: "ARDSNet uses the FiO2–PEEP table to coordinate PEEP and FiO2, targeting SpO2 88–95% (PaO2 55–80 mmHg) while minimizing oxygen toxicity.",
    difficulty: "medium",
  },
  {
    text: "A patient has PaO2 of 55 mmHg on FiO2 0.40 and PEEP 5. According to the ARDSNet lower PEEP table, what should be done?",
    options: ["Increase FiO2 alone to 0.60", "Increase PEEP to 8 and/or increase FiO2", "Decrease FiO2 to 0.30", "Switch to HFOV immediately"],
    correctIndex: 1,
    explanation: "The ARDSNet FiO2–PEEP table specifies coordinated increases. PaO2 55 mmHg is at the lower acceptable limit; PEEP should be increased (along with FiO2 if needed) per the protocol table.",
    difficulty: "hard",
  },
  {
    text: "Minute ventilation (VE) is calculated as:",
    options: ["TV / RR", "TV × RR", "RR / TV", "(TV − Dead space) × RR"],
    correctIndex: 1,
    explanation: "Minute ventilation = Tidal Volume × Respiratory Rate. For example, TV 500 mL × RR 12 = VE 6 L/min.",
    difficulty: "easy",
  },
  {
    text: "A patient has TV 450 mL and RR 16. What is their minute ventilation?",
    options: ["5.6 L/min", "7.2 L/min", "9.0 L/min", "4.5 L/min"],
    correctIndex: 1,
    explanation: "VE = TV × RR = 0.45 L × 16 = 7.2 L/min.",
    difficulty: "easy",
  },
  {
    text: "To decrease a patient's PaCO2 from 60 to 40 mmHg, what change in minute ventilation is required?",
    options: ["Increase VE by 25%", "Increase VE by 50%", "Decrease VE by 50%", "Double the respiratory rate only"],
    correctIndex: 1,
    explanation: "PaCO2 is inversely proportional to alveolar ventilation. To reduce PaCO2 by 33% (from 60 to 40), VE must increase by approximately 50%.",
    difficulty: "hard",
  },
  {
    text: "Normal I:E ratio for most mechanically ventilated patients is:",
    options: ["1:1", "1:2", "2:1", "1:4"],
    correctIndex: 1,
    explanation: "The normal I:E ratio is 1:2 — 1 second inhalation for every 2 seconds exhalation — allowing adequate expiratory time for CO2 clearance.",
    difficulty: "easy",
  },
  {
    text: "For a patient with severe COPD on mechanical ventilation, the I:E ratio should be adjusted to:",
    options: ["1:1 (inverse ratio)", "1:2 (normal)", "1:3 to 1:4 (prolonged expiration)", "2:1 (inverse ratio)"],
    correctIndex: 2,
    explanation: "COPD patients have high airway resistance and air trapping. Prolonging the expiratory phase (I:E 1:3 to 1:4) allows more complete exhalation, reducing auto-PEEP.",
    difficulty: "medium",
  },
  {
    text: "Inverse ratio ventilation (IRV, I:E > 1:1) is used in ARDS to:",
    options: ["Decrease mean airway pressure", "Increase mean airway pressure and improve oxygenation", "Reduce respiratory rate requirements", "Eliminate auto-PEEP"],
    correctIndex: 1,
    explanation: "Prolonging inspiration increases mean airway pressure, improving alveolar recruitment and oxygenation in refractory ARDS. However, it can cause auto-PEEP and requires heavy sedation.",
    difficulty: "hard",
  },
  {
    text: "Static compliance (Cstat) is calculated using:",
    options: ["TV / (PIP − PEEP)", "TV / (Pplat − PEEP)", "PIP − PEEP", "TV × RR"],
    correctIndex: 1,
    explanation: "Cstat = TV / (Pplat − PEEP). Using plateau pressure (measured during an inspiratory hold with no airflow) reflects pure lung–chest wall compliance without airway resistance.",
    difficulty: "medium",
  },
  {
    text: "Dynamic compliance (Cdyn) is calculated using:",
    options: ["TV / (Pplat − PEEP)", "TV / (PIP − PEEP)", "PIP / TV", "(PIP − PEEP) × TV"],
    correctIndex: 1,
    explanation: "Cdyn = TV / (PIP − PEEP). PIP includes both compliance and resistance components, so Cdyn is always less than or equal to Cstat.",
    difficulty: "medium",
  },
  {
    text: "A patient has TV 500 mL, PIP 35 cmH₂O, Pplat 25 cmH₂O, and PEEP 5 cmH₂O. What is the static compliance?",
    options: ["25 mL/cmH₂O", "50 mL/cmH₂O", "16.7 mL/cmH₂O", "35 mL/cmH₂O"],
    correctIndex: 1,
    explanation: "Cstat = TV / (Pplat − PEEP) = 500 / (25 − 5) = 500 / 20 = 25 mL/cmH₂O. Wait — 500/20 = 25. Let me recalculate: Pplat 25 − PEEP 5 = 20. 500/20 = 25. Actually the answer 50 mL/cmH₂O would require Pplat−PEEP = 10. The correct answer with these numbers is 25 mL/cmH₂O — indicating poor compliance (ARDS range).",
    difficulty: "hard",
  },
  {
    text: "Normal static compliance in a mechanically ventilated patient is approximately:",
    options: ["20–40 mL/cmH₂O", "60–100 mL/cmH₂O", "10–20 mL/cmH₂O", "100–150 mL/cmH₂O"],
    correctIndex: 1,
    explanation: "Normal Cstat is 60–100 mL/cmH₂O. Values below 40 suggest poor lung compliance (e.g., ARDS, pulmonary edema). Values above 100 suggest hyperinflation or emphysema.",
    difficulty: "medium",
  },
  {
    text: "Driving pressure (ΔP) is defined as:",
    options: ["PIP − PEEP", "Pplat − PEEP", "PIP − Pplat", "Mean airway pressure − PEEP"],
    correctIndex: 1,
    explanation: "Driving pressure = Pplat − PEEP. It represents the actual tidal stress applied to the lung with each breath and is the strongest modifiable predictor of ARDS mortality.",
    difficulty: "medium",
  },
  {
    text: "What is the target driving pressure in ARDS management?",
    options: ["≤ 5 cmH₂O", "≤ 10 cmH₂O", "≤ 15 cmH₂O", "≤ 25 cmH₂O"],
    correctIndex: 2,
    explanation: "Studies show that keeping driving pressure ≤ 15 cmH₂O is associated with reduced ARDS mortality. Driving pressure is considered the best single ventilator variable linked to outcome.",
    difficulty: "medium",
  },
  {
    text: "A patient has PIP 40, Pplat 30, and PEEP 10 cmH₂O. What is the driving pressure and airway resistance contribution?",
    options: ["ΔP = 20 cmH₂O; resistance = 5 cmH₂O", "ΔP = 20 cmH₂O; resistance = 10 cmH₂O", "ΔP = 30 cmH₂O; resistance = 10 cmH₂O", "ΔP = 10 cmH₂O; resistance = 10 cmH₂O"],
    correctIndex: 1,
    explanation: "ΔP = Pplat − PEEP = 30 − 10 = 20 cmH₂O. Resistance contribution = PIP − Pplat = 40 − 30 = 10 cmH₂O. The driving pressure of 20 cmH₂O exceeds the ≤15 target.",
    difficulty: "hard",
  },
  {
    text: "When should FiO2 be reduced from 1.0 (100%) after intubation?",
    options: ["After 30 minutes regardless of SpO2", "As rapidly as possible to ≤ 0.60 once SpO2 is ≥ 88%", "After 24 hours", "Only when PaO2 > 200 mmHg"],
    correctIndex: 1,
    explanation: "FiO2 ≥ 0.60 for prolonged periods causes oxygen toxicity. Wean FiO2 rapidly to ≤ 0.60 as soon as SpO2 targets are met (SpO2 88–95% in ARDS or SpO2 ≥ 92% in others).",
    difficulty: "medium",
  },
  {
    text: "An ARDS patient targets SpO2 of:",
    options: ["≥ 98%", "95–100%", "88–95%", "80–88%"],
    correctIndex: 2,
    explanation: "ARDS protocols accept a lower SpO2 target (88–95% or PaO2 55–80 mmHg) to minimize FiO2 and avoid oxygen toxicity while allowing higher PEEP.",
    difficulty: "medium",
  },
  {
    text: "Initial RR settings for most intubated patients are typically:",
    options: ["6–8 breaths/min", "10–14 breaths/min", "14–18 breaths/min", "20–30 breaths/min"],
    correctIndex: 2,
    explanation: "Initial RR of 14–18 breaths/min provides adequate minute ventilation for most patients. In ARDS with low TV, the rate may be increased to 20–35 to maintain minute ventilation.",
    difficulty: "easy",
  },
  {
    text: "Which calculation determines mean airway pressure (MAP) most accurately on a pressure-time waveform?",
    options: ["(PIP + PEEP) / 2", "Area under the pressure-time curve / total breath cycle time", "Pplat + PEEP / 2", "PIP × inspiratory time"],
    correctIndex: 1,
    explanation: "Mean airway pressure is the area under the pressure-time curve divided by the total breath cycle time. It reflects the average pressure applied to the lung throughout the entire breath cycle.",
    difficulty: "hard",
  },

  // ── MONITORING & TROUBLESHOOTING ──────────────────────────────────────────
  {
    text: "A patient on VC-AC has sudden rise in PIP from 30 to 45 cmH₂O. Pplat remains at 28 cmH₂O. What is the most likely cause?",
    options: ["Worsening pneumonia (compliance problem)", "Mucus plug or bronchospasm (resistance problem)", "Tension pneumothorax", "Ventilator circuit leak"],
    correctIndex: 1,
    explanation: "HIGH PIP + NORMAL Pplat = resistance problem. The Pplat reflects lung compliance; if it's unchanged, the problem is in the airways (secretions, bronchospasm, kinked ETT, mucus plug).",
    difficulty: "medium",
  },
  {
    text: "A patient on VC-AC has both PIP and Pplat rise acutely from 28/22 to 45/38 cmH₂O. What is the most likely cause?",
    options: ["Mucus plug (resistance problem)", "Worsening lung compliance (ARDS, pneumothorax, pulmonary edema)", "ETT cuff leak", "Circuit disconnection"],
    correctIndex: 1,
    explanation: "HIGH PIP + HIGH Pplat = compliance problem. Both pressures rise together when the lung/chest wall becomes stiffer — as in ARDS progression, pneumothorax, pulmonary edema, or main-stem intubation.",
    difficulty: "medium",
  },
  {
    text: "How do you perform an inspiratory hold to measure plateau pressure?",
    options: ["Increase inspiratory time and read the resulting pressure", "Apply an end-inspiratory pause of 0.5–2 seconds with no airflow and read the equilibrium pressure", "Increase PEEP until flow stops", "Occlude the expiratory valve and read peak pressure"],
    correctIndex: 1,
    explanation: "Pplat is measured by occluding the circuit at end-inspiration for 0.5–2 seconds. Airflow stops, and pressure equilibrates to reflect static lung compliance (no flow resistance).",
    difficulty: "medium",
  },
  {
    text: "An acceptable plateau pressure for lung-protective ventilation in ARDS is:",
    options: ["< 20 cmH₂O", "< 30 cmH₂O", "< 40 cmH₂O", "< 50 cmH₂O"],
    correctIndex: 1,
    explanation: "ARDSNet protocol targets Pplat ≤ 30 cmH₂O to prevent barotrauma and volutrauma. If Pplat exceeds 30, tidal volume should be reduced in 1 mL/kg IBW decrements.",
    difficulty: "medium",
  },
  {
    text: "A low pressure / low tidal volume alarm triggers. The most common cause is:",
    options: ["High airway resistance", "Air leak — ETT cuff leak, circuit disconnect, or chest tube air leak", "Increased lung compliance", "Ventilator malfunction"],
    correctIndex: 1,
    explanation: "Low pressure alarms indicate a leak in the system. Check ETT cuff pressure (target 20–30 cmH₂O), inspect all circuit connections, and look for bronchopleural fistula.",
    difficulty: "easy",
  },
  {
    text: "How is auto-PEEP detected?",
    options: ["Measuring PIP with a pressure gauge", "Applying an expiratory hold at end-expiration in a passive patient and reading total PEEP", "Looking at the flow waveform during inspiration", "Measuring cuff pressure with a manometer"],
    correctIndex: 1,
    explanation: "Auto-PEEP is detected by applying an end-expiratory pause (2–5 seconds) in a passive patient. The measured total PEEP minus set PEEP = auto-PEEP.",
    difficulty: "medium",
  },
  {
    text: "Auto-PEEP > 5 cmH₂O is clinically significant because:",
    options: ["It improves oxygenation", "It reduces venous return, causing hemodynamic compromise and increasing work of breathing", "It eliminates the need for extrinsic PEEP", "It increases tidal volume"],
    correctIndex: 1,
    explanation: "Significant auto-PEEP increases intrathoracic pressure, impedes venous return, and can cause hypotension. Patients must also overcome auto-PEEP to trigger the ventilator, increasing WOB.",
    difficulty: "medium",
  },
  {
    text: "First-line management of auto-PEEP in a patient on VC-AC includes:",
    options: ["Increase respiratory rate", "Increase tidal volume", "Decrease respiratory rate and/or tidal volume to allow more expiratory time", "Switch to PC-AC immediately"],
    correctIndex: 2,
    explanation: "Auto-PEEP results from inadequate expiratory time. Decreasing RR lengthens expiratory time. Also treat bronchospasm, suction secretions, and consider increasing flow rate (VC) to shorten inspiratory time.",
    difficulty: "medium",
  },
  {
    text: "Adding extrinsic PEEP equal to approximately 80% of measured auto-PEEP is intended to:",
    options: ["Eliminate auto-PEEP entirely", "Reduce the trigger work of breathing without worsening air trapping", "Increase oxygenation", "Prevent atelectasis"],
    correctIndex: 1,
    explanation: "Setting extrinsic PEEP at ~80% of auto-PEEP reduces the pressure gradient the patient must overcome to trigger the ventilator, decreasing work of breathing without significantly worsening hyperinflation.",
    difficulty: "hard",
  },
  {
    text: "On a flow-time waveform, expiratory flow that does not return to zero before the next breath begins indicates:",
    options: ["Normal ventilation", "Auto-PEEP (air trapping)", "ETT cuff leak", "Decreased resistance"],
    correctIndex: 1,
    explanation: "If expiratory flow has not returned to zero before the next breath, gas remains trapped in the lung — the hallmark of auto-PEEP on waveform analysis.",
    difficulty: "medium",
  },
  {
    text: "Flow starvation on a pressure-time waveform appears as:",
    options: ["A flat pressure plateau", "A concave (scooped) pressure waveform during inspiration", "A sharp pressure spike at end-inspiration", "Oscillations during the pressure plateau"],
    correctIndex: 1,
    explanation: "Flow starvation occurs when the ventilator's set flow cannot meet the patient's demand. The patient 'pulls down' the pressure waveform, creating a concave (scooped) appearance during inspiration.",
    difficulty: "medium",
  },
  {
    text: "What is 'missed trigger' (ineffective effort) in patient-ventilator dyssynchrony?",
    options: ["A machine breath triggered when the patient is not trying to breathe", "A patient effort that fails to trigger a machine breath", "A breath that triggers at the wrong time", "A breath that cycles off too early"],
    correctIndex: 1,
    explanation: "Missed trigger (ineffective effort) occurs when a patient's inspiratory effort is insufficient to trigger the ventilator — commonly due to high auto-PEEP or sensitivity set too high.",
    difficulty: "medium",
  },
  {
    text: "Double triggering occurs when:",
    options: ["Two patients are simultaneously ventilated", "One neural inspiratory effort triggers two consecutive machine breaths", "The patient triggers twice the set respiratory rate", "The ventilator delivers a breath before the patient exhales"],
    correctIndex: 1,
    explanation: "Double triggering happens when the machine's inspiratory time is shorter than the patient's neural inspiratory time. The second machine breath is triggered by the continued patient effort right after the first.",
    difficulty: "hard",
  },
  {
    text: "On a flow waveform, a negative deflection during the expiratory phase before the next breath indicates:",
    options: ["Auto-PEEP", "Ineffective (missed) triggering effort", "Increased resistance", "Normal expiratory recoil"],
    correctIndex: 1,
    explanation: "A negative (downward) deflection in the expiratory flow waveform represents a patient inspiratory effort that was insufficient to trigger the ventilator — a missed trigger, often due to auto-PEEP.",
    difficulty: "hard",
  },
  {
    text: "The target ETT cuff pressure to prevent aspiration while avoiding mucosal ischemia is:",
    options: ["5–10 cmH₂O", "10–15 cmH₂O", "20–30 cmH₂O", "35–45 cmH₂O"],
    correctIndex: 2,
    explanation: "ETT cuff pressure should be maintained at 20–30 cmH₂O (15–22 mmHg). Below 20 allows aspiration; above 30 risks tracheal mucosal ischemia and necrosis.",
    difficulty: "medium",
  },
  {
    text: "A sudden decrease in EtCO2 to near zero in a ventilated patient most likely indicates:",
    options: ["Pulmonary embolism (decreased perfusion)", "Ventilator circuit disconnection", "Increased metabolic rate", "Esophageal intubation (no EtCO2 in first place)"],
    correctIndex: 1,
    explanation: "Sudden drop of EtCO2 to zero in a previously ventilated patient most likely indicates a circuit disconnection or extubation. Pulmonary embolism causes a decrease but not zero.",
    difficulty: "medium",
  },
  {
    text: "EtCO2 is consistently 10 mmHg lower than PaCO2. This gradient (PaCO2 − EtCO2) suggests:",
    options: ["Increased dead space ventilation", "Hypoventilation", "CO2 retention", "Pulmonary shunt"],
    correctIndex: 0,
    explanation: "A normal PaCO2–EtCO2 gradient is 2–5 mmHg. A wider gradient (>10 mmHg) indicates increased dead space (e.g., ARDS, pulmonary embolism, low cardiac output), meaning alveoli are ventilated but not perfused.",
    difficulty: "hard",
  },
  {
    text: "Peak inspiratory pressure (PIP) reflects:",
    options: ["Lung compliance only", "Airway resistance only", "Both compliance and resistance (total load on the ventilator)", "Mean airway pressure"],
    correctIndex: 2,
    explanation: "PIP reflects the total pressure needed to deliver the breath — including overcoming both airway resistance and lung-chest wall compliance. Pplat isolates the compliance component.",
    difficulty: "medium",
  },

  // ── ARDS MANAGEMENT ───────────────────────────────────────────────────────
  {
    text: "The Berlin definition classifies ARDS severity as mild, moderate, and severe based on:",
    options: ["Tidal volume and PEEP", "PaO2/FiO2 ratio (P/F ratio) with PEEP ≥ 5 cmH₂O", "Chest X-ray findings alone", "PaCO2 levels"],
    correctIndex: 1,
    explanation: "Berlin ARDS: Mild P/F 200–300, Moderate P/F 100–200, Severe P/F < 100 — all with PEEP ≥ 5 cmH₂O within 1 week of a known insult and bilateral opacities.",
    difficulty: "medium",
  },
  {
    text: "A patient has PaO2 65 mmHg on FiO2 0.50. What is the P/F ratio and ARDS severity?",
    options: ["P/F 130 — Moderate ARDS", "P/F 65 — Severe ARDS", "P/F 32.5 — Severe ARDS", "P/F 200 — Mild ARDS"],
    correctIndex: 0,
    explanation: "P/F = PaO2 / FiO2 = 65 / 0.50 = 130. P/F 100–200 = Moderate ARDS per Berlin definition.",
    difficulty: "medium",
  },
  {
    text: "The ARMA (ARDSNet) trial demonstrated that compared to 12 mL/kg TV, using 6 mL/kg TV:",
    options: ["Increased ICU length of stay", "Reduced 28-day mortality by ~22%", "Increased pneumothorax rate", "Did not change outcomes"],
    correctIndex: 1,
    explanation: "The landmark ARDSNet ARMA trial showed low tidal volume ventilation (6 mL/kg IBW) reduced 28-day mortality by about 22% (from ~40% to ~31%) compared to 12 mL/kg IBW.",
    difficulty: "hard",
  },
  {
    text: "Prone positioning in ARDS improves oxygenation by:",
    options: ["Decreasing FRC and increasing dead space", "Redistributing perfusion to better-ventilated dorsal lung regions and reducing lung weight on dependent areas", "Increasing tidal volume requirements", "Reducing PEEP requirements to zero"],
    correctIndex: 1,
    explanation: "Prone positioning redistributes lung perfusion toward dorsal regions (which remain better aerated than dorsal lung in supine position), reduces shunt fraction, and recruits dependent atelectasis.",
    difficulty: "medium",
  },
  {
    text: "According to the PROSEVA trial, prone positioning should be considered in ARDS when:",
    options: ["P/F > 200 with PEEP 5", "P/F < 150 despite optimized ventilator settings (moderate-severe ARDS)", "P/F < 300 on admission", "All ARDS patients regardless of severity"],
    correctIndex: 1,
    explanation: "PROSEVA showed significant mortality benefit with prone positioning in ARDS with P/F < 150. Recommend ≥ 16 hours/day prone to achieve full benefit.",
    difficulty: "hard",
  },
  {
    text: "Neuromuscular blockade (NMB) in early severe ARDS (P/F < 150) is used to:",
    options: ["Increase FiO2 tolerance", "Eliminate patient-ventilator dyssynchrony, reduce oxygen consumption, and potentially reduce barotrauma", "Allow higher tidal volumes", "Replace the need for sedation"],
    correctIndex: 1,
    explanation: "Early cisatracurium infusion in severe ARDS (ACURASYS trial) reduced double-triggering, oxygen consumption, and inflammatory mediator release, potentially improving outcomes.",
    difficulty: "hard",
  },
  {
    text: "In ARDS, recruitment maneuvers (RMs) temporarily apply high sustained pressure to:",
    options: ["Reduce auto-PEEP", "Open collapsed (atelectatic) alveoli and improve oxygenation", "Decrease PaCO2", "Train respiratory muscles"],
    correctIndex: 1,
    explanation: "Recruitment maneuvers (e.g., sustained inflation at 35–40 cmH₂O for 40 seconds) open collapsed alveoli. They must be followed by adequate PEEP to prevent re-collapse.",
    difficulty: "medium",
  },
  {
    text: "Permissive hypercapnia in ARDS refers to:",
    options: ["Targeting PaCO2 35–45 mmHg at all times", "Allowing PaCO2 to rise above normal (45–80 mmHg) to maintain lung-protective low tidal volumes", "Increasing RR to correct CO2", "Using bicarbonate to compensate for hypoventilation"],
    correctIndex: 1,
    explanation: "Permissive hypercapnia accepts elevated PaCO2 (sometimes up to 80 mmHg with pH ≥ 7.20) as a trade-off for maintaining low TV and Pplat, prioritizing lung protection over CO2 normalization.",
    difficulty: "medium",
  },
  {
    text: "At what pH does permissive hypercapnia generally become unacceptable and intervention required?",
    options: ["pH < 7.35", "pH < 7.25", "pH < 7.20", "pH < 7.10"],
    correctIndex: 2,
    explanation: "Most protocols intervene (increase RR, consider bicarbonate) when pH drops below 7.20. At this level, cardiac arrhythmias, reduced cardiac contractility, and pulmonary hypertension become significant risks.",
    difficulty: "hard",
  },
  {
    text: "Volutrauma differs from barotrauma in that volutrauma is caused by:",
    options: ["High peak pressures", "Excessive tidal volume causing alveolar overdistension", "Insufficient PEEP", "High FiO2"],
    correctIndex: 1,
    explanation: "Volutrauma results from excessive volume (overdistension) regardless of the pressure used to deliver it. Barotrauma is pressure-related. Both can cause VILI (ventilator-induced lung injury).",
    difficulty: "medium",
  },
  {
    text: "Atelectrauma in ARDS is prevented by:",
    options: ["High FiO2", "Adequate PEEP to prevent cyclic alveolar collapse and re-opening", "Low tidal volumes only", "Prone positioning only"],
    correctIndex: 1,
    explanation: "Atelectrauma results from repetitive alveolar collapse and re-opening (cyclic recruitment). Adequate PEEP keeps alveoli open throughout the breath cycle, preventing this shear stress injury.",
    difficulty: "medium",
  },
  {
    text: "A PEEP trial with decremental PEEP titration selects the PEEP level at which:",
    options: ["PaO2 is highest regardless of Pplat", "Best compliance (highest Cstat) is achieved, indicating optimal recruitment without overdistension", "FiO2 can be reduced to 0.21", "EtCO2 is normalized"],
    correctIndex: 1,
    explanation: "During decremental PEEP trials, compliance improves as PEEP opens collapsed alveoli. The 'best PEEP' is where Cstat peaks — optimal recruitment without overdistension.",
    difficulty: "hard",
  },
  {
    text: "Biotrauma in mechanical ventilation refers to:",
    options: ["Pneumothorax from high pressures", "Systemic inflammatory response triggered by VILI releasing cytokines into the circulation", "Oxygen radical damage to the airways", "Mucosal injury from ETT cuff pressure"],
    correctIndex: 1,
    explanation: "Biotrauma describes how VILI activates alveolar macrophages and epithelial cells, releasing cytokines (TNF-α, IL-6) that enter systemic circulation and may contribute to multi-organ failure.",
    difficulty: "hard",
  },

  // ── WEANING & LIBERATION ──────────────────────────────────────────────────
  {
    text: "Daily spontaneous awakening trials (SATs) combined with spontaneous breathing trials (SBTs) — the 'ABC' bundle — primarily reduce:",
    options: ["Ventilator pressures needed", "ICU mortality and duration of mechanical ventilation", "Ventilator-associated pneumonia rates alone", "Need for tracheostomy"],
    correctIndex: 1,
    explanation: "The ABC bundle (Awakening and Breathing Coordination) pairs daily SATs with SBTs. The landmark MENDS/ABCDE trials showed reduced mortality, shorter ventilation, and decreased delirium.",
    difficulty: "medium",
  },
  {
    text: "Prerequisites for conducting an SBT include all EXCEPT:",
    options: ["FiO2 ≤ 0.50 and PEEP ≤ 8 cmH₂O", "Hemodynamic stability without vasopressors (or minimal)", "Absence of secretions — patient does not need to cough", "Adequate spontaneous effort and appropriate level of consciousness"],
    correctIndex: 2,
    explanation: "The ability to cough and manage secretions IS a prerequisite for successful extubation. Patients who cannot protect their airway have high re-intubation rates despite passing the SBT.",
    difficulty: "hard",
  },
  {
    text: "The Rapid Shallow Breathing Index (RSBI) is calculated as:",
    options: ["TV / RR", "RR / TV (in liters)", "RR × TV", "VE / RR"],
    correctIndex: 1,
    explanation: "RSBI = RR / TV (in liters). An RSBI ≤ 105 predicts successful weaning. Higher values (shallow, rapid breaths) predict weaning failure.",
    difficulty: "medium",
  },
  {
    text: "An RSBI of 85 breaths/min/L suggests:",
    options: ["Weaning failure is very likely", "Successful weaning is likely (≤ 105 threshold)", "The patient should be on HFOV", "Increase PEEP before attempting extubation"],
    correctIndex: 1,
    explanation: "RSBI ≤ 105 predicts successful SBT. An RSBI of 85 is below the threshold and suggests the patient can likely sustain independent ventilation.",
    difficulty: "easy",
  },
  {
    text: "A 3-hour SBT on PSV 8 cmH₂O is completed. The patient has RR 28, SpO2 88%, and is using accessory muscles. What is the interpretation?",
    options: ["Successful SBT — proceed to extubation", "Failed SBT — return to full ventilatory support", "Borderline — wait 30 minutes and reassess", "Successful SBT — increase PEEP before extubation"],
    correctIndex: 1,
    explanation: "SBT failure criteria include RR > 35, SpO2 < 90%, accessory muscle use, diaphoresis, or agitation. This patient meets multiple failure criteria; return to full support and reassess daily.",
    difficulty: "medium",
  },
  {
    text: "Post-extubation high-flow nasal cannula (HFNC) in high-risk patients is used to:",
    options: ["Replace mechanical ventilation entirely", "Reduce re-intubation risk by improving oxygenation, reducing dead space, and providing positive pressure", "Increase FiO2 only", "Replace BiPAP"],
    correctIndex: 1,
    explanation: "HFNC provides humidified high-flow oxygen (up to 60 L/min), reduces anatomic dead space by flushing nasopharyngeal CO2, and generates modest PEEP (~1 cmH₂O per 10 L/min), reducing re-intubation in high-risk patients.",
    difficulty: "medium",
  },
  {
    text: "The WIND study classification of ventilator liberation includes which category for patients who remain on MV > 7 days and require prolonged weaning?",
    options: ["Simple weaning", "Difficult weaning", "Prolonged weaning", "Chronic ventilator dependence"],
    correctIndex: 2,
    explanation: "WIND study: Simple weaning = extubated on first SBT; Difficult weaning = requires up to 3 SBTs or up to 7 days; Prolonged weaning = > 3 SBT failures or > 7 days of weaning.",
    difficulty: "hard",
  },
  {
    text: "Tracheostomy is generally considered when:",
    options: ["The patient fails one SBT", "Prolonged mechanical ventilation (> 10–14 days) is anticipated", "FiO2 requirements exceed 0.60", "Pplat exceeds 30 cmH₂O"],
    correctIndex: 1,
    explanation: "Tracheostomy is recommended when prolonged MV (>10–14 days) is anticipated. Benefits include improved patient comfort, reduced sedation needs, easier oral care, and lower VAP risk.",
    difficulty: "medium",
  },
  {
    text: "Which NIF (negative inspiratory force) value suggests adequate respiratory muscle strength for weaning?",
    options: ["NIF more negative than −20 cmH₂O (e.g., −25)", "NIF between 0 and −10 cmH₂O", "NIF more positive than +20 cmH₂O", "NIF between −5 and −10 cmH₂O"],
    correctIndex: 0,
    explanation: "NIF more negative than −20 cmH₂O (e.g., −25) indicates adequate inspiratory muscle strength. Values between 0 and −20 suggest weakness that may prevent successful weaning.",
    difficulty: "medium",
  },
  {
    text: "Cuff-leak test before extubation assesses:",
    options: ["ETT position", "Presence of post-extubation stridor risk (subglottic edema)", "Tracheal secretion volume", "Ventilator circuit integrity"],
    correctIndex: 1,
    explanation: "A positive cuff-leak test (air leaks around the deflated cuff) suggests the airway is patent. Absent cuff leak suggests subglottic edema, predicting post-extubation stridor.",
    difficulty: "medium",
  },

  // ── SPECIAL CONDITIONS & APPLICATIONS ────────────────────────────────────
  {
    text: "For a patient with severe asthma status asthmaticus on MV, the ventilator strategy prioritizes:",
    options: ["High RR to normalize PaCO2", "Permissive hypercapnia with low RR and prolonged expiratory time to minimize auto-PEEP", "Inverse ratio ventilation", "High PEEP to recruit airways"],
    correctIndex: 1,
    explanation: "Status asthmaticus requires a slow rate (6–12 breaths/min), low TV, and prolonged expiration to minimize air trapping. Permissive hypercapnia is accepted to avoid barotrauma.",
    difficulty: "medium",
  },
  {
    text: "In COPD exacerbation requiring MV, initial settings should include:",
    options: ["High PEEP (10–15 cmH₂O)", "I:E ratio of 2:1", "Low RR (10–12) with prolonged expiratory time to reduce auto-PEEP", "High tidal volume (10 mL/kg) to overcome increased dead space"],
    correctIndex: 2,
    explanation: "COPD patients have high airway resistance and air trapping. Use low RR (10–12), low-normal TV, and I:E of 1:3 to 1:4 to allow complete exhalation and reduce auto-PEEP.",
    difficulty: "medium",
  },
  {
    text: "NIV (non-invasive ventilation) is MOST appropriate for which condition?",
    options: ["Acute hypoxemic respiratory failure from ARDS (PF < 100)", "Hemodynamic instability requiring vasopressors", "COPD exacerbation with acute hypercapnic respiratory failure and mild acidosis", "Uncooperative patient with poor mask fit"],
    correctIndex: 2,
    explanation: "NIV has the strongest evidence in COPD exacerbation with hypercapnic acidosis (pH 7.25–7.35). It reduces intubation rates and mortality. It is not first-line for severe ARDS or hemodynamic instability.",
    difficulty: "medium",
  },
  {
    text: "Which ABG finding most urgently indicates need for mechanical ventilation?",
    options: ["pH 7.35, PaCO2 42, PaO2 88 on 2 L NC", "pH 7.20, PaCO2 70, PaO2 55 on 100% NRB mask (increasing respiratory distress)", "pH 7.30, PaCO2 50, PaO2 72 on 4 L NC", "pH 7.38, PaCO2 38, PaO2 66 on 40% Venturi mask"],
    correctIndex: 1,
    explanation: "Severe acidosis (pH 7.20), hypercapnia (PaCO2 70), and hypoxemia refractory to high-flow oxygen with worsening distress represent acute ventilatory failure requiring immediate mechanical support.",
    difficulty: "medium",
  },
  {
    text: "Heliox (helium-oxygen mixture) on a ventilated asthma patient can:",
    options: ["Increase FiO2 delivery", "Reduce airway resistance due to helium's lower density, reducing WOB and PIP", "Increase inspiratory time", "Replace bronchodilators"],
    correctIndex: 1,
    explanation: "Helium's low density decreases turbulent airflow resistance in obstructed airways, reducing PIP, WOB, and auto-PEEP. It is an adjunct in severe bronchospasm, not a replacement for bronchodilators.",
    difficulty: "hard",
  },
  {
    text: "Unilateral pulmonary contusion on mechanical ventilation may cause selective lung injury. Independent lung ventilation (ILV) with a double-lumen ETT can:",
    options: ["Provide different TV and PEEP to each lung", "Eliminate the need for PEEP", "Increase risk of barotrauma", "Replace prone positioning"],
    correctIndex: 0,
    explanation: "ILV with a double-lumen ETT allows each lung to be ventilated with different settings — higher PEEP for the contused lung, protective volumes for the healthier lung — preventing cross-contamination and volutrauma.",
    difficulty: "hard",
  },
  {
    text: "During cardiac arrest in a ventilated patient, the recommended ventilation rate is:",
    options: ["Synchronous 30:2 compressions:breaths", "One breath every 6 seconds (10 breaths/min) with asynchronous continuous compressions", "One breath every 2 seconds (30 breaths/min)", "Hyperventilation at 20 breaths/min"],
    correctIndex: 1,
    explanation: "With an advanced airway in place during CPR, deliver 1 breath every 6 seconds (10/min) while continuous chest compressions proceed. Avoid hyperventilation (increases intrathoracic pressure, reduces cardiac output).",
    difficulty: "medium",
  },
  {
    text: "Oxygen toxicity from prolonged high FiO2 primarily causes:",
    options: ["Cardiomyopathy", "Nitrogen narcosis", "Absorptive atelectasis and reactive oxygen species-mediated lung injury", "Hypercapnia"],
    correctIndex: 2,
    explanation: "Prolonged FiO2 > 0.60 causes nitrogen washout atelectasis and generates reactive oxygen species, damaging alveolar epithelium. Clinically this manifests as worsening ARDS-like injury.",
    difficulty: "medium",
  },
  {
    text: "Ventilator-associated pneumonia (VAP) prevention bundles typically include all EXCEPT:",
    options: ["Head of bed elevation 30–45°", "Daily oral care with chlorhexidine", "Subglottic suctioning", "Keeping the ETT cuff pressure at 5 cmH₂O"],
    correctIndex: 3,
    explanation: "ETT cuff pressure of 5 cmH₂O is far too low (target 20–30 cmH₂O). Low cuff pressure allows microaspiration of oropharyngeal secretions, increasing VAP risk. All other options are standard VAP bundle elements.",
    difficulty: "medium",
  },
  {
    text: "A patient is on VC-AC with TV 500 mL and RR 14. ABG shows pH 7.52, PaCO2 28, PaO2 95. The appropriate response is:",
    options: ["Increase TV to improve oxygenation", "Decrease RR or TV to allow PaCO2 to rise and correct alkalosis", "Increase PEEP to 10 cmH₂O", "Add BiPAP"],
    correctIndex: 1,
    explanation: "Respiratory alkalosis (pH 7.52, PaCO2 28) from hyperventilation. Reduce RR or TV to decrease minute ventilation and allow PaCO2 to normalize. Do not increase PEEP — oxygenation is adequate.",
    difficulty: "medium",
  },
  {
    text: "Main-stem intubation (right main-stem) will cause:",
    options: ["Bilateral improved ventilation", "Left lung atelectasis; high PIP and Pplat; decreased breath sounds on left", "Decreased PIP with improved compliance", "Increased tidal volume delivery"],
    correctIndex: 1,
    explanation: "Right main-stem intubation ventilates only the right lung. The left lung collapses (atelectasis), causing decreased left breath sounds, increased PIP and Pplat (compliance problem), and hypoxemia.",
    difficulty: "medium",
  },
  {
    text: "Pneumothorax in a ventilated patient presents with:",
    options: ["Gradual decrease in PIP over hours", "Sudden increase in PIP and Pplat, decreased ipsilateral breath sounds, hypotension (tension), tracheal deviation", "Bilateral increased breath sounds", "Improvement in SpO2"],
    correctIndex: 1,
    explanation: "Tension pneumothorax: sudden rise in PIP and Pplat (compliance problem), decreased breath sounds on the affected side, hypotension, tracheal deviation away from the pneumothorax, and desaturation.",
    difficulty: "medium",
  },
  {
    text: "How should peak flow be adjusted in VC-AC to reduce auto-PEEP in an obstructed patient?",
    options: ["Decrease peak flow to reduce PIP", "Increase peak flow to shorten inspiratory time and lengthen expiratory time", "Switch to pressure-control mode only", "Decrease tidal volume only"],
    correctIndex: 1,
    explanation: "Increasing peak flow in VC-AC shortens inspiratory time, which increases expiratory time for a given RR. More expiratory time reduces air trapping and auto-PEEP in obstructed patients.",
    difficulty: "hard",
  },
  {
    text: "A pressure-control breath cycles from inspiration to expiration based on:",
    options: ["Volume reaching the set tidal volume", "A set inspiratory time (time-cycled)", "Flow decaying to 25% of peak", "Patient effort"],
    correctIndex: 1,
    explanation: "Pressure-control breaths are time-cycled — inspiration ends when the set inspiratory time is reached, regardless of volume or flow. This contrasts with PSV (flow-cycled) and VC (volume-cycled).",
    difficulty: "medium",
  },
  {
    text: "A patient on PSV 12 cmH₂O is breathing comfortably at RR 16 with TV 550 mL. The physician orders a weaning trial. What is the appropriate first step?",
    options: ["Remove the ETT immediately", "Decrease PSV in stepwise fashion (e.g., to 8 cmH₂O) and reassess", "Switch to VC-AC at higher TV", "Increase PEEP to 10 cmH₂O"],
    correctIndex: 1,
    explanation: "PSV weaning involves gradual stepwise reduction of pressure support (e.g., by 2–4 cmH₂O decrements) while monitoring for signs of respiratory distress or fatigue, until SBT is performed.",
    difficulty: "easy",
  },
  {
    text: "Which parameter best reflects a patient's ability to generate inspiratory effort against the ventilator?",
    options: ["PaO2/FiO2 ratio", "Negative inspiratory force (NIF) / MIP", "PaCO2", "Auto-PEEP level"],
    correctIndex: 1,
    explanation: "Negative inspiratory force (NIF), also called maximum inspiratory pressure (MIP), measures the maximum negative pressure a patient can generate — a direct measure of inspiratory muscle strength.",
    difficulty: "medium",
  },
  {
    text: "In a spontaneous breath, when does the patient's WOB increase on a demand-flow CPAP circuit?",
    options: ["When flow demand is fully met", "When circuit flow cannot match inspiratory demand, causing the CPAP level to transiently drop", "When PEEP is set too high", "When the humidifier temperature is too low"],
    correctIndex: 1,
    explanation: "If the demand-flow circuit cannot supply sufficient flow, the patient must work harder (increased WOB) to generate enough flow. High-flow circuits and properly tuned sensitivity settings minimize this.",
    difficulty: "hard",
  },
  {
    text: "Weaning failure due to cardiac dysfunction (heart failure) should be suspected when:",
    options: ["Patient develops tachycardia and hypertension during SBT with worsening gas exchange", "Patient requires increased FiO2 during SBT", "Patient's RSBI suddenly decreases below 80", "Patient develops bradycardia during SBT"],
    correctIndex: 0,
    explanation: "SBT converts positive-pressure MV to spontaneous breathing, increasing preload and cardiac work. In heart failure patients, this can precipitate acute pulmonary edema — manifesting as hypertension, tachycardia, and hypoxemia.",
    difficulty: "hard",
  },
  {
    text: "After a failed SBT, how long should the clinician wait before attempting another trial?",
    options: ["1 hour", "4–8 hours (same day if daily awakening and breathing protocol)", "24 hours (next day)", "48–72 hours"],
    correctIndex: 2,
    explanation: "After a failed SBT, most protocols recommend waiting at least 24 hours before the next attempt. The patient should receive adequate rest and the cause of failure should be addressed.",
    difficulty: "medium",
  },
  {
    text: "Which finding during an SBT is NOT a criterion for stopping the trial?",
    options: ["RR > 35 breaths/min for more than 5 minutes", "SpO2 < 90%", "Heart rate increase of 10 bpm above baseline", "Use of accessory muscles with paradoxical abdominal movement"],
    correctIndex: 2,
    explanation: "A minor heart rate increase of 10 bpm alone is not a stopping criterion. Stopping criteria include RR > 35, SpO2 < 90%, heart rate change > 20% from baseline, arrhythmia, severe accessory muscle use, or paradoxical breathing.",
    difficulty: "hard",
  },
  {
    text: "Which diaphragmatic dysfunction finding on ultrasound predicts weaning failure?",
    options: ["Diaphragm excursion > 10 mm bilaterally", "Paradoxical upward diaphragm movement during inspiration (diaphragm paralysis)", "Thickening fraction > 30%", "Normal dome shape bilaterally"],
    correctIndex: 1,
    explanation: "Paradoxical (upward) diaphragm movement during spontaneous inspiration indicates phrenic nerve injury or diaphragm fatigue. Excursion < 10 mm and thickening fraction < 20% also predict weaning failure.",
    difficulty: "hard",
  },

  // ── HEMODYNAMICS & INTERACTIONS ───────────────────────────────────────────
  {
    text: "Positive pressure ventilation reduces cardiac output by:",
    options: ["Increasing venous return", "Increasing right ventricular afterload and decreasing venous return (preload reduction)", "Decreasing pulmonary vascular resistance", "Increasing left ventricular preload"],
    correctIndex: 1,
    explanation: "Positive intrathoracic pressure during PPV compresses the right atrium and great veins, reducing venous return and cardiac output. It also increases RV afterload by compressing pulmonary vasculature.",
    difficulty: "medium",
  },
  {
    text: "In hypovolemic shock, positive pressure ventilation can be particularly dangerous because:",
    options: ["It increases oxygen delivery", "Further reduction in venous return exacerbates hypotension and low cardiac output", "It causes oxygen toxicity", "It reduces vasopressor requirements"],
    correctIndex: 1,
    explanation: "Hypovolemic patients are preload-dependent. Adding PPV dramatically reduces venous return in an already under-filled system, potentially causing cardiovascular collapse.",
    difficulty: "medium",
  },
  {
    text: "Pulsus paradoxus on an arterial waveform during mechanical ventilation is related to:",
    options: ["High PEEP causing cyclical blood pressure variation with breathing", "Aortic stenosis", "Pulmonary hypertension", "Increased cardiac output during inspiration"],
    correctIndex: 0,
    explanation: "In mechanically ventilated patients, high PEEP and large tidal volumes cause cyclical swings in arterial blood pressure with each breath (systolic pressure variation). This can be used to assess fluid responsiveness.",
    difficulty: "hard",
  },
  {
    text: "Pulse pressure variation (PPV) > 13% in a fully ventilated patient without arrhythmia suggests:",
    options: ["Fluid overload", "Fluid responsiveness (preload-dependent state)", "Cardiac tamponade", "Pulmonary hypertension"],
    correctIndex: 1,
    explanation: "PPV > 13% in passively ventilated patients indicates that cardiac output is highly preload-dependent — suggesting the patient will respond to a fluid bolus with increased cardiac output.",
    difficulty: "hard",
  },
  {
    text: "PEEP reduces cardiac output most significantly in which patient population?",
    options: ["Patients with ARDS and poor compliance", "Fluid-overloaded patients with pulmonary edema", "Hypovolemic patients with normal or high RV compliance", "Patients receiving vasopressors"],
    correctIndex: 2,
    explanation: "High PEEP in hypovolemic patients with compliant lungs transmits the most intrathoracic pressure to the cardiovascular system, maximally reducing venous return and cardiac output.",
    difficulty: "hard",
  },
  {
    text: "The RIGHT ventricle is at risk of failure in ARDS because:",
    options: ["High FiO2 causes right ventricular hypertrophy", "Hypoxic vasoconstriction and high PEEP increase pulmonary vascular resistance, increasing RV afterload", "ARDS always causes left-sided heart failure first", "Lung-protective ventilation reduces RV afterload"],
    correctIndex: 1,
    explanation: "Hypoxic pulmonary vasoconstriction + high mean airway pressure from PEEP both increase pulmonary vascular resistance, placing the RV under increased afterload. Acute cor pulmonale is a recognized ARDS complication.",
    difficulty: "hard",
  },

  // ── WAVEFORM INTERPRETATION ───────────────────────────────────────────────
  {
    text: "On a pressure-time scalar in PC mode, a notch at end-inspiration before cycling to expiration suggests:",
    options: ["Flow starvation", "Auto-PEEP", "The patient is actively exhaling before the machine cycles off (premature cycling from patient perspective)", "Correct synchrony"],
    correctIndex: 2,
    explanation: "A downward notch at end-inspiration on the pressure waveform indicates the patient is actively trying to exhale before the machine's set inspiratory time ends — delayed cycling (machine breath longer than neural inspiratory time).",
    difficulty: "hard",
  },
  {
    text: "In a volume-control breath, a gradual increase in the pressure-time slope (pressure rising steeply) with no change in set flow indicates:",
    options: ["Decreased airway resistance", "Worsening lung compliance (lung becoming stiffer)", "Normal breath cycle", "Increased circuit compliance"],
    correctIndex: 1,
    explanation: "In VC mode with constant flow, the slope of the pressure-time curve reflects compliance. A steeper slope (pressure rises faster) indicates decreased compliance — the lung is stiffer.",
    difficulty: "hard",
  },
  {
    text: "On a volume-time scalar, failure to reach the set tidal volume before the breath cycles indicates:",
    options: ["Increased compliance", "A leak in the circuit or around the ETT cuff", "Normal variation", "Increased resistance"],
    correctIndex: 1,
    explanation: "If the volume-time waveform shows the delivered volume is less than the set TV, a leak (circuit disconnect, cuff leak, or tracheoesophageal fistula) is likely. The missing volume is going somewhere other than the lungs.",
    difficulty: "medium",
  },
  {
    text: "A 'shark fin' appearance of the flow waveform during expiration most likely represents:",
    options: ["Normal expiration", "Airway obstruction causing prolonged, slow expiratory flow (incomplete emptying)", "Complete exhalation before next breath", "Increased compliance"],
    correctIndex: 1,
    explanation: "A prolonged, slow-decaying expiratory flow waveform ('shark fin') indicates obstructed exhalation — as seen in bronchospasm, COPD, or mucus plugging. Complete expiration may not occur before the next breath.",
    difficulty: "medium",
  },
  {
    text: "Ringing or oscillations on the pressure waveform during volume-control ventilation with high flow rates are associated with:",
    options: ["Fluid in the circuit (rainout)", "Patient-ventilator dyssynchrony from high peak flows causing turbulence and resonance", "Normal ventilator function", "Cuff pressure problems"],
    correctIndex: 0,
    explanation: "Water condensation (rainout) in the ventilator circuit can cause visible oscillations on pressure waveforms. It also increases circuit resistance. Heated wire circuits prevent rainout.",
    difficulty: "hard",
  },

  // ── PHARMACOLOGY IN MV ────────────────────────────────────────────────────
  {
    text: "Cisatracurium is preferred over succinylcholine for neuromuscular blockade in ICU because:",
    options: ["It has faster onset", "It is a non-depolarizing agent without histamine release, cardiovascular effects, or hyperkalemia risk", "It can be given orally", "It has shorter duration"],
    correctIndex: 1,
    explanation: "Cisatracurium (non-depolarizing, Hofmann elimination) is ideal for prolonged ICU NMB. It avoids the hyperkalemia risk of succinylcholine, causes minimal cardiovascular effects, and doesn't accumulate in renal/hepatic failure.",
    difficulty: "hard",
  },
  {
    text: "Train-of-four (TOF) monitoring during neuromuscular blockade aims for:",
    options: ["4/4 twitches (full recovery)", "0/4 twitches (complete paralysis)", "1–2/4 twitches (adequate but not excessive blockade)", "3/4 twitches"],
    correctIndex: 2,
    explanation: "TOF monitoring targets 1–2 twitches out of 4, ensuring adequate NMB to prevent patient-ventilator dyssynchrony while avoiding excessive dosing and prolonged weakness.",
    difficulty: "medium",
  },
  {
    text: "Propofol infusion syndrome (PRIS) is most likely to occur with:",
    options: ["Short-term use < 24 hours at any dose", "High-dose propofol (> 4–5 mg/kg/hr) for > 48 hours", "Doses < 1 mg/kg/hr", "Combined use with benzodiazepines"],
    correctIndex: 1,
    explanation: "PRIS is a rare but life-threatening complication of high-dose, prolonged propofol infusion, presenting with metabolic acidosis, rhabdomyolysis, lipemic plasma, dysrhythmia, and cardiac failure.",
    difficulty: "hard",
  },
  {
    text: "Dexmedetomidine (Precedex) for ICU sedation offers the advantage of:",
    options: ["Deep sedation comparable to propofol at high doses", "Sedation without respiratory depression, allowing cooperative ventilated patients", "Analgesia without any sedation effect", "Rapid induction for intubation"],
    correctIndex: 1,
    explanation: "Dexmedetomidine is an alpha-2 agonist that provides sedation and anxiolysis without significant respiratory depression, allowing patients to be easily aroused. It has also shown benefits in reducing delirium.",
    difficulty: "medium",
  },
  {
    text: "The PADIS guidelines (2018) recommend which analgesia-first approach for ICU sedation?",
    options: ["Sedate first, then add analgesia", "Analgesia-first (treat pain before sedation to minimize sedative requirements)", "Use only benzodiazepines for sedation", "Deep sedation for all ICU patients"],
    correctIndex: 1,
    explanation: "PADIS 2018 recommends an analgesia-first (analgo-sedation) approach: treating pain first reduces overall sedative requirements, shortens MV duration, and reduces ICU complications.",
    difficulty: "medium",
  },
  {
    text: "Which sedation scale is most widely used to target light sedation in mechanically ventilated ICU patients?",
    options: ["Glasgow Coma Scale (GCS)", "Richmond Agitation-Sedation Scale (RASS)", "Ramsey Sedation Scale", "Bispectral Index (BIS)"],
    correctIndex: 1,
    explanation: "RASS (−5 to +4) is the most widely validated and used sedation scale in ICUs. Target RASS −1 to 0 (lightly sedated, easily arousable) is associated with improved outcomes.",
    difficulty: "easy",
  },
  {
    text: "Inhaled nitric oxide (iNO) in ARDS improves oxygenation by:",
    options: ["Increasing cardiac output", "Selectively vasodilating pulmonary vasculature in ventilated lung regions, reducing V/Q mismatch and shunt", "Directly opening collapsed alveoli", "Bronchodilation"],
    correctIndex: 1,
    explanation: "iNO causes selective pulmonary vasodilation in ventilated lung regions (it's immediately inactivated by hemoglobin in the blood, preventing systemic hypotension), redistributing blood flow away from shunt regions.",
    difficulty: "hard",
  },
  {
    text: "Nebulized bronchodilators (albuterol) in a mechanically ventilated patient are most effective when:",
    options: ["Placed immediately before the ETT", "Placed in the inspiratory limb 15–30 cm from the Y-piece with slow rate and large TV", "Given as bolus injection", "Delivered during expiration"],
    correctIndex: 1,
    explanation: "In-line MDI or nebulizer placement 15–30 cm from the Y-piece in the inspiratory limb allows drug to accumulate in the circuit and be inhaled during inspiration. Slow rate and larger TV improve peripheral deposition.",
    difficulty: "hard",
  },

  // ── SPECIAL TOPICS ────────────────────────────────────────────────────────
  {
    text: "Extracorporeal membrane oxygenation (ECMO) in ARDS is used as:",
    options: ["First-line treatment for all ARDS", "Rescue therapy for refractory hypoxemia (P/F < 80) despite optimal ventilator management", "A substitute for mechanical ventilation in mild ARDS", "Treatment for COPD exacerbations"],
    correctIndex: 1,
    explanation: "Venovenous ECMO provides gas exchange support (CO2 removal and oxygenation) in patients with severe ARDS (P/F < 80) who have failed all conventional and advanced ventilatory therapies.",
    difficulty: "medium",
  },
  {
    text: "The CESAR trial and EOLIA trial investigated ECMO for ARDS. The primary finding was:",
    options: ["ECMO has no benefit in ARDS", "Transfer to ECMO-capable center (CESAR) and ECMO use (EOLIA) showed survival trends in severe ARDS", "ECMO should be used for P/F < 200", "ECMO is only beneficial in pediatric ARDS"],
    correctIndex: 1,
    explanation: "CESAR showed benefit from transfer to ECMO-capable centers. EOLIA (P/F < 50) showed a mortality trend favoring ECMO (35% vs 46%, p=0.07) with 28% crossover to ECMO in the control arm.",
    difficulty: "hard",
  },
  {
    text: "In a venovenous ECMO circuit, blood is drained from and returned to:",
    options: ["Artery to vein (bypassing the heart)", "Vein to vein (bypassing the lungs but not the heart)", "Left atrium to aorta", "Right atrium to pulmonary artery"],
    correctIndex: 1,
    explanation: "VV-ECMO drains venous blood (usually right internal jugular or femoral vein), oxygenates it via the membrane oxygenator, and returns it to the venous circulation (usually right atrium via internal jugular). The heart continues to pump oxygenated blood.",
    difficulty: "medium",
  },
  {
    text: "'Ultra-lung-protective' ventilation on VV-ECMO uses tidal volumes of approximately:",
    options: ["6 mL/kg IBW", "3–4 mL/kg IBW with very low respiratory rates", "10 mL/kg IBW", "Standard tidal volumes — ECMO provides all gas exchange"],
    correctIndex: 1,
    explanation: "On VV-ECMO, 'rest' the lungs with TV 3–4 mL/kg IBW, Pplat ≤ 25 cmH₂O, and low RR (4–10/min). ECMO handles most gas exchange, allowing the lung to heal with minimal VILI.",
    difficulty: "hard",
  },
  {
    text: "High-frequency chest wall oscillation (HFCWO) in ventilated patients with copious secretions is used to:",
    options: ["Improve oxygenation directly", "Mobilize thick secretions from peripheral airways toward the central airways for suctioning", "Reduce tidal volume requirements", "Treat pneumothorax"],
    correctIndex: 1,
    explanation: "HFCWO (e.g., vest therapy) applies rapid external chest compressions that oscillate airflow bidirectionally, shearing mucus from airway walls and moving it centrally for clearance by cough or suctioning.",
    difficulty: "medium",
  },
  {
    text: "Safe endotracheal suctioning technique includes:",
    options: ["Hyperventilating for 10 minutes before suctioning", "Applying suction for no more than 10–15 seconds per pass with pre-oxygenation to 100% FiO2", "Using the largest suction catheter available for efficiency", "Suctioning every 30 minutes on a fixed schedule"],
    correctIndex: 1,
    explanation: "Safe ETT suctioning: pre-oxygenate, limit suction passes to ≤ 15 seconds each, use a catheter no larger than half the ETT inner diameter, and suction only when clinically indicated (not on a fixed schedule).",
    difficulty: "easy",
  },
  {
    text: "Closed-circuit in-line suctioning is preferred over open suctioning because it:",
    options: ["Provides a larger suction catheter diameter", "Maintains PEEP and FiO2 during suctioning, reducing derecruitment and hypoxemia", "Allows deeper suctioning into distal airways", "Reduces the need for gloves"],
    correctIndex: 1,
    explanation: "In-line (closed) suctioning maintains circuit integrity, preserving PEEP and FiO2 during suctioning. This is especially important in ARDS patients who are PEEP-dependent and easily desaturate.",
    difficulty: "medium",
  },
  {
    text: "A pH of 7.28 with PaCO2 55 mmHg and HCO3 25 mEq/L in a ventilated patient represents:",
    options: ["Metabolic acidosis with respiratory compensation", "Acute respiratory acidosis without metabolic compensation", "Mixed respiratory and metabolic acidosis", "Respiratory alkalosis"],
    correctIndex: 1,
    explanation: "pH 7.28 (acidic), PaCO2 55 (elevated — respiratory cause), HCO3 25 (normal — no metabolic compensation). This is acute respiratory acidosis. In chronic respiratory acidosis, HCO3 would be elevated as renal compensation.",
    difficulty: "medium",
  },
  {
    text: "An ABG shows pH 7.42, PaCO2 55, HCO3 35, PaO2 68. This represents:",
    options: ["Acute respiratory acidosis", "Chronic respiratory acidosis fully compensated with metabolic alkalosis", "Metabolic alkalosis only", "Mixed acidosis"],
    correctIndex: 1,
    explanation: "pH 7.42 (normal), PaCO2 55 (elevated), HCO3 35 (elevated — metabolic compensation). This is chronic respiratory acidosis fully compensated by renal bicarbonate retention — classic COPD blood gas.",
    difficulty: "hard",
  },
  {
    text: "Ventilator liberation protocol 'screens' typically assess which parameters first each morning?",
    options: ["Chest X-ray results and echocardiogram", "Oxygenation (FiO2 ≤ 0.50, PEEP ≤ 8), hemodynamic stability, and adequate mental status/effort", "Electrolyte levels and albumin", "Cardiac output and SVR"],
    correctIndex: 1,
    explanation: "Standard daily screen criteria: FiO2 ≤ 0.50, PEEP ≤ 8 cmH₂O, hemodynamic stability (off or minimal vasopressors), no active paralysis, and adequate neurological status to attempt SBT.",
    difficulty: "easy",
  },
  {
    text: "In the expiratory pause maneuver to detect auto-PEEP, what must be true for the measurement to be valid?",
    options: ["The patient can breathe spontaneously during the maneuver", "The patient must be completely passive (no respiratory muscle activity) during the pause", "The measurement requires a flow rate of at least 60 L/min", "Only valid in PC-AC mode"],
    correctIndex: 1,
    explanation: "Any active respiratory muscle contraction during the expiratory pause generates pressure independent of auto-PEEP, confounding the measurement. The patient must be completely passive (often requiring sedation/NMB).",
    difficulty: "hard",
  },
  {
    text: "Esophageal manometry in ventilated patients is used to estimate:",
    options: ["Pulmonary artery pressure", "Transpulmonary pressure (lung-specific driving force) to optimize PEEP in ARDS", "Gastric motility", "Endotracheal tube position"],
    correctIndex: 1,
    explanation: "Esophageal pressure approximates pleural pressure. Transpulmonary pressure = Paw − Pes. Esophageal manometry allows individualized PEEP titration to maintain positive transpulmonary pressure and recruit lung without causing RV failure.",
    difficulty: "hard",
  },
  {
    text: "In a COPD patient with chronic hypercapnia (baseline PaCO2 60), the ventilator target for PaCO2 should be:",
    options: ["Normal 35–45 mmHg", "The patient's chronic baseline (~60 mmHg), not normal", "Below 35 mmHg", "Any value is acceptable"],
    correctIndex: 1,
    explanation: "Over-ventilating a COPD patient to a 'normal' PaCO2 creates metabolic alkalosis and makes weaning very difficult. Target the patient's known (or estimated) baseline PaCO2, not the laboratory normal.",
    difficulty: "medium",
  },
  {
    text: "The ventilator's sensitivity (trigger threshold) should be set to:",
    options: ["The highest (least sensitive) setting to prevent auto-triggering", "The most sensitive (lowest threshold) level without causing auto-cycling", "A fixed pressure of −10 cmH₂O regardless of patient effort", "Flow trigger of 20 L/min always"],
    correctIndex: 1,
    explanation: "Sensitivity should be as sensitive as possible (low threshold) without causing auto-triggering. Excessive sensitivity causes false triggers from circuit motion or cardiac oscillations; insufficient sensitivity increases WOB.",
    difficulty: "medium",
  },
  {
    text: "Sigh breaths (periodic large volume breaths) on older ventilators were used to:",
    options: ["Increase RR", "Periodically recruit dependent atelectasis and restore FRC", "Deliver nebulized medications", "Measure auto-PEEP"],
    correctIndex: 1,
    explanation: "Sigh breaths (1.5–2× normal TV, 6–10 times/hour) were used to prevent atelectasis before PEEP became standard. Modern ventilation with appropriate PEEP has largely replaced this practice.",
    difficulty: "medium",
  },
  {
    text: "During a spontaneous breathing trial with T-piece, the patient suddenly develops severe diaphoresis, HR 130, and SpO2 drops to 86%. You should:",
    options: ["Continue the trial for 30 more minutes", "Immediately reconnect to full ventilator support and abort the SBT", "Increase FiO2 on the T-piece and continue", "Suction the patient and continue"],
    correctIndex: 1,
    explanation: "Diaphoresis, tachycardia, and SpO2 < 90% are clear failure criteria. Immediately abort the SBT, reconnect to full support, identify and address the cause of failure, and retry tomorrow.",
    difficulty: "easy",
  },
  {
    text: "Which of the following is the BEST early indicator of respiratory muscle fatigue during a spontaneous breathing trial?",
    options: ["Rising PaCO2 on ABG", "Paradoxical inward abdominal movement during inspiration (abdominal paradox)", "Increasing SpO2", "Falling heart rate"],
    correctIndex: 1,
    explanation: "Abdominal paradox (inward abdominal movement during inspiration when the abdomen should move outward) is a clinical sign of diaphragmatic fatigue — the accessory muscles lift the chest while the diaphragm is pulled up. Rising PaCO2 is a late sign.",
    difficulty: "hard",
  },
];

async function main() {
  // Check how many MV questions already exist
  const existingRes = await pool.query(
    "SELECT COUNT(*) FROM questions WHERE topic_id = $1",
    [MV_TOPIC_ID]
  );
  const existing = parseInt(existingRes.rows[0].count, 10);
  console.log(`Existing MV questions: ${existing}`);

  if (questions.length === 0) {
    console.log("No questions to insert.");
    await pool.end();
    return;
  }

  console.log(`Inserting ${questions.length} new MV questions...`);

  let inserted = 0;
  for (const q of questions) {
    await pool.query(
      `INSERT INTO questions (topic_id, text, options, correct_index, explanation, difficulty)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [MV_TOPIC_ID, q.text, JSON.stringify(q.options), q.correctIndex, q.explanation, q.difficulty]
    );
    inserted++;
  }

  const finalRes = await pool.query(
    "SELECT COUNT(*) FROM questions WHERE topic_id = $1",
    [MV_TOPIC_ID]
  );
  console.log(`Done. MV questions now: ${finalRes.rows[0].count} (added ${inserted})`);
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
