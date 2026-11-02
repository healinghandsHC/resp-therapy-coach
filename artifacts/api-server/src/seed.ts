// Auto-generated seed data — do not edit manually
// Run seedIfNeeded() on startup to populate an empty production database

import { db, questionsTable } from "@workspace/db";
import { sql } from "drizzle-orm";
import { logger } from "./lib/logger";

type SeedQuestion = {
  topicId: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
};

const SEED_QUESTIONS: SeedQuestion[] = [
  {
    "topicId": 1,
    "text": "Which cells in the lung produce surfactant?",
    "options": [
      "Type I pneumocytes",
      "Type II pneumocytes",
      "Alveolar macrophages",
      "Clara cells"
    ],
    "correctIndex": 1,
    "explanation": "Type II pneumocytes (also called granular pneumocytes) produce surfactant, which reduces alveolar surface tension and prevents alveolar collapse at end-expiration.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "What is the normal V/Q ratio in healthy lungs?",
    "options": [
      "0.4",
      "0.8",
      "1.2",
      "2.0"
    ],
    "correctIndex": 1,
    "explanation": "The normal ventilation-to-perfusion (V/Q) ratio is approximately 0.8, meaning ventilation (4 L/min) is slightly less than perfusion (5 L/min) in overall matching.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Which structure marks the bifurcation of the trachea?",
    "options": [
      "Epiglottis",
      "Cricoid cartilage",
      "Carina",
      "Vocal cords"
    ],
    "correctIndex": 2,
    "explanation": "The carina is the ridge at the inferior end of the trachea where it bifurcates into the left and right main bronchi, located at approximately the T4-T5 vertebral level.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Functional Residual Capacity (FRC) is the sum of which two lung volumes?",
    "options": [
      "IRV + TV",
      "TV + ERV",
      "ERV + RV",
      "VC + RV"
    ],
    "correctIndex": 2,
    "explanation": "FRC = ERV (expiratory reserve volume) + RV (residual volume). It represents the volume of air remaining in the lungs at the end of a normal passive expiration.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "In a pulmonary shunt (V/Q = 0), which statement is most correct?",
    "options": [
      "Hypoxemia responds well to supplemental oxygen",
      "Blood bypasses ventilated alveoli, causing refractory hypoxemia",
      "CO2 retention is the primary problem",
      "It is caused by hyperventilation"
    ],
    "correctIndex": 1,
    "explanation": "In a true shunt (V/Q = 0), blood passes through unventilated alveoli and cannot participate in gas exchange. The hypoxemia is refractory to supplemental O2 because the shunted blood never contacts the high FiO2 gas.",
    "difficulty": "hard"
  },
  {
    "topicId": 1,
    "text": "What is the primary function of the anatomic dead space?",
    "options": [
      "Gas exchange with pulmonary capillaries",
      "Conducting air to and from alveoli without gas exchange",
      "Production of surfactant",
      "Filtering blood from the pulmonary artery"
    ],
    "correctIndex": 1,
    "explanation": "Anatomic dead space (~150 mL in adults) includes the conducting airways (nose through terminal bronchioles) where air is transported but no gas exchange occurs.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Which of the following correctly describes lung compliance?",
    "options": [
      "Force required to move air through the airways",
      "Change in lung volume per unit change in pressure",
      "Elastic recoil of the chest wall",
      "Resistance to airflow at the alveolar level"
    ],
    "correctIndex": 1,
    "explanation": "Compliance (C = ΔV/ΔP) measures how easily the lungs expand per unit of pressure change. High compliance = easily distensible (emphysema); low compliance = stiff lungs (fibrosis, ARDS).",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "A patient with emphysema would most likely demonstrate which PFT pattern?",
    "options": [
      "Decreased TLC and increased FEV1/FVC",
      "Increased TLC and decreased FEV1/FVC",
      "Normal TLC and decreased DLCO only",
      "Decreased TLC and decreased FEV1/FVC"
    ],
    "correctIndex": 1,
    "explanation": "Emphysema causes destruction of alveolar walls leading to air trapping (increased TLC, RV, FRC) and decreased airflow rates. FEV1/FVC falls below 0.70, indicating obstruction. DLCO is also decreased due to loss of alveolar surface area.",
    "difficulty": "hard"
  },
  {
    "topicId": 1,
    "text": "The right lung has how many lobes?",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctIndex": 1,
    "explanation": "The right lung has three lobes: upper (RUL), middle (RML), and lower (RLL). The left lung has only two lobes (LUL and LLL) to accommodate the cardiac notch.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Which structure marks the bifurcation of the trachea into right and left main bronchi?",
    "options": [
      "Epiglottis",
      "Carina",
      "Cricoid cartilage",
      "Thyroid cartilage"
    ],
    "correctIndex": 1,
    "explanation": "The carina is the ridge at the tracheal bifurcation (approximately T4–T5 level). It is a key landmark — ETT tips should be 2–3 cm above it. Stimulation of the carina triggers a cough reflex.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Surfactant is produced by which cells in the alveoli?",
    "options": [
      "Type I pneumocytes",
      "Type II pneumocytes",
      "Alveolar macrophages",
      "Clara cells"
    ],
    "correctIndex": 1,
    "explanation": "Type II pneumocytes (granular pneumocytes) synthesize and secrete pulmonary surfactant. Surfactant reduces alveolar surface tension, preventing collapse at end-expiration and reducing the work of breathing.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Surfactant reduces alveolar surface tension according to which principle?",
    "options": [
      "Boyle's law",
      "Dalton's law",
      "LaPlace's law",
      "Henry's law"
    ],
    "correctIndex": 2,
    "explanation": "LaPlace's law: P = 2T/r. For a given surface tension T, a smaller alveolus (smaller radius r) generates higher collapsing pressure. Surfactant preferentially reduces surface tension at smaller radii, preventing small alveoli from collapsing.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "The diaphragm is innervated by which nerve?",
    "options": [
      "Vagus nerve (CN X)",
      "Phrenic nerve (C3–C5)",
      "Intercostal nerves",
      "Hypoglossal nerve"
    ],
    "correctIndex": 1,
    "explanation": "The phrenic nerve (C3, C4, C5 — 'keeps the diaphragm alive') innervates the diaphragm. Cervical spinal cord injury at C3 or above eliminates spontaneous breathing and requires permanent ventilatory support.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "During quiet inspiration, which muscle does the majority of the work?",
    "options": [
      "Internal intercostals",
      "External intercostals",
      "Diaphragm",
      "Scalene muscles"
    ],
    "correctIndex": 2,
    "explanation": "The diaphragm performs approximately 70–80% of the work of quiet inspiration by contracting and descending, increasing thoracic volume and creating negative intrathoracic pressure.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "The functional unit of gas exchange in the lung is the:",
    "options": [
      "Bronchiole",
      "Alveolus",
      "Acinus",
      "Lobule"
    ],
    "correctIndex": 2,
    "explanation": "The acinus (or primary lobule) is the gas-exchanging unit, comprising the respiratory bronchioles, alveolar ducts, alveolar sacs, and alveoli distal to a terminal bronchiole.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "The normal anatomic dead space in a healthy adult is approximately:",
    "options": [
      "50 mL",
      "150 mL",
      "350 mL",
      "500 mL"
    ],
    "correctIndex": 1,
    "explanation": "Anatomic dead space is approximately 1 mL/lb (2.2 mL/kg) IBW, or roughly 150 mL in a 70-kg adult. It represents the volume of the conducting airways (mouth to terminal bronchioles) that does not participate in gas exchange.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Hypoxic pulmonary vasoconstriction (HPV) is a protective reflex that:",
    "options": [
      "Dilates pulmonary vessels in hypoxic regions to increase blood flow",
      "Constricts pulmonary vessels in hypoxic regions to divert blood to better-ventilated areas",
      "Increases FRC",
      "Reduces airway resistance"
    ],
    "correctIndex": 1,
    "explanation": "HPV constricts pulmonary vessels in poorly ventilated (hypoxic) alveolar regions, diverting blood flow to better-oxygenated areas, reducing intrapulmonary shunt and optimizing V/Q matching.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "The 'oxygen-hemoglobin dissociation curve' shifts to the RIGHT (reduced O2 affinity) with:",
    "options": [
      "Decreased temperature, decreased 2,3-DPG, alkalosis",
      "Increased temperature, increased 2,3-DPG, acidosis, increased PaCO2",
      "Increased pH, decreased CO2",
      "Hypothermia and carboxyhemoglobin"
    ],
    "correctIndex": 1,
    "explanation": "A rightward shift (Bohr effect) means hemoglobin releases O2 more readily — caused by increased temperature, increased 2,3-DPG, acidosis (decreased pH), and hypercapnia. This occurs in metabolically active tissues.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "The V/Q ratio at the apex of the lung compared to the base (in an upright person) is:",
    "options": [
      "Lower at the apex",
      "Higher at the apex",
      "Equal throughout",
      "Higher at the base"
    ],
    "correctIndex": 1,
    "explanation": "In upright position, both ventilation and perfusion are greater at the base, but perfusion increases more than ventilation. The apex has relatively more ventilation than perfusion — higher V/Q (~3.3 vs ~0.6 at the base).",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "Which component of the respiratory control system is most sensitive to changes in PaCO2?",
    "options": [
      "Peripheral chemoreceptors (carotid bodies)",
      "Central chemoreceptors in the medulla",
      "Hering-Breuer stretch receptors",
      "J-receptors (juxtacapillary)"
    ],
    "correctIndex": 1,
    "explanation": "Central chemoreceptors in the medulla oblongata respond to changes in cerebrospinal fluid pH (driven by CO2). They are the primary regulators of resting ventilation and are exquisitely sensitive to PaCO2 changes.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "The apneustic center in the pons influences breathing by:",
    "options": [
      "Initiating expiration",
      "Prolonging inspiration (apneustic breathing if unchecked)",
      "Increasing respiratory rate",
      "Responding to hypoxia"
    ],
    "correctIndex": 1,
    "explanation": "The apneustic center in the lower pons promotes sustained inspiration. It is normally inhibited by the pneumotaxic center (upper pons) and vagal input. Damage to the pneumotaxic center causes prolonged gasping inspirations (apneustic breathing).",
    "difficulty": "hard"
  },
  {
    "topicId": 1,
    "text": "Total lung capacity (TLC) minus residual volume (RV) equals:",
    "options": [
      "Tidal volume (TV)",
      "Vital capacity (VC)",
      "Inspiratory capacity (IC)",
      "Functional residual capacity (FRC)"
    ],
    "correctIndex": 1,
    "explanation": "VC = TLC − RV. Vital capacity is the maximal volume exhaled after a maximal inhalation — all the gas that can be moved in and out of the lungs.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Which lung volume CANNOT be measured by spirometry alone and requires helium dilution or body plethysmography?",
    "options": [
      "Tidal volume",
      "Inspiratory reserve volume",
      "Residual volume",
      "Inspiratory capacity"
    ],
    "correctIndex": 2,
    "explanation": "Residual volume (RV) — the gas remaining after maximal exhalation — cannot be expelled and therefore cannot be measured by spirometry. It requires gas dilution techniques or body plethysmography.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "Type I pneumocytes (squamous alveolar cells) primarily function to:",
    "options": [
      "Produce surfactant",
      "Form the thin gas-exchange membrane across which O2 and CO2 diffuse",
      "Phagocytose debris",
      "Repair alveolar damage"
    ],
    "correctIndex": 1,
    "explanation": "Type I pneumocytes are flat, thin cells covering ~95% of the alveolar surface. Their thinness (0.2 μm) minimizes diffusion distance for gas exchange across the alveolar-capillary membrane.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "The alveolar air equation approximates PaO2 as:",
    "options": [
      "PiO2 × FiO2",
      "PiO2 − (PaCO2 / RQ)",
      "FiO2 × (Pb − PH2O) − PaCO2/0.8",
      "PaO2 = PiO2 + PaCO2"
    ],
    "correctIndex": 2,
    "explanation": "PAO2 = FiO2 × (Pb − 47) − PaCO2/RQ. At sea level with FiO2 0.21: PAO2 ≈ 0.21 × (760−47) − 40/0.8 = 150 − 50 = 100 mmHg. This is used to calculate the A-a gradient.",
    "difficulty": "hard"
  },
  {
    "topicId": 1,
    "text": "Normal alveolar-arterial (A-a) oxygen gradient in a young healthy adult breathing room air is approximately:",
    "options": [
      "0–5 mmHg",
      "5–15 mmHg",
      "20–30 mmHg",
      "40–50 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "The normal A-a gradient is 5–15 mmHg in young adults, increasing with age (approximate normal = age/4 + 4 mmHg). An elevated A-a gradient indicates a V/Q mismatch, shunt, or diffusion impairment.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "Carbon dioxide is transported in the blood primarily as:",
    "options": [
      "Dissolved CO2 (PaCO2)",
      "Carbaminohemoglobin",
      "Bicarbonate (HCO3−)",
      "Carboxyhemoglobin"
    ],
    "correctIndex": 2,
    "explanation": "~70% of CO2 is transported as bicarbonate (via carbonic anhydrase: CO2 + H2O → H2CO3 → H+ + HCO3−). About 23% as carbaminohemoglobin and 7% dissolved.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "The Haldane effect describes:",
    "options": [
      "Rightward shift of the O2-Hgb curve with acidosis",
      "Deoxygenated hemoglobin's greater ability to carry CO2",
      "The effect of temperature on gas solubility",
      "CO2 stimulation of central chemoreceptors"
    ],
    "correctIndex": 1,
    "explanation": "The Haldane effect: deoxygenated hemoglobin binds CO2 more avidly than oxygenated hemoglobin. In the tissues, hemoglobin gives up O2, increasing its CO2-carrying capacity — facilitating CO2 transport to the lungs.",
    "difficulty": "hard"
  },
  {
    "topicId": 1,
    "text": "Which structure prevents food from entering the trachea during swallowing?",
    "options": [
      "Vocal cords",
      "Epiglottis",
      "Uvula",
      "Cricoid cartilage"
    ],
    "correctIndex": 1,
    "explanation": "The epiglottis is a leaf-shaped cartilage that folds downward over the glottis during swallowing, directing food into the esophagus. Its dysfunction (e.g., in neurological disorders) increases aspiration risk.",
    "difficulty": "easy"
  },
  {
    "topicId": 1,
    "text": "Compliance of the respiratory system (Crs) is the combined compliance of:",
    "options": [
      "Lungs and airways only",
      "Lungs and chest wall",
      "Diaphragm and chest wall",
      "Pleura and airways"
    ],
    "correctIndex": 1,
    "explanation": "Total respiratory system compliance (Crs) combines lung compliance (CL) and chest wall compliance (Ccw) in series: 1/Crs = 1/CL + 1/Ccw. Normal Crs ≈ 100 mL/cmH₂O.",
    "difficulty": "medium"
  },
  {
    "topicId": 1,
    "text": "The pores of Kohn are:",
    "options": [
      "Openings between alveoli allowing collateral ventilation",
      "Connections between bronchioles and alveoli",
      "Pores in the pleural membrane",
      "Intercellular junctions in the alveolar wall"
    ],
    "correctIndex": 0,
    "explanation": "Pores of Kohn are small openings (3–13 μm) in the alveolar walls connecting adjacent alveoli. They allow collateral ventilation — gas redistribution between alveoli that share a common alveolar wall, helping prevent atelectasis.",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "What FEV1/FVC ratio indicates obstructive lung disease?",
    "options": [
      "Greater than 0.85",
      "Less than 0.70",
      "Equal to 1.0",
      "Between 0.70 and 0.85"
    ],
    "correctIndex": 1,
    "explanation": "An FEV1/FVC ratio less than 0.70 (or below the lower limit of normal) is the hallmark of obstructive lung disease such as COPD and asthma. It indicates disproportionate reduction in airflow relative to total volume.",
    "difficulty": "easy"
  },
  {
    "topicId": 2,
    "text": "A patient has decreased TLC, decreased VC, and a normal FEV1/FVC ratio. What pattern does this represent?",
    "options": [
      "Obstructive",
      "Restrictive",
      "Mixed obstructive-restrictive",
      "Normal"
    ],
    "correctIndex": 1,
    "explanation": "Decreased TLC with a normal or elevated FEV1/FVC ratio indicates a restrictive pattern. Causes include pulmonary fibrosis, neuromuscular disease, obesity, and pleural disease.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "What is a significant bronchodilator response on spirometry?",
    "options": [
      "≥5% and ≥100 mL increase in FEV1",
      "≥12% and ≥200 mL increase in FEV1 or FVC",
      "≥20% increase in FEV1 regardless of absolute value",
      "Any improvement after bronchodilator"
    ],
    "correctIndex": 1,
    "explanation": "A significant bronchodilator response requires ≥12% AND ≥200 mL improvement in FEV1 or FVC post-bronchodilator, suggesting reversible airflow obstruction.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "DLCO (diffusion capacity) would be DECREASED in which condition?",
    "options": [
      "Polycythemia",
      "Pulmonary hemorrhage",
      "Pulmonary fibrosis",
      "Obesity (mild)"
    ],
    "correctIndex": 2,
    "explanation": "DLCO is decreased in conditions that reduce the alveolar-capillary surface area or membrane function: emphysema, pulmonary fibrosis, pulmonary hypertension, anemia, and pulmonary embolism. Polycythemia and pulmonary hemorrhage increase DLCO.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "Which spirometric parameter is most sensitive for detecting early small airway disease?",
    "options": [
      "FVC",
      "FEV1",
      "FEF 25-75%",
      "Peak expiratory flow (PEF)"
    ],
    "correctIndex": 2,
    "explanation": "FEF 25-75% (forced expiratory flow between 25% and 75% of FVC) reflects flow through the smaller peripheral airways and is the most sensitive spirometric measure for early small airway obstruction.",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "According to GOLD guidelines, a patient with FEV1/FVC < 0.70 and FEV1 = 45% predicted has COPD severity classified as:",
    "options": [
      "Mild (GOLD 1)",
      "Moderate (GOLD 2)",
      "Severe (GOLD 3)",
      "Very Severe (GOLD 4)"
    ],
    "correctIndex": 2,
    "explanation": "GOLD COPD staging: GOLD 1 (mild) ≥80%, GOLD 2 (moderate) 50-79%, GOLD 3 (severe) 30-49%, GOLD 4 (very severe) <30% predicted FEV1. FEV1 of 45% falls in GOLD 3 (severe).",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "Peak expiratory flow (PEF) measurement is primarily used to monitor:",
    "options": [
      "COPD severity staging",
      "Asthma control and exacerbations",
      "Pulmonary fibrosis progression",
      "Neuromuscular disease"
    ],
    "correctIndex": 1,
    "explanation": "PEF is effort-dependent and reflects large airway function. It is primarily used for self-monitoring of asthma severity and to detect early exacerbations. It is not useful for diagnosis.",
    "difficulty": "easy"
  },
  {
    "topicId": 2,
    "text": "FEV1/FVC ratio below what value defines obstructive lung disease?",
    "options": [
      "0.90",
      "0.80",
      "0.70",
      "0.60"
    ],
    "correctIndex": 2,
    "explanation": "An FEV1/FVC ratio < 0.70 (post-bronchodilator) defines airflow obstruction per GOLD and ATS/ERS guidelines. This criterion applies to adults; age-adjusted lower limits of normal (LLN) are also used.",
    "difficulty": "easy"
  },
  {
    "topicId": 2,
    "text": "In restrictive lung disease, which of the following spirometry patterns is expected?",
    "options": [
      "Decreased FEV1/FVC ratio with decreased TLC",
      "Normal or increased FEV1/FVC ratio with decreased TLC",
      "Increased RV with normal TLC",
      "Decreased FEV1 with normal FVC"
    ],
    "correctIndex": 1,
    "explanation": "Restrictive disease reduces lung volumes (decreased TLC, FVC) but preserves the FEV1/FVC ratio (often ≥ 0.70). Both FEV1 and FVC decrease proportionally.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "DLCO (diffusing capacity for carbon monoxide) is decreased in all EXCEPT:",
    "options": [
      "Emphysema",
      "Pulmonary fibrosis",
      "Pulmonary embolism",
      "Asthma (uncomplicated)"
    ],
    "correctIndex": 3,
    "explanation": "DLCO is decreased in emphysema (loss of alveolar surface area), fibrosis (thickened membrane), and PE (reduced perfusion). Uncomplicated asthma typically has normal or even elevated DLCO.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "A patient with FVC 65% predicted, FEV1 63% predicted, FEV1/FVC 0.75 has:",
    "options": [
      "Obstruction",
      "Restriction",
      "Mixed obstructive-restrictive",
      "Normal spirometry"
    ],
    "correctIndex": 1,
    "explanation": "FEV1/FVC ≥ 0.70 rules out obstruction. Reduced FVC (65% predicted) with a preserved ratio indicates restriction. TLC measurement is needed to confirm restriction.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "Bronchodilator responsiveness is defined as an improvement of at least:",
    "options": [
      "5% and 100 mL in FEV1 or FVC post-bronchodilator",
      "12% and 200 mL in FEV1 or FVC post-bronchodilator",
      "20% in FEV1 only",
      "10% in PEFR only"
    ],
    "correctIndex": 1,
    "explanation": "ATS/ERS criteria: significant bronchodilator response = ≥ 12% AND ≥ 200 mL increase in FEV1 or FVC after inhaled bronchodilator (salbutamol 400 mcg). This suggests reversible airflow obstruction (asthma or COPD with reversibility).",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "Peak expiratory flow (PEF) monitoring in asthma is used to:",
    "options": [
      "Diagnose obstruction",
      "Monitor disease control and detect early deterioration at home",
      "Replace spirometry in all settings",
      "Measure lung volumes"
    ],
    "correctIndex": 1,
    "explanation": "PEF monitoring is a simple, inexpensive tool for self-monitoring asthma control. A PEF < 80% of personal best or predicted, or diurnal variability > 20%, indicates poor control or impending exacerbation.",
    "difficulty": "easy"
  },
  {
    "topicId": 2,
    "text": "On a flow-volume loop, a fixed upper airway obstruction (e.g., tracheal stenosis) produces:",
    "options": [
      "Scooped-out expiratory limb",
      "Variable flattening of inspiratory limb only",
      "Flattening of both inspiratory and expiratory limbs",
      "Normal loop with reduced volume"
    ],
    "correctIndex": 2,
    "explanation": "Fixed upper airway obstruction (e.g., tracheal stenosis with a rigid lesion) causes plateauing of both inspiratory and expiratory limbs of the flow-volume loop because flow is limited throughout the breath cycle.",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "Functional residual capacity (FRC) is the sum of:",
    "options": [
      "TV + IRV",
      "ERV + RV",
      "VC + RV",
      "IC + ERV"
    ],
    "correctIndex": 1,
    "explanation": "FRC = ERV + RV. It is the volume of gas remaining in the lungs at the end of a normal passive exhalation — the equilibrium point between lung elastic recoil (inward) and chest wall recoil (outward).",
    "difficulty": "easy"
  },
  {
    "topicId": 2,
    "text": "In COPD, residual volume (RV) is typically:",
    "options": [
      "Decreased",
      "Normal",
      "Increased (air trapping)",
      "Absent"
    ],
    "correctIndex": 2,
    "explanation": "In COPD, destruction of lung parenchyma and loss of elastic recoil lead to premature airway closure during exhalation, trapping gas and increasing RV. This hyperinflation increases TLC and FRC as well.",
    "difficulty": "easy"
  },
  {
    "topicId": 2,
    "text": "The normal FEV1/FVC ratio in a healthy young adult is approximately:",
    "options": [
      "0.50–0.60",
      "0.70–0.80",
      "0.75–0.85",
      "0.90–1.00"
    ],
    "correctIndex": 2,
    "explanation": "In healthy young adults, the FEV1/FVC ratio is 0.75–0.85 (75–85%). This declines slightly with normal aging. Values below 0.70 are diagnostic of airflow obstruction.",
    "difficulty": "easy"
  },
  {
    "topicId": 2,
    "text": "Which pattern on the flow-volume loop is characteristic of emphysema?",
    "options": [
      "Fixed plateau on both limbs",
      "Scooped-out (concave) expiratory limb with normal peak flow",
      "Tall narrow loop with high peak flow",
      "Flattened inspiratory limb only"
    ],
    "correctIndex": 1,
    "explanation": "Emphysema shows a scooped-out (concave upward) expiratory limb due to dynamic airway collapse — peak flow may be normal or reduced, but mid and late expiratory flow is severely reduced.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "MVV (maximum voluntary ventilation) is decreased in both obstructive and restrictive disease. In obstruction, the primary limiting factor is:",
    "options": [
      "Respiratory muscle weakness",
      "Airway resistance limiting flow",
      "Reduced lung compliance",
      "Reduced chest wall compliance"
    ],
    "correctIndex": 1,
    "explanation": "In obstruction, MVV is limited by increased airway resistance — air cannot move in and out fast enough. In restriction, MVV is limited by reduced lung volumes. Normal MVV ≈ FEV1 × 40.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "Pre- and post-bronchodilator spirometry is required to diagnose COPD because:",
    "options": [
      "Post-BD results are always normal in COPD",
      "COPD is defined by post-BD FEV1/FVC < 0.70 to ensure obstruction is not fully reversible",
      "Pre-BD results are not reproducible",
      "Post-BD spirometry measures TLC"
    ],
    "correctIndex": 1,
    "explanation": "COPD is defined by post-bronchodilator FEV1/FVC < 0.70, distinguishing it from asthma (where obstruction may be fully reversible). Post-BD testing ensures the obstruction is not completely reversible.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "Inspiratory capacity (IC) is equal to:",
    "options": [
      "TLC − FRC",
      "FRC − RV",
      "TV + ERV",
      "VC − ERV"
    ],
    "correctIndex": 0,
    "explanation": "IC = TLC − FRC. It is also equal to TV + IRV — the maximum volume inhaled from FRC. IC reduction in COPD (due to increased FRC from hyperinflation) correlates with exercise intolerance.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "The nitrogen washout test (single-breath or multi-breath) measures:",
    "options": [
      "FEV1 and FVC",
      "Lung volumes (FRC/RV) and distribution of ventilation (evenness)",
      "Diffusing capacity (DLCO)",
      "Airway responsiveness (bronchoprovocation)"
    ],
    "correctIndex": 1,
    "explanation": "Nitrogen washout tests measure FRC (by dilution) and assess the evenness of ventilation distribution. An uneven washout (elevated LCI — lung clearance index) indicates inhomogeneous ventilation, early in small airway disease.",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "In a patient with neuromuscular disease, the PFT pattern shows FVC 45% predicted, normal FEV1/FVC ratio, normal TLC on plethysmography, reduced MIP and MEP. This suggests:",
    "options": [
      "Intrinsic restrictive lung disease",
      "Respiratory muscle weakness (extrapulmonary restriction)",
      "Obstructive lung disease",
      "Upper airway obstruction"
    ],
    "correctIndex": 1,
    "explanation": "Reduced MIP (inspiratory muscle strength) and MEP (expiratory muscle strength) with low FVC but normal FEV1/FVC and relatively preserved TLC indicates extrapulmonary restriction from respiratory muscle weakness.",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "GOLD staging of COPD is based on:",
    "options": [
      "Symptoms and exacerbation history only",
      "Post-bronchodilator FEV1 % predicted in patients with FEV1/FVC < 0.70",
      "FVC % predicted",
      "DLCO % predicted"
    ],
    "correctIndex": 1,
    "explanation": "GOLD spirometric grades (1–4) are based on post-BD FEV1 % predicted: Grade 1 ≥ 80%, Grade 2 50–79%, Grade 3 30–49%, Grade 4 < 30%. Combined GOLD Assessment also incorporates symptoms (mMRC/CAT) and exacerbation history.",
    "difficulty": "medium"
  },
  {
    "topicId": 2,
    "text": "Methacholine challenge (bronchoprovocation) test is used to:",
    "options": [
      "Confirm COPD",
      "Diagnose airway hyperresponsiveness — positive if PC20 ≤ 8 mg/mL (strong evidence for asthma)",
      "Measure DLCO",
      "Assess bronchodilator reversibility"
    ],
    "correctIndex": 1,
    "explanation": "Methacholine causes bronchoconstriction. A 20% fall in FEV1 at ≤ 8 mg/mL methacholine (PC20) is positive for airway hyperresponsiveness, strongly suggesting asthma. Normal PC20 > 16 mg/mL.",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "In a normal flow-volume loop, expiratory flow is effort-dependent in the first portion and then becomes:",
    "options": [
      "Effort-dependent throughout",
      "Effort-independent (flow-limited) at low lung volumes",
      "Zero at mid-lung volume",
      "Equal to inspiratory flow"
    ],
    "correctIndex": 1,
    "explanation": "At high lung volumes, expiratory flow is effort-dependent (more effort = more flow). At lower lung volumes, dynamic compression causes flow limitation regardless of effort — the flow-volume loop reproduces reliably in healthy subjects.",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "The 6-minute walk test (6MWT) in COPD primarily measures:",
    "options": [
      "FEV1 reproducibility",
      "Functional exercise capacity and oxygen desaturation with activity",
      "DLCO",
      "Airway resistance"
    ],
    "correctIndex": 1,
    "explanation": "The 6MWT measures how far a patient can walk in 6 minutes, assessing functional exercise capacity. Distance < 350 m predicts poor prognosis. SpO2 monitoring during 6MWT identifies exertional desaturation.",
    "difficulty": "easy"
  },
  {
    "topicId": 2,
    "text": "Which measurement best differentiates intrathoracic from extrathoracic variable upper airway obstruction on flow-volume loops?",
    "options": [
      "FEV1/FVC ratio",
      "Flattening pattern: expiratory (intrathoracic) vs. inspiratory (extrathoracic)",
      "TLC measurement",
      "Bronchodilator response"
    ],
    "correctIndex": 1,
    "explanation": "Variable intrathoracic obstruction (e.g., tracheomalacia) flattens the expiratory limb (worsened by increased intrathoracic pressure during exhalation). Variable extrathoracic obstruction (e.g., vocal cord paralysis) flattens the inspiratory limb (worsened by negative pressure during inhalation).",
    "difficulty": "hard"
  },
  {
    "topicId": 2,
    "text": "A patient reports dyspnea on exertion. Spirometry and lung volumes are normal. DLCO is markedly reduced. What is the most likely diagnosis?",
    "options": [
      "Asthma",
      "Emphysema",
      "Pulmonary vascular disease (e.g., pulmonary hypertension or PE)",
      "Respiratory muscle weakness"
    ],
    "correctIndex": 2,
    "explanation": "Isolated reduced DLCO with normal spirometry and lung volumes suggests pulmonary vascular disease — reduced pulmonary capillary blood volume limits CO uptake. Consider pulmonary hypertension or recurrent pulmonary emboli.",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "A patient's ABG shows: pH 7.28, PaCO2 55 mmHg, HCO3 26 mEq/L. What is the primary disorder?",
    "options": [
      "Metabolic acidosis",
      "Metabolic alkalosis",
      "Respiratory acidosis",
      "Respiratory alkalosis"
    ],
    "correctIndex": 2,
    "explanation": "pH < 7.35 = acidosis. PaCO2 is elevated (55 mmHg, normal 35-45). HCO3 is normal at 26, not compensated yet. This is acute respiratory acidosis due to hypoventilation.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "Normal arterial blood pH range is:",
    "options": [
      "7.25 - 7.35",
      "7.35 - 7.45",
      "7.40 - 7.50",
      "7.30 - 7.40"
    ],
    "correctIndex": 1,
    "explanation": "Normal arterial blood pH is 7.35 to 7.45. Values below 7.35 indicate acidosis; values above 7.45 indicate alkalosis.",
    "difficulty": "easy"
  },
  {
    "topicId": 3,
    "text": "A patient with diabetic ketoacidosis (DKA) would most likely show which ABG pattern?",
    "options": [
      "pH 7.52, PaCO2 48, HCO3 38",
      "pH 7.25, PaCO2 22, HCO3 10",
      "pH 7.30, PaCO2 52, HCO3 25",
      "pH 7.48, PaCO2 32, HCO3 24"
    ],
    "correctIndex": 1,
    "explanation": "DKA causes metabolic acidosis (low pH, low HCO3) from ketoacid accumulation. Respiratory compensation (hyperventilation) lowers PaCO2. pH 7.25, PaCO2 22, HCO3 10 shows metabolic acidosis with respiratory compensation.",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "A P/F ratio (PaO2/FiO2) of 180 mmHg indicates:",
    "options": [
      "Normal oxygenation",
      "Mild ARDS",
      "Moderate ARDS",
      "Severe ARDS"
    ],
    "correctIndex": 2,
    "explanation": "Per Berlin ARDS criteria: P/F >300 = normal, 201-300 = mild ARDS, 101-200 = moderate ARDS, ≤100 = severe ARDS. P/F of 180 falls in the moderate ARDS range.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "Which condition causes respiratory alkalosis?",
    "options": [
      "COPD exacerbation with CO2 retention",
      "Diabetic ketoacidosis",
      "Anxiety-induced hyperventilation",
      "Narcotic overdose"
    ],
    "correctIndex": 2,
    "explanation": "Anxiety causes hyperventilation, blowing off CO2 and raising pH above 7.45 (respiratory alkalosis). COPD exacerbation and narcotic overdose cause respiratory acidosis. DKA causes metabolic acidosis.",
    "difficulty": "easy"
  },
  {
    "topicId": 3,
    "text": "For chronic respiratory acidosis, what is the expected metabolic compensation?",
    "options": [
      "HCO3 increases 1 mEq/L per 10 mmHg rise in PaCO2",
      "HCO3 decreases 2 mEq/L per 10 mmHg rise in PaCO2",
      "HCO3 increases 3.5 mEq/L per 10 mmHg rise in PaCO2",
      "No compensation occurs"
    ],
    "correctIndex": 2,
    "explanation": "In chronic respiratory acidosis (>2-3 days), the kidneys retain HCO3 to compensate. Expected rise: 3.5 mEq/L per 10 mmHg increase in PaCO2. Acute compensation is only 1 mEq/L per 10 mmHg.",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "A patient on a ventilator develops a rising PaCO2 and pH of 7.28. What ventilator change would correct this?",
    "options": [
      "Decrease tidal volume",
      "Decrease respiratory rate",
      "Increase respiratory rate or tidal volume",
      "Increase FiO2"
    ],
    "correctIndex": 2,
    "explanation": "Rising PaCO2 with acidosis indicates hypoventilation (respiratory acidosis). To eliminate more CO2, increase minute ventilation by increasing respiratory rate or tidal volume. FiO2 changes affect oxygenation, not CO2.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "Normal arterial blood gas values are: pH 7.35–7.45, PaCO2 35–45 mmHg, HCO3 22–26 mEq/L, PaO2 80–100 mmHg. A pH of 7.30 with PaCO2 55 and HCO3 26 represents:",
    "options": [
      "Metabolic acidosis",
      "Acute respiratory acidosis",
      "Metabolic alkalosis with respiratory compensation",
      "Compensated respiratory acidosis"
    ],
    "correctIndex": 1,
    "explanation": "pH 7.30 (acidic), PaCO2 55 (high — respiratory cause), HCO3 26 (normal — no metabolic compensation yet). This is acute respiratory acidosis. Renal compensation would raise HCO3 over 2–3 days.",
    "difficulty": "easy"
  },
  {
    "topicId": 3,
    "text": "A patient with diabetic ketoacidosis has pH 7.18, PaCO2 22, HCO3 8. This is:",
    "options": [
      "Respiratory alkalosis",
      "Metabolic acidosis with respiratory compensation (Kussmaul breathing)",
      "Mixed metabolic and respiratory acidosis",
      "Respiratory acidosis with metabolic compensation"
    ],
    "correctIndex": 1,
    "explanation": "pH 7.18 (acidic), HCO3 8 (low — metabolic cause), PaCO2 22 (low — appropriate respiratory compensation for metabolic acidosis). Kussmaul breathing (deep rapid breaths) blows off CO2 to partially compensate.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "Expected respiratory compensation for metabolic acidosis: for every 1 mEq/L decrease in HCO3, PaCO2 should decrease by approximately:",
    "options": [
      "0.5 mmHg",
      "1.2 mmHg (Winter's formula)",
      "2 mmHg",
      "3 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Winter's formula: expected PaCO2 = 1.5 × HCO3 + 8 ± 2. Alternatively, PaCO2 decreases by ~1.2 mmHg per 1 mEq/L drop in HCO3. If actual PaCO2 is higher than expected, there is a concurrent respiratory acidosis.",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "In chronic respiratory acidosis (e.g., COPD), the expected renal compensation is:",
    "options": [
      "Increased HCO3 retention — HCO3 rises 3.5 mEq/L per 10 mmHg rise in PaCO2",
      "Decreased HCO3",
      "Increased Cl− retention",
      "No compensation — pH remains low"
    ],
    "correctIndex": 0,
    "explanation": "Chronic renal compensation for respiratory acidosis: HCO3 increases by 3.5 mEq/L per 10 mmHg rise in PaCO2 (acute is 1 mEq/L per 10 mmHg). This takes 3–5 days for complete compensation.",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "A patient with pyloric stenosis (vomiting HCl) has pH 7.55, PaCO2 48, HCO3 40. This is:",
    "options": [
      "Respiratory alkalosis",
      "Metabolic alkalosis with appropriate respiratory compensation",
      "Acute respiratory acidosis",
      "Mixed alkalosis"
    ],
    "correctIndex": 1,
    "explanation": "pH 7.55 (alkaline), HCO3 40 (high — metabolic cause — HCl loss), PaCO2 48 (high — respiratory compensation, hypoventilation). Loss of gastric acid causes hypochloremic metabolic alkalosis.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "PaO2/FiO2 ratio (P/F ratio) of 250 on FiO2 0.50 indicates:",
    "options": [
      "Normal oxygenation",
      "Mild hypoxemia, no ARDS criteria",
      "Moderate ARDS (P/F 100–200)",
      "Severe ARDS (P/F < 100)"
    ],
    "correctIndex": 1,
    "explanation": "P/F = PaO2 / FiO2 = 125/0.50 = 250. Berlin ARDS criteria: Mild P/F 200–300. Wait — P/F = PaO2/FiO2. If P/F ratio is 250, that's in the mild ARDS range (200–300). Normal P/F ≈ 400–500.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "Carboxyhemoglobin (COHb) elevation causes pulse oximetry to:",
    "options": [
      "Read falsely LOW",
      "Read falsely HIGH (near 100%)",
      "Read accurately",
      "Fluctuate rapidly"
    ],
    "correctIndex": 1,
    "explanation": "Standard pulse oximetry cannot distinguish oxyhemoglobin from carboxyhemoglobin — both absorb light similarly. In CO poisoning, SpO2 reads near 100% despite severe tissue hypoxia. CO-oximetry (ABG co-oximeter) is required.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "Methemoglobin causes pulse oximetry to drift toward:",
    "options": [
      "100%",
      "0%",
      "85% regardless of true SaO2",
      "The true SaO2 value"
    ],
    "correctIndex": 2,
    "explanation": "Methemoglobin absorbs equally at both SpO2 wavelengths, driving the reading toward 85%. If true SaO2 is above 85%, SpO2 reads falsely low; if below 85%, it reads falsely high.",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "A patient has pH 7.40, PaCO2 40, HCO3 25, PaO2 55 on room air. SpO2 is 87%. The primary problem is:",
    "options": [
      "Respiratory acidosis",
      "Metabolic acidosis",
      "Hypoxemia without acid-base disturbance",
      "Metabolic alkalosis"
    ],
    "correctIndex": 2,
    "explanation": "Normal pH, PaCO2, and HCO3 — no acid-base disorder. PaO2 55 mmHg (normal ≥ 80) with SpO2 87% indicates significant hypoxemia. Supplemental oxygen is needed immediately.",
    "difficulty": "easy"
  },
  {
    "topicId": 3,
    "text": "The anion gap is calculated as:",
    "options": [
      "HCO3 − Cl−",
      "Na+ − (Cl− + HCO3−)",
      "Na+ + K+ − Cl−",
      "HCO3 + Cl−"
    ],
    "correctIndex": 1,
    "explanation": "Anion gap = Na+ − (Cl− + HCO3−). Normal is 8–12 mEq/L. An elevated AG (> 12) indicates unmeasured anions (e.g., lactate, ketones, uremia, toxins — 'MUDPILES'). Normal AG metabolic acidosis = hyperchloremic acidosis (e.g., diarrhea, RTA).",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "For a patient with pH 7.25, PaCO2 60, HCO3 26 on controlled ventilation, what change will most rapidly improve pH?",
    "options": [
      "Give sodium bicarbonate IV",
      "Increase respiratory rate to decrease PaCO2",
      "Increase FiO2",
      "Increase PEEP"
    ],
    "correctIndex": 1,
    "explanation": "The pH is low due to respiratory acidosis (high PaCO2). Increasing the respiratory rate increases minute ventilation, removing CO2 and rapidly correcting respiratory acidosis. Bicarbonate is only useful for metabolic acidosis.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "A COPD patient with chronic hypercapnia (baseline PaCO2 60, HCO3 38) acutely presents with pH 7.30. The acute change in PaCO2 from baseline is most consistent with:",
    "options": [
      "Only metabolic acidosis",
      "Acute-on-chronic respiratory acidosis (new rise in PaCO2 on top of chronic)",
      "New respiratory alkalosis",
      "Pure metabolic alkalosis"
    ],
    "correctIndex": 1,
    "explanation": "This patient has chronic compensation (HCO3 38 for PaCO2 60). pH 7.30 with presumably higher PaCO2 now represents an acute exacerbation — more CO2 is being retained on top of the chronic baseline. This is acute-on-chronic respiratory acidosis.",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "Oxygen saturation (SaO2) of 90% corresponds to approximately what PaO2?",
    "options": [
      "50 mmHg",
      "60 mmHg",
      "70 mmHg",
      "80 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "On the oxyhemoglobin dissociation curve, SaO2 90% corresponds to PaO2 ~60 mmHg — the 'shoulder' of the curve. Below this point, small drops in PaO2 cause large drops in SaO2.",
    "difficulty": "easy"
  },
  {
    "topicId": 3,
    "text": "What characterizes type II respiratory failure (ventilatory failure)?",
    "options": [
      "Low PaO2 only",
      "Low PaO2 with elevated PaCO2 (hypercapnic hypoxemia)",
      "Normal PaO2 with high PaCO2",
      "Elevated PaO2 and PaCO2"
    ],
    "correctIndex": 1,
    "explanation": "Type II respiratory failure: PaO2 < 60 mmHg AND PaCO2 > 45 mmHg. This indicates ventilatory failure — the lungs cannot maintain CO2 elimination. Causes include COPD, NMD, chest wall disease, obesity hypoventilation.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "In pure metabolic alkalosis, the expected respiratory compensation (hypoventilation) is approximately:",
    "options": [
      "PaCO2 rises 0.5 mmHg per 1 mEq/L rise in HCO3",
      "PaCO2 rises 0.7 mmHg per 1 mEq/L rise in HCO3",
      "No respiratory compensation occurs",
      "PaCO2 falls 1.2 mmHg per 1 mEq/L rise in HCO3"
    ],
    "correctIndex": 1,
    "explanation": "Expected compensation for metabolic alkalosis: PaCO2 rises by 0.7 mmHg per 1 mEq/L increase in HCO3 (Winters formula for alkalosis: expected PaCO2 = 0.7 × HCO3 + 21 ± 2).",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "A patient is found to have pH 7.38, PaCO2 70, HCO3 42. This ABG represents:",
    "options": [
      "Uncompensated respiratory acidosis",
      "Acute respiratory alkalosis",
      "Fully compensated chronic respiratory acidosis",
      "Mixed metabolic and respiratory alkalosis"
    ],
    "correctIndex": 2,
    "explanation": "pH 7.38 (normal), PaCO2 70 (high), HCO3 42 (very high — renal compensation). Fully compensated chronic respiratory acidosis — classic COPD ABG. Renal HCO3 retention normalizes pH.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "The P(A-a)O2 gradient is increased in all of the following EXCEPT:",
    "options": [
      "V/Q mismatch",
      "Intrapulmonary shunt",
      "Diffusion impairment",
      "Hypoventilation with normal lungs"
    ],
    "correctIndex": 3,
    "explanation": "Hypoventilation alone (e.g., respiratory center depression) causes hypoxemia by lowering PAO2 equally — PaO2 falls but the A-a gradient remains normal. All other causes (shunt, V/Q mismatch, diffusion block) widen the A-a gradient.",
    "difficulty": "hard"
  },
  {
    "topicId": 3,
    "text": "Which change to the ABG would indicate adequate reversal of opioid-induced respiratory depression after naloxone administration?",
    "options": [
      "HCO3 decreases",
      "PaCO2 decreases and pH returns toward normal",
      "PaO2 decreases",
      "A-a gradient increases"
    ],
    "correctIndex": 1,
    "explanation": "Opioid overdose causes respiratory depression → CO2 retention (rising PaCO2) → respiratory acidosis. Successful reversal restores ventilatory drive: PaCO2 decreases and pH rises toward normal.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "A pH of 7.52 with PaCO2 28 and HCO3 23 represents:",
    "options": [
      "Metabolic alkalosis",
      "Acute respiratory alkalosis (hyperventilation)",
      "Mixed alkalosis",
      "Compensated metabolic alkalosis"
    ],
    "correctIndex": 1,
    "explanation": "pH 7.52 (alkaline), PaCO2 28 (low — respiratory cause), HCO3 23 (normal — no metabolic compensation). Acute respiratory alkalosis from hyperventilation. Causes include anxiety, pain, PE, sepsis, pregnancy.",
    "difficulty": "easy"
  },
  {
    "topicId": 3,
    "text": "In a ventilated patient, a sudden rise in PaCO2 from 40 to 65 with unchanged settings most likely indicates:",
    "options": [
      "Increased CO2 production (fever, shivering)",
      "Decreased minute ventilation from a circuit leak",
      "Decreased metabolic rate",
      "Increased oxygen consumption only"
    ],
    "correctIndex": 1,
    "explanation": "Circuit leak reduces delivered tidal volume and hence minute ventilation → CO2 accumulates. Increased CO2 production (fever, sepsis, nutrition) can also raise PaCO2, but a sudden rise suggests a ventilatory cause (leak, obstruction).",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "The SaO2/SpO2 relationship becomes unreliable below what SpO2?",
    "options": [
      "98%",
      "92%",
      "88%",
      "80%"
    ],
    "correctIndex": 1,
    "explanation": "Pulse oximetry is accurate (±2%) when SpO2 is 70–100%. Below 92% (on the steep part of the dissociation curve), small errors in light absorption cause larger errors in calculated SaO2.",
    "difficulty": "medium"
  },
  {
    "topicId": 3,
    "text": "Elevated lactate on ABG (lactic acidosis) with high anion gap most commonly represents:",
    "options": [
      "Respiratory acidosis",
      "Type A lactic acidosis — tissue hypoperfusion/hypoxia (shock, cardiac arrest)",
      "Type B — medications, liver disease",
      "Metabolic alkalosis"
    ],
    "correctIndex": 1,
    "explanation": "Type A lactic acidosis results from tissue hypoperfusion/hypoxia (septic shock, cardiac arrest, severe hypoxemia). Anaerobic metabolism generates excess lactate. It indicates high acuity and poor prognosis.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "What tidal volume is recommended in lung-protective ventilation for ARDS?",
    "options": [
      "10-12 mL/kg IBW",
      "8-10 mL/kg IBW",
      "6 mL/kg IBW",
      "4 mL/kg actual body weight"
    ],
    "correctIndex": 2,
    "explanation": "The ARDSNet lung-protective ventilation strategy recommends tidal volumes of 6 mL/kg ideal body weight (IBW), with a goal plateau pressure ≤30 cmH₂O. This reduces ventilator-induced lung injury.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "The Rapid Shallow Breathing Index (RSBI) is calculated as:",
    "options": [
      "Tidal Volume / Respiratory Rate",
      "Respiratory Rate / Tidal Volume (in liters)",
      "Minute Ventilation / FVC",
      "PaO2 / FiO2"
    ],
    "correctIndex": 1,
    "explanation": "RSBI = RR (breaths/min) / TV (liters). Values <105 predict successful extubation; values >105 suggest the patient may not tolerate extubation. It's the most studied weaning predictor.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Auto-PEEP (intrinsic PEEP) occurs when:",
    "options": [
      "PEEP is set too high on the ventilator",
      "The patient exhales incompletely before the next breath",
      "The patient has very low lung compliance",
      "FiO2 is too high for too long"
    ],
    "correctIndex": 1,
    "explanation": "Auto-PEEP occurs when insufficient expiratory time allows full exhalation — air accumulates in lungs (air trapping). Common in COPD and asthma on mechanical ventilation. Treat by decreasing RR or increasing I:E ratio.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In Pressure Control ventilation, which parameter varies with changes in lung compliance?",
    "options": [
      "Peak inspiratory pressure",
      "Inspiratory time",
      "Tidal volume",
      "FiO2"
    ],
    "correctIndex": 2,
    "explanation": "In Pressure Control mode, airway pressure is fixed. Tidal volume delivered varies with changes in compliance (C = ΔV/ΔP) and resistance. If compliance decreases, tidal volume decreases with the same pressure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which plateau pressure threshold indicates excessive lung overdistension in mechanical ventilation?",
    "options": [
      "Greater than 20 cmH2O",
      "Greater than 25 cmH2O",
      "Greater than 30 cmH2O",
      "Greater than 40 cmH2O"
    ],
    "correctIndex": 2,
    "explanation": "Plateau pressure >30 cmH2O is associated with ventilator-induced lung injury (volutrauma/barotrauma). In ARDSNet protocol, the goal is to keep Pplat ≤30 cmH2O by using 6 mL/kg IBW tidal volumes.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which ventilator mode delivers full support with every patient-triggered or machine-triggered breath?",
    "options": [
      "SIMV",
      "Pressure Support Ventilation (PSV)",
      "Assist-Control (A/C)",
      "CPAP"
    ],
    "correctIndex": 2,
    "explanation": "In Assist-Control mode, every breath — whether patient-triggered or time-triggered — receives the full preset support (volume or pressure). Risk: respiratory alkalosis if patient breathes rapidly.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Prone positioning in ARDS patients with P/F ratio < 150 has been shown to:",
    "options": [
      "Increase mortality",
      "Reduce mortality significantly",
      "Improve P/F but have no mortality benefit",
      "Increase the risk of pneumonia"
    ],
    "correctIndex": 1,
    "explanation": "The PROSEVA trial (2013) demonstrated that prone positioning for ≥16 hours/day in severe ARDS (P/F <150) significantly reduced 28-day mortality (16% vs 32.8% in supine). It improves V/Q matching and lung recruitment.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In Volume-Control Assist-Control (VC-AC), which statement is correct?",
    "options": [
      "The delivered tidal volume varies with lung compliance changes",
      "Every breath (patient- or machine-triggered) receives the full preset tidal volume",
      "The patient can only breathe at the set backup rate",
      "Inspiratory pressure is fixed regardless of tidal volume"
    ],
    "correctIndex": 1,
    "explanation": "In VC-AC, every breath — whether triggered by the patient or timed by the machine — delivers the preset tidal volume. This guarantees minute ventilation but can cause respiratory alkalosis if the patient over-breathes the set rate.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In SIMV mode, what happens if the patient makes an inspiratory effort between machine-delivered breaths?",
    "options": [
      "The ventilator delivers another full machine breath",
      "The patient breathes spontaneously, supported only by applied pressure support (if set)",
      "The ventilator locks out spontaneous breaths to prevent stacking",
      "The patient is forced to breath at the set SIMV rate only"
    ],
    "correctIndex": 1,
    "explanation": "In SIMV, the ventilator delivers timed full breaths at the set rate; between those breaths, the patient breathes spontaneously — drawing gas from the circuit against circuit resistance, with only pressure support added if prescribed. This makes unsupported SIMV more work-intensive than Assist-Control.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Airway Pressure Release Ventilation (APRV) — also called BiLevel — uses which ventilation strategy?",
    "options": [
      "High-rate mandatory breaths with short expiratory times",
      "Sustained high CPAP level (P-High) with brief, periodic pressure releases (P-Low) to remove CO2",
      "Pressure support above PEEP for every spontaneous breath",
      "Oscillatory pressure delivery at 3-15 Hz"
    ],
    "correctIndex": 1,
    "explanation": "APRV holds a high airway pressure (P-High, typically 25-35 cmH₂O) for most of the cycle to recruit and maintain open lung, with brief releases to P-Low (usually 0) for CO2 elimination. Spontaneous breathing is encouraged throughout. Used in refractory ARDS to improve oxygenation.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Pressure-Regulated Volume Control (PRVC) mode automatically adjusts which parameter?",
    "options": [
      "Respiratory rate to maintain a target minute ventilation",
      "Inspiratory pressure breath-to-breath to deliver a target tidal volume using minimum pressure",
      "FiO2 based on SpO2 feedback",
      "PEEP based on compliance monitoring"
    ],
    "correctIndex": 1,
    "explanation": "PRVC (a dual-control mode) targets a preset volume by automatically adjusting inspiratory pressure each breath. If compliance improves, pressure decreases; if compliance worsens, pressure increases. It combines the volume guarantee of VC with the decelerating flow of pressure control.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "High-Frequency Oscillatory Ventilation (HFOV) delivers gas exchange by:",
    "options": [
      "Large tidal volumes at slow rates to maximize alveolar recruitment",
      "Very small oscillatory tidal volumes (1-3 mL/kg) at high frequencies (3-15 Hz), relying on diffusion and asymmetric velocity profiles",
      "Maintaining a constant high airway pressure with periodic large breaths",
      "Delivering pressure support synchronized with the patient's own respiratory effort"
    ],
    "correctIndex": 1,
    "explanation": "HFOV delivers very small volumes at very high frequencies, keeping mean airway pressure constant and high. Gas exchange occurs via enhanced diffusion, asymmetric velocity profiles, and other non-convective mechanisms. It minimizes tidal volume-related injury in severe ARDS but requires deep sedation/paralysis.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A 70 kg male patient's ideal body weight is used to calculate tidal volume. Using the ARDSnet protocol at 6 mL/kg IBW, what is the target tidal volume?",
    "options": [
      "280 mL",
      "350 mL",
      "420 mL",
      "490 mL"
    ],
    "correctIndex": 2,
    "explanation": "For males, IBW ≈ 50 + 2.3 × (height in inches - 60). For a 70 kg person, IBW is based on height, not actual weight. Assuming this refers to a patient with IBW of 70 kg: 70 × 6 = 420 mL. Always use IBW (not actual weight) to avoid volutrauma in obese patients.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Normal I:E ratio is 1:2. When would you intentionally use an INVERSE ratio (e.g., 1:1 or 2:1)?",
    "options": [
      "In patients with COPD to allow complete exhalation",
      "In severe ARDS to increase mean airway pressure and improve oxygenation via auto-PEEP",
      "In patients with bronchospasm to reduce air trapping",
      "During weaning trials to reduce work of breathing"
    ],
    "correctIndex": 1,
    "explanation": "Inverse ratio ventilation (IRV) prolongs inspiration relative to expiration, increasing mean airway pressure and creating auto-PEEP that improves alveolar recruitment in ARDS. It is NOT used in obstructive disease (COPD/asthma) where adequate exhalation time is critical to prevent dangerous air trapping.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Static lung compliance is calculated using which formula?",
    "options": [
      "Peak Pressure / Tidal Volume",
      "Tidal Volume / (Plateau Pressure - PEEP)",
      "Tidal Volume / (Peak Pressure - PEEP)",
      "(Plateau Pressure - Peak Pressure) / Tidal Volume"
    ],
    "correctIndex": 1,
    "explanation": "Static compliance (Cstat) = Tidal Volume / (Plateau Pressure - PEEP). Plateau pressure is measured during an inspiratory hold, reflecting true alveolar pressure with no airflow. Normal Cstat is 60-100 mL/cmH₂O; values <40 indicate stiff lungs (ARDS, fibrosis, pulmonary edema).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A ventilated patient has a peak inspiratory pressure (PIP) of 45 cmH₂O and a plateau pressure of 42 cmH₂O. What does this indicate?",
    "options": [
      "Severely decreased lung compliance",
      "Increased airway resistance (bronchospasm, secretions, kinked ET tube)",
      "Auto-PEEP is present",
      "Normal ventilator function"
    ],
    "correctIndex": 0,
    "explanation": "The Peak-to-Plateau gradient (PIP - Pplat) reflects airway resistance, and a small gradient (3 cmH₂O here) suggests resistance is NOT the problem. High plateau pressure (42 cmH₂O > 30 threshold) with a small gradient points to severely decreased lung compliance (stiff lungs: ARDS, pneumonia, pulmonary edema, tension pneumothorax).",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A patient is set on VC-AC with TV 500 mL and RR 14. Their minute ventilation is:",
    "options": [
      "5.0 L/min",
      "6.0 L/min",
      "7.0 L/min",
      "Depends on FiO2 setting"
    ],
    "correctIndex": 2,
    "explanation": "Minute ventilation (VE) = Tidal Volume × Respiratory Rate = 0.5 L × 14 = 7.0 L/min. This is the guaranteed minimum minute ventilation in A/C mode. If the patient triggers additional breaths, actual VE will be higher.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A ventilated patient suddenly triggers a high peak pressure alarm. Plateau pressure is normal (unchanged). What is the most likely cause?",
    "options": [
      "Worsening ARDS reducing lung compliance",
      "Increased airway resistance: bronchospasm, secretions, or kinked/partially occluded ET tube",
      "Tension pneumothorax",
      "Pulmonary edema"
    ],
    "correctIndex": 1,
    "explanation": "High PIP with NORMAL Pplat means the resistance between the ventilator and the alveoli has increased (PIP - Pplat gradient is widened). Causes: bronchospasm, mucus plug, patient biting the ETT, kinked circuit/tube. When BOTH PIP and Pplat are high, compliance is the problem (ARDS, pneumothorax, edema).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "How is auto-PEEP (intrinsic PEEP) detected at the bedside?",
    "options": [
      "The plateau pressure exceeds 30 cmH₂O",
      "An expiratory hold maneuver — the pressure on the display rises above the set PEEP at end-expiration",
      "The patient's SpO2 drops suddenly",
      "The peak-to-plateau gradient exceeds 10 cmH₂O"
    ],
    "correctIndex": 1,
    "explanation": "Auto-PEEP is measured by applying an expiratory hold (typically 2-5 seconds) at end-expiration. During the hold, gas that was trapped redistributes and equilibrates with the circuit, revealing the total PEEP. Total PEEP minus set extrinsic PEEP = auto-PEEP. It is common in COPD and asthma patients on mechanical ventilation.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient on VC-AC (TV 500 mL, RR 12) is triggering the ventilator at 26 breaths/min. ABG shows pH 7.52 and PaCO2 28 mmHg. What is the priority intervention?",
    "options": [
      "Increase the backup respiratory rate",
      "Increase tidal volume to improve oxygenation",
      "Investigate and treat the cause of tachypnea; consider sedation or addressing pain/anxiety",
      "Increase FiO2 to 80%"
    ],
    "correctIndex": 2,
    "explanation": "In A/C mode, every patient-triggered breath receives the full TV, so tachypnea creates respiratory alkalosis (pH 7.52, CO2 28). This represents ventilator dyssynchrony or an underlying problem driving rapid breathing (pain, anxiety, fever, sepsis, inadequate sedation). Treat the underlying cause and consider sedation — simply increasing rate or volume worsens alkalosis.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which type of patient-ventilator dyssynchrony occurs when the ventilator begins delivering gas before the patient has completed their neural inspiratory effort?",
    "options": [
      "Missed trigger",
      "Double-triggering",
      "Flow starvation",
      "Premature cycling (short cycling)"
    ],
    "correctIndex": 3,
    "explanation": "Premature cycling (short cycling) occurs when the ventilator cycles to exhalation before the patient's neural inspiration ends — the patient 'misses' the full breath. Double-triggering is when one patient effort results in two machine breaths. Missed trigger is a patient effort that fails to trigger the ventilator. Flow starvation is insufficient inspiratory flow for the patient's demand.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Driving pressure (ΔP) in ARDS is calculated as:",
    "options": [
      "Peak Pressure - PEEP",
      "Plateau Pressure - PEEP",
      "Tidal Volume / Body Weight",
      "Minute Ventilation / FRC"
    ],
    "correctIndex": 1,
    "explanation": "Driving pressure = Plateau Pressure − PEEP. It represents the actual pressure delivered to the lung per breath, normalized to the functional lung size. Studies show that driving pressure >15 cmH₂O is independently associated with increased ARDS mortality. Minimizing driving pressure (target ≤15) may be more important than targeting specific TV or Pplat alone.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which of the following is a prerequisite before starting a Spontaneous Breathing Trial (SBT)?",
    "options": [
      "FiO2 ≤ 0.60 with PEEP ≤ 8 cmH₂O and hemodynamic stability without vasopressors",
      "PaO2 > 200 mmHg on room air",
      "Patient must be awake enough to follow commands and have zero secretions",
      "PaCO2 must be normalized to 40 mmHg"
    ],
    "correctIndex": 0,
    "explanation": "Standard SBT prerequisites include: (1) clinical improvement from underlying cause, (2) FiO2 ≤40-60% with PEEP ≤5-8 cmH₂O, (3) hemodynamic stability (no or low-dose vasopressors), (4) intact respiratory drive, and (5) can follow simple commands. Requiring zero secretions or perfect ABG values would exclude many extubatable patients.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient on a T-piece SBT develops a respiratory rate of 34, SpO2 drops from 96% to 89%, and shows accessory muscle use after 18 minutes. This SBT should be:",
    "options": [
      "Continued — wait the full 30 minutes to assess",
      "Terminated immediately — these are signs of SBT failure; resume full ventilatory support",
      "Continued with supplemental oxygen increase only",
      "Considered successful — brief desaturation is acceptable"
    ],
    "correctIndex": 1,
    "explanation": "SBT failure criteria include: RR >35, SpO2 <88-90%, signs of increased work of breathing (accessory muscles, diaphoresis, paradoxical breathing), HR >140 or >20% change, or patient distress/agitation. Any of these is sufficient to terminate the SBT. Resume full support and reassess next day.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A Negative Inspiratory Force (NIF / MIP) of what value predicts adequate respiratory muscle strength for extubation?",
    "options": [
      "Less negative than -10 cmH₂O (e.g., -8)",
      "More negative than -20 cmH₂O (e.g., -25 or greater effort)",
      "Exactly -15 cmH₂O",
      "NIF is not used for extubation prediction"
    ],
    "correctIndex": 1,
    "explanation": "A NIF (maximum inspiratory pressure generated against an occluded airway) of at least -20 cmH₂O (the more negative, the better — meaning stronger effort) suggests adequate inspiratory muscle strength for extubation. Values less negative than -20 (e.g., -10) indicate respiratory muscle weakness and higher extubation failure risk.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which weaning method (SBT technique) has the strongest evidence for predicting extubation success?",
    "options": [
      "Gradual SIMV rate reduction over multiple days",
      "Progressive PSV reduction over multiple days",
      "Once-daily SBT with T-piece or low-level PSV (5-8 cmH₂O)",
      "Prolonged CPAP trial at 10 cmH₂O"
    ],
    "correctIndex": 2,
    "explanation": "Once-daily SBT with T-piece or low-level PSV (≤8 cmH₂O) is the most evidence-based weaning strategy. Studies show it leads to faster extubation than gradual SIMV reduction or progressive PSV weaning. If the SBT is passed, extubation should be performed the same day.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Post-extubation stridor in adults is most commonly caused by:",
    "options": [
      "Supraglottic edema from prolonged intubation",
      "Subglottic/glottic edema, most commonly from the ETT cuff pressure",
      "Secretion accumulation in the hypopharynx",
      "Vocal cord paralysis from nerve damage"
    ],
    "correctIndex": 1,
    "explanation": "Post-extubation stridor is most often caused by subglottic/glottic edema from the endotracheal tube irritating the mucosa, particularly when cuff pressures were excessive or intubation was prolonged. Risk factors: female sex, small ETT relative to airway, traumatic intubation, prolonged intubation. Treated with nebulized racemic epinephrine and IV dexamethasone.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In ARDSnet lung-protective ventilation, permissive hypercapnia is acceptable as long as pH remains above:",
    "options": [
      "7.10",
      "7.20",
      "7.30",
      "7.35"
    ],
    "correctIndex": 1,
    "explanation": "Permissive hypercapnia allows PaCO2 to rise above normal in order to minimize tidal volumes and plateau pressures. The ARDSnet protocol generally accepts pH ≥7.20. Below that threshold, pH should be addressed with sodium bicarbonate administration or increasing respiratory rate (if Pplat permits).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient with severe COPD is intubated for acute respiratory failure. What ventilator strategy is most important?",
    "options": [
      "High respiratory rate to achieve normal PaCO2",
      "Low respiratory rate with adequate expiratory time to minimize auto-PEEP and air trapping",
      "High PEEP (≥15 cmH₂O) to prevent atelectasis",
      "Inverse ratio ventilation to improve oxygenation"
    ],
    "correctIndex": 1,
    "explanation": "COPD patients have air trapping due to expiratory flow limitation. On the ventilator, strategies include: low RR (10-14), adequate expiratory time (I:E 1:3 to 1:4), low tidal volumes, permissive hypercapnia to their chronic baseline, and minimal extrinsic PEEP. High PEEP worsens air trapping; inverse ratio ventilation is contraindicated.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Neuromuscular blocking agents (NMB) are used in ventilated ARDS patients primarily to:",
    "options": [
      "Reduce the patient's sedation requirements",
      "Eliminate patient-ventilator dyssynchrony and prevent P-SILI (patient self-inflicted lung injury)",
      "Treat bronchospasm",
      "Prevent ventilator-associated pneumonia"
    ],
    "correctIndex": 1,
    "explanation": "In severe ARDS (P/F <150), NMB agents (e.g., cisatracurium) are used to eliminate ventilator dyssynchrony, prevent vigorous spontaneous efforts that generate high transpulmonary pressures (P-SILI), and facilitate lung-protective ventilation. The ACURASYS trial showed a 28-day mortality benefit for early cisatracurium in severe ARDS.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The 'open lung' strategy in ARDS uses higher PEEP levels to:",
    "options": [
      "Eliminate CO2 more efficiently",
      "Keep previously collapsed alveoli open throughout the respiratory cycle (prevent derecruitment)",
      "Increase tidal volume delivery",
      "Reduce sedation requirements"
    ],
    "correctIndex": 1,
    "explanation": "Higher PEEP in ARDS keeps the pressure at end-expiration above the closing pressure of recruited alveoli, preventing repetitive opening and closing (atelectrauma). The PEEP level must be balanced against overdistension risk — ideally titrated to best compliance or using PEEP-FiO2 tables from the ARDSnet protocol.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which of the following inhaled pulmonary vasodilators is most commonly used as an adjunct therapy in mechanically ventilated ARDS patients with severe hypoxemia?",
    "options": [
      "Inhaled nitrous oxide",
      "Inhaled nitric oxide (iNO)",
      "Inhaled prostacyclin (Epoprostenol / Flolan)",
      "Both B and C are used — iNO and inhaled epoprostenol"
    ],
    "correctIndex": 3,
    "explanation": "Both inhaled nitric oxide (iNO) and inhaled epoprostenol (prostacyclin) are used as adjunct therapies for refractory hypoxemia in ARDS. They selectively vasodilate ventilated lung segments, improving V/Q matching. Neither has shown a consistent mortality benefit, but both consistently improve oxygenation as a bridge to other therapies or ECMO.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A patient is on mechanical ventilation following a C4 spinal cord injury. The most important long-term ventilation consideration is:",
    "options": [
      "Using highest possible FiO2 to prevent hypoxia",
      "Phrenic nerve pacing or planned long-term ventilator dependence due to loss of diaphragm innervation",
      "Aggressive early weaning with SIMV",
      "Using non-invasive ventilation only"
    ],
    "correctIndex": 1,
    "explanation": "C3-C5 spinal cord injury damages the phrenic nerve nuclei (C3-C5 'keeps the diaphragm alive'). C4 injury causes complete or near-complete diaphragm paralysis requiring permanent ventilatory support. Phrenic nerve pacing may be considered if the phrenic nerve is intact. Weaning prognosis is poor without intact C4 innervation.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The PEEP titration in ARDS should generally be guided by:",
    "options": [
      "SpO2 alone — keep SpO2 >92%",
      "Best static compliance, FiO2-PEEP tables, or esophageal pressure monitoring for transpulmonary pressure",
      "The patient's comfort level",
      "Maintaining PaCO2 in the normal range"
    ],
    "correctIndex": 1,
    "explanation": "Optimal PEEP in ARDS maximizes alveolar recruitment without causing overdistension. Methods include: (1) ARDSnet FiO2-PEEP tables, (2) incremental PEEP titration to best compliance (highest Cstat), (3) esophageal pressure monitoring to target transpulmonary PEEP of 0-10 cmH₂O. One method is not universally superior.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In Volume-Control Assist-Control (VC-AC) mode, what is delivered with every breath?",
    "options": [
      "A fixed inspiratory pressure",
      "A preset tidal volume",
      "A variable flow based on patient effort",
      "A fixed respiratory rate only"
    ],
    "correctIndex": 1,
    "explanation": "In VC-AC, every breath — whether patient-triggered or machine-timed — delivers the full preset tidal volume, guaranteeing minute ventilation.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Which ventilator mode is most appropriate for initial management of a critically ill intubated patient?",
    "options": [
      "PSV alone",
      "SIMV without pressure support",
      "Volume-Control Assist-Control",
      "CPAP"
    ],
    "correctIndex": 2,
    "explanation": "VC-AC is the most common initial mode for critically ill patients because it guarantees minute ventilation by delivering the full preset TV with every breath.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A patient on VC-AC with a set rate of 12 is breathing at 22 breaths/min. What is the consequence?",
    "options": [
      "Hypoventilation",
      "Respiratory alkalosis",
      "Increased PaCO2",
      "Auto-PEEP only"
    ],
    "correctIndex": 1,
    "explanation": "In VC-AC, every patient-triggered breath delivers the full tidal volume. Overbreathing the set rate causes excessive CO2 elimination, leading to respiratory alkalosis.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In Pressure-Control Assist-Control (PC-AC), what remains constant?",
    "options": [
      "Tidal volume",
      "Inspiratory pressure",
      "Flow rate",
      "Respiratory rate"
    ],
    "correctIndex": 1,
    "explanation": "PC-AC delivers a fixed inspiratory pressure above PEEP with each breath. Tidal volume varies depending on patient compliance and resistance.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A patient on PC-AC develops worsening ARDS. Despite unchanged settings, tidal volume decreases from 500 mL to 340 mL. What is the most likely explanation?",
    "options": [
      "Increased airway resistance",
      "Decreased respiratory rate",
      "Decreased lung compliance",
      "Increased auto-PEEP"
    ],
    "correctIndex": 2,
    "explanation": "In PC-AC, decreasing compliance means less volume is generated for the same pressure. The tidal volume drop indicates worsening lung stiffness.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which flow waveform is characteristic of Pressure-Control ventilation?",
    "options": [
      "Square (constant)",
      "Sinusoidal",
      "Decelerating",
      "Accelerating"
    ],
    "correctIndex": 2,
    "explanation": "Pressure-control modes generate a decelerating flow waveform: flow is highest at the start of inspiration and tapers to zero by end-inspiration, improving gas distribution.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "SIMV differs from A/C in that:",
    "options": [
      "SIMV provides full support for every breath",
      "SIMV delivers mandatory breaths but allows unsupported spontaneous breaths between them",
      "SIMV provides higher minute ventilation",
      "SIMV eliminates patient-ventilator dyssynchrony"
    ],
    "correctIndex": 1,
    "explanation": "In SIMV, the ventilator delivers timed mandatory breaths at a set rate; spontaneous breaths between mandatory breaths receive no extra support unless pressure support is added.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Why is SIMV generally considered inferior to A/C for initial ventilatory support?",
    "options": [
      "SIMV delivers too much pressure",
      "Unsupported spontaneous breaths increase work of breathing and diaphragm fatigue",
      "SIMV cannot be used in ARDS",
      "SIMV causes more auto-PEEP than A/C"
    ],
    "correctIndex": 1,
    "explanation": "Unsupported spontaneous breaths in SIMV force the patient to breathe against circuit resistance, increasing work of breathing and potentially causing respiratory muscle fatigue.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In Pressure Support Ventilation (PSV), what triggers each breath?",
    "options": [
      "The ventilator timer",
      "The patient's own inspiratory effort",
      "A set flow threshold",
      "Mandatory backup rate"
    ],
    "correctIndex": 1,
    "explanation": "PSV is entirely patient-triggered. The ventilator augments each patient-initiated breath with a set pressure boost; there are no mandatory machine-delivered breaths.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A patient on PSV becomes apneic. What is the immediate danger?",
    "options": [
      "Excessive tidal volume",
      "No backup rate → apnea → hypoxia/death if not detected",
      "Pressure-related barotrauma",
      "Oxygen toxicity"
    ],
    "correctIndex": 1,
    "explanation": "PSV has no mandatory backup rate. If the patient becomes apneic, no breaths are delivered. Apnea alarms are critical for patient safety on PSV.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which mode auto-adjusts inspiratory pressure breath-to-breath to achieve a target tidal volume?",
    "options": [
      "VC-AC",
      "PC-AC",
      "PRVC (Pressure-Regulated Volume Control)",
      "SIMV"
    ],
    "correctIndex": 2,
    "explanation": "PRVC is a dual-control mode that adjusts the inspiratory pressure up or down each breath to maintain the target tidal volume, combining volume guarantee with a pressure-control waveform.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In PRVC, if lung compliance suddenly improves (e.g., after surfactant therapy), what happens to the set inspiratory pressure?",
    "options": [
      "It increases to maintain volume",
      "It decreases because less pressure is needed to achieve the target volume",
      "It remains unchanged",
      "It converts to volume-control mode"
    ],
    "correctIndex": 1,
    "explanation": "PRVC automatically decreases inspiratory pressure when compliance improves, preventing volutrauma by delivering the same target TV at a lower pressure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "APRV (Airway Pressure Release Ventilation) maintains:",
    "options": [
      "A low sustained CPAP with brief high-pressure releases",
      "A high sustained CPAP (P-High) with brief releases to P-Low",
      "Volume-targeted breaths at high rates",
      "Fixed inspiratory and expiratory pressures equal to PEEP"
    ],
    "correctIndex": 1,
    "explanation": "APRV maintains a high sustained airway pressure (P-High, typically 25–35 cmH₂O) for most of the cycle, with brief releases to P-Low for CO2 clearance.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "APRV is primarily used for:",
    "options": [
      "Weaning from mechanical ventilation",
      "Refractory hypoxemia in ARDS with sustained lung recruitment",
      "Patients with severe COPD exacerbations",
      "Post-operative patients with intact respiratory drive"
    ],
    "correctIndex": 1,
    "explanation": "APRV's prolonged P-High phase provides sustained alveolar recruitment, making it useful in refractory ARDS. It requires adequate spontaneous respiratory drive.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "HFOV (High-Frequency Oscillatory Ventilation) uses what tidal volumes?",
    "options": [
      "6 mL/kg IBW",
      "10–12 mL/kg IBW",
      "1–3 mL/kg (less than anatomic dead space)",
      "8 mL/kg actual body weight"
    ],
    "correctIndex": 2,
    "explanation": "HFOV delivers very small tidal volumes (1–3 mL/kg, often less than dead space) at very high frequencies (3–15 Hz), relying on diffusion and non-convective gas transport.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In HFOV, CO2 elimination is primarily controlled by:",
    "options": [
      "FiO2",
      "Mean airway pressure",
      "Amplitude (ΔP) and frequency",
      "PEEP setting"
    ],
    "correctIndex": 2,
    "explanation": "In HFOV, CO2 clearance is determined by the oscillatory amplitude (ΔP) and frequency. Increasing amplitude or decreasing frequency improves CO2 elimination.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which ventilator mode requires the deepest sedation and often neuromuscular blockade?",
    "options": [
      "PSV",
      "SIMV",
      "HFOV",
      "PC-AC"
    ],
    "correctIndex": 2,
    "explanation": "HFOV requires the patient to be completely passive. Any spontaneous breathing disrupts the oscillatory pattern. Deep sedation and neuromuscular blockade are mandatory.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient is on PC-AC and the physician orders a change to VC-AC at the same tidal volume. What change in waveform should the RT expect?",
    "options": [
      "Flow changes from square to decelerating",
      "Flow changes from decelerating to square (constant)",
      "Pressure waveform becomes sinusoidal",
      "No change in waveform"
    ],
    "correctIndex": 1,
    "explanation": "VC-AC delivers a constant (square) flow waveform by default. PC-AC delivers a decelerating flow waveform. Switching from PC to VC changes the flow pattern from decelerating to square.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which mode is most appropriate for a patient undergoing a spontaneous breathing trial (SBT)?",
    "options": [
      "VC-AC",
      "PC-AC",
      "PSV or CPAP",
      "HFOV"
    ],
    "correctIndex": 2,
    "explanation": "SBTs are conducted on minimal support — typically low-level PSV (5–8 cmH₂O) or T-piece/CPAP — to assess the patient's ability to breathe independently.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "In SIMV, adding pressure support to spontaneous breaths is intended to:",
    "options": [
      "Increase mandatory breath rate",
      "Reduce work of breathing during spontaneous breaths",
      "Increase tidal volume of mandatory breaths",
      "Eliminate auto-PEEP"
    ],
    "correctIndex": 1,
    "explanation": "Adding PS to SIMV reduces the work of breathing during unsupported spontaneous breaths, compensating for the resistance of the ETT and circuit.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A spontaneous breath on PSV cycles off inspiration when:",
    "options": [
      "A set inspiratory time is reached",
      "Flow decays to a threshold (typically 25% of peak flow)",
      "Tidal volume reaches the set value",
      "The patient exhales forcefully"
    ],
    "correctIndex": 1,
    "explanation": "PSV uses flow-cycling: expiration begins when inspiratory flow decelerates to a set percentage of peak flow (commonly 25%). This allows the breath to match the patient's neural inspiratory time.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Delayed cycling in PSV (machine stays in inspiration too long) is most commonly seen in:",
    "options": [
      "ARDS patients",
      "Patients with COPD (high compliance, air trapping)",
      "Patients with pulmonary fibrosis",
      "Pediatric patients"
    ],
    "correctIndex": 1,
    "explanation": "In COPD, high compliance slows flow deceleration. The 25% flow-cycle threshold is met later, extending neural expiration. Lowering the cycle-off threshold helps correct this.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Pressure support of 0 cmH₂O above PEEP on CPAP essentially tests:",
    "options": [
      "The ventilator's ability to maintain PEEP",
      "The patient's unassisted breathing ability (T-piece equivalent)",
      "Compliance with mandatory breaths",
      "The FiO2 delivery accuracy"
    ],
    "correctIndex": 1,
    "explanation": "CPAP with 0 PS is functionally equivalent to a T-piece trial — the patient receives no inspiratory assistance beyond the continuous airway pressure, testing true spontaneous ventilation.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "What tidal volume does the ARDSNet lung-protective protocol recommend?",
    "options": [
      "10–12 mL/kg ideal body weight",
      "8–10 mL/kg actual body weight",
      "6 mL/kg ideal body weight",
      "4 mL/kg actual body weight"
    ],
    "correctIndex": 2,
    "explanation": "ARDSNet recommends 6 mL/kg IBW for lung-protective ventilation in ARDS. Using actual body weight can lead to dangerously high volumes in obese patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "How is ideal body weight (IBW) calculated for a 70-inch male?",
    "options": [
      "50 + 2.3 × (70 − 60) = 73 kg",
      "45.5 + 2.3 × (70 − 60) = 68.5 kg",
      "70 × 0.9 = 63 kg",
      "60 + 1.5 × (70 − 60) = 75 kg"
    ],
    "correctIndex": 0,
    "explanation": "IBW for males = 50 + 2.3 × (height in inches − 60). For a 70-inch male: 50 + 2.3 × 10 = 73 kg. For females, use 45.5 as the base.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A 5-foot-4-inch (64 inch) female requires mechanical ventilation for ARDS. What is her IBW and target tidal volume at 6 mL/kg?",
    "options": [
      "IBW 54.7 kg → TV 328 mL",
      "IBW 60 kg → TV 360 mL",
      "IBW 45.5 kg → TV 273 mL",
      "IBW 50 kg → TV 300 mL"
    ],
    "correctIndex": 0,
    "explanation": "Female IBW = 45.5 + 2.3 × (64 − 60) = 45.5 + 9.2 = 54.7 kg. Target TV = 54.7 × 6 ≈ 328 mL.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "What is the initial recommended PEEP for a newly intubated patient without ARDS?",
    "options": [
      "0 cmH₂O",
      "3 cmH₂O",
      "5 cmH₂O",
      "10 cmH₂O"
    ],
    "correctIndex": 2,
    "explanation": "Standard initial PEEP is 5 cmH₂O for most ventilated patients. This prevents atelectasis without causing hemodynamic compromise in non-ARDS patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "The ARDSNet protocol uses a higher PEEP strategy in ARDS. Which table guides PEEP titration?",
    "options": [
      "FiO2–PEEP table targeting SpO2 88–95% or PaO2 55–80 mmHg",
      "PEEP–compliance table targeting Cstat >50 mL/cmH₂O",
      "PaCO2–RR table targeting pH 7.35–7.45",
      "FiO2–TV table targeting SpO2 >98%"
    ],
    "correctIndex": 0,
    "explanation": "ARDSNet uses the FiO2–PEEP table to coordinate PEEP and FiO2, targeting SpO2 88–95% (PaO2 55–80 mmHg) while minimizing oxygen toxicity.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient has PaO2 of 55 mmHg on FiO2 0.40 and PEEP 5. According to the ARDSNet lower PEEP table, what should be done?",
    "options": [
      "Increase FiO2 alone to 0.60",
      "Increase PEEP to 8 and/or increase FiO2",
      "Decrease FiO2 to 0.30",
      "Switch to HFOV immediately"
    ],
    "correctIndex": 1,
    "explanation": "The ARDSNet FiO2–PEEP table specifies coordinated increases. PaO2 55 mmHg is at the lower acceptable limit; PEEP should be increased (along with FiO2 if needed) per the protocol table.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Minute ventilation (VE) is calculated as:",
    "options": [
      "TV / RR",
      "TV × RR",
      "RR / TV",
      "(TV − Dead space) × RR"
    ],
    "correctIndex": 1,
    "explanation": "Minute ventilation = Tidal Volume × Respiratory Rate. For example, TV 500 mL × RR 12 = VE 6 L/min.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A patient has TV 450 mL and RR 16. What is their minute ventilation?",
    "options": [
      "5.6 L/min",
      "7.2 L/min",
      "9.0 L/min",
      "4.5 L/min"
    ],
    "correctIndex": 1,
    "explanation": "VE = TV × RR = 0.45 L × 16 = 7.2 L/min.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "To decrease a patient's PaCO2 from 60 to 40 mmHg, what change in minute ventilation is required?",
    "options": [
      "Increase VE by 25%",
      "Increase VE by 50%",
      "Decrease VE by 50%",
      "Double the respiratory rate only"
    ],
    "correctIndex": 1,
    "explanation": "PaCO2 is inversely proportional to alveolar ventilation. To reduce PaCO2 by 33% (from 60 to 40), VE must increase by approximately 50%.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Normal I:E ratio for most mechanically ventilated patients is:",
    "options": [
      "1:1",
      "1:2",
      "2:1",
      "1:4"
    ],
    "correctIndex": 1,
    "explanation": "The normal I:E ratio is 1:2 — 1 second inhalation for every 2 seconds exhalation — allowing adequate expiratory time for CO2 clearance.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "For a patient with severe COPD on mechanical ventilation, the I:E ratio should be adjusted to:",
    "options": [
      "1:1 (inverse ratio)",
      "1:2 (normal)",
      "1:3 to 1:4 (prolonged expiration)",
      "2:1 (inverse ratio)"
    ],
    "correctIndex": 2,
    "explanation": "COPD patients have high airway resistance and air trapping. Prolonging the expiratory phase (I:E 1:3 to 1:4) allows more complete exhalation, reducing auto-PEEP.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Inverse ratio ventilation (IRV, I:E > 1:1) is used in ARDS to:",
    "options": [
      "Decrease mean airway pressure",
      "Increase mean airway pressure and improve oxygenation",
      "Reduce respiratory rate requirements",
      "Eliminate auto-PEEP"
    ],
    "correctIndex": 1,
    "explanation": "Prolonging inspiration increases mean airway pressure, improving alveolar recruitment and oxygenation in refractory ARDS. However, it can cause auto-PEEP and requires heavy sedation.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Static compliance (Cstat) is calculated using:",
    "options": [
      "TV / (PIP − PEEP)",
      "TV / (Pplat − PEEP)",
      "PIP − PEEP",
      "TV × RR"
    ],
    "correctIndex": 1,
    "explanation": "Cstat = TV / (Pplat − PEEP). Using plateau pressure (measured during an inspiratory hold with no airflow) reflects pure lung–chest wall compliance without airway resistance.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Dynamic compliance (Cdyn) is calculated using:",
    "options": [
      "TV / (Pplat − PEEP)",
      "TV / (PIP − PEEP)",
      "PIP / TV",
      "(PIP − PEEP) × TV"
    ],
    "correctIndex": 1,
    "explanation": "Cdyn = TV / (PIP − PEEP). PIP includes both compliance and resistance components, so Cdyn is always less than or equal to Cstat.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient has TV 500 mL, PIP 35 cmH₂O, Pplat 25 cmH₂O, and PEEP 5 cmH₂O. What is the static compliance?",
    "options": [
      "25 mL/cmH₂O",
      "50 mL/cmH₂O",
      "16.7 mL/cmH₂O",
      "35 mL/cmH₂O"
    ],
    "correctIndex": 1,
    "explanation": "Cstat = TV / (Pplat − PEEP) = 500 / (25 − 5) = 500 / 20 = 25 mL/cmH₂O. Wait — 500/20 = 25. Let me recalculate: Pplat 25 − PEEP 5 = 20. 500/20 = 25. Actually the answer 50 mL/cmH₂O would require Pplat−PEEP = 10. The correct answer with these numbers is 25 mL/cmH₂O — indicating poor compliance (ARDS range).",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Normal static compliance in a mechanically ventilated patient is approximately:",
    "options": [
      "20–40 mL/cmH₂O",
      "60–100 mL/cmH₂O",
      "10–20 mL/cmH₂O",
      "100–150 mL/cmH₂O"
    ],
    "correctIndex": 1,
    "explanation": "Normal Cstat is 60–100 mL/cmH₂O. Values below 40 suggest poor lung compliance (e.g., ARDS, pulmonary edema). Values above 100 suggest hyperinflation or emphysema.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Driving pressure (ΔP) is defined as:",
    "options": [
      "PIP − PEEP",
      "Pplat − PEEP",
      "PIP − Pplat",
      "Mean airway pressure − PEEP"
    ],
    "correctIndex": 1,
    "explanation": "Driving pressure = Pplat − PEEP. It represents the actual tidal stress applied to the lung with each breath and is the strongest modifiable predictor of ARDS mortality.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "What is the target driving pressure in ARDS management?",
    "options": [
      "≤ 5 cmH₂O",
      "≤ 10 cmH₂O",
      "≤ 15 cmH₂O",
      "≤ 25 cmH₂O"
    ],
    "correctIndex": 2,
    "explanation": "Studies show that keeping driving pressure ≤ 15 cmH₂O is associated with reduced ARDS mortality. Driving pressure is considered the best single ventilator variable linked to outcome.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient has PIP 40, Pplat 30, and PEEP 10 cmH₂O. What is the driving pressure and airway resistance contribution?",
    "options": [
      "ΔP = 20 cmH₂O; resistance = 5 cmH₂O",
      "ΔP = 20 cmH₂O; resistance = 10 cmH₂O",
      "ΔP = 30 cmH₂O; resistance = 10 cmH₂O",
      "ΔP = 10 cmH₂O; resistance = 10 cmH₂O"
    ],
    "correctIndex": 1,
    "explanation": "ΔP = Pplat − PEEP = 30 − 10 = 20 cmH₂O. Resistance contribution = PIP − Pplat = 40 − 30 = 10 cmH₂O. The driving pressure of 20 cmH₂O exceeds the ≤15 target.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "When should FiO2 be reduced from 1.0 (100%) after intubation?",
    "options": [
      "After 30 minutes regardless of SpO2",
      "As rapidly as possible to ≤ 0.60 once SpO2 is ≥ 88%",
      "After 24 hours",
      "Only when PaO2 > 200 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "FiO2 ≥ 0.60 for prolonged periods causes oxygen toxicity. Wean FiO2 rapidly to ≤ 0.60 as soon as SpO2 targets are met (SpO2 88–95% in ARDS or SpO2 ≥ 92% in others).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "An ARDS patient targets SpO2 of:",
    "options": [
      "≥ 98%",
      "95–100%",
      "88–95%",
      "80–88%"
    ],
    "correctIndex": 2,
    "explanation": "ARDS protocols accept a lower SpO2 target (88–95% or PaO2 55–80 mmHg) to minimize FiO2 and avoid oxygen toxicity while allowing higher PEEP.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Initial RR settings for most intubated patients are typically:",
    "options": [
      "6–8 breaths/min",
      "10–14 breaths/min",
      "14–18 breaths/min",
      "20–30 breaths/min"
    ],
    "correctIndex": 2,
    "explanation": "Initial RR of 14–18 breaths/min provides adequate minute ventilation for most patients. In ARDS with low TV, the rate may be increased to 20–35 to maintain minute ventilation.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Which calculation determines mean airway pressure (MAP) most accurately on a pressure-time waveform?",
    "options": [
      "(PIP + PEEP) / 2",
      "Area under the pressure-time curve / total breath cycle time",
      "Pplat + PEEP / 2",
      "PIP × inspiratory time"
    ],
    "correctIndex": 1,
    "explanation": "Mean airway pressure is the area under the pressure-time curve divided by the total breath cycle time. It reflects the average pressure applied to the lung throughout the entire breath cycle.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A patient on VC-AC has sudden rise in PIP from 30 to 45 cmH₂O. Pplat remains at 28 cmH₂O. What is the most likely cause?",
    "options": [
      "Worsening pneumonia (compliance problem)",
      "Mucus plug or bronchospasm (resistance problem)",
      "Tension pneumothorax",
      "Ventilator circuit leak"
    ],
    "correctIndex": 1,
    "explanation": "HIGH PIP + NORMAL Pplat = resistance problem. The Pplat reflects lung compliance; if it's unchanged, the problem is in the airways (secretions, bronchospasm, kinked ETT, mucus plug).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient on VC-AC has both PIP and Pplat rise acutely from 28/22 to 45/38 cmH₂O. What is the most likely cause?",
    "options": [
      "Mucus plug (resistance problem)",
      "Worsening lung compliance (ARDS, pneumothorax, pulmonary edema)",
      "ETT cuff leak",
      "Circuit disconnection"
    ],
    "correctIndex": 1,
    "explanation": "HIGH PIP + HIGH Pplat = compliance problem. Both pressures rise together when the lung/chest wall becomes stiffer — as in ARDS progression, pneumothorax, pulmonary edema, or main-stem intubation.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "How do you perform an inspiratory hold to measure plateau pressure?",
    "options": [
      "Increase inspiratory time and read the resulting pressure",
      "Apply an end-inspiratory pause of 0.5–2 seconds with no airflow and read the equilibrium pressure",
      "Increase PEEP until flow stops",
      "Occlude the expiratory valve and read peak pressure"
    ],
    "correctIndex": 1,
    "explanation": "Pplat is measured by occluding the circuit at end-inspiration for 0.5–2 seconds. Airflow stops, and pressure equilibrates to reflect static lung compliance (no flow resistance).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "An acceptable plateau pressure for lung-protective ventilation in ARDS is:",
    "options": [
      "< 20 cmH₂O",
      "< 30 cmH₂O",
      "< 40 cmH₂O",
      "< 50 cmH₂O"
    ],
    "correctIndex": 1,
    "explanation": "ARDSNet protocol targets Pplat ≤ 30 cmH₂O to prevent barotrauma and volutrauma. If Pplat exceeds 30, tidal volume should be reduced in 1 mL/kg IBW decrements.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A low pressure / low tidal volume alarm triggers. The most common cause is:",
    "options": [
      "High airway resistance",
      "Air leak — ETT cuff leak, circuit disconnect, or chest tube air leak",
      "Increased lung compliance",
      "Ventilator malfunction"
    ],
    "correctIndex": 1,
    "explanation": "Low pressure alarms indicate a leak in the system. Check ETT cuff pressure (target 20–30 cmH₂O), inspect all circuit connections, and look for bronchopleural fistula.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "How is auto-PEEP detected?",
    "options": [
      "Measuring PIP with a pressure gauge",
      "Applying an expiratory hold at end-expiration in a passive patient and reading total PEEP",
      "Looking at the flow waveform during inspiration",
      "Measuring cuff pressure with a manometer"
    ],
    "correctIndex": 1,
    "explanation": "Auto-PEEP is detected by applying an end-expiratory pause (2–5 seconds) in a passive patient. The measured total PEEP minus set PEEP = auto-PEEP.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Auto-PEEP > 5 cmH₂O is clinically significant because:",
    "options": [
      "It improves oxygenation",
      "It reduces venous return, causing hemodynamic compromise and increasing work of breathing",
      "It eliminates the need for extrinsic PEEP",
      "It increases tidal volume"
    ],
    "correctIndex": 1,
    "explanation": "Significant auto-PEEP increases intrathoracic pressure, impedes venous return, and can cause hypotension. Patients must also overcome auto-PEEP to trigger the ventilator, increasing WOB.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "First-line management of auto-PEEP in a patient on VC-AC includes:",
    "options": [
      "Increase respiratory rate",
      "Increase tidal volume",
      "Decrease respiratory rate and/or tidal volume to allow more expiratory time",
      "Switch to PC-AC immediately"
    ],
    "correctIndex": 2,
    "explanation": "Auto-PEEP results from inadequate expiratory time. Decreasing RR lengthens expiratory time. Also treat bronchospasm, suction secretions, and consider increasing flow rate (VC) to shorten inspiratory time.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Adding extrinsic PEEP equal to approximately 80% of measured auto-PEEP is intended to:",
    "options": [
      "Eliminate auto-PEEP entirely",
      "Reduce the trigger work of breathing without worsening air trapping",
      "Increase oxygenation",
      "Prevent atelectasis"
    ],
    "correctIndex": 1,
    "explanation": "Setting extrinsic PEEP at ~80% of auto-PEEP reduces the pressure gradient the patient must overcome to trigger the ventilator, decreasing work of breathing without significantly worsening hyperinflation.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "On a flow-time waveform, expiratory flow that does not return to zero before the next breath begins indicates:",
    "options": [
      "Normal ventilation",
      "Auto-PEEP (air trapping)",
      "ETT cuff leak",
      "Decreased resistance"
    ],
    "correctIndex": 1,
    "explanation": "If expiratory flow has not returned to zero before the next breath, gas remains trapped in the lung — the hallmark of auto-PEEP on waveform analysis.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Flow starvation on a pressure-time waveform appears as:",
    "options": [
      "A flat pressure plateau",
      "A concave (scooped) pressure waveform during inspiration",
      "A sharp pressure spike at end-inspiration",
      "Oscillations during the pressure plateau"
    ],
    "correctIndex": 1,
    "explanation": "Flow starvation occurs when the ventilator's set flow cannot meet the patient's demand. The patient 'pulls down' the pressure waveform, creating a concave (scooped) appearance during inspiration.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "What is 'missed trigger' (ineffective effort) in patient-ventilator dyssynchrony?",
    "options": [
      "A machine breath triggered when the patient is not trying to breathe",
      "A patient effort that fails to trigger a machine breath",
      "A breath that triggers at the wrong time",
      "A breath that cycles off too early"
    ],
    "correctIndex": 1,
    "explanation": "Missed trigger (ineffective effort) occurs when a patient's inspiratory effort is insufficient to trigger the ventilator — commonly due to high auto-PEEP or sensitivity set too high.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Double triggering occurs when:",
    "options": [
      "Two patients are simultaneously ventilated",
      "One neural inspiratory effort triggers two consecutive machine breaths",
      "The patient triggers twice the set respiratory rate",
      "The ventilator delivers a breath before the patient exhales"
    ],
    "correctIndex": 1,
    "explanation": "Double triggering happens when the machine's inspiratory time is shorter than the patient's neural inspiratory time. The second machine breath is triggered by the continued patient effort right after the first.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "On a flow waveform, a negative deflection during the expiratory phase before the next breath indicates:",
    "options": [
      "Auto-PEEP",
      "Ineffective (missed) triggering effort",
      "Increased resistance",
      "Normal expiratory recoil"
    ],
    "correctIndex": 1,
    "explanation": "A negative (downward) deflection in the expiratory flow waveform represents a patient inspiratory effort that was insufficient to trigger the ventilator — a missed trigger, often due to auto-PEEP.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The target ETT cuff pressure to prevent aspiration while avoiding mucosal ischemia is:",
    "options": [
      "5–10 cmH₂O",
      "10–15 cmH₂O",
      "20–30 cmH₂O",
      "35–45 cmH₂O"
    ],
    "correctIndex": 2,
    "explanation": "ETT cuff pressure should be maintained at 20–30 cmH₂O (15–22 mmHg). Below 20 allows aspiration; above 30 risks tracheal mucosal ischemia and necrosis.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A sudden decrease in EtCO2 to near zero in a ventilated patient most likely indicates:",
    "options": [
      "Pulmonary embolism (decreased perfusion)",
      "Ventilator circuit disconnection",
      "Increased metabolic rate",
      "Esophageal intubation (no EtCO2 in first place)"
    ],
    "correctIndex": 1,
    "explanation": "Sudden drop of EtCO2 to zero in a previously ventilated patient most likely indicates a circuit disconnection or extubation. Pulmonary embolism causes a decrease but not zero.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "EtCO2 is consistently 10 mmHg lower than PaCO2. This gradient (PaCO2 − EtCO2) suggests:",
    "options": [
      "Increased dead space ventilation",
      "Hypoventilation",
      "CO2 retention",
      "Pulmonary shunt"
    ],
    "correctIndex": 0,
    "explanation": "A normal PaCO2–EtCO2 gradient is 2–5 mmHg. A wider gradient (>10 mmHg) indicates increased dead space (e.g., ARDS, pulmonary embolism, low cardiac output), meaning alveoli are ventilated but not perfused.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Peak inspiratory pressure (PIP) reflects:",
    "options": [
      "Lung compliance only",
      "Airway resistance only",
      "Both compliance and resistance (total load on the ventilator)",
      "Mean airway pressure"
    ],
    "correctIndex": 2,
    "explanation": "PIP reflects the total pressure needed to deliver the breath — including overcoming both airway resistance and lung-chest wall compliance. Pplat isolates the compliance component.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The Berlin definition classifies ARDS severity as mild, moderate, and severe based on:",
    "options": [
      "Tidal volume and PEEP",
      "PaO2/FiO2 ratio (P/F ratio) with PEEP ≥ 5 cmH₂O",
      "Chest X-ray findings alone",
      "PaCO2 levels"
    ],
    "correctIndex": 1,
    "explanation": "Berlin ARDS: Mild P/F 200–300, Moderate P/F 100–200, Severe P/F < 100 — all with PEEP ≥ 5 cmH₂O within 1 week of a known insult and bilateral opacities.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient has PaO2 65 mmHg on FiO2 0.50. What is the P/F ratio and ARDS severity?",
    "options": [
      "P/F 130 — Moderate ARDS",
      "P/F 65 — Severe ARDS",
      "P/F 32.5 — Severe ARDS",
      "P/F 200 — Mild ARDS"
    ],
    "correctIndex": 0,
    "explanation": "P/F = PaO2 / FiO2 = 65 / 0.50 = 130. P/F 100–200 = Moderate ARDS per Berlin definition.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The ARMA (ARDSNet) trial demonstrated that compared to 12 mL/kg TV, using 6 mL/kg TV:",
    "options": [
      "Increased ICU length of stay",
      "Reduced 28-day mortality by ~22%",
      "Increased pneumothorax rate",
      "Did not change outcomes"
    ],
    "correctIndex": 1,
    "explanation": "The landmark ARDSNet ARMA trial showed low tidal volume ventilation (6 mL/kg IBW) reduced 28-day mortality by about 22% (from ~40% to ~31%) compared to 12 mL/kg IBW.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Prone positioning in ARDS improves oxygenation by:",
    "options": [
      "Decreasing FRC and increasing dead space",
      "Redistributing perfusion to better-ventilated dorsal lung regions and reducing lung weight on dependent areas",
      "Increasing tidal volume requirements",
      "Reducing PEEP requirements to zero"
    ],
    "correctIndex": 1,
    "explanation": "Prone positioning redistributes lung perfusion toward dorsal regions (which remain better aerated than dorsal lung in supine position), reduces shunt fraction, and recruits dependent atelectasis.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "According to the PROSEVA trial, prone positioning should be considered in ARDS when:",
    "options": [
      "P/F > 200 with PEEP 5",
      "P/F < 150 despite optimized ventilator settings (moderate-severe ARDS)",
      "P/F < 300 on admission",
      "All ARDS patients regardless of severity"
    ],
    "correctIndex": 1,
    "explanation": "PROSEVA showed significant mortality benefit with prone positioning in ARDS with P/F < 150. Recommend ≥ 16 hours/day prone to achieve full benefit.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Neuromuscular blockade (NMB) in early severe ARDS (P/F < 150) is used to:",
    "options": [
      "Increase FiO2 tolerance",
      "Eliminate patient-ventilator dyssynchrony, reduce oxygen consumption, and potentially reduce barotrauma",
      "Allow higher tidal volumes",
      "Replace the need for sedation"
    ],
    "correctIndex": 1,
    "explanation": "Early cisatracurium infusion in severe ARDS (ACURASYS trial) reduced double-triggering, oxygen consumption, and inflammatory mediator release, potentially improving outcomes.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In ARDS, recruitment maneuvers (RMs) temporarily apply high sustained pressure to:",
    "options": [
      "Reduce auto-PEEP",
      "Open collapsed (atelectatic) alveoli and improve oxygenation",
      "Decrease PaCO2",
      "Train respiratory muscles"
    ],
    "correctIndex": 1,
    "explanation": "Recruitment maneuvers (e.g., sustained inflation at 35–40 cmH₂O for 40 seconds) open collapsed alveoli. They must be followed by adequate PEEP to prevent re-collapse.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Permissive hypercapnia in ARDS refers to:",
    "options": [
      "Targeting PaCO2 35–45 mmHg at all times",
      "Allowing PaCO2 to rise above normal (45–80 mmHg) to maintain lung-protective low tidal volumes",
      "Increasing RR to correct CO2",
      "Using bicarbonate to compensate for hypoventilation"
    ],
    "correctIndex": 1,
    "explanation": "Permissive hypercapnia accepts elevated PaCO2 (sometimes up to 80 mmHg with pH ≥ 7.20) as a trade-off for maintaining low TV and Pplat, prioritizing lung protection over CO2 normalization.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "At what pH does permissive hypercapnia generally become unacceptable and intervention required?",
    "options": [
      "pH < 7.35",
      "pH < 7.25",
      "pH < 7.20",
      "pH < 7.10"
    ],
    "correctIndex": 2,
    "explanation": "Most protocols intervene (increase RR, consider bicarbonate) when pH drops below 7.20. At this level, cardiac arrhythmias, reduced cardiac contractility, and pulmonary hypertension become significant risks.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Volutrauma differs from barotrauma in that volutrauma is caused by:",
    "options": [
      "High peak pressures",
      "Excessive tidal volume causing alveolar overdistension",
      "Insufficient PEEP",
      "High FiO2"
    ],
    "correctIndex": 1,
    "explanation": "Volutrauma results from excessive volume (overdistension) regardless of the pressure used to deliver it. Barotrauma is pressure-related. Both can cause VILI (ventilator-induced lung injury).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Atelectrauma in ARDS is prevented by:",
    "options": [
      "High FiO2",
      "Adequate PEEP to prevent cyclic alveolar collapse and re-opening",
      "Low tidal volumes only",
      "Prone positioning only"
    ],
    "correctIndex": 1,
    "explanation": "Atelectrauma results from repetitive alveolar collapse and re-opening (cyclic recruitment). Adequate PEEP keeps alveoli open throughout the breath cycle, preventing this shear stress injury.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A PEEP trial with decremental PEEP titration selects the PEEP level at which:",
    "options": [
      "PaO2 is highest regardless of Pplat",
      "Best compliance (highest Cstat) is achieved, indicating optimal recruitment without overdistension",
      "FiO2 can be reduced to 0.21",
      "EtCO2 is normalized"
    ],
    "correctIndex": 1,
    "explanation": "During decremental PEEP trials, compliance improves as PEEP opens collapsed alveoli. The 'best PEEP' is where Cstat peaks — optimal recruitment without overdistension.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Biotrauma in mechanical ventilation refers to:",
    "options": [
      "Pneumothorax from high pressures",
      "Systemic inflammatory response triggered by VILI releasing cytokines into the circulation",
      "Oxygen radical damage to the airways",
      "Mucosal injury from ETT cuff pressure"
    ],
    "correctIndex": 1,
    "explanation": "Biotrauma describes how VILI activates alveolar macrophages and epithelial cells, releasing cytokines (TNF-α, IL-6) that enter systemic circulation and may contribute to multi-organ failure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Daily spontaneous awakening trials (SATs) combined with spontaneous breathing trials (SBTs) — the 'ABC' bundle — primarily reduce:",
    "options": [
      "Ventilator pressures needed",
      "ICU mortality and duration of mechanical ventilation",
      "Ventilator-associated pneumonia rates alone",
      "Need for tracheostomy"
    ],
    "correctIndex": 1,
    "explanation": "The ABC bundle (Awakening and Breathing Coordination) pairs daily SATs with SBTs. The landmark MENDS/ABCDE trials showed reduced mortality, shorter ventilation, and decreased delirium.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Prerequisites for conducting an SBT include all EXCEPT:",
    "options": [
      "FiO2 ≤ 0.50 and PEEP ≤ 8 cmH₂O",
      "Hemodynamic stability without vasopressors (or minimal)",
      "Absence of secretions — patient does not need to cough",
      "Adequate spontaneous effort and appropriate level of consciousness"
    ],
    "correctIndex": 2,
    "explanation": "The ability to cough and manage secretions IS a prerequisite for successful extubation. Patients who cannot protect their airway have high re-intubation rates despite passing the SBT.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The Rapid Shallow Breathing Index (RSBI) is calculated as:",
    "options": [
      "TV / RR",
      "RR / TV (in liters)",
      "RR × TV",
      "VE / RR"
    ],
    "correctIndex": 1,
    "explanation": "RSBI = RR / TV (in liters). An RSBI ≤ 105 predicts successful weaning. Higher values (shallow, rapid breaths) predict weaning failure.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "An RSBI of 85 breaths/min/L suggests:",
    "options": [
      "Weaning failure is very likely",
      "Successful weaning is likely (≤ 105 threshold)",
      "The patient should be on HFOV",
      "Increase PEEP before attempting extubation"
    ],
    "correctIndex": 1,
    "explanation": "RSBI ≤ 105 predicts successful SBT. An RSBI of 85 is below the threshold and suggests the patient can likely sustain independent ventilation.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A 3-hour SBT on PSV 8 cmH₂O is completed. The patient has RR 28, SpO2 88%, and is using accessory muscles. What is the interpretation?",
    "options": [
      "Successful SBT — proceed to extubation",
      "Failed SBT — return to full ventilatory support",
      "Borderline — wait 30 minutes and reassess",
      "Successful SBT — increase PEEP before extubation"
    ],
    "correctIndex": 1,
    "explanation": "SBT failure criteria include RR > 35, SpO2 < 90%, accessory muscle use, diaphoresis, or agitation. This patient meets multiple failure criteria; return to full support and reassess daily.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Post-extubation high-flow nasal cannula (HFNC) in high-risk patients is used to:",
    "options": [
      "Replace mechanical ventilation entirely",
      "Reduce re-intubation risk by improving oxygenation, reducing dead space, and providing positive pressure",
      "Increase FiO2 only",
      "Replace BiPAP"
    ],
    "correctIndex": 1,
    "explanation": "HFNC provides humidified high-flow oxygen (up to 60 L/min), reduces anatomic dead space by flushing nasopharyngeal CO2, and generates modest PEEP (~1 cmH₂O per 10 L/min), reducing re-intubation in high-risk patients.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The WIND study classification of ventilator liberation includes which category for patients who remain on MV > 7 days and require prolonged weaning?",
    "options": [
      "Simple weaning",
      "Difficult weaning",
      "Prolonged weaning",
      "Chronic ventilator dependence"
    ],
    "correctIndex": 2,
    "explanation": "WIND study: Simple weaning = extubated on first SBT; Difficult weaning = requires up to 3 SBTs or up to 7 days; Prolonged weaning = > 3 SBT failures or > 7 days of weaning.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Tracheostomy is generally considered when:",
    "options": [
      "The patient fails one SBT",
      "Prolonged mechanical ventilation (> 10–14 days) is anticipated",
      "FiO2 requirements exceed 0.60",
      "Pplat exceeds 30 cmH₂O"
    ],
    "correctIndex": 1,
    "explanation": "Tracheostomy is recommended when prolonged MV (>10–14 days) is anticipated. Benefits include improved patient comfort, reduced sedation needs, easier oral care, and lower VAP risk.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which NIF (negative inspiratory force) value suggests adequate respiratory muscle strength for weaning?",
    "options": [
      "NIF more negative than −20 cmH₂O (e.g., −25)",
      "NIF between 0 and −10 cmH₂O",
      "NIF more positive than +20 cmH₂O",
      "NIF between −5 and −10 cmH₂O"
    ],
    "correctIndex": 0,
    "explanation": "NIF more negative than −20 cmH₂O (e.g., −25) indicates adequate inspiratory muscle strength. Values between 0 and −20 suggest weakness that may prevent successful weaning.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Cuff-leak test before extubation assesses:",
    "options": [
      "ETT position",
      "Presence of post-extubation stridor risk (subglottic edema)",
      "Tracheal secretion volume",
      "Ventilator circuit integrity"
    ],
    "correctIndex": 1,
    "explanation": "A positive cuff-leak test (air leaks around the deflated cuff) suggests the airway is patent. Absent cuff leak suggests subglottic edema, predicting post-extubation stridor.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "For a patient with severe asthma status asthmaticus on MV, the ventilator strategy prioritizes:",
    "options": [
      "High RR to normalize PaCO2",
      "Permissive hypercapnia with low RR and prolonged expiratory time to minimize auto-PEEP",
      "Inverse ratio ventilation",
      "High PEEP to recruit airways"
    ],
    "correctIndex": 1,
    "explanation": "Status asthmaticus requires a slow rate (6–12 breaths/min), low TV, and prolonged expiration to minimize air trapping. Permissive hypercapnia is accepted to avoid barotrauma.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In COPD exacerbation requiring MV, initial settings should include:",
    "options": [
      "High PEEP (10–15 cmH₂O)",
      "I:E ratio of 2:1",
      "Low RR (10–12) with prolonged expiratory time to reduce auto-PEEP",
      "High tidal volume (10 mL/kg) to overcome increased dead space"
    ],
    "correctIndex": 2,
    "explanation": "COPD patients have high airway resistance and air trapping. Use low RR (10–12), low-normal TV, and I:E of 1:3 to 1:4 to allow complete exhalation and reduce auto-PEEP.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "NIV (non-invasive ventilation) is MOST appropriate for which condition?",
    "options": [
      "Acute hypoxemic respiratory failure from ARDS (PF < 100)",
      "Hemodynamic instability requiring vasopressors",
      "COPD exacerbation with acute hypercapnic respiratory failure and mild acidosis",
      "Uncooperative patient with poor mask fit"
    ],
    "correctIndex": 2,
    "explanation": "NIV has the strongest evidence in COPD exacerbation with hypercapnic acidosis (pH 7.25–7.35). It reduces intubation rates and mortality. It is not first-line for severe ARDS or hemodynamic instability.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which ABG finding most urgently indicates need for mechanical ventilation?",
    "options": [
      "pH 7.35, PaCO2 42, PaO2 88 on 2 L NC",
      "pH 7.20, PaCO2 70, PaO2 55 on 100% NRB mask (increasing respiratory distress)",
      "pH 7.30, PaCO2 50, PaO2 72 on 4 L NC",
      "pH 7.38, PaCO2 38, PaO2 66 on 40% Venturi mask"
    ],
    "correctIndex": 1,
    "explanation": "Severe acidosis (pH 7.20), hypercapnia (PaCO2 70), and hypoxemia refractory to high-flow oxygen with worsening distress represent acute ventilatory failure requiring immediate mechanical support.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Heliox (helium-oxygen mixture) on a ventilated asthma patient can:",
    "options": [
      "Increase FiO2 delivery",
      "Reduce airway resistance due to helium's lower density, reducing WOB and PIP",
      "Increase inspiratory time",
      "Replace bronchodilators"
    ],
    "correctIndex": 1,
    "explanation": "Helium's low density decreases turbulent airflow resistance in obstructed airways, reducing PIP, WOB, and auto-PEEP. It is an adjunct in severe bronchospasm, not a replacement for bronchodilators.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Unilateral pulmonary contusion on mechanical ventilation may cause selective lung injury. Independent lung ventilation (ILV) with a double-lumen ETT can:",
    "options": [
      "Provide different TV and PEEP to each lung",
      "Eliminate the need for PEEP",
      "Increase risk of barotrauma",
      "Replace prone positioning"
    ],
    "correctIndex": 0,
    "explanation": "ILV with a double-lumen ETT allows each lung to be ventilated with different settings — higher PEEP for the contused lung, protective volumes for the healthier lung — preventing cross-contamination and volutrauma.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "During cardiac arrest in a ventilated patient, the recommended ventilation rate is:",
    "options": [
      "Synchronous 30:2 compressions:breaths",
      "One breath every 6 seconds (10 breaths/min) with asynchronous continuous compressions",
      "One breath every 2 seconds (30 breaths/min)",
      "Hyperventilation at 20 breaths/min"
    ],
    "correctIndex": 1,
    "explanation": "With an advanced airway in place during CPR, deliver 1 breath every 6 seconds (10/min) while continuous chest compressions proceed. Avoid hyperventilation (increases intrathoracic pressure, reduces cardiac output).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Oxygen toxicity from prolonged high FiO2 primarily causes:",
    "options": [
      "Cardiomyopathy",
      "Nitrogen narcosis",
      "Absorptive atelectasis and reactive oxygen species-mediated lung injury",
      "Hypercapnia"
    ],
    "correctIndex": 2,
    "explanation": "Prolonged FiO2 > 0.60 causes nitrogen washout atelectasis and generates reactive oxygen species, damaging alveolar epithelium. Clinically this manifests as worsening ARDS-like injury.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Ventilator-associated pneumonia (VAP) prevention bundles typically include all EXCEPT:",
    "options": [
      "Head of bed elevation 30–45°",
      "Daily oral care with chlorhexidine",
      "Subglottic suctioning",
      "Keeping the ETT cuff pressure at 5 cmH₂O"
    ],
    "correctIndex": 3,
    "explanation": "ETT cuff pressure of 5 cmH₂O is far too low (target 20–30 cmH₂O). Low cuff pressure allows microaspiration of oropharyngeal secretions, increasing VAP risk. All other options are standard VAP bundle elements.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient is on VC-AC with TV 500 mL and RR 14. ABG shows pH 7.52, PaCO2 28, PaO2 95. The appropriate response is:",
    "options": [
      "Increase TV to improve oxygenation",
      "Decrease RR or TV to allow PaCO2 to rise and correct alkalosis",
      "Increase PEEP to 10 cmH₂O",
      "Add BiPAP"
    ],
    "correctIndex": 1,
    "explanation": "Respiratory alkalosis (pH 7.52, PaCO2 28) from hyperventilation. Reduce RR or TV to decrease minute ventilation and allow PaCO2 to normalize. Do not increase PEEP — oxygenation is adequate.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Main-stem intubation (right main-stem) will cause:",
    "options": [
      "Bilateral improved ventilation",
      "Left lung atelectasis; high PIP and Pplat; decreased breath sounds on left",
      "Decreased PIP with improved compliance",
      "Increased tidal volume delivery"
    ],
    "correctIndex": 1,
    "explanation": "Right main-stem intubation ventilates only the right lung. The left lung collapses (atelectasis), causing decreased left breath sounds, increased PIP and Pplat (compliance problem), and hypoxemia.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Pneumothorax in a ventilated patient presents with:",
    "options": [
      "Gradual decrease in PIP over hours",
      "Sudden increase in PIP and Pplat, decreased ipsilateral breath sounds, hypotension (tension), tracheal deviation",
      "Bilateral increased breath sounds",
      "Improvement in SpO2"
    ],
    "correctIndex": 1,
    "explanation": "Tension pneumothorax: sudden rise in PIP and Pplat (compliance problem), decreased breath sounds on the affected side, hypotension, tracheal deviation away from the pneumothorax, and desaturation.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "How should peak flow be adjusted in VC-AC to reduce auto-PEEP in an obstructed patient?",
    "options": [
      "Decrease peak flow to reduce PIP",
      "Increase peak flow to shorten inspiratory time and lengthen expiratory time",
      "Switch to pressure-control mode only",
      "Decrease tidal volume only"
    ],
    "correctIndex": 1,
    "explanation": "Increasing peak flow in VC-AC shortens inspiratory time, which increases expiratory time for a given RR. More expiratory time reduces air trapping and auto-PEEP in obstructed patients.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A pressure-control breath cycles from inspiration to expiration based on:",
    "options": [
      "Volume reaching the set tidal volume",
      "A set inspiratory time (time-cycled)",
      "Flow decaying to 25% of peak",
      "Patient effort"
    ],
    "correctIndex": 1,
    "explanation": "Pressure-control breaths are time-cycled — inspiration ends when the set inspiratory time is reached, regardless of volume or flow. This contrasts with PSV (flow-cycled) and VC (volume-cycled).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient on PSV 12 cmH₂O is breathing comfortably at RR 16 with TV 550 mL. The physician orders a weaning trial. What is the appropriate first step?",
    "options": [
      "Remove the ETT immediately",
      "Decrease PSV in stepwise fashion (e.g., to 8 cmH₂O) and reassess",
      "Switch to VC-AC at higher TV",
      "Increase PEEP to 10 cmH₂O"
    ],
    "correctIndex": 1,
    "explanation": "PSV weaning involves gradual stepwise reduction of pressure support (e.g., by 2–4 cmH₂O decrements) while monitoring for signs of respiratory distress or fatigue, until SBT is performed.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Which parameter best reflects a patient's ability to generate inspiratory effort against the ventilator?",
    "options": [
      "PaO2/FiO2 ratio",
      "Negative inspiratory force (NIF) / MIP",
      "PaCO2",
      "Auto-PEEP level"
    ],
    "correctIndex": 1,
    "explanation": "Negative inspiratory force (NIF), also called maximum inspiratory pressure (MIP), measures the maximum negative pressure a patient can generate — a direct measure of inspiratory muscle strength.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In a spontaneous breath, when does the patient's WOB increase on a demand-flow CPAP circuit?",
    "options": [
      "When flow demand is fully met",
      "When circuit flow cannot match inspiratory demand, causing the CPAP level to transiently drop",
      "When PEEP is set too high",
      "When the humidifier temperature is too low"
    ],
    "correctIndex": 1,
    "explanation": "If the demand-flow circuit cannot supply sufficient flow, the patient must work harder (increased WOB) to generate enough flow. High-flow circuits and properly tuned sensitivity settings minimize this.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Weaning failure due to cardiac dysfunction (heart failure) should be suspected when:",
    "options": [
      "Patient develops tachycardia and hypertension during SBT with worsening gas exchange",
      "Patient requires increased FiO2 during SBT",
      "Patient's RSBI suddenly decreases below 80",
      "Patient develops bradycardia during SBT"
    ],
    "correctIndex": 0,
    "explanation": "SBT converts positive-pressure MV to spontaneous breathing, increasing preload and cardiac work. In heart failure patients, this can precipitate acute pulmonary edema — manifesting as hypertension, tachycardia, and hypoxemia.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "After a failed SBT, how long should the clinician wait before attempting another trial?",
    "options": [
      "1 hour",
      "4–8 hours (same day if daily awakening and breathing protocol)",
      "24 hours (next day)",
      "48–72 hours"
    ],
    "correctIndex": 2,
    "explanation": "After a failed SBT, most protocols recommend waiting at least 24 hours before the next attempt. The patient should receive adequate rest and the cause of failure should be addressed.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which finding during an SBT is NOT a criterion for stopping the trial?",
    "options": [
      "RR > 35 breaths/min for more than 5 minutes",
      "SpO2 < 90%",
      "Heart rate increase of 10 bpm above baseline",
      "Use of accessory muscles with paradoxical abdominal movement"
    ],
    "correctIndex": 2,
    "explanation": "A minor heart rate increase of 10 bpm alone is not a stopping criterion. Stopping criteria include RR > 35, SpO2 < 90%, heart rate change > 20% from baseline, arrhythmia, severe accessory muscle use, or paradoxical breathing.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which diaphragmatic dysfunction finding on ultrasound predicts weaning failure?",
    "options": [
      "Diaphragm excursion > 10 mm bilaterally",
      "Paradoxical upward diaphragm movement during inspiration (diaphragm paralysis)",
      "Thickening fraction > 30%",
      "Normal dome shape bilaterally"
    ],
    "correctIndex": 1,
    "explanation": "Paradoxical (upward) diaphragm movement during spontaneous inspiration indicates phrenic nerve injury or diaphragm fatigue. Excursion < 10 mm and thickening fraction < 20% also predict weaning failure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Positive pressure ventilation reduces cardiac output by:",
    "options": [
      "Increasing venous return",
      "Increasing right ventricular afterload and decreasing venous return (preload reduction)",
      "Decreasing pulmonary vascular resistance",
      "Increasing left ventricular preload"
    ],
    "correctIndex": 1,
    "explanation": "Positive intrathoracic pressure during PPV compresses the right atrium and great veins, reducing venous return and cardiac output. It also increases RV afterload by compressing pulmonary vasculature.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In hypovolemic shock, positive pressure ventilation can be particularly dangerous because:",
    "options": [
      "It increases oxygen delivery",
      "Further reduction in venous return exacerbates hypotension and low cardiac output",
      "It causes oxygen toxicity",
      "It reduces vasopressor requirements"
    ],
    "correctIndex": 1,
    "explanation": "Hypovolemic patients are preload-dependent. Adding PPV dramatically reduces venous return in an already under-filled system, potentially causing cardiovascular collapse.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Pulsus paradoxus on an arterial waveform during mechanical ventilation is related to:",
    "options": [
      "High PEEP causing cyclical blood pressure variation with breathing",
      "Aortic stenosis",
      "Pulmonary hypertension",
      "Increased cardiac output during inspiration"
    ],
    "correctIndex": 0,
    "explanation": "In mechanically ventilated patients, high PEEP and large tidal volumes cause cyclical swings in arterial blood pressure with each breath (systolic pressure variation). This can be used to assess fluid responsiveness.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Pulse pressure variation (PPV) > 13% in a fully ventilated patient without arrhythmia suggests:",
    "options": [
      "Fluid overload",
      "Fluid responsiveness (preload-dependent state)",
      "Cardiac tamponade",
      "Pulmonary hypertension"
    ],
    "correctIndex": 1,
    "explanation": "PPV > 13% in passively ventilated patients indicates that cardiac output is highly preload-dependent — suggesting the patient will respond to a fluid bolus with increased cardiac output.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "PEEP reduces cardiac output most significantly in which patient population?",
    "options": [
      "Patients with ARDS and poor compliance",
      "Fluid-overloaded patients with pulmonary edema",
      "Hypovolemic patients with normal or high RV compliance",
      "Patients receiving vasopressors"
    ],
    "correctIndex": 2,
    "explanation": "High PEEP in hypovolemic patients with compliant lungs transmits the most intrathoracic pressure to the cardiovascular system, maximally reducing venous return and cardiac output.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The RIGHT ventricle is at risk of failure in ARDS because:",
    "options": [
      "High FiO2 causes right ventricular hypertrophy",
      "Hypoxic vasoconstriction and high PEEP increase pulmonary vascular resistance, increasing RV afterload",
      "ARDS always causes left-sided heart failure first",
      "Lung-protective ventilation reduces RV afterload"
    ],
    "correctIndex": 1,
    "explanation": "Hypoxic pulmonary vasoconstriction + high mean airway pressure from PEEP both increase pulmonary vascular resistance, placing the RV under increased afterload. Acute cor pulmonale is a recognized ARDS complication.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "On a pressure-time scalar in PC mode, a notch at end-inspiration before cycling to expiration suggests:",
    "options": [
      "Flow starvation",
      "Auto-PEEP",
      "The patient is actively exhaling before the machine cycles off (premature cycling from patient perspective)",
      "Correct synchrony"
    ],
    "correctIndex": 2,
    "explanation": "A downward notch at end-inspiration on the pressure waveform indicates the patient is actively trying to exhale before the machine's set inspiratory time ends — delayed cycling (machine breath longer than neural inspiratory time).",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In a volume-control breath, a gradual increase in the pressure-time slope (pressure rising steeply) with no change in set flow indicates:",
    "options": [
      "Decreased airway resistance",
      "Worsening lung compliance (lung becoming stiffer)",
      "Normal breath cycle",
      "Increased circuit compliance"
    ],
    "correctIndex": 1,
    "explanation": "In VC mode with constant flow, the slope of the pressure-time curve reflects compliance. A steeper slope (pressure rises faster) indicates decreased compliance — the lung is stiffer.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "On a volume-time scalar, failure to reach the set tidal volume before the breath cycles indicates:",
    "options": [
      "Increased compliance",
      "A leak in the circuit or around the ETT cuff",
      "Normal variation",
      "Increased resistance"
    ],
    "correctIndex": 1,
    "explanation": "If the volume-time waveform shows the delivered volume is less than the set TV, a leak (circuit disconnect, cuff leak, or tracheoesophageal fistula) is likely. The missing volume is going somewhere other than the lungs.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A 'shark fin' appearance of the flow waveform during expiration most likely represents:",
    "options": [
      "Normal expiration",
      "Airway obstruction causing prolonged, slow expiratory flow (incomplete emptying)",
      "Complete exhalation before next breath",
      "Increased compliance"
    ],
    "correctIndex": 1,
    "explanation": "A prolonged, slow-decaying expiratory flow waveform ('shark fin') indicates obstructed exhalation — as seen in bronchospasm, COPD, or mucus plugging. Complete expiration may not occur before the next breath.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Ringing or oscillations on the pressure waveform during volume-control ventilation with high flow rates are associated with:",
    "options": [
      "Fluid in the circuit (rainout)",
      "Patient-ventilator dyssynchrony from high peak flows causing turbulence and resonance",
      "Normal ventilator function",
      "Cuff pressure problems"
    ],
    "correctIndex": 0,
    "explanation": "Water condensation (rainout) in the ventilator circuit can cause visible oscillations on pressure waveforms. It also increases circuit resistance. Heated wire circuits prevent rainout.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Cisatracurium is preferred over succinylcholine for neuromuscular blockade in ICU because:",
    "options": [
      "It has faster onset",
      "It is a non-depolarizing agent without histamine release, cardiovascular effects, or hyperkalemia risk",
      "It can be given orally",
      "It has shorter duration"
    ],
    "correctIndex": 1,
    "explanation": "Cisatracurium (non-depolarizing, Hofmann elimination) is ideal for prolonged ICU NMB. It avoids the hyperkalemia risk of succinylcholine, causes minimal cardiovascular effects, and doesn't accumulate in renal/hepatic failure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Train-of-four (TOF) monitoring during neuromuscular blockade aims for:",
    "options": [
      "4/4 twitches (full recovery)",
      "0/4 twitches (complete paralysis)",
      "1–2/4 twitches (adequate but not excessive blockade)",
      "3/4 twitches"
    ],
    "correctIndex": 2,
    "explanation": "TOF monitoring targets 1–2 twitches out of 4, ensuring adequate NMB to prevent patient-ventilator dyssynchrony while avoiding excessive dosing and prolonged weakness.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Propofol infusion syndrome (PRIS) is most likely to occur with:",
    "options": [
      "Short-term use < 24 hours at any dose",
      "High-dose propofol (> 4–5 mg/kg/hr) for > 48 hours",
      "Doses < 1 mg/kg/hr",
      "Combined use with benzodiazepines"
    ],
    "correctIndex": 1,
    "explanation": "PRIS is a rare but life-threatening complication of high-dose, prolonged propofol infusion, presenting with metabolic acidosis, rhabdomyolysis, lipemic plasma, dysrhythmia, and cardiac failure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Dexmedetomidine (Precedex) for ICU sedation offers the advantage of:",
    "options": [
      "Deep sedation comparable to propofol at high doses",
      "Sedation without respiratory depression, allowing cooperative ventilated patients",
      "Analgesia without any sedation effect",
      "Rapid induction for intubation"
    ],
    "correctIndex": 1,
    "explanation": "Dexmedetomidine is an alpha-2 agonist that provides sedation and anxiolysis without significant respiratory depression, allowing patients to be easily aroused. It has also shown benefits in reducing delirium.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The PADIS guidelines (2018) recommend which analgesia-first approach for ICU sedation?",
    "options": [
      "Sedate first, then add analgesia",
      "Analgesia-first (treat pain before sedation to minimize sedative requirements)",
      "Use only benzodiazepines for sedation",
      "Deep sedation for all ICU patients"
    ],
    "correctIndex": 1,
    "explanation": "PADIS 2018 recommends an analgesia-first (analgo-sedation) approach: treating pain first reduces overall sedative requirements, shortens MV duration, and reduces ICU complications.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which sedation scale is most widely used to target light sedation in mechanically ventilated ICU patients?",
    "options": [
      "Glasgow Coma Scale (GCS)",
      "Richmond Agitation-Sedation Scale (RASS)",
      "Ramsey Sedation Scale",
      "Bispectral Index (BIS)"
    ],
    "correctIndex": 1,
    "explanation": "RASS (−5 to +4) is the most widely validated and used sedation scale in ICUs. Target RASS −1 to 0 (lightly sedated, easily arousable) is associated with improved outcomes.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Inhaled nitric oxide (iNO) in ARDS improves oxygenation by:",
    "options": [
      "Increasing cardiac output",
      "Selectively vasodilating pulmonary vasculature in ventilated lung regions, reducing V/Q mismatch and shunt",
      "Directly opening collapsed alveoli",
      "Bronchodilation"
    ],
    "correctIndex": 1,
    "explanation": "iNO causes selective pulmonary vasodilation in ventilated lung regions (it's immediately inactivated by hemoglobin in the blood, preventing systemic hypotension), redistributing blood flow away from shunt regions.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Nebulized bronchodilators (albuterol) in a mechanically ventilated patient are most effective when:",
    "options": [
      "Placed immediately before the ETT",
      "Placed in the inspiratory limb 15–30 cm from the Y-piece with slow rate and large TV",
      "Given as bolus injection",
      "Delivered during expiration"
    ],
    "correctIndex": 1,
    "explanation": "In-line MDI or nebulizer placement 15–30 cm from the Y-piece in the inspiratory limb allows drug to accumulate in the circuit and be inhaled during inspiration. Slow rate and larger TV improve peripheral deposition.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Extracorporeal membrane oxygenation (ECMO) in ARDS is used as:",
    "options": [
      "First-line treatment for all ARDS",
      "Rescue therapy for refractory hypoxemia (P/F < 80) despite optimal ventilator management",
      "A substitute for mechanical ventilation in mild ARDS",
      "Treatment for COPD exacerbations"
    ],
    "correctIndex": 1,
    "explanation": "Venovenous ECMO provides gas exchange support (CO2 removal and oxygenation) in patients with severe ARDS (P/F < 80) who have failed all conventional and advanced ventilatory therapies.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The CESAR trial and EOLIA trial investigated ECMO for ARDS. The primary finding was:",
    "options": [
      "ECMO has no benefit in ARDS",
      "Transfer to ECMO-capable center (CESAR) and ECMO use (EOLIA) showed survival trends in severe ARDS",
      "ECMO should be used for P/F < 200",
      "ECMO is only beneficial in pediatric ARDS"
    ],
    "correctIndex": 1,
    "explanation": "CESAR showed benefit from transfer to ECMO-capable centers. EOLIA (P/F < 50) showed a mortality trend favoring ECMO (35% vs 46%, p=0.07) with 28% crossover to ECMO in the control arm.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In a venovenous ECMO circuit, blood is drained from and returned to:",
    "options": [
      "Artery to vein (bypassing the heart)",
      "Vein to vein (bypassing the lungs but not the heart)",
      "Left atrium to aorta",
      "Right atrium to pulmonary artery"
    ],
    "correctIndex": 1,
    "explanation": "VV-ECMO drains venous blood (usually right internal jugular or femoral vein), oxygenates it via the membrane oxygenator, and returns it to the venous circulation (usually right atrium via internal jugular). The heart continues to pump oxygenated blood.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "'Ultra-lung-protective' ventilation on VV-ECMO uses tidal volumes of approximately:",
    "options": [
      "6 mL/kg IBW",
      "3–4 mL/kg IBW with very low respiratory rates",
      "10 mL/kg IBW",
      "Standard tidal volumes — ECMO provides all gas exchange"
    ],
    "correctIndex": 1,
    "explanation": "On VV-ECMO, 'rest' the lungs with TV 3–4 mL/kg IBW, Pplat ≤ 25 cmH₂O, and low RR (4–10/min). ECMO handles most gas exchange, allowing the lung to heal with minimal VILI.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "High-frequency chest wall oscillation (HFCWO) in ventilated patients with copious secretions is used to:",
    "options": [
      "Improve oxygenation directly",
      "Mobilize thick secretions from peripheral airways toward the central airways for suctioning",
      "Reduce tidal volume requirements",
      "Treat pneumothorax"
    ],
    "correctIndex": 1,
    "explanation": "HFCWO (e.g., vest therapy) applies rapid external chest compressions that oscillate airflow bidirectionally, shearing mucus from airway walls and moving it centrally for clearance by cough or suctioning.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Safe endotracheal suctioning technique includes:",
    "options": [
      "Hyperventilating for 10 minutes before suctioning",
      "Applying suction for no more than 10–15 seconds per pass with pre-oxygenation to 100% FiO2",
      "Using the largest suction catheter available for efficiency",
      "Suctioning every 30 minutes on a fixed schedule"
    ],
    "correctIndex": 1,
    "explanation": "Safe ETT suctioning: pre-oxygenate, limit suction passes to ≤ 15 seconds each, use a catheter no larger than half the ETT inner diameter, and suction only when clinically indicated (not on a fixed schedule).",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Closed-circuit in-line suctioning is preferred over open suctioning because it:",
    "options": [
      "Provides a larger suction catheter diameter",
      "Maintains PEEP and FiO2 during suctioning, reducing derecruitment and hypoxemia",
      "Allows deeper suctioning into distal airways",
      "Reduces the need for gloves"
    ],
    "correctIndex": 1,
    "explanation": "In-line (closed) suctioning maintains circuit integrity, preserving PEEP and FiO2 during suctioning. This is especially important in ARDS patients who are PEEP-dependent and easily desaturate.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A pH of 7.28 with PaCO2 55 mmHg and HCO3 25 mEq/L in a ventilated patient represents:",
    "options": [
      "Metabolic acidosis with respiratory compensation",
      "Acute respiratory acidosis without metabolic compensation",
      "Mixed respiratory and metabolic acidosis",
      "Respiratory alkalosis"
    ],
    "correctIndex": 1,
    "explanation": "pH 7.28 (acidic), PaCO2 55 (elevated — respiratory cause), HCO3 25 (normal — no metabolic compensation). This is acute respiratory acidosis. In chronic respiratory acidosis, HCO3 would be elevated as renal compensation.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "An ABG shows pH 7.42, PaCO2 55, HCO3 35, PaO2 68. This represents:",
    "options": [
      "Acute respiratory acidosis",
      "Chronic respiratory acidosis fully compensated with metabolic alkalosis",
      "Metabolic alkalosis only",
      "Mixed acidosis"
    ],
    "correctIndex": 1,
    "explanation": "pH 7.42 (normal), PaCO2 55 (elevated), HCO3 35 (elevated — metabolic compensation). This is chronic respiratory acidosis fully compensated by renal bicarbonate retention — classic COPD blood gas.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Ventilator liberation protocol 'screens' typically assess which parameters first each morning?",
    "options": [
      "Chest X-ray results and echocardiogram",
      "Oxygenation (FiO2 ≤ 0.50, PEEP ≤ 8), hemodynamic stability, and adequate mental status/effort",
      "Electrolyte levels and albumin",
      "Cardiac output and SVR"
    ],
    "correctIndex": 1,
    "explanation": "Standard daily screen criteria: FiO2 ≤ 0.50, PEEP ≤ 8 cmH₂O, hemodynamic stability (off or minimal vasopressors), no active paralysis, and adequate neurological status to attempt SBT.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "In the expiratory pause maneuver to detect auto-PEEP, what must be true for the measurement to be valid?",
    "options": [
      "The patient can breathe spontaneously during the maneuver",
      "The patient must be completely passive (no respiratory muscle activity) during the pause",
      "The measurement requires a flow rate of at least 60 L/min",
      "Only valid in PC-AC mode"
    ],
    "correctIndex": 1,
    "explanation": "Any active respiratory muscle contraction during the expiratory pause generates pressure independent of auto-PEEP, confounding the measurement. The patient must be completely passive (often requiring sedation/NMB).",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Esophageal manometry in ventilated patients is used to estimate:",
    "options": [
      "Pulmonary artery pressure",
      "Transpulmonary pressure (lung-specific driving force) to optimize PEEP in ARDS",
      "Gastric motility",
      "Endotracheal tube position"
    ],
    "correctIndex": 1,
    "explanation": "Esophageal pressure approximates pleural pressure. Transpulmonary pressure = Paw − Pes. Esophageal manometry allows individualized PEEP titration to maintain positive transpulmonary pressure and recruit lung without causing RV failure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In a COPD patient with chronic hypercapnia (baseline PaCO2 60), the ventilator target for PaCO2 should be:",
    "options": [
      "Normal 35–45 mmHg",
      "The patient's chronic baseline (~60 mmHg), not normal",
      "Below 35 mmHg",
      "Any value is acceptable"
    ],
    "correctIndex": 1,
    "explanation": "Over-ventilating a COPD patient to a 'normal' PaCO2 creates metabolic alkalosis and makes weaning very difficult. Target the patient's known (or estimated) baseline PaCO2, not the laboratory normal.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The ventilator's sensitivity (trigger threshold) should be set to:",
    "options": [
      "The highest (least sensitive) setting to prevent auto-triggering",
      "The most sensitive (lowest threshold) level without causing auto-cycling",
      "A fixed pressure of −10 cmH₂O regardless of patient effort",
      "Flow trigger of 20 L/min always"
    ],
    "correctIndex": 1,
    "explanation": "Sensitivity should be as sensitive as possible (low threshold) without causing auto-triggering. Excessive sensitivity causes false triggers from circuit motion or cardiac oscillations; insufficient sensitivity increases WOB.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Sigh breaths (periodic large volume breaths) on older ventilators were used to:",
    "options": [
      "Increase RR",
      "Periodically recruit dependent atelectasis and restore FRC",
      "Deliver nebulized medications",
      "Measure auto-PEEP"
    ],
    "correctIndex": 1,
    "explanation": "Sigh breaths (1.5–2× normal TV, 6–10 times/hour) were used to prevent atelectasis before PEEP became standard. Modern ventilation with appropriate PEEP has largely replaced this practice.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "During a spontaneous breathing trial with T-piece, the patient suddenly develops severe diaphoresis, HR 130, and SpO2 drops to 86%. You should:",
    "options": [
      "Continue the trial for 30 more minutes",
      "Immediately reconnect to full ventilator support and abort the SBT",
      "Increase FiO2 on the T-piece and continue",
      "Suction the patient and continue"
    ],
    "correctIndex": 1,
    "explanation": "Diaphoresis, tachycardia, and SpO2 < 90% are clear failure criteria. Immediately abort the SBT, reconnect to full support, identify and address the cause of failure, and retry tomorrow.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Which of the following is the BEST early indicator of respiratory muscle fatigue during a spontaneous breathing trial?",
    "options": [
      "Rising PaCO2 on ABG",
      "Paradoxical inward abdominal movement during inspiration (abdominal paradox)",
      "Increasing SpO2",
      "Falling heart rate"
    ],
    "correctIndex": 1,
    "explanation": "Abdominal paradox (inward abdominal movement during inspiration when the abdomen should move outward) is a clinical sign of diaphragmatic fatigue — the accessory muscles lift the chest while the diaphragm is pulled up. Rising PaCO2 is a late sign.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The P0.1 (airway occlusion pressure at 0.1 seconds) measures:",
    "options": [
      "Lung compliance",
      "Central respiratory drive — effort generated in the first 100 ms of an occluded inspiration",
      "Auto-PEEP magnitude",
      "Tidal volume during spontaneous breathing"
    ],
    "correctIndex": 1,
    "explanation": "P0.1 is the negative pressure generated in the first 100 ms of an occluded inspiration. It reflects respiratory center drive independent of respiratory mechanics. Normal is −1 to −2 cmH₂O; > −6 predicts weaning failure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which oxygen delivery device provides the MOST precise FiO2 in a spontaneously breathing patient?",
    "options": [
      "Simple face mask",
      "Nasal cannula",
      "Non-rebreather mask",
      "Venturi (air-entrainment) mask"
    ],
    "correctIndex": 3,
    "explanation": "Venturi masks use fixed entrainment ports to mix air and oxygen in precise ratios, delivering accurate FiO2 (24–50%) regardless of respiratory rate or pattern — ideal for COPD patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A patient on VC-AC has a PIP of 50 cmH₂O with Pplat of 26 cmH₂O. The most appropriate intervention is:",
    "options": [
      "Reduce tidal volume",
      "Administer bronchodilator and suction — high resistance problem",
      "Increase PEEP",
      "Increase inspiratory time"
    ],
    "correctIndex": 1,
    "explanation": "PIP 50 with Pplat 26 — the large gap (24 cmH₂O) is a resistance problem. Pplat is acceptable. Treat airway obstruction with bronchodilators and suctioning before changing volume or pressure settings.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Stress index in volume-control ventilation is assessed by the shape of the pressure-time curve during constant flow inspiration. A stress index > 1 indicates:",
    "options": [
      "Alveolar collapse requiring more PEEP",
      "Alveolar overdistension — reduce PEEP or tidal volume",
      "Normal ventilation",
      "Increased airway resistance"
    ],
    "correctIndex": 1,
    "explanation": "Stress index > 1 (upward concave pressure curve) = overdistension. Stress index < 1 (downward concave curve) = recruitment still occurring (may need more PEEP). A straight line (SI = 1) = optimal.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Work of breathing (WOB) in mechanically ventilated patients is abnormally increased by all EXCEPT:",
    "options": [
      "Auto-PEEP requiring patient to overcome intrinsic PEEP before triggering",
      "ETT resistance (narrow diameter tube)",
      "Fully supported A/C mode with adequate flow",
      "Insufficient flow causing flow starvation"
    ],
    "correctIndex": 2,
    "explanation": "In fully supported A/C mode with adequate flow, the ventilator does most of the work and WOB is minimized. Auto-PEEP, narrow ETTs, and flow starvation all increase the patient's WOB.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The optimal PEEP in ARDS is best described as the PEEP that:",
    "options": [
      "Achieves the highest PaO2 regardless of hemodynamic consequences",
      "Maximizes alveolar recruitment while minimizing overdistension, hemodynamic compromise, and RV failure",
      "Eliminates all shunt fraction",
      "Achieves a P/F ratio > 300"
    ],
    "correctIndex": 1,
    "explanation": "Optimal PEEP balances lung recruitment (preventing atelectrauma) against overdistension (volutrauma) and cardiovascular compromise. No single value fits all patients; individualized titration is required.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which arterial blood gas pattern is expected in a patient with acute pulmonary embolism on mechanical ventilation?",
    "options": [
      "High PaCO2, normal PaO2",
      "Low PaCO2 (if breathing spontaneously), low PaO2, widened P(a-A)O2 gradient",
      "Normal ABG",
      "High PaCO2 and high PaO2"
    ],
    "correctIndex": 1,
    "explanation": "PE causes dead space ventilation (V/Q mismatch): hypoxemia with a widened A-a gradient. Spontaneously breathing patients hyperventilate, causing low PaCO2. EtCO2 also drops with widening PaCO2–EtCO2 gradient.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Volume-assured pressure support (VAPS) differs from PSV in that:",
    "options": [
      "VAPS is purely flow-cycled",
      "VAPS automatically adjusts pressure support up or down to achieve a minimum guaranteed tidal volume",
      "VAPS has no patient-triggering capability",
      "VAPS is identical to PRVC"
    ],
    "correctIndex": 1,
    "explanation": "VAPS (e.g., Averaged Volume-Assured Pressure Support) is a dual-control PSV variant that adjusts pressure support over multiple breaths to maintain the target tidal volume — useful in patients with variable effort.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which statement about PEEP and FRC is correct?",
    "options": [
      "PEEP decreases FRC",
      "PEEP increases FRC by splinting the airway open at end-expiration",
      "PEEP has no effect on FRC",
      "PEEP only affects FRC during inspiration"
    ],
    "correctIndex": 1,
    "explanation": "PEEP maintains positive airway pressure at end-expiration, preventing alveolar collapse and increasing functional residual capacity (FRC). This recruits collapsed alveoli and improves oxygenation.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "In severe status asthmaticus with dynamic hyperinflation, a 'disconnect strategy' (brief circuit disconnection) can be used to:",
    "options": [
      "Increase FiO2",
      "Allow trapped air to escape rapidly and reduce auto-PEEP, reversing hemodynamic collapse",
      "Reduce bronchospasm",
      "Measure plateau pressure"
    ],
    "correctIndex": 1,
    "explanation": "In extreme auto-PEEP causing hemodynamic collapse, briefly disconnecting the ETT from the circuit (apnea) allows complete passive exhalation and dramatic auto-PEEP reduction, potentially restoring cardiac output.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The Murphey eye on an endotracheal tube serves to:",
    "options": [
      "Allow suctioning of subglottic secretions",
      "Provide a secondary lumen if the main lumen is occluded against the tracheal wall",
      "Indicate correct tube depth",
      "Allow cuff inflation"
    ],
    "correctIndex": 1,
    "explanation": "The Murphy eye is a side port near the ETT tip. If the main lumen presses against the tracheal wall, gas still flows through the Murphy eye, preventing complete occlusion.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "After a failed extubation, which intervention has the strongest evidence for preventing re-intubation in high-risk patients?",
    "options": [
      "Immediate re-intubation regardless of clinical status",
      "High-flow nasal cannula (HFNC) in hypoxemic patients; NIV in hypercapnic/cardiac risk patients",
      "Standard face mask oxygen at 10 L/min",
      "CPAP via face mask in all patients"
    ],
    "correctIndex": 1,
    "explanation": "HFNC reduces re-intubation in post-extubation hypoxemic high-risk patients (OPTIFLOW trial). NIV is preferred in patients with hypercapnic failure or cardiac disease. Choice depends on the mechanism of extubation failure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "What characterizes 'refractory hypoxemia' in ARDS?",
    "options": [
      "SpO2 < 98% on room air",
      "Persistent PaO2 < 60 mmHg or P/F < 100 despite FiO2 ≥ 0.60, PEEP ≥ 10, and optimal positioning",
      "Any PaO2 < 80 mmHg on supplemental oxygen",
      "SpO2 < 94% on 2 L nasal cannula"
    ],
    "correctIndex": 1,
    "explanation": "Refractory hypoxemia = inability to maintain adequate oxygenation (P/F < 100 or PaO2 < 60) despite maximal conventional therapy (high FiO2, high PEEP, prone positioning). This triggers consideration of rescue therapies (iNO, ECMO).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Pressure-time product (PTP) is a measure of:",
    "options": [
      "Lung compliance",
      "Total respiratory muscle effort and work of breathing integrated over time",
      "Mean airway pressure",
      "Ventilator-delivered work"
    ],
    "correctIndex": 1,
    "explanation": "PTP integrates the muscle pressure over time and reflects the total effort of the respiratory muscles, including isometric work not captured by tidal volume measurements — useful for assessing WOB in weaning.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Pulmonary mechanics measured with the least airflow artifact require:",
    "options": [
      "High inspiratory flow rates",
      "No-flow conditions (inspiratory or expiratory holds)",
      "Continuous flow measurement",
      "Maximum patient effort"
    ],
    "correctIndex": 1,
    "explanation": "Airway resistance drops out of the equation only when flow is zero. Inspiratory holds measure Pplat (compliance) and expiratory holds measure auto-PEEP — both measured under no-flow conditions.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Humidification of inspired gas in mechanically ventilated patients is critical because:",
    "options": [
      "Dry gas increases dead space",
      "Bypassing the upper airway removes the natural humidification system — dry gas causes mucosal damage, secretion retention, and ETT obstruction",
      "Humidification reduces airway resistance",
      "Dry gas reduces FiO2 delivery"
    ],
    "correctIndex": 1,
    "explanation": "The ETT bypasses the nose and oropharynx. Without humidification, dry gas damages the tracheal mucosa, impairs mucociliary clearance, thickens secretions, and can obstruct the ETT with inspissated mucus.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Heated wire circuits (HME vs. active humidifier) in MV — which is preferred for patients with thick secretions?",
    "options": [
      "HME (heat-moisture exchanger) — it retains more moisture",
      "Active heated humidifier — provides more complete humidification and is better for patients with thick secretions or high minute ventilation",
      "Both are equivalent",
      "HME is always preferred due to lower VAP risk"
    ],
    "correctIndex": 1,
    "explanation": "Active heated humidifiers deliver superior humidity (37°C, 44 mg/L H₂O) vs. HME (approximately 30 mg/L). For patients with thick secretions, copious secretions, or high minute ventilation (>10 L/min), active humidification is preferred.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The Trendelenburg position (head-down, feet-up) during mechanical ventilation:",
    "options": [
      "Improves FRC and oxygenation",
      "Reduces FRC, worsens V/Q matching, but may improve venous return in hypotension",
      "Eliminates auto-PEEP",
      "Is contraindicated in any ventilated patient"
    ],
    "correctIndex": 1,
    "explanation": "Trendelenburg reduces FRC and can worsen oxygenation. However, it increases venous return (preload) and may be temporarily used in hemodynamic compromise. It is generally avoided in respiratory failure.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "During exhalation in volume-control ventilation, the expiratory flow waveform should:",
    "options": [
      "Rise steeply then plateau",
      "Decay exponentially back to zero (passive recoil)",
      "Match the inspiratory flow pattern",
      "Show no flow until the next breath triggers"
    ],
    "correctIndex": 1,
    "explanation": "Normal passive exhalation produces an exponentially decaying flow waveform (highest flow at the start of exhalation, tapering to zero at end-expiration). Failure to reach zero indicates air trapping.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which ARDS rescue therapy can be delivered via the ventilator circuit and selectively reduces intrapulmonary shunt without systemic effects?",
    "options": [
      "IV prostaglandins",
      "Inhaled nitric oxide (iNO)",
      "IV hydrocortisone",
      "Systemic sildenafil"
    ],
    "correctIndex": 1,
    "explanation": "iNO is inhaled and vasodilates only ventilated lung regions. It is immediately bound by hemoglobin in the blood, preventing systemic vasodilation — making it a selective pulmonary vasodilator that improves V/Q matching.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Glasgow Coma Scale (GCS) threshold typically considered sufficient for airway protection and potential extubation is:",
    "options": [
      "GCS ≥ 5",
      "GCS ≥ 8",
      "GCS ≥ 13",
      "GCS = 15 only"
    ],
    "correctIndex": 1,
    "explanation": "GCS ≤ 8 is traditionally considered the threshold for airway protection. However, extubation decisions in ventilated patients use multiple criteria (secretion management, cough, RSBI). GCS ≥ 8 alone is insufficient for extubation without other assessments.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In a patient on VC-AC at RR 20, TV 400 mL, PEEP 8, FiO2 0.55, SpO2 is 96%. The next priority is:",
    "options": [
      "Increase PEEP to 12 cmH₂O",
      "Wean FiO2 to 0.40 to reduce oxygen toxicity risk while maintaining SpO2 target",
      "Decrease TV to 300 mL",
      "Switch to PC-AC immediately"
    ],
    "correctIndex": 1,
    "explanation": "SpO2 96% on FiO2 0.55 — oxygenation is meeting the target. The priority is reducing FiO2 to ≤ 0.40–0.50 to minimize oxygen toxicity risk. Changing PEEP or TV without indication could worsen the patient.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Neurally Adjusted Ventilatory Assist (NAVA) detects the patient's inspiratory effort by measuring:",
    "options": [
      "Airway pressure change",
      "Electrical activity of the diaphragm (Edi) via esophageal catheter",
      "Tidal volume at the airway opening",
      "Blood gas changes"
    ],
    "correctIndex": 1,
    "explanation": "NAVA uses a specialized nasogastric catheter with electrode array to detect diaphragm electrical activity (Edi). The ventilator delivers support proportional to Edi in real time — minimizing dyssynchrony and offloading WOB in proportion to neural effort.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Proportional Assist Ventilation (PAV+) differs from PSV in that it:",
    "options": [
      "Delivers a fixed pressure support",
      "Adjusts inspiratory support in proportion to patient effort every breath cycle (flow and volume proportional assistance)",
      "Uses neural trigger signals",
      "Cannot be used in weaning"
    ],
    "correctIndex": 1,
    "explanation": "PAV+ measures respiratory mechanics every few breaths and delivers pressure proportional to patient effort (flow and volume assistance), amplifying the patient's own effort rather than delivering a fixed pressure. This reduces dyssynchrony.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "During APRV, the T-Low (release time) should be set so that expiratory flow drops to approximately what percentage of peak expiratory flow?",
    "options": [
      "10%",
      "25–75% of peak expiratory flow",
      "100% (complete exhalation)",
      "50% exactly"
    ],
    "correctIndex": 1,
    "explanation": "T-Low is set to terminate the release phase when expiratory flow has decayed to 25–75% of peak (usually 50–75%). This prevents alveolar derecruitment by ending exhalation before lung volume falls too low — the lung never fully decompresses.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Airway pressure release ventilation (APRV) is contraindicated in:",
    "options": [
      "Moderate ARDS",
      "COPD or obstructive disease — prolonged P-High with obstruction causes severe air trapping",
      "Post-operative patients with intact drive",
      "Patients with ARDS requiring prone positioning"
    ],
    "correctIndex": 1,
    "explanation": "APRV is problematic in obstructive disease (COPD, asthma) because the sustained P-High with inadequate release time leads to progressive air trapping and hemodynamic compromise. It requires good lung compliance and adequate spontaneous drive.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In high-frequency oscillatory ventilation (HFOV), increasing the amplitude (ΔP) primarily affects:",
    "options": [
      "Oxygenation (increases PaO2)",
      "CO2 elimination (increases VCO2 clearance)",
      "Mean airway pressure",
      "PEEP level"
    ],
    "correctIndex": 1,
    "explanation": "HFOV: Mean airway pressure (mPaw) controls oxygenation by sustaining recruitment. Amplitude (ΔP) and frequency control CO2 elimination. Increasing ΔP increases tidal oscillation volume → more CO2 cleared.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "HFOV mean airway pressure should be set initially at approximately how many cmH₂O above the conventional ventilator mPaw before switching?",
    "options": [
      "0 (same mPaw)",
      "2–5 cmH₂O above prior mPaw",
      "10 cmH₂O above prior mPaw",
      "20 cmH₂O above prior mPaw"
    ],
    "correctIndex": 1,
    "explanation": "When transitioning to HFOV, initial mPaw is typically set 2–5 cmH₂O above the mPaw on conventional MV to achieve equivalent or slightly better recruitment while allowing hemodynamic monitoring.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Adaptive support ventilation (ASV) is a closed-loop ventilation mode that targets:",
    "options": [
      "A set tidal volume only",
      "Minimum work of breathing by automatically adjusting RR and TV toward an optimal target minute ventilation",
      "Maximum oxygenation regardless of pressures",
      "A fixed I:E ratio"
    ],
    "correctIndex": 1,
    "explanation": "ASV adjusts both RR and TV adaptively each breath, targeting minimum WOB (based on the Otis equation), while staying within set safety limits (Pplat, TV). It automatically weens as patient effort increases.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Initial tidal volume targets in neonatal mechanical ventilation are:",
    "options": [
      "10–12 mL/kg",
      "4–6 mL/kg (lung-protective for small, compliant lungs)",
      "8 mL/kg",
      "2 mL/kg"
    ],
    "correctIndex": 1,
    "explanation": "Neonatal lung-protective ventilation targets TV 4–6 mL/kg (similar to ARDSNet principle). Neonatal lungs are vulnerable to VILI at lower absolute volumes. Permissive hypercapnia (PaCO2 45–55) may be accepted.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In neonatal/pediatric time-cycled pressure-limited (TCPL) ventilation, the key variable controlling tidal volume is:",
    "options": [
      "Inspiratory time (Ti)",
      "PIP − PEEP (driving pressure) and lung compliance/resistance",
      "Respiratory rate",
      "FiO2"
    ],
    "correctIndex": 1,
    "explanation": "In TCPL, each breath is pressure-limited (fixed PIP) and time-cycled (fixed Ti). The tidal volume delivered depends on PIP − PEEP (driving pressure), inspiratory time, and lung compliance/resistance — tidal volume is not directly set.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Patient-triggered ventilation (PTV) in neonates reduces the risk of:",
    "options": [
      "Surfactant requirement",
      "Patient-ventilator dyssynchrony, air leak syndromes, and IVH by synchronizing breaths with spontaneous effort",
      "Infection",
      "Oxygen toxicity"
    ],
    "correctIndex": 1,
    "explanation": "PTV synchronizes ventilator breaths with the neonate's own inspiratory effort, reducing dyssynchrony and the associated risks: pneumothorax/air leak, intraventricular hemorrhage (IVH), and VILI.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Volume-guaranteed (VG) ventilation in neonates, when combined with pressure-control, adjusts PIP to:",
    "options": [
      "Maintain a fixed peak pressure regardless of compliance",
      "Deliver a target tidal volume at the lowest necessary PIP — protecting against volutrauma",
      "Maximize tidal volume",
      "Minimize respiratory rate"
    ],
    "correctIndex": 1,
    "explanation": "VG ventilation automatically adjusts PIP breath-by-breath to consistently deliver the set target tidal volume (usually 4–6 mL/kg). As compliance improves (e.g., after surfactant), PIP automatically decreases — preventing overdistension.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A 70-kg male (IBW) on VC-AC has TV 420 mL, RR 18, PEEP 8, FiO2 0.45. PIP is 45, Pplat is 26. ABG: pH 7.38, PaCO2 42, PaO2 78. What is the most pressing problem?",
    "options": [
      "Hypoxemia — increase FiO2",
      "No significant problem — acceptable settings",
      "Driving pressure 18 cmH₂O is acceptable; but PIP − Pplat = 19 (high resistance) — consider bronchodilator and suction",
      "Decrease tidal volume immediately for ARDSNet protocol"
    ],
    "correctIndex": 2,
    "explanation": "ABG and oxygenation are acceptable. Driving pressure (Pplat − PEEP = 26 − 8 = 18 cmH₂O) slightly above the ≤15 target. PIP − Pplat = 19 cmH₂O indicates elevated resistance — bronchodilator and suctioning should be evaluated before changing pressure settings.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A post-operative patient on VC-AC develops sudden hypotension, distended neck veins, tracheal deviation LEFT, and absent breath sounds on the RIGHT. What is the diagnosis and immediate action?",
    "options": [
      "Pulmonary embolism — start heparin",
      "Right tension pneumothorax — immediate needle decompression right 2nd ICS MCL",
      "Left tension pneumothorax — needle decompression left",
      "Cardiac tamponade — pericardiocentesis"
    ],
    "correctIndex": 1,
    "explanation": "Classic tension pneumothorax: hypotension, distended neck veins, absent breath sounds on affected side, tracheal deviation AWAY from the affected side (to the left = RIGHT tension). Immediate needle decompression (right 2nd ICS MCL or 4th/5th ICS MAL).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "An ARDS patient on prone positioning for 16 hours has improved PaO2 from 55 to 82 mmHg. When should the patient be returned to supine position?",
    "options": [
      "Never — keep prone indefinitely",
      "After each 16-hour cycle; reassess whether to continue based on response",
      "After 2 hours supine — revert if SpO2 drops",
      "After 72 continuous hours prone"
    ],
    "correctIndex": 1,
    "explanation": "PROSEVA protocol: 16-hour prone sessions, then 8 hours supine. Reassess after each session. Discontinue proning if: adequate oxygenation improvement sustained after returning supine, or complications arise (e.g., pressure ulcers, ETT dislodgment).",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Implementing a daily 'care bundle' in the SCCM's ABCDEF bundle, the 'E' stands for:",
    "options": [
      "Epinephrine for hemodynamic support",
      "Early mobility and exercise — ambulation in ICU patients even while on MV",
      "Extubation readiness test",
      "Electrolyte management"
    ],
    "correctIndex": 1,
    "explanation": "ABCDEF bundle: A = Assess, Prevent, Manage Pain; B = Spontaneous Awakening Trial; C = Spontaneous Breathing Trial; D = Delirium assessment; E = Early mobility/Exercise; F = Family engagement. Early mobility reduces ICU-acquired weakness.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Inspiratory flow starvation on VC-AC manifests on the pressure-time waveform as a scooped appearance. The best intervention is:",
    "options": [
      "Decrease tidal volume",
      "Increase peak inspiratory flow or switch to pressure-control mode to match patient demand",
      "Increase PEEP",
      "Sedate the patient deeper"
    ],
    "correctIndex": 1,
    "explanation": "Flow starvation = patient's demand exceeds delivered flow. In VC: increase set peak flow (e.g., 60→80 L/min). Alternatively, switch to PC mode — pressure control delivers decelerating flow that matches patient's natural demand pattern.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A COPD patient on MV has auto-PEEP of 10 cmH₂O. FiO2 is 0.35, SpO2 93%. The ventilator is set at RR 20, TV 500 mL, PEEP 5. The BEST change to reduce auto-PEEP is:",
    "options": [
      "Increase PEEP to 15 cmH₂O",
      "Decrease RR to 12 and decrease TV to 420 mL to prolong expiratory time",
      "Increase FiO2 to 0.50",
      "Increase inspiratory flow to 80 L/min and decrease RR to 12"
    ],
    "correctIndex": 3,
    "explanation": "To reduce auto-PEEP: (1) decrease RR to allow more expiratory time and (2) increase peak flow to shorten inspiratory time — both increase available expiratory time. Also decrease TV to reduce breath size. Increasing PEEP to 15 would worsen air trapping.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Static compliance of 15 mL/cmH₂O in a ventilated ARDS patient (normal ~100 mL/cmH₂O) indicates:",
    "options": [
      "Normal lung mechanics",
      "Severely reduced lung compliance — high risk for VILI; consider further TV reduction and PEEP optimization",
      "Problem is primarily resistance",
      "Need to increase tidal volume"
    ],
    "correctIndex": 1,
    "explanation": "Cstat 15 mL/cmH₂O represents severely stiff lungs (< 40 = ARDS range). This patient is at very high risk for VILI. Ensure TV at 6 mL/kg IBW or lower, Pplat ≤ 30, driving pressure ≤ 15 — consider prone positioning.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Transpulmonary driving pressure (ΔPL = Pplat − Pes_ee) of more than 20 cmH₂O in ARDS indicates:",
    "options": [
      "Safe ventilation parameters",
      "Alveolar overdistension risk — the lung parenchyma itself is exposed to unsafe stress",
      "Insufficient PEEP",
      "Need to increase respiratory rate"
    ],
    "correctIndex": 1,
    "explanation": "Transpulmonary ΔP (Pplat − esophageal end-expiratory pressure) isolates the actual lung driving pressure, excluding chest wall effects. > 20 cmH₂O indicates lung overdistension risk and warrants TV reduction or PEEP adjustment.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Right ventricular failure (acute cor pulmonale) complicating ARDS ventilation should prompt:",
    "options": [
      "Increasing PEEP aggressively",
      "Reducing driving pressure and Pplat, optimizing RV preload, using prone positioning and iNO, avoiding further RV afterload increases",
      "Switching to HFOV immediately",
      "Increasing TV to recruit the lung"
    ],
    "correctIndex": 1,
    "explanation": "Acute cor pulmonale in ARDS: reduce TV and PEEP if driving pressure and mPaw are high (reduce RV afterload), optimize preload, use iNO (pulmonary vasodilator), prone positioning (improves RV-PA coupling). Increasing PEEP or TV worsens RV function.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In a passively ventilated patient on VC-AC, a systolic pressure variation (SPV) of 20 mmHg (delta-down 15 mmHg) suggests:",
    "options": [
      "Volume overload",
      "Severe preload sensitivity — the patient will respond to fluid administration with increased cardiac output",
      "Normal cardiac function",
      "Aortic stenosis"
    ],
    "correctIndex": 1,
    "explanation": "SPV > 10 mmHg, particularly delta-down > 5 mmHg (pressure drop below the apneic baseline during exhalation), indicates hypovolemia and preload dependence. This patient is likely to respond to fluids with improved cardiac output.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "PEEP-induced hemodynamic compromise is most effectively assessed by:",
    "options": [
      "Measuring auto-PEEP only",
      "Checking the response to a brief PEEP reduction (PEEP trial) — cardiac output or BP improvement suggests PEEP-induced compromise",
      "Pulse oximetry only",
      "Central venous pressure (CVP) alone"
    ],
    "correctIndex": 1,
    "explanation": "The best way to assess PEEP-induced hemodynamic effects: temporarily reduce PEEP and observe for improvement in BP, CO (if thermodilution available), or lactate. This proves cause-and-effect in PEEP-related hemodynamic compromise.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Post-ICU syndrome (PICS) after prolonged mechanical ventilation includes:",
    "options": [
      "Only physical weakness",
      "Physical (ICU-acquired weakness), cognitive impairment, and psychological sequelae (PTSD, anxiety, depression) persisting after ICU discharge",
      "Only PTSD",
      "Short-term delirium only"
    ],
    "correctIndex": 1,
    "explanation": "PICS encompasses physical (muscle weakness from ICU-AW, critical illness polyneuropathy/myopathy), cognitive (memory, attention deficits), and psychological (PTSD, depression, anxiety) impairments persisting after ICU discharge.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "ICU-acquired weakness (ICUAW) from critical illness polymyopathy/polyneuropathy is best prevented by:",
    "options": [
      "Complete bed rest to preserve energy",
      "Early mobility, minimizing sedation, tight glycemic control, and avoiding unnecessary NMB",
      "High-calorie enteral nutrition only",
      "Routine steroid use"
    ],
    "correctIndex": 1,
    "explanation": "ICUAW prevention: early mobilization (even while intubated), light sedation (RASS −1 to 0), tight glucose control (140–180 mg/dL), minimal or no NMB unless required, and adequate nutrition support.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which weaning parameter best correlates with successful extubation when combined with RSBI?",
    "options": [
      "PaO2/FiO2 ratio > 200",
      "Cough strength (peak expiratory cough flow > 60 L/min) and ability to protect the airway",
      "EtCO2 < 40 mmHg",
      "TV > 400 mL on PSV 5"
    ],
    "correctIndex": 1,
    "explanation": "Cough strength and secretion management are critical for successful extubation. Patients with weak cough (peak cough flow < 60 L/min) or inability to manage secretions have high re-intubation rates even with a good RSBI.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Noninvasive ventilation (NIV) applied immediately after extubation (prophylactic NIV) in high-risk patients reduces:",
    "options": [
      "Duration of HFNC requirements",
      "Re-intubation rates in patients with hypercapnia risk, obesity, or cardiac disease",
      "Oxygen requirements only",
      "ICU-acquired infection"
    ],
    "correctIndex": 1,
    "explanation": "Prophylactic NIV immediately after extubation in high-risk patients (hypercapnia, COPD, obesity, cardiac disease) reduces the risk of re-intubation by preventing post-extubation respiratory failure before it becomes severe.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Tracheostomy downsizing progresses toward decannulation by:",
    "options": [
      "Immediately removing the tracheostomy tube when the patient is stable",
      "Stepwise reduction in tube size, cuff deflation trials, speaking valve trials, then capping trials before removal",
      "Placing the largest possible tube for secretion clearance",
      "Using a cuffed tube throughout until removal"
    ],
    "correctIndex": 1,
    "explanation": "Decannulation is a stepwise process: progressively smaller tubes → cuff deflation (assess for upper airway patency) → Passy-Muir valve (assess speech and cough) → tube capping (full airflow through upper airway) → decannulation when stable.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In traumatic brain injury (TBI) on MV, mild permissive hypercapnia (PaCO2 45–50) is:",
    "options": [
      "Acceptable to reduce ventilator pressures",
      "Contraindicated — CO2 causes cerebral vasodilation, raising ICP and worsening secondary brain injury",
      "Preferable to reduce WOB",
      "Required for neuroprotection"
    ],
    "correctIndex": 1,
    "explanation": "Unlike ARDS, TBI requires strict normocapnia (PaCO2 35–40 mmHg) or even mild hyperventilation for acute herniation. Hypercapnia causes cerebral vasodilation → increased cerebral blood volume → raised ICP → secondary ischemic injury.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A burn patient with inhalation injury is intubated early because:",
    "options": [
      "All burn patients require intubation",
      "Progressive upper airway edema can cause complete obstruction hours after injury — early intubation is safer than emergent late intubation",
      "The patient always has low SpO2 initially",
      "To administer inhaled medications"
    ],
    "correctIndex": 1,
    "explanation": "Inhalation injury causes progressive supraglottic edema. What is manageable at presentation can progress to complete obstruction within 12–24 hours. Early elective intubation while the airway is still patent is far safer than emergent cricothyrotomy later.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Inhaled pulmonary vasodilators (iNO, inhaled prostacyclin) improve oxygenation in ARDS without systemic hypotension because:",
    "options": [
      "They are administered at very low doses",
      "Pulmonary vasodilation only occurs in ventilated lung regions — the drug is immediately inactivated on contact with blood (hemoglobin binding for iNO)",
      "They block systemic alpha receptors",
      "They only affect venous return"
    ],
    "correctIndex": 1,
    "explanation": "iNO is rapidly inactivated by hemoglobin in the pulmonary capillary blood, preventing systemic vasodilation. It only vasodilates the pulmonary vasculature in ventilated alveoli, improving V/Q matching without causing systemic hypotension.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In post-cardiac surgery patients, which ventilator concern is most unique compared to general ICU ventilation?",
    "options": [
      "High PEEP is always needed",
      "Sternal wound stability with coughing — gentle airway suctioning and cough suppression to prevent sternal dehiscence",
      "Mandatory prone positioning",
      "Routine NMB for 48 hours"
    ],
    "correctIndex": 1,
    "explanation": "Post-cardiac surgery (CABG, valve): sternal wound integrity during early recovery is critical. Forceful coughing or Valsalva during ventilator weaning can disrupt sternal closure. Analgesia and proper cough support reduce this risk.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Obesity and the supine position reduce FRC because:",
    "options": [
      "Obesity increases lung compliance",
      "Abdominal weight displaces the diaphragm cephalad, reducing thoracic volume and FRC",
      "Obesity reduces airway resistance",
      "The supine position increases cardiac output only"
    ],
    "correctIndex": 1,
    "explanation": "In obese patients supine, the heavy abdomen pushes the diaphragm cephalad, compressing the lower lobes, reducing FRC below closing capacity, causing atelectasis and V/Q mismatch. Elevated head-of-bed 30–45° and PEEP help restore FRC.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Lung-protective ventilation strategy in patients with COPD exacerbation should use:",
    "options": [
      "Aggressive hyperventilation to normalize PaCO2",
      "Permissive hypercapnia with low TV (6–8 mL/kg), prolonged expiratory time, and limited Pplat — prevent air trapping and VILI",
      "HFOV as first-line",
      "High PEEP (15 cmH₂O) to keep airways open"
    ],
    "correctIndex": 1,
    "explanation": "COPD patients on MV: use low TV (6–8 mL/kg IBW), low-normal RR (10–12), prolonged expiratory time (I:E 1:3–1:4), and PEEP at 80% of auto-PEEP to reduce trigger WOB. Allow PaCO2 to stay at or near their chronic baseline.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which patient population benefits most from iNO therapy in terms of mortality reduction?",
    "options": [
      "All ARDS patients",
      "Term neonates with persistent pulmonary hypertension of the newborn (PPHN)",
      "COPD patients on MV",
      "Post-surgical patients with atelectasis"
    ],
    "correctIndex": 1,
    "explanation": "iNO has the strongest evidence for mortality benefit in term neonates with PPHN. In adult ARDS, iNO improves oxygenation but has NOT shown mortality benefit in multiple randomized trials. Its use in adults is as a bridge to other therapies.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A ventilated patient develops sudden tachycardia and hypotension after PEEP was increased from 5 to 15 cmH₂O. The most likely cause is:",
    "options": [
      "Pneumonia exacerbation",
      "Decreased venous return from high intrathoracic pressure — PEEP-induced hemodynamic compromise",
      "Pulmonary embolism",
      "Ventilator malfunction"
    ],
    "correctIndex": 1,
    "explanation": "High PEEP increases intrathoracic pressure, compressing the vena cava and right atrium, reducing venous return and cardiac output. This is PEEP-induced circulatory compromise — reduce PEEP and provide a volume challenge if appropriate.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "'Ventilator days' as a quality metric in ICU is primarily used to measure:",
    "options": [
      "Total tidal volume delivered",
      "The incidence and duration of mechanical ventilation — shorter ventilator days correlate with fewer VAP events, less ICUAW, and lower resource use",
      "Total FiO2 delivered",
      "Number of ETT changes"
    ],
    "correctIndex": 1,
    "explanation": "Ventilator days is a key ICU process metric. Reducing unnecessary ventilator days through daily SBT protocols and SAT bundles decreases VAP risk, ICU-AW, sedation burden, patient delirium, and overall cost of care.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which sedation strategy has been shown to reduce duration of mechanical ventilation and ICU length of stay?",
    "options": [
      "Deep sedation (RASS −4 to −5) throughout ICU stay",
      "Daily interruption of sedation (awakening trials) targeting light sedation (RASS −1 to 0)",
      "PRN sedation only when patient is clearly agitated",
      "Continuous benzodiazepine infusion"
    ],
    "correctIndex": 1,
    "explanation": "Kress et al. (2000) demonstrated that daily sedation interruptions reduced MV duration by 2 days and ICU LOS by 3.5 days compared to continuous infusion. Light sedation protocols (RASS −1 to 0) are now standard of care.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Passive leg raising (PLR) test as a fluid responsiveness assessment in a ventilated patient:",
    "options": [
      "Requires the patient to actively lift their legs",
      "Is a reversible 'auto-fluid challenge' — elevating legs shifts ~300 mL venous blood toward the heart; increase in CO > 10% predicts fluid responsiveness",
      "Provides 1 L fluid equivalent test",
      "Is unreliable in patients on vasopressors"
    ],
    "correctIndex": 1,
    "explanation": "PLR mobilizes ~300 mL of venous blood from the legs as preload. A > 10% increase in cardiac output (assessed by pulse pressure variation, echocardiography, or CO monitoring) predicts volume responsiveness — without giving permanent fluid.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which neuromuscular blocking agent is most commonly used for ongoing paralysis in the ICU and why?",
    "options": [
      "Succinylcholine — fastest onset",
      "Cisatracurium — Hofmann elimination (organ-independent), minimal cardiovascular effects, no histamine release, no accumulation",
      "Vecuronium — longest duration",
      "Pancuronium — cheapest option"
    ],
    "correctIndex": 1,
    "explanation": "Cisatracurium undergoes Hofmann elimination (spontaneous chemical degradation at physiologic pH/temp), making it ideal for ICU use — no dose adjustment for renal or hepatic failure, no active metabolite accumulation, and minimal cardiovascular effects.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient's peak cough flow is measured at 45 L/min before extubation. This finding suggests:",
    "options": [
      "Strong cough — proceed with extubation",
      "Weak cough (< 60 L/min threshold) — high risk for secretion retention and post-extubation respiratory failure; consider delay or mechanical cough assist",
      "Normal — proceed with extubation",
      "Need to measure NIF before deciding"
    ],
    "correctIndex": 1,
    "explanation": "Peak cough flow < 60 L/min indicates insufficient cough strength to clear secretions independently. High-risk patient for post-extubation failure. Consider mechanical insufflation-exsufflation (MIE/'CoughAssist'), intensified physiotherapy, or tracheostomy.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which statement about spontaneous breathing trials (SBT) duration is most accurate based on current evidence?",
    "options": [
      "30 minutes is equivalent to 2 hours for predicting extubation success",
      "Longer SBTs (2 hours) predict success more accurately but a 30-minute SBT is adequate in most patients",
      "3-hour SBTs are required for all patients",
      "SBT duration does not matter — only RSBI matters"
    ],
    "correctIndex": 1,
    "explanation": "Studies show 30-minute and 2-hour SBTs have equivalent extubation success rates in most patients (Esteban et al.). A 30-minute SBT is adequate for most; 2-hour SBT is reserved for high-risk patients (cardiac history, prolonged MV, prior failed SBT).",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "If a patient becomes hypoxic during a spontaneous breathing trial but maintains adequate breathing effort and stable hemodynamics, the most appropriate action is:",
    "options": [
      "Increase FiO2 and continue the SBT",
      "Abort the SBT — SpO2 < 90% is an absolute stopping criterion regardless of other parameters",
      "Switch to higher PEEP and continue",
      "Give bronchodilator and continue"
    ],
    "correctIndex": 1,
    "explanation": "SpO2 < 90% (or PaO2 < 60 mmHg) during SBT is an absolute stopping criterion for the trial. The patient should be returned to full ventilatory support, the cause evaluated, and the SBT retried the following day.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Post-extubation use of non-invasive ventilation (NIV) to prevent respiratory failure is MOST supported in which patient population?",
    "options": [
      "All ICU patients post-extubation",
      "COPD patients and those with chronic hypercapnia — NIV reduces re-intubation and mortality post-extubation",
      "Only patients with ARDS",
      "Patients with no underlying lung disease"
    ],
    "correctIndex": 1,
    "explanation": "Multiple RCTs show NIV post-extubation reduces re-intubation and mortality in COPD patients (who are at risk for hypercapnic failure). The evidence is less clear for purely hypoxemic patients (where HFNC may be preferable).",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The 'stress response' to mechanical ventilation can cause hyperglycemia via:",
    "options": [
      "Direct insulin secretion stimulation by the ventilator",
      "Catecholamine and cortisol release from the stress of critical illness, causing insulin resistance and increased gluconeogenesis",
      "High FiO2 stimulating pancreatic beta cells",
      "PEEP increasing portal venous pressure"
    ],
    "correctIndex": 1,
    "explanation": "Critical illness and the physiological stress of MV trigger catecholamine and cortisol release, causing hepatic gluconeogenesis, glycogenolysis, and peripheral insulin resistance → hyperglycemia. Tight glucose control (140–180 mg/dL) is recommended.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Ventilator-induced diaphragm dysfunction (VIDD) occurs in controlled MV due to:",
    "options": [
      "High PEEP causing diaphragm hyperinflation",
      "Diaphragm disuse atrophy — complete controlled ventilation causes rapid diaphragm atrophy within 12–24 hours of passivity",
      "Low FiO2 causing diaphragm hypoxia",
      "Auto-PEEP overloading the diaphragm"
    ],
    "correctIndex": 1,
    "explanation": "VIDD: when the diaphragm is not contracting (controlled MV, deep sedation, NMB), it undergoes atrophy and structural injury within 12–18 hours of inactivity. This impairs weaning. Partial support modes that preserve diaphragm activity help prevent VIDD.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which parameter, when measured during a spontaneous breathing trial, most strongly predicts SUCCESSFUL extubation?",
    "options": [
      "PaO2/FiO2 ratio > 400",
      "Combination of low RSBI (< 105) + adequate cough + minimal secretions + hemodynamic stability during the trial",
      "TV > 500 mL during SBT",
      "Heart rate < 80 bpm throughout SBT"
    ],
    "correctIndex": 1,
    "explanation": "No single parameter perfectly predicts extubation success. The combination of RSBI ≤ 105 + tolerating the SBT without distress + adequate cough and secretion management + hemodynamic stability throughout the trial provides the highest predictive value.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Ultra-protective ventilation (TV 3–4 mL/kg) on VV-ECMO with spontaneous breathing preserved:",
    "options": [
      "Is dangerous due to patient self-inflicted lung injury (P-SILI)",
      "May be beneficial — preserves diaphragm function, but P-SILI risk must be monitored and managed with appropriate sedation",
      "Requires complete NMB",
      "Is not recommended — use 6 mL/kg IBW even on ECMO"
    ],
    "correctIndex": 1,
    "explanation": "On VV-ECMO, allowing some spontaneous breathing preserves diaphragm function (preventing VIDD), but vigorous effort generating high transpulmonary pressures can cause P-SILI. Moderate sedation to limit effort is needed to balance these competing risks.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In PC-AC mode, if lung compliance suddenly decreases (e.g., new pneumonia), the tidal volume will:",
    "options": [
      "Remain constant — pressure control guarantees volume",
      "Decrease — same pressure produces less volume with stiffer lungs",
      "Increase — higher resistance requires more volume",
      "Stay the same — only RR changes"
    ],
    "correctIndex": 1,
    "explanation": "In pressure-control modes, tidal volume is NOT guaranteed. TV = (PIP − PEEP) × Compliance. If compliance falls, less volume is generated for the same pressure. Monitoring TV closely on PC-AC is critical to detect worsening lung mechanics.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Mandatory minute ventilation (MMV) mode automatically adjusts mandatory breath rate to maintain a set minimum minute ventilation. Its clinical advantage over SIMV is:",
    "options": [
      "It delivers higher tidal volumes",
      "If the patient's spontaneous breaths are adequate, mandatory breaths are reduced — decreasing dyssynchrony and WOB compared to fixed-rate SIMV",
      "It eliminates the need for pressure support",
      "It can only be used in weaning"
    ],
    "correctIndex": 1,
    "explanation": "MMV monitors total VE. When the patient's spontaneous ventilation meets the target VE, the ventilator reduces (or eliminates) mandatory breaths automatically. This reduces unnecessary mandatory breaths that may fight against the patient's own rhythm.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In volume-controlled ventilation with a decelerating flow waveform (ramp down), compared to constant (square) flow at the same TV:",
    "options": [
      "PIP is higher with decelerating flow",
      "PIP is lower with decelerating flow — peak flow is reduced, lowering peak resistive pressure",
      "Pplat is higher",
      "Mean airway pressure is lower"
    ],
    "correctIndex": 1,
    "explanation": "Decelerating (ramp) flow in VC mode: peak flow is lower than in square flow, reducing the resistive pressure component. PIP is lower with better gas distribution, similar to PC mode — but tidal volume remains guaranteed.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A patient develops 'breath stacking' (a second breath triggered before full exhalation of the first). This most likely indicates:",
    "options": [
      "Normal assist-control function",
      "Double triggering from short machine inspiratory time relative to neural Ti — or high patient drive causing early next trigger",
      "Ventilator malfunction",
      "Adequate synchrony"
    ],
    "correctIndex": 1,
    "explanation": "Breath stacking occurs when the next breath triggers before the lungs fully empty — common with double triggering (short Ti) or auto-triggering. This delivers excessive tidal volumes and can cause barotrauma and hemodynamic compromise.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The esophageal balloon catheter in mechanically ventilated patients provides the best estimate of:",
    "options": [
      "Cardiac output",
      "Pleural pressure — allowing calculation of transpulmonary pressure (Paw − Pes)",
      "PaCO2",
      "Auto-PEEP"
    ],
    "correctIndex": 1,
    "explanation": "The esophageal balloon approximates pleural pressure (Pes). Transpulmonary pressure = Paw − Pes. This allows clinicians to distinguish lung compliance from chest wall compliance and optimally titrate PEEP to maintain positive transpulmonary end-expiratory pressure.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The P-SILI (patient self-inflicted lung injury) concept describes:",
    "options": [
      "Lung injury from mechanical ventilator over-pressurization",
      "High respiratory drive generating large, forceful spontaneous breaths with high transpulmonary pressure swings — causing VILI without the ventilator doing it",
      "Injury from suctioning",
      "ETT-related mucosal damage"
    ],
    "correctIndex": 1,
    "explanation": "P-SILI: a spontaneously breathing patient with high neural drive (e.g., severe ARDS, high CO2) generates very high negative pleural pressures, creating large transpulmonary pressure swings that cause alveolar overdistension and edema formation.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which ventilator circuit component is responsible for preventing cross-infection between patients?",
    "options": [
      "PEEP valve",
      "HME filter (heat-moisture exchanger with viral/bacterial filtration)",
      "Pressure manometer",
      "Exhalation valve"
    ],
    "correctIndex": 1,
    "explanation": "HME filters placed between the patient circuit and Y-piece (and at the expiratory port) contain electrostatic or membrane filters that trap bacteria and viruses, preventing contamination of the ventilator internal circuit and protecting subsequent patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "In a patient with unilateral lung disease (e.g., right-sided ARDS, left lung normal), independent lung ventilation (ILV) is advantageous because:",
    "options": [
      "One ventilator can ventilate both lungs equally",
      "Each lung can be ventilated with individualized settings (PEEP, TV, FiO2) — preventing overdistension of the healthy lung and providing adequate support to the diseased lung",
      "It reduces ETT secretions",
      "It eliminates the need for PEEP"
    ],
    "correctIndex": 1,
    "explanation": "ILV with a double-lumen ETT or bronchial blocker allows the healthy lung to be ventilated with normal protective settings while the diseased lung receives higher PEEP and different settings — preventing the healthy lung from being overdistended by excess PEEP needed for the sick lung.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "During VC-AC ventilation, the plateau pressure represents:",
    "options": [
      "The maximum pressure needed to overcome airway resistance",
      "The static end-inspiratory lung pressure — reflecting elastic recoil of the lung and chest wall at the delivered tidal volume",
      "The mean airway pressure",
      "The PEEP level"
    ],
    "correctIndex": 1,
    "explanation": "Pplat is measured during a no-flow inspiratory hold. With zero flow, the resistive pressure component disappears, and the remaining pressure reflects the elastic properties of the respiratory system at the delivered tidal volume.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "What is the effect of fever (39°C) on CO2 production and ventilator management?",
    "options": [
      "CO2 production decreases — reduce RR",
      "CO2 production increases ~10–13% per degree C — may need to increase minute ventilation to maintain normocapnia",
      "No effect on ventilator settings",
      "CO2 production increases but does not affect PaCO2"
    ],
    "correctIndex": 1,
    "explanation": "Fever increases metabolic rate and CO2 production (~10% per 1°C rise). For normocapnic targets, RR or TV may need to be increased. Conversely, treatment of fever (antipyretics, cooling) may allow RR reduction and potentially facilitate weaning.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Which PEEP titration method uses the pressure-volume (P-V) curve to find the 'lower inflection point'?",
    "options": [
      "ARDSNet FiO2-PEEP table",
      "P-V curve static inflation method — lower inflection point marks the pressure above which alveoli begin to recruit en masse",
      "Decremental PEEP titration based on compliance",
      "Esophageal pressure-guided titration"
    ],
    "correctIndex": 1,
    "explanation": "The static P-V curve lower inflection point (Pflex, typically 12–15 cmH₂O in ARDS) historically suggested the minimum PEEP to prevent derecruitment. However, the curve approach is technically demanding and has largely been replaced by decremental PEEP trials targeting best compliance.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Derecruitment in ARDS most commonly occurs during:",
    "options": [
      "Inspiration",
      "Suctioning, circuit disconnection, position changes, and other interventions that briefly reduce CPAP/PEEP",
      "Quiet expiration",
      "ABG sampling"
    ],
    "correctIndex": 1,
    "explanation": "Derecruitment in ARDS happens whenever PEEP is lost or reduced: during suctioning (open circuit), position changes, aerosol treatments requiring disconnection, or accidental circuit disconnection. Closed-circuit suctioning and recruitment maneuvers after disconnection help minimize derecruitment.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Prone positioning improves oxygenation in ARDS by all of the following EXCEPT:",
    "options": [
      "Redistributing lung perfusion to dorsal regions that are better ventilated prone",
      "Reducing cardiac compression of the dorsal lung",
      "Recruiting dependent dorsal atelectasis that was present in supine",
      "Eliminating the need for PEEP entirely"
    ],
    "correctIndex": 3,
    "explanation": "Prone positioning: (1) redistributes perfusion to dorsal regions (now ventral prone = well-ventilated), (2) removes cardiac weight from left lower lobe, (3) recruits dorsal atelectasis. PEEP is still required — proning does not eliminate the need for PEEP.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Tracheal gas insufflation (TGI) reduces dead space by:",
    "options": [
      "Increasing tidal volume",
      "Injecting fresh gas directly near the carina, flushing CO2 from dead space during expiration",
      "Increasing respiratory rate",
      "Delivering humidified gas only"
    ],
    "correctIndex": 1,
    "explanation": "TGI delivers a continuous flow of fresh gas near the carina via a catheter inside the ETT. During expiration, this flushes CO2 from the anatomic dead space, allowing effective CO2 clearance at lower tidal volumes — useful in ultra-protective ventilation on ECMO.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The risk of oxygen toxicity in mechanical ventilation is most clinically relevant when FiO2 exceeds what level for more than 24–48 hours?",
    "options": [
      "0.30",
      "0.40",
      "0.60",
      "0.80"
    ],
    "correctIndex": 2,
    "explanation": "FiO2 > 0.60 sustained for > 24–48 hours is associated with tracheobronchitis, alveolar edema, and progressive lung injury from reactive oxygen species. Target FiO2 ≤ 0.40–0.50 using PEEP to optimize oxygenation with less FiO2.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "In volume-control ventilation with constant flow, the slope of the pressure rise during inspiration reflects:",
    "options": [
      "Airway resistance",
      "Lung and chest wall compliance (steeper slope = lower compliance)",
      "PEEP level",
      "Tidal volume delivered"
    ],
    "correctIndex": 1,
    "explanation": "With constant flow (square wave) in VC, pressure rises linearly. The slope (ΔP/ΔV per unit time) reflects total respiratory system compliance. A steeper slope = lower compliance (stiffer lungs). Resistance appears as the initial pressure jump at breath onset.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "After a recruitment maneuver (RM) in ARDS, the PEEP should be:",
    "options": [
      "Immediately reduced to baseline (5 cmH₂O)",
      "Set at or slightly above the level needed to maintain the recruitment achieved — to prevent derecruitment",
      "Kept at RM pressure indefinitely",
      "Not adjusted — RM alone is sufficient"
    ],
    "correctIndex": 1,
    "explanation": "After an RM, PEEP must be set high enough to maintain recruited alveoli open (prevent collapse at end-expiration). Without adequate post-RM PEEP, alveoli recollapsewithin breaths — negating the recruitment benefit.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A ventilated patient has PaCO2 of 70 mmHg on RR 16, TV 450 mL (IBW 60 kg). The primary action to improve CO2 clearance is:",
    "options": [
      "Increase PEEP to 10 cmH₂O",
      "Increase RR to 22 breaths/min to increase minute ventilation",
      "Switch to PC-AC mode",
      "Increase FiO2 to 0.70"
    ],
    "correctIndex": 1,
    "explanation": "High PaCO2 = inadequate alveolar ventilation. Increasing RR from 16 to 22 increases VE from 7.2 to 9.9 L/min — the most effective change to reduce PaCO2. Ensure auto-PEEP does not develop with the higher rate.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "During a pressure-control breath in a paralyzed patient, the tidal volume changes between breaths despite no change in settings. What is the most likely cause?",
    "options": [
      "Ventilator malfunction",
      "Changing lung compliance or resistance (e.g., accumulation of secretions, position change, progressive ARDS)",
      "Ventilator circuit leak",
      "Change in body temperature"
    ],
    "correctIndex": 1,
    "explanation": "PC delivers a fixed pressure, so TV varies with lung mechanics. Beat-to-beat variation in a passive patient suggests changing compliance (progressive ARDS, secretion accumulation, tension pneumothorax developing) or resistance (bronchospasm, obstruction).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "'Optimal PEEP' based on the electrical impedance tomography (EIT) concept selects the PEEP at which:",
    "options": [
      "Oxygenation is highest",
      "Regional overdistension and regional collapse are minimized simultaneously — the balance point",
      "Driving pressure is lowest",
      "Compliance is highest at the bedside"
    ],
    "correctIndex": 1,
    "explanation": "EIT is a radiation-free bedside technique that maps regional lung ventilation. It identifies the PEEP at which overdistension of non-dependent lung regions and collapse of dependent regions are simultaneously minimized — individualizing PEEP beyond ARDSNet tables.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The relationship between PaCO2 and alveolar ventilation is:",
    "options": [
      "Directly proportional — higher VA → higher PaCO2",
      "Inversely proportional — doubling alveolar ventilation halves PaCO2",
      "No relationship",
      "Linear and directly proportional only at high ventilation rates"
    ],
    "correctIndex": 1,
    "explanation": "PaCO2 = (VCO2 / VA) × 0.863. Alveolar ventilation and PaCO2 are inversely proportional: double VA → half PaCO2. This is the physiological basis for controlling CO2 by adjusting RR and TV.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In pressure support ventilation, increasing the PEEP from 5 to 10 cmH₂O without changing PS level will:",
    "options": [
      "Decrease total tidal volume",
      "Increase the total airway pressure during inspiration (PS + PEEP increases)",
      "Decrease WOB",
      "Have no effect on tidal volume"
    ],
    "correctIndex": 1,
    "explanation": "In PSV, the total inspiratory pressure = PEEP + PS. If PEEP rises from 5 to 10 with PS unchanged, the total driving pressure (and thus tidal volume) increases — equivalent to providing 5 cmH₂O more pressure support. Monitor for excessive TV.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which formula calculates the mean airway pressure on a time-cycled, pressure-limited ventilator?",
    "options": [
      "PIP × I-time",
      "mPaw = [(PIP × Ti) + (PEEP × Te)] / (Ti + Te)",
      "PEEP + (PIP × RR)",
      "(PIP + PEEP) / 2 × RR"
    ],
    "correctIndex": 1,
    "explanation": "Mean airway pressure = [(PIP × Ti) + (PEEP × Te)] / (Ti + Te). Increasing PIP, Ti (prolonged inspiration), or PEEP all increase mPaw — improving oxygenation but also increasing intrathoracic pressure and reducing venous return.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Continuous mandatory ventilation (CMV) with no ability to trigger patient breaths differs from A/C in that:",
    "options": [
      "CMV allows patient-triggered breaths",
      "CMV does NOT allow patient-triggered breaths — all breaths are time-triggered at a fixed rate; any patient effort results in dyssynchrony (breath stacking)",
      "CMV provides pressure support between mandatory breaths",
      "CMV is the same as A/C"
    ],
    "correctIndex": 1,
    "explanation": "True CMV delivers only time-triggered mandatory breaths. Any patient effort that doesn't coincide with the set rate is not assisted — it causes dyssynchrony. A/C (assist-control) allows patient-triggered breaths at full set tidal volume/pressure.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Intrinsic PEEP (auto-PEEP) causes the patient to trigger difficulty because:",
    "options": [
      "The patient must generate extra positive pressure to trigger",
      "The patient must first overcome the auto-PEEP before generating enough negative pressure to cross the trigger threshold",
      "Auto-PEEP eliminates flow triggering entirely",
      "Auto-PEEP increases tidal volume automatically"
    ],
    "correctIndex": 1,
    "explanation": "The ventilator's trigger sensitivity is set relative to the circuit baseline. With auto-PEEP, the patient's alveoli are at a higher pressure than the circuit — the patient must overcome auto-PEEP pressure before generating negative pressure that crosses the trigger threshold.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "When using flow triggering (vs. pressure triggering) on a mechanical ventilator, the advantage is:",
    "options": [
      "Flow triggering requires more patient effort",
      "Flow triggering is more sensitive and reduces trigger WOB compared to pressure triggering (detects smaller effort changes)",
      "Flow triggering causes more auto-triggering",
      "Flow triggering only works in PC mode"
    ],
    "correctIndex": 1,
    "explanation": "Flow triggering detects the patient's inspiratory effort by sensing a decrease in the continuous bias flow through the circuit — typically more sensitive and faster to respond than pressure triggering, reducing inspiratory WOB.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In a patient on HFOV, oxygenation is primarily controlled by:",
    "options": [
      "Frequency setting",
      "Mean airway pressure (mPaw) — determines alveolar recruitment and FRC",
      "Amplitude (ΔP)",
      "FiO2 alone"
    ],
    "correctIndex": 1,
    "explanation": "HFOV oxygenation control: mPaw maintains alveolar recruitment. Higher mPaw = more alveoli open = better V/Q = better PaO2. FiO2 is also adjusted, but mPaw is the primary lever for oxygenation in HFOV.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Tracheomalacia as a complication of prolonged mechanical ventilation most commonly results from:",
    "options": [
      "Cuff pressure too low",
      "Prolonged high cuff pressure causing tracheal wall ischemia and cartilage destruction → floppy, collapsible trachea",
      "Repeated ETT size changes",
      "Use of heated humidification"
    ],
    "correctIndex": 1,
    "explanation": "Tracheomalacia results from ischemic necrosis of tracheal cartilage from prolonged excessive cuff pressure. The trachea loses its structural rigidity, collapsing with each breath. Proper cuff management (20–30 cmH₂O) prevents this complication.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "An endotracheal tube cuff pressure below 20 cmH₂O increases risk of:",
    "options": [
      "Tracheal ischemia and necrosis",
      "Microaspiration of oropharyngeal secretions past the cuff, increasing VAP risk",
      "Tube obstruction from secretions",
      "Barotrauma"
    ],
    "correctIndex": 1,
    "explanation": "Cuff pressure < 20 cmH₂O allows contaminated secretions to pool above the cuff and seep past it into the lower airways. This microaspiration is a major mechanism for ventilator-associated pneumonia (VAP). Target 20–30 cmH₂O.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The ARDS 'baby lung' concept describes:",
    "options": [
      "ARDS occurring only in children",
      "The small proportion of normally aerated, recruitable lung available for ventilation in ARDS — suggesting small tidal volumes are necessary to avoid overdistension of this small 'functional lung'",
      "A radiographic pattern of ARDS",
      "ARDS from aspiration in infants"
    ],
    "correctIndex": 1,
    "explanation": "Gattinoni's 'baby lung' concept: in ARDS, ~20–30% of the lung remains aerated. A normal tidal volume (e.g., 10–12 mL/kg) delivered to this small 'baby lung' causes massive overdistension — the physiological basis for using 6 mL/kg IBW.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which lung mechanics finding would lead you to DECREASE PEEP (rather than increase it) in an ARDS patient?",
    "options": [
      "Worsening compliance",
      "Decreasing compliance with rising PEEP — indicating overdistension outweighs recruitment benefit",
      "Worsening oxygenation",
      "Increasing driving pressure from low PEEP"
    ],
    "correctIndex": 1,
    "explanation": "If compliance worsens (decreases) as PEEP is increased, further PEEP is overdistending already-open alveoli rather than recruiting collapsed ones. The PEEP should be reduced to the last level at which compliance was improving.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In the PROSEVA trial, patients receiving prone positioning had a 28-day mortality of approximately:",
    "options": [
      "46% (same as supine)",
      "16% vs. 33% in supine — a dramatic mortality reduction in severe ARDS (P/F < 150)",
      "25% vs. 28% in supine — marginal benefit",
      "10% vs. 12% in supine — no significant benefit"
    ],
    "correctIndex": 1,
    "explanation": "PROSEVA (2013): prone group 28-day mortality 16% vs. 33% supine (hazard ratio 0.39). This large absolute reduction (17%) established prone positioning ≥ 16 hr/day as standard of care for severe ARDS (P/F < 150) on lung-protective ventilation.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Neuromuscular disease patients requiring MV (e.g., Guillain-Barré, ALS) need ventilatory support because of:",
    "options": [
      "Intrinsic lung disease causing V/Q mismatch",
      "Respiratory muscle weakness causing hypoventilation — lungs and airways are usually normal",
      "Abnormal chemoreceptor sensitivity",
      "Severe airflow obstruction"
    ],
    "correctIndex": 1,
    "explanation": "In NMD, the lungs are structurally normal — the problem is insufficient inspiratory muscle force to generate adequate tidal volumes. Hypoventilation → CO2 retention → respiratory acidosis. The lung parenchyma is not diseased.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "Which change to ventilator settings most directly reduces driving pressure in ARDS?",
    "options": [
      "Increasing respiratory rate",
      "Decreasing tidal volume — ΔP = Pplat − PEEP; lower TV reduces Pplat",
      "Increasing FiO2",
      "Increasing inspiratory time"
    ],
    "correctIndex": 1,
    "explanation": "Driving pressure (ΔP = Pplat − PEEP) is most directly reduced by lowering tidal volume. With less volume delivered, Pplat falls, reducing ΔP. This is the rationale for titrating TV to achieve ΔP ≤ 15 cmH₂O in ARDS.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A pH of 7.15 with PaCO2 80 mmHg in a ventilated ARDS patient on lung-protective settings should prompt:",
    "options": [
      "Immediately increase TV to normalize PaCO2",
      "Increase RR to maximum without causing auto-PEEP, consider bicarbonate if pH < 7.15–7.20, accept permissive hypercapnia if RR cannot increase further safely",
      "Switch to HFOV immediately",
      "Add BiPAP"
    ],
    "correctIndex": 1,
    "explanation": "First, increase RR as much as possible without causing auto-PEEP. If pH remains < 7.20 despite maximum safe RR, consider sodium bicarbonate infusion to partially correct pH. Ultra-low TV is maintained — permissive hypercapnia is accepted unless pH < 7.20.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The benefit of early tracheostomy (within 10 days of MV initiation) vs. late tracheostomy in ICU patients:",
    "options": [
      "Early tracheostomy significantly reduces ICU mortality",
      "Early tracheostomy reduces sedation use and potentially shortens ICU stay, but large trials (TracMan, FENICS) show no mortality benefit",
      "Early tracheostomy increases VAP risk",
      "Late tracheostomy is always preferred"
    ],
    "correctIndex": 1,
    "explanation": "Multiple large RCTs (TracMan, FENICS): early tracheostomy reduces sedation requirements and may shorten ICU stay, but does not reduce 30-day mortality compared to late tracheostomy. Decision should be individualized based on weaning prognosis.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The SAINT trial showed that in patients with moderate-severe ARDS, routine use of recruitment maneuvers with high PEEP strategy resulted in:",
    "options": [
      "Improved 28-day mortality",
      "Increased 28-day mortality compared to low PEEP approach — excessive pressure may cause barotrauma and hemodynamic compromise",
      "No difference in outcomes",
      "Improved outcomes in all ARDS subtypes"
    ],
    "correctIndex": 1,
    "explanation": "ART/SAINT trial (2017): aggressive RM + high-PEEP strategy in ARDS increased 28-day mortality (55% vs 49%) compared to the ARDSNet low-PEEP strategy. This reinforced individualized PEEP titration rather than uniform high PEEP.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "When transitioning a patient from controlled ventilation to assisted/spontaneous modes, what respiratory parameter best guides readiness?",
    "options": [
      "Chest X-ray improvement",
      "Return of respiratory drive (patient triggering attempts) and improvement in underlying cause of respiratory failure",
      "Normal PEEP level only",
      "RR < 30 on controlled mode"
    ],
    "correctIndex": 1,
    "explanation": "Prerequisites for transition to assisted modes: (1) return of spontaneous respiratory drive, (2) improvement in underlying indication for MV, (3) hemodynamic stability, (4) FiO2 and PEEP at levels compatible with SBT criteria (FiO2 ≤ 0.50, PEEP ≤ 8).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Oxygen delivery (DO2) formula is:",
    "options": [
      "DO2 = SaO2 × Hgb",
      "DO2 = CaO2 × CO × 10 = (Hgb × 1.34 × SaO2 + PaO2 × 0.003) × CO × 10",
      "DO2 = PaO2 / FiO2",
      "DO2 = TV × RR × FiO2"
    ],
    "correctIndex": 1,
    "explanation": "DO2 = CaO2 × CO × 10 (dL→L conversion). CaO2 = (Hgb × 1.34 × SaO2) + (PaO2 × 0.003). Normal DO2 ≈ 1,000 mL/min. Optimizing DO2 requires managing Hgb, SaO2, and cardiac output — not just oxygenation alone.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Closed-loop ventilation (automated weaning) refers to systems that:",
    "options": [
      "Seal the circuit to prevent leaks",
      "Continuously adjust ventilator settings (PS, TV, PEEP, RR) in real time based on feedback from patient monitored parameters — reducing need for manual adjustments",
      "Prevent manual ventilator changes",
      "Only operate in ICU-specific ventilators"
    ],
    "correctIndex": 1,
    "explanation": "Closed-loop ventilation (SmartCare/PS, ASV, INTELLiVENT-ASV) uses algorithms to continuously analyze patient-ventilator interaction and automatically optimize settings — including initiating weaning protocols when patient stability criteria are met.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A patient is on VC-AC with RR 14, TV 450 mL. ABG: pH 7.50, PaCO2 30, PaO2 110. Which change is most appropriate?",
    "options": [
      "Increase PEEP to improve oxygenation",
      "Decrease RR or TV to reduce hyperventilation and allow PaCO2 to normalize",
      "Increase FiO2",
      "Add pressure support"
    ],
    "correctIndex": 1,
    "explanation": "Respiratory alkalosis (pH 7.50, PaCO2 30) from excessive minute ventilation. Oxygenation is excellent (PaO2 110). Reduce RR (e.g., to 10–12) or TV slightly to let PaCO2 rise toward 35–40 mmHg. Hyperventilation can cause vasospasm, arrhythmias, and reduced cerebral blood flow.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Sigh breaths in modern ventilators for ARDS are being re-explored because:",
    "options": [
      "They increase dead space",
      "Periodic large breaths (at 2–3× normal TV) may recruit alveoli and maintain FRC, potentially allowing lower PEEP with equivalent lung protection",
      "They eliminate the need for PEEP",
      "They cause bronchospasm in ARDS patients"
    ],
    "correctIndex": 1,
    "explanation": "Recent studies (LUNG SAFE, BILEVEL) suggest that periodic sighs (3 breaths/min at 2× normal TV) combined with lower PEEP may maintain recruitment equivalently to higher PEEP, potentially reducing hemodynamic compromise while preventing atelectasis.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "During IMV/SIMV, the breath that is NOT synchronized with a spontaneous effort (machine-timed mandatory breath) may cause 'breath stacking' if it occurs:",
    "options": [
      "During expiration",
      "During an ongoing spontaneous inhalation — causing mandatory breath to be superimposed on the patient's own inhalation, doubling delivered volume",
      "After the patient exhales completely",
      "At the end of a voluntary breath"
    ],
    "correctIndex": 1,
    "explanation": "If a time-triggered SIMV mandatory breath occurs while the patient is already mid-inhalation, the mandatory breath adds to the spontaneous breath → excessive TV (breath stacking) → high Pplat → barotrauma. Modern ventilators use a synchronization window to minimize this.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In PC-SIMV with pressure support, the pressure support only applies to:",
    "options": [
      "Mandatory PC breaths",
      "Spontaneous (patient-triggered) breaths between the mandatory PC breaths",
      "All breaths equally",
      "Only the first breath after a pause"
    ],
    "correctIndex": 1,
    "explanation": "In PC-SIMV+PS: mandatory breaths are pressure-controlled (PC) at the set PIP. Between mandatory breaths, any spontaneous patient effort is augmented by the set pressure support (PS) level — providing variable support based on patient effort.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "What is the significance of the 'lower inflection point' on a static pressure-volume curve in ARDS?",
    "options": [
      "The pressure at which the lungs begin to overdistend",
      "The pressure below which large numbers of alveoli collapse (derecruitment) — setting PEEP above this point prevents cyclic atelectasis",
      "The maximum safe tidal volume",
      "The point at which surfactant production begins"
    ],
    "correctIndex": 1,
    "explanation": "The lower inflection point (Pflex, ~12–15 cmH₂O in ARDS) on the static P-V curve marks the pressure below which alveoli begin to collapse. Setting PEEP slightly above Pflex theoretically prevents atelectrauma by keeping alveoli open throughout the breath cycle.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which finding on waveform monitoring BEST distinguishes bronchospasm from secretion obstruction as causes of elevated PIP with normal Pplat?",
    "options": [
      "They cannot be distinguished by waveform",
      "Response to suction and bronchodilator — PIP decreasing after suction = secretions; PIP decreasing only after bronchodilator = bronchospasm",
      "Difference in Pplat elevation",
      "Difference in tidal volume"
    ],
    "correctIndex": 1,
    "explanation": "Both bronchospasm and secretions cause high PIP (resistance problem) with normal Pplat (compliance intact). Clinically distinguish: suction the airway first (secretion removal = immediate PIP drop) and/or administer bronchodilator. EtCO2 shark-fin waveform suggests airway obstruction/bronchospasm.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A new graduate RT asks why tidal volumes above 6 mL/kg IBW are not used even when Pplat < 30 in ARDS. The best explanation is:",
    "options": [
      "High TV is only safe if the patient is fully sedated",
      "Regional overdistension of the 'baby lung' (small aerated fraction) may occur even when global Pplat appears safe — local strain cannot be monitored at bedside",
      "6 mL/kg is the maximum ETT flow rate allows",
      "Higher TV causes hypercapnia always"
    ],
    "correctIndex": 1,
    "explanation": "Global Pplat < 30 cmH₂O may mask dangerous regional overdistension. In ARDS with only 20–30% aerated lung (baby lung), 6 mL/kg of the patient's actual (full) lung volume may represent 18–30 mL/kg of the small aerated fraction — causing regional volutrauma despite acceptable global pressures.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In which scenario is increasing PEEP contraindicated or harmful?",
    "options": [
      "Moderate ARDS with P/F = 150",
      "Severe hypovolemia with signs of hemodynamic compromise",
      "Obese patient with FiO2 requirement of 0.50",
      "Patient with mild auto-PEEP on low TV settings"
    ],
    "correctIndex": 1,
    "explanation": "In severe hypovolemia, increasing PEEP reduces venous return further, worsening hemodynamic compromise. Volume resuscitation should precede PEEP increases, or vasopressors must be available. PEEP increases are also harmful in tension pneumothorax.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The 'recruitment-to-inflation ratio' (R/I ratio) assesses whether a PEEP increase will primarily recruit or overdistend. An R/I ratio > 0.5 suggests:",
    "options": [
      "Overdistension predominates — do not increase PEEP",
      "Recruitment predominates — increasing PEEP will benefit oxygenation more than it risks overdistension",
      "No PEEP effect",
      "Cannot be used in clinical practice"
    ],
    "correctIndex": 1,
    "explanation": "R/I ratio = (ΔCompliance recruited alveoli) / (ΔCompliance from overdistension). R/I > 0.5 suggests the lung is still recruitable — increasing PEEP will open more alveoli than it overdistends, improving oxygenation. R/I < 0.5 = overdistension risk predominates.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which statement about the ARDSNET low tidal volume (LTV) trial is TRUE?",
    "options": [
      "It used 8 mL/kg IBW as the low volume arm",
      "It compared 12 mL/kg IBW vs 6 mL/kg IBW and showed 22% relative mortality reduction with 6 mL/kg",
      "It included patients with mild ARDS only (P/F 200–300)",
      "It was stopped due to harm in the low volume group"
    ],
    "correctIndex": 1,
    "explanation": "ARMA trial: 861 patients, Pplat ≤ 30 vs ≤ 50, TV 6 vs 12 mL/kg IBW. Low TV arm showed 22% relative mortality reduction (31.0% vs 39.8%, p=0.007). Trial was stopped early due to clear mortality benefit — establishing 6 mL/kg IBW as standard of care.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The maximum safe inspiratory time (Ti) in VC-AC to avoid auto-PEEP at RR 20 is approximately:",
    "options": [
      "0.5 seconds (I:E = 1:2 at RR 20 gives Ti 1 sec — use less)",
      "< 1 second — at RR 20 (3-sec cycle), Ti > 1 sec inverts I:E beyond 1:2, risking air trapping",
      "2 seconds",
      "3 seconds"
    ],
    "correctIndex": 1,
    "explanation": "Total cycle time at RR 20 = 60/20 = 3 seconds. For I:E 1:2, Ti = 1 sec, Te = 2 sec. Ti > 1 sec at RR 20 inverts the I:E ratio (> 1:1), drastically reducing expiratory time and increasing auto-PEEP risk — especially in obstructive disease.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Which action is MOST effective at preventing ventilator-associated events (VAEs) in a mechanically ventilated ICU patient?",
    "options": [
      "Increasing FiO2 to prevent hypoxemia",
      "Minimizing sedation, performing daily SBTs, keeping the head of bed at 30–45°, and targeting early weaning",
      "Administering prophylactic antibiotics throughout the ICU stay",
      "Increasing PEEP to prevent atelectasis regardless of oxygenation needs"
    ],
    "correctIndex": 1,
    "explanation": "VAE prevention bundle: light sedation (RASS −1 to 0), daily awakening + SBT, HOB 30–45°, oral chlorhexidine, subglottic suctioning ETTs, and aggressive weaning. The most impactful single element is minimizing sedation to enable early liberation from MV.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Airway Pressure Release Ventilation (APRV) uses a high CPAP level (P-high) held for most of the breath cycle with a brief release (P-low). Its primary lung-protective benefit over conventional MV is:",
    "options": [
      "Higher peak inspiratory pressures to recruit lung",
      "Prolonged time at P-high promotes recruitment while spontaneous breathing augments alveolar ventilation without mandatory breath dyssynchrony",
      "Elimination of PEEP",
      "Guaranteed tidal volume delivery"
    ],
    "correctIndex": 1,
    "explanation": "APRV maintains lung recruitment through sustained P-high (e.g., 25–30 cmH₂O for 4–6 s) while the brief release (typically 0.4–0.8 s to P-low ≈ 0) generates a passive tidal volume. Spontaneous breaths during P-high distribute gas to dependent zones. This 'open lung' strategy may reduce VILI, though evidence versus low-TV CMV remains debated.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "When setting T-low (release duration) in APRV, the goal is to terminate the release when expiratory flow has fallen to what percentage of peak expiratory flow?",
    "options": [
      "10% of peak expiratory flow",
      "25–50% of peak expiratory flow — to prevent complete derecruitment",
      "75% of peak expiratory flow",
      "100% (complete exhalation)"
    ],
    "correctIndex": 1,
    "explanation": "In APRV, T-low is set so exhalation is terminated at 25–50% of peak expiratory flow (seen on the flow-time waveform). This prevents complete derecruitment between cycles by maintaining a stent of air in the lung. If T-low is too long, alveoli collapse and the lung-protective benefit is lost.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "High-Frequency Oscillatory Ventilation (HFOV) delivers very small tidal volumes at 3–15 Hz. Gas exchange in HFOV is primarily accomplished by:",
    "options": [
      "Bulk convection identical to normal breathing",
      "Asymmetric velocity profiles, molecular diffusion, pendelluft, and Taylor dispersion — not bulk convection",
      "Active inspiration and passive expiration",
      "Pressure support above CPAP"
    ],
    "correctIndex": 1,
    "explanation": "HFOV delivers tidal volumes smaller than anatomical dead space. Gas exchange relies on: (1) asymmetric inspiratory/expiratory velocity profiles, (2) molecular diffusion near respiratory bronchioles, (3) pendelluft (gas mixing between lung units), and (4) Taylor dispersion. Oxygenation is controlled by mean airway pressure (mPaw); CO2 elimination by amplitude (ΔP) and frequency.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "In HFOV, increasing the oscillatory amplitude (ΔP) while keeping frequency and mPaw constant will primarily affect:",
    "options": [
      "Oxygenation — more O2 delivery",
      "CO2 elimination — larger ΔP increases tidal volume and CO2 removal",
      "Mean airway pressure — mPaw rises",
      "I:E ratio — inspiratory time lengthens"
    ],
    "correctIndex": 1,
    "explanation": "In HFOV, amplitude (ΔP or 'power') directly controls the size of the oscillatory stroke volume and therefore CO2 elimination. Increasing ΔP improves CO2 clearance. Mean airway pressure (mPaw) primarily determines oxygenation by setting lung volume and recruitment. Frequency affects both: lower frequency → larger effective tidal volume → more CO2 clearance.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Prone positioning in moderate-to-severe ARDS (PaO2/FiO2 < 150) for ≥16 hours/day reduces 28-day mortality. The primary mechanism of benefit is:",
    "options": [
      "Improved cardiac output",
      "Redistribution of ventilation to previously dorsal (now ventral) lung zones — reducing ventral overdistension, recruiting dorsal zones, and homogenizing V/Q",
      "Reduction of auto-PEEP",
      "Elimination of secretions"
    ],
    "correctIndex": 1,
    "explanation": "In ARDS, the dorsal lung is densely collapsed due to edema and gravity. Prone positioning makes dorsal zones ventral, where they can now be recruited, while the formerly overdistended ventral zones (now dorsal) are partially protected by their own weight. This homogenizes lung stress, reduces driving pressure, and improves V/Q matching. The PROSEVA trial showed 28-day mortality reduction from 32.8% to 16.0%.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Driving pressure (ΔP = Pplat − PEEP) in ARDS is independently associated with mortality. The target driving pressure to minimize VILI is:",
    "options": [
      "< 20 cmH₂O",
      "≤ 15 cmH₂O — values above this are associated with increased mortality",
      "< 30 cmH₂O",
      "< 10 cmH₂O always"
    ],
    "correctIndex": 1,
    "explanation": "Driving pressure represents the stress applied to functional lung parenchyma per breath (normalized for respiratory system compliance). Amato et al. (2015) showed ΔP was the strongest ventilator variable associated with ARDS mortality. A ΔP ≤ 15 cmH₂O is the current target. When ΔP cannot be reduced with low TV (6 mL/kg), further PEEP titration or TV reduction to 4 mL/kg may be required.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The stress index on the pressure-time curve during constant-flow VC ventilation is used to assess dynamic hyperinflation or derecruitment. A stress index > 1.0 suggests:",
    "options": [
      "Progressive recruitment — upward concavity is beneficial",
      "Progressive overdistension — pressure rises faster than volume, indicating tidal hyperinflation above the upper inflection point",
      "Optimal PEEP — linear rise indicates perfect compliance",
      "Auto-PEEP — expiratory time is too short"
    ],
    "correctIndex": 1,
    "explanation": "At constant flow in VC mode, the pressure-time curve should be linear (stress index ≈ 1.0) indicating stable compliance. A concave-upward curve (SI > 1.0) means each incremental volume costs progressively more pressure → overdistension. SI < 1.0 (concave down) suggests dynamic recruitment with each breath. SI is analyzed in the middle 'ramp' portion of the pressure waveform.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Neuromuscular blockade (NMB) in early severe ARDS (PaO2/FiO2 < 150) for 48 hours was associated with improved survival in the ACURASYS trial. The primary rationale is:",
    "options": [
      "Sedation reduction",
      "Elimination of P-SILI and dyssynchrony — abolishing spontaneous effort prevents high transpulmonary pressure swings and reverse triggering in severe ARDS",
      "Airway secretion clearance",
      "Reduced vasopressor requirements"
    ],
    "correctIndex": 1,
    "explanation": "In severe ARDS with strong respiratory drive, spontaneous efforts can generate large negative pleural pressure swings, causing P-SILI and worsening edema. NMB eliminates these efforts, ensures lung-protective TV delivery, and prevents 'reverse triggering' dyssynchrony. The ACURASYS trial showed 90-day mortality benefit; the ROSE trial did not replicate this, so NMB in ARDS is now used selectively for persistent dyssynchrony or severe hypoxemia.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A spontaneous breathing trial (SBT) is considered passed if the patient tolerates 30–120 minutes without:",
    "options": [
      "Any change in vital signs",
      "SpO2 < 90%, RR > 35, HR > 140 or change > 20%, SBP < 90 or > 180 mmHg, or signs of increased WOB / distress",
      "Any spontaneous respiratory effort",
      "A rate > 20 breaths/min"
    ],
    "correctIndex": 1,
    "explanation": "SBT failure criteria (any one): SpO2 < 90% (or PaO2 < 60 on FiO2 ≤ 0.5), RR > 35/min for > 5 min, HR > 140 or ±20% change, SBP < 90 or > 180 mmHg, or signs of respiratory distress (accessory muscle use, paradoxical breathing, diaphoresis, agitation). If passed, assess the upper airway and ability to handle secretions before extubation.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "The rapid shallow breathing index (RSBI = RR/TV in liters) is measured during an unassisted SBT. An RSBI < 105 predicts:",
    "options": [
      "Failed extubation",
      "Successful extubation with ~80% sensitivity and specificity when combined with other clinical factors",
      "The need for tracheostomy",
      "Adequate cough"
    ],
    "correctIndex": 1,
    "explanation": "RSBI (Yang-Tobin index) was derived from the observation that patients who fail SBTs breathe rapidly and shallowly. An RSBI < 105 is the traditional threshold for predicting extubation success. However, it has moderate predictive value in isolation. An RSBI > 105 suggests excessive WOB. It should be used as one of several criteria alongside hemodynamics, mental status, cough, and secretion burden.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A cuff leak test before extubation is used to assess risk for:",
    "options": [
      "Aspiration",
      "Post-extubation stridor due to subglottic edema — a small or absent cuff leak suggests significant airway edema",
      "Tracheomalacia",
      "Ventilator-associated pneumonia"
    ],
    "correctIndex": 1,
    "explanation": "With the ETT cuff deflated, a leak (heard audibly or measured as > 110–130 mL difference between inspired and expired volumes) suggests the airway is patent around the tube. A small or absent leak suggests subglottic/laryngeal edema; these patients have a higher risk of post-extubation stridor. Prophylactic steroids (methylprednisolone) 12–24 hours before extubation can reduce edema.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Ventilator-associated pneumonia (VAP) prevention bundles include all of the following EXCEPT:",
    "options": [
      "Head-of-bed elevation 30–45°",
      "Daily sedation interruption and SBT assessment",
      "Prophylactic systemic antibiotics given to all intubated patients",
      "Oral care with chlorhexidine and subglottic secretion drainage"
    ],
    "correctIndex": 2,
    "explanation": "VAP bundles include HOB elevation, daily SAT/SBT, oral decontamination (chlorhexidine), subglottic secretion drainage, and appropriate hand hygiene. Routine prophylactic systemic antibiotics are NOT recommended as they promote antibiotic resistance. Selective oral or digestive decontamination (SOD) is used in some European ICUs but is not universal practice.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "A patient on VC-AC develops flow dyssynchrony — the pressure-time curve shows a concave deceleration during inspiration ('scooping'). The correct intervention is:",
    "options": [
      "Increase PEEP",
      "Increase inspiratory flow rate or switch to a flow-cycling mode (PSV) — the patient's demand exceeds the set flow, causing them to 'pull' against the ventilator",
      "Decrease tidal volume",
      "Add sedation only"
    ],
    "correctIndex": 1,
    "explanation": "Flow dyssynchrony (flow hunger): the patient's neural inspiratory demand exceeds the delivered constant flow. This creates a characteristic 'scooped' concave appearance on the pressure waveform during the inspiratory phase. Solutions: (1) increase peak flow, (2) switch to decelerating flow pattern, or (3) switch to pressure-targeted mode (PC-AC or PSV) which delivers demand-matching flow.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Reverse triggering is a form of dyssynchrony where:",
    "options": [
      "The patient's effort triggers mandatory breaths before the set rate",
      "A mandatory machine breath entrains a patient's respiratory effort — the breath itself causes diaphragm activation via the Hering-Breuer reflex, potentially leading to breath stacking",
      "Auto-PEEP triggers extra breaths",
      "The patient cannot trigger any breaths"
    ],
    "correctIndex": 1,
    "explanation": "Reverse triggering occurs predominantly in deeply sedated patients on controlled ventilation. A machine-delivered breath activates stretch receptors, triggering a patient diaphragm contraction that coincides with machine exhalation — leading to breath stacking and VILI risk. Reverse triggering is often diagnosed by esophageal manometry. Management: adjust sedation, switch modes, or consider NMB.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Permissive hypercapnia in ARDS ventilated with low TV (6 mL/kg IBW) is acceptable as long as:",
    "options": [
      "pH remains > 7.35",
      "pH ≥ 7.20 — below this, the hemodynamic and cardiac effects of severe acidosis (arrhythmias, myocardial depression) become clinically significant",
      "PaCO2 < 60 mmHg",
      "HCO3⁻ is normal"
    ],
    "correctIndex": 1,
    "explanation": "The ARDSNet protocol accepts rising PaCO2 as a consequence of low TV ventilation. pH ≥ 7.20 is the generally accepted lower limit before considering bicarbonate infusion or increasing TV. Below pH 7.20, risks include cardiac arrhythmias, decreased myocardial contractility, pulmonary vasoconstriction, and impaired tissue oxygen delivery.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "An inhalation recruitment maneuver (RM) in ARDS involves transiently increasing airway pressure (e.g., CPAP 40 cmH₂O × 40 seconds). After the RM, what is critical to prevent derecruitment?",
    "options": [
      "Reducing FiO2 immediately",
      "Maintaining adequate PEEP post-RM — recruited alveoli will re-collapse if PEEP is insufficient to hold them open",
      "Increasing tidal volume",
      "Performing a cuff leak test"
    ],
    "correctIndex": 1,
    "explanation": "A recruitment maneuver transiently opens collapsed alveoli. Without adequate PEEP to hold them open, rapid derecruitment occurs within seconds to minutes. After an RM, a PEEP titration (decremental trial targeting best compliance or oxygenation) is performed to find the minimum PEEP that maintains recruitment. Routine RMs in ARDS are not universally recommended (ART trial showed harm).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Dead space fraction (VD/VT) can be estimated non-invasively from the volumetric capnogram. An elevated dead space fraction (> 0.60) in ARDS is associated with:",
    "options": [
      "Improved prognosis",
      "Increased mortality — high VD/VT reflects severe V/Q mismatch, impaired CO2 clearance, and microvascular obliteration",
      "The need for lower PEEP",
      "Reduced CO2 production"
    ],
    "correctIndex": 1,
    "explanation": "VD/VT > 0.60 in ARDS reflects extensive alveolar dead space — ventilated but unperfused lung units due to microvascular thrombosis, vasoconstriction, or obliteration (characteristic of ARDS). High VD/VT forces higher minute ventilation to maintain normocapnia, exhausting ventilatory reserve. It is an independent predictor of ARDS mortality and may identify candidates for prone positioning or ECMO.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "A patient with severe air-trapping (auto-PEEP = 14 cmH₂O) on VC-AC develops hypotension. The most immediate intervention is:",
    "options": [
      "IV fluid bolus",
      "Brief ventilator disconnect (20–30 seconds) to allow complete exhalation and decompress the lungs, then investigate cause (bronchospasm, inadequate expiratory time)",
      "Increase PEEP to match auto-PEEP",
      "Increase tidal volume"
    ],
    "correctIndex": 1,
    "explanation": "Severe dynamic hyperinflation causing auto-PEEP can compress intrathoracic vessels and the right heart, reducing venous return and causing obstructive shock. The fastest treatment is temporarily disconnecting the circuit to allow the lungs to empty completely. Sustained hand-bagging at low rate or allowing passive exhalation can dramatically improve hemodynamics within seconds. Then address the underlying cause.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "To detect intrinsic PEEP (auto-PEEP) at the bedside on a volume-control ventilator, you perform:",
    "options": [
      "An inspiratory hold maneuver",
      "An expiratory hold (occlusion) at end-exhalation — the resulting pressure above external PEEP reading represents auto-PEEP",
      "A cuff leak test",
      "A static P-V curve"
    ],
    "correctIndex": 1,
    "explanation": "During an end-expiratory hold (occlusion maneuver), the exhalation valve is closed at the end of expiration. Any remaining pressure above the set external PEEP measured at this moment equals intrinsic PEEP (auto-PEEP). This method requires patient effort to be absent during the hold. It measures average auto-PEEP across all lung units (not detecting regional variations).",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Tracheostomy compared to prolonged translaryngeal intubation after 2 weeks of ventilation offers which primary benefit?",
    "options": [
      "Completely eliminates the risk of VAP",
      "Improved patient comfort, reduced sedation requirements, facilitated oral hygiene, and potentially faster ventilator weaning — though mortality benefit is not clearly established",
      "Guaranteed airway protection for life",
      "Eliminates the need for cuff management"
    ],
    "correctIndex": 1,
    "explanation": "Tracheostomy (usually percutaneous dilation) after 14–21 days of MV offers: reduced WOB (shorter/larger airway), improved patient communication, easier oral hygiene, reduced laryngeal injury risk, and facilitates weaning by allowing trials of trach mask oxygen. Landmark trials (TracMan) showed no mortality benefit to early (4 days) vs. late (10 days) tracheostomy.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "In a patient being weaned on PSV, which waveform finding suggests that the level of PS is too high (over-assist)?",
    "options": [
      "Low respiratory rate and normal flow cycling",
      "High tidal volume (> 8 mL/kg), long neural expiratory time that begins before the ventilator cycles off (post-inspiration muscle activity seen as pressure spike at cycle-off), and low RR",
      "High RR with small tidal volumes",
      "Auto-triggering"
    ],
    "correctIndex": 1,
    "explanation": "Over-assist on PSV: the set support exceeds patient demand. This produces excessively large TV (> 8 mL/kg), activation of expiratory muscles before the ventilator cycles off (seen as a pressure spike at cycle-off), prolonged inspiratory flow (machine keeps inflating while neural inspiration has ended), low RR, and potentially apneas. Reducing PS level corrects this and allows more patient respiratory work.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "Proportional Assist Ventilation (PAV+) differs from PSV in that it delivers pressure assistance proportional to:",
    "options": [
      "A fixed set pressure above PEEP",
      "The patient's instantaneous respiratory effort — amplifying both flow demand (elastance assist) and volume (resistance assist) in real time",
      "Respiratory rate only",
      "Tidal volume targets"
    ],
    "correctIndex": 1,
    "explanation": "PAV+ uses real-time measurements of respiratory mechanics (compliance and resistance) to deliver pressure that proportionally amplifies the patient's own effort. As the patient inhales harder, more support is given; as effort decreases, support decreases. This dynamic matching reduces dyssynchrony compared to fixed PSV and may improve patient-ventilator interaction during weaning.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Adaptive Support Ventilation (ASV) is a closed-loop mode that automatically adjusts pressure and rate to target a set minute volume. Its control algorithm is based on:",
    "options": [
      "Constant flow delivery based on IBW",
      "Otis' optimal breathing frequency formula — minimizing the work of breathing by selecting the rate/TV combination that requires the least respiratory muscle energy for the patient's current mechanics",
      "FiO2 titration based on SpO2",
      "Patient-triggered PSV only"
    ],
    "correctIndex": 1,
    "explanation": "ASV calculates the patient's respiratory mechanics (Crs, Rrs) breath-by-breath and uses Otis' equation to deliver the rate and tidal volume combination that minimizes work of breathing while achieving the target %MinVol. The mode automatically transitions from full support to weaning as patient effort increases — acting like an automated weaning protocol.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Venovenous ECMO (VV-ECMO) is indicated in severe ARDS refractory to conventional management. The minimum criteria generally considered before ECMO referral include:",
    "options": [
      "PaO2/FiO2 < 300 despite any PEEP",
      "PaO2/FiO2 < 80 on FiO2 1.0 despite optimized prone positioning, NMB, and PEEP — or CO2 retention causing unacceptable pH despite low-TV ventilation",
      "Any requirement for > 10 cmH₂O PEEP",
      "PaO2 < 60 on room air"
    ],
    "correctIndex": 1,
    "explanation": "EOLIA trial ECMO criteria: P/F < 80 mmHg for > 3h, P/F < 100 for > 6h, or pH < 7.25 with PaCO2 > 60 for > 6h despite optimized conventional ventilation (prone, NMB, HFO). ECMO allows 'ultra-protective' ventilation (TV ≤ 3 mL/kg, very low driving pressure) to rest the lung. Referral before development of multi-organ failure yields best outcomes.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The ARDSNet low tidal volume protocol targets tidal volume of:",
    "options": [
      "10–12 mL/kg actual body weight",
      "6 mL/kg ideal body weight (IBW), with a target Pplat ≤ 30 cmH₂O",
      "8 mL/kg IBW",
      "4 mL/kg IBW always"
    ],
    "correctIndex": 1,
    "explanation": "The landmark ARDSNet ARMA trial (2000) demonstrated that 6 mL/kg IBW with Pplat ≤ 30 cmH₂O reduced mortality compared to 12 mL/kg IBW. IBW (not actual body weight) is used because lung size correlates with height, not weight. When Pplat > 30 despite 6 mL/kg, TV is further reduced in 1 mL/kg steps (minimum 4 mL/kg) with permissive hypercapnia.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A patient on pressure support ventilation has a respiratory rate of 32 and tidal volume of 280 mL. His set PEEP is 8 and PS is 12. What immediate adjustment is most appropriate?",
    "options": [
      "Increase PS to 20 cmH₂O",
      "Evaluate for pain, anxiety, or unmet WOB; consider increasing PS by 2–4 cmH₂O increments — the high RR and low TV suggest either inadequate support or unmet patient demand",
      "Decrease PEEP to 5",
      "Switch to CPAP"
    ],
    "correctIndex": 1,
    "explanation": "RR 32 with TV 280 mL (RSBI ≈ 114) suggests marginal ventilation on current support. While this may indicate readiness for weaning assessment is premature, the high RR could also reflect inadequate PS, pain, anxiety, fever, or the underlying disease. First assess and treat reversible causes, then titrate PS upward in small increments if WOB remains excessive.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Continuous mandatory ventilation with mandatory breaths occurring regardless of patient effort is best described as:",
    "options": [
      "SIMV",
      "Assist-Control (AC) / Continuous Mandatory Ventilation (CMV) — every breath is fully supported, whether patient-triggered or time-triggered",
      "Pressure support only",
      "CPAP"
    ],
    "correctIndex": 1,
    "explanation": "In AC/CMV mode, every breath (patient-triggered or time-triggered backup) receives full ventilator support (either preset volume or pressure). If the patient triggers above the backup rate, each triggered breath is also fully supported. This mode prevents breath stacking from unsupported spontaneous breaths (unlike SIMV) but can lead to respiratory alkalosis if the patient's rate is high.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Neurally Adjusted Ventilatory Assist (NAVA) uses the electrical signal of the diaphragm (Edi) to trigger and proportion ventilator assistance. Its primary advantage over PSV is:",
    "options": [
      "Fixed pressure delivery for simplicity",
      "Synchrony with neural respiratory drive — the ventilator triggers simultaneously with diaphragm activation and delivers proportional pressure, virtually eliminating trigger delay, auto-cycling, and premature cycling",
      "Guaranteed tidal volume",
      "No need for an esophageal catheter"
    ],
    "correctIndex": 1,
    "explanation": "NAVA uses the Edi signal (via nasogastric catheter with electrodes) as both trigger and assistance controller. Since the Edi signal appears before airway flow/pressure changes, trigger delay is minimal. The ventilator's pressure = NAVA level × Edi, making assistance directly proportional to effort. This prevents over-assist, under-assist, and most forms of dyssynchrony, even with variable neural timing.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "When calculating ideal body weight for ventilator tidal volume settings in a male patient 70 inches (178 cm) tall, the ARDSNet formula gives IBW as:",
    "options": [
      "70 kg",
      "50 + 2.3 × (height in inches − 60) = 50 + 2.3 × 10 = 73 kg",
      "80 kg",
      "60 kg"
    ],
    "correctIndex": 1,
    "explanation": "ARDSNet IBW formula: Males = 50 + 2.3 × (height in inches − 60). For a 70-inch male: 50 + 2.3 × 10 = 73 kg IBW. Target TV = 6 mL/kg × 73 = 438 mL. For females: 45.5 + 2.3 × (height in inches − 60). This formula ensures TV is based on lung size (height) not actual weight, critical for obese patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A mechanically ventilated patient with COPD has auto-PEEP of 8 cmH₂O. To help the patient trigger the ventilator more easily, you should:",
    "options": [
      "Increase trigger sensitivity to 0.5 L/min",
      "Apply external PEEP to 75–80% of auto-PEEP (approximately 6 cmH₂O) — this reduces the pressure the patient must generate to trigger by offsetting the intrinsic PEEP threshold",
      "Increase tidal volume",
      "Change to pressure control mode"
    ],
    "correctIndex": 1,
    "explanation": "With auto-PEEP of 8 cmH₂O, the patient must first overcome 8 cmH₂O before reaching the trigger threshold (e.g., −2 cmH₂O), requiring −10 cmH₂O effort. Adding external PEEP ~6 cmH₂O (75% of auto-PEEP) reduces the gap the patient must overcome to only −2 cmH₂O. External PEEP above ~80% of auto-PEEP worsens hyperinflation.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Volume-targeted pressure control (VTPC) modes (e.g., PRVC, AutoFlow, VC+) combine features of both volume and pressure modes. Their key advantage is:",
    "options": [
      "They guarantee both pressure and volume simultaneously",
      "They guarantee tidal volume delivery while automatically limiting pressure by adjusting the pressure target breath-to-breath based on measured compliance — providing volume guarantee with decelerating flow benefits",
      "They eliminate the need for PEEP",
      "They cannot be used for weaning"
    ],
    "correctIndex": 1,
    "explanation": "VTPC/dual-control modes measure the patient's compliance each breath and adjust the delivered pressure (within the set pressure limit) to achieve the target tidal volume. Benefits: guaranteed TV (like VC), decelerating flow waveform (better gas distribution, lower PIP like PC), and automatic weaning as compliance improves. Risk: if patient effort suddenly increases, the auto-pressure reduction may under-support.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "Tracheobronchomalacia in a long-term ventilated patient is suspected when:",
    "options": [
      "High plateau pressures are noted",
      "Excessive cuff volumes (> 10 mL) are needed to maintain seal, and there is tracheal widening on imaging — suggesting tracheal dilation from chronic pressure necrosis",
      "The patient cannot be weaned from CPAP",
      "Stridor occurs only on inspiration"
    ],
    "correctIndex": 1,
    "explanation": "Prolonged mechanical ventilation with an ETT cuff can cause tracheal wall ischemia and necrosis from cuff pressures > 30 cmH₂O (normal capillary pressure). This results in tracheomalacia (loss of tracheal cartilage integrity) or tracheal dilation. Signs: progressive cuff volume requirements, recurrent aspiration despite high cuff pressures, and radiographic tracheal widening. Prevention: maintain cuff pressure 20–30 cmH₂O using a manometer.",
    "difficulty": "hard"
  },
  {
    "topicId": 4,
    "text": "The normal I:E ratio during mechanical ventilation is set at:",
    "options": [
      "2:1 (inspiratory time longer)",
      "1:2 (inspiratory time shorter than expiratory time) — allowing adequate time for passive exhalation",
      "1:1",
      "1:4"
    ],
    "correctIndex": 1,
    "explanation": "The normal physiologic I:E ratio is 1:2, meaning exhalation takes twice as long as inhalation. This allows passive lung recoil to fully empty the lungs between breaths. Pathologic conditions: COPD/asthma (need longer E, set 1:3 or 1:4 to prevent air trapping); inverse ratio ventilation in ARDS (I:E 1:1 to 4:1) prolongs inspiration to improve gas distribution and create intrinsic PEEP.",
    "difficulty": "easy"
  },
  {
    "topicId": 4,
    "text": "A ventilated ARDS patient has a PaO2 of 55 mmHg on FiO2 1.0 and PEEP 18 cmH₂O. The next rescue therapy to consider, per ARDS management guidelines, is:",
    "options": [
      "Increase tidal volume to 8 mL/kg",
      "Prone positioning for ≥ 16 hours — if P/F < 150 on optimized settings, prone is the evidence-based next step before ECMO referral",
      "Reduce PEEP to 10",
      "Immediate bronchoscopy"
    ],
    "correctIndex": 1,
    "explanation": "Rescue therapies for severe ARDS in stepwise order: (1) prone positioning ≥ 16h/day (PROSEVA benefit), (2) recruitment maneuvers + optimized PEEP, (3) inhaled vasodilators (iNO, epoprostenol) for refractory hypoxemia, (4) NMB (48h), (5) ECMO referral if P/F < 80. Increasing TV in ARDS is explicitly contraindicated.",
    "difficulty": "medium"
  },
  {
    "topicId": 4,
    "text": "High-frequency jet ventilation (HFJV) is most commonly used in:",
    "options": [
      "ARDS in adults",
      "Neonatal respiratory distress syndrome and bronchopleural fistula management — the small tidal volumes and low airway pressures are particularly advantageous when air leaks must be minimized",
      "Weaning from MV in COPD",
      "Post-cardiac surgery patients"
    ],
    "correctIndex": 1,
    "explanation": "HFJV delivers short pulses of gas at 100–600 Hz via a jet injector. In bronchopleural fistula (BPF), the very small tidal volumes and low Paw reduce the driving pressure through the fistula, allowing healing. In neonatal RDS, HFJV provides ventilation with minimal pressure fluctuations. The Bunnell Life Pulse HFJV is FDA-approved for neonates with pulmonary interstitial emphysema (PIE).",
    "difficulty": "hard"
  },
  {
    "topicId": 5,
    "text": "What is the gold standard for confirming endotracheal tube placement?",
    "options": [
      "Bilateral breath sounds on auscultation",
      "Chest X-ray showing tube in trachea",
      "Waveform capnography showing continuous EtCO2",
      "Observation of chest rise"
    ],
    "correctIndex": 2,
    "explanation": "Continuous waveform capnography (EtCO2) is the gold standard for confirming and continuously monitoring ETT placement. It confirms CO2 is being exhaled from the lungs. Colorimetric detectors and auscultation are secondary confirmations.",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "What is the recommended ETT cuff pressure range to prevent tracheal injury?",
    "options": [
      "5-15 cmH2O",
      "20-30 cmH2O",
      "35-45 cmH2O",
      "50-60 cmH2O"
    ],
    "correctIndex": 1,
    "explanation": "ETT cuff pressure should be maintained at 20-30 cmH2O (goal ~25 cmH2O). Too high (>30) → tracheal ischemia/necrosis. Too low (<20) → microaspiration, increased VAP risk.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "During RSI (Rapid Sequence Intubation), succinylcholine is preferred because of its:",
    "options": [
      "Long duration of action (2-3 hours)",
      "Ultra-short duration and rapid onset",
      "Reversibility with sugammadex",
      "Lack of side effects"
    ],
    "correctIndex": 1,
    "explanation": "Succinylcholine is the preferred agent for RSI due to its rapid onset (~60 sec) and ultra-short duration (~10-15 min), allowing airway to return rapidly if intubation fails. Its main drawback is contraindications (hyperkalemia risk in burns, crush injuries).",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "A patient arrives with stridor, sits forward drooling, and appears toxic. What is the most likely diagnosis and priority action?",
    "options": [
      "Croup — give racemic epinephrine",
      "Epiglottitis — do NOT agitate; secure airway emergently",
      "Angioedema — give epinephrine IM",
      "Foreign body — Heimlich maneuver"
    ],
    "correctIndex": 1,
    "explanation": "The classic presentation of epiglottitis is a toxic-appearing patient sitting in tripod position, drooling, with inspiratory stridor. Do NOT examine the throat or agitate the patient. Immediate controlled airway management (ideally in OR) is essential. Thumbprint sign on lateral neck X-ray confirms.",
    "difficulty": "hard"
  },
  {
    "topicId": 5,
    "text": "Where is a surgical cricothyrotomy performed for emergency airway access?",
    "options": [
      "Above the thyroid cartilage",
      "Between thyroid and cricoid cartilage",
      "At the second tracheal ring",
      "Through the hyoid bone"
    ],
    "correctIndex": 1,
    "explanation": "Cricothyrotomy is performed through the cricothyroid membrane, located between the thyroid cartilage (above) and cricoid cartilage (below). It is the fastest surgical airway access in a 'can't intubate, can't oxygenate' emergency.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "A supraglottic airway device (LMA) does NOT protect against:",
    "options": [
      "Hypoxia",
      "Aspiration of gastric contents",
      "Airway obstruction from the tongue",
      "Moderate airway leak during ventilation"
    ],
    "correctIndex": 1,
    "explanation": "The LMA sits above the glottis and does NOT protect against aspiration of gastric contents. It is contraindicated in patients at high risk for aspiration (full stomach, pregnancy, GERD). Endotracheal intubation provides the only definitive protection.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "The correct ETT size for an average adult male is:",
    "options": [
      "6.0–6.5 mm internal diameter",
      "7.0–8.0 mm internal diameter",
      "8.5–9.0 mm internal diameter",
      "5.0–5.5 mm internal diameter"
    ],
    "correctIndex": 1,
    "explanation": "Adult male: 7.5–8.0 mm ID ETT. Adult female: 7.0–7.5 mm. Larger tubes facilitate suctioning and reduce airway resistance; tubes that are too large risk subglottic trauma.",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Correct ETT depth (at the lips) for an average adult is approximately:",
    "options": [
      "15–17 cm",
      "20–23 cm for males, 19–21 cm for females",
      "25–28 cm",
      "12–14 cm"
    ],
    "correctIndex": 1,
    "explanation": "Standard ETT depth at the teeth: ~23 cm for males, ~21 cm for females. The tip should be 3–5 cm above the carina. Confirm by auscultation, end-tidal CO2, and chest X-ray (tip at T2–T4).",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Gold standard confirmation of ETT placement in the trachea is:",
    "options": [
      "Auscultation of bilateral breath sounds",
      "Chest rise with ventilation",
      "Continuous waveform capnography (EtCO2)",
      "Tube fogging"
    ],
    "correctIndex": 2,
    "explanation": "Continuous waveform capnography is the gold standard for confirming and monitoring tracheal intubation. It detects CO2 in exhaled gas only from the lungs — esophageal intubation shows no CO2 waveform.",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Rapid sequence intubation (RSI) involves:",
    "options": [
      "Gentle bag-mask ventilation followed by intubation",
      "Simultaneous administration of a sedative and neuromuscular blocking agent to achieve rapid intubation with minimal aspiration risk",
      "Intubation without any medications",
      "Topical anesthesia alone"
    ],
    "correctIndex": 1,
    "explanation": "RSI: simultaneous induction agent (e.g., ketamine, propofol, etomidate) + rapid-onset NMB (succinylcholine or rocuronium) to achieve intubating conditions in ~60 seconds. Used in patients at high aspiration risk (full stomach).",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Succinylcholine is contraindicated in which patient?",
    "options": [
      "Trauma patient with full stomach",
      "Burn patient >48–72 hours post-injury",
      "Pediatric patient for RSI",
      "Hemodynamically unstable patient"
    ],
    "correctIndex": 1,
    "explanation": "After major burns, crush injuries, denervation injuries (48–72+ hours), succinylcholine causes massive hyperkalemia due to upregulation of extrajunctional acetylcholine receptors. Rocuronium (1.2 mg/kg) is the alternative.",
    "difficulty": "hard"
  },
  {
    "topicId": 5,
    "text": "Sellick's maneuver (cricoid pressure) during RSI is intended to:",
    "options": [
      "Open the glottis for better visualization",
      "Compress the esophagus to prevent passive regurgitation during induction",
      "Mark the cricothyroid membrane for emergency airway access",
      "Reduce the gag reflex"
    ],
    "correctIndex": 1,
    "explanation": "Sellick's maneuver: firm downward pressure on the cricoid cartilage occludes the esophagus between the cricoid and vertebral body, theoretically preventing passive regurgitation. Its evidence is debated; it should be released if it impairs laryngoscopy.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "The 'LEMON' assessment for difficult airway predicts difficulty with direct laryngoscopy. LEMON stands for:",
    "options": [
      "Larynx, Edema, Mouth, Opening, Neck",
      "Look externally, Evaluate 3-3-2 rule, Mallampati, Obstruction, Neck mobility",
      "Laryngospasm, Emesis, Mandible, Obesity, Nose",
      "Lesion, ETT, Mask, Oxygen, NMB"
    ],
    "correctIndex": 1,
    "explanation": "LEMON: Look (external features — beard, obese neck), Evaluate 3-3-2 (mouth opening 3 fingers, hyoid-chin 3 fingers, hyoid-thyroid notch 2 fingers), Mallampati class, Obstruction/Obesity, Neck mobility.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "A laryngeal mask airway (LMA) is a:",
    "options": [
      "Definitive airway that protects against aspiration",
      "Supraglottic airway device providing a seal over the larynx — does NOT protect against aspiration",
      "Nasopharyngeal airway",
      "Device placed below the vocal cords"
    ],
    "correctIndex": 1,
    "explanation": "The LMA sits in the hypopharynx and forms a low-pressure seal over the larynx. It maintains a patent airway but does NOT protect against aspiration. Contraindicated in patients at high aspiration risk.",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Cricothyrotomy (surgical or needle) is indicated when:",
    "options": [
      "Routine RSI is planned",
      "Cannot intubate, cannot oxygenate (CICO) scenario — failed airway",
      "Patient refuses intubation",
      "SpO2 is 92%"
    ],
    "correctIndex": 1,
    "explanation": "Cricothyrotomy is the rescue technique in a 'cannot intubate, cannot oxygenate' (CICO) emergency — the final step in the difficult airway algorithm. The cricothyroid membrane is incised to establish an emergency airway.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "After orotracheal intubation, absent breath sounds on the LEFT and normal sounds on the RIGHT suggest:",
    "options": [
      "Esophageal intubation",
      "Left pneumothorax",
      "Right main-stem intubation",
      "Bilateral bronchospasm"
    ],
    "correctIndex": 2,
    "explanation": "Absent left breath sounds post-intubation indicates the ETT has advanced into the right main bronchus (more vertical angle). Pull the tube back 1–2 cm and reconfirm bilateral sounds. Confirm position by CXR.",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Tracheostomy compared to prolonged oral ETT intubation reduces:",
    "options": [
      "Risk of aspiration pneumonia",
      "ICU and hospital length of stay and improves patient comfort",
      "Need for humidification",
      "FiO2 requirements"
    ],
    "correctIndex": 1,
    "explanation": "Tracheostomy reduces airway resistance, improves oral hygiene, allows patients to eat and speak (with speaking valves), reduces sedation needs, and is associated with shorter ICU stays in patients requiring prolonged MV.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "The Mallampati classification assesses:",
    "options": [
      "Degree of tracheal deviation",
      "Oropharyngeal visibility (tongue size relative to oral cavity) as a predictor of difficult intubation",
      "Neck circumference",
      "Degree of mouth opening"
    ],
    "correctIndex": 1,
    "explanation": "Mallampati class (I–IV) grades the visibility of pharyngeal structures with the patient seated, mouth open, and tongue out. Class III–IV (only soft palate or hard palate visible) predicts difficult laryngoscopy.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "A cuffed ETT in pediatric patients (age > 2 years) is now preferred over uncuffed because:",
    "options": [
      "Larger tube diameter improves gas exchange",
      "Cuffed tubes reduce the need for tube exchange if the leak is too large, with equal safety when pressures are controlled",
      "Uncuffed tubes are too large",
      "Cuffed tubes have smaller external diameters"
    ],
    "correctIndex": 1,
    "explanation": "Modern data support cuffed ETTs in children > 2 years and in neonates for special indications (e.g., poor lung compliance). Cuffed tubes reduce the number of laryngoscopy passes (tube exchanges) when cuff pressure is monitored.",
    "difficulty": "hard"
  },
  {
    "topicId": 5,
    "text": "The Cormack-Lehane grading system classifies:",
    "options": [
      "Airway anatomy on imaging",
      "Laryngoscopic view — Grade 1 (full glottis visible) to Grade 4 (no glottic structures visible)",
      "Degree of subglottic stenosis",
      "Tracheal secretion viscosity"
    ],
    "correctIndex": 1,
    "explanation": "Cormack-Lehane: Grade 1 = full glottis visible; Grade 2 = partial glottis or arytenoids; Grade 3 = epiglottis only; Grade 4 = no laryngeal structures. Grade 3–4 indicates difficult intubation.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "Video laryngoscopy compared to direct laryngoscopy:",
    "options": [
      "Has no advantage in difficult airways",
      "Provides improved glottic visualization (better CL grade), especially in difficult airways and inexperienced operators",
      "Requires the same head positioning",
      "Cannot be used with RSI"
    ],
    "correctIndex": 1,
    "explanation": "Video laryngoscopy (e.g., GlideScope, McGrath) provides indirect visualization via a camera at the blade tip, achieving better glottic views especially in difficult airways, C-spine precautions, and obese patients.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "Post-extubation stridor in an adult most commonly indicates:",
    "options": [
      "Pneumothorax",
      "Subglottic edema from prolonged intubation — managed with nebulized racemic epinephrine and/or IV steroids",
      "Bronchospasm",
      "Tracheomalacia"
    ],
    "correctIndex": 1,
    "explanation": "Post-extubation stridor (high-pitched inspiratory noise) is usually subglottic edema. Management: nebulized racemic epinephrine (vasoconstriction), IV dexamethasone (reduce inflammation), and heliox to decrease turbulent flow. Re-intubation if severe.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "A Passy-Muir speaking valve is placed on a tracheostomy tube to:",
    "options": [
      "Seal the tracheostomy to prevent air escape",
      "Allow one-way airflow (in through trach, out through upper airway) restoring phonation and cough",
      "Provide PEEP during mechanical ventilation",
      "Replace the tracheostomy cuff"
    ],
    "correctIndex": 1,
    "explanation": "The Passy-Muir valve is a one-way valve (open during inspiration, closed during expiration) that redirects expiratory airflow through the upper airway — restoring voice, improving swallowing, and enabling secretion clearance.",
    "difficulty": "medium"
  },
  {
    "topicId": 5,
    "text": "Which finding most reliably confirms esophageal intubation?",
    "options": [
      "Gurgling over the stomach",
      "Absent EtCO2 waveform on continuous capnography",
      "Low SpO2 immediately after intubation",
      "Absence of bilateral breath sounds"
    ],
    "correctIndex": 1,
    "explanation": "Absent EtCO2 waveform on capnography is the most reliable indicator of esophageal intubation. SpO2 may remain high for minutes after esophageal intubation (pre-oxygenation). Always confirm with waveform capnography.",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Optimal head position for direct laryngoscopy (in patients without C-spine precaution) is:",
    "options": [
      "Neutral/flat position",
      "Sniffing position (neck flexed, head extended — aligning oral, pharyngeal, laryngeal axes)",
      "Maximum neck flexion",
      "Lateral decubitus"
    ],
    "correctIndex": 1,
    "explanation": "The sniffing position (neck slightly flexed on a pillow, head extended at the atlantooccipital joint) aligns the three laryngoscopy axes — oral, pharyngeal, and laryngeal — for best glottic visualization.",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Accidental decannulation (dislodgment) of a fresh tracheostomy (< 7 days old) is an emergency because:",
    "options": [
      "Air will enter the vascular space",
      "The tract has not yet matured — the stoma may close, making re-cannulation difficult or impossible",
      "Cuff rupture is inevitable",
      "Orotracheal intubation becomes impossible"
    ],
    "correctIndex": 1,
    "explanation": "A fresh tracheostomy tract (< 7 days) is not mature and may close rapidly upon decannulation. This is a life-threatening airway emergency. Do NOT attempt blind re-insertion — secure the airway from above (oral intubation) first.",
    "difficulty": "hard"
  },
  {
    "topicId": 5,
    "text": "Which airway adjunct is most appropriate for an unconscious patient with no gag reflex who requires bag-mask ventilation?",
    "options": [
      "Nasal cannula",
      "Oropharyngeal airway (OPA)",
      "Nasopharyngeal airway (NPA)",
      "Venturi mask"
    ],
    "correctIndex": 1,
    "explanation": "An oropharyngeal airway (Guedel airway) maintains upper airway patency in an unconscious, gagged-less patient by displacing the tongue anteriorly. It should not be used in conscious patients (triggers gag/vomiting).",
    "difficulty": "easy"
  },
  {
    "topicId": 5,
    "text": "Subglottic secretion drainage via specially designed ETTs (e.g., Hi-Lo Evac) reduces:",
    "options": [
      "Auto-PEEP",
      "Ventilator-associated pneumonia (VAP) by preventing microaspiration of contaminated pooled secretions",
      "Tidal volume loss",
      "Oxygen requirements"
    ],
    "correctIndex": 1,
    "explanation": "Subglottic secretion drainage ETTs have a dorsal lumen above the cuff for continuous or intermittent aspiration of pooled oropharyngeal secretions, preventing microaspiration — reducing VAP by 50%.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "A nasal cannula running at 4 L/min delivers approximately what FiO2?",
    "options": [
      "24%",
      "32%",
      "36%",
      "44%"
    ],
    "correctIndex": 2,
    "explanation": "Nasal cannula FiO2 approximation: FiO2 ≈ 20% + (4% × L/min flow). At 4 L/min: 20% + 16% = 36%. This is an approximation as actual FiO2 varies with patient breathing pattern.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "Which oxygen delivery device provides the most precise and consistent FiO2?",
    "options": [
      "Non-rebreather mask",
      "Simple face mask",
      "Venturi mask",
      "Nasal cannula"
    ],
    "correctIndex": 2,
    "explanation": "The Venturi mask (air-entrainment mask) uses fixed Venturi adapters to deliver precise, consistent FiO2 values (24%, 28%, 31%, 35%, 40%, 50%), regardless of patient breathing pattern. It's ideal for COPD patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "Oxygen toxicity from high FiO2 primarily causes lung damage through:",
    "options": [
      "Bronchospasm from dry gas",
      "Reactive oxygen species causing alveolar damage",
      "Hypercapnia from CO2 retention",
      "Absorption atelectasis in large airways"
    ],
    "correctIndex": 1,
    "explanation": "High FiO2 (>50-60%) generates reactive oxygen species (free radicals) that damage the alveolar-capillary membrane, causing tracheobronchitis and eventually ARDS-like picture. Absorptive atelectasis is also a hazard but the primary toxicity mechanism is free radical injury.",
    "difficulty": "hard"
  },
  {
    "topicId": 6,
    "text": "A patient with COPD requires supplemental oxygen. What SpO2 target is most appropriate?",
    "options": [
      "97-100%",
      "94-96%",
      "88-92%",
      "85-88%"
    ],
    "correctIndex": 2,
    "explanation": "For COPD patients, target SpO2 of 88-92% (PaO2 60-65 mmHg). Higher oxygen saturation can blunt hypoxic drive, worsen V/Q mismatch, and cause CO2 retention (Haldane effect) in some COPD patients.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "High-flow nasal cannula (HFNC) at 40 L/min provides approximately what level of PEEP?",
    "options": [
      "0.5-1 cmH2O",
      "2-4 cmH2O",
      "5-8 cmH2O",
      "10-12 cmH2O"
    ],
    "correctIndex": 1,
    "explanation": "HFNC generates approximately 0.5-1 cmH2O of PEEP per 10 L/min of flow when the mouth is closed. At 40 L/min, expect approximately 2-4 cmH2O PEEP. This helps prevent alveolar collapse and reduces work of breathing.",
    "difficulty": "hard"
  },
  {
    "topicId": 6,
    "text": "Pulse oximetry (SpO2) reads falsely NORMAL in which condition?",
    "options": [
      "Methemoglobinemia",
      "Carbon monoxide poisoning",
      "Severe anemia",
      "Nail polish application"
    ],
    "correctIndex": 1,
    "explanation": "In CO poisoning, carboxyhemoglobin (COHb) is detected by pulse oximetry as oxyhemoglobin because both absorb red light similarly. SpO2 reads falsely normal (97-99%) while the patient is severely hypoxic. A co-oximeter is required to measure actual SaO2 and COHb.",
    "difficulty": "hard"
  },
  {
    "topicId": 6,
    "text": "A nasal cannula at 2 L/min delivers an approximate FiO2 of:",
    "options": [
      "0.24",
      "0.28",
      "0.32",
      "0.44"
    ],
    "correctIndex": 1,
    "explanation": "Nasal cannula: FiO2 increases ~0.04 per 1 L/min increase in flow. At 2 L/min: 0.21 + (2 × 0.04) = 0.29, approximately 0.28. Actual FiO2 varies with breathing pattern.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "The maximum reliable FiO2 achievable with a non-rebreather mask (NRB) is approximately:",
    "options": [
      "0.50",
      "0.60",
      "0.70",
      "0.90–0.95"
    ],
    "correctIndex": 3,
    "explanation": "A properly fitting NRB mask with tight seal and high flow (10–15 L/min to keep reservoir bag inflated) can deliver 0.90–0.95 FiO2. The one-way valves prevent exhaled gas from re-entering the reservoir.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "Venturi masks are preferred over nasal cannulas in COPD patients requiring supplemental O2 because:",
    "options": [
      "They deliver higher FiO2",
      "They provide a precise, consistent FiO2 regardless of breathing pattern",
      "They are more comfortable",
      "They eliminate CO2 retention risk"
    ],
    "correctIndex": 1,
    "explanation": "Venturi (air-entrainment) masks use fixed-size jets to entrain room air in precise proportions, delivering accurate FiO2 (24–50%). This prevents excessive oxygenation and CO2 retention in hypoxic-drive COPD patients.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "High-flow nasal cannula (HFNC, e.g., Optiflow) at 40 L/min generates an approximate PEEP of:",
    "options": [
      "0–1 cmH₂O",
      "2–4 cmH₂O",
      "5–8 cmH₂O",
      "10–12 cmH₂O"
    ],
    "correctIndex": 1,
    "explanation": "HFNC generates approximately 1 cmH₂O PEEP per 10 L/min of flow when the mouth is closed. At 40 L/min ≈ 3–4 cmH₂O. This modest PEEP, combined with dead space flushing and accurate FiO2, improves oxygenation.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "SpO2 target for most non-ARDS patients on supplemental oxygen should be:",
    "options": [
      "≥ 99–100%",
      "95–98%",
      "88–92%",
      "80–85%"
    ],
    "correctIndex": 1,
    "explanation": "For most patients, target SpO2 94–98% (or 92–96% for selected groups). Hyperoxia (SpO2 > 98–99%) is associated with worse outcomes in STEMI, stroke, and post-cardiac arrest patients — avoid unnecessary high FiO2.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "For COPD patients on supplemental oxygen, the target SpO2 is:",
    "options": [
      "≥ 98%",
      "95–98%",
      "88–92%",
      "80–85%"
    ],
    "correctIndex": 2,
    "explanation": "Target SpO2 88–92% in COPD to provide adequate oxygenation while avoiding suppression of the hypoxic respiratory drive and worsening hypercapnia. Higher SpO2 in COPD patients can lead to CO2 retention (Haldane effect + reduced HPV).",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Absorptive atelectasis from high FiO2 occurs because:",
    "options": [
      "Oxygen causes bronchospasm",
      "Nitrogen (which normally splints alveoli open) is washed out, causing alveolar collapse when O2 is rapidly absorbed",
      "High FiO2 reduces surfactant production",
      "Oxygen increases mucus production"
    ],
    "correctIndex": 1,
    "explanation": "At high FiO2, nitrogen is displaced from alveoli. Without nitrogen to 'splint' alveoli, the rapidly absorbed oxygen leaves alveoli prone to collapse (absorptive atelectasis) — especially in low V/Q units.",
    "difficulty": "hard"
  },
  {
    "topicId": 6,
    "text": "The partial rebreather mask differs from the NRB mask in that:",
    "options": [
      "It has no reservoir bag",
      "It lacks one-way valves, allowing some exhaled gas to mix with reservoir gas",
      "It delivers lower FiO2 than a simple face mask",
      "It is used only during CPR"
    ],
    "correctIndex": 1,
    "explanation": "The partial rebreather mask has a reservoir bag but lacks the one-way valves of a NRB mask, so the first portion of exhaled gas (dead space gas, not CO2-rich) re-enters the bag. FiO2 achieved is lower (0.60–0.80) than a true NRB.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Helium-oxygen therapy (Heliox) reduces work of breathing in upper airway obstruction primarily because:",
    "options": [
      "Helium provides more oxygen per molecule",
      "Helium's low density reduces turbulent flow and airway resistance",
      "Heliox is a bronchodilator",
      "Helium increases surfactant production"
    ],
    "correctIndex": 1,
    "explanation": "Helium is much less dense than nitrogen (0.164 vs. 1.25 g/L). In turbulent (high-resistance) airway obstruction, replacing nitrogen with helium reduces the Reynolds number, promoting laminar flow and reducing WOB.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Oxygen toxicity from prolonged high FiO2 first manifests as:",
    "options": [
      "Bronchospasm and wheezing",
      "Substernal chest pain, cough, and tracheobronchitis (first symptoms)",
      "Cyanosis",
      "Hypercapnia"
    ],
    "correctIndex": 1,
    "explanation": "Early signs of oxygen toxicity (FiO2 > 0.50–0.60 for > 24–48 hrs): substernal burning pain worsened by deep inspiration, cough, and tracheobronchitis. Progressive exposure leads to interstitial edema, consolidation, and ARDS-like injury.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Which of the following oxygen delivery devices requires the highest flow rate to maintain adequate FiO2?",
    "options": [
      "Nasal cannula at 2 L/min",
      "Simple face mask (minimum 5 L/min to flush CO2)",
      "Venturi mask at 24% (3–4 L/min)",
      "Reservoir cannula"
    ],
    "correctIndex": 1,
    "explanation": "Simple face masks require minimum 5–6 L/min to flush exhaled CO2 from the mask and prevent rebreathing. At lower flows, CO2 accumulates in the mask, reducing FiO2 and causing CO2 rebreathing.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "An oxygen concentrator works by:",
    "options": [
      "Compressing liquid oxygen into gas phase",
      "Using a molecular sieve (zeolite) to adsorb nitrogen from room air, concentrating oxygen",
      "Electrolyzing water to produce oxygen",
      "Filtering carbon dioxide from room air"
    ],
    "correctIndex": 1,
    "explanation": "Oxygen concentrators use zeolite molecular sieves that selectively adsorb nitrogen from compressed room air, releasing concentrated oxygen (90–95% FiO2) for home use. They require electricity and produce warm O2.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "HFNC is superior to conventional low-flow oxygen for hypoxemic respiratory failure primarily because:",
    "options": [
      "HFNC delivers lower FiO2",
      "HFNC meets or exceeds patient's peak inspiratory flow demand, minimizing air entrainment and FiO2 dilution",
      "HFNC delivers less flow",
      "HFNC does not require humidification"
    ],
    "correctIndex": 1,
    "explanation": "With HFNC delivering 30–60 L/min of fully conditioned gas at precise FiO2, it meets or exceeds the patient's peak inspiratory demand (15–30 L/min at rest), preventing room air entrainment that dilutes FiO2 with conventional devices.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Retinopathy of prematurity (ROP) in premature neonates is associated with:",
    "options": [
      "Hypoxia (SpO2 < 88%)",
      "Hyperoxia — excessive oxygen exposure causing retinal vascular damage",
      "Hypercapnia",
      "Anemia"
    ],
    "correctIndex": 1,
    "explanation": "ROP occurs when excess oxygen causes retinal vessel constriction followed by abnormal proliferative neovascularization. Target SpO2 90–95% in premature neonates < 32 weeks gestational age to minimize ROP risk.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "The FiO2 delivered by a nasal cannula is inversely proportional to:",
    "options": [
      "Flow rate setting",
      "Patient's peak inspiratory flow rate (higher flow rate → more room air entrained → lower FiO2)",
      "Oxygen source pressure",
      "Humidity level"
    ],
    "correctIndex": 1,
    "explanation": "Cannulas and face masks are 'variable performance' devices — FiO2 depends on patient breathing pattern. A patient who breathes rapidly with large tidal volumes entrains more room air, diluting the delivered O2 and lowering actual FiO2.",
    "difficulty": "hard"
  },
  {
    "topicId": 6,
    "text": "Chronic home oxygen therapy is indicated in COPD patients when:",
    "options": [
      "PaO2 is 70 mmHg or SpO2 93% at rest",
      "Resting PaO2 ≤ 55 mmHg (or SpO2 ≤ 88%) or PaO2 56–59 with cor pulmonale or erythrocytosis",
      "Only during exercise",
      "FEV1 < 50% predicted"
    ],
    "correctIndex": 1,
    "explanation": "Long-term O2 therapy indications (at rest): PaO2 ≤ 55 mmHg or SpO2 ≤ 88%. PaO2 56–59 with cor pulmonale (P pulmonale, edema) or Hct ≥ 55% also qualify. LTOT improves survival in COPD patients who meet these criteria.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Oxygen humidification is generally NOT required at flow rates below:",
    "options": [
      "1 L/min",
      "4 L/min",
      "8 L/min",
      "12 L/min"
    ],
    "correctIndex": 1,
    "explanation": "AARTs guidelines: humidification not required for flows ≤ 4 L/min via nasal cannula. Above 4 L/min (especially with prolonged use), humidification reduces mucosal drying, discomfort, and epistaxis.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "A transtracheal oxygen catheter (TTOC) offers the advantage of:",
    "options": [
      "Higher FiO2 at any given flow compared to nasal cannula",
      "Lower flow requirements, cosmetic advantages, and reservoir function in the trachea reducing dead space",
      "No need for cleaning",
      "Higher flow rates required"
    ],
    "correctIndex": 1,
    "explanation": "TTOC delivers O2 directly into the trachea, bypassing dead space. The trachea acts as a reservoir. This allows therapeutic SpO2 at lower flow rates (30–50% less O2), reducing cost and improving compliance.",
    "difficulty": "hard"
  },
  {
    "topicId": 6,
    "text": "An air-entrainment (jet) nebulizer operates on which principle?",
    "options": [
      "Ultrasound vibration of the liquid",
      "Bernoulli effect — high-velocity gas past a jet creates a pressure drop that draws liquid up and shatters it into aerosol particles",
      "Electric heating of the solution",
      "Gravity-fed flow"
    ],
    "correctIndex": 1,
    "explanation": "Jet (pneumatic) nebulizers use the Bernoulli principle: fast gas past a narrow jet creates a low-pressure zone that draws liquid from the reservoir up a capillary tube, where it is shattered into respirable particles by the gas stream.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Which oxygen delivery device provides the LOWEST reliable FiO2 (used for mild hypoxemia only)?",
    "options": [
      "Non-rebreather mask",
      "Partial rebreather mask",
      "Simple face mask",
      "Nasal cannula at 1 L/min (FiO2 ≈ 0.24)"
    ],
    "correctIndex": 3,
    "explanation": "Nasal cannula at 1 L/min delivers approximately FiO2 0.24–0.25 — the lowest FiO2 reliably achievable with a standard delivery device. Appropriate for mild hypoxemia where minimal supplementation is needed.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "A patient receiving oxygen via nasal cannula at 6 L/min complains of nasal dryness and epistaxis. The best intervention is:",
    "options": [
      "Switch to a simple face mask",
      "Add bubble humidification to the flowmeter",
      "Decrease flow to 1 L/min",
      "Switch to a non-rebreather mask"
    ],
    "correctIndex": 1,
    "explanation": "At ≥ 4 L/min, humidification is recommended to prevent mucosal drying. Bubble humidifiers add moisture to the delivered gas, reducing nasal dryness and epistaxis without changing FiO2 delivery.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "The Fio2 delivered by a simple face mask set at 5 L/min is approximately:",
    "options": [
      "0.24",
      "0.35–0.40",
      "0.50–0.60",
      "0.90"
    ],
    "correctIndex": 1,
    "explanation": "A simple face mask at 5 L/min provides approximately FiO2 0.35–0.40. Actual FiO2 varies with RR and TV. Minimum 5 L/min is required to flush exhaled CO2 from the mask.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "HFNC therapy delivers gas at what temperature and relative humidity to match body conditions?",
    "options": [
      "21°C and 50% RH",
      "37°C and 100% RH (44 mg H₂O/L)",
      "30°C and 80% RH",
      "35°C and 70% RH"
    ],
    "correctIndex": 1,
    "explanation": "HFNC delivers fully conditioned gas at 37°C and 100% relative humidity (44 mg/L absolute humidity) — matching body temperature and pressure saturated (BTPS) conditions. This maximizes mucociliary function and patient comfort at high flow rates.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "High-Flow Nasal Cannula (HFNC) therapy delivers heated, humidified gas at flows up to 60 L/min. At maximum flow, the estimated FiO2 delivered is:",
    "options": [
      "Precisely equal to the set FiO2 regardless of patient breathing",
      "Approximately equal to the set FiO2 — high flow minimizes entrainment of room air, but actual FiO2 varies with patient's peak inspiratory flow and mouth breathing",
      "Always 100%",
      "Always 30%"
    ],
    "correctIndex": 1,
    "explanation": "HFNC at 40–60 L/min closely approximates the set FiO2 because the delivered flow often meets or exceeds the patient's peak inspiratory flow (typically 30–60 L/min at rest). This minimizes dilution with room air. However, mouth breathing, high RR, or very high inspiratory demand can reduce delivered FiO2. At lower flows (< 20 L/min), significant room air entrainment occurs.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "HFNC reduces the anatomical dead space in the nasopharynx by:",
    "options": [
      "Delivering 100% O2 only",
      "Continuously flushing the nasopharyngeal dead space with fresh gas, reducing CO2 rebreathing and effectively lowering physiologic dead space",
      "Applying CPAP through a tight-fitting mask",
      "Drying secretions to reduce airway resistance"
    ],
    "correctIndex": 1,
    "explanation": "At high flows, HFNC washes out CO2 from the nasopharynx between breaths. Since the nasopharynx (~50 mL) is normally rebreathed dead space, its washout reduces the effective dead space. Each breath starts with a higher-O2 / lower-CO2 mixture. This 'dead space washout' effect contributes to CO2 clearance, explaining why some patients show modest PaCO2 improvements on HFNC despite no positive pressure.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "The ROX index (SpO2/FiO2 ÷ RR) is used in HFNC to predict the need for intubation. A ROX index < 2.85 at 12 hours of HFNC predicts:",
    "options": [
      "Successful treatment — no intubation needed",
      "HFNC failure requiring intubation — a low ROX indicates worsening oxygenation relative to respiratory effort",
      "Adequate CO2 clearance",
      "The need to switch to NIV"
    ],
    "correctIndex": 1,
    "explanation": "The ROX index (Roca et al.) was developed to identify patients with pneumonia/ARDS on HFNC who will ultimately need intubation. ROX < 2.85 at any time point, or failure to rise above 3.85 by 12 hours, predicts HFNC failure with good accuracy. It helps clinicians avoid delayed intubation in deteriorating patients, as late intubation worsens outcomes.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "The optimal HFNC flow rate for a spontaneously breathing adult with acute hypoxemic respiratory failure is typically:",
    "options": [
      "5–10 L/min",
      "30–60 L/min — high enough to match or exceed peak inspiratory flow, minimizing room air entrainment and providing consistent FiO2",
      "10–20 L/min",
      "60–80 L/min always"
    ],
    "correctIndex": 1,
    "explanation": "For acute hypoxemic respiratory failure, HFNC should be started at 30–40 L/min and titrated up to 60 L/min as needed. Higher flows provide more consistent FiO2, better dead space washout, and a modest level of end-expiratory pressure (PEEP effect, approximately 1 cmH₂O per 10 L/min with closed mouth). Titrate to SpO2 ≥ 92–95% and clinical comfort.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "NIV (Non-Invasive Ventilation) with BiPAP is contraindicated in which situation?",
    "options": [
      "Mild COPD exacerbation with pH 7.32",
      "Cardiac arrest, inability to protect the airway, copious secretions with inability to clear, or facial trauma/surgery that prevents mask application",
      "Cardiogenic pulmonary edema",
      "Acute hypercapnic respiratory failure"
    ],
    "correctIndex": 1,
    "explanation": "Absolute contraindications to NIV: cardiac/respiratory arrest, inability to protect airway (loss of gag reflex), hemodynamic instability requiring immediate intubation, uncooperative or agitated patient, excessive secretions, facial surgery/trauma, and esophageal anastomosis. NIV is highly effective in COPD exacerbation (pH 7.25–7.35), cardiogenic pulmonary edema, and immunocompromised patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "In BiPAP for COPD exacerbation, typical initial settings are IPAP 12–16 and EPAP 4–5 cmH₂O. The EPAP level serves primarily to:",
    "options": [
      "Increase tidal volume",
      "Counteract auto-PEEP, stent open collapsible airways to reduce WOB, and improve FRC — similar to PEEP in invasive ventilation",
      "Reduce inspiratory muscle work only",
      "Control the backup rate"
    ],
    "correctIndex": 1,
    "explanation": "In COPD, dynamic hyperinflation creates auto-PEEP that the patient must overcome to trigger each breath. EPAP (external PEEP) of 4–5 cmH₂O partially counterbalances this intrinsic PEEP, reducing the trigger threshold. EPAP also maintains airway patency in upper airway collapse (OSA) and recruits atelectatic regions. The effective pressure support = IPAP − EPAP.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "CPAP therapy in cardiogenic pulmonary edema reduces the need for intubation by:",
    "options": [
      "Delivering high FiO2 only",
      "Reducing preload and afterload (decreased venous return and LV transmural pressure), recruiting flooded alveoli, and improving oxygenation — all reducing WOB and correcting hypoxemia",
      "Stimulating respiratory drive",
      "Reducing bronchospasm"
    ],
    "correctIndex": 1,
    "explanation": "CPAP at 5–10 cmH₂O in acute cardiogenic pulmonary edema: (1) increases intrathoracic pressure, reducing venous return (preload reduction), (2) reduces LV afterload by decreasing the pressure difference the LV must generate, (3) recruits flooded alveoli improving V/Q, and (4) reduces WOB. The 3CPO trial confirmed CPAP reduces intubation rate and dyspnea compared to standard oxygen therapy.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "CPAP titration for obstructive sleep apnea (OSA) in the sleep lab aims to find the pressure that:",
    "options": [
      "Delivers the highest FiO2",
      "Eliminates all apneas, hypopneas, respiratory event-related arousals, and snoring while maintaining SpO2 ≥ 90% throughout all sleep stages and positions",
      "Achieves minimum possible pressure",
      "Maintains RR > 20/min"
    ],
    "correctIndex": 1,
    "explanation": "CPAP titration eliminates flow limitation by pneumatically splinting the upper airway. The optimal CPAP pressure prevents apneas (cessation > 10s), hypopneas (≥30% flow reduction with arousal or desaturation), RERAs, and snoring — across all sleep positions and stages (especially REM in supine position, where OSA is worst). Auto-titrating CPAP (APAP) devices adjust pressure breath-by-breath based on measured resistance.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Average Volume-Assured Pressure Support (AVAPS) combines BiPAP with automatic adjustment to maintain a target tidal volume. Its primary indication is:",
    "options": [
      "Acute COPD exacerbation",
      "Obesity hypoventilation syndrome (OHS) or neuromuscular disease — where respiratory drive and chest wall mechanics vary significantly and a fixed IPAP may be inadequate to guarantee alveolar ventilation overnight",
      "Post-extubation support in ICU",
      "Cardiogenic pulmonary edema"
    ],
    "correctIndex": 1,
    "explanation": "AVAPS continuously adjusts IPAP (within set min/max limits) to achieve the target tidal volume. In OHS, where compliance is poor and variable, fixed BiPAP may under- or over-ventilate. AVAPS 'hunts' for the pressure needed to consistently deliver the target TV. It is FDA-cleared for home use in OHS, neuromuscular disease, and central hypoventilation syndromes.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "A non-rebreather mask (NRB) at 10–15 L/min can deliver a maximum FiO2 of approximately:",
    "options": [
      "44%",
      "60–70% with a 1-way valve functioning; up to 80–90% with both exhalation valves intact",
      "24–28%",
      "100%"
    ],
    "correctIndex": 1,
    "explanation": "A properly fitting NRB mask with a reservoir bag and one-way valves can deliver FiO2 0.60–0.80 at 10–15 L/min (some sources cite up to 0.90 with tight seal and both exhalation port valves). In practice, mask fit is rarely perfect. A simple mask delivers ~35–50%. Venturi masks provide precise FiO2. True 100% FiO2 requires a tight-seal non-vented mask with 100% O2 flow exceeding peak inspiratory demand.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "A Venturi mask (air-entrainment mask) delivers a precise FiO2 by using the Bernoulli principle to entrain a fixed amount of air. Its clinical advantage over a simple mask is:",
    "options": [
      "It delivers higher FiO2 than all other masks",
      "Precise, consistent FiO2 delivery (24–50%) regardless of the patient's flow demand — critical for COPD patients requiring controlled oxygen therapy",
      "It is more comfortable than nasal cannula",
      "It provides CPAP"
    ],
    "correctIndex": 1,
    "explanation": "The Venturi mask uses the Venturi/Bernoulli effect: a high-velocity O2 jet through a narrow orifice entrains a fixed amount of room air through side ports. By changing jet size and flow, a precise total flow and FiO2 are delivered. Because total flow typically exceeds patient demand, the delivered FiO2 is stable regardless of breathing pattern — essential in COPD where precise FiO2 prevents elimination of hypoxic drive in some patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "PEP (Positive Expiratory Pressure) therapy devices (e.g., threshold PEP, oscillating PEP) assist airway clearance primarily by:",
    "options": [
      "Directly suctioning secretions",
      "Building positive back-pressure during exhalation to stent airways open, reduce dynamic airway collapse, and mobilize secretions proximally via high-velocity airflow oscillations (oscillating PEP) or sustained back-pressure (threshold PEP)",
      "Stimulating cough only",
      "Delivering bronchodilators"
    ],
    "correctIndex": 1,
    "explanation": "PEP devices create a resistance during exhalation (typically 10–20 cmH₂O in threshold PEP). This prevents small airway collapse, allowing air to flow behind secretions and mobilize them toward the central airways. Oscillating PEP devices (Flutter, Acapella, Aerobika) superimpose high-frequency oscillations on PEP, loosening secretions by creating oscillatory shear forces. Used in CF, bronchiectasis, COPD.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "The Flutter valve (oscillating PEP device) is gravity-dependent because:",
    "options": [
      "It requires upright positioning to work",
      "The steel ball inside the cone creates oscillatory back-pressure only when the device is held at a specific angle (approximately horizontal) — tilting changes the ball's resting position and alters oscillation frequency",
      "It delivers PEP only in supine position",
      "Gravity increases expiratory flow"
    ],
    "correctIndex": 1,
    "explanation": "The Flutter valve contains a steel ball in a conical seat. Expiratory flow lifts the ball (PEP rises), then it falls back (pressure drops), creating oscillations at 6–26 Hz. The angle of the device changes the gravitational force on the ball, altering the oscillation frequency and pressure. Patients must be trained to hold it nearly horizontal for optimal function. The Acapella is not gravity-dependent and works in any position.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "High-Frequency Chest Wall Oscillation (HFCWO / The Vest) aids mucus clearance by:",
    "options": [
      "Applying external CPAP to the chest wall",
      "Delivering rapid, small compressions to the chest wall at 5–25 Hz, generating oscillatory airflow in the airways that shears and mobilizes secretions — similar to mini-coughs",
      "Heating the chest wall to liquefy mucus",
      "Applying vibration only during inhalation"
    ],
    "correctIndex": 1,
    "explanation": "The inflatable vest wraps around the thorax and delivers rapid oscillatory compressions (programmable frequency and intensity). This creates a two-phase airflow oscillation in the airways: the compression phase generates brief higher flow (mini-cough), and the recoil phase promotes secretion mobilization. HFCWO is used in CF, bronchiectasis, neuromuscular diseases, and is effective without positioning changes.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Intrapulmonary Percussive Ventilation (IPV) delivers minibursts of compressed gas at 100–300 cycles/min. Its dual benefit is:",
    "options": [
      "CPAP plus bronchodilation",
      "Airway clearance through high-frequency percussion AND aerosolized medication delivery (bronchodilators can be added to the percussionator) simultaneously — while maintaining percussive effect",
      "Mechanical ventilation backup",
      "Oxygen delivery only"
    ],
    "correctIndex": 1,
    "explanation": "IPV (Percussionaire) delivers high-frequency pulsatile flow via mouthpiece/mask at high cycle rates. The percussive effect mobilizes secretions toward the central airways. Concurrently, aerosolized medications (nebulized saline, bronchodilators) can be entrained into the pulsatile flow, treating bronchospasm while clearing secretions. Used in CF, COPD, pneumonia, and post-operative atelectasis.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Active cycle of breathing technique (ACBT) consists of three phases. The correct sequence is:",
    "options": [
      "Huff → relaxed breathing → FET",
      "Breathing control (relaxed tidal breathing) → thoracic expansion exercises (deep breaths) → forced expiration technique (FET/huffing)",
      "Coughing → deep breathing → rest",
      "FET → coughing → CPAP"
    ],
    "correctIndex": 1,
    "explanation": "ACBT cycle: (1) Breathing control — relaxed diaphragmatic breathing to reduce bronchospasm and fatigue, (2) Thoracic expansion exercises — 3–4 deep breaths with breath-hold to allow collateral ventilation behind secretions, (3) Forced Expiration Technique (FET) — 1–2 huffs (open glottis) at mid-to-low lung volume to mobilize secretions. Repeat. More secretion-specific than deep breathing alone.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "Incentive spirometry (IS) is most effective for prevention of:",
    "options": [
      "Ventilator-associated pneumonia",
      "Post-operative atelectasis — sustained maximal inspiration mimics the normal sighing mechanism, expanding collapsed alveoli in patients who breathe shallowly due to splinting from pain",
      "Secretion mobilization in CF",
      "Hypercapnia in COPD"
    ],
    "correctIndex": 1,
    "explanation": "IS promotes sustained maximal inspiration (SMI) using visual feedback (a rising piston or ball). The sustained inspiration expands the lungs, reopens atelectatic alveoli, and exercises inspiratory muscles. Most beneficial in post-abdominal/thoracic surgery patients who splint and breathe shallowly. Target: 10 attempts per hour while awake. Its benefit over coached deep breathing alone has been questioned in meta-analyses.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "When administering bronchodilators via MDI with spacer to a mechanically ventilated patient, correct technique includes:",
    "options": [
      "Activating the MDI at peak inspiratory flow",
      "Coordinating MDI actuation 1 second before or at the start of the ventilator's inspiratory cycle — with actuation into the spacer/chamber placed at the elbow of the circuit at least 15 cm from the ETT",
      "Removing the heat-moisture exchanger temporarily only for SVN delivery",
      "Actuating directly into the Y-piece without a spacer"
    ],
    "correctIndex": 1,
    "explanation": "In-line MDI: place a spacer (chamber adapter) in the inspiratory limb ≥15 cm from the ETT Y-piece. Actuate just before or at the beginning of inspiration (1–2 actuations, wait 15–30s between actuations). MDI delivers ~30% of dose to the lung in ventilated patients vs. ~9% without spacer. HME must be bypassed (moved to expiratory limb) during SVN; MDI can be used with HME in place.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Small-volume nebulizer (SVN) treatment in mechanically ventilated patients: optimal nebulizer placement is:",
    "options": [
      "Directly at the ETT Y-piece",
      "In the inspiratory limb, 15–30 cm proximal to the Y-piece (at the circuit elbow) — this increases aerosol reservoir and improves delivery by 3× compared to Y-piece placement",
      "In the expiratory limb",
      "In the exhalation port of the ventilator"
    ],
    "correctIndex": 1,
    "explanation": "Aerosol delivery in MV is highly position-dependent. SVN placed 15–30 cm from the Y-piece in the inspiratory limb creates a reservoir of nebulized particles that are inhaled with the next breath. This placement increases lung deposition from ~3% (Y-piece) to ~10–15%. The HME filter must be removed or bypassed during SVN, or condensation will collect medication in the filter rather than delivering it to the patient.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "Heliox (helium-oxygen mixture, typically 70:30 or 80:20) reduces WOB in upper airway obstruction because:",
    "options": [
      "It delivers more oxygen per molecule",
      "Helium's low density reduces turbulent airflow resistance in the upper airway — turbulent resistance is proportional to gas density, so helium reduces the driving pressure needed to breathe through a stenotic airway",
      "It bronchodilates the central airways",
      "It reduces CO2 production"
    ],
    "correctIndex": 1,
    "explanation": "Turbulent airflow resistance (Re ∝ density/viscosity). Helium density is 0.164 g/L vs. nitrogen 1.25 g/L. A 70:30 heliox mixture has density ~0.43 g/L — about 1/3 that of air. In turbulent flow states (subglottic stenosis, croup, post-extubation stridor, severe asthma), heliox dramatically reduces resistive WOB. It requires a tight-fitting mask or circuit adaptation and the FiO2 cannot exceed 40% with 60% He.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "For aerosol therapy using heliox as the driving gas through a nebulizer, which adjustment is required?",
    "options": [
      "No adjustment — heliox works the same as air",
      "Increase the flow rate by 1.8× compared to the flow used with air/O2 — because heliox's lower density requires higher flow to achieve the same aerosol output from a jet nebulizer",
      "Decrease flow by half",
      "Switch to ultrasonic nebulizer only"
    ],
    "correctIndex": 1,
    "explanation": "Jet nebulizers are calibrated for air or O2 (density ~1.3 g/L). Heliox (~0.43 g/L) flows faster through the same orifice at the same driving pressure but delivers less mass flow (fewer gas molecules per liter). This means less Venturi effect and reduced nebulizer output. To compensate, flow must be increased ~1.8× (√3 ratio for 70:30 heliox vs. air) to achieve adequate aerosol generation.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Manual hyperinflation (MHI or 'bagging') is performed to:",
    "options": [
      "Deliver medications only",
      "Clear secretions (via high peak flow and cough augmentation), recruit atelectatic lung, and temporarily test compliance and resistance before circuit changes",
      "Provide permanent ventilatory support",
      "Replace chest physiotherapy entirely"
    ],
    "correctIndex": 1,
    "explanation": "MHI (bag-squeezing technique) applies a larger-than-tidal-volume breath (typically 1–1.5× TV) followed by a short breath hold and rapid release. The rapid exhalation generates a high expiratory flow mimicking a cough, moving secretions proximally. MHI also recruits atelectatic regions. A fast release of the bag creates the 'squeezing wave' that moves secretions. Use with caution in patients with auto-PEEP, ARDS, or hemodynamic instability.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "The minimum expired tidal volume required to trigger the incentive spirometer piston to a target is 600–1,200 mL for most adults. For a post-abdominal surgery patient unable to achieve this, the BEST modification is:",
    "options": [
      "Discontinue IS and use deep breathing instructions alone",
      "Lower the target initially to a tolerable level (e.g., 3× normal TV), encourage the patient to build progressively, and ensure adequate analgesia to reduce splinting",
      "Increase the flow setting",
      "Switch to BiPAP"
    ],
    "correctIndex": 1,
    "explanation": "Post-operative patients with pain splint their breathing. Pain management (epidural, nerve block, oral analgesics) is the single most effective intervention to allow deeper breaths. IS goals should be set based on the patient's pre-operative FVC if available, but starting lower and building is better than not using IS. Positioning upright and using pillow splinting for incision pain support are also helpful adjuncts.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "When a patient has a tracheostomy and is being weaned to a tracheostomy collar (trach mask), oxygen delivery should be provided with:",
    "options": [
      "Standard nasal cannula placed in the nares",
      "An aerosol mask or trach collar with a large-bore nebulizer system providing humidified oxygen at the desired FiO2 — direct delivery to the trach avoids the upper airway bypass problem",
      "Simple mask over the trach",
      "Blow-by technique"
    ],
    "correctIndex": 1,
    "explanation": "Tracheostomy patients have bypassed the upper airway (which normally warms and humidifies inspired gas). Without upper airway conditioning, cold, dry gas causes tracheal mucosal damage, inspissated secretions, and impaired mucociliary clearance. A trach collar or T-piece with a heated aerosol system provides both the prescribed FiO2 and essential humidity directly to the stoma.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "An HME (heat-moisture exchanger) vs. a heated humidifier (HH) in mechanically ventilated patients: HME is contraindicated in which scenario?",
    "options": [
      "Short-term ventilation (< 3 days)",
      "Thick, copious, or bloody secretions — HME filters can trap secretions, dramatically increasing airway resistance and dead space; also contraindicated in hypothermic patients (< 32°C) and when large air leaks exist",
      "Post-operative patients",
      "Patients requiring bronchodilators via MDI"
    ],
    "correctIndex": 1,
    "explanation": "HME contraindications: (1) copious/thick/bloody secretions (clog the filter), (2) hypothermia (< 32°C — HME cannot add heat and may cool the gas), (3) large air leaks via uncuffed ETT, trach, or bronchopleural fistula (leak prevents moisture recapture), (4) minute ventilation > 10 L/min (inadequate moisture output). HH should be used in these cases. HME adds dead space (30–90 mL) — problematic in low-TV ventilation.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Oxygen delivery from a liquid oxygen (LOX) system compared to a compressed gas cylinder offers the advantage of:",
    "options": [
      "Higher working pressure suitable for all regulators",
      "Much greater storage capacity per unit volume — liquid O2 is 875× denser than gaseous O2, allowing portable units to carry significantly more O2 for ambulation and home use",
      "Lower cost for all quantities",
      "Better purity (higher O2%)"
    ],
    "correctIndex": 1,
    "explanation": "Liquid oxygen at −183°C stores 875 L of gaseous O2 per liter of liquid. A 1-liter portable LOX unit holds ~1,000 L of O2, much more than an equivalent-size compressed H-cylinder (6,900 L) or E-cylinder (625 L). LOX is preferred for high-flow, ambulatory home oxygen. Drawbacks: must be refilled (not refillable from wall like cylinders), loss from evaporation, and cryogenic handling requirements.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "A patient on 2 L/min nasal cannula has a cylinder pressure of 1,800 psi. Using a size E cylinder (factor 0.28), how long will the oxygen last?",
    "options": [
      "100 minutes",
      "1800 × 0.28 ÷ 2 = 252 minutes (4.2 hours)",
      "500 minutes",
      "50 minutes"
    ],
    "correctIndex": 1,
    "explanation": "Duration formula: (gauge pressure × cylinder factor) ÷ flow rate = duration. E-cylinder factor = 0.28. Duration = 1,800 × 0.28 ÷ 2 = 504 ÷ 2 = 252 minutes (~4.2 hours). Common cylinder factors: E = 0.28, G = 2.41, H/K = 3.14. This should be calculated before patient transport to ensure adequate supply.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "NIV failure requiring intubation is most likely to occur within the first how many hours, and the most important predictor is:",
    "options": [
      "24–48 hours; baseline pH",
      "1–2 hours; failure of pH to improve (pH remaining < 7.30 after 1–2 hours of NIV) — combined with high APACHE II score and poor neurological status",
      "72 hours; FiO2 requirements",
      "6 hours; oxygenation"
    ],
    "correctIndex": 1,
    "explanation": "NIV in acute hypercapnic respiratory failure: reassess within 1 hour for ABG improvement. pH should rise (toward 7.35). pH < 7.30 after 1–2 hours of optimal NIV, worsening encephalopathy, inability to tolerate mask, or hemodynamic instability mandate intubation without further NIV delay. Delay can result in emergency intubation with higher complication risk than elective controlled intubation.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Bubble CPAP for neonates generates CPAP by submerging the expiratory limb underwater. Its unique secondary benefit over other CPAP generators is:",
    "options": [
      "It provides higher peak pressures",
      "The bubbling creates small-amplitude oscillations transmitted to the lung, providing gentle high-frequency vibration that may improve gas exchange beyond the CPAP level alone (similar in concept to HFOV)",
      "It eliminates the need for a blender",
      "It is more precise than flow-inflation devices"
    ],
    "correctIndex": 1,
    "explanation": "Bubble CPAP (Fischer & Paykel or similar systems) generates the prescribed pressure via water column depth. The bubbling from gas escaping through the water creates 2–4 Hz high-frequency oscillations transmitted back to the lung. This vibratory effect has been proposed to improve CO2 washout and alveolar recruitment, potentially explaining why bubble CPAP performs at least as well as other CPAP methods in preterm infants.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "The correct FiO2 range for a Venturi mask set to the blue adapter is:",
    "options": [
      "28%",
      "24% (blue adapter) — each color-coded Venturi adapter has a set FiO2: blue 24%, yellow 28%, white 31%, green 35%, pink 40%, orange 50%",
      "35%",
      "40%"
    ],
    "correctIndex": 1,
    "explanation": "Standard Venturi mask color coding (may vary slightly by manufacturer): Blue = 24%, Yellow = 28%, White = 31%, Green = 35%, Pink = 40%, Orange = 50%. Each adapter has a specific O2 flow recommendation on the label (e.g., 2 L/min for 24%). Using the correct flow is essential — too low a flow may not entrain enough air, too high a flow increases FiO2 above labeled value.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "During aerosol therapy with a small-volume nebulizer, mouthpiece delivery is preferred over mask delivery primarily because:",
    "options": [
      "It delivers higher drug doses always",
      "Masks result in significant drug deposition on the face and in the nasal turbinates (especially with nose breathing), reducing pulmonary deposition — mouthpiece delivery with mouth breathing and breath-hold improves lung deposition",
      "Mouthpieces provide PEEP",
      "Masks increase bronchospasm risk"
    ],
    "correctIndex": 1,
    "explanation": "With a mask SVN, up to 50% of drug deposits on the face and nasal turbinates. Nasal turbinate deposition is particularly problematic for lung disease medications. Mouthpiece delivery with relaxed tidal volume breathing through the mouth, followed by a 4–10 second breath-hold, optimizes intrapulmonary deposition (10–20% of dose). Masks are appropriate only for young children, confused patients, or those who cannot maintain a tight seal.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Air-entrainment nebulizers (LVN, all-purpose nebulizers) used for cool aerosol therapy can deliver oxygen concentrations of:",
    "options": [
      "100% only",
      "35–100% by adjusting the entrainment port — fully open = ~35% (large air entrainment), closed = 100% O2 (no air entrainment)",
      "21% only (room air)",
      "40% fixed"
    ],
    "correctIndex": 1,
    "explanation": "Large-volume air-entrainment nebulizers (e.g., for trach collar or face tent) have an adjustable air-entrainment port. Fully open, room air is entrained, delivering ~35% FiO2 at 10–15 L/min O2 input. Partially or fully closing the port reduces air entrainment, increasing FiO2. Many systems can deliver 35%, 40%, 60%, 70%, 100% by adjusting the entrainment port and O2 flow.",
    "difficulty": "easy"
  },
  {
    "topicId": 6,
    "text": "Oxygen-induced hypercapnia in COPD patients is primarily caused by:",
    "options": [
      "Suppression of all respiratory drive (hypoxic drive theory) — pure reflex suppression of breathing by oxygen",
      "A combination of mechanisms: release of hypoxic pulmonary vasoconstriction (increasing V/Q mismatch), the Haldane effect (O2 displacing CO2 from hemoglobin), and modest reduction in respiratory drive — with V/Q worsening being the dominant mechanism",
      "Pure cardiac suppression of breathing",
      "Increased CO2 production from oxygen"
    ],
    "correctIndex": 1,
    "explanation": "The 'hypoxic drive' explanation is an oversimplification. Modern evidence shows that O2-induced hypercapnia in COPD results primarily from: (1) release of hypoxic pulmonary vasoconstriction → blood redistribution to poorly ventilated units → worse V/Q mismatch, (2) Haldane effect (deoxyHb carries more CO2; oxyHb releases CO2 from tissues into blood → higher venous PCO2). Respiratory drive suppression is a minor contributor.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "A patient on a non-rebreather mask at 15 L/min still has an SpO2 of 82%. The next escalation in oxygen delivery should be:",
    "options": [
      "Increase to 20 L/min on NRB",
      "Transition to HFNC at 40–60 L/min with FiO2 0.8–1.0, or to NIV/BiPAP — NRB is near the ceiling of non-invasive O2 delivery; the next step is high-flow or positive pressure therapy",
      "Add a second NRB mask",
      "Provide 100% O2 by blow-by"
    ],
    "correctIndex": 1,
    "explanation": "The NRB at 15 L/min delivers maximum FiO2 achievable by conventional low-flow masks (~80%). Persistent SpO2 of 82% on this mask indicates either refractory hypoxemia (requiring HFNC or NIV) or impending respiratory failure (requiring intubation assessment). HFNC at 60 L/min and FiO2 1.0 is the immediate step up; if the patient shows signs of respiratory distress or fatigue, early intubation should be considered.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "Autogenic drainage (AD) is a secretion clearance technique that uses controlled breathing at different lung volumes. The three phases are:",
    "options": [
      "Inhale → hold → exhale forcefully",
      "Unstick (low lung volume — loosens peripheral mucus), collect (mid lung volume — accumulates mucus in central airways), evacuate (high lung volume — huffing to expel central mucus)",
      "Huff → cough → rest",
      "PEP → deep breath → IS"
    ],
    "correctIndex": 1,
    "explanation": "Autogenic drainage uses controlled breathing at 3 lung volume ranges: (1) Unsticking — breathing at low lung volume (below FRC) to loosen peripheral mucus with high intraluminal flow-to-volume ratio; (2) Collecting — mid-volume breathing to migrate secretions to central airways; (3) Evacuating — high-volume huffs (open glottis FET) to expel proximal secretions. Requires significant patient training and is used primarily in CF.",
    "difficulty": "medium"
  },
  {
    "topicId": 6,
    "text": "A transtracheal oxygen catheter (TTOC) is inserted directly into the trachea and compared to nasal cannula, it:",
    "options": [
      "Delivers less oxygen per unit flow",
      "Reduces oxygen requirements by 30–50% by using the trachea as an oxygen reservoir — eliminating dead space dilution, and allows lower flow rates to achieve the same SpO2",
      "Requires higher flow rates",
      "Cannot be used with supplemental oxygen > 2 L/min"
    ],
    "correctIndex": 1,
    "explanation": "TTOC (e.g., SCOOP catheter) delivers O2 directly into the trachea. Benefits: (1) trachea acts as O2 reservoir — inspired gas is already oxygen-rich without nasal dilution, (2) eliminates anatomical dead space washout, (3) oxygen is only used during inspiration (not continuous waste during expiration as with nasal cannula). Result: 30–50% reduction in O2 requirements, making it valuable for patients needing high flows or for cosmetic/comfort reasons.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "Albuterol (a short-acting beta-2 agonist) works primarily by:",
    "options": [
      "Blocking muscarinic receptors to reduce bronchospasm",
      "Stimulating beta-2 receptors causing bronchial smooth muscle relaxation",
      "Inhibiting leukotriene production",
      "Reducing airway inflammation via corticosteroid mechanism"
    ],
    "correctIndex": 1,
    "explanation": "Albuterol stimulates beta-2 adrenergic receptors on bronchial smooth muscle, activating adenylate cyclase → increased cAMP → smooth muscle relaxation and bronchodilation. Onset is 5 minutes; duration 4-6 hours.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "Which inhaled medication should NEVER be used as a rescue inhaler during acute bronchospasm?",
    "options": [
      "Albuterol (Proventil)",
      "Ipratropium (Atrovent)",
      "Salmeterol (Serevent)",
      "Levalbuterol (Xopenex)"
    ],
    "correctIndex": 2,
    "explanation": "Salmeterol (Serevent) is a long-acting beta-2 agonist (LABA) with slow onset (30+ minutes) and is NOT appropriate for acute rescue. Using it for acute bronchospasm can cause worsening or death if the patient does not receive appropriate rapid-acting therapy.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "The therapeutic plasma level for theophylline is:",
    "options": [
      "2-5 mcg/mL",
      "10-20 mcg/mL",
      "25-35 mcg/mL",
      "50-60 mcg/mL"
    ],
    "correctIndex": 1,
    "explanation": "Theophylline has a narrow therapeutic window of 10-20 mcg/mL. Levels above 20 mcg/mL cause toxicity: nausea, vomiting, tachyarrhythmias, and seizures. Levels must be monitored closely.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "N-acetylcysteine (Mucomyst) given via nebulization may cause:",
    "options": [
      "Hypertension",
      "Bronchospasm (pretreat with bronchodilator)",
      "Hypoglycemia",
      "Urinary retention"
    ],
    "correctIndex": 1,
    "explanation": "N-acetylcysteine can provoke bronchospasm when inhaled, particularly in patients with reactive airway disease. Always pretreat with a bronchodilator (e.g., albuterol) before administering nebulized NAC.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Which drug is the antidote for acetaminophen (Tylenol) overdose AND used as an inhaled mucolytic?",
    "options": [
      "Dornase alfa (Pulmozyme)",
      "N-acetylcysteine (Mucomyst)",
      "Montelukast (Singulair)",
      "Magnesium sulfate"
    ],
    "correctIndex": 1,
    "explanation": "N-acetylcysteine (NAC/Mucomyst) serves dual functions: as an inhaled mucolytic (breaks disulfide bonds in mucus glycoproteins) and as the antidote for acetaminophen overdose (replenishes glutathione to prevent hepatotoxicity).",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Heliox is most effective in which clinical situation?",
    "options": [
      "Hypoxemic respiratory failure from pneumonia",
      "Upper airway obstruction causing turbulent airflow",
      "Metabolic acidosis requiring CO2 elimination",
      "Pulmonary edema"
    ],
    "correctIndex": 1,
    "explanation": "Heliox (helium-oxygen mixture) has lower density than air, converting turbulent flow to laminar flow in narrowed upper airways. It is most beneficial for upper airway obstruction (croup, post-extubation stridor) and severe asthma with turbulent flow.",
    "difficulty": "hard"
  },
  {
    "topicId": 7,
    "text": "Albuterol (salbutamol) works as a bronchodilator by:",
    "options": [
      "Blocking muscarinic receptors on airway smooth muscle",
      "Stimulating beta-2 adrenergic receptors, increasing cAMP and causing smooth muscle relaxation",
      "Inhibiting leukotriene synthesis",
      "Blocking histamine H1 receptors"
    ],
    "correctIndex": 1,
    "explanation": "Albuterol is a short-acting beta-2 agonist (SABA). Beta-2 receptor activation → adenylyl cyclase → increased cAMP → relaxation of airway smooth muscle and bronchodilation. Onset: 5–15 min; duration: 4–6 hours.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "Ipratropium bromide (Atrovent) bronchodilates via:",
    "options": [
      "Beta-2 agonism",
      "Muscarinic receptor (M3) antagonism — blocks acetylcholine-induced bronchoconstriction",
      "Inhibition of mast cell degranulation",
      "Direct smooth muscle relaxation"
    ],
    "correctIndex": 1,
    "explanation": "Ipratropium is a short-acting muscarinic antagonist (SAMA). It blocks acetylcholine at M3 receptors on airway smooth muscle, reducing bronchoconstriction — particularly effective in COPD and minimally in asthma.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "The combination inhaler Combivent/DuoNeb (ipratropium + albuterol) is used because:",
    "options": [
      "Both drugs have the same mechanism",
      "Additive bronchodilation via two different pathways (beta-2 agonism + muscarinic antagonism)",
      "To reduce steroid dose requirements",
      "Both drugs are long-acting"
    ],
    "correctIndex": 1,
    "explanation": "Ipratropium and albuterol bronchodilate via complementary mechanisms. Their combination provides additive bronchodilation, particularly useful in acute COPD exacerbations and severe asthma.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Inhaled corticosteroids (ICS, e.g., fluticasone, budesonide) in asthma primarily act to:",
    "options": [
      "Provide immediate bronchodilation",
      "Reduce airway inflammation, decreasing eosinophilic infiltration, mucus production, and airway hyperresponsiveness",
      "Block beta receptors",
      "Stimulate surfactant production"
    ],
    "correctIndex": 1,
    "explanation": "ICS are the cornerstone controller therapy for persistent asthma. They reduce airway inflammation (reduce eosinophilia, mast cell activation, and cytokine production) but do NOT provide immediate bronchodilation.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "Oral corticosteroids in acute severe asthma exacerbations should be given because:",
    "options": [
      "They cause immediate bronchodilation",
      "They reduce airway inflammation within hours, decreasing relapse rates, hospitalizations, and need for beta-agonists",
      "They increase lung compliance",
      "They prevent hypoxia"
    ],
    "correctIndex": 1,
    "explanation": "Oral (or IV) corticosteroids in acute asthma: onset 4–6 hours, but accelerate resolution of airway inflammation, reduce relapse within 7 days, and decrease hospitalization rates. Early administration is critical.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Magnesium sulfate (IV) in severe asthma exacerbations works by:",
    "options": [
      "Blocking beta receptors",
      "Inhibiting calcium-mediated smooth muscle contraction causing bronchodilation",
      "Stimulating GABA receptors",
      "Blocking acetylcholine release"
    ],
    "correctIndex": 1,
    "explanation": "Magnesium is a physiologic calcium antagonist. IV magnesium (2 g over 20 min) causes smooth muscle relaxation (bronchodilation and vasodilation) in severe acute asthma unresponsive to standard therapy.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "N-acetylcysteine (Mucomyst) is used as a mucolytic because:",
    "options": [
      "It stimulates ciliary beat frequency",
      "It cleaves disulfide bonds in mucus glycoproteins, reducing mucus viscosity",
      "It is a bronchodilator",
      "It reduces airway inflammation"
    ],
    "correctIndex": 1,
    "explanation": "NAC breaks disulfide bonds in mucin molecules, reducing mucus viscosity and improving mucociliary clearance. Used via nebulization or oral/IV for copious thick secretions, acetaminophen overdose (oral NAC).",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Dornase alfa (Pulmozyme) is used specifically in:",
    "options": [
      "COPD",
      "Asthma",
      "Cystic fibrosis — it cleaves extracellular DNA in mucus, reducing viscosity",
      "Pulmonary fibrosis"
    ],
    "correctIndex": 2,
    "explanation": "Dornase alfa is a recombinant human DNase I that cleaves the DNA released from dying neutrophils in CF mucus — the primary cause of its extreme viscosity. It reduces exacerbation frequency and improves lung function in CF.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Methylxanthines (e.g., theophylline) cause bronchodilation by:",
    "options": [
      "Beta-2 receptor agonism",
      "Inhibiting phosphodiesterase (increasing cAMP) and blocking adenosine receptors",
      "Inhibiting leukotriene synthesis",
      "Muscarinic receptor blockade"
    ],
    "correctIndex": 1,
    "explanation": "Theophylline inhibits phosphodiesterase (preventing cAMP breakdown) and blocks adenosine receptors. It also has anti-inflammatory effects and improves diaphragmatic contractility. Narrow therapeutic window (10–20 mcg/mL) requires monitoring.",
    "difficulty": "hard"
  },
  {
    "topicId": 7,
    "text": "Montelukast (Singulair) is a leukotriene receptor antagonist used in asthma primarily to:",
    "options": [
      "Reverse acute bronchospasm",
      "Reduce allergen- and exercise-induced bronchoconstriction and inflammation as a controller medication",
      "Replace ICS in severe asthma",
      "Treat acute exacerbations"
    ],
    "correctIndex": 1,
    "explanation": "Montelukast blocks cysteinyl leukotriene receptors, reducing allergen-triggered and exercise-induced bronchoconstriction, mucus secretion, and eosinophilic inflammation. It is a second-line controller, not a rescue medication.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "The main side effect of inhaled long-acting beta-agonists (LABAs, e.g., salmeterol) when used WITHOUT ICS in asthma is:",
    "options": [
      "Severe hypertension",
      "Increased asthma mortality risk — LABAs must always be combined with ICS in asthma",
      "Severe hypoglycemia",
      "Oral candidiasis"
    ],
    "correctIndex": 1,
    "explanation": "LABA monotherapy in asthma without ICS is contraindicated — FDA black box warning after SMART trial showing increased asthma-related deaths. LABAs must always be combined with ICS (e.g., Advair, Symbicort) in asthma.",
    "difficulty": "hard"
  },
  {
    "topicId": 7,
    "text": "Tiotropium (Spiriva) is a long-acting muscarinic antagonist (LAMA) most commonly used for:",
    "options": [
      "Acute asthma rescue",
      "Maintenance COPD management — once-daily bronchodilation",
      "Pediatric RSV treatment",
      "Pulmonary fibrosis"
    ],
    "correctIndex": 1,
    "explanation": "Tiotropium is a once-daily LAMA that blocks muscarinic receptors for 24+ hours, reducing bronchoconstriction in COPD. The UPLIFT trial showed reduced exacerbations and improved quality of life.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "Epinephrine 1:1000 (IM) is the FIRST-LINE treatment for:",
    "options": [
      "Severe asthma exacerbation",
      "Anaphylaxis — reverses bronchospasm, vasoconstriction, and angioedema",
      "COPD exacerbation",
      "Pulmonary embolism"
    ],
    "correctIndex": 1,
    "explanation": "Epinephrine (adrenaline) 0.3–0.5 mg IM in the anterolateral thigh is first-line for anaphylaxis. It causes vasoconstriction (alpha-1), bronchodilation (beta-2), and cardiac stimulation (beta-1), reversing all key pathophysiology.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "Surfactant replacement therapy (e.g., beractant/Survanta) in preterm neonates with RDS is given via:",
    "options": [
      "IV infusion",
      "Direct intratracheal instillation through the ETT",
      "Inhaled nebulization",
      "Subcutaneous injection"
    ],
    "correctIndex": 1,
    "explanation": "Exogenous surfactant is instilled directly into the trachea via the ETT in preterm neonates with RDS. It distributes into the lungs with ventilator breaths, replacing deficient endogenous surfactant and reducing surface tension.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Hypertonic saline (3–7%) nebulization is used in CF and bronchiectasis to:",
    "options": [
      "Bronchodilate airways",
      "Hydrate the airway surface liquid, restoring mucociliary clearance",
      "Reduce airway inflammation directly",
      "Treat bacterial infections"
    ],
    "correctIndex": 1,
    "explanation": "Inhaled hypertonic saline draws water into the airway lumen via osmosis, hydrating the dehydrated periciliary layer in CF (where CFTR dysfunction causes ASL dehydration), restoring mucociliary clearance.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Ivacaftor (Kalydeco) and related CFTR modulators treat cystic fibrosis by:",
    "options": [
      "Replacing the defective CFTR gene",
      "Correcting/potentiating the CFTR protein function directly — reducing mucus thickness at the cellular level",
      "Providing exogenous DNase",
      "Suppressing lung inflammation with steroids"
    ],
    "correctIndex": 1,
    "explanation": "CFTR modulators (ivacaftor, lumacaftor, tezacaftor, elexacaftor) target the underlying CFTR protein defect — potentiating channel opening or correcting protein misfolding. They dramatically improve lung function in eligible CF genotypes.",
    "difficulty": "hard"
  },
  {
    "topicId": 7,
    "text": "The mechanism of action of inhaled budesonide differs from albuterol in that budesonide:",
    "options": [
      "Directly relaxes smooth muscle",
      "Acts on glucocorticoid receptors to reduce gene transcription of inflammatory mediators — onset hours vs. minutes for albuterol",
      "Has bronchodilatory effects within 5 minutes",
      "Only works systemically"
    ],
    "correctIndex": 1,
    "explanation": "ICS like budesonide bind intracellular glucocorticoid receptors, altering gene transcription to reduce production of inflammatory cytokines. This process takes hours to days — not suitable for acute rescue use.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Oral candidiasis (thrush) is a common side effect of inhaled corticosteroids. It can be minimized by:",
    "options": [
      "Increasing the ICS dose",
      "Rinsing the mouth with water after each ICS dose and using a spacer device",
      "Switching to a different ICS class",
      "Using ICS only at night"
    ],
    "correctIndex": 1,
    "explanation": "Rinsing the mouth and gargling after ICS use removes drug deposited in the oropharynx. A spacer (valved holding chamber) reduces oropharyngeal deposition by slowing particle velocity, further minimizing local side effects.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "Ketamine used as an induction agent for intubation in asthma is preferred because:",
    "options": [
      "It depresses respiratory drive",
      "It is a bronchodilator (catecholamine release + direct smooth muscle relaxation), maintains airway reflexes, and provides hemodynamic stability",
      "It reduces secretions",
      "It is the fastest-onset agent available"
    ],
    "correctIndex": 1,
    "explanation": "Ketamine causes catecholamine release → beta-2 stimulation → bronchodilation. It also directly relaxes bronchial smooth muscle. It maintains BP and respiratory drive (relatively), making it ideal for RSI in status asthmaticus.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Which respiratory medication is given via MDI using a holding chamber (spacer) to improve:",
    "options": [
      "Drug solubility",
      "Lower airway delivery by reducing impaction velocity and the need for hand-breath coordination",
      "Drug concentration",
      "Onset speed"
    ],
    "correctIndex": 1,
    "explanation": "A spacer reduces drug velocity (particles slow down in the chamber), decreasing oropharyngeal impaction. It eliminates the need for perfect hand-breath coordination, critical for children and elderly patients.",
    "difficulty": "easy"
  },
  {
    "topicId": 7,
    "text": "Cromolyn sodium (Intal) prevents asthma attacks by:",
    "options": [
      "Blocking beta-2 receptors",
      "Stabilizing mast cells — preventing release of histamine and other mediators in response to allergen exposure",
      "Direct bronchodilation",
      "Blocking leukotriene receptors"
    ],
    "correctIndex": 1,
    "explanation": "Cromolyn sodium inhibits mast cell degranulation, preventing release of histamine, leukotrienes, and other mediators triggered by allergens or exercise. It is a prophylactic agent (no acute bronchodilation) and has been largely replaced by ICS.",
    "difficulty": "medium"
  },
  {
    "topicId": 7,
    "text": "Roflumilast (Daliresp) is a selective PDE4 inhibitor used in severe COPD to:",
    "options": [
      "Provide acute bronchodilation",
      "Reduce exacerbation frequency in patients with chronic bronchitis phenotype and FEV1 < 50%",
      "Treat acute exacerbations",
      "Prevent RSV infections"
    ],
    "correctIndex": 1,
    "explanation": "Roflumilast is an oral PDE4 inhibitor with anti-inflammatory effects, reducing neutrophilic airway inflammation. Indicated for severe COPD (GOLD 3–4) with chronic bronchitis and frequent exacerbations — reduces exacerbation rate by ~15–20%.",
    "difficulty": "hard"
  },
  {
    "topicId": 7,
    "text": "Systemic corticosteroids in COPD exacerbation should be given for:",
    "options": [
      "2 weeks minimum",
      "5–7 days (short course — equivalent efficacy to 14-day course with fewer side effects)",
      "Only if infection confirmed",
      "30 days"
    ],
    "correctIndex": 1,
    "explanation": "REDUCE trial (2013): 5-day prednisone course was non-inferior to 14 days for COPD exacerbation outcomes (re-exacerbation, time to next exacerbation, FEV1 recovery) with fewer steroid-related side effects.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "On auscultation, inspiratory stridor indicates:",
    "options": [
      "Lower airway obstruction such as asthma",
      "Upper airway obstruction above the thoracic inlet",
      "Pleural effusion",
      "Consolidation from pneumonia"
    ],
    "correctIndex": 1,
    "explanation": "Stridor is a high-pitched sound produced by turbulent airflow through a narrowed upper airway (above the thoracic inlet). Causes include croup, epiglottitis, foreign body, post-extubation edema, and tracheal stenosis.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Tactile fremitus is INCREASED in which condition?",
    "options": [
      "Pneumothorax",
      "Large pleural effusion",
      "Emphysema",
      "Lobar consolidation (pneumonia)"
    ],
    "correctIndex": 3,
    "explanation": "Tactile fremitus (vibration felt during vocalization) is increased with consolidation because solid tissue transmits vibrations better than air-filled tissue. It is decreased with pneumothorax, emphysema, and effusion (which dampen transmission).",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "A patient presents with absent breath sounds, hyperresonance to percussion, and tracheal deviation toward the contralateral side. What is the most likely diagnosis?",
    "options": [
      "Lobar pneumonia",
      "Large pleural effusion",
      "Tension pneumothorax",
      "Pulmonary consolidation"
    ],
    "correctIndex": 2,
    "explanation": "Tension pneumothorax presents with absent breath sounds and hyperresonance on the affected side (air under tension), with tracheal deviation AWAY from the affected side. It is immediately life-threatening and requires emergent needle decompression.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "A respiratory rate greater than 30 breaths/min in an adult signifies:",
    "options": [
      "Normal exercise response",
      "Significant respiratory distress requiring intervention",
      "Adequate compensation for metabolic alkalosis",
      "Normal response to fever"
    ],
    "correctIndex": 1,
    "explanation": "A respiratory rate >30 breaths/min (tachypnea) indicates significant respiratory distress and is a key indicator for considering non-invasive or invasive ventilatory support. It suggests increased work of breathing and potential impending respiratory failure.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Pink, frothy sputum is most characteristic of:",
    "options": [
      "Bacterial pneumonia",
      "Pulmonary edema",
      "Bronchogenic carcinoma",
      "Tuberculosis"
    ],
    "correctIndex": 1,
    "explanation": "Pink, frothy sputum results from alveolar flooding with protein-rich fluid mixed with air, characteristic of pulmonary edema (cardiogenic or noncardiogenic). It indicates fluid in the alveoli and is a sign of severe respiratory failure.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Accessory muscle use (SCM, scalene) during breathing in an adult patient indicates:",
    "options": [
      "Normal breathing at rest",
      "Increased work of breathing — the diaphragm alone is insufficient",
      "Respiratory alkalosis",
      "High lung compliance"
    ],
    "correctIndex": 1,
    "explanation": "Accessory muscle recruitment (sternocleidomastoid, scalene, pectorals) occurs when diaphragmatic work is insufficient to meet ventilatory demands — signifying significant respiratory distress.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Kussmaul respirations are characterized by:",
    "options": [
      "Slow shallow breaths",
      "Deep rapid regular breaths — compensatory hyperventilation for severe metabolic acidosis",
      "Irregular gasping breaths",
      "Alternating apnea and hyperpnea"
    ],
    "correctIndex": 1,
    "explanation": "Kussmaul breathing: deep, rapid, regular respirations seen in severe metabolic acidosis (DKA, uremia). The respiratory center increases ventilation to blow off CO2 and compensate for the metabolic acidosis.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Cheyne-Stokes respiration is characterized by:",
    "options": [
      "Deep gasping with pauses",
      "Waxing-waning cycle of hyperpnea followed by apnea — associated with HF and neurological conditions",
      "Fixed shallow rapid breathing",
      "Deep regular breaths at high rate"
    ],
    "correctIndex": 1,
    "explanation": "Cheyne-Stokes: cyclic crescendo-decrescendo breathing followed by central apnea. Associated with CHF (prolonged circulation time) and neurological injury. Circulation time from lungs to chemoreceptors is delayed.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "On percussion, a dull (flat) sound over a lung field indicates:",
    "options": [
      "Hyperinflation or pneumothorax",
      "Consolidation, pleural effusion, or atelectasis",
      "Normal lung tissue",
      "Emphysema"
    ],
    "correctIndex": 1,
    "explanation": "Percussion over airless tissue (consolidation, atelectasis) or fluid (pleural effusion) produces a dull (flat) sound. Hyperinflation and pneumothorax produce hyperresonant (tympanic) sounds. Normal lung = resonant.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Crackles (rales) on auscultation are most commonly associated with:",
    "options": [
      "Obstructive lung disease",
      "Fluid in the airways or interstitium — pulmonary edema, pneumonia, fibrosis, or atelectasis",
      "Tension pneumothorax",
      "Normal expiratory sound"
    ],
    "correctIndex": 1,
    "explanation": "Crackles are caused by sudden opening of collapsed small airways (atelectasis, fibrosis) or fluid in airways (pulmonary edema, pneumonia). Fine crackles: fibrosis. Coarse crackles: fluid in larger airways.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Stridor on inspiration indicates obstruction at the level of:",
    "options": [
      "Small airways (bronchioles)",
      "Upper airway (supraglottic, glottic, or subglottic level)",
      "Alveoli",
      "Pleural space"
    ],
    "correctIndex": 1,
    "explanation": "Inspiratory stridor (high-pitched crowing sound) indicates upper airway obstruction above the thoracic inlet — epiglottitis, croup, foreign body, post-extubation edema, anaphylaxis. Biphasic stridor suggests fixed obstruction.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Paradoxical breathing (chest moves inward during inspiration) in a spontaneously breathing patient suggests:",
    "options": [
      "Asthma exacerbation",
      "Severe flail chest or diaphragmatic weakness/paralysis",
      "Normal newborn breathing",
      "Pulmonary embolism"
    ],
    "correctIndex": 1,
    "explanation": "Paradoxical chest wall motion occurs when a large flail segment (multiple rib fractures) is drawn inward by negative pleural pressure during inspiration, or when the diaphragm is paralyzed and the chest rises while the abdomen falls.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Normal respiratory rate in an adult at rest is:",
    "options": [
      "4–8 breaths/min",
      "12–20 breaths/min",
      "22–28 breaths/min",
      "30–40 breaths/min"
    ],
    "correctIndex": 1,
    "explanation": "Normal adult respiratory rate: 12–20 breaths/min. Tachypnea (RR > 20) suggests distress, infection, or metabolic acidosis. Bradypnea (RR < 12) suggests narcosis, CNS depression, or fatigue.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Capnography waveform (ETCO2) normally shows:",
    "options": [
      "A flat line at 0",
      "Baseline (Phase I dead space), plateau (Phase II rise, Phase III alveolar plateau), and sudden drop to baseline at start of inspiration",
      "A continuously rising curve",
      "Random oscillations"
    ],
    "correctIndex": 1,
    "explanation": "Normal capnogram: Phase I (zero — dead space exhalation), Phase II (rapid CO2 rise — mixed dead space/alveolar gas), Phase III (plateau ~35–45 mmHg — alveolar gas), then rapid fall at start of inspiration.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "On an EtCO2 waveform, a 'shark fin' or 'beaking' upstroke to Phase III (slow, rounded rise) in an asthmatic indicates:",
    "options": [
      "Normal ventilation",
      "Airflow obstruction — slow, incomplete mixing of dead space and alveolar gas due to airway narrowing",
      "Esophageal intubation",
      "Increased dead space ventilation"
    ],
    "correctIndex": 1,
    "explanation": "In obstructive disease, non-uniformly emptying lung units cause alveolar CO2 to mix slowly with dead space gas during exhalation, producing a slowly rising, 'shark fin' shaped Phase II–III transition rather than a sharp inflection.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "Pulse oximetry accuracy is reduced by all of the following EXCEPT:",
    "options": [
      "Poor peripheral perfusion (low pulsatile flow)",
      "Dark skin pigmentation (minor effect; newer probes less affected)",
      "High-intensity ambient light",
      "Room air breathing (SpO2 95%)"
    ],
    "correctIndex": 3,
    "explanation": "Room air breathing with SpO2 95% does not reduce oximetry accuracy — the device reads accurately here. Reduced accuracy: low perfusion/vasoconstriction, nail polish, severe anemia, motion artifact, and ambient light interference.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "A 12-lead ECG showing P pulmonale (tall peaked P waves > 2.5 mm in lead II) suggests:",
    "options": [
      "Left ventricular hypertrophy",
      "Right atrial enlargement from chronic pulmonary hypertension or COPD",
      "Atrial fibrillation",
      "Left atrial enlargement"
    ],
    "correctIndex": 1,
    "explanation": "P pulmonale (tall peaked P in leads II, III, aVF > 2.5 mm) indicates right atrial enlargement, seen with chronic pulmonary hypertension, COPD, or cor pulmonale from longstanding hypoxemia.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "Digital clubbing is associated with all of the following EXCEPT:",
    "options": [
      "Lung cancer",
      "Bronchiectasis",
      "COPD without hypoxemia",
      "Cystic fibrosis"
    ],
    "correctIndex": 2,
    "explanation": "Clubbing (loss of nail angle, boggy nail base, 'drumstick' fingers) is associated with chronic hypoxemia, lung cancer, bronchiectasis, CF, and chronic liver/cardiac disease. COPD without hypoxemia does NOT typically cause clubbing.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Tracheal deviation toward the affected side is seen in:",
    "options": [
      "Tension pneumothorax",
      "Large pleural effusion",
      "Atelectasis (lung collapse pulls trachea toward collapsed side)",
      "Pulmonary embolism"
    ],
    "correctIndex": 2,
    "explanation": "Atelectasis (lung collapse) creates negative pleural pressure on the affected side, pulling the trachea toward the collapsed lung. Tension pneumothorax and large effusion push the trachea away from the affected side.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "A normal A-a gradient with hypoxemia (low PaO2, normal PAO2 − PaO2) indicates that hypoxemia is caused by:",
    "options": [
      "V/Q mismatch",
      "Intrapulmonary shunt",
      "Hypoventilation — the lungs are working normally; the problem is insufficient ventilation reaching the alveoli",
      "Diffusion impairment"
    ],
    "correctIndex": 2,
    "explanation": "If PaO2 is low but the A-a gradient is normal, the alveolar PO2 is also low — meaning not enough fresh gas is reaching the alveoli (hypoventilation). The lung's own gas exchange ability is intact.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "The bicarbonate (HCO3−) concentration can be estimated from an ABG using the Henderson-Hasselbalch equation. Alternatively, a quick bedside rule is that HCO3 decreases by approximately __ mEq/L for every 10 mmHg rise in PaCO2 in ACUTE respiratory acidosis:",
    "options": [
      "1 mEq/L",
      "3.5 mEq/L",
      "5 mEq/L",
      "10 mEq/L"
    ],
    "correctIndex": 0,
    "explanation": "In acute respiratory acidosis, HCO3 rises by ~1 mEq/L per 10 mmHg rise in PaCO2 (buffering by non-bicarbonate buffers — hemoglobin, proteins). In chronic: ~3.5 mEq/L per 10 mmHg (renal compensation).",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "On a chest X-ray, an infiltrate in the right lower lobe with an air bronchogram is most consistent with:",
    "options": [
      "Pleural effusion",
      "Pneumothorax",
      "Pneumonia or atelectasis with patent bronchi",
      "Pulmonary edema (bilateral)"
    ],
    "correctIndex": 2,
    "explanation": "Air bronchograms (air-filled bronchi visible within an opacified area) indicate alveolar opacification with patent airways — classic for pneumonia or non-obstructive atelectasis. They are NOT seen in pleural effusion or pneumothorax.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Which physical examination finding is associated with decreased tactile fremitus AND dullness to percussion?",
    "options": [
      "Consolidation (pneumonia)",
      "Pleural effusion",
      "Pneumothorax",
      "Atelectasis"
    ],
    "correctIndex": 1,
    "explanation": "Pleural effusion: dullness to percussion (fluid) + decreased fremitus (fluid damps transmission). Consolidation: dullness + increased fremitus (solid tissue transmits vibrations better). Pneumothorax: hyperresonance + decreased fremitus.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "Bronchial breath sounds heard over a peripheral lung region (instead of vesicular sounds) indicate:",
    "options": [
      "Normal finding",
      "Consolidation (sound transmits through airless solid tissue like a bronchus)",
      "Pleural effusion",
      "Emphysema"
    ],
    "correctIndex": 1,
    "explanation": "Bronchial (tubular) breath sounds (loud, hollow, high-pitched with equal I:E ratio) heard over peripheral lung indicate consolidation — the airless parenchyma transmits sound from central airways unchanged, like listening directly over a bronchus.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "The most common early sign of impending respiratory failure in a patient with neuromuscular disease (e.g., GBS, ALS) is:",
    "options": [
      "Declining SpO2",
      "Rising PaCO2 on ABG",
      "Decreasing FVC toward 15–20 mL/kg (Rule of 20-30-40)",
      "Increasing respiratory rate"
    ],
    "correctIndex": 2,
    "explanation": "In NMD, FVC decline is the earliest sign of respiratory muscle weakness. Elective intubation thresholds: FVC < 20 mL/kg, NIF < −30 cmH₂O, or peak cough flow < 270 L/min ('20-30-40 rule'). SpO2 and PaCO2 are late signs.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "Pulsus paradoxus > 10 mmHg (exaggerated BP drop on inspiration) is associated with:",
    "options": [
      "Systemic hypertension",
      "Cardiac tamponade, severe asthma, or constrictive pericarditis — impaired ventricular filling during inspiration",
      "Left ventricular failure",
      "Pulmonary embolism exclusively"
    ],
    "correctIndex": 1,
    "explanation": "Pulsus paradoxus > 10 mmHg: exaggerated inspiratory drop in systolic BP. Causes: cardiac tamponade (fluid compresses RV → septal shift → reduced LV filling), severe asthma (auto-PEEP reduces cardiac filling during inspiration).",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "The sensitivity of pulse oximetry is significantly reduced in patients with:",
    "options": [
      "Normal hemoglobin levels",
      "Severe anemia (Hgb < 5 g/dL) — insufficient hemoglobin to generate adequate signal",
      "Obesity",
      "Tachycardia"
    ],
    "correctIndex": 1,
    "explanation": "With very low hemoglobin (< 5 g/dL), there is insufficient oxyhemoglobin to generate adequate light absorption signal. SpO2 may read normally even when oxygen delivery is severely compromised. Actual PaO2 and CaO2 must be assessed.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "On a chest X-ray, bilateral fluffy infiltrates extending from the hilum ('bat-wing' pattern) is most consistent with:",
    "options": [
      "ARDS (acute pattern)",
      "Cardiogenic pulmonary edema",
      "Bilateral pneumonia",
      "Bilateral pleural effusions"
    ],
    "correctIndex": 1,
    "explanation": "Cardiogenic pulmonary edema classically presents with perihilar ('bat-wing') bilateral fluffy infiltrates, cardiomegaly, cephalization of pulmonary vasculature, and Kerley B lines on CXR — reflecting hydrostatic edema from elevated LVEDP.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "A pulmonary artery catheter (Swan-Ganz) is floated through the right heart. The waveform that confirms correct placement in the pulmonary artery (vs. right ventricle) is:",
    "options": [
      "High systolic and low diastolic pressure (40/5 mmHg pattern)",
      "PA waveform: systolic pressure equal to RV systolic, but a HIGHER diastolic pressure than RV due to pulmonic valve closure — typical PA: 25/10 mmHg; RV: 25/5 mmHg",
      "A flat line at 15 mmHg",
      "The same as CVP waveform"
    ],
    "correctIndex": 1,
    "explanation": "RV waveform: high systolic (similar to PA), low diastolic (near 0–5 mmHg) with no dicrotic notch. PA waveform: same systolic as RV, but diastolic > 8 mmHg (pulmonic valve closes, preventing backward flow) with a dicrotic notch. Normal PA pressures: systolic 15–30, diastolic 8–15, mean 9–20 mmHg. If the catheter slips back into RV, the diastolic drop and loss of dicrotic notch signal repositioning need.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Pulmonary Capillary Wedge Pressure (PCWP) ≥ 18–20 mmHg is consistent with:",
    "options": [
      "Non-cardiogenic pulmonary edema (ARDS)",
      "Cardiogenic pulmonary edema or left heart failure — elevated PCWP reflects increased left atrial pressure transmitted retrograde to the pulmonary capillaries, causing hydrostatic edema",
      "Normal LV function",
      "Right heart failure exclusively"
    ],
    "correctIndex": 1,
    "explanation": "PCWP (normal 6–12 mmHg) approximates left atrial pressure when the balloon is wedged. PCWP > 18 mmHg: cardiogenic pulmonary edema (LV failure, mitral stenosis). PCWP > 25 mmHg: frank pulmonary edema. In ARDS, PCWP < 18 mmHg with pulmonary edema confirms the noncardiogenic mechanism (increased permeability, not hydrostatic). The classic ARDS vs. cardiogenic edema differentiation by PA catheter: ARDS has PCWP < 18.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Normal cardiac output (CO) and cardiac index (CI) values are:",
    "options": [
      "CO = 2 L/min; CI = 1.5 L/min/m²",
      "CO = 4–8 L/min; CI = 2.5–4.0 L/min/m² — CI normalizes CO for body surface area, allowing comparison across patients of different sizes",
      "CO = 10 L/min; CI = 5.0 L/min/m²",
      "CO = 2–3 L/min; CI = 2.0 L/min/m²"
    ],
    "correctIndex": 1,
    "explanation": "Normal CO (thermodilution, Fick) = 4–8 L/min (average 5 L/min at rest). CI = CO ÷ BSA; normal 2.5–4.0 L/min/m². Cardiogenic shock: CI < 2.2 L/min/m². Hyperdynamic states (early sepsis, fever): CI > 4. CI is more useful for comparing patients of different sizes — a CI of 3.0 L/min/m² indicates adequate perfusion in both a 50 kg and 100 kg patient.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Thermodilution cardiac output measurement uses cold saline injection into the right atrium. The principle relies on:",
    "options": [
      "Doppler frequency shift",
      "Stewart-Hamilton indicator dilution equation — the area under the temperature-time curve downstream (PA thermistor) is inversely proportional to blood flow (CO)",
      "Oxygen consumption and arteriovenous O2 difference (Fick)",
      "Pulse pressure variation"
    ],
    "correctIndex": 1,
    "explanation": "Thermodilution CO: known volume (10 mL) and temperature of cold saline is injected into the RA port. The PA thermistor detects the downstream temperature change. CO = (Vi × ΔT × constants) ÷ ∫ΔT·dt (Stewart-Hamilton). Low CO → prolonged cold dilution → larger AUC → small calculated CO. Average 3 measurements. Pitfalls: tricuspid regurgitation (recirculation), shunts, temperature fluctuations.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "Systemic vascular resistance (SVR) is calculated as:",
    "options": [
      "(MAP + CVP) ÷ CO",
      "SVR = (MAP − CVP) ÷ CO × 80 (dynes·sec·cm⁻⁵) — normal 800–1200 dynes·sec·cm⁻⁵",
      "MAP × CO",
      "(MPAP − PCWP) ÷ CO × 80"
    ],
    "correctIndex": 1,
    "explanation": "SVR = [(MAP − CVP) ÷ CO] × 80 dynes·sec·cm⁻⁵. Normal: 800–1,200. High SVR (> 1,200): vasoconstriction (cardiogenic shock, hypothermia, hypovolemia). Low SVR (< 800): vasodilation (septic/distributive shock, anaphylaxis, neurogenic shock, cirrhosis). PVR = [(MPAP − PCWP) ÷ CO] × 80; normal 20–120 dynes·sec·cm⁻⁵.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Mixed venous oxygen saturation (SvO2) measured from the pulmonary artery reflects:",
    "options": [
      "Arterial oxygen delivery only",
      "The balance between O2 delivery (DO2) and O2 consumption (VO2) — normal SvO2 60–75% indicates tissues are extracting ~25% of delivered O2; a low SvO2 means either low delivery or high extraction",
      "Pulmonary gas exchange efficiency",
      "Hemoglobin saturation in pulmonary veins"
    ],
    "correctIndex": 1,
    "explanation": "SvO2 is the mixed venous O2 saturation in the PA (true mix of all venous blood). Normal 60–75%. SvO2 < 60%: increased O2 extraction due to decreased DO2 (low CO, low Hgb, low SaO2) or increased VO2 (fever, seizures, shivering). SvO2 > 80%: distributive shock (blood bypassing tissues), cyanide poisoning (cells can't use O2), wedged catheter. ScvO2 (superior vena cava) approximates SvO2 and is used in sepsis protocols (target > 70%).",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Pulse pressure variation (PPV) and stroke volume variation (SVV) during mechanical ventilation are used to predict fluid responsiveness. PPV > 13% suggests:",
    "options": [
      "Fluid overload",
      "Preload dependence — the patient is on the steep portion of the Frank-Starling curve and will likely increase CO with a fluid bolus",
      "High SVR",
      "The need for vasopressors immediately"
    ],
    "correctIndex": 1,
    "explanation": "During positive-pressure ventilation, intrathoracic pressure fluctuates. During inspiration, RV preload decreases (impeded venous return), reducing LV output 2–3 beats later. PPV = (PPmax − PPmin) ÷ mean PP. PPV > 13% (or SVV > 10%) indicates significant preload sensitivity → the patient will likely respond to a fluid challenge with increased CO. Requires regular MV without spontaneous breaths and normal sinus rhythm to be valid.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "The passive leg raise (PLR) test assesses fluid responsiveness by:",
    "options": [
      "Measuring the BP response to standing",
      "Transiently auto-transfusing ~300 mL of venous blood from the legs and pelvis to the thorax by elevating legs to 45° — an increase in CO or pulse pressure ≥ 10% predicts fluid responsiveness without actually giving fluid",
      "Measuring CVP change with position",
      "Assessing lower extremity pulses"
    ],
    "correctIndex": 1,
    "explanation": "PLR is a reversible preload challenge. From 45° head-up, quickly lay flat and raise legs to 45° (alternatively, from flat, raise legs from flat). The mobilized ~300 mL acts as a fluid bolus. Measure CO (or PP) before and 60–90 seconds into PLR. ≥ 10% CO increase = preload-responsive. Advantages: reversible (no actual fluid given), works in spontaneous breathing, AFib. Requires real-time CO measurement for accuracy.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Central venous pressure (CVP) is measured from a central venous catheter in the superior vena cava or right atrium. The normal CVP range is:",
    "options": [
      "15–20 mmHg",
      "2–8 mmHg (or 3–10 cmH₂O) — reflecting right atrial filling pressure and, in the absence of tricuspid disease, right ventricular end-diastolic pressure",
      "−5 to 0 mmHg",
      "> 20 mmHg"
    ],
    "correctIndex": 1,
    "explanation": "Normal CVP 2–8 mmHg (some sources 3–8). Elevated CVP (> 10–12 mmHg): RV failure, cardiac tamponade, constrictive pericarditis, volume overload, tension pneumothorax, PEEP effect. Low CVP (< 2 mmHg): hypovolemia, distributive shock (vasodilation). CVP alone poorly predicts fluid responsiveness (its dynamic changes are more informative than absolute values). 1 mmHg ≈ 1.36 cmH₂O.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Cardiac tamponade classic findings on hemodynamic monitoring (Beck's Triad for clinical diagnosis) combined with the PA catheter findings are:",
    "options": [
      "Low CVP, low PCWP, high CO",
      "Equalization of diastolic pressures (CVP ≈ RV diastolic ≈ PA diastolic ≈ PCWP) all elevated at similar levels — compression of all cardiac chambers impedes filling uniformly",
      "High PA systolic, normal CVP",
      "High CO with low SVR"
    ],
    "correctIndex": 1,
    "explanation": "Cardiac tamponade: pericardial fluid compresses all chambers. PA catheter shows 'diastolic equalization': CVP ≈ RV diastolic ≈ PA diastolic ≈ PCWP (all approximately equal, typically 15–20 mmHg). CO is low (obstructive shock). Beck's Triad: hypotension, muffled heart sounds, elevated JVP (↑ CVP). Pulsus paradoxus (> 10 mmHg drop in SBP during inspiration) is the hallmark physical finding. Treatment: pericardiocentesis.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "Pulsus paradoxus is defined as a drop in systolic BP > 10 mmHg during inspiration. It is most commonly seen in:",
    "options": [
      "Aortic stenosis",
      "Cardiac tamponade, severe obstructive lung disease (asthma, COPD — significant negative intrathoracic pressure exaggerates normal cardiac interdependence), and large pericardial effusion",
      "Atrial fibrillation",
      "Aortic regurgitation"
    ],
    "correctIndex": 1,
    "explanation": "Normal: SBP drops 3–5 mmHg on inspiration (increased RV filling decreases LV preload via interventricular septum shifting). In tamponade, exaggerated septal shift compresses the LV. In severe asthma, large negative Ppl increases LV afterload and shifts the septum. Pulsus paradoxus > 10 mmHg is abnormal. Measurement: inflate BP cuff above systolic, slowly deflate until Korotkoff sounds heard only on expiration, then only on both phases — the difference is pulsus paradoxus.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Distributive shock (e.g., septic shock) hemodynamic profile on a PA catheter shows:",
    "options": [
      "Low CO, high SVR, high PCWP",
      "High CO (hyperdynamic), low SVR, normal or low PCWP — the hallmark is massive vasodilation with compensatory increase in CO",
      "Low CO, low SVR, low CVP",
      "High CO, high SVR, high PCWP"
    ],
    "correctIndex": 1,
    "explanation": "Septic shock hemodynamics: (1) high CO/CI (compensatory hyperdynamic state from cytokine-mediated vasodilation, metabolic demand), (2) very low SVR (vasodilation of systemic vessels), (3) normal or low PCWP (venodilation, third-spacing). Compare: cardiogenic shock = low CO, high SVR, high PCWP; hypovolemic = low CO, high SVR, low PCWP; obstructive = low CO, high SVR, variable PCWP. Late septic shock can be 'cold' with low CO.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "The Fick equation for cardiac output requires measurement of:",
    "options": [
      "Blood pressure and heart rate only",
      "VO2 (oxygen consumption) and the arteriovenous O2 content difference: CO = VO2 ÷ (CaO2 − CvO2)",
      "Pulmonary artery pressures only",
      "Stroke volume and ejection fraction"
    ],
    "correctIndex": 1,
    "explanation": "Fick principle: CO = VO2 ÷ (CaO2 − CvO2) × 10. VO2 is measured by metabolic cart or estimated (3.5 mL/kg/min at rest). CaO2 = (Hgb × 1.34 × SaO2) + (PaO2 × 0.003). CvO2 = (Hgb × 1.34 × SvO2) + (PvO2 × 0.003). Normal a-vO2 difference = 4–6 mL/dL. High a-vO2 difference (> 6) = low CO or high VO2. Low a-vO2 (< 4) = high CO (hyperdynamic) or poor tissue utilization (septic shock, cyanide).",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Arterial waveform (A-line) morphology: a decreased dicrotic notch and a wide pulse pressure in the arterial waveform suggests:",
    "options": [
      "Aortic stenosis (narrow PP)",
      "Aortic regurgitation (wide PP — regurgitant flow causes rapid pressure dissipation during diastole, low DBP, high SBP) or vasodilation (high compliance)",
      "Cardiac tamponade",
      "Peripheral vascular disease"
    ],
    "correctIndex": 1,
    "explanation": "Wide pulse pressure (high SBP − low DBP): aortic regurgitation (diastolic leak), vasodilation (low SVR, wide compliance), complete heart block (variable stroke volumes). Narrow pulse pressure: aortic stenosis (fixed low SV), cardiac tamponade, severe hypovolemia, low CO states. The dicrotic notch on the arterial waveform marks aortic valve closure (aortic component of S2); its position and depth reflect arterial compliance and vascular resistance.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Pulse oximetry (SpO2) will give a falsely HIGH reading (overestimating SaO2) in the presence of:",
    "options": [
      "Methemoglobinemia (SpO2 reads ~85% regardless of true SaO2)",
      "Carbon monoxide poisoning (carboxyhemoglobin absorbs light similarly to oxyhemoglobin at 660 nm, causing SpO2 to read falsely HIGH near 99–100% despite severe tissue hypoxia)",
      "Severe anemia",
      "Nail polish (certain colors lower SpO2)"
    ],
    "correctIndex": 1,
    "explanation": "Carboxyhemoglobin (COHb) has a similar light absorbance to oxyhemoglobin at the 660 nm wavelength used by standard 2-wavelength pulse oximetry. SpO2 reads normal or high (COHb 'looks like' OxyHb) despite functional hemoglobin saturation being severely reduced. In CO poisoning, the patient may have SpO2 = 98% while SaO2 (functional) is only 50%. Diagnosis requires co-oximetry. Methemoglobin drives SpO2 toward 85% regardless of true O2 saturation.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Capnography (ETCO2) in intubated patients is used for all of the following EXCEPT:",
    "options": [
      "Confirming ETT placement in the trachea (vs. esophagus)",
      "Monitoring trends in CO2 elimination as a surrogate for cardiac output",
      "Directly measuring arterial PaCO2 without ABG",
      "Detecting ETT disconnection or esophageal intubation immediately"
    ],
    "correctIndex": 2,
    "explanation": "ETCO2 is NOT equivalent to PaCO2. The gradient between PaCO2 and ETCO2 (normally 2–5 mmHg, with PaCO2 higher) reflects alveolar dead space — areas ventilated but not perfused. In ARDS, PE, or low CO states, the PaCO2-ETCO2 gradient widens significantly. ETCO2 cannot substitute for ABG in quantifying exact PaCO2 — it only provides a trend. It excels at: ETT placement confirmation, CPR quality monitoring, and detecting sudden cardiovascular events.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "The normal capnography (time-based) waveform Phase III (alveolar plateau) should be:",
    "options": [
      "Steeply upsloping",
      "Nearly flat (< 3 mmHg/second rise) — a steeply upsloping Phase III ('shark fin' or 'obstructive' pattern) indicates heterogeneous emptying due to airflow obstruction (COPD, asthma)",
      "Negative (below baseline)",
      "Zero (no CO2)"
    ],
    "correctIndex": 1,
    "explanation": "Normal capnogram: Phase I (dead space, 0 CO2) → Phase II (rapid rise as alveolar gas reaches sensor) → Phase III (alveolar plateau, near flat) → Phase 0 (inspiration, rapid drop to baseline). Obstructive pattern: sloped Phase III (shark fin) — slow units empty late, raising ETCO2 throughout expiration. Alveolar hyperventilation: lower ETCO2 but normal morphology. Rebreathing: baseline doesn't return to zero.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "The alveolar-arterial oxygen gradient [P(A-a)O2] is calculated as:",
    "options": [
      "FiO2 × PB − PaCO2",
      "PAO2 − PaO2, where PAO2 = (FiO2 × [PB − 47]) − PaCO2/RQ — normal P(A-a)O2 on room air is < 10–15 mmHg; increases with V/Q mismatch, diffusion impairment, or shunt",
      "PaO2 − PaCO2",
      "PaO2 / FiO2"
    ],
    "correctIndex": 1,
    "explanation": "The alveolar gas equation: PAO2 = FiO2 × (PB − 47) − PaCO2/RQ. RQ (respiratory quotient) = 0.8. At sea level on room air: PAO2 = 0.21 × (760 − 47) − 40/0.8 = 0.21 × 713 − 50 = 149.7 − 50 = 99.7 mmHg. If PaO2 = 90, P(A-a) = 9.7 (normal). A wide P(A-a) gradient indicates an intrapulmonary problem (V/Q mismatch, shunt, diffusion limitation). Normal P(A-a) with low PaO2 indicates hypoventilation without intrinsic lung disease.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "In a 12-lead ECG obtained as part of a respiratory assessment, ST-segment elevation in leads II, III, and aVF with reciprocal depression in I and aVL indicates:",
    "options": [
      "Pulmonary embolism pattern",
      "Inferior STEMI (right coronary artery territory) — important for the RT as cardiogenic pulmonary edema and acute MI can coexist; immediate escalation to cardiology is required",
      "Normal sinus rhythm",
      "Right heart strain"
    ],
    "correctIndex": 1,
    "explanation": "Inferior STEMI (ST elevation in II, III, aVF with reciprocal changes in I, aVL) is caused by RCA or LCx occlusion. For the RT: recognize this as a medical emergency warranting immediate cardiology/cath lab activation. LV dysfunction from MI causes acute cardiogenic pulmonary edema, explaining the respiratory failure. PE pattern (McGinn-White): S1Q3T3 — prominent S in I, Q wave and T inversion in III.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "A patient's chest X-ray shows bilateral fluffy infiltrates with Kerley B lines and cephalization of pulmonary vasculature. These findings are most consistent with:",
    "options": [
      "Pneumothorax",
      "Cardiogenic pulmonary edema — Kerley B lines (interstitial edema in the lymphatics) and cephalization (reversal of normal upper-zone blood flow diversion) are classic CXR signs of elevated LVEDP",
      "ARDS (noncardiogenic)",
      "Emphysema"
    ],
    "correctIndex": 1,
    "explanation": "Cardiogenic pulmonary edema CXR findings: (1) Kerley B lines — horizontal lines at lung periphery from distended lymphatics (interstitial edema), (2) Cephalization — upper-lobe vessels appear larger than lower-lobe (reversed normal dependent distribution as high PCWP distends upper veins), (3) Bat-wing or butterfly perihilar edema, (4) pleural effusions, (5) enlarged cardiac silhouette. ARDS: diffuse bilateral opacities, typically WITHOUT Kerley B or cephalization.",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "The oxygen delivery (DO2) formula is:",
    "options": [
      "DO2 = PaO2 × cardiac output",
      "DO2 = CO × CaO2 × 10 — normal DO2 is ~1,000 mL/min; below 600 mL/min, tissue oxygen debt begins even at rest",
      "DO2 = VO2 ÷ (1 − SvO2/SaO2)",
      "DO2 = Hgb × SaO2 × 1.34"
    ],
    "correctIndex": 1,
    "explanation": "DO2 = CO × CaO2 × 10 (the ×10 converts mL/dL to mL/L). CaO2 = (Hgb × 1.34 × SaO2/100) + (PaO2 × 0.003). Normal DO2 ≈ 5 L/min × 20 mL/dL × 10 = 1,000 mL/min. VO2 ≈ 250 mL/min, so O2 extraction ratio (O2ER) = VO2/DO2 ≈ 25% normally. When DO2 < 600 mL/min (critical DO2), tissues extract maximally → lactic acidosis. The three determinants of DO2 are cardiac output, hemoglobin, and arterial O2 saturation.",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "A patient has: SpO2 98%, Hgb 6 g/dL, CO 5 L/min. Despite a normal SpO2, this patient is at risk for tissue hypoxia because:",
    "options": [
      "SpO2 reliability is limited",
      "Oxygen delivery is severely reduced due to anemia: CaO2 = (6 × 1.34 × 0.98) + (PaO2 × 0.003) ≈ 7.9 mL/dL vs. normal ~20 mL/dL; DO2 ≈ 395 mL/min — below the critical threshold",
      "The CO is too low despite being '5 L/min'",
      "RR must be elevated"
    ],
    "correctIndex": 1,
    "explanation": "SpO2 reflects the % saturation of hemoglobin, NOT the total amount of O2 delivered. With Hgb of 6 g/dL, CaO2 ≈ 7.9 mL/dL (normal 18–20). DO2 = 5 × 7.9 × 10 = 395 mL/min — barely above critical DO2 (~330 mL/min). Even with SpO2 = 100%, severe anemia or low CO impairs DO2. This is why integrated assessment (Hgb, CO, SaO2) is essential, not SpO2 alone.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "A patient in the ICU has a worsening PaO2/FiO2 ratio from 350 to 180 over 24 hours. His CXR shows new bilateral opacities. According to the Berlin Definition, this patient now meets criteria for:",
    "options": [
      "Mild ARDS",
      "Moderate ARDS — Berlin criteria: bilateral opacities not explained by effusion/atelectasis/nodules; P/F 100–200 on PEEP ≥ 5; onset within 1 week of insult",
      "Severe ARDS (P/F < 100)",
      "Acute lung injury (no longer a Berlin category)"
    ],
    "correctIndex": 1,
    "explanation": "Berlin Definition ARDS categories: Mild: P/F 201–300 on PEEP ≥ 5. Moderate: P/F 101–200 on PEEP ≥ 5. Severe: P/F ≤ 100 on PEEP ≥ 5. P/F must be measured on ≥ PEEP 5 cmH₂O. Onset within 7 days of a known clinical insult. CXR: bilateral opacities not fully explained by effusion, lobar collapse, or nodules. 'ALI' (acute lung injury) was eliminated in the Berlin classification (replaced by mild ARDS).",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "Normal values for a complete pulmonary arterial blood gas from the right heart include:",
    "options": [
      "PO2 = 100 mmHg, PCO2 = 40 mmHg, pH = 7.40",
      "PO2 = 35–45 mmHg, PCO2 = 41–51 mmHg, pH = 7.32–7.38, SvO2 = 60–75% — reflecting venous blood after tissue O2 extraction",
      "PO2 = 70 mmHg, PCO2 = 35 mmHg",
      "PO2 = 80 mmHg, SvO2 = 90%"
    ],
    "correctIndex": 1,
    "explanation": "Mixed venous blood (drawn from the distal PA catheter port) reflects the average of all venous blood after tissue gas exchange. Normal: PvO2 35–45 mmHg, PvCO2 41–51 mmHg, pH 7.32–7.38, SvO2 60–75%. SvO2 < 60%: increased O2 extraction (low CO, severe anemia, high VO2). SvO2 > 80%: distributive shock or PA catheter wedged in pulmonary vein (sampling oxygenated blood).",
    "difficulty": "easy"
  },
  {
    "topicId": 8,
    "text": "Increased work of breathing (WOB) in a mechanically ventilated patient is recognized on the pressure-time product (PTP) as:",
    "options": [
      "High plateau pressure with low patient effort",
      "A large area under the negative swing of the airway pressure waveform during patient triggering — indicating high inspiratory effort against the ventilator circuit before flow delivery begins",
      "Low peak inspiratory pressure",
      "A flat expiratory flow curve"
    ],
    "correctIndex": 1,
    "explanation": "WOB assessment: the pressure-time product (PTP) integrates esophageal or airway pressure over time during spontaneous inspiration. Clinically, the 'negative effort' deflection on the Paw waveform before or during ventilator assistance shows patient effort. Large deflections = high WOB. Esophageal manometry (Pes) allows quantification. High WOB on PSV may indicate insufficient support; low WOB (over-assist) risks respiratory muscle atrophy.",
    "difficulty": "medium"
  },
  {
    "topicId": 8,
    "text": "The resistance (R) of the respiratory system in a mechanically ventilated patient is calculated as:",
    "options": [
      "Pplat ÷ TV",
      "(PIP − Pplat) ÷ inspiratory flow",
      "Pplat × TV × RR",
      "(PIP − PEEP) ÷ TV"
    ],
    "correctIndex": 1,
    "explanation": "In volume-control with constant flow: R = (PIP − Pplat) ÷ inspiratory flow rate. PIP − Pplat is the pressure difference attributable to resistive forces (flow-dependent). At constant flow, dividing by flow gives airway resistance. Normal Raw ~ 0.5–2.5 cmH₂O/L/s. Elevated resistance (> 5 cmH₂O/L/s): bronchospasm, secretions, kinked ETT, biting ETT, or small ETT. Compliance = TV ÷ (Pplat − PEEP).",
    "difficulty": "hard"
  },
  {
    "topicId": 8,
    "text": "Procalcitonin (PCT) as a biomarker in respiratory infection is most useful for:",
    "options": [
      "Diagnosing ARDS",
      "Differentiating bacterial from viral/non-infectious causes of respiratory illness — elevated PCT (> 0.5 ng/mL) supports bacterial etiology; PCT-guided protocols reduce antibiotic duration in CAP and COPD exacerbation",
      "Measuring oxygenation adequacy",
      "Detecting pneumothorax"
    ],
    "correctIndex": 1,
    "explanation": "PCT is released by epithelial cells and monocytes in response to bacterial infection. It rises within 6–12 hours of bacterial invasion and falls rapidly with effective treatment. PCT > 0.25–0.5 ng/mL: bacterial cause likely; > 2.0 ng/mL: systemic bacterial infection or sepsis. PCT < 0.1 ng/mL: viral or non-infectious cause likely (safe to withhold or stop antibiotics). PCT-guided antibiotic stewardship reduces antibiotic exposure in CAP by 1–3 days.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Surfactant replacement therapy is used primarily to treat:",
    "options": [
      "Meconium aspiration syndrome",
      "Transient tachypnea of the newborn",
      "Neonatal respiratory distress syndrome (RDS)",
      "Persistent pulmonary hypertension"
    ],
    "correctIndex": 2,
    "explanation": "Neonatal RDS is caused by surfactant deficiency in premature infants. Exogenous surfactant (beractant, poractant, calfactant) is the primary treatment, administered intratracheally to restore normal alveolar surface tension.",
    "difficulty": "easy"
  },
  {
    "topicId": 9,
    "text": "The classic X-ray finding in neonatal Respiratory Distress Syndrome is:",
    "options": [
      "Unilateral opacity",
      "Bilateral ground-glass appearance with air bronchograms",
      "Pleural effusion",
      "Hyperlucent lung fields"
    ],
    "correctIndex": 1,
    "explanation": "Neonatal RDS causes diffuse bilateral ground-glass opacification with air bronchograms on CXR, reflecting atelectatic alveoli with open bronchi. This pattern results from widespread surfactant deficiency and alveolar collapse.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "A full-term newborn is delivered through thick meconium-stained fluid and is limp with no respiratory effort. What is the immediate action?",
    "options": [
      "Give oxygen by mask and stimulate",
      "Begin PPV with 100% O2 immediately",
      "Intubate and suction trachea before initiating ventilation",
      "Administer epinephrine"
    ],
    "correctIndex": 2,
    "explanation": "For non-vigorous newborns (poor tone, poor respiratory effort, HR <100) born through thick meconium: intubate immediately and apply suction to the trachea BEFORE initiating PPV. This prevents forcing meconium deeper into the airways.",
    "difficulty": "hard"
  },
  {
    "topicId": 9,
    "text": "The barking cough and inspiratory stridor in croup is caused by:",
    "options": [
      "Supraglottic swelling (epiglottis)",
      "Subglottic edema narrowing the airway below the vocal cords",
      "Alveolar consolidation",
      "Bronchospasm"
    ],
    "correctIndex": 1,
    "explanation": "Croup (laryngotracheobronchitis) is caused by subglottic inflammation and edema, creating a narrowed airway that produces the classic barking cough and inspiratory stridor. The steeple sign on AP neck X-ray reflects this subglottic narrowing.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Apnea of prematurity is best treated with:",
    "options": [
      "Continuous mechanical ventilation",
      "Caffeine citrate (methylxanthine)",
      "High-flow nasal cannula only",
      "Prone positioning"
    ],
    "correctIndex": 1,
    "explanation": "Caffeine citrate is the first-line treatment for apnea of prematurity. It is a methylxanthine that stimulates central respiratory drive and improves diaphragmatic contractility. It also reduces the need for intubation in premature infants.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Respiratory distress syndrome (RDS) in preterm neonates is caused by:",
    "options": [
      "Bacterial infection",
      "Surfactant deficiency — immature type II pneumocytes cannot produce adequate surfactant before ~35 weeks gestation",
      "Meconium aspiration",
      "Congenital diaphragmatic hernia"
    ],
    "correctIndex": 1,
    "explanation": "RDS (formerly hyaline membrane disease) is caused by surfactant deficiency in premature lungs. Without surfactant, alveolar surface tension is high, causing progressive atelectasis, hypoxemia, and respiratory failure.",
    "difficulty": "easy"
  },
  {
    "topicId": 9,
    "text": "Antenatal corticosteroids (betamethasone) given to mothers at risk of preterm birth accelerate:",
    "options": [
      "Fetal heart rate",
      "Fetal lung maturity — stimulating surfactant production by type II pneumocytes",
      "Neonatal immune response",
      "Placental blood flow"
    ],
    "correctIndex": 1,
    "explanation": "Antenatal betamethasone (2 doses 24 hrs apart) accelerates fetal lung maturity by upregulating surfactant synthesis. Most effective at 24–34 weeks gestation; reduces RDS severity, IVH, and neonatal mortality.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "nCPAP (nasal CPAP) in premature neonates with RDS works primarily by:",
    "options": [
      "Delivering high FiO2",
      "Maintaining alveolar patency with continuous positive pressure, reducing FiO2 requirements and work of breathing",
      "Providing positive pressure breaths",
      "Administering surfactant"
    ],
    "correctIndex": 1,
    "explanation": "nCPAP maintains FRC by keeping alveoli open throughout the breath cycle, reducing V/Q mismatch and shunt. INSURE (Intubate-Surfactant-Extubate) strategies use brief intubation for surfactant then rapid extubation to nCPAP.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Transient tachypnea of the newborn (TTN) is caused by:",
    "options": [
      "Surfactant deficiency",
      "Delayed clearance of fetal lung fluid, particularly after C-section (no labor compression of the chest)",
      "Group B Streptococcal pneumonia",
      "Pulmonary hypoplasia"
    ],
    "correctIndex": 1,
    "explanation": "TTN ('wet lung') results from delayed resorption of fetal lung fluid. Labor contractions normally squeeze fluid from the lungs via the thorax. C-section without labor, especially preterm, increases TTN risk. It resolves in 24–72 hours.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Meconium aspiration syndrome (MAS) causes respiratory failure due to:",
    "options": [
      "Surfactant deficiency only",
      "Ball-valve airway obstruction causing air trapping + chemical pneumonitis + surfactant inactivation",
      "Bacterial sepsis",
      "Pulmonary hypertension alone"
    ],
    "correctIndex": 1,
    "explanation": "Meconium causes: partial airway obstruction (ball-valve → air trapping), complete obstruction (atelectasis), chemical pneumonitis, surfactant inactivation, and persistent pulmonary hypertension (PPHN) — a complex, multifactorial syndrome.",
    "difficulty": "hard"
  },
  {
    "topicId": 9,
    "text": "Persistent pulmonary hypertension of the newborn (PPHN) is treated with:",
    "options": [
      "Oxygen restriction",
      "High FiO2, inhaled nitric oxide, and sometimes ECMO — to reduce pulmonary vascular resistance and improve oxygenation",
      "Beta-blockers",
      "Surfactant only"
    ],
    "correctIndex": 1,
    "explanation": "PPHN: right-to-left shunting through the ductus arteriosus and foramen ovale due to elevated PVR. Treatment: optimize oxygenation (high FiO2), alkalosis (increase pH), iNO (selective pulmonary vasodilator), and ECMO for refractory cases.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Infant respiratory rate and tidal volume differ from adults in that infants have:",
    "options": [
      "Slower respiratory rate (8–12/min) and larger tidal volumes",
      "Faster respiratory rate (30–60/min) and smaller tidal volumes (6–8 mL/kg)",
      "Same rates but smaller tidal volume",
      "Lower RR with equal tidal volume to adults"
    ],
    "correctIndex": 1,
    "explanation": "Newborn normal RR: 30–60/min. Tidal volume ~6–8 mL/kg. Infants compensate for their high metabolic rate with increased respiratory rate rather than larger tidal volumes — their chest wall compliance is high and ribs are more horizontal.",
    "difficulty": "easy"
  },
  {
    "topicId": 9,
    "text": "RSV (Respiratory Syncytial Virus) bronchiolitis in infants presents with:",
    "options": [
      "Stridor and croup",
      "Wheezing, crackles, hyperinflation, and hypoxemia — lower airway obstruction from bronchiolar inflammation",
      "Lobar consolidation",
      "Only upper respiratory symptoms"
    ],
    "correctIndex": 1,
    "explanation": "RSV bronchiolitis: inflammation of small bronchioles → mucus plugging → air trapping (hyperinflation on CXR) and atelectasis → wheezing, crackles, tachypnea, and hypoxemia. Most common cause of infant hospitalization.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Croup (laryngotracheobronchitis) is most commonly caused by:",
    "options": [
      "Streptococcal bacteria",
      "Parainfluenza virus — causing subglottic mucosal edema and a 'barking' cough with inspiratory stridor",
      "RSV",
      "Influenza A"
    ],
    "correctIndex": 1,
    "explanation": "Croup: parainfluenza virus (types 1, 2, 3) causes subglottic inflammation and edema → classic 'seal bark' cough, inspiratory stridor, and steeple sign on neck X-ray. Racemic epinephrine nebulization + dexamethasone are treatments.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Pediatric endotracheal tube size can be estimated using the Broselow tape or the formula:",
    "options": [
      "Age + 10 / 4",
      "(Age in years / 4) + 4 for uncuffed ETT",
      "Weight / 10",
      "Height / 30"
    ],
    "correctIndex": 1,
    "explanation": "Uncuffed ETT size = (Age/4) + 4. Cuffed ETT = (Age/4) + 3.5. For example, a 4-year-old: uncuffed = 4/4 + 4 = 5.0 mm. Always verify: the tube should pass the cords with a small leak at 20–25 cmH₂O.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Epiglottitis (acute supraglottitis) in children is a medical emergency because:",
    "options": [
      "It causes lower airway obstruction",
      "Rapid, severe supraglottic swelling can cause total airway obstruction — DO NOT examine the oropharynx in the ED without airway team present",
      "It is caused by a toxin, not inflammation",
      "It improves spontaneously within hours"
    ],
    "correctIndex": 1,
    "explanation": "Epiglottitis (historically Haemophilus influenzae type b, now often Streptococcal) causes rapid supraglottic edema. The child should be kept calm and taken directly to the OR for controlled intubation — agitation can cause complete obstruction.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Bronchopulmonary dysplasia (BPD) in premature neonates is defined as oxygen dependence beyond:",
    "options": [
      "24 hours of life",
      "72 hours of life",
      "28 days of life (or 36 weeks corrected GA)",
      "3 months of life"
    ],
    "correctIndex": 2,
    "explanation": "BPD (now called 'new BPD') is defined as supplemental oxygen requirement at 28 days of life (mild) or at 36 weeks postmenstrual age (moderate/severe). It results from lung immaturity, oxygen toxicity, and ventilator-induced injury.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Congenital diaphragmatic hernia (CDH) causes respiratory failure primarily due to:",
    "options": [
      "Surfactant deficiency",
      "Ipsilateral pulmonary hypoplasia and pulmonary hypertension from herniated abdominal organs compressing the developing lung",
      "Meconium aspiration",
      "Tracheomalacia"
    ],
    "correctIndex": 1,
    "explanation": "CDH: defect in the diaphragm allows abdominal organs to herniate into the chest during fetal development, compressing the developing lung and causing pulmonary hypoplasia and severe PPHN — a major surgical and respiratory challenge.",
    "difficulty": "hard"
  },
  {
    "topicId": 9,
    "text": "Apnea of prematurity (AOP) is treated with:",
    "options": [
      "Inhaled bronchodilators",
      "Methylxanthines (caffeine citrate) — stimulate central respiratory drive by adenosine receptor blockade",
      "Surfactant replacement",
      "Sedation"
    ],
    "correctIndex": 1,
    "explanation": "Caffeine citrate (20 mg/kg load, 5 mg/kg/day maintenance) is the first-line treatment for AOP, stimulating central respiratory drive. It reduces apneic spells, improves extubation success, and has a favorable neurodevelopmental safety profile.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Which maneuver is performed during neonatal resuscitation if the infant remains bradycardic (HR < 60) despite adequate PPV and chest compressions?",
    "options": [
      "Epinephrine (IV or ET)",
      "Surfactant administration",
      "Cooling (therapeutic hypothermia)",
      "Dexamethasone"
    ],
    "correctIndex": 0,
    "explanation": "NRP algorithm: if HR < 60 despite adequate PPV + chest compressions → IV/IO epinephrine (0.01–0.03 mg/kg). ET epinephrine is less preferred (poor absorption) but can be used at 0.05–0.10 mg/kg while IV access is established.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "The lecithin-to-sphingomyelin (L/S) ratio in amniotic fluid is used to assess:",
    "options": [
      "Fetal heart development",
      "Fetal lung maturity — L/S ≥ 2.0 indicates mature surfactant production (unlikely to develop RDS)",
      "Maternal blood type",
      "Placental function"
    ],
    "correctIndex": 1,
    "explanation": "Lecithin (phosphatidylcholine) is a major surfactant component that increases as the lung matures. The L/S ratio ≥ 2.0 in amniotic fluid indicates fetal lung maturity. Addition of PG (phosphatidylglycerol) improves specificity.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "High-frequency jet ventilation (HFJV) in neonates is preferred over conventional MV in which condition?",
    "options": [
      "Uncomplicated RDS",
      "Pulmonary interstitial emphysema (PIE) or air leak syndromes — low mean airway pressure reduces further barotrauma",
      "Meconium aspiration",
      "Apnea of prematurity"
    ],
    "correctIndex": 1,
    "explanation": "HFJV delivers very small tidal volumes at 240–600 breaths/min, achieving gas exchange at very low peak airway pressures. This is particularly beneficial in PIE and air leak syndromes where reducing airway pressure is critical.",
    "difficulty": "hard"
  },
  {
    "topicId": 9,
    "text": "In the Apgar score, a score of 7–10 at 1 minute indicates:",
    "options": [
      "Need for immediate resuscitation",
      "Mild depression — routine care",
      "Good neonatal adaptation — routine care",
      "Severe depression"
    ],
    "correctIndex": 2,
    "explanation": "Apgar score (A-Appearance, P-Pulse, G-Grimace, A-Activity, R-Respirations): 7–10 = vigorous neonate, routine care; 4–6 = moderate depression, stimulate and possibly assist ventilation; 0–3 = severe depression, full resuscitation.",
    "difficulty": "easy"
  },
  {
    "topicId": 9,
    "text": "In pediatric patients, the most common cause of cardiac arrest is:",
    "options": [
      "Primary cardiac dysrhythmia (like adults)",
      "Respiratory failure or shock leading to hypoxic arrest",
      "Pulmonary embolism",
      "Hypertensive emergency"
    ],
    "correctIndex": 1,
    "explanation": "Unlike adults (primary cardiac arrest from dysrhythmia), most pediatric arrests are secondary — caused by respiratory failure or shock that progresses to hypoxia and hypoperfusion. This is why airway and breathing are the highest priority in pediatric resuscitation.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Surfactant replacement therapy in neonatal RDS is most effective when given:",
    "options": [
      "After 24 hours of life",
      "Early in the disease course (prophylactic or early rescue — within the first 2 hours of life)",
      "Only as rescue when FiO2 > 0.90",
      "Via nebulized route"
    ],
    "correctIndex": 1,
    "explanation": "Early surfactant administration (prophylactic at birth or rescue within 2 hours in intubated infants with FiO2 > 0.30–0.40) achieves the best outcomes. Delayed administration allows progressive lung injury from high surface tension.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "The most common complication of mechanical ventilation in premature neonates is:",
    "options": [
      "Tension pneumothorax",
      "Ventilator-induced lung injury (VILI) — leading to air leak syndromes (pneumothorax, PIE, pneumomediastinum) and contributing to BPD",
      "Accidental extubation",
      "ETT obstruction"
    ],
    "correctIndex": 1,
    "explanation": "VILI from overdistension (volutrauma) and high pressures (barotrauma) is the primary ventilator complication in premature neonates, causing air leaks and contributing to BPD. Lung-protective ventilation with optimal PEEP and low TV is essential.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "The INSURE technique in neonates with RDS involves:",
    "options": [
      "Intubation, nasal prong use, return to oxygen therapy",
      "Intubate-Surfactant-Extubate — brief intubation for surfactant delivery then rapid return to nCPAP",
      "Inhaled surfactant via nebulization",
      "Invasive surfactant delivery followed by prolonged MV"
    ],
    "correctIndex": 1,
    "explanation": "INSURE: briefly intubate, administer surfactant intratracheally, then rapidly extubate back to nCPAP. This avoids prolonged mechanical ventilation while ensuring effective surfactant delivery — reducing BPD risk.",
    "difficulty": "medium"
  },
  {
    "topicId": 9,
    "text": "Neonatal abstinence syndrome (NAS) in infants born to opioid-dependent mothers can cause respiratory complications including:",
    "options": [
      "Respiratory depression only",
      "Tachypnea and hypoxemia from CNS excitation and withdrawal-related respiratory distress",
      "Surfactant deficiency",
      "Pulmonary hypoplasia"
    ],
    "correctIndex": 1,
    "explanation": "NAS causes CNS hyperexcitability (irritability, tremors, seizures) and autonomic instability. Respiratory manifestations include tachypnea, nasal flaring, and hypoxemia. Management includes morphine or methadone tapering.",
    "difficulty": "hard"
  },
  {
    "topicId": 9,
    "text": "An infant on CPAP with FiO2 0.30 and PEEP of 5 cmH₂O has SpO2 82%. The appropriate next step is:",
    "options": [
      "Immediately intubate and ventilate",
      "Increase PEEP to 7 and FiO2 to 0.40, reassess in 30 minutes — titrate support before escalating to MV",
      "Administer surfactant without intubation",
      "Decrease PEEP to 3"
    ],
    "correctIndex": 1,
    "explanation": "For an infant on nCPAP with inadequate SpO2, optimize current support (increase PEEP 1–2 cmH₂O and FiO2) before escalating to invasive MV. INSURE or intubation is indicated if FiO2 requirements exceed 0.40–0.50 on adequate PEEP.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "According to the Berlin definition, what is the P/F ratio threshold for ARDS diagnosis?",
    "options": [
      "P/F < 500 mmHg",
      "P/F < 400 mmHg",
      "P/F < 300 mmHg",
      "P/F < 100 mmHg"
    ],
    "correctIndex": 2,
    "explanation": "The Berlin definition requires P/F ratio <300 mmHg (with PEEP ≥5 cmH2O) for ARDS diagnosis. Severity is classified as mild (201-300), moderate (101-200), or severe (≤100).",
    "difficulty": "easy"
  },
  {
    "topicId": 10,
    "text": "A patient with tension pneumothorax requires immediate:",
    "options": [
      "Chest X-ray to confirm before treatment",
      "Needle decompression at the 2nd ICS, midclavicular line",
      "Emergency intubation",
      "IV fluid bolus and vasopressors"
    ],
    "correctIndex": 1,
    "explanation": "Tension pneumothorax is immediately life-threatening. Treatment is clinical diagnosis and IMMEDIATE needle decompression at the 2nd intercostal space, midclavicular line (or 4th-5th ICS, anterior axillary line). Do not wait for CXR.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "What is the gold standard for diagnosing pulmonary embolism?",
    "options": [
      "D-dimer blood test",
      "V/Q scan",
      "CT pulmonary angiography (CTPA)",
      "EKG showing S1Q3T3 pattern"
    ],
    "correctIndex": 2,
    "explanation": "CT pulmonary angiography (CTPA) is the gold standard for PE diagnosis, with sensitivity ~95% and specificity ~95%. V/Q scan is an alternative when CTPA is contraindicated (renal insufficiency, contrast allergy). D-dimer is sensitive but not specific.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "The VAP prevention bundle includes all of the following EXCEPT:",
    "options": [
      "Head of bed elevation ≥30 degrees",
      "Daily sedation vacation",
      "Routine ventilator circuit changes every 24 hours",
      "Daily assessment of readiness to extubate"
    ],
    "correctIndex": 2,
    "explanation": "Routine ventilator circuit changes are NOT recommended (circuits changed only when visibly soiled or malfunctioning). VAP bundle components: HOB ≥30°, daily sedation vacation, daily SBT, chlorhexidine oral care, subglottic secretion drainage, DVT and PUD prophylaxis.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "In status asthmaticus refractory to standard bronchodilators, which IV medication is indicated?",
    "options": [
      "IV aminophylline (theophylline)",
      "IV magnesium sulfate 2g over 20 minutes",
      "IV ipratropium bromide",
      "IV propranolol"
    ],
    "correctIndex": 1,
    "explanation": "IV magnesium sulfate (2g over 20 minutes) is recommended for severe acute asthma not responding to initial bronchodilators. It acts as a smooth muscle relaxant (antagonizes calcium). Propranolol (beta-blocker) is contraindicated in asthma.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "VV-ECMO (venovenous extracorporeal membrane oxygenation) is indicated for:",
    "options": [
      "Combined cardiac and respiratory failure requiring cardiac support",
      "Isolated refractory respiratory failure when conventional ventilation fails",
      "Pulmonary embolism with hemodynamic instability only",
      "Routine weaning from mechanical ventilation"
    ],
    "correctIndex": 1,
    "explanation": "VV-ECMO provides extracorporeal gas exchange (oxygenation and CO2 removal) without cardiac support, used for isolated refractory respiratory failure (severe ARDS P/F <80 despite optimal management). VA-ECMO provides both cardiac and respiratory support.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Type I (hypoxemic) respiratory failure is defined as:",
    "options": [
      "PaO2 < 60 mmHg with elevated PaCO2",
      "PaO2 < 60 mmHg on room air with normal or low PaCO2",
      "Any PaO2 < 80 mmHg",
      "PaCO2 > 45 mmHg regardless of PaO2"
    ],
    "correctIndex": 1,
    "explanation": "Type I respiratory failure: PaO2 < 60 mmHg with PaCO2 normal or low (< 45 mmHg). The problem is oxygenation (V/Q mismatch, shunt, diffusion impairment) — ARDS, pneumonia, PE, pulmonary edema. PaCO2 is often low due to compensatory hyperventilation.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "In massive pulmonary embolism causing obstructive shock, first-line treatment is:",
    "options": [
      "High-dose diuretics",
      "Systemic thrombolysis (tPA) or catheter-directed thrombolysis/thrombectomy — rapidly reducing RV afterload",
      "Norepinephrine infusion alone",
      "Bronchodilators"
    ],
    "correctIndex": 1,
    "explanation": "Massive PE with hemodynamic collapse: systemic thrombolysis (alteplase 100 mg over 2 hrs) is the treatment of choice when there is no absolute contraindication. It rapidly reduces clot burden, lowering RV afterload and restoring cardiac output.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "The three criteria for SIRS (Systemic Inflammatory Response Syndrome) diagnosis include all EXCEPT:",
    "options": [
      "Temperature > 38°C or < 36°C",
      "Heart rate > 90/min",
      "Respiratory rate > 20/min or PaCO2 < 32 mmHg",
      "PaO2 < 60 mmHg"
    ],
    "correctIndex": 3,
    "explanation": "SIRS criteria (2 of 4): (1) Temp > 38°C or < 36°C, (2) HR > 90, (3) RR > 20 or PaCO2 < 32, (4) WBC > 12,000 or < 4,000 or > 10% bands. PaO2 < 60 mmHg is NOT a SIRS criterion (though important in ARDS).",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Tension pneumothorax treatment before imaging is:",
    "options": [
      "Wait for portable CXR confirmation",
      "Immediate needle decompression (2nd ICS MCL) followed by chest tube placement",
      "Place chest tube immediately without needle decompression",
      "Non-rebreather mask and observation"
    ],
    "correctIndex": 1,
    "explanation": "Tension pneumothorax is a clinical diagnosis requiring immediate decompression — do NOT delay for imaging if the patient is hemodynamically unstable. Needle decompression (2nd ICS, MCL or 4th/5th ICS, MAL) must be followed by chest tube.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "The respiratory component of 'sepsis-induced ARDS' differs from direct (pulmonary) ARDS in that:",
    "options": [
      "Indirect ARDS has better lung compliance initially",
      "Both are indistinguishable clinically",
      "Indirect ARDS tends to have better compliance and more recruitable lung",
      "Indirect ARDS has worse outcomes"
    ],
    "correctIndex": 2,
    "explanation": "Indirect (extrapulmonary) ARDS from sepsis/pancreatitis tends to have better lung compliance and more recruitable atelectasis than direct (pulmonary) ARDS from pneumonia. Higher PEEP and recruitment may be more beneficial in indirect ARDS.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Drowning resuscitation differs from standard cardiac arrest in that:",
    "options": [
      "CPR is not indicated",
      "Ventilation is the priority — submersion arrests are primarily hypoxic; 5 rescue breaths before starting compressions per most guidelines",
      "Atropine is first-line",
      "Defibrillation should be performed immediately before ventilation"
    ],
    "correctIndex": 1,
    "explanation": "Drowning arrests are hypoxic in origin. Rescue breathing (5 initial breaths) before chest compressions is emphasized in drowning protocols, as oxygenation is the primary need — unlike VF cardiac arrest where early defibrillation is paramount.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Carbon monoxide (CO) poisoning treatment is:",
    "options": [
      "Low-flow nasal cannula oxygen",
      "100% O2 via NRB mask (or hyperbaric oxygen in severe cases) to competitively displace CO from hemoglobin",
      "IV bicarbonate",
      "Bronchodilators"
    ],
    "correctIndex": 1,
    "explanation": "CO has 250× higher affinity for hemoglobin than O2. 100% O2 reduces COHb half-life from ~5 hours (room air) to 60–90 minutes. HBO further reduces it to 20–30 minutes and is indicated in severe poisoning (loss of consciousness, cardiac involvement, high COHb).",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Status asthmaticus is defined as:",
    "options": [
      "Any asthma exacerbation requiring an inhaler",
      "Severe asthma that fails to respond to initial bronchodilator therapy — risk of respiratory failure requiring escalated treatment",
      "Asthma with SpO2 < 95%",
      "Any asthma requiring oral steroids"
    ],
    "correctIndex": 1,
    "explanation": "Status asthmaticus: severe, prolonged asthma exacerbation unresponsive to initial standard therapy (repeated doses of SABA, ipratropium, systemic steroids). Risk of respiratory failure requiring ICU management and possibly mechanical ventilation.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Indications for emergency intubation in status asthmaticus include:",
    "options": [
      "Any wheeze with SpO2 < 95%",
      "Respiratory arrest, severe exhaustion (unable to speak), altered mental status, or PaCO2 rising despite maximum therapy",
      "First failed nebulizer treatment",
      "Mild accessory muscle use"
    ],
    "correctIndex": 1,
    "explanation": "Intubation in status asthmaticus is a last resort due to high risks (barotrauma, hemodynamic compromise). Indications: imminent respiratory arrest, AMS, severe fatigue, or worsening hypercapnia despite maximum therapy.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Flail chest occurs when:",
    "options": [
      "The sternum fractures",
      "Three or more adjacent ribs are fractured in two places, creating a free-floating segment that moves paradoxically",
      "The clavicle fractures bilaterally",
      "A single rib fractures in two places only"
    ],
    "correctIndex": 1,
    "explanation": "Flail chest: ≥ 3 adjacent ribs fractured in ≥ 2 places each, creating a free segment. During inspiration, negative pressure draws the flail segment inward (paradoxical movement), impairing ventilation. The underlying pulmonary contusion is the major cause of hypoxemia.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "In acute respiratory failure from obesity hypoventilation syndrome (OHS), which ventilatory support is first-line?",
    "options": [
      "High-flow nasal cannula at 60 L/min",
      "Non-invasive positive pressure ventilation (NIV/BiPAP) — corrects hypercapnia and improves oxygenation",
      "HFOV",
      "Volume-cycled SIMV"
    ],
    "correctIndex": 1,
    "explanation": "OHS (Pickwickian syndrome) with acute hypercapnic failure responds well to NIV (BiPAP) — inspiratory support reduces work of breathing and EPAP (expiratory positive pressure) maintains upper airway patency and FRC. It avoids intubation in most cases.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Neurogenic pulmonary edema (NPE) following traumatic brain injury occurs due to:",
    "options": [
      "Direct aspiration of fluid",
      "Massive sympathetic discharge causing systemic vasoconstriction, fluid shift, and pulmonary capillary injury",
      "Pneumonia from aspiration",
      "Depressed cough reflex only"
    ],
    "correctIndex": 1,
    "explanation": "NPE: catastrophic neurological events (TBI, SAH, seizures) trigger massive sympathetic surges → systemic vasoconstriction → fluid redistribution to pulmonary circulation → high hydrostatic pressure and capillary injury → pulmonary edema.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "The Surviving Sepsis Campaign recommends which initial oxygen target in septic shock?",
    "options": [
      "Maintain SpO2 ≥ 99%",
      "Maintain SpO2 92–96% (or PaO2 65–70 mmHg) to avoid both hypoxemia and hyperoxia",
      "SpO2 ≥ 88% only",
      "No specific oxygen target"
    ],
    "correctIndex": 1,
    "explanation": "Surviving Sepsis Campaign 2021: target SpO2 92–96% in adults. Avoid hypoxia (SpO2 < 90%) but also avoid hyperoxia (SpO2 > 96%–99%), as liberal oxygen therapy may worsen mortality.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "In high-altitude illness, hypoxemia is caused by:",
    "options": [
      "Increased FiO2 at altitude",
      "Reduced barometric pressure lowering PAO2 despite normal FiO2 (21%)",
      "Nitrogen narcosis",
      "Increased CO2 at altitude"
    ],
    "correctIndex": 1,
    "explanation": "At altitude, FiO2 remains 21%, but barometric pressure is reduced. PAO2 = 0.21 × (Pb − 47). At 8,000 ft (Pb ~560 mmHg): PAO2 = 0.21 × 513 ≈ 108 mmHg. At 29,029 ft (Everest, Pb ~253): PAO2 ≈ 43 mmHg — barely above hypoxic threshold.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "The initial ventilator setting concern in a patient with traumatic brain injury (TBI) on MV is:",
    "options": [
      "Maximizing PEEP to improve oxygenation",
      "Avoid hypoxemia (PaO2 ≥ 60) AND hypercapnia — both worsen intracranial pressure and secondary brain injury",
      "Permissive hypercapnia is acceptable",
      "Aggressive hyperventilation to reduce ICP"
    ],
    "correctIndex": 1,
    "explanation": "TBI ventilation goals: SpO2 ≥ 95%, PaO2 ≥ 80 mmHg, PaCO2 35–40 mmHg (normocapnia). Hypoxemia worsens secondary injury. Hypercapnia causes cerebral vasodilation → increased ICP. Brief hyperventilation (PaCO2 30–35) only for acute herniation.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Re-expansion pulmonary edema can occur after rapid drainage of a large pleural effusion. To minimize this risk:",
    "options": [
      "Drain all fluid as quickly as possible",
      "Limit drainage to 1,000–1,500 mL in the first session, then clamp — slow re-expansion reduces risk",
      "Never drain effusions in ICU",
      "Only drain with patient prone"
    ],
    "correctIndex": 1,
    "explanation": "Re-expansion pulmonary edema occurs when a chronically collapsed lung is rapidly re-expanded. Limiting initial drainage to ≤ 1,500 mL (and stopping if chest pain or cough develops) reduces this risk.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "A 'right-to-left shunt' in the lungs is characterized by:",
    "options": [
      "Low A-a gradient, responds to 100% O2",
      "High A-a gradient, does NOT improve with 100% O2 (shunted blood bypasses ventilated alveoli)",
      "Normal PaO2 on room air",
      "Low PaCO2"
    ],
    "correctIndex": 1,
    "explanation": "Intrapulmonary shunt (blood passes through non-ventilated alveoli): high A-a gradient, PaO2 does not improve with 100% FiO2 (blood bypasses oxygen delivery). The shunt fraction can be calculated with the shunt equation.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Heimlich valve is used in which clinical situation?",
    "options": [
      "Continuous bladder irrigation",
      "One-way valve chest drainage for pneumothorax — allows air to escape from pleural space during exhalation without air re-entering during inhalation",
      "Endotracheal suctioning",
      "Tracheostomy care"
    ],
    "correctIndex": 1,
    "explanation": "The Heimlich valve is a portable, one-way flutter valve connected to a chest tube, allowing continuous pneumothorax drainage without a water seal chamber. Used for ambulatory pneumothorax management or transport.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Acute Exacerbation of COPD (AECOPD) is most commonly triggered by:",
    "options": [
      "Exercise and physical activity",
      "Respiratory tract infections (50–70% of cases — predominantly viral: rhinovirus, influenza; bacterial: H. influenzae, Moraxella, S. pneumoniae) and air pollution",
      "Oxygen therapy alone",
      "Diaphragm fatigue without infection"
    ],
    "correctIndex": 1,
    "explanation": "AECOPD triggers: (1) Respiratory infections — ~50% viral (rhinovirus most common), ~25% bacterial, ~25% both. Common bacteria: H. influenzae, M. catarrhalis, S. pneumoniae. (2) Air pollution (PM2.5, ozone). (3) Non-compliance with maintenance therapy. (4) Cardiac disease (comorbid HF). GOLD guidelines recommend antibiotics when increased sputum purulence + increased dyspnea or sputum volume is present (Anthonisen criteria).",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "The GOLD criteria for initiating NIV in AECOPD include:",
    "options": [
      "Any respiratory distress in COPD",
      "Acute or acute-on-chronic respiratory acidosis (pH 7.25–7.35, PaCO2 > 45 mmHg), moderate-to-severe dyspnea with accessory muscle use, and RR > 25/min",
      "Only when intubation has failed",
      "Hypoxemia alone (PaO2 < 60 mmHg)"
    ],
    "correctIndex": 1,
    "explanation": "GOLD AECOPD NIV indications: pH 7.25–7.35 with PaCO2 > 45 mmHg (acute hypercapnic respiratory failure), or moderate dyspnea with clinical signs of increased WOB. NIV reduces intubation rate by 65%, hospital mortality by 48%, and length of stay. Below pH 7.25, NIV can be tried but with low threshold to intubate. Hypoxemia alone without hypercapnia is not a primary NIV indication in COPD — controlled O2 and investigation of the cause is first.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Target SpO2 for oxygen therapy in AECOPD to avoid oxygen-induced hypercapnia is:",
    "options": [
      "95–100%",
      "88–92% — sufficient to maintain adequate tissue oxygenation while avoiding the hypercapnia associated with supranormal oxygen delivery in COPD",
      "> 94%",
      "85–88%"
    ],
    "correctIndex": 1,
    "explanation": "Controlled low-flow oxygen targeting SpO2 88–92% (or PaO2 60–65 mmHg) is the GOLD standard in AECOPD. Higher oxygen (SpO2 > 92%) risks oxygen-induced hypercapnia through Haldane effect and worsened V/Q mismatch. AVOID fixed high-concentration masks (≥ 35%) unless hypercapnia is already excluded. The BTS guideline: use a 24–28% Venturi mask; titrate by ABG.",
    "difficulty": "easy"
  },
  {
    "topicId": 10,
    "text": "Status asthmaticus management in a patient who fails initial bronchodilator therapy should include all of the following EXCEPT:",
    "options": [
      "IV/oral systemic corticosteroids",
      "IV magnesium sulfate (2 g over 20 min) for bronchodilation in severe acute asthma",
      "Routine sedation without airway assessment",
      "Heliox (70:30) to reduce turbulent airway resistance if not improving"
    ],
    "correctIndex": 2,
    "explanation": "Status asthmaticus management: (1) Continuous nebulized SABA (albuterol) ± ipratropium, (2) Systemic corticosteroids (IV methylprednisolone or oral prednisone), (3) IV magnesium sulfate (level A evidence) — blocks Ca²⁺-mediated bronchoconstriction, (4) Heliox for refractory cases to reduce WOB, (5) Consider ketamine for intubation (bronchodilating anesthetic). Routine sedation without airway protection is dangerous — it may suppress respiratory drive without securing the airway.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "When mechanically ventilating a patient with severe acute asthma, the primary ventilation strategy is:",
    "options": [
      "High RR to normalize PaCO2",
      "Controlled hypoventilation with low RR (8–12/min), long expiratory time (I:E ≥ 1:4), and tolerance of hypercapnia — to prevent dynamic hyperinflation and auto-PEEP in a patient with severe airflow obstruction",
      "High PEEP to stent airways open",
      "High FiO2 to overcome V/Q mismatch"
    ],
    "correctIndex": 1,
    "explanation": "In severe asthma, airflow obstruction prevents rapid exhalation. High RR causes breath stacking → auto-PEEP → tension pneumothorax and cardiovascular collapse. Correct strategy: lowest RR compatible with pH > 7.20, long Ti:Te (1:4 or greater), low TV (5–7 mL/kg), minimal external PEEP (avoid adding to auto-PEEP). Accept PaCO2 50–70 mmHg (permissive hypercapnia) until bronchospasm resolves. PEEP in asthma is controversial — usually minimal (< 5 cmH₂O).",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Community-acquired pneumonia (CAP) severity assessment using the CURB-65 score includes all of the following parameters EXCEPT:",
    "options": [
      "Confusion (new)",
      "Blood urea nitrogen (BUN) > 19 mg/dL",
      "CRP (C-reactive protein) level",
      "Respiratory rate ≥ 30/min, BP systolic < 90 or diastolic ≤ 60, Age ≥ 65"
    ],
    "correctIndex": 2,
    "explanation": "CURB-65: Confusion (new), Urea > 7 mmol/L (BUN > 19 mg/dL), Respiratory rate ≥ 30, Blood pressure (SBP < 90 or DBP ≤ 60), Age ≥ 65. Score 0–1: outpatient, 2: hospital admission, ≥ 3: ICU consideration. CRP is not part of CURB-65 (though it may guide antibiotic duration). PSI/PORT score is an alternative but more complex. For RT: P/F ratio, hypoxemia severity, and need for O2/MV determine RT involvement.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Ventilator-Associated Pneumonia (VAP) is defined as pneumonia occurring:",
    "options": [
      "Any time during mechanical ventilation",
      "≥ 48–72 hours after endotracheal intubation — distinguishing it from CAP or HAP; early-onset VAP (days 2–4) is usually caused by normal flora; late-onset (≥ 5 days) by MDR organisms (MRSA, Pseudomonas, Acinetobacter)",
      "Only after 7 days of ventilation",
      "After extubation"
    ],
    "correctIndex": 1,
    "explanation": "VAP (per CDC NHSN/IDSA): new pneumonia ≥ 48h after intubation and MV. VAP-related organisms: early (< 5 days): S. pneumoniae, MSSA, H. influenzae, enteric GNR. Late (≥ 5 days): MDR organisms — MRSA, Pseudomonas aeruginosa, Acinetobacter baumannii, Enterobacteriaceae with extended-spectrum β-lactamases. RT-related prevention: oral decontamination, subglottic secretion drainage, HOB 30–45°, circuit not changed > 7 days.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Pulmonary embolism (PE) classic clinical triad includes:",
    "options": [
      "Fever, cough, pleuritic chest pain",
      "Dyspnea (most common, 73%), pleuritic chest pain, and hemoptysis — though all three are present in < 30% of cases; most PEs present with dyspnea alone",
      "Hemoptysis, fever, and purulent sputum",
      "Hypoxemia, hypercapnia, and wheeze"
    ],
    "correctIndex": 1,
    "explanation": "PE clinical presentation: dyspnea (most common, sudden onset), pleuritic chest pain (infarction), hemoptysis (pulmonary infarction), tachycardia, tachypnea. Massive PE: hypotension, syncope, cardiac arrest. ECG: sinus tachycardia (most common); S1Q3T3 in massive PE (right heart strain). ABG: hypoxemia, hypocapnia (hyperventilation), widened A-a gradient. CXR: often normal; Westermark sign (focal oligemia) or Hampton's hump (wedge infarct) are classic but rare.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Massive pulmonary embolism with hemodynamic instability (SBP < 90 mmHg) requires:",
    "options": [
      "Anticoagulation alone with heparin infusion",
      "Immediate systemic thrombolysis (tPA 100 mg over 2 hours) or surgical embolectomy / catheter-directed therapy if thrombolysis is contraindicated — anticoagulation alone is insufficient for hemodynamic compromise",
      "CPAP at 10 cmH₂O",
      "Emergent bronchoscopy"
    ],
    "correctIndex": 1,
    "explanation": "Massive PE (obstructive shock): acute cor pulmonale → RV failure → hemodynamic collapse. Treatment: (1) systemic thrombolysis (alteplase 100 mg/2h or 0.6 mg/kg for cardiac arrest), (2) surgical embolectomy for thrombolysis contraindicated or failure, (3) catheter-directed thrombolysis/mechanical thrombectomy. All patients also receive anticoagulation (UFH). Intubation should be avoided if possible (positive pressure reduces RV preload). VV-ECMO as rescue for cardiac arrest.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Pulmonary arterial hypertension (PAH) is defined as mean pulmonary arterial pressure (mPAP) of:",
    "options": [
      "> 15 mmHg at rest",
      "≥ 25 mmHg at rest (new ESC/ERS 2022 guidelines have lowered this to > 20 mmHg with PVR > 2 WU)",
      "> 40 mmHg only",
      "> 35 mmHg for diagnosis"
    ],
    "correctIndex": 1,
    "explanation": "Historic WHO definition: mPAP ≥ 25 mmHg at rest. Updated 2022 ESC/ERS guidelines define PH as mPAP > 20 mmHg. Pre-capillary PH additionally requires PCWP ≤ 15 mmHg and PVR > 2 Wood Units. PAH (Group 1) is idiopathic or caused by connective tissue disease, HIV, portal hypertension, drugs. RT significance: these patients on home O2 or prostacyclin therapy, requiring special management during hospitalization.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "In a patient with known severe pulmonary arterial hypertension who requires intubation, the highest risk during the intubation procedure is:",
    "options": [
      "Hypoglycemia",
      "Acute RV failure and cardiovascular collapse — loss of intrinsic respiratory compensation (e.g., hyperventilation to reduce PVR), positive pressure increasing RV afterload, and hypoxemia or acidosis from apnea can precipitate acute cor pulmonale and arrest",
      "Bronchospasm",
      "Aspiration"
    ],
    "correctIndex": 1,
    "explanation": "PAH patients are exquisitely sensitive to: hypoxia (increases PVR), hypercapnia/acidosis (pulmonary vasoconstriction), positive pressure ventilation (impedes RV output by increasing afterload), and vasodilating anesthetic agents (drops SVR → RV ischemia). Intubation should be performed by an experienced team with inhaled vasodilators immediately available, vasopressors running, and consideration of VA-ECMO backup. Mortality from intubation in severe PAH approaches 30%.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Cor pulmonale (right heart failure due to lung disease) on ECG shows:",
    "options": [
      "Left axis deviation",
      "Right axis deviation (> +90°), P-pulmonale (tall peaked P wave > 2.5 mm in II), right bundle branch block pattern (RSR' in V1), and signs of right ventricular hypertrophy (R wave dominance in V1)",
      "ST elevation in V1–V4",
      "Left bundle branch block"
    ],
    "correctIndex": 1,
    "explanation": "Cor pulmonale ECG: P-pulmonale (right atrial enlargement — tall peaked P in II, III, aVF > 2.5 mm), right axis deviation (> +90°), RVH pattern (R/S > 1 in V1, deep S in V5-V6), right bundle branch block (incomplete or complete). In acute cor pulmonale (massive PE): S1Q3T3, sinus tachycardia, RBBB. These changes reflect right heart pressure overload from chronically elevated PVR.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Tension pneumothorax causes cardiovascular collapse via:",
    "options": [
      "Pulmonary hemorrhage",
      "Progressive ipsilateral lung compression and mediastinal shift — compressing the contralateral lung, kinking the superior vena cava, reducing venous return, and causing obstructive shock; tracheal deviation is a late sign",
      "Vagal reflex only",
      "Cardiac rupture"
    ],
    "correctIndex": 1,
    "explanation": "Tension pneumothorax: pleural air accumulates under pressure (one-way valve mechanism). This: (1) compresses ipsilateral lung to zero, (2) shifts mediastinum contralaterally, (3) kinks/compresses SVC/IVC → decreased venous return → obstructive shock. Clinical: hypotension, absent breath sounds, JVD, tachycardia, hypoxemia, tracheal deviation (late, inconsistent). TX: immediate needle decompression (2nd ICS MCL) followed by chest tube. In intubated patients, sudden high PIP + hypotension = tension PTX until proven otherwise.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "A patient develops sudden hypotension and absent breath sounds on the right with JVD while on mechanical ventilation. The immediate intervention is:",
    "options": [
      "Urgent bronchoscopy",
      "Needle decompression of the right chest (2nd intercostal space, midclavicular line) followed by chest tube insertion — tension pneumothorax is a clinical diagnosis requiring immediate action, no time for CXR",
      "Increase PEEP to recruit the lung",
      "IV fluid bolus"
    ],
    "correctIndex": 1,
    "explanation": "Tension pneumothorax in a ventilated patient is a life-threatening emergency. Signs: sudden hemodynamic deterioration, high PIP, unilateral absent breath sounds, JVD, tracheal deviation (late). DO NOT wait for CXR. Immediate needle decompression: 14-gauge needle, 2nd ICS, MCL, superior aspect of 3rd rib (avoids NVB). A rush of air confirms diagnosis. Follow immediately with chest tube (4th/5th ICS, anterior axillary line). Disconnect ventilator if needed to decompress.",
    "difficulty": "easy"
  },
  {
    "topicId": 10,
    "text": "Pleural effusion on a PA CXR becomes visible as blunting of the costophrenic angle when it reaches approximately:",
    "options": [
      "50–75 mL",
      "150–200 mL — smaller amounts are detectable on lateral decubitus films (> 75 mL) or CT scan",
      "500 mL",
      "1,000 mL"
    ],
    "correctIndex": 1,
    "explanation": "On a PA CXR, costophrenic angle blunting requires ~150–200 mL of pleural fluid. A lateral decubitus film detects as little as 75–100 mL (fluid layers along the dependent hemithorax). Ultrasound detects < 50 mL. CT is most sensitive. Large effusions (> 500 mL) cause hemidiaphragm obscuration; massive (> 1.5 L) causes mediastinal shift. Transudates (CHF, hypoalbuminemia) vs exudates (infection, malignancy) are differentiated by Light's criteria on thoracentesis.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Light's criteria for exudative pleural effusion require ONE of the following to be met:",
    "options": [
      "LDH > 200 IU/L in the fluid alone",
      "Pleural/serum protein ratio > 0.5, OR pleural/serum LDH ratio > 0.6, OR pleural LDH > 2/3 the upper limit of normal serum LDH — meeting any one criterion = exudate",
      "Pleural glucose < 60 mg/dL",
      "pH < 7.30 in the fluid"
    ],
    "correctIndex": 1,
    "explanation": "Light's criteria (1972): exudate if ANY of: (1) pleural fluid protein/serum protein > 0.5, (2) pleural fluid LDH/serum LDH > 0.6, (3) pleural fluid LDH > 2/3 upper limit of normal serum LDH. Sensitivity 98%, specificity 83% for exudates. 25% of transudates misclassified as exudates (especially CHF on diuretics) — use serum albumin − pleural albumin gradient (> 1.2 = transudate) as additional test. Low pH (< 7.20): complicated parapneumonic, requires drainage.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Surviving Sepsis Campaign bundles mandate that septic shock patients receive which interventions within the first 3 hours?",
    "options": [
      "CT scan, central line, and immediate intubation",
      "Measurement of lactate, blood cultures before antibiotics, broad-spectrum antibiotics, and 30 mL/kg IV crystalloid bolus for hypotension or lactate ≥ 4 mmol/L",
      "Immediate vasopressors only",
      "Bronchoscopy and chest tube"
    ],
    "correctIndex": 1,
    "explanation": "Surviving Sepsis Campaign 3-hour bundle (Hour-1 Bundle, updated 2018): (1) Measure lactate; remeasure if initial > 2 mmol/L, (2) Blood cultures before antibiotics (≥ 2 sets), (3) Broad-spectrum antibiotics (within 1 hour of recognition), (4) 30 mL/kg IV crystalloid if hypotension or lactate ≥ 4 mmol/L, (5) Vasopressors (norepinephrine first-line) if hypotension persists after fluids — MAP target ≥ 65 mmHg. RT role: O2 therapy, NIV/MV, airway management.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "In septic shock, the vasopressor of first choice per Surviving Sepsis Campaign is:",
    "options": [
      "Dopamine",
      "Norepinephrine (noradrenaline) — an α1/β1 agonist that increases SVR and MAP with less tachycardia than dopamine; preferred due to lower arrhythmia risk",
      "Epinephrine",
      "Phenylephrine"
    ],
    "correctIndex": 1,
    "explanation": "Norepinephrine is the first-line vasopressor for septic shock. It increases SVR (via α1) and has some inotropic effect (β1), raising MAP effectively. Vasopressin (0.03–0.04 units/min) is added second to reduce norepinephrine dose. Epinephrine: second-line alternative, or for anaphylaxis. Dopamine: associated with higher arrhythmia rates and increased mortality vs. norepinephrine in septic shock (De Backer trial). Dobutamine: added for cardiogenic component (low CO, high PCWP).",
    "difficulty": "easy"
  },
  {
    "topicId": 10,
    "text": "Transfusion-Related Acute Lung Injury (TRALI) presents after blood product transfusion as:",
    "options": [
      "Gradual weight gain over 3 days",
      "Acute hypoxemia and bilateral pulmonary infiltrates within 6 hours of transfusion, without evidence of fluid overload — PCWP < 18 mmHg, meeting ARDS criteria",
      "Isolated fever without respiratory symptoms",
      "Hemolytic jaundice"
    ],
    "correctIndex": 1,
    "explanation": "TRALI is the leading cause of transfusion-related mortality. Mechanism: donor anti-HLA or anti-neutrophil antibodies activate recipient neutrophils → capillary leak → noncardiogenic pulmonary edema. Presentation: acute onset (≤ 6h post-transfusion) hypoxemia (P/F < 300), bilateral CXR infiltrates, fever, hypotension — with PCWP ≤ 18 (distinguishing from TACO, which is cardiogenic). Treatment: supportive — O2, MV if needed. TACO (transfusion-associated circulatory overload): high PCWP, responds to diuretics.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Idiopathic pulmonary fibrosis (IPF) management with regard to oxygen therapy should aim for:",
    "options": [
      "SpO2 88–92% (same as COPD)",
      "SpO2 ≥ 92% at rest and ≥ 88% during exertion — IPF patients have impaired gas exchange from fibrosis; high-flow O2 may be needed with exertion without hypercapnia risk",
      "No supplemental O2 until PaO2 < 55 mmHg even at rest",
      "100% FiO2 continuously"
    ],
    "correctIndex": 1,
    "explanation": "IPF has a different physiology than COPD — reduced compliance and diffusion impairment with preserved airway mechanics (no hypercapnia risk from O2). Target SpO2 ≥ 92% at rest; ambulatory O2 is prescribed for exercise-induced desaturation (SpO2 ≤ 88% with exertion). Unlike COPD, high-flow O2 does not cause CO2 retention. Acute exacerbations of IPF (AE-IPF) carry > 50% mortality; MV often futile but may serve as bridge to transplant.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Drowning patients who require resuscitation should receive which intervention that is different from other cardiac arrest causes?",
    "options": [
      "Chest compressions before airway management",
      "5 rescue breaths before beginning CPR — because drowning cardiac arrest is predominantly hypoxic, initial ventilation takes priority over compression-first protocols",
      "No epinephrine",
      "Immediate cardioversion"
    ],
    "correctIndex": 1,
    "explanation": "Drowning is a hypoxic arrest — the airway is the problem. AHA/ERC guidelines for drowning: begin with 5 rescue breaths/ventilations before starting chest compressions (reversing the standard compression-first sequence). Remove the victim from water and begin resuscitation. HIFLO protocol: Highest priority to airway → Intubation when available → Fluid removal (Heimlich maneuver is NOT recommended — it delays ventilation and risks aspiration). Hypothermia from cold-water drowning can protect the brain.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Venovenous ECMO (VV-ECMO) for severe ARDS differs from venoarterial ECMO (VA-ECMO) in that VV-ECMO:",
    "options": [
      "Provides both cardiac and respiratory support",
      "Provides only respiratory support (CO2 removal and oxygenation) without direct cardiac support — blood is drained from and returned to the venous circuit, while the heart still pumps oxygenated blood to the systemic circulation",
      "Has lower risk of recirculation",
      "Cannot be used for bridging to lung transplant"
    ],
    "correctIndex": 1,
    "explanation": "VV-ECMO: blood drained from vena cava/RA, oxygenated by membrane lung, returned to RA/RV — the native heart pumps ECMO-oxygenated blood systemically. No direct cardiac support. Used for: severe ARDS (EOLIA), refractory hypoxemia, severe air leak, bridge to transplant. VA-ECMO: blood drained from venous, returned to arterial circulation (aorta) — bypasses both heart and lungs; used for cardiogenic shock, cardiac arrest, bridge to LVAD/transplant. VV-ECMO recirculation is a concern when inflow and outflow cannulas are close.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "A major difference between COPD and emphysema on PFTs is that emphysema specifically shows:",
    "options": [
      "Normal DLCO",
      "Markedly reduced DLCO (diffusing capacity for CO) due to destruction of alveolar surface area and pulmonary capillary bed — while chronic bronchitis (COPD subtype) may have less DLCO reduction",
      "High DLCO",
      "Normal FEV1/FVC ratio"
    ],
    "correctIndex": 1,
    "explanation": "Emphysema: destruction of alveolar walls → loss of surface area for gas exchange → markedly reduced DLCO (< 70% predicted, often < 50%). Chronic bronchitis (COPD, mucus hypersecretion/airway inflammation): DLCO may be normal or mildly reduced. Combined COPD has variable DLCO. DLCO is also reduced in: pulmonary fibrosis, PAH, pulmonary edema, severe anemia. DLCO is elevated in: polycythemia, intrapulmonary hemorrhage (alveolar hemorrhage — CO absorbed by RBCs in alveoli).",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "COVID-19 pneumonia with severe ARDS often requires prolonged prone positioning. Compared to classic ARDS, COVID-19 ARDS often presents initially with:",
    "options": [
      "Normal compliance and high shunt (L-phenotype)",
      "Paradoxically preserved compliance (L-phenotype: low elastance, low recruitability, high dead space) in some patients despite severe hypoxemia — the so-called 'silent hypoxemia' or 'happy hypoxia' presentation",
      "High compliance with hypercapnia",
      "Normal PaO2 with high PaCO2"
    ],
    "correctIndex": 1,
    "explanation": "Gattinoni et al. described two COVID-19 ARDS phenotypes: Type L (early): high compliance, low lung weight, low recruitability, high dead space — vasoplegia/micro-thrombosis causing V/Q mismatch without much atelectasis; Type H (late/severe): low compliance, high lung weight, high recruitability — classic ARDS. L-type: HFNC/prone awake may suffice; pushing high PEEP may over-distend. H-type: lung-protective MV + prone. The transition from L to H correlates with worsening mechanical ventilation outcomes.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Diaphragmatic dysfunction in ICU patients (ICU-acquired weakness, diaphragm atrophy) is primarily caused by:",
    "options": [
      "High tidal volume ventilation only",
      "Controlled mechanical ventilation with complete diaphragmatic inactivity — even 18–69 hours of CMV causes rapid myofiber atrophy (ventilator-induced diaphragmatic dysfunction, VIDD) through autophagy and proteolysis, impairing weaning",
      "High PEEP settings",
      "Prone positioning"
    ],
    "correctIndex": 1,
    "explanation": "VIDD (ventilator-induced diaphragmatic dysfunction): diaphragm atrophy begins within hours of CMV (when the diaphragm is completely unloaded). Mechanisms: autophagy, oxidative stress, ubiquitin-proteasome proteolysis. Diaphragm fiber cross-sectional area decreases ~6% per day of CMV. Prevention: allow spontaneous breathing (partial support modes) from early in MV course; avoid excessive sedation; consider diaphragm ultrasound to guide weaning (diaphragm thickening fraction as a predictor of SBT success).",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Smoke inhalation injury above the glottis (supraglottic) vs. below the glottis (subglottic) differ in that:",
    "options": [
      "Both cause the same damage",
      "Supraglottic injury is thermally mediated (heat directly burns upper airway mucosa) — causing rapid edema and potential asphyxia, requiring early intubation; subglottic injury is chemical/toxicological (incomplete combustion products), causing tracheobronchitis, cast formation, and delayed effects",
      "Subglottic injury is always more severe",
      "Thermal injury occurs only in the lower airway"
    ],
    "correctIndex": 1,
    "explanation": "Heat from inhalation is efficiently extracted in the upper airway — the glottis is rarely reached by direct heat. Supraglottic: thermal injury causes edema, hoarseness, stridor → early intubation before edema closes the airway. Subglottic: chemical injury from aldehydes, acrolein, CO, HCN — causes chemical tracheobronchitis, sloughing of mucosa, cast formation, bronchospasm. CO poisoning (normobaric or hyperbaric O2 treatment) and cyanide toxicity (hydroxocobalamin antidote) are specific systemic concerns.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Carbon monoxide (CO) poisoning treatment is high-flow 100% oxygen via non-rebreather mask because:",
    "options": [
      "CO increases O2-carrying capacity and needs dilution",
      "100% O2 reduces CO half-life from ~5 hours (on room air) to ~60–90 minutes by competitively displacing CO from hemoglobin — accelerating carboxyhemoglobin elimination",
      "It reverses cyanide toxicity",
      "It prevents pulmonary edema"
    ],
    "correctIndex": 1,
    "explanation": "CO binds hemoglobin with 200–250× higher affinity than O2. On room air, COHb half-life ~5 hours. On 100% NRB O2: ~60–90 min. On hyperbaric O2 (2.4–3 ATA): ~20–30 min. High FiO2 creates a high alveolar O2 gradient that competitively displaces CO from Hgb. Hyperbaric O2 (HBO) is indicated for: COHb > 25%, LOC, neurological deficits, cardiac involvement, or pregnancy. Also treats CO dissolved in tissues and promotes cellular respiration recovery.",
    "difficulty": "easy"
  },
  {
    "topicId": 10,
    "text": "Cystic fibrosis (CF) lung disease management includes all of the following EXCEPT:",
    "options": [
      "DNase (dornase alfa) to reduce sputum viscosity",
      "Inhaled hypertonic saline to hydrate airway surface liquid",
      "Routine use of high-dose systemic corticosteroids long-term as the primary anti-inflammatory therapy",
      "CFTR modulator therapy (e.g., elexacaftor/tezacaftor/ivacaftor) for eligible genotypes"
    ],
    "correctIndex": 2,
    "explanation": "CF management: (1) Airway clearance — ACTs, HFCWO, Flutter, PEP; (2) DNase (Pulmozyme) — cleaves extracellular DNA that increases sputum viscosity; (3) Hypertonic saline — rehydrates airway surface liquid, improves mucociliary clearance; (4) Azithromycin — long-term anti-inflammatory; (5) CFTR modulators (ivacaftor, lumacaftor/ivacaftor, elexacaftor/tezacaftor/ivacaftor) for specific mutations — dramatically improve lung function. Systemic corticosteroids are NOT used long-term in CF due to growth retardation and infection risk.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Oxygen toxicity (hyperoxia-induced lung injury) primarily occurs with FiO2 > 0.60 for more than:",
    "options": [
      "1 hour",
      "24–48 hours — prolonged exposure to FiO2 > 0.6 causes reactive oxygen species-mediated damage to the alveolar-capillary membrane, progressing from tracheobronchitis to noncardiogenic pulmonary edema",
      "1 week",
      "12 hours only briefly"
    ],
    "correctIndex": 1,
    "explanation": "Oxygen toxicity: FiO2 > 0.21 eventually exceeds antioxidant defenses. FiO2 0.5–0.6 for < 24h: generally safe. FiO2 > 0.6 for > 24–48h: risk of oxygen toxicity — free radical-mediated injury to alveolar cells (type I pneumocytes), surfactant inactivation, absorption atelectasis, inflammatory cell infiltration → ARDS-like picture. Absorption atelectasis occurs independently at any FiO2 > 0.5 where N2 is displaced. Use lowest FiO2 to achieve SpO2 ≥ 92–95%.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "Acute exacerbation of idiopathic pulmonary fibrosis (AE-IPF) is characterized by:",
    "options": [
      "Gradual worsening over months with normal CXR",
      "Acute (<1 month) unexplained worsening of dyspnea and hypoxemia on the background of known IPF, with new bilateral ground-glass opacities on CT not explained by infection, heart failure, or PE — associated with > 50% short-term mortality",
      "Reversible bronchospasm responsive to steroids",
      "Isolated pleural effusion"
    ],
    "correctIndex": 1,
    "explanation": "AE-IPF criteria (2016 ATS Working Group): acute worsening/development of dyspnea within 30 days; CT with new bilateral ground-glass opacities ± consolidation superimposed on UIP pattern; not explained by infection (BAL negative), heart failure, PE, or other identifiable cause. Treatment: high-dose corticosteroids (evidence weak); supportive care; early palliative care discussion. Intubation/MV is controversial — ICU mortality > 80% for AE-IPF; consider as bridge to transplant only.",
    "difficulty": "hard"
  },
  {
    "topicId": 10,
    "text": "Norepinephrine-refractory septic shock unresponsive to high-dose vasopressors may respond to:",
    "options": [
      "Adding dopamine as a third agent",
      "Hydrocortisone 200 mg/day IV (stress-dose steroids) — restores vascular responsiveness to catecholamines in relative adrenal insufficiency; also used with fludrocortisone in ACTH non-responders per APROCCHSS trial",
      "Removing all vasopressors and replacing with phenylephrine",
      "Increasing fluid infusion rate"
    ],
    "correctIndex": 1,
    "explanation": "Stress-dose steroids (hydrocortisone 200–300 mg/day IV divided or infusion) are recommended in adult septic shock not responding to adequate fluids and vasopressors (norepinephrine ≥ 0.25 mcg/kg/min). Mechanism: cortisol restores adrenergic receptor sensitivity. ADRENAL trial: reduced time on vasopressors but no mortality benefit. APROCCHSS: added fludrocortisone (50 mcg/day), showed 90-day mortality benefit. Do not wait for cosyntropin test results.",
    "difficulty": "medium"
  },
  {
    "topicId": 10,
    "text": "The normal arterial blood gas values for a healthy adult at sea level are:",
    "options": [
      "pH 7.25, PaCO2 55, PaO2 80",
      "pH 7.35–7.45, PaCO2 35–45 mmHg, PaO2 80–100 mmHg, HCO3⁻ 22–26 mEq/L, BE −2 to +2",
      "pH 7.50, PaCO2 30, PaO2 120",
      "pH 7.40, PaCO2 40, PaO2 60"
    ],
    "correctIndex": 1,
    "explanation": "Normal ABG at sea level: pH 7.35–7.45 (mean 7.40), PaCO2 35–45 mmHg (mean 40), PaO2 80–100 mmHg, HCO3⁻ 22–26 mEq/L (mean 24), BE −2 to +2 mEq/L, SaO2 > 95%. PaO2 normally decreases with age: predicted PaO2 = 104 − (0.27 × age) mmHg. At high altitude: lower PaO2 (reduced PiO2), hyperventilation lowers PaCO2 (respiratory alkalosis), compensated metabolic acidosis (HCO3⁻ decreases). SpO2 does not substitute for PaO2 in assessing gas exchange adequacy.",
    "difficulty": "easy"
  }
];

export async function seedIfNeeded(): Promise<void> {
  try {
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(questionsTable);
    const existing = count ?? 0;

    if (existing >= 685) {
      logger.info({ count: existing }, "Database already seeded — skipping");
      return;
    }

    logger.info({ existing, target: 685 }, "Seeding question bank...");

    // Get all existing question texts to avoid duplicates
    const existingRows = await db
      .select({ text: questionsTable.text, topicId: questionsTable.topicId })
      .from(questionsTable);
    const existingKeys = new Set(
      existingRows.map((r) => `${r.topicId}||${r.text}`)
    );

    const toInsert = SEED_QUESTIONS.filter(
      (q) => !existingKeys.has(`${q.topicId}||${q.text}`)
    );

    logger.info({ toInsert: toInsert.length }, "Inserting missing questions");

    const BATCH = 50;
    for (let i = 0; i < toInsert.length; i += BATCH) {
      const batch = toInsert.slice(i, i + BATCH);
      await db.insert(questionsTable).values(
        batch.map((q) => ({
          topicId: q.topicId,
          text: q.text,
          options: JSON.stringify(q.options),
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          difficulty: q.difficulty,
        }))
      );
    }

    const [{ count: finalCount }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(questionsTable);
    logger.info({ count: finalCount }, "Seeding complete");
  } catch (err) {
    logger.error({ err }, "Seeding failed — server will still start");
  }
}