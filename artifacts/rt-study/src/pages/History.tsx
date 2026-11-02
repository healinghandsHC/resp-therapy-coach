import { Link } from "wouter";
import { useListSessions } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, CheckCircle2, BookOpen, ExternalLink } from "lucide-react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function scoreColor(score: number | null) {
  if (score === null) return "bg-muted text-muted-foreground";
  if (score >= 80) return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
  if (score >= 60) return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
  return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
}

export function History() {
  const { data: sessions, isLoading } = useListSessions();

  const sorted = sessions
    ? [...sessions].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    : [];

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Test History</h1>
        <p className="text-muted-foreground mt-2">
          Review your past sessions and track your improvement over time.
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 w-full" />
          ))}
        </div>
      ) : sorted.length === 0 ? (
        <Card className="p-12 text-center bg-muted/30 border border-dashed">
          <BookOpen className="w-10 h-10 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground font-medium">No test sessions yet.</p>
          <p className="text-sm text-muted-foreground mt-1">
            Take a topic quiz or a full exam to see your history here.
          </p>
          <div className="flex gap-3 justify-center mt-6">
            <Link href="/topics">
              <Button variant="default">Browse Topics</Button>
            </Link>
            <Link href="/exam">
              <Button variant="outline">Full Exam</Button>
            </Link>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {sorted.map((session) => (
            <Card
              key={session.id}
              className="hover:shadow-md transition-shadow"
              data-testid={`session-card-${session.id}`}
            >
              <CardContent className="p-5 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm truncate">
                      {session.topicTitle
                        ? session.topicTitle
                        : session.mode === "exam"
                        ? "Comprehensive Exam"
                        : "Practice Session"}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">
                      {session.mode}
                    </span>
                    {session.status === "in_progress" && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        In Progress
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(session.createdAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {session.totalQuestions} Questions
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {session.status === "completed" && session.score !== null ? (
                    <span
                      className={`text-sm font-bold px-3 py-1 rounded-full ${scoreColor(session.score)}`}
                    >
                      {session.score}%
                    </span>
                  ) : session.status === "in_progress" ? (
                    <Link href={`/test/${session.id}`}>
                      <Button size="sm" variant="outline">
                        Continue
                      </Button>
                    </Link>
                  ) : null}

                  {session.status === "completed" && (
                    <Link href={`/history/${session.id}`}>
                      <Button size="sm" variant="ghost" data-testid={`review-${session.id}`}>
                        <ExternalLink className="w-4 h-4 mr-1" /> Review
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
