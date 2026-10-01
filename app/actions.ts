"use server"

export type NotifyState =
  | { status: "idle" }
  | { status: "error"; message: string; email: string }
  | { status: "success"; email: string }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(_prev: NotifyState, formData: FormData): Promise<NotifyState> {
  const email = String(formData.get("email") ?? "").trim()

  if (!EMAIL.test(email)) {
    return { status: "error", message: "Enter a valid email, like you@example.com", email }
  }

  // TODO: save `email` to the waitlist (email provider or database) before launch.

  return { status: "success", email }
}
