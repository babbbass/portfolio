import { Card } from "@/components/ui/card"
import { ContactCards } from "./ContactCards"
import { Section } from "./Section"
import { SIDE_PROJECTS, SideProject, Work, WORKS } from "./Work"

export function Status() {
  return (
    <Section className='flex max-md:flex-col items-start gap-4 w-full'>
      <Card className='flex-[2] py-4 px-2 w-full flex flex-col gap-2'>
        <p className='text-sm text-muted-foreground'>Side Project</p>
        {SIDE_PROJECTS.map((project, index) => (
          <SideProject
            key={index}
            Logo={project.Logo}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </Card>
      <div className='flex-[2] gap-4 h-full flex flex-col w-full'>
        <Card className='py-4 px-2 flex-1 flex gap-1 flex-col'>
          <p className='text-sm px-1 text-muted-foreground'>Work</p>
          {WORKS.map((work, index) => (
            <Work
              key={index}
              logo={work.logo}
              title={work.title}
              role={work.role}
              date={work.date}
              url={work.url}
              freelance={work.freelance}
            />
          ))}
        </Card>
        <Card className='p-4 flex-1 gap-2 flex-col flex'>
          <p className='text-sm text-muted-foreground'>Contact Me</p>
          <ContactCards />
        </Card>
      </div>
    </Section>
  )
}
