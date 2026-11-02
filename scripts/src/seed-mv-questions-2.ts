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
  {
    text: "The P0.1 (airway occlusion pressure at 0.1 seconds) measures:",
    options: ["Lung compliance", "Central respiratory drive — effort generated in the first 100 ms of an occluded inspiration", "Auto-PEEP magnitude", "Tidal volume during spontaneous breathing"],
    correctIndex: 1,
    explanation: "P0.1 is the negative pressure generated in the first 100 ms of an occluded inspiration. It reflects respiratory center drive independent of respiratory mechanics. Normal is −1 to −2 cmH₂O; > −6 predicts weaning failure.",
    difficulty: "hard",
  },
  {
    text: "Which oxygen delivery device provides the MOST precise FiO2 in a spontaneously breathing patient?",
    options: ["Simple face mask", "Nasal cannula", "Non-rebreather mask", "Venturi (air-entrainment) mask"],
    correctIndex: 3,
    explanation: "Venturi masks use fixed entrainment ports to mix air and oxygen in precise ratios, delivering accurate FiO2 (24–50%) regardless of respiratory rate or pattern — ideal for COPD patients.",
    difficulty: "easy",
  },
  {
    text: "A patient on VC-AC has a PIP of 50 cmH₂O with Pplat of 26 cmH₂O. The most appropriate intervention is:",
    options: ["Reduce tidal volume", "Administer bronchodilator and suction — high resistance problem", "Increase PEEP", "Increase inspiratory time"],
    correctIndex: 1,
    explanation: "PIP 50 with Pplat 26 — the large gap (24 cmH₂O) is a resistance problem. Pplat is acceptable. Treat airway obstruction with bronchodilators and suctioning before changing volume or pressure settings.",
    difficulty: "medium",
  },
  {
    text: "Stress index in volume-control ventilation is assessed by the shape of the pressure-time curve during constant flow inspiration. A stress index > 1 indicates:",
    options: ["Alveolar collapse requiring more PEEP", "Alveolar overdistension — reduce PEEP or tidal volume", "Normal ventilation", "Increased airway resistance"],
    correctIndex: 1,
    explanation: "Stress index > 1 (upward concave pressure curve) = overdistension. Stress index < 1 (downward concave curve) = recruitment still occurring (may need more PEEP). A straight line (SI = 1) = optimal.",
    difficulty: "hard",
  },
  {
    text: "Work of breathing (WOB) in mechanically ventilated patients is abnormally increased by all EXCEPT:",
    options: ["Auto-PEEP requiring patient to overcome intrinsic PEEP before triggering", "ETT resistance (narrow diameter tube)", "Fully supported A/C mode with adequate flow", "Insufficient flow causing flow starvation"],
    correctIndex: 2,
    explanation: "In fully supported A/C mode with adequate flow, the ventilator does most of the work and WOB is minimized. Auto-PEEP, narrow ETTs, and flow starvation all increase the patient's WOB.",
    difficulty: "medium",
  },
  {
    text: "The optimal PEEP in ARDS is best described as the PEEP that:",
    options: ["Achieves the highest PaO2 regardless of hemodynamic consequences", "Maximizes alveolar recruitment while minimizing overdistension, hemodynamic compromise, and RV failure", "Eliminates all shunt fraction", "Achieves a P/F ratio > 300"],
    correctIndex: 1,
    explanation: "Optimal PEEP balances lung recruitment (preventing atelectrauma) against overdistension (volutrauma) and cardiovascular compromise. No single value fits all patients; individualized titration is required.",
    difficulty: "medium",
  },
  {
    text: "Which arterial blood gas pattern is expected in a patient with acute pulmonary embolism on mechanical ventilation?",
    options: ["High PaCO2, normal PaO2", "Low PaCO2 (if breathing spontaneously), low PaO2, widened P(a-A)O2 gradient", "Normal ABG", "High PaCO2 and high PaO2"],
    correctIndex: 1,
    explanation: "PE causes dead space ventilation (V/Q mismatch): hypoxemia with a widened A-a gradient. Spontaneously breathing patients hyperventilate, causing low PaCO2. EtCO2 also drops with widening PaCO2–EtCO2 gradient.",
    difficulty: "hard",
  },
  {
    text: "Volume-assured pressure support (VAPS) differs from PSV in that:",
    options: ["VAPS is purely flow-cycled", "VAPS automatically adjusts pressure support up or down to achieve a minimum guaranteed tidal volume", "VAPS has no patient-triggering capability", "VAPS is identical to PRVC"],
    correctIndex: 1,
    explanation: "VAPS (e.g., Averaged Volume-Assured Pressure Support) is a dual-control PSV variant that adjusts pressure support over multiple breaths to maintain the target tidal volume — useful in patients with variable effort.",
    difficulty: "hard",
  },
  {
    text: "Which statement about PEEP and FRC is correct?",
    options: ["PEEP decreases FRC", "PEEP increases FRC by splinting the airway open at end-expiration", "PEEP has no effect on FRC", "PEEP only affects FRC during inspiration"],
    correctIndex: 1,
    explanation: "PEEP maintains positive airway pressure at end-expiration, preventing alveolar collapse and increasing functional residual capacity (FRC). This recruits collapsed alveoli and improves oxygenation.",
    difficulty: "easy",
  },
  {
    text: "In severe status asthmaticus with dynamic hyperinflation, a 'disconnect strategy' (brief circuit disconnection) can be used to:",
    options: ["Increase FiO2", "Allow trapped air to escape rapidly and reduce auto-PEEP, reversing hemodynamic collapse", "Reduce bronchospasm", "Measure plateau pressure"],
    correctIndex: 1,
    explanation: "In extreme auto-PEEP causing hemodynamic collapse, briefly disconnecting the ETT from the circuit (apnea) allows complete passive exhalation and dramatic auto-PEEP reduction, potentially restoring cardiac output.",
    difficulty: "hard",
  },
  {
    text: "The Murphey eye on an endotracheal tube serves to:",
    options: ["Allow suctioning of subglottic secretions", "Provide a secondary lumen if the main lumen is occluded against the tracheal wall", "Indicate correct tube depth", "Allow cuff inflation"],
    correctIndex: 1,
    explanation: "The Murphy eye is a side port near the ETT tip. If the main lumen presses against the tracheal wall, gas still flows through the Murphy eye, preventing complete occlusion.",
    difficulty: "medium",
  },
  {
    text: "After a failed extubation, which intervention has the strongest evidence for preventing re-intubation in high-risk patients?",
    options: ["Immediate re-intubation regardless of clinical status", "High-flow nasal cannula (HFNC) in hypoxemic patients; NIV in hypercapnic/cardiac risk patients", "Standard face mask oxygen at 10 L/min", "CPAP via face mask in all patients"],
    correctIndex: 1,
    explanation: "HFNC reduces re-intubation in post-extubation hypoxemic high-risk patients (OPTIFLOW trial). NIV is preferred in patients with hypercapnic failure or cardiac disease. Choice depends on the mechanism of extubation failure.",
    difficulty: "hard",
  },
  {
    text: "What characterizes 'refractory hypoxemia' in ARDS?",
    options: ["SpO2 < 98% on room air", "Persistent PaO2 < 60 mmHg or P/F < 100 despite FiO2 ≥ 0.60, PEEP ≥ 10, and optimal positioning", "Any PaO2 < 80 mmHg on supplemental oxygen", "SpO2 < 94% on 2 L nasal cannula"],
    correctIndex: 1,
    explanation: "Refractory hypoxemia = inability to maintain adequate oxygenation (P/F < 100 or PaO2 < 60) despite maximal conventional therapy (high FiO2, high PEEP, prone positioning). This triggers consideration of rescue therapies (iNO, ECMO).",
    difficulty: "medium",
  },
  {
    text: "Pressure-time product (PTP) is a measure of:",
    options: ["Lung compliance", "Total respiratory muscle effort and work of breathing integrated over time", "Mean airway pressure", "Ventilator-delivered work"],
    correctIndex: 1,
    explanation: "PTP integrates the muscle pressure over time and reflects the total effort of the respiratory muscles, including isometric work not captured by tidal volume measurements — useful for assessing WOB in weaning.",
    difficulty: "hard",
  },
  {
    text: "Pulmonary mechanics measured with the least airflow artifact require:",
    options: ["High inspiratory flow rates", "No-flow conditions (inspiratory or expiratory holds)", "Continuous flow measurement", "Maximum patient effort"],
    correctIndex: 1,
    explanation: "Airway resistance drops out of the equation only when flow is zero. Inspiratory holds measure Pplat (compliance) and expiratory holds measure auto-PEEP — both measured under no-flow conditions.",
    difficulty: "medium",
  },
  {
    text: "Humidification of inspired gas in mechanically ventilated patients is critical because:",
    options: ["Dry gas increases dead space", "Bypassing the upper airway removes the natural humidification system — dry gas causes mucosal damage, secretion retention, and ETT obstruction", "Humidification reduces airway resistance", "Dry gas reduces FiO2 delivery"],
    correctIndex: 1,
    explanation: "The ETT bypasses the nose and oropharynx. Without humidification, dry gas damages the tracheal mucosa, impairs mucociliary clearance, thickens secretions, and can obstruct the ETT with inspissated mucus.",
    difficulty: "easy",
  },
  {
    text: "Heated wire circuits (HME vs. active humidifier) in MV — which is preferred for patients with thick secretions?",
    options: ["HME (heat-moisture exchanger) — it retains more moisture", "Active heated humidifier — provides more complete humidification and is better for patients with thick secretions or high minute ventilation", "Both are equivalent", "HME is always preferred due to lower VAP risk"],
    correctIndex: 1,
    explanation: "Active heated humidifiers deliver superior humidity (37°C, 44 mg/L H₂O) vs. HME (approximately 30 mg/L). For patients with thick secretions, copious secretions, or high minute ventilation (>10 L/min), active humidification is preferred.",
    difficulty: "medium",
  },
  {
    text: "The Trendelenburg position (head-down, feet-up) during mechanical ventilation:",
    options: ["Improves FRC and oxygenation", "Reduces FRC, worsens V/Q matching, but may improve venous return in hypotension", "Eliminates auto-PEEP", "Is contraindicated in any ventilated patient"],
    correctIndex: 1,
    explanation: "Trendelenburg reduces FRC and can worsen oxygenation. However, it increases venous return (preload) and may be temporarily used in hemodynamic compromise. It is generally avoided in respiratory failure.",
    difficulty: "medium",
  },
  {
    text: "During exhalation in volume-control ventilation, the expiratory flow waveform should:",
    options: ["Rise steeply then plateau", "Decay exponentially back to zero (passive recoil)", "Match the inspiratory flow pattern", "Show no flow until the next breath triggers"],
    correctIndex: 1,
    explanation: "Normal passive exhalation produces an exponentially decaying flow waveform (highest flow at the start of exhalation, tapering to zero at end-expiration). Failure to reach zero indicates air trapping.",
    difficulty: "medium",
  },
  {
    text: "Which ARDS rescue therapy can be delivered via the ventilator circuit and selectively reduces intrapulmonary shunt without systemic effects?",
    options: ["IV prostaglandins", "Inhaled nitric oxide (iNO)", "IV hydrocortisone", "Systemic sildenafil"],
    correctIndex: 1,
    explanation: "iNO is inhaled and vasodilates only ventilated lung regions. It is immediately bound by hemoglobin in the blood, preventing systemic vasodilation — making it a selective pulmonary vasodilator that improves V/Q matching.",
    difficulty: "medium",
  },
  {
    text: "Glasgow Coma Scale (GCS) threshold typically considered sufficient for airway protection and potential extubation is:",
    options: ["GCS ≥ 5", "GCS ≥ 8", "GCS ≥ 13", "GCS = 15 only"],
    correctIndex: 1,
    explanation: "GCS ≤ 8 is traditionally considered the threshold for airway protection. However, extubation decisions in ventilated patients use multiple criteria (secretion management, cough, RSBI). GCS ≥ 8 alone is insufficient for extubation without other assessments.",
    difficulty: "medium",
  },
  {
    text: "In a patient on VC-AC at RR 20, TV 400 mL, PEEP 8, FiO2 0.55, SpO2 is 96%. The next priority is:",
    options: ["Increase PEEP to 12 cmH₂O", "Wean FiO2 to 0.40 to reduce oxygen toxicity risk while maintaining SpO2 target", "Decrease TV to 300 mL", "Switch to PC-AC immediately"],
    correctIndex: 1,
    explanation: "SpO2 96% on FiO2 0.55 — oxygenation is meeting the target. The priority is reducing FiO2 to ≤ 0.40–0.50 to minimize oxygen toxicity risk. Changing PEEP or TV without indication could worsen the patient.",
    difficulty: "medium",
  },
];

async function main() {
  const existingRes = await pool.query(
    "SELECT COUNT(*) FROM questions WHERE topic_id = $1",
    [MV_TOPIC_ID]
  );
  const existing = parseInt(existingRes.rows[0].count, 10);
  console.log(`Existing MV questions: ${existing}`);

  console.log(`Inserting ${questions.length} additional MV questions...`);

  for (const q of questions) {
    await pool.query(
      `INSERT INTO questions (topic_id, text, options, correct_index, explanation, difficulty)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [MV_TOPIC_ID, q.text, JSON.stringify(q.options), q.correctIndex, q.explanation, q.difficulty]
    );
  }

  const finalRes = await pool.query(
    "SELECT COUNT(*) FROM questions WHERE topic_id = $1",
    [MV_TOPIC_ID]
  );
  console.log(`Done. MV questions now: ${finalRes.rows[0].count}`);
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
