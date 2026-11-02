import React from "react";
import { Link, useLocation } from "wouter";
import { Stethoscope, Activity, BookOpen, CheckSquare, Clock, BarChart2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Dashboard", icon: Activity },
    { href: "/topics", label: "Study Topics", icon: BookOpen },
    { href: "/bootcamp", label: "MV Bootcamp", icon: Zap, highlight: true },
    { href: "/exam", label: "Full Exam", icon: CheckSquare },
    { href: "/history", label: "History", icon: Clock },
    { href: "/progress", label: "Progress", icon: BarChart2 },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-card border-b md:border-r border-border shrink-0 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Stethoscope className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">RT Study</span>
        </div>
        
        <nav className="flex-1 px-4 pb-4 md:py-4 overflow-x-auto md:overflow-y-auto flex md:flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
            const Icon = item.icon;
            
            return (
              <Link key={item.href} href={item.href} className="shrink-0">
                <div
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : item.highlight
                      ? "text-primary/80 hover:bg-primary/10 hover:text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.highlight && !isActive && (
                    <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary uppercase tracking-wide">
                      New
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden max-w-full">
        {children}
      </main>
    </div>
  );
}
