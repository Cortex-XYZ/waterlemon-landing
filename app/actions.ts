"use server"

export type NotifyState =
  | { status: "idle" }
  | { status: "error"; message: string; email: string }
  | { status: "success"; email: string }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(
  _prev: NotifyState,
  formData: FormData
): Promise<NotifyState> {
  const value = formData.get("email")
  const email =
    typeof value === "string" ? value.trim().toLowerCase() : ""

  if (
    email.length > 254 ||
    !EMAIL.test(email) ||
    /^[=+\-@]/.test(email)
  ) {
    return {
      status: "error",
      message: "Enter a valid email, like you@example.com",
      email,
    }
  }

  const url = process.env.GOOGLE_WAITLIST_URL
  const secret = process.env.WAITLIST_SECRET

  if (!url || !secret) {
    console.error("[Waitlist] Missing configuration:", {
      missingUrl: !url,
      missingSecret: !secret,
    })

    return {
      status: "error",
      message: "Signup is temporarily unavailable. Please try again later.",
      email,
    }
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, secret }),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(20000),
    })

    console.log("[Waitlist] Google response:", {
      status: response.status,
      contentType: response.headers.get("content-type"),
    })

    const text = await response.text()
    let result: unknown

    try {
      result = JSON.parse(text)
    } catch {
      throw new Error(
        `Google returned non-JSON (HTTP ${response.status}). Check deployment access and the /exec URL.`
      )
    }

    if (
      !response.ok ||
      typeof result !== "object" ||
      result === null ||
      !("ok" in result) ||
      result.ok !== true
    ) {
      const code =
        typeof result === "object" &&
          result !== null &&
          "code" in result &&
          typeof result.code === "string"
          ? result.code
          : "UNKNOWN"

      throw new Error(
        `Google rejected the signup: HTTP ${response.status}, code ${code}`
      )
    }

    return { status: "success", email }
  } catch (error) {
    console.error(
      "[Waitlist] Signup failed:",
      error instanceof Error ? error.message : "Unknown error"
    )

    return {
      status: "error",
      message: "Couldn't save your email. Please try again.",
      email,
    }
  }
}