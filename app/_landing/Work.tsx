import { Badge } from "@/components/ui/badge"
import { Ampersands, Armchair, LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const SIDE_PROJECTS = [
  {
    Logo: Armchair,
    title: "Summarize Articles",
    description: "Simplify your reading, An open-source article summarizer",
    url: "https://lively-lily-74d3ef.netlify.app/",
  },
  {
    Logo: Ampersands,
    title: "The Green Book",
    description: "sports betting bankroll management",
    url: "https://thegreenbook.vercel.app/",
  },
]

type SideProjectProps = {
  Logo: LucideIcon
  title: string
  description: string
  url: string
}

export const SideProject = (props: SideProjectProps) => {
  return (
    <div>
      <Link
        href={props.url}
        className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded-sm p-1'
      >
        <span className='bg-accent text-accent-foreground p-4 rounded-sm'>
          <props.Logo size={16} />
        </span>
        <div>
          <p className='text-lg font-semibold'>{props.title}</p>
          <p className='text-sm text-muted-foreground'>{props.description}</p>
        </div>{" "}
      </Link>
    </div>
  )
}

export const WORKS: WorkProps[] = [
  {
    logo: "https://media.licdn.com/dms/image/C4E0BAQGjrKwogJ0o6Q/company-logo_200_200/0/1674486719231/cliq_digital_logo?e=2147483647&v=beta&t=YnDX8-BBI_cdBWNSanmu0PRL9jZJrDIi1LesdwMS9Lg",
    title: "Cliq Digital AG",
    role: "frontend developer",
    date: "2024 - Present",
    url: "https://cliqdigital.com/",
    freelance: true,
  },
  {
    logo: "https://media.licdn.com/dms/image/D4E0BAQHKcPmjDAUA0A/company-logo_200_200/0/1686059758117/fusion_jeunesse_fr_logo?e=1730937600&v=beta&t=jWtagUXPydIKCNCWg_5LkPSCL5PynA6-jMlVfItSMNQ",
    title: "Fusion Jeunesse",
    role: "coordinator",
    date: "2024 - present",
    url: "https://www.humanunderwatersociety.org/en/",
    freelance: true,
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5t4S-nL_1CxbA6014ggdaupkMBmcZC0kPA&ss",
    title: "Human Underwater Society",
    role: "frontend developer",
    date: "2023 - 2024",
    url: "https://www.humanunderwatersociety.org/en/",
    freelance: true,
  },
  {
    logo: "https://data.inpi.fr/image/marques/FR3648264",
    title: "tessi Marketing",
    role: "frontend developer",
    date: "2023 - 2023",
    url: "https://www.tessi.eu/fr/",
    freelance: true,
  },
  {
    logo: "https://play-lh.googleusercontent.com/I7YNBURkct2HQ6iSk9v7MwVHwKAZWrwRgj6k9gepStx_oyGFgUD8AEuLGPa7SFlDAN9A",
    title: "sport24",
    role: "software developer",
    date: "2017 - 2022",
    url: "https://www.lefigaro.fr/sports",
  },
]

type WorkProps = {
  logo: string
  title: string
  role: string
  url: string
  date: string
  freelance?: boolean
}

export const Work = (props: WorkProps) => {
  return (
    <div className=''>
      <Link
        href={props.url}
        className=' w-full inline-flex items-center justify-stretch gap-4 hover:bg-accent/50 transition-colors rounded-sm p-1'
      >
        <Image
          src={props.logo}
          width={40}
          height={40}
          alt='logo'
          className='rounded-md flex-[1]'
        />
        <div className='mr-2 flex-[4]'>
          <div className=' font-semibold'>
            {/* <p className=' font-semibold'>{props.title}</p> */}
            {props.title}
            {props.freelance && (
              <Badge variant='outline' className='ml-2'>
                mission
              </Badge>
            )}
          </div>
          <p className='text-xs text-muted-foreground'>{props.role}</p>
        </div>
        <p className='text-xs text-muted-foreground flex-[2]'>{props.date}</p>
      </Link>
    </div>
  )
}
