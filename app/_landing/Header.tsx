import { GitHubIcon } from "@/app/icons/GitHubIcon"
import { LinkedinIcon } from "@/app/icons/LinkedinIcon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Section } from "./Section"

export function Header() {
  return (
    <header className='py-2'>
      <Section className='flex md:items-baseline justify-stretch flex-col items-center md:flex-row'>
        <h1 className='hidden md:block text-4xl font-bold text-primary'>
          Seb Savan
        </h1>
        <div className='flex-1 w-full'>
          <ul className='flex gap-4 items-center justify-end '>
            <Link
              href={"https://github.com/babbbass"}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-1/2 md:w-fit mt-6 text-foreground"
              )}
            >
              <GitHubIcon size={24} />
            </Link>
            <Link
              href='https://www.linkedin.com/in/sebastien-savan-76597040/'
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-1/2 md:w-fit mt-6 text-foreground"
              )}
            >
              <LinkedinIcon size={24} />
            </Link>
          </ul>
        </div>
      </Section>
    </header>
  )
}
