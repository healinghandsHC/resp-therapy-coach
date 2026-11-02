import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useCreateSession, useListQuestions } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { getListSessionsQueryKey } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2, BookOpen, AlertCircle, Play, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const FIXED_PRESETS = [10, 25, 60, 90, 150, 250];

export function Exam() {
  const [, setLocation] = useLocation();
  const [questionCount, setQuestionCount] = useState(60);
  const [isStarting, setIsStarting] = useState(false);
  const queryClient = useQueryClient();
  const createSession = useCreateSession();
  const { data: allQuestions } = useListQuestions({});
  const totalAvailable = allQuestions?.length ?? 0;

  // Once the bank size loads, clamp current selection if it somehow exceeds it
  useEffect(() => {
    if (totalAvailable > 0 && questionCount > totalAvailable) {
      setQuestionCount(totalAvailable);
    }
  }, [totalAvailable]);

  const sliderMax = totalAvailable > 0 ? totalAvailable : 685;
  const effectiveCount = totalAvailable > 0 ? Math.min(questionCount, totalAvailable) : questionCount;
  const exceedsPool = totalAvailable > 0 && questionCount > totalAvailable;
  const isAllSelected = totalAvailable > 0 && questionCount >= totalAvailable;

  // Build preset list: fixed presets below the bank size, plus a dynamic "All" entry
  const presets = totalAvailable > 0
    ? [...FIXED_PRESETS.filter(p => p < totalAvailable), totalAvailable]
    : FIXED_PRESETS;

  const handleStart = () => {
    if (isStarting) return;
    setIsStarting(true);
    createSession.mutate(
      { data: { mode: "exam", questionCount: effectiveCount } },
      {
        onSuccess: (session) => {
          queryClient.invalidateQueries({ queryKey: getListSessionsQueryKey() });
          setLocation(`/test/${session.id}`);
        },
        onError: () => setIsStarting(false),
      }
    );
  };

  const presetLabel = (p: number) => {
    if (p === 60) return "60 (NBRC)";
    if (totalAvailable > 0 && p === totalAvailable) return `${p} (All)`;
    return String(p);
  };

  return (
    <div className="p-6 md:p-8 max-w-2xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Comprehensive Exam</h1>
        <p className="text-muted-foreground mt-2">
          A full-length practice exam simulating the NBRC Therapist Multiple-Choice (TMC)
          examination format.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <BookOpen className="w-5 h-5 text-primary" /> Question Count
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-4xl font-bold text-primary tabular-nums">{effectiveCount}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {isAllSelected ? "questions — full bank" : "questions selected"}
              </p>
            </div>
            {totalAvailable > 0 && (
              <p className="text-xs text-muted-foreground">{totalAvailable} available in bank</p>
            )}
          </div>

          <Slider
            min={10}
            max={sliderMax}
            step={5}
            value={[Math.min(questionCount, sliderMax)]}
            onValueChange={([val]) => setQuestionCount(val)}
            className="w-full"
          />

          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => setQuestionCount(p)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium border transition-colors",
                  questionCount === p || (p === totalAvailable && isAllSelected)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                )}
              >
                {presetLabel(p)}
              </button>
            ))}
          </div>

          {exceedsPool && (
            <div className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg px-3 py-2.5">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                Only {totalAvailable} questions are in the bank — your exam will use all {totalAvailable}.
              </span>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" /> Exam Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2.5">
            {[
              "Covers all 10 respiratory therapy topic areas.",
              "Questions are randomly selected from the complete question bank.",
              "Questions are drawn from easy, medium, and hard difficulty levels.",
              "Immediate explanations are shown after each answer.",
              "A passing score is typically 70–80% on NBRC credentialing exams.",
              "Full question review available after completion.",
            ].map((fact, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{fact}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800">
        <CardContent className="p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm text-amber-800 dark:text-amber-300">
              Study Recommendation
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-400 mt-0.5">
              For best results, study individual topics before attempting the full exam. Use
              the Progress page to identify weak areas.
            </p>
          </div>
        </CardContent>
      </Card>

      <Button
        size="lg"
        onClick={handleStart}
        disabled={isStarting}
        className="w-full"
        data-testid="button-start-exam"
      >
        <Play className="w-5 h-5 mr-2" />
        {isStarting ? "Starting exam..." : `Begin ${effectiveCount}-Question Exam`}
      </Button>
    </div>
  );
}
