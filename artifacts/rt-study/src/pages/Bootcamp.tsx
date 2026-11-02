import { useState } from "react";
import { useLocation, Link } from "wouter";
import { useGetTopic, getGetTopicQueryKey, useCreateSession, getListSessionsQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Wind, Settings, Activity, TrendingUp, AlertTriangle, Play,
  ChevronDown, ChevronRight, BookOpen, Zap, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const MV_TOPIC_ID = 4;

const sections = [
  {
    id: "modes",
    icon: Wind,
    title: "Ventilator Modes",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800",
    content: [
      {
        heading: "Volume-Control Assist-Control (VC-AC)",
        body: "Every breath — machine-timed OR patient-triggered — delivers the full preset tidal volume. Guarantees minute ventilation but can cause respiratory alkalosis if the patient over-breathes. The most common initial mode for critically ill patients."
      },
      {
        heading: "Pressure-Control Assist-Control (PC-AC)",
        body: "Every breath delivers a fixed inspiratory pressure rather than a fixed volume. Tidal volume varies with compliance and resistance changes. Decelerating flow waveform reduces peak pressure and may improve gas distribution."
      },
      {
        heading: "SIMV (Synchronized Intermittent Mandatory Ventilation)",
        body: "Machine delivers timed full breaths at the set rate. Between machine breaths, the patient breathes spontaneously — only against circuit resistance unless Pressure Support is added. Generally inferior to A/C for initial support; still used in weaning protocols."
      },
      {
        heading: "Pressure Support Ventilation (PSV)",
        body: "Every breath is patient-triggered; the ventilator augments each breath with a fixed pressure boost above PEEP. Tidal volume and rate are entirely patient-controlled. Used for weaning and SBTs. No backup rate (apnea alarm critical)."
      },
      {
        heading: "PRVC (Pressure-Regulated Volume Control)",
        body: "Dual-control mode that targets a volume by auto-adjusting inspiratory pressure breath-to-breath. Combines volume guarantee with pressure-control flow pattern. Lowers PIP when compliance improves; raises it when compliance worsens."
      },
      {
        heading: "APRV / BiLevel",
        body: "Maintains a high sustained CPAP (P-High, ~25-35 cmH₂O) for most of the cycle with brief releases to P-Low (~0) for CO2 clearance. Spontaneous breathing throughout. Used in refractory ARDS for sustained lung recruitment. Requires adequate respiratory drive."
      },
      {
        heading: "HFOV (High-Frequency Oscillatory Ventilation)",
        body: "Oscillates tiny volumes (1-3 mL/kg) at very high frequencies (3-15 Hz) around a set mean airway pressure. Virtually eliminates tidal breathing. Relies on diffusion and non-convective gas transport. Requires deep sedation and NMB. Last-line rescue in pediatric and adult ARDS."
      },
    ]
  },
  {
    id: "settings",
    icon: Settings,
    title: "Settings & Calculations",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    content: [
      {
        heading: "Tidal Volume (TV) — Lung-Protective Target",
        body: "ARDSnet protocol: 6 mL/kg IBW. IBW (males) = 50 + 2.3 × (height in inches − 60). IBW (females) = 45.5 + 2.3 × (height in inches − 60). Never use actual body weight. In non-ARDS patients, 6-8 mL/kg IBW is appropriate."
      },
      {
        heading: "Respiratory Rate (RR)",
        body: "Typical initial setting: 14-18 breaths/min. Adjust to achieve target minute ventilation and PaCO2. In ARDS, rate may be increased to 20-35 to compensate for low tidal volumes. Watch for auto-PEEP at high rates."
      },
      {
        heading: "PEEP (Positive End-Expiratory Pressure)",
        body: "Standard initial PEEP: 5 cmH₂O. In ARDS, titrate per ARDSnet FiO2-PEEP table or to best static compliance. Higher PEEP recruits collapsed alveoli and prevents derecruitment atelectrauma. Balance against overdistension risk."
      },
      {
        heading: "FiO2 (Fraction of Inspired Oxygen)",
        body: "Start at 1.0 (100%) immediately post-intubation; wean rapidly to ≤0.60 to avoid oxygen toxicity. Target SpO2 88-95% (or PaO2 55-80 mmHg in ARDS). Use FiO2-PEEP tables to coordinate weaning."
      },
      {
        heading: "I:E Ratio & Inspiratory Time",
        body: "Normal I:E = 1:2 (1 second in, 2 out). For COPD/asthma: lengthen expiratory time → I:E 1:3 to 1:4. For ARDS refractory hypoxemia: inverse ratio (1:1 or 2:1) increases mean airway pressure. Typical adult inspiratory time: 0.8-1.2 seconds."
      },
      {
        heading: "Minute Ventilation & CO2 Relationship",
        body: "VE = TV × RR. CO2 is inversely proportional to alveolar ventilation. To decrease PaCO2 → increase VE (raise RR or TV). To increase PaCO2 (permissive hypercapnia) → decrease VE. Double the VE → approximately halve the PaCO2."
      },
      {
        heading: "Static vs. Dynamic Compliance",
        body: "Static Cstat = TV / (Pplat − PEEP). Reflects lung-chest wall compliance (no airflow). Normal: 60-100 mL/cmH₂O. Dynamic Cdyn = TV / (PIP − PEEP). Reflects compliance + resistance. Cstat < Cdyn always. Widening gap suggests increasing resistance."
      },
      {
        heading: "Driving Pressure (ΔP)",
        body: "ΔP = Pplat − PEEP. Represents the tidal stress applied per breath. Target ΔP ≤15 cmH₂O in ARDS. Studies show driving pressure is the strongest modifiable risk factor for ARDS mortality — even more predictive than TV or Pplat alone."
      },
    ]
  },
  {
    id: "monitoring",
    icon: Activity,
    title: "Monitoring & Troubleshooting Alarms",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    content: [
      {
        heading: "High Peak Pressure Alarm — Decision Framework",
        body: "Step 1: Perform inspiratory hold → measure Pplat. HIGH PIP + NORMAL Pplat → resistance problem (bronchospasm, secretions, bite block, kinked tube, mucus plug). HIGH PIP + HIGH Pplat → compliance problem (ARDS, pneumothorax, pulmonary edema, main-stem intubation, circuit water)."
      },
      {
        heading: "Low Pressure / Low Tidal Volume Alarm",
        body: "Suggests a leak: ETT cuff leak or deflation, circuit disconnect, tracheoesophageal fistula, chest tube with large air leak, or bronchopleural fistula. Check cuff pressure (goal 20-30 cmH₂O), check all circuit connections systematically."
      },
      {
        heading: "Auto-PEEP Detection",
        body: "Method: apply expiratory hold at end-expiration (2-5 sec) with the patient passive. The airway pressure displayed equals total PEEP. Auto-PEEP = Total PEEP − Set PEEP. Auto-PEEP >5 cmH₂O is clinically significant. Causes hemodynamic compromise by reducing venous return."
      },
      {
        heading: "Auto-PEEP Management",
        body: "Decrease RR (longer expiratory time), reduce TV, increase expiratory flow rate (shorter inspiration), treat bronchospasm, suction secretions, ensure adequate sedation. Add extrinsic PEEP ~80% of measured auto-PEEP to reduce trigger work without worsening air trapping."
      },
      {
        heading: "Patient-Ventilator Dyssynchrony Types",
        body: "• Missed trigger: effort without machine response (high auto-PEEP, sensitivity threshold too high). • Double-trigger: one neural breath causes two machine breaths. • Flow starvation: insufficient inspiratory flow for demand (patient 'pulling' against vent). • Premature cycling: machine cycles off before neural inspiration ends. • Delayed cycling: machine stays in inspiration too long (common in PSV with COPD)."
      },
      {
        heading: "Ventilator Waveform Interpretation",
        body: "Pressure waveform: scooped appearance during inspiration → flow starvation. Pressure-time: notch at end of inspiration → patient attempting to exhale before cycling. Flow waveform: flow at zero at start of inspiration → missed trigger (effort visible as negative deflection). Expiratory flow not returning to zero → auto-PEEP."
      },
    ]
  },
  {
    id: "weaning",
    icon: TrendingUp,
    title: "Weaning & Liberation",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    content: [
      {
        heading: "Daily Liberation Checklist (ABCDEF Bundle)",
        body: "A — Assess/manage pain. B — Both SAT (spontaneous awakening trial) + SBT. C — Choice of analgesia/sedation (minimize). D — Delirium screening (CAM-ICU). E — Early mobilization/Exercise. F — Family engagement. The bundle reduces ICU LOS, delirium, and 90-day mortality."
      },
      {
        heading: "SBT Prerequisites",
        body: "Clinical improvement from underlying cause; FiO2 ≤40-60%; PEEP ≤5-8 cmH₂O; hemodynamic stability (no high-dose vasopressors); intact respiratory drive; able to follow simple commands. RSBI <105 supports proceeding with SBT."
      },
      {
        heading: "SBT Methods & Duration",
        body: "T-piece: patient breathes from humidified oxygen source disconnected from ventilator — highest work of breathing, most demanding test. Low-level PSV (5-8 cmH₂O above PEEP): most commonly used — provides minimal support above the vent circuit. CPAP alone. Duration: 30-120 minutes. Pass → extubate same day."
      },
      {
        heading: "SBT Failure Criteria (Any One = Stop)",
        body: "RR >35 or <8. SpO2 <88-90%. Signs of respiratory distress (diaphoresis, paradoxical breathing, accessory muscle use). HR >140 or >20% change. BP >180/90 or <90 systolic. New arrhythmia. Agitation, altered mental status, or diaphoresis."
      },
      {
        heading: "Extubation Readiness Criteria",
        body: "Passed SBT + able to protect airway (cough, secretions manageable, GCS ≥8-10, follows commands) + NIF more negative than −20 cmH₂O + VC >10-15 mL/kg + RSBI <105. Cuff leak test before extubation reduces post-extubation stridor, especially after prolonged intubation."
      },
      {
        heading: "Post-Extubation Management",
        body: "High-flow nasal cannula (HFNC) reduces re-intubation risk when applied prophylactically after extubation in high-risk patients (TORCH trial). NIV (BiPAP) reduces post-extubation respiratory failure in high-risk COPD and cardiac patients. Have re-intubation equipment at bedside for 30-60 min post-extubation."
      },
      {
        heading: "Tracheotomy Timing",
        body: "Early tracheotomy (7-10 days) vs. late (>14 days): evidence mixed. Advantages of trach: improved patient comfort, easier secretion management, reduced sedation, allows oral feeding, facilitates long-term weaning in chronic respiratory failure. Percutaneous dilational tracheotomy (PDT) most common bedside technique."
      },
    ]
  },
  {
    id: "ards",
    icon: AlertTriangle,
    title: "ARDS & Advanced Concepts",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    content: [
      {
        heading: "Berlin ARDS Definition (2012)",
        body: "Onset within 1 week of insult. Bilateral opacities on CXR not explained by effusion/collapse/nodules. Respiratory failure not explained by cardiac failure/fluid overload. P/F ratio <300 mmHg on PEEP ≥5 cmH₂O. Mild: 201-300. Moderate: 101-200. Severe: ≤100."
      },
      {
        heading: "ARDSnet Lung-Protective Bundle",
        body: "TV 6 mL/kg IBW (can reduce to 4). Pplat ≤30 cmH₂O. Driving pressure ≤15 cmH₂O. FiO2/PEEP titration per tables. Permissive hypercapnia (pH ≥7.20). Conservative fluid strategy after hemodynamic stability. Head-of-bed 30-45°."
      },
      {
        heading: "Prone Positioning",
        body: "PROSEVA trial: ≥16 hours/day prone reduced 28-day mortality from 32.8% → 16% in severe ARDS (P/F <150). Mechanism: redistributes ventilation to dorsal (larger, less collapsed) lung regions, improves V/Q matching, reduces driving pressure, decreases dorsal compression. Requires team coordination and pressure injury prevention."
      },
      {
        heading: "Neuromuscular Blockade (NMB) in ARDS",
        body: "Early cisatracurium infusion (≤48 hours) in moderate-severe ARDS (P/F <150): reduces dyssynchrony, P-SILI, and systemic inflammation. ACURASYS trial: mortality benefit; ROSE trial: no benefit with lighter sedation targets. Current practice: use NMB when dyssynchrony persists despite deep sedation or P/F <150 refractory to other measures."
      },
      {
        heading: "Inhaled Pulmonary Vasodilators",
        body: "Inhaled nitric oxide (iNO) and inhaled epoprostenol both selectively vasodilate ventilated lung units → improved V/Q matching → improved PaO2. Neither has shown consistent mortality benefit. Used as bridge therapy for severe ARDS (P/F <100) or pulmonary hypertension. iNO: monitor methemoglobin. Abrupt discontinuation causes rebound pulmonary hypertension."
      },
      {
        heading: "VV-ECMO Indications in ARDS",
        body: "EOLIA trial criteria: P/F <80 after ≥16 hr prone + optimal MV; or pH <7.25 + PaCO2 >60 mmHg >6 hr; or inability to ventilate safely. ECMO provides full oxygenation and CO2 removal via extracorporeal circuit, allowing 'ultra-protective' ventilation (TV 3-4 mL/kg). Centers require ECMO expertise and volume."
      },
      {
        heading: "Ventilator-Associated Pneumonia (VAP) Prevention",
        body: "VAP Bundle: (1) Head of bed ≥30°. (2) Daily sedation vacation + SBT. (3) Oral chlorhexidine. (4) Subglottic secretion drainage ETT. (5) DVT prophylaxis. (6) PUD prophylaxis. NOT recommended: routine ventilator circuit changes. VAP diagnosis: new consolidation + fever/leukocytosis + purulent secretions >48 hr after intubation."
      },
    ]
  }
];

interface SectionProps {
  section: typeof sections[number];
  isOpen: boolean;
  onToggle: () => void;
}

function StudySection({ section, isOpen, onToggle }: SectionProps) {
  const Icon = section.icon;
  return (
    <div className={cn("rounded-xl border", section.bg)}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
        data-testid={`section-toggle-${section.id}`}
      >
        <div className="flex items-center gap-3">
          <Icon className={cn("w-5 h-5", section.color)} />
          <span className="font-semibold text-base">{section.title}</span>
          <Badge variant="secondary" className="text-xs">{section.content.length} topics</Badge>
        </div>
        {isOpen
          ? <ChevronDown className="w-4 h-4 text-muted-foreground" />
          : <ChevronRight className="w-4 h-4 text-muted-foreground" />
        }
      </button>

      {isOpen && (
        <div className="px-5 pb-6 space-y-5 border-t border-inherit pt-5">
          {section.content.map((item, i) => (
            <div key={i} className="space-y-1.5">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <CheckCircle2 className={cn("w-4 h-4 flex-shrink-0", section.color)} />
                {item.heading}
              </h4>
              <p className="text-sm text-foreground leading-relaxed pl-6">{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Bootcamp() {
  const [, setLocation] = useLocation();
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["modes"]));
  const [isStarting, setIsStarting] = useState(false);
  const queryClient = useQueryClient();

  const { data: topic, isLoading } = useGetTopic(MV_TOPIC_ID, {
    query: { enabled: true, queryKey: getGetTopicQueryKey(MV_TOPIC_ID) }
  });

  const createSession = useCreateSession();

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setOpenSections(new Set(sections.map(s => s.id)));
  const collapseAll = () => setOpenSections(new Set());

  const handleStartQuiz = () => {
    if (isStarting) return;
    setIsStarting(true);
    createSession.mutate(
      { data: { mode: "topic", topicId: MV_TOPIC_ID } },
      {
        onSuccess: (session) => {
          queryClient.invalidateQueries({ queryKey: getListSessionsQueryKey() });
          setLocation(`/test/${session.id}`);
        },
        onError: () => setIsStarting(false),
      }
    );
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto w-full space-y-8 pb-24">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">MV Bootcamp</h1>
            <p className="text-muted-foreground text-sm">Mechanical Ventilation — Deep Dive</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          A structured deep-dive into mechanical ventilation covering modes, settings, monitoring,
          weaning, ARDS management, and advanced concepts aligned with the NBRC TMC exam.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            {isLoading ? (
              <Skeleton className="h-8 w-12 mx-auto" />
            ) : (
              <p className="text-2xl font-bold text-primary">{topic?.questionCount ?? "--"}</p>
            )}
            <p className="text-xs text-muted-foreground mt-1">Practice Questions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{sections.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Study Sections</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{sections.reduce((a, s) => a + s.content.length, 0)}</p>
            <p className="text-xs text-muted-foreground mt-1">Topics Covered</p>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          size="lg"
          onClick={handleStartQuiz}
          disabled={isStarting}
          className="flex-1 sm:flex-none sm:min-w-[220px]"
          data-testid="button-start-mv-bootcamp-quiz"
        >
          <Play className="w-5 h-5 mr-2" />
          {isStarting ? "Starting..." : `Start Bootcamp Quiz (${topic?.questionCount ?? "34"} Q)`}
        </Button>
        <Link href="/topics/4">
          <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
            <BookOpen className="w-4 h-4 mr-2" />
            Study Notes
          </Button>
        </Link>
      </div>

      <Separator />

      {/* Study Guide */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Study Guide</h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={expandAll}>Expand All</Button>
            <Button variant="ghost" size="sm" onClick={collapseAll}>Collapse</Button>
          </div>
        </div>

        <div className="space-y-3">
          {sections.map(section => (
            <StudySection
              key={section.id}
              section={section}
              isOpen={openSections.has(section.id)}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="rounded-xl border bg-card p-6 text-center space-y-3">
        <p className="font-semibold">Ready to test your knowledge?</p>
        <p className="text-sm text-muted-foreground">
          Take the full MV Bootcamp quiz with all {topic?.questionCount ?? 34} questions — modes,
          settings, troubleshooting, weaning, and ARDS.
        </p>
        <Button
          onClick={handleStartQuiz}
          disabled={isStarting}
          size="lg"
          data-testid="button-start-mv-bootcamp-quiz-bottom"
        >
          <Play className="w-5 h-5 mr-2" />
          {isStarting ? "Starting..." : "Launch MV Bootcamp Quiz"}
        </Button>
      </div>
    </div>
  );
}
