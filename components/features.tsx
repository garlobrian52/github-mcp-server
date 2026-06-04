import {
  GitBranch,
  MessageSquare,
  Play,
  Shield,
  Users,
  FolderGit2,
} from "lucide-react";

const features = [
  {
    icon: FolderGit2,
    title: "Repository Management",
    description:
      "Browse and query code, search files, analyze commits, and understand project structure across any repository you have access to.",
  },
  {
    icon: MessageSquare,
    title: "Issue & PR Automation",
    description:
      "Create, update, and manage issues and pull requests. Let AI help triage bugs, review code changes, and maintain project boards.",
  },
  {
    icon: Play,
    title: "CI/CD & Workflow Intelligence",
    description:
      "Monitor GitHub Actions workflow runs, analyze build failures, manage releases, and get insights into your development pipeline.",
  },
  {
    icon: Shield,
    title: "Code Analysis",
    description:
      "Examine security findings, review Dependabot alerts, understand code patterns, and get comprehensive insights into your codebase.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Access discussions, manage notifications, analyze team activity, and streamline communication processes.",
  },
  {
    icon: GitBranch,
    title: "Branch & Commit Operations",
    description:
      "Create branches, push commits, manage refs, and handle complex git operations through natural language.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Everything you need to connect AI to GitHub
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive set of tools that give your AI assistants full access to GitHub capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
