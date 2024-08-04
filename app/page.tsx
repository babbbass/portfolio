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
      <Spacing size='md' />
      <Hero />
      <Spacing size='md' />
      <Status />
      <Spacing size='md' />
      <Skills />
      <Spacing size='md' />
      <ContactMe />
      <Spacing size='md' />
      <Footer />
    </main>
  )
}
