import { useEffect, useState } from "react";
import { ShieldCheck, Stethoscope, Mail, ChevronRight } from "lucide-react";

const sections = [
  {
    id: "info-processed",
    title: "Information this app processes",
    content: (
      <>
        <p>
          The app processes study activity needed to provide quizzes, exams,
          history, and progress tracking. This includes selected topics, session
          type, question identifiers, answer selections, correct or incorrect
          results, scores, session status, and creation or completion times.
        </p>
        <p>
          The service also processes ordinary technical request information
          needed to deliver and protect the app, such as request identifiers,
          request paths, response status, IP address, browser or device user
          agent, and response timing.
        </p>
      </>
    ),
  },
  {
    id: "info-not-requested",
    title: "Information this app does not request",
    content: (
      <p>
        The app does not ask for your name, email address, phone number, login
        credentials, precise location, contacts, camera, microphone, photos,
        advertising identifier, payment information, or personal medical
        records. Respiratory therapy material is educational content and is not
        collected as personal health information.
      </p>
    ),
  },
  {
    id: "how-info-used",
    title: "How information is used",
    content: (
      <p>
        Study activity is used only to run study sessions, grade answers,
        calculate scores, show history, and summarize learning progress. The app
        does not sell personal information or use study activity for targeted
        advertising.
      </p>
    ),
  },
  {
    id: "storage-retention",
    title: "Storage and retention",
    content: (
      <p>
        Study sessions and progress are stored in the app&apos;s hosted database.
        The current version does not have user accounts, so records are not tied
        to a name or email address. Records may remain stored while the service
        operates unless they are removed as part of service maintenance.
      </p>
    ),
  },
  {
    id: "service-providers",
    title: "Service providers and sharing",
    content: (
      <>
        <p>
          Replit hosts the web application, API, and database and therefore
          processes the data and connection information required to operate the
          service. Google Fonts may receive standard connection information,
          such as IP address and user agent, when the Inter typeface is loaded.
        </p>
        <p>
          The app does not include advertising SDKs or dedicated analytics,
          Firebase, Sentry, or crash-reporting SDKs. Information may be disclosed
          when required by law or when reasonably necessary to protect the
          security and integrity of the service.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        Network requests use HTTPS in production. Reasonable safeguards are used
        to protect stored information, but no internet service or storage system
        can guarantee absolute security. Do not enter patient information or
        other sensitive personal information into the app.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children’s privacy",
    content: (
      <p>
        This app is intended for respiratory therapy students and professionals.
        It is not directed to children under 13 and does not knowingly collect
        personal information from children.
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices",
    content: (
      <p>
        You may stop using the app at any time. Because the current version does
        not use accounts or collect contact details, it may not be possible to
        identify a particular person&apos;s study records without the applicable
        session identifier.
      </p>
    ),
  },
  {
    id: "changes-contact",
    title: "Changes and contact",
    content: (
      <p>
        This policy may be updated when app practices or service providers
        change. The date below will be revised when that happens. For privacy
        questions or requests, contact the app publisher using the support
        contact shown on the app&apos;s Google Play listing.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  useEffect(() => {
    const visibilityMap = new Map<string, boolean>();
    
    const observer = new IntersectionObserver(
      (entries) => {
        let hasChanges = false;
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.isIntersecting);
          hasChanges = true;
        });

        if (hasChanges) {
          // Find the first section in document order that is visible
          const visibleId = sections.find((s) => visibilityMap.get(s.id))?.id;
          if (visibleId) {
            setActiveSection(visibleId);
          }
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px", 
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Stethoscope className="h-5 w-5" />
            </div>
            <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold tracking-tight text-foreground">
              RT Study
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <ShieldCheck className="h-4 w-4" />
              <span>Official Legal Notice</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col items-start gap-12 px-6 py-12 sm:px-10 lg:flex-row lg:py-24">
        {/* Sidebar Navigation (Sticky) */}
        <aside className="sticky top-28 hidden w-full shrink-0 lg:block lg:w-72">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Contents
          </h3>
          <nav className="flex flex-col gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(section.id, e)}
                className={`group flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
                data-testid={`nav-${section.id}`}
              >
                {section.title}
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeSection === section.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                />
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0 max-w-3xl">
          <div className="mb-16">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20 lg:hidden">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              This policy explains what information the Respiratory Therapy Study
              Program processes, why it is needed, and which service providers are
              involved.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Effective and last updated: September 15, 2026
            </div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32 group"
                data-testid={`section-${section.id}`}
              >
                <h2 className="font-['Plus_Jakarta_Sans'] mb-6 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {section.content}
                </div>
                <div className="mt-12 h-px w-full bg-border/40 last:hidden" />
              </section>
            ))}
          </div>

          <div className="mt-24 rounded-3xl bg-muted/30 p-8 sm:p-12 text-center ring-1 ring-border/50">
            <Mail className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold">Have questions?</h2>
            <p className="mt-4 text-muted-foreground mx-auto max-w-md">
              For privacy questions or requests, contact the app publisher using the support
              contact shown on the app&apos;s Google Play listing.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-24 border-t border-border/50 bg-muted/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-10">
          <div className="flex items-center gap-3">
            <Stethoscope className="h-5 w-5 text-primary" />
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-foreground">
              RT Study
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Respiratory Therapy Study Program. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
