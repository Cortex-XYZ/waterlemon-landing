import type { CSSProperties } from "react"
import { cn } from "cn"

type Seed = { left: string; width: string; color: string }

type Field = {
  basis: string
  weight: number
  height: string
  color: string
  seeds?: Seed[]
  dot?: boolean
  small?: boolean
}

const cream = "var(--cream)"
const grass = "var(--grass)"

const FIELDS: Field[] = [
  { basis: "22%", weight: 22, height: "63%", color: "var(--forest)" },
  {
    basis: "24%",
    weight: 24,
    height: "100%",
    color: "var(--coral)",
    seeds: [
      { left: "28%", width: "26%", color: cream },
      { left: "68%", width: "26%", color: cream },
    ],
  },
  { basis: "9%", weight: 9, height: "41%", color: "var(--gold)", small: true },
  {
    basis: "auto",
    weight: 32,
    height: "79%",
    color: "var(--forest)",
    dot: true,
    seeds: [
      { left: "25%", width: "18%", color: grass },
      { left: "50%", width: "18%", color: grass },
      { left: "75%", width: "18%", color: grass },
    ],
  },
  { basis: "13%", weight: 13, height: "89%", color: grass },
]

export function ColorFields({
  placement = "bottom",
  className,
}: {
  placement?: "bottom" | "top"
  className?: string
}) {
  const top = placement === "top"
  const last = FIELDS.length - 1

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none flex overflow-hidden",
        top
          ? "h-9 flex-row-reverse items-start px-3 sm:px-[33px] min-[744px]:h-(--band-top)"
          : "h-(--band-bottom) items-end gap-2 px-4 sm:gap-3.5 sm:px-10",
        className
      )}
    >
      {FIELDS.map((field, i) => {
        const tab = top && (i === 0 || i === last)

        return (
          <div
            key={i}
            style={
              {
                "--basis": field.basis,
                "--height": field.height,
                "--weight": field.weight,
                backgroundColor: field.color,
                "--stagger": i,
              } as CSSProperties
            }
            className={cn(
              "relative overflow-hidden",
              !top && [
                "animate-rise h-(--height) shrink-0 basis-(--basis)",
                field.basis === "auto" && "grow",
                field.small ? "rounded-t-[10px] sm:rounded-t-[14px]" : "rounded-t-[12px] sm:rounded-t-[18px]",
              ],
              top && [
                "animate-drop mx-1 h-(--height) shrink basis-0 grow-(--weight) rounded-b-[8px] sm:mx-[7px]",
                "transition-[flex-grow,flex-basis,height,margin,opacity] duration-500 ease-(--ease-in-out-strong) motion-reduce:transition-none",
              ],
              tab && [
                "min-[744px]:h-6.5 min-[744px]:grow-0",
                i === last ? "min-[744px]:basis-50" : "min-[744px]:basis-47.5",
                "min-[744px]:rounded-b-[18px]",
              ],
              top && !tab && [
                "min-[744px]:h-(--height)",
                field.small ? "min-[744px]:rounded-b-[14px]" : "min-[744px]:rounded-b-[18px]",
              ],
              top &&
                field.small &&
                "min-[744px]:max-[1024px]:mx-0! min-[744px]:max-[1024px]:grow-0 min-[744px]:max-[1024px]:opacity-0"
            )}
          >
            {field.seeds?.map((seed) => (
              <span
                key={seed.left}
                style={{ left: seed.left, width: seed.width, backgroundColor: seed.color }}
                className={cn(
                  "absolute aspect-[2/1] -translate-x-1/2",
                  top ? "top-0 rounded-b-full" : "bottom-0 rounded-t-full"
                )}
              />
            ))}
            {field.dot ? (
              <span
                className={cn(
                  "absolute left-1/2 size-2.5 -translate-1/2 rounded-full bg-gold sm:size-4",
                  top ? "top-[56%] max-[744px]:hidden" : "top-[44%]"
                )}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
