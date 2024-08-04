import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export type SectionProps = PropsWithChildren<{ className?: string }>
export function Section(props: SectionProps) {
  return (
    <section
      className={cn("py-8 max-w-5xl m-auto px-2 lg:p-4", props.className)}
    >
      {props.children}
    </section>
  )
}
