// Bundled from the topics table. Refresh with pnpm --filter @workspace/rt-study run data:refresh.
export type OfflineTopic = { id: number; title: string; description: string; sortOrder: number; keyPoints: string[]; studyContent: string };
export const BUNDLED_TOPICS: OfflineTopic[] = [
  {
    "id": 1,
    "title": "Anatomy & Physiology of the Respiratory System",
    "description": "Foundational knowledge of the structures and functions of the respiratory tract, lungs, and breathing mechanics.",
    "sortOrder": 1,
    "keyPoints": [
      "Upper airway: nose, pharynx, larynx — warm, filter, and humidify air",
      "Lower airway: trachea, bronchi, bronchioles, alveoli",
      "Alveolar-capillary membrane: site of gas exchange via diffusion",
      "Respiratory muscles: diaphragm (primary), intercostals, accessory muscles",
      "Lung volumes: TLC, FRC, RV, TV, IRV, ERV, IC, VC",
      "Compliance = ΔV/ΔP; decreased in fibrosis, ARDS; increased in emphysema",
      "Surfactant produced by type II pneumocytes; reduces surface tension",
      "Ventilation/Perfusion (V/Q) ratio: normal ~0.8",
      "Dead space: anatomic (~150 mL) + alveolar dead space = physiologic dead space",
      "Hypoxic pulmonary vasoconstriction: diverts blood from poorly ventilated areas"
    ],
    "studyContent": "## Anatomy of the Respiratory System\n\n  ### Upper Airway\n  The upper airway includes the nose, nasal passages, pharynx, and larynx. Functions include warming, filtering, and humidifying inspired air. The epiglottis protects the airway during swallowing.\n\n  ### Lower Airway\n  - **Trachea**: Begins at the cricoid cartilage (C6), bifurcates at the carina (T4-T5)\n  - **Main bronchi**: Right is shorter, wider, and more vertical (aspiration risk)\n  - **Conducting zone**: Trachea through terminal bronchioles — no gas exchange\n  - **Respiratory zone**: Respiratory bronchioles through alveoli — gas exchange occurs here\n  - **Alveoli**: ~300 million; surface area ~70 m²; Type I cells for gas exchange, Type II cells produce surfactant\n\n  ### Mechanics of Breathing\n  **Inspiration** is active — diaphragm contracts, intrathoracic pressure decreases, air flows in.  \n  **Expiration** is passive at rest — elastic recoil of lungs drives airflow out.\n\n  ### Lung Volumes\n  | Volume | Normal Value | Description |\n  |--------|-------------|-------------|\n  | Tidal Volume (TV) | 500 mL | Normal breath |\n  | IRV | 3000 mL | Max inhalation above TV |\n  | ERV | 1200 mL | Max exhalation below TV |\n  | Residual Volume (RV) | 1200 mL | Air remaining after max exhale |\n  | TLC | 6000 mL | TV + IRV + ERV + RV |\n  | VC | 4800 mL | TLC - RV |\n  | FRC | 2400 mL | ERV + RV |\n\n  ### Gas Exchange\n  - Driven by **partial pressure gradients** (diffusion)\n  - PaO₂ (arterial): 80-100 mmHg; PAO₂ (alveolar): ~104 mmHg\n  - PaCO₂: 35-45 mmHg; PACO₂: ~40 mmHg\n  - **Fick's Law**: Diffusion rate ∝ (Surface area × Pressure gradient) / Membrane thickness\n\n  ### Compliance and Resistance\n  - **Compliance** (C = ΔV/ΔP): Normal ~200 mL/cmH₂O. Decreased in pulmonary fibrosis, ARDS, pneumonia. Increased in emphysema.\n  - **Airway resistance**: Normal ~1-2 cmH₂O/L/sec. Increased in asthma, COPD, secretions.\n\n  ### V/Q Relationships\n  - Normal V/Q ratio: 0.8\n  - **V/Q mismatch**: Main cause of hypoxemia in most lung diseases\n  - **Shunt** (V/Q = 0): Blood passes unventilated alveoli — hypoxemia unresponsive to O₂\n  - **Dead space** (V/Q = ∞): Ventilated but unperfused alveoli"
  },
  {
    "id": 2,
    "title": "Pulmonary Function Testing (PFT)",
    "description": "Spirometry, lung volumes, diffusion capacity, and interpretation of obstructive vs. restrictive patterns.",
    "sortOrder": 2,
    "keyPoints": [
      "FEV1/FVC ratio < 0.70 indicates obstruction",
      "Obstruction: decreased FEV1, decreased FEV1/FVC, normal or increased TLC",
      "Restriction: decreased TLC, decreased VC, normal FEV1/FVC ratio",
      "DLCO decreased in emphysema, pulmonary fibrosis, pulmonary hypertension",
      "DLCO increased in polycythemia, pulmonary hemorrhage, exercise",
      "FEF 25-75%: sensitive marker for small airway obstruction",
      "Bronchodilator response: ≥12% AND ≥200 mL increase in FEV1 or FVC",
      "Peak expiratory flow (PEF): effort-dependent; used to monitor asthma",
      "MVV (maximum voluntary ventilation): reflects overall ventilatory capacity",
      "Predicted values based on age, sex, height, and ethnicity"
    ],
    "studyContent": "## Pulmonary Function Testing\n\n  ### Spirometry\n  Spirometry measures volumes and flow rates during forced breathing maneuvers.\n\n  **Key Parameters:**\n  - **FVC** (Forced Vital Capacity): Maximum volume exhaled after maximum inspiration\n  - **FEV₁** (Forced Expiratory Volume in 1 sec): Volume exhaled in first second of forced expiration\n  - **FEV₁/FVC ratio**: The most important ratio for classification\n  - **PEF**: Peak expiratory flow — effort-dependent\n  - **FEF 25-75%**: Mid-expiratory flow; sensitive for small airway disease\n\n  ### Interpretation Algorithm\n  1. Is FEV₁/FVC < LLN (or < 0.70)? → **Obstruction**\n  2. If FEV₁/FVC normal, is FVC or TLC < LLN? → **Restriction**\n  3. If both: **Mixed pattern**\n\n  ### Obstructive Pattern\n  - FEV₁/FVC < 0.70\n  - FEV₁ decreased, FVC may be decreased\n  - TLC normal or increased (hyperinflation in emphysema)\n  - RV and FRC increased\n  - Causes: Asthma, COPD, bronchiectasis, cystic fibrosis\n\n  **COPD Severity (GOLD):**\n  | Stage | FEV₁ % Predicted |\n  |-------|-----------------|\n  | Mild | ≥80% |\n  | Moderate | 50-79% |\n  | Severe | 30-49% |\n  | Very Severe | <30% |\n\n  ### Restrictive Pattern\n  - FEV₁/FVC normal or elevated\n  - FVC decreased, TLC decreased\n  - Causes: Pulmonary fibrosis, obesity, neuromuscular disease, kyphoscoliosis, pleural effusion\n\n  ### Diffusion Capacity (DLCO)\n  Measures ability of lungs to transfer gas (CO used as surrogate for O₂).\n\n  - **Decreased DLCO**: Emphysema, pulmonary fibrosis, pulmonary hypertension, pulmonary embolism, anemia\n  - **Increased DLCO**: Polycythemia, pulmonary hemorrhage, left-to-right shunt, asthma (mild), exercise, obesity\n\n  ### Bronchodilator Response\n  Significant if post-bronchodilator improvement:\n  - FEV₁ increases ≥12% **AND** ≥200 mL, OR\n  - FVC increases ≥12% **AND** ≥200 mL"
  },
  {
    "id": 3,
    "title": "Arterial Blood Gas (ABG) Analysis",
    "description": "Systematic ABG interpretation including acid-base disorders, oxygenation status, and compensation.",
    "sortOrder": 3,
    "keyPoints": [
      "Normal values: pH 7.35-7.45, PaCO₂ 35-45 mmHg, HCO₃⁻ 22-26 mEq/L, PaO₂ 80-100 mmHg",
      "pH < 7.35 = acidosis; pH > 7.45 = alkalosis",
      "PaCO₂ drives respiratory component; HCO₃⁻ drives metabolic component",
      "Respiratory acidosis: pH↓, PaCO₂↑ — hypoventilation",
      "Respiratory alkalosis: pH↑, PaCO₂↓ — hyperventilation",
      "Metabolic acidosis: pH↓, HCO₃⁻↓ — DKA, renal failure, lactic acidosis",
      "Metabolic alkalosis: pH↑, HCO₃⁻↑ — vomiting, diuretics, NG suction",
      "Compensation: never overcorrects. Respiratory compensation is rapid (minutes-hours); metabolic compensation takes 24-48 hours",
      "Anion gap = Na - (Cl + HCO₃) — normal 8-12 mEq/L",
      "PaO₂/FiO₂ ratio (P/F ratio): Normal >400; ARDS <200"
    ],
    "studyContent": "## Arterial Blood Gas (ABG) Analysis\n\n  ### Normal Values\n  | Parameter | Normal Range |\n  |-----------|-------------|\n  | pH | 7.35 – 7.45 |\n  | PaCO₂ | 35 – 45 mmHg |\n  | HCO₃⁻ | 22 – 26 mEq/L |\n  | PaO₂ | 80 – 100 mmHg |\n  | SaO₂ | 95 – 100% |\n  | Base Excess | -2 to +2 |\n\n  ### Step-by-Step ABG Interpretation\n\n  **Step 1: Is the pH normal, acidotic, or alkalotic?**\n  - < 7.35 = Acidosis\n  - > 7.45 = Alkalosis\n\n  **Step 2: What is the primary disorder?**\n  - PaCO₂ elevated + acidosis → Respiratory Acidosis\n  - PaCO₂ low + alkalosis → Respiratory Alkalosis\n  - HCO₃⁻ low + acidosis → Metabolic Acidosis\n  - HCO₃⁻ high + alkalosis → Metabolic Alkalosis\n\n  **Step 3: Is compensation present?**\n\n  ### Compensation Rules\n  | Primary Disorder | Expected Compensation |\n  |-----------------|----------------------|\n  | Metabolic acidosis | PaCO₂ = 1.5(HCO₃) + 8 ± 2 (Winter's formula) |\n  | Metabolic alkalosis | PaCO₂ increases 0.7 mmHg per 1 mEq/L ↑ HCO₃ |\n  | Acute resp. acidosis | HCO₃ increases 1 mEq/L per 10 mmHg ↑ PaCO₂ |\n  | Chronic resp. acidosis | HCO₃ increases 3.5 mEq/L per 10 mmHg ↑ PaCO₂ |\n  | Acute resp. alkalosis | HCO₃ decreases 2 mEq/L per 10 mmHg ↓ PaCO₂ |\n  | Chronic resp. alkalosis | HCO₃ decreases 5 mEq/L per 10 mmHg ↓ PaCO₂ |\n\n  ### Causes\n\n  **Respiratory Acidosis (hypoventilation)**\n  COPD exacerbation, drug overdose, neuromuscular disease, obesity hypoventilation, severe asthma\n\n  **Respiratory Alkalosis (hyperventilation)**\n  Anxiety, pain, fever, liver failure, early PE, pregnancy, mechanical hyperventilation\n\n  **Metabolic Acidosis**\n  - High anion gap: MUDPILES (Methanol, Uremia, DKA, Propylene glycol, INH/Iron, Lactic acidosis, Ethylene glycol, Salicylates)\n  - Normal anion gap: Diarrhea, RTA, Addison's disease\n\n  **Metabolic Alkalosis**\n  Vomiting, NG suction, diuretics, hyperaldosteronism\n\n  ### Oxygenation Assessment\n  - **P/F ratio** = PaO₂ / FiO₂\n    - Normal: >400\n    - Mild ARDS: 200-300\n    - Moderate ARDS: 100-200\n    - Severe ARDS: <100\n\n  - **A-a gradient** = PAO₂ - PaO₂ (normal <15 mmHg in young adults, increases with age)\n    - Elevated in V/Q mismatch, shunt, diffusion impairment"
  },
  {
    "id": 4,
    "title": "Mechanical Ventilation",
    "description": "Modes, settings, weaning strategies, and ventilator management for critically ill patients.",
    "sortOrder": 4,
    "keyPoints": [
      "Volume control (VC): constant tidal volume delivered regardless of compliance/resistance",
      "Pressure control (PC): constant pressure; tidal volume varies with compliance",
      "SIMV: delivers set rate of mandatory breaths plus patient-triggered breaths",
      "Pressure Support (PSV): augments patient's spontaneous breaths; no mandatory rate",
      "Lung-protective ventilation: TV 6 mL/kg IBW, Plateau pressure <30 cmH₂O",
      "PEEP: prevents alveolar collapse, improves oxygenation, can cause barotrauma",
      "Auto-PEEP (air trapping): occurs with incomplete exhalation; treat by reducing RR or I:E ratio",
      "Weaning criteria: RR<30, TV>5 mL/kg, NIF < -20 cmH₂O, RSBI <105",
      "RSBI = RR/TV(L): <105 predicts successful extubation",
      "Common vent complications: VAP, barotrauma, volutrauma, hemodynamic compromise"
    ],
    "studyContent": "## Mechanical Ventilation\n\n  ### Indications for Mechanical Ventilation\n  - Acute respiratory failure (hypoxemic or hypercapnic)\n  - Airway protection (GCS <8, unable to protect airway)\n  - Excessive work of breathing\n  - Apnea\n\n  ### Basic Settings\n  | Setting | Typical Initial Value |\n  |---------|----------------------|\n  | Mode | A/C Volume Control or Pressure Control |\n  | Tidal Volume | 6-8 mL/kg IBW (lung-protective: 6 mL/kg) |\n  | Rate | 12-20 breaths/min |\n  | FiO₂ | Start at 1.0, wean to SpO₂ 92-98% |\n  | PEEP | 5 cmH₂O (titrate up as needed) |\n  | I:E ratio | 1:2 to 1:3 |\n  | Flow rate | 40-60 L/min (VC mode) |\n\n  ### Ventilator Modes\n  **Assist-Control (A/C)**\n  - Every breath (patient or machine triggered) gets full support\n  - Respiratory alkalosis risk if patient is tachypneic\n\n  **SIMV (Synchronized Intermittent Mandatory Ventilation)**\n  - Set mandatory rate + patient can breathe spontaneously between\n  - Useful for weaning\n\n  **Pressure Support Ventilation (PSV)**\n  - No mandatory rate; augments each patient-initiated breath\n  - Used during weaning trials\n\n  **PRVC (Pressure-Regulated Volume Control)**\n  - Delivers a set tidal volume using the lowest possible pressure\n\n  ### Lung-Protective Ventilation (ARDSNet Protocol)\n  1. **Tidal volume**: 6 mL/kg IBW (range 4-8 mL/kg)\n  2. **Plateau pressure**: ≤30 cmH₂O\n  3. **Driving pressure** (Plateau - PEEP): <15 cmH₂O\n  4. **pH target**: 7.30-7.45 (permissive hypercapnia acceptable)\n  5. **FiO₂/PEEP table**: Optimize PEEP to oxygenation\n\n  ### Ventilator-Associated Problems\n  - **Auto-PEEP**: Air trapping from incomplete exhalation; treat by ↓ RR, ↑ I:E ratio (longer expiratory time)\n  - **Barotrauma**: Pneumothorax from excessive pressure\n  - **Volutrauma**: Lung injury from excessive volume\n  - **VAP**: Ventilator-associated pneumonia; prevent with HOB ≥30°, oral care, SBT daily\n\n  ### Weaning Criteria (SBT Readiness)\n  - Underlying cause improving\n  - FiO₂ ≤0.40, PEEP ≤5-8 cmH₂O\n  - SpO₂ ≥90% on above settings\n  - Hemodynamically stable (minimal vasopressors)\n  - Able to initiate breaths\n  - NIF (Negative Inspiratory Force): ≤ -20 to -25 cmH₂O\n  - **RSBI** (Rapid Shallow Breathing Index) = f/TV(L): **<105** predicts successful extubation\n  - MIP > -20 cmH₂O\n\n  ### Spontaneous Breathing Trial (SBT)\n  - 30-120 minutes on T-piece, CPAP 5, or PS 5-8\n  - Fail criteria: RR >35, SpO₂ <90%, HR change >20%, BP change >20%, diaphoresis, agitation"
  },
  {
    "id": 5,
    "title": "Airway Management",
    "description": "Endotracheal intubation, tracheostomy, supraglottic airways, and difficult airway management.",
    "sortOrder": 5,
    "keyPoints": [
      "ETT placement confirmed by: waveform capnography (gold standard), bilateral breath sounds, CXR",
      "Normal ETT cuff pressure: 20-30 cmH₂O (25 mmHg); prevents VAP and tracheal necrosis",
      "Adult ETT sizes: women 7.0-7.5 mm, men 7.5-8.0 mm ID",
      "Depth of insertion: 21-23 cm at lips for women, 23-25 cm for men",
      "Tracheostomy advantages: less work of breathing, improved oral care, patient comfort, earlier discharge",
      "LMA (laryngeal mask airway): supraglottic; does not protect against aspiration",
      "RSI: rapid sequence intubation — sedation + neuromuscular blockade simultaneously",
      "Preoxygenation: 100% O₂ for 3-5 minutes before intubation",
      "BURP maneuver: Backward, Upward, Rightward Pressure on thyroid cartilage to improve view",
      "Cricothyrotomy: emergency surgical airway when other methods fail (can't intubate, can't oxygenate)"
    ],
    "studyContent": "## Airway Management\n\n  ### Endotracheal Intubation\n\n  **Indications**\n  - Respiratory failure requiring mechanical ventilation\n  - Airway protection (unconscious, GCS ≤8)\n  - Anticipated airway compromise (angioedema, burns, trauma)\n  - Cardiac arrest\n\n  **Equipment Preparation (SOAP-ME)**\n  - **S**uction — immediately available\n  - **O**xygen — 100% FiO₂ for preoxygenation\n  - **A**irway equipment — ETT, stylet, laryngoscope\n  - **P**harmacology — sedative + paralytic\n  - **M**onitors — SpO₂, EtCO₂, cardiac, BP\n  - **E**quipment — ventilator ready\n\n  **ETT Sizing**\n  - Adults: Women 7.0–7.5 mm ID; Men 7.5–8.0 mm ID\n  - Insertion depth: Women 21–23 cm; Men 23–25 cm at teeth\n\n  **Confirmation of Placement**\n  1. Waveform capnography — **gold standard** (EtCO₂ present for ≥6 breaths)\n  2. Bilateral breath sounds (note: absent over epigastrium)\n  3. Chest rise\n  4. Chest X-ray: tip 2-3 cm above carina\n  5. Colorimetric CO₂ detector (qualitative, not quantitative)\n\n  **Cuff Management**\n  - Maintain cuff pressure: **20-30 cmH₂O** (goal 25 cmH₂O)\n  - High pressure → tracheal ischemia/necrosis\n  - Low pressure → microaspiration, VAP risk\n\n  ### Rapid Sequence Intubation (RSI)\n  1. Preoxygenate (3-5 min at 100% FiO₂)\n  2. Sedative (etomidate 0.3 mg/kg, ketamine 1-2 mg/kg, or propofol)\n  3. Succinylcholine 1.5 mg/kg (or rocuronium 1.2 mg/kg)\n  4. Intubate at onset of paralysis (~60 seconds)\n\n  ### Supraglottic Airways\n  - **LMA (Laryngeal Mask Airway)**: Sits in hypopharynx; does NOT protect against aspiration; good for elective cases or difficult airway bridge\n  - **King LT / Combitube**: Blind insertion; can ventilate in either esophageal or tracheal position\n\n  ### Tracheostomy\n  **Advantages over prolonged ETT:**\n  - Reduced dead space and WOB\n  - Improved secretion management\n  - Patient can mouth words/eat\n  - Better oral hygiene\n  - Less laryngeal injury\n\n  **Timing**: Usually after 7-14 days of intubation if prolonged ventilation anticipated\n\n  **Trach tube sizes**: Inner diameter 6.0–8.0 mm typical for adults\n\n  ### Difficult Airway\n  **Predictors (LEMON):**\n  - **L**ook externally (beard, obesity, short neck)\n  - **E**valuate 3-3-2 (mouth open, hyoid-chin, thyroid-hyoid)\n  - **M**allampati score (I-IV)\n  - **O**bstruction/Obesity\n  - **N**eck mobility\n\n  **Surgical Airway (Cricothyrotomy)**\n  - Emergency only: \"can't intubate, can't oxygenate\"\n  - Landmark: between thyroid and cricoid cartilage"
  },
  {
    "id": 6,
    "title": "Oxygen Therapy & Delivery Devices",
    "description": "Oxygen delivery systems, FiO₂ calculations, indications, and hazards of oxygen therapy.",
    "sortOrder": 6,
    "keyPoints": [
      "Low-flow devices: nasal cannula (1-6 L/min = ~24-44% FiO₂), simple mask (5-10 L/min = ~35-60%)",
      "High-flow devices: Venturi mask (precise FiO₂ 24-50%), NRBM (60-90%), high-flow nasal cannula",
      "HFNC: 20-60 L/min flow, FiO₂ 21-100%, provides ~1 cmH₂O PEEP per 10 L/min",
      "Nasal cannula formula: FiO₂ ≈ 20% + (4% × flow rate in L/min)",
      "O₂ toxicity: >50% FiO₂ for >24-48 hours causes absorptive atelectasis and free radical damage",
      "CO₂ retention risk in COPD: Target SpO₂ 88-92%, not higher",
      "Non-rebreather mask: delivers highest FiO₂ without intubation (~70-90%)",
      "Hyperbaric O₂: treats CO poisoning, decompression sickness, necrotizing infections",
      "Pulse oximetry limitations: carboxyhemoglobin, methemoglobin, poor perfusion, dark nail polish",
      "CPAP: continuous positive airway pressure; improves oxygenation without ventilatory support"
    ],
    "studyContent": "## Oxygen Therapy & Delivery Devices\n\n  ### Indications for Supplemental Oxygen\n  - Hypoxemia: PaO₂ <60 mmHg or SpO₂ <90%\n  - Acute MI, CO poisoning, cluster headaches\n  - Post-anesthesia, trauma\n\n  ### Low-Flow Devices\n  Delivered FiO₂ depends on patient's flow rate and breathing pattern.\n\n  | Device | Flow (L/min) | Approximate FiO₂ |\n  |--------|-------------|-----------------|\n  | Nasal cannula | 1 | 24% |\n  | Nasal cannula | 2 | 28% |\n  | Nasal cannula | 3 | 32% |\n  | Nasal cannula | 4 | 36% |\n  | Nasal cannula | 5 | 40% |\n  | Nasal cannula | 6 | 44% |\n  | Simple face mask | 5-6 | 35-40% |\n  | Simple face mask | 7-8 | 45-50% |\n  | Simple face mask | 9-10 | 55-60% |\n  | Partial rebreather mask | 8-11 | 50-60% |\n  | Non-rebreather mask | 10-15 | 70-90% |\n\n  ### High-Flow Devices (Fixed Performance)\n  **Venturi Mask**\n  - Delivers precise, controlled FiO₂ (24%, 28%, 31%, 35%, 40%, 50%)\n  - Color-coded adapters\n  - Best for COPD patients needing controlled O₂\n\n  **High-Flow Nasal Cannula (HFNC)**\n  - Flow: 20-60 L/min; FiO₂: 21-100%\n  - Heats and humidifies gas to 37°C, 44 mg H₂O/L\n  - Provides ~0.5-1 cmH₂O PEEP per 10 L/min flow\n  - Reduces work of breathing, clears anatomic dead space\n  - Used in: hypoxemic respiratory failure, post-extubation, COVID-19\n\n  ### Hazards of Oxygen Therapy\n  - **Absorptive atelectasis**: High FiO₂ washes out N₂, alveoli collapse\n  - **O₂ toxicity**: >50% FiO₂ >24-48 hrs → free radical damage (tracheobronchitis → ARDS)\n  - **CO₂ retention (hypercapnic drive)**: COPD patients — target SpO₂ 88-92%\n  - **Retinopathy of prematurity (ROP)**: Neonates exposed to excessive O₂\n  - **Fire hazard**: O₂ supports combustion\n\n  ### Pulse Oximetry Limitations\n  - **Carboxyhemoglobin (COHb)**: SpO₂ reads falsely normal (CO poisoning)\n  - **Methemoglobin (MetHb)**: Reads ~85% regardless of true saturation\n  - **Poor perfusion**: Hypothermia, hypotension, severe vasoconstriction\n  - **Dark nail polish, ambient light, motion artifact**\n  - **Anemia**: SpO₂ can be normal even with low O₂ content\n\n  ### CPAP & BiPAP (Non-Invasive Ventilation)\n  **CPAP**: Constant positive pressure throughout respiratory cycle\n  - Treats: OSA, cardiogenic pulmonary edema, weaning support\n\n  **BiPAP**: Different pressures on inspiration (IPAP) and expiration (EPAP)\n  - IPAP - EPAP = pressure support\n  - Treats: COPD exacerbation, hypercapnic respiratory failure, OSA"
  },
  {
    "id": 7,
    "title": "Respiratory Medications & Pharmacology",
    "description": "Bronchodilators, corticosteroids, mucolytics, respiratory stimulants, and inhaled drug delivery.",
    "sortOrder": 7,
    "keyPoints": [
      "Short-acting beta-2 agonists (SABA): albuterol, levalbuterol — rescue inhalers",
      "Long-acting beta-2 agonists (LABA): salmeterol, formoterol — maintenance, not rescue",
      "Short-acting muscarinic antagonists (SAMA): ipratropium (Atrovent)",
      "Long-acting muscarinic antagonists (LAMA): tiotropium (Spiriva)",
      "Methylxanthines: theophylline — narrow therapeutic window (10-20 mcg/mL), bronchodilator",
      "Inhaled corticosteroids (ICS): fluticasone, budesonide — anti-inflammatory, not bronchodilators",
      "Mucolytics: N-acetylcysteine (Mucomyst), dornase alfa (Pulmozyme) for CF",
      "Epinephrine: alpha and beta agonist; used for anaphylaxis, croup (racemic epi)",
      "Heliox: helium-oxygen mixture; decreases turbulent flow; used for croup, severe asthma",
      "Nebulizer vs MDI: MDI with spacer as effective as nebulizer for most patients"
    ],
    "studyContent": "## Respiratory Medications & Pharmacology\n\n  ### Bronchodilators\n\n  #### Beta-2 Agonists\n  **Mechanism**: Stimulate β₂ receptors → smooth muscle relaxation → bronchodilation\n\n  **Short-Acting (SABA) — Rescue:**\n  - Albuterol (Proventil, Ventolin): onset 5 min, duration 4-6 hr\n  - Levalbuterol (Xopenex): R-isomer of albuterol; fewer cardiac side effects\n  - Side effects: Tachycardia, tremor, hypokalemia, hyperglycemia\n\n  **Long-Acting (LABA) — Maintenance:**\n  - Salmeterol (Serevent): NOT for acute rescue; onset 30 min, duration 12 hr\n  - Formoterol (Foradil): faster onset than salmeterol\n  - Indacaterol, vilanterol: once-daily dosing\n\n  #### Muscarinic Antagonists (Anticholinergics)\n  **Mechanism**: Block M3 muscarinic receptors → reduced bronchospasm and secretions\n\n  **Short-Acting (SAMA):**\n  - Ipratropium (Atrovent): onset 15-30 min, duration 4-6 hr\n  - Often combined with albuterol (DuoNeb, Combivent)\n\n  **Long-Acting (LAMA):**\n  - Tiotropium (Spiriva): once daily; reduces exacerbations in COPD\n  - Umeclidinium, aclidinium\n\n  #### Methylxanthines\n  - **Theophylline**: Narrow therapeutic window (10-20 mcg/mL); above 20 → toxicity (arrhythmias, seizures)\n  - Bronchodilator + mild anti-inflammatory + respiratory stimulant\n\n  ### Anti-Inflammatory Agents\n  **Inhaled Corticosteroids (ICS):**\n  - Fluticasone, budesonide, beclomethasone\n  - NOT bronchodilators — reduce airway inflammation\n  - Rinse mouth after use → prevent oral candidiasis\n\n  **Systemic Corticosteroids:**\n  - Methylprednisolone, prednisone\n  - Used for COPD exacerbations, severe asthma\n  - Side effects with long-term use: hyperglycemia, osteoporosis, immunosuppression\n\n  **Leukotriene Modifiers:**\n  - Montelukast (Singulair): blocks LTD4 receptors; useful in aspirin-sensitive asthma, exercise-induced bronchospasm\n\n  ### Mucolytics & Expectorants\n  - **N-acetylcysteine (NAC/Mucomyst)**: Breaks disulfide bonds in mucus; bronchospasm risk (pretreat with bronchodilator); also antidote for acetaminophen overdose\n  - **Dornase alfa (Pulmozyme)**: Cleaves extracellular DNA in CF mucus\n  - **Hypertonic saline**: Osmotic agent; mobilizes secretions in CF, bronchiectasis\n  - **Guaifenesin**: Expectorant — thins secretions by increasing water content\n\n  ### Miscellaneous Respiratory Medications\n  | Drug | Use | Notes |\n  |------|-----|-------|\n  | Epinephrine | Anaphylaxis, cardiac arrest | Alpha + Beta agonist |\n  | Racemic epinephrine | Croup (laryngotracheobronchitis) | Nebulized; may cause rebound edema |\n  | Heliox (He/O₂) | Severe asthma, croup, stridor | Decreases turbulence; low density gas |\n  | Magnesium sulfate | Severe asthma | Bronchodilator; smooth muscle relaxant |\n  | Caffeine citrate | Apnea of prematurity | Methylxanthine |\n\n  ### Inhaled Drug Delivery\n  **MDI (Metered Dose Inhaler):**\n  - Most efficient with spacer/VHC (valved holding chamber)\n  - MDI + spacer = equivalent to nebulizer for acute asthma\n\n  **Nebulizers:**\n  - Small volume nebulizer (SVN): 6-8 min treatment\n  - Large volume nebulizer (LVN): continuous bronchodilator therapy\n  - Mesh nebulizer: silent, efficient, less residual drug"
  },
  {
    "id": 8,
    "title": "Patient Assessment & Monitoring",
    "description": "Respiratory assessment techniques, hemodynamic monitoring, and interpretation of clinical data.",
    "sortOrder": 8,
    "keyPoints": [
      "Normal respiratory rate: 12-20 breaths/min; <8 or >30 = significant",
      "Tidal volume: 500 mL (7 mL/kg) at rest; minute ventilation = RR × TV",
      "Inspection: use of accessory muscles, paradoxical breathing, cyanosis, clubbing, barrel chest",
      "Palpation: tactile fremitus increased with consolidation, decreased with effusion/pneumothorax",
      "Percussion: dull = consolidation/effusion; hyperresonant = pneumothorax/emphysema",
      "Auscultation: wheezes (obstruction), crackles (fluid/fibrosis), rhonchi (secretions), stridor (upper airway)",
      "SpO₂ >95% normal; 88-92% target for COPD; <88% = significant hypoxemia",
      "Normal capillary refill <2 seconds; delayed indicates poor perfusion",
      "P0.1 (occlusion pressure): effort to initiate breath; normal <2 cmH₂O; >4-6 suggests high WOB",
      "Sputum: color, consistency, amount; yellow/green = infection; rust-colored = pneumococcal pneumonia"
    ],
    "studyContent": "## Patient Assessment & Monitoring\n\n  ### Respiratory History\n  - Chief complaint, onset, duration, severity\n  - Associated symptoms: fever, chest pain, cough, sputum, dyspnea, orthopnea, PND\n  - PMH: asthma, COPD, cardiac disease, smoking history (pack-years)\n  - Medications, allergies, occupational/environmental exposures\n  - Functional status: MRC dyspnea scale\n\n  ### Physical Examination\n\n  #### Inspection\n  - **Breathing pattern**: Rate, depth, rhythm\n  - **Chest shape**: Barrel chest (emphysema), kyphoscoliosis, pectus deformities\n  - **Retractions**: Subcostal, intercostal, supraclavicular — increased WOB\n  - **Accessory muscle use**: SCM, scalenes — significant respiratory distress\n  - **Paradoxical breathing**: Abdomen inward on inspiration (diaphragm fatigue)\n  - **Pursed-lip breathing**: Creates auto-PEEP; seen in COPD\n  - **Cyanosis**: Central (lips, tongue) = systemic hypoxemia; Peripheral = vasoconstriction\n  - **Clubbing**: Chronic hypoxemia, CF, lung cancer, idiopathic pulmonary fibrosis\n\n  #### Palpation\n  - **Tracheal position**: Deviation away from tension pneumothorax; toward collapse/effusion\n  - **Tactile fremitus**: Vibration felt with \"99\" — ↑ with consolidation; ↓ with effusion or PTX\n\n  #### Percussion\n  | Finding | Sound | Cause |\n  |---------|-------|-------|\n  | Normal | Resonant | Normal lung |\n  | Consolidation | Dull | Pneumonia, atelectasis |\n  | Effusion | Dull/Flat | Pleural effusion |\n  | Pneumothorax | Hyperresonant | Air in pleural space |\n  | Emphysema | Hyperresonant | Air trapping |\n\n  #### Auscultation\n  | Sound | Description | Clinical Significance |\n  |-------|-------------|----------------------|\n  | Vesicular | Soft, low-pitched | Normal peripheral lung |\n  | Bronchial | Loud, high-pitched | Normal over trachea; abnormal over lung parenchyma = consolidation |\n  | Wheezes | High-pitched, musical | Airway obstruction (asthma, COPD, foreign body) |\n  | Crackles (fine) | Short, discontinuous | Fibrosis, early CHF |\n  | Crackles (coarse) | Louder, bubbling | Secretions, pulmonary edema |\n  | Rhonchi | Low-pitched, continuous | Secretions in large airways |\n  | Pleural friction rub | Grating sound | Pleuritis |\n  | Stridor | Inspiratory (usually) | Upper airway obstruction |\n\n  ### Monitoring Parameters\n  - **Pulse oximetry (SpO₂)**: Target 92-98% (COPD: 88-92%)\n  - **EtCO₂**: Normal 35-45 mmHg; tracks PaCO₂ trends\n  - **Respiratory mechanics**: Compliance, resistance, auto-PEEP, Pplat\n  - **Sputum**: Color (yellow/green = bacteria; rust = Strep pneumo; pink/frothy = pulmonary edema; black = smoke inhalation), consistency, quantity\n\n  ### Hemodynamic Monitoring\n  - **Normal HR**: 60-100 bpm; **BP**: 90-140/60-90 mmHg\n  - **CVP**: 2-8 mmHg (guides fluid status)\n  - **PCWP**: 6-12 mmHg; >18 = cardiogenic pulmonary edema\n  - **Cardiac output**: 4-8 L/min\n  - **Mixed venous O₂ (SvO₂)**: 65-75%; <60% = increased O₂ extraction (shock, high demand)"
  },
  {
    "id": 9,
    "title": "Neonatal & Pediatric Respiratory Care",
    "description": "Respiratory distress syndrome, neonatal resuscitation, CPAP, and pediatric respiratory conditions.",
    "sortOrder": 9,
    "keyPoints": [
      "Neonatal RDS: surfactant deficiency in premature infants; ground glass opacity on CXR",
      "Surfactant therapy: beractant (Survanta), calfactant (Infasurf), poractant (Curosurf)",
      "CPAP for neonates: prevents alveolar collapse; nasal prongs at 5-7 cmH₂O",
      "Apnea of prematurity: cessation of breathing >20 sec; treat with caffeine citrate",
      "BPD (bronchopulmonary dysplasia): chronic lung disease after premature birth + O₂/ventilation",
      "Meconium aspiration: thick meconium below cords → intubate and suction",
      "Transient tachypnea of newborn (TTN): retained fetal lung fluid; resolves in 24-48 hours",
      "Croup: subglottic swelling; steeple sign on CXR; treat with nebulized racemic epi + steroids",
      "Epiglottitis: supraglottic; thumbprint sign; do NOT agitate child; emergent airway",
      "RSV bronchiolitis: wheezing in infants; supportive care; high-flow nasal cannula"
    ],
    "studyContent": "## Neonatal & Pediatric Respiratory Care\n\n  ### Fetal Lung Development\n  - **Pseudoglandular** (5-17 wk): Airway formation\n  - **Canalicular** (16-26 wk): Alveolar capillary proximity develops\n  - **Saccular** (24-38 wk): Gas exchange units form\n  - **Alveolar** (36 wk – 2 yr): Alveolar multiplication\n  - Surfactant production: adequate by ~34-35 weeks; immature before 28 weeks\n\n  ### Neonatal Respiratory Distress Syndrome (RDS)\n  **Cause**: Surfactant deficiency in premature infants\n\n  **Clinical features:**\n  - Tachypnea, grunting, nasal flaring, retractions\n  - CXR: bilateral ground-glass opacities, air bronchograms\n  - Decreased lung compliance\n\n  **Treatment:**\n  - Surfactant replacement therapy (give within 2 hours of birth in severe cases)\n    - Beractant (Survanta): bovine-derived\n    - Poractant alfa (Curosurf): porcine-derived\n    - Calfactant (Infasurf): calf-derived\n  - Nasal CPAP (NCPAP): 5-7 cmH₂O\n  - Gentle ventilation if CPAP fails: target TV 4-6 mL/kg; Pplat <28 cmH₂O\n\n  ### Neonatal Resuscitation (NRP)\n  1. **Warm, dry, stimulate** — first 30 seconds\n  2. **Assess**: Tone, breathing, HR\n  3. **PPV** if HR <100 or apnea (21% FiO₂ initially)\n  4. **Intubate/chest compressions** if HR <60 despite PPV\n  5. **Epinephrine** (0.01-0.03 mg/kg IV) if HR <60 despite CPR\n\n  ### Neonatal Conditions\n\n  **Transient Tachypnea of Newborn (TTN)**\n  - Retained fetal lung fluid; common after C-section\n  - Resolves within 24-48 hours; supportive O₂ therapy\n\n  **Meconium Aspiration Syndrome (MAS)**\n  - Thick meconium → chemical pneumonitis + airway obstruction\n  - Management: If non-vigorous newborn with meconium → intubate, suction trachea, then resuscitate\n\n  **Persistent Pulmonary Hypertension (PPHN)**\n  - Failed transition from fetal to adult circulation\n  - Right-to-left shunting across PDA/PFO\n  - Treatment: 100% O₂, iNO (inhaled nitric oxide), ECMO if refractory\n\n  **Bronchopulmonary Dysplasia (BPD)**\n  - Chronic lung disease of prematurity from O₂ toxicity + barotrauma\n  - Defined as need for O₂ supplementation at 36 weeks corrected gestational age\n\n  ### Pediatric Respiratory Conditions\n\n  | Condition | Key Feature | Treatment |\n  |-----------|-------------|-----------|\n  | Croup (LTB) | Barking cough, stridor, steeple sign (X-ray) | Racemic epi (nebulized), dexamethasone |\n  | Epiglottitis | Toxic-appearing, drooling, thumbprint sign (X-ray) | Emergent airway, IV antibiotics |\n  | RSV/Bronchiolitis | Infant wheezing, rhinorrhea | Supportive, HFNC |\n  | Asthma | Wheezing, reversible obstruction | Albuterol, steroids, Mg²⁺ |\n  | CF | Chronic productive cough, FTT, digital clubbing | Airway clearance, DNase, CFTR modulators |\n  | Foreign body aspiration | Sudden choking, unilateral wheeze | Bronchoscopy |"
  },
  {
    "id": 10,
    "title": "Critical Care & Emergency Respiratory",
    "description": "ARDS, pulmonary embolism, pneumothorax, status asthmaticus, and respiratory emergencies.",
    "sortOrder": 10,
    "keyPoints": [
      "ARDS Berlin definition: acute onset <1 week, bilateral infiltrates, not fully explained by cardiac/fluid, P/F ratio <300",
      "Mild ARDS: P/F 200-300; Moderate: 100-200; Severe: <100",
      "ARDS treatment: lung-protective ventilation (TV 6 mL/kg IBW, Pplat <30), prone positioning for P/F <150",
      "Pulmonary embolism: sudden dyspnea, tachycardia, pleuritic chest pain; CXR often normal",
      "PE treatment: anticoagulation (heparin); massive PE → thrombolytics or embolectomy",
      "Tension pneumothorax: tracheal deviation away, hypotension, absent breath sounds — needle decompression",
      "Status asthmaticus: severe bronchospasm refractory to initial treatment; may need IV Mg²⁺, BiPAP, intubation",
      "Pneumonia VAP diagnosis: new infiltrate + fever + leukocytosis + purulent sputum after 48 hrs on vent",
      "Sepsis-induced respiratory failure: most common cause of ARDS in ICU",
      "ECMO (extracorporeal membrane oxygenation): last resort for refractory ARDS or cardiac failure"
    ],
    "studyContent": "## Critical Care & Emergency Respiratory\n\n  ### ARDS (Acute Respiratory Distress Syndrome)\n\n  **Berlin Definition (2012):**\n  1. Onset within 1 week of clinical insult or new/worsening respiratory symptoms\n  2. Bilateral opacities on imaging (CXR or CT) not explained by collapse, effusion, or nodules\n  3. Not fully explained by cardiac failure or fluid overload\n  4. P/F ratio <300 with PEEP ≥5 cmH₂O\n\n  | Severity | P/F Ratio |\n  |----------|-----------|\n  | Mild | 201-300 |\n  | Moderate | 101-200 |\n  | Severe | ≤100 |\n\n  **ARDS Management:**\n  1. **Lung-protective ventilation** (ARDSNet):\n     - TV 6 mL/kg IBW (can go down to 4 mL/kg)\n     - Plateau pressure ≤30 cmH₂O\n     - Permissive hypercapnia (pH >7.20 acceptable)\n  2. **PEEP optimization**: Use PEEP/FiO₂ table or best compliance strategy\n  3. **Prone positioning**: For P/F <150 → reduces mortality (PROSEVA trial)\n  4. **Conservative fluid strategy**: Avoid fluid overload once hemodynamically stable\n  5. **Neuromuscular blockade**: Cisatracurium for 48 hrs if P/F <150 (controversial)\n  6. **iNO, HFOV, ECMO**: Rescue therapies for refractory cases\n\n  **Common Causes:** Pneumonia, sepsis, aspiration, trauma, burns, pancreatitis\n\n  ### Pulmonary Embolism (PE)\n  **Symptoms**: Sudden-onset dyspnea, pleuritic chest pain, tachycardia, hemoptysis\n\n  **Diagnostic workup:**\n  - CXR: usually normal; occasionally Hampton's hump (wedge infarct) or Westermark sign (oligemia)\n  - EKG: sinus tachycardia most common; S1Q3T3 pattern\n  - D-dimer: sensitive but not specific; used to rule out in low probability\n  - CT pulmonary angiography: **gold standard**\n  - V/Q scan: alternative when CT contraindicated\n\n  **Treatment:**\n  - Hemodynamically stable: Anticoagulation (heparin → warfarin or DOAC)\n  - Massive PE (hemodynamic instability): Systemic thrombolytics (tPA), catheter-directed thrombolysis, or surgical embolectomy\n\n  ### Pneumothorax\n  | Type | Cause |\n  |------|-------|\n  | Spontaneous (primary) | Tall, thin young male; ruptured bleb |\n  | Spontaneous (secondary) | COPD, cystic fibrosis, PCP |\n  | Tension | Ball-valve mechanism; life-threatening |\n  | Iatrogenic | Post-procedure (central line, thoracentesis, ventilator) |\n\n  **Tension Pneumothorax:** Tracheal deviation away from affected side, hypotension, JVD, absent breath sounds\n  → Immediate needle decompression (2nd ICS, MCL) → chest tube\n\n  ### Status Asthmaticus\n  Severe asthma attack not responding to standard bronchodilators\n\n  **Management:**\n  - High-flow O₂ (target SpO₂ 92-95%)\n  - Continuous nebulized albuterol\n  - Ipratropium (Atrovent)\n  - IV/oral corticosteroids (methylprednisolone 125 mg IV)\n  - IV magnesium sulfate 2g over 20 min\n  - Heliox (70:30 or 80:20) if refractory\n  - BiPAP if exhausted but cooperative\n  - Intubation (last resort): high risk; use ketamine for RSI; avoid high pressures\n\n  ### Ventilator-Associated Pneumonia (VAP)\n  **Diagnosis (after ≥48 hrs on vent):**\n  - New/progressive infiltrate on CXR\n  - Fever >38°C or hypothermia <36°C\n  - Leukocytosis or leukopenia\n  - Purulent secretions\n\n  **VAP Bundle Prevention:**\n  - HOB ≥30°\n  - Daily sedation vacation\n  - Daily SBT assessment\n  - Chlorhexidine oral care\n  - DVT and PUD prophylaxis\n  - Subglottic secretion drainage\n\n  ### ECMO (Extracorporeal Membrane Oxygenation)\n  **VV-ECMO** (venovenous): For respiratory failure; oxygenates blood externally\n  **VA-ECMO** (venoarterial): For combined cardiac and respiratory failure\n\n  Indications: Refractory ARDS (P/F <80 despite optimal management), bridge to transplant, severe air leak syndrome"
  }
];
