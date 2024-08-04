import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
type ContactCardProps = {
  image: string
  mediumImage: string
  name: string
  description: string
  url: string
}
export const ContactCard = (props: ContactCardProps) => {
  return (
    <Link href={props.url}>
      <Card className='p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4'>
        <div className='relative'>
          <Image
            src={props.image}
            width={50}
            height={50}
            alt={props.name}
            className='w-10 h-10 rounded-full object-contain'
          />
          <Image
            src={props.mediumImage}
            width={20}
            height={20}
            alt={props.name}
            className='w-4 h-4 absolute -bottom-2 -right-1 rounded-full object-contain'
          />
        </div>
        <div className='mr-auto'>
          <p className='font-semibold'>{props.name}</p>

          <p className='text-sm text-muted-foreground'>{props.description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className='group-hover:translate-x-2
        group-
        hover:translate-y-2
        transition-transform'
        />
      </Card>
    </Link>
  )
}
