import { ContactMe } from "./_landing/ContactMe"
import { Footer } from "./_landing/Footer"
import { Header } from "./_landing/Header"
import { Hero } from "./_landing/Hero"
import { Skills } from "./_landing/Skills"
import { Spacing } from "./_landing/Spacing"
import { Status } from "./_landing/Status"
export default function Home() {
  return (
    <main className='h-full w-full'>
      <Header />
      <Spacing size='sm' />
      <Hero />
      <Spacing />
      <Status />
      <Spacing size='sm' />
      <Skills />
      <Spacing size='sm' />
      <ContactMe />
      <Spacing size='sm' />
      <Footer />
    </main>
  )
}
