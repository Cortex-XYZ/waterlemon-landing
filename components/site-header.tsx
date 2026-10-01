"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import { Logo } from "@/components/brand/logo"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const onFaq = usePathname() === "/faq"

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={cn(
        "relative z-10 mt-12 flex items-center justify-between gap-6 px-4 sm:px-10 min-[744px]:mt-10 lg:px-18"
      )}
    >
      <Link
        href="/"
        transitionTypes={onFaq ? ["nav-back"] : undefined}
        aria-label="WaterLeMON home"
        className="rounded-md outline-offset-4 focus-visible:outline-2"
      >
        <Logo />
      </Link>

      {/* Named separately from the header so the pill resizes and the label cross-fades. */}
      <Button
        asChild
        variant="secondary"
        className="max-sm:h-9 max-sm:px-4 max-sm:text-[15px]"
        style={{ viewTransitionName: "nav-button" }}
      >
        {onFaq ? (
          <Link href="/" transitionTypes={["nav-back"]}>
            <span style={{ viewTransitionName: "nav-label" }}>Get notified</span>
          </Link>
        ) : (
          <Link href="/faq" transitionTypes={["nav-forward"]}>
            <span style={{ viewTransitionName: "nav-label" }}>FAQs</span>
          </Link>
        )}
      </Button>
    </header>
  )
}
