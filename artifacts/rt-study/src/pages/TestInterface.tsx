import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "wouter";
import {
  useGetSession,
  getGetSessionQueryKey,
  useSubmitAnswer,
  useCompleteSession,
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, XCircle, ArrowRight, Flag, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { findFirstUnansweredIndex } from "@/lib/session-navigation";

export function TestInterface() {
  const params = useParams();
  const sessionId = Number(params.sessionId);
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerResult, setAnswerResult] = useState<{
    isCorrect: boolean;
    correctIndex: number;
    explanation: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const hasInitializedPosition = useRef(false);

  const { data: session, isLoading, isError } = useGetSession(sessionId, {
    query: {
      enabled: !!sessionId,
      queryKey: getGetSessionQueryKey(sessionId),
      retry: 2,
    },
  });

  const submitAnswer = useSubmitAnswer();
  const completeSession = useCompleteSession();

  useEffect(() => {
    if (session && session.status === "completed") {
      setLocation(`/history/${sessionId}`);
    }
  }, [session, sessionId, setLocation]);

  useEffect(() => {
    if (!session || hasInitializedPosition.current) return;

    const firstUnanswered = findFirstUnansweredIndex(session.questions, session.answers);
    if (firstUnanswered !== -1) {
      setCurrentIndex(firstUnanswered);
    }
    hasInitializedPosition.current = true;
  }, [session]);

  const currentQuestion = session?.questions[currentIndex];
  const existingAnswer = session?.answers.find(
    (a) => a.questionId === currentQuestion?.id
  );

  const handleSelectOption = (index: number) => {
    if (existingAnswer || answerResult) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = async () => {
    if (selectedOption === null || !currentQuestion || isSubmitting) return;
    setIsSubmitting(true);
    submitAnswer.mutate(
      { id: sessionId, data: { questionId: currentQuestion.id, selectedIndex: selectedOption } },
      {
        onSuccess: (result) => {
          setAnswerResult(result);
          queryClient.invalidateQueries({
            queryKey: getGetSessionQueryKey(sessionId),
          });
        },
        onSettled: () => setIsSubmitting(false),
      }
    );
  };

  const handleNext = () => {
    setAnswerResult(null);
    setSelectedOption(null);
    if (currentIndex < (session?.questions.length ?? 0) - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleFinish = async () => {
    if (isCompleting) return;
    setIsCompleting(true);
    completeSession.mutate({ id: sessionId }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getGetSessionQueryKey(sessionId) });
        setLocation(`/history/${sessionId}`);
      },
      onSettled: () => setIsCompleting(false),
    });
  };

  if (isLoading) {
    return (
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-2 w-full" />
        <Skeleton className="h-48 w-full" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-14 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !session) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center space-y-4">
        <p className="text-muted-foreground">
          {isError ? "Unable to load this session. It may have expired." : "Session not found."}
        </p>
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center space-y-6">
        <p className="text-muted-foreground">No questions found in this session.</p>
        <Link href="/topics">
          <Button variant="outline">Back to Topics</Button>
        </Link>
      </div>
    );
  }

  const totalQuestions = session.questions.length;
  const answeredCount = session.answers.length;
  const progressPct = Math.round((answeredCount / totalQuestions) * 100);
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const showFeedback = answerResult !== null || !!existingAnswer;

  const effectiveCorrectIndex =
    answerResult?.correctIndex ?? currentQuestion.correctIndex;
  const isCorrect = answerResult?.isCorrect ?? existingAnswer?.isCorrect ?? false;
  const effectiveSelected =
    selectedOption ?? existingAnswer?.selectedIndex ?? null;
  const explanation =
    answerResult?.explanation ?? currentQuestion.explanation;

  const difficultyColor: Record<string, string> = {
    easy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    hard: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <ChevronLeft className="w-4 h-4 mr-1" /> Exit
            </Button>
          </Link>
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
        </div>
        <span
          className={cn(
            "text-xs font-semibold px-2.5 py-1 rounded-full capitalize",
            difficultyColor[currentQuestion.difficulty] ??
              "bg-muted text-muted-foreground"
          )}
        >
          {currentQuestion.difficulty}
        </span>
      </div>

      <div className="space-y-1">
        <Progress value={progressPct} className="h-2" />
        <p className="text-xs text-muted-foreground text-right">
          {answeredCount}/{totalQuestions} answered
        </p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <p
          className="text-lg font-medium leading-relaxed text-foreground"
          data-testid="question-text"
        >
          {currentQuestion.text}
        </p>
      </div>

      <div className="space-y-3">
        {currentQuestion.options.map((option, idx) => {
          const letter = ["A", "B", "C", "D"][idx];
          const isSelected = effectiveSelected === idx;
          const isCorrectAnswer = showFeedback && idx === effectiveCorrectIndex;
          const isWrongSelected =
            showFeedback && isSelected && !isCorrectAnswer;

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={showFeedback}
              data-testid={`option-${letter}`}
              className={cn(
                "w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                !showFeedback && !isSelected &&
                  "border-border bg-card hover:border-primary/40 hover:bg-accent/30 cursor-pointer",
                !showFeedback && isSelected &&
                  "border-primary bg-primary/8 ring-1 ring-primary cursor-pointer",
                isCorrectAnswer &&
                  "border-green-500 bg-green-50 dark:bg-green-900/20",
                isWrongSelected &&
                  "border-red-500 bg-red-50 dark:bg-red-900/20",
                showFeedback && !isSelected && !isCorrectAnswer && "opacity-50"
              )}
            >
              <span
                className={cn(
                  "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border",
                  !showFeedback && !isSelected && "border-border text-muted-foreground",
                  !showFeedback && isSelected && "border-primary bg-primary text-primary-foreground",
                  isCorrectAnswer && "border-green-500 bg-green-500 text-white",
                  isWrongSelected && "border-red-500 bg-red-500 text-white"
                )}
              >
                {letter}
              </span>
              <span className="flex-1 text-sm leading-relaxed pt-0.5">{option}</span>
              {isCorrectAnswer && (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              )}
              {isWrongSelected && (
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div
          className={cn(
            "rounded-xl border p-5 space-y-2",
            isCorrect
              ? "border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700"
              : "border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700"
          )}
        >
          <div className="flex items-center gap-2 font-semibold text-sm">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-green-700 dark:text-green-400">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-red-600" />
                <span className="text-red-700 dark:text-red-400">Incorrect</span>
              </>
            )}
          </div>
          <p className="text-sm leading-relaxed text-foreground">{explanation}</p>
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>

        <div className="flex gap-3">
          {!showFeedback ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={selectedOption === null || isSubmitting}
              data-testid="button-submit-answer"
            >
              {isSubmitting ? "Submitting..." : "Submit Answer"}
            </Button>
          ) : isLastQuestion ? (
            <Button
              onClick={handleFinish}
              disabled={isCompleting}
              data-testid="button-finish-test"
              className="bg-primary"
            >
              <Flag className="w-4 h-4 mr-2" />
              {isCompleting ? "Finishing..." : "Finish Test"}
            </Button>
          ) : (
            <Button onClick={handleNext} data-testid="button-next-question">
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
