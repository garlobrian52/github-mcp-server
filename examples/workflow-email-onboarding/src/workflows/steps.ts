import { FatalError } from "workflow";
import { Resend } from "resend";

export type User = {
  id: string;
  email: string;
  name: string;
  plan: string;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new FatalError("RESEND_API_KEY is not configured");
  }

  return new Resend(apiKey);
}

export async function createUser(email: string) {
  "use step";

  console.log(`Creating user with email: ${email}`);

  return {
    id: crypto.randomUUID(),
    email,
    name: email.split("@")[0] || "friend",
    plan: "free",
  } satisfies User;
}

export async function getUser(userId: string) {
  "use step";

  console.log(`Fetching user: ${userId}`);

  // Replace with your database lookup.
  return {
    id: userId,
    email: "hello@example.com",
    name: "Alex",
    plan: "pro",
  } satisfies User;
}

export async function generateEmail(input: { name: string; plan: string }) {
  "use step";

  console.log(`Generating email for ${input.name} (${input.plan})`);

  return {
    subject: `Welcome to Acme, ${input.name}!`,
    body: `<p>Thanks for joining Acme on the ${input.plan} plan.</p>`,
  };
}

export async function sendEmail(input: {
  to: string;
  subject: string;
  body: string;
}) {
  "use step";

  console.log(`Sending email to ${input.to}: ${input.subject}`);

  const resend = getResendClient();
  const resp = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Acme <onboarding@resend.dev>",
    to: [input.to],
    subject: input.subject,
    html: input.body,
  });

  if (resp.error) {
    throw new FatalError(resp.error.message);
  }

  return { status: "sent" as const, id: resp.data?.id };
}

export async function sendWelcomeEmail(email: string) {
  "use step";

  console.log(`Sending welcome email to ${email}`);

  const resend = getResendClient();
  const resp = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Welcome!",
    html: "Thanks for joining Acme.",
  });

  if (resp.error) {
    throw new FatalError(resp.error.message);
  }

  return { status: "sent" as const, id: resp.data?.id };
}

export async function sendOneWeekCheckInEmail(email: string) {
  "use step";

  console.log(`Sending one-week check-in email to ${email}`);

  const resend = getResendClient();
  const resp = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "How is your first week going?",
    html: "We hope Acme is working well for you. Reply if you need help.",
  });

  if (resp.error) {
    throw new FatalError(resp.error.message);
  }

  return { status: "sent" as const, id: resp.data?.id };
}
