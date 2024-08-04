import { Badge } from "@/components/ui/badge"
import { NextIcon } from "../icons/NextLogo"
import { OpenAiLogo } from "../icons/OpenAiLogo"
import { ReactLogo } from "../icons/ReactLogo"
import { TailwindLogo } from "../icons/TailwindLogo"
import { Code } from "./Code"
import { Section } from "./Section"
export function Skills() {
  return (
    <Section className='flex flex-col gap-4'>
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        My main Tools...
      </h2>

      <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
        <div>
          <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12'>
            <ReactLogo
              size={24}
              className='animate-spin'
              style={{ animationDuration: "3s" }}
            />
          </div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
            React
          </h3>
          <p className='text-sm text-muted-foreground'>
            My main library is <Code>React</Code> and i also use
            <br />
            <Code className='ml-0'>
              <NextIcon size={10} className='inline mr-1' />
              NextJs
            </Code>{" "}
            as server side and frontend framework.
          </p>
        </div>
        <div>
          <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12'>
            <OpenAiLogo size={24} />
          </div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
            AI Integration
          </h3>
          <p className='text-sm text-muted-foreground'>
            I am integrating <Code>Artificial Inteligence</Code> in your
            applications to create a perfect user experience.
          </p>
        </div>
        <div>
          <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12'>
            <TailwindLogo size={24} />
          </div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mb-2'>
            Tailwind Css
          </h3>
          <p className='text-sm text-muted-foreground'>
            i can create <u>beautiful</u> applications in seconds with
            <Code>tailwind</Code> and this ecosystem.
          </p>
        </div>
      </div>
    </Section>
  )
}
