import { Bot, Code, Zap, Search } from "lucide-react";

const useCases = [
  {
    icon: Search,
    title: "Natural Language Queries",
    description:
      "Ask questions about your codebase in plain English. Find files, understand patterns, and explore repositories without memorizing commands.",
    example: '"What files handle authentication in this repo?"',
  },
  {
    icon: Bot,
    title: "Automated Issue Management",
    description:
      "Let AI triage issues, suggest labels, assign team members, and even draft responses based on similar past issues.",
    example: '"Create an issue for the login bug with priority label"',
  },
  {
    icon: Code,
    title: "Code Review Assistance",
    description:
      "Get AI-powered insights on pull requests, identify potential issues, suggest improvements, and understand changes faster.",
    example: '"Review PR #42 and summarize the changes"',
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Monitor CI/CD pipelines, analyze failures, trigger workflows, and manage releases through conversational commands.",
    example: '"Why did the last workflow run fail?"',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What can you build?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From simple queries to complex multi-step agent workflows, the possibilities are endless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="relative rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <useCase.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="inline-flex items-center rounded-lg bg-secondary px-3 py-2 text-sm font-mono text-muted-foreground">
                    {useCase.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
