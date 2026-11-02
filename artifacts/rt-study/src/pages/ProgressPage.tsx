import { useGetProgress, useGetStats } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Trophy, Target, BarChart2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function scoreColor(pct: number) {
  if (pct >= 80) return "text-green-600 dark:text-green-400";
  if (pct >= 60) return "text-amber-600 dark:text-amber-400";
  return "text-red-600 dark:text-red-400";
}

function barColor(pct: number) {
  if (pct >= 80) return "[&>*]:bg-green-500";
  if (pct >= 60) return "[&>*]:bg-amber-500";
  return "[&>*]:bg-red-500";
}

export function ProgressPage() {
  const { data: progress, isLoading: progressLoading } = useGetProgress();
  const { data: stats, isLoading: statsLoading } = useGetStats();

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Progress Overview</h1>
        <p className="text-muted-foreground mt-2">
          Track your mastery across all respiratory therapy topics.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Avg Score",
            value: stats?.avgScore != null ? `${Math.round(stats.avgScore)}%` : "--",
            icon: BarChart2,
          },
          {
            label: "Best Score",
            value: stats?.bestScore != null ? `${stats.bestScore}%` : "--",
            icon: Trophy,
          },
          {
            label: "Topics Mastered",
            value: `${stats?.topicsMastered ?? 0}/10`,
            icon: Target,
          },
          {
            label: "Questions Done",
            value: stats?.totalQuestionsAttempted?.toString() ?? "0",
            icon: CheckCircle2,
          },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-5">
              {statsLoading ? (
                <Skeleton className="h-12 w-full" />
              ) : (
                <div className="flex flex-col gap-2">
                  <item.icon className="w-5 h-5 text-primary" />
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Topic Breakdown</h2>
        {progressLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        ) : progress?.length ? (
          <div className="space-y-4">
            {progress.map((p) => {
              const mastery =
                p.attempted > 0
                  ? Math.round((p.correct / p.attempted) * 100)
                  : 0;
              const attempted = p.attempted;
              const total = p.totalQuestions;

              return (
                <Card key={p.topicId}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate" title={p.topicTitle}>
                          {p.topicTitle}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {attempted} of {total} questions attempted
                          {p.bestScore != null && ` · Best: ${p.bestScore}%`}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "text-lg font-bold shrink-0",
                          attempted === 0 ? "text-muted-foreground" : scoreColor(mastery)
                        )}
                      >
                        {attempted === 0 ? "--" : `${mastery}%`}
                      </span>
                    </div>
                    <Progress
                      value={attempted === 0 ? 0 : mastery}
                      className={cn(
                        "h-2",
                        attempted === 0 ? "" : barColor(mastery)
                      )}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="p-10 text-center bg-muted/30 border-dashed">
            <p className="text-muted-foreground">
              No progress recorded yet. Start with a topic quiz or a full exam.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
