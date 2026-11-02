import { useParams, Link } from "wouter";
import { useGetSession, getGetSessionQueryKey } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, XCircle, ArrowLeft, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export function SessionReview() {
  const params = useParams();
  const sessionId = Number(params.sessionId);

  const { data: session, isLoading, isError } = useGetSession(sessionId, {
    query: {
      enabled: !!sessionId,
      queryKey: getGetSessionQueryKey(sessionId),
      retry: 2,
    },
  });

  if (isLoading) {
    return (
      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <Skeleton className="h-8 w-48" />
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-40 w-full" />
        ))}
      </div>
    );
  }

  if (isError || !session) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center space-y-4">
        <p className="text-muted-foreground">
          {isError ? "Unable to load this session. It may no longer exist." : "Session not found."}
        </p>
        <Link href="/history">
          <Button variant="outline">Back to History</Button>
        </Link>
      </div>
    );
  }

  const correct = session.answers.filter((a) => a.isCorrect).length;
  const total = session.totalQuestions;
  const score = session.score ?? (total > 0 ? Math.round((correct / total) * 100) : 0);

  const scoreLabel =
    score >= 80 ? "Passing" : score >= 60 ? "Near Passing" : "Below Passing";
  const scoreColors = {
    Passing: "text-green-600 dark:text-green-400",
    "Near Passing": "text-amber-600 dark:text-amber-400",
    "Below Passing": "text-red-600 dark:text-red-400",
  };

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto w-full space-y-8 pb-20">
      <div>
        <Link href="/history">
          <Button variant="ghost" size="sm" className="-ml-4 text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to History
          </Button>
        </Link>

        <div className="mt-4 bg-card border border-border rounded-xl p-6 text-center space-y-3 shadow-sm">
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">Session Results</h1>
          </div>
          <p className="text-muted-foreground text-sm">
            {session.topicTitle
              ? session.topicTitle
              : session.mode === "exam"
              ? "Comprehensive Exam"
              : "Practice Session"}
          </p>
          <div className={cn("text-5xl font-black", scoreColors[scoreLabel])}>
            {score}%
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            {correct} correct out of {total} questions &mdash;{" "}
            <span className={scoreColors[scoreLabel]}>{scoreLabel}</span>
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold">Question Review</h2>

      <div className="space-y-6">
        {session.questions.map((question, idx) => {
          const answer = session.answers.find((a) => a.questionId === question.id);
          const isCorrect = answer?.isCorrect ?? false;
          const selectedIdx = answer?.selectedIndex ?? -1;

          return (
            <div
              key={question.id}
              className={cn(
                "rounded-xl border p-5 space-y-4",
                isCorrect
                  ? "border-green-200 dark:border-green-800"
                  : "border-red-200 dark:border-red-800"
              )}
              data-testid={`review-question-${idx + 1}`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium text-sm leading-relaxed flex-1">
                  <span className="text-muted-foreground mr-2">Q{idx + 1}.</span>
                  {question.text}
                </p>
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                )}
              </div>

              <div className="space-y-2">
                {question.options.map((option, optIdx) => {
                  const letter = ["A", "B", "C", "D"][optIdx];
                  const isCorrectOpt = optIdx === question.correctIndex;
                  const isSelectedWrong = optIdx === selectedIdx && !isCorrectOpt;

                  return (
                    <div
                      key={optIdx}
                      className={cn(
                        "flex items-start gap-2.5 px-3 py-2 rounded-lg text-sm",
                        isCorrectOpt &&
                          "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium",
                        isSelectedWrong &&
                          "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 line-through opacity-70"
                      )}
                    >
                      <span className="font-semibold text-xs w-5 shrink-0 pt-0.5">
                        {letter}.
                      </span>
                      <span className="leading-relaxed">{option}</span>
                      {isCorrectOpt && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5 ml-auto" />
                      )}
                    </div>
                  );
                })}
              </div>

              {!answer && (
                <p className="text-xs text-muted-foreground italic">Not answered</p>
              )}

              <div className="border-t border-border pt-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                  Explanation
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3 pt-4">
        <Link href="/topics">
          <Button variant="outline">Study Topics</Button>
        </Link>
        <Link href="/exam">
          <Button>Take Another Exam</Button>
        </Link>
      </div>
    </div>
  );
}
