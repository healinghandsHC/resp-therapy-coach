import { useState } from "react";
import { useParams, useLocation, Link } from "wouter";
import {
  useGetTopic,
  getGetTopicQueryKey,
  useCreateSession,
  getListSessionsQueryKey,
} from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Play, BookOpen } from "lucide-react";

export function TopicQuiz() {
  const params = useParams();
  const id = Number(params.id);
  const [, setLocation] = useLocation();
  const [isStarting, setIsStarting] = useState(false);
  const queryClient = useQueryClient();

  const { data: topic, isLoading } = useGetTopic(id, {
    query: { enabled: !!id, queryKey: getGetTopicQueryKey(id) },
  });

  const createSession = useCreateSession();

  const handleStart = () => {
    if (isStarting || !id) return;
    setIsStarting(true);
    createSession.mutate(
      { data: { mode: "topic", topicId: id } },
      {
        onSuccess: (session) => {
          queryClient.invalidateQueries({ queryKey: getListSessionsQueryKey() });
          setLocation(`/test/${session.id}`);
        },
        onError: () => setIsStarting(false),
      }
    );
  };

  if (isLoading) {
    return (
      <div className="p-6 max-w-2xl mx-auto space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="p-6 max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground">Topic not found.</p>
        <Link href="/topics">
          <Button variant="link" className="mt-2">
            Back to Topics
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-2xl mx-auto w-full space-y-6">
      <div>
        <Link href={`/topics/${id}`}>
          <Button variant="ghost" size="sm" className="-ml-4 text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Study
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mt-2">{topic.title}</h1>
        <p className="text-muted-foreground mt-2">
          Quiz yourself on this topic to reinforce what you've studied.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold">{topic.questionCount} Questions Available</p>
              <p className="text-sm text-muted-foreground">
                All questions from this topic will be included in the quiz.
              </p>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-medium">·</span>
              Immediate feedback after each answer
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-medium">·</span>
              Detailed explanations for every question
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-medium">·</span>
              Full review available after completion
            </li>
          </ul>

          <Button
            size="lg"
            onClick={handleStart}
            disabled={isStarting}
            className="w-full"
            data-testid="button-start-quiz"
          >
            <Play className="w-5 h-5 mr-2" />
            {isStarting ? "Starting quiz..." : `Start ${topic.title} Quiz`}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
