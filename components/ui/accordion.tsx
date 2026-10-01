"use client"

import * as React from "react"
import { cn } from "cn"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { PlusIcon } from "lucide-react"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-xl border border-border bg-card transition-[border-color] duration-150 hover:border-muted-foreground/50 data-open:border-muted-foreground/50",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-xl px-5 py-4.5 text-start text-[17px] leading-snug font-medium text-foreground outline-offset-2 focus-visible:outline-2 sm:px-6 sm:text-lg",
          className
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden="true"
          className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-foreground transition-[rotate,background-color,border-color,color] duration-200 ease-out group-aria-expanded/accordion-trigger:rotate-45 group-aria-expanded/accordion-trigger:border-transparent group-aria-expanded/accordion-trigger:bg-forest group-aria-expanded/accordion-trigger:text-cream"
        >
          <PlusIcon className="size-4" strokeWidth={2} />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "px-5 pb-5 text-base leading-relaxed text-pretty text-body sm:px-6 sm:pe-18 [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-seed [&_a]:underline-offset-3",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
