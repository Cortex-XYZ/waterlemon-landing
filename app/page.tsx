import { ColorFields } from "@/components/brand/color-fields"
import { NotifyForm } from "@/components/notify-form"
import { PageTransition } from "@/components/page-transition"
import { Badge } from "@/components/ui/badge"
import { stagger } from "@/lib/motion"

export default function Home() {
  return (
    <PageTransition>
      <div className="relative isolate flex flex-1 flex-col overflow-hidden">
        <main className="flex flex-1 flex-col items-center justify-center px-4 pt-16 pb-[calc(var(--band-bottom)+40px)] text-center sm:px-10 sm:pt-12">
          <Badge variant="accent" size="eyebrow" className="animate-enter" style={stagger(0)}>
            Coming soon
          </Badge>

          <h1
            className="animate-enter mt-6 font-display text-[clamp(52px,11vw,96px)] leading-[0.96] font-extrabold tracking-[-0.045em] text-balance text-forest"
            style={stagger(1)}
          >
            See it grow.
          </h1>

          <p
            className="animate-enter mt-6 max-w-130 text-lg leading-normal text-pretty text-body sm:text-[19px]"
            style={stagger(2)}
          >
            Investing, made clearer. Leave your email and we’ll let you know the day WaterLeMON opens.
          </p>

          <div className="animate-enter mt-8 w-full" style={stagger(3)}>
            <NotifyForm />
          </div>
        </main>

        <ColorFields className="absolute inset-x-0 bottom-0 -z-10" />
      </div>
    </PageTransition>
  )
}
