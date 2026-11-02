import React from "react";
import { useParams, Link } from "wouter";
import { useGetTopic, getGetTopicQueryKey } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, PlayCircle, BookOpen, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function TopicDetail() {
  const params = useParams();
  const id = Number(params.id);

  const { data: topic, isLoading } = useGetTopic(id, {
    query: {
      enabled: !!id,
      queryKey: getGetTopicQueryKey(id)
    }
  });

  if (isLoading) {
    return (
      <div className="p-6 md:p-8 max-w-4xl mx-auto w-full space-y-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="p-6 md:p-8 text-center">
        <p>Topic not found.</p>
        <Link href="/topics">
          <Button variant="link" className="mt-4">Back to Topics</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full space-y-8 pb-24">
      <div>
        <Link href="/topics">
          <Button variant="ghost" size="sm" className="-ml-4 mb-4 text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Topics
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-primary-900">{topic.title}</h1>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{topic.description}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link href={`/topics/${topic.id}/quiz`}>
          <Button size="lg" className="px-8">
            <PlayCircle className="w-5 h-5 mr-2" /> Take Topic Quiz
          </Button>
        </Link>
        <div className="flex items-center text-muted-foreground bg-muted px-4 py-2 rounded-md font-medium text-sm">
          <BookOpen className="w-4 h-4 mr-2" />
          {topic.questionCount} Questions Available
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" /> Key Points
        </h2>
        <ul className="space-y-3">
          {topic.keyPoints?.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-foreground leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {topic.studyContent && (
        <>
          <Separator />
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Detailed Study Notes</h2>
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80">
              {/* Note: In a real app we'd use a markdown parser, but for this example we'll render it as text since React doesn't parse MD natively without a library */}
              <div dangerouslySetInnerHTML={{ __html: formatSimpleMarkdown(topic.studyContent) }} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Very basic formatter for demo purposes
function formatSimpleMarkdown(text: string) {
  if (!text) return "";
  return text
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
}
