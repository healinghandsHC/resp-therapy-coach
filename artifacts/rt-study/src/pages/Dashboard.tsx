import React from "react";
import { Link, useLocation } from "wouter";
import { useGetStats, useGetProgress, useListTopics } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle2, Clock, Trophy, Play } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function Dashboard() {
  const [, setLocation] = useLocation();
  const { data: stats, isLoading: statsLoading } = useGetStats();
  const { data: progress, isLoading: progressLoading } = useGetProgress();
  const { data: topics, isLoading: topicsLoading } = useListTopics();

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground mt-2">Ready to continue your respiratory therapy prep?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Avg. Score" 
          value={stats?.avgScore ? `${Math.round(stats.avgScore)}%` : "--"} 
          icon={Trophy}
          loading={statsLoading}
        />
        <StatCard 
          title="Questions Attempted" 
          value={stats?.totalQuestionsAttempted?.toString() || "0"} 
          icon={CheckCircle2}
          loading={statsLoading}
        />
        <StatCard 
          title="Topics Mastered" 
          value={stats?.topicsMastered?.toString() || "0"} 
          icon={BookOpen}
          loading={statsLoading}
        />
        <StatCard 
          title="Sessions Completed" 
          value={stats?.completedSessions?.toString() || "0"} 
          icon={Clock}
          loading={statsLoading}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Comprehensive Exam</CardTitle>
            <CardDescription>Take a 60-question timed exam across all topics to simulate the real NBRC credentialing exam.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation("/exam")} className="w-full" size="lg">
              <Play className="w-4 h-4 mr-2" /> Start Full Exam
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Targeted Practice</CardTitle>
            <CardDescription>Focus on specific study topics to build your mastery step-by-step.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation("/topics")} variant="outline" className="w-full" size="lg">
              Browse Topics
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Your Progress</h2>
        {progressLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => <Skeleton key={i} className="h-24 w-full" />)}
          </div>
        ) : progress?.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {progress.map((p) => {
              const mastery = p.attempted > 0 ? Math.round((p.correct / p.attempted) * 100) : 0;
              return (
                <Card key={p.topicId}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base truncate" title={p.topicTitle}>{p.topicTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Mastery</span>
                      <span className="font-medium">{mastery}%</span>
                    </div>
                    <Progress value={mastery} className="h-2" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="p-8 text-center bg-muted/50">
            <p className="text-muted-foreground">No progress yet. Start studying a topic or take a full exam!</p>
          </Card>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, loading }: { title: string; value: string; icon: any; loading: boolean }) {
  return (
    <Card>
      <CardContent className="p-6 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {loading ? (
            <Skeleton className="h-8 w-16" />
          ) : (
            <p className="text-2xl font-bold">{value}</p>
          )}
        </div>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  );
}
