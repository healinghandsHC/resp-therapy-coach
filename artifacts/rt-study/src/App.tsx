import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/Layout";
import { Dashboard } from "@/pages/Dashboard";
import { Topics } from "@/pages/Topics";
import { TopicDetail } from "@/pages/TopicDetail";
import { TopicQuiz } from "@/pages/TopicQuiz";
import { TestInterface } from "@/pages/TestInterface";
import { Exam } from "@/pages/Exam";
import { History } from "@/pages/History";
import { SessionReview } from "@/pages/SessionReview";
import { ProgressPage } from "@/pages/ProgressPage";
import { Bootcamp } from "@/pages/Bootcamp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 10_000),
      staleTime: 30_000,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/test/:sessionId" component={TestInterface} />
      <Route>
        <Layout>
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/topics" component={Topics} />
            <Route path="/topics/:id/quiz" component={TopicQuiz} />
            <Route path="/topics/:id" component={TopicDetail} />
            <Route path="/exam" component={Exam} />
            <Route path="/history/:sessionId" component={SessionReview} />
            <Route path="/history" component={History} />
            <Route path="/bootcamp" component={Bootcamp} />
            <Route path="/progress" component={ProgressPage} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  const routerBase = import.meta.env.VITE_NATIVE_APP
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={routerBase}>
            <ErrorBoundary>
              <Router />
            </ErrorBoundary>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
