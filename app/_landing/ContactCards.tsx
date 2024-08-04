import { ContactCard } from "./ContactCard"

export function ContactCards() {
  return (
    <>
      <ContactCard
        image='/babbbass.jpeg'
        mediumImage='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg'
        name='Sebastien Savan'
        description='Gmail'
        url='mailto:sebastien.savan@gmail.com'
      />
      <ContactCard
        image='https://avatars.githubusercontent.com/u/116754549?v=4'
        mediumImage='https://github.githubassets.com/assets/launch-codes-mona-fallback@1x-baf96e8322b3.jpg'
        name='Babbbass'
        description='Github'
        url='https://github.com/Babbbass'
      />
      <ContactCard
        image='/babbbass.jpeg'
        mediumImage='https://img.freepik.com/vecteurs-premium/icone-application-linkedin-plus-grand-reseau-professionnel-au-monde-reseaux-sociaux-emplois-carrieres_277909-476.jpg'
        name='Sebastien Savan'
        description='Linkedin'
        url='https://www.linkedin.com/in/sebastien-savan-6b5b3b1b5/'
      />
    </>
  )
}
