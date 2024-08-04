import Image from "next/image"
import { NextIcon } from "../icons/NextLogo"
import { ReactLogo } from "../icons/ReactLogo"
import { TailwindLogo } from "../icons/TailwindLogo"
import { Code } from "./Code"
import { Section } from "./Section"

export function Hero() {
  return (
    <Section className='flex max-md:flex-col items-start gap-4'>
      <div className='flex-[2] flex gap-2 flex-col'>
        Hello, i'm
        <h2 className='text-3xl font-bold text-primary'>Sebastien Savan 👋</h2>
        <h3 className={"italic text-xl text-muted-foreground"}>
          I build things for the web.
        </h3>
        <p className=''>
          I am a software engineer in building (and occasionnaly designing
          <Code>
            <TailwindLogo size={12} className='inline mr-1' />
            Tailwind
          </Code>
          ) exceptional digital experiences
          <Code>
            <ReactLogo size={10} className='inline mr-1' />
            React/Next.js
            <NextIcon size={10} className='inline ml-1' />
          </Code>
          . Presently, I work as a frontend Developer at <Code>CLIQ</Code>
          and I work on building in my own time a project that will accompany
          you in your daily life.
          <br />
        </p>
        <p>
          I also give lessons and challenges for my young people at{" "}
          <Code>Fusion Jeunesse</Code>.
        </p>
      </div>
      <div className='flex-1 w-full'>
        <Image
          src={"/babbbass.jpeg"}
          width={200}
          height={200}
          alt='sebastien savan picture'
          className='rounded-full max-w-xs max-h-xs m-auto'
        />
      </div>
    </Section>
  )
}
