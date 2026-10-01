import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent font-medium whitespace-nowrap transition-[scale,filter,border-color] duration-150 ease-out select-none outline-offset-2 focus-visible:outline-2 active:scale-[0.97] active:duration-75 disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:brightness-95",
        secondary:
          "border-border bg-secondary text-secondary-foreground hover:border-muted-foreground",
        link: "text-primary underline decoration-seed underline-offset-3",
      },
      size: {
        default: "h-11 gap-2 px-5.5 text-base",
        sm: "h-8 gap-1.5 px-4.5 text-sm",
        lg: "h-13 gap-3 ps-7.5 pe-[9px] text-[19px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
