import React from "react";
import { Link } from "wouter";
import { useListTopics, useGetProgress } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, ChevronRight } from "lucide-react";

export function Topics() {
  const { data: topics, isLoading: topicsLoading } = useListTopics();
  const { data: progress, isLoading: progressLoading } = useGetProgress();

  const getProgressForTopic = (topicId: number) => {
    return progress?.find(p => p.topicId === topicId);
  };

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Study Topics</h1>
        <p className="text-muted-foreground mt-2">Comprehensive curriculum organized by NBRC content matrices.</p>
      </div>

      {(topicsLoading || progressLoading) ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => <Skeleton key={i} className="h-[220px] w-full" />)}
        </div>
      ) : topics?.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const p = getProgressForTopic(topic.id);
            const mastery = p && p.attempted > 0 ? Math.round((p.correct / p.attempted) * 100) : 0;

            return (
              <Card key={topic.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="line-clamp-2 leading-tight">{topic.title}</CardTitle>
                  </div>
                  <CardDescription className="line-clamp-2 mt-2">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText className="w-4 h-4 mr-2" />
                      {topic.questionCount} Questions
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Mastery</span>
                        <span className="font-medium">{mastery}%</span>
                      </div>
                      <Progress value={mastery} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href={`/topics/${topic.id}`} className="w-full">
                    <Button variant="default" className="w-full">
                      Study Topic <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center p-12 bg-muted/30 rounded-lg border border-dashed">
          <p className="text-muted-foreground">No study topics found.</p>
        </div>
      )}
    </div>
  );
}
