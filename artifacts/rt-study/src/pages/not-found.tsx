import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="max-w-md w-full mx-4 text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-sm text-muted-foreground">
            This page doesn't exist or may have been moved. Head back to the dashboard to continue studying.
          </p>
        </div>
        <Link href="/">
          <Button className="gap-2">
            <Home className="h-4 w-4" />
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
