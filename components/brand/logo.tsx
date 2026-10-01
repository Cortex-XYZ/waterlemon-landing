import { cn } from "cn"

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={cn("block shrink-0", className)}>
      <g transform="translate(0 4)">
        <circle cx="50" cy="18" r="7" fill="var(--gold)" />
        <path d="M50 36V25" stroke="var(--grass-600)" strokeWidth="5" strokeLinecap="round" />
        <path d="M50 32C44 22 35 20 27 22C29 30 39 34 50 32Z" fill="var(--grass)" />
        <path d="M50 32C56 22 65 20 73 22C71 30 61 34 50 32Z" fill="var(--grass)" />
        <path d="M14 76A36 36 0 0 1 86 76Z" fill="var(--grass)" />
        <path d="M20 76A30 30 0 0 1 80 76Z" fill="var(--coral)" />
        <ellipse cx="41" cy="62" rx="3.8" ry="5.2" fill="var(--forest)" />
        <ellipse cx="59" cy="62" rx="3.8" ry="5.2" fill="var(--forest)" />
      </g>
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-[0.5em] text-base sm:text-lg", className)}>
      <Mark className="size-[2em]" />
      <span className="font-display leading-none font-extrabold tracking-[-0.045em] whitespace-nowrap text-forest">
        WaterLeMON
      </span>
    </span>
  )
}
