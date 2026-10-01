"use client"

import { useActionState, useEffect, useRef, useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "cn"

import { subscribe, type NotifyState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialState: NotifyState = { status: "idle" }

export function NotifyForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(subscribe, initialState)
  const [email, setEmail] = useState("")  
  const [dismissed, setDismissed] = useState<NotifyState | null>(null)
  const error = state.status === "error" && dismissed !== state ? state.message : null
  const inputRef = useRef<HTMLInputElement>(null)
  const successRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (state.status === "error") inputRef.current?.focus()
    if (state.status === "success") successRef.current?.focus()
  }, [state])

  return (
    <div aria-live="polite" className={cn("flex w-full flex-col items-center", className)}>
      {state.status === "success" ? (
        <p
          ref={successRef}
          tabIndex={-1}
          className="animate-enter flex min-h-[68px] max-w-full items-center gap-3.5 rounded-[34px] border-[1.5px] border-input bg-card py-2 ps-4 pe-7 text-start text-[17px] font-medium text-pretty text-forest outline-none [overflow-wrap:anywhere]"
        >
          <span
            aria-hidden="true"
            className="grid size-8.5 shrink-0 place-items-center rounded-full bg-forest text-gold"
          >
            <Check className="size-[18px]" strokeWidth={2.5} />
          </span>
          <span>You’re on the list · we’ll write to {state.email}</span>
        </p>
      ) : (
        <>
          <form
            action={formAction}
            noValidate
            className={cn(
              "flex w-full max-w-140 items-center gap-1.5 rounded-full border-[1.5px] border-input bg-card p-[7px] ps-5 outline-offset-2 transition-[border-color] focus-within:outline-2 sm:ps-7",
              error && "border-destructive"
            )}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <Input
              ref={inputRef}
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setDismissed(state)
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby="email-note"
              className="h-auto flex-1 rounded-none border-0 bg-transparent p-0 text-base text-ellipsis focus-visible:outline-none sm:text-lg"
            />
            <Button type="submit" size="lg" disabled={pending} className="max-sm:gap-2 max-sm:ps-4.5 max-sm:text-[17px]">
              Notify me
              <span
                aria-hidden="true"
                className="grid size-8.5 place-items-center rounded-full bg-seed text-forest"
              >
                <ArrowRight
                  className="size-[18px] transition-transform duration-150 ease-out group-hover/button:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </span>
            </Button>
          </form>
          <p
            id="email-note"
            className={cn("mt-3.5 text-[15px]", error ? "text-destructive" : "text-muted-foreground")}
          >
            {error ?? ""}
          </p>
        </>
      )}
    </div>
  )
}
