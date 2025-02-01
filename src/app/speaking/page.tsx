import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import portraitImage from '@/images/portrait.jpg'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
  imageSrc,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
  imageSrc: any
}) {
  return (
    <Card as="article">
          <Card.Title as="h3" href={href}>
            {title}
          </Card.Title>
          <Card.Description>{description}</Card.Description>
          <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Campanhas ativas"
      intro="sinta-se a vontade para ajudar."
    >
      <div className="space-y-20">
        <SpeakingSection title="Arrecadação">
          <div className='flex group'>
          <div className='relative z-10'>
          <Appearance
            imageSrc={
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fdoacao_940817&psig=AOvVaw0HRiVad7Fti0i90oL3sOc1&ust=1738350110184000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDCpfyQnosDFQAAAAAdAAAAABAE'
            }
            href="#"
            title="In space, no one can watch you stream — until now"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          </div>
           <Image
              src={portraitImage}
              alt=""
              style={{marginTop:"-14px", marginLeft:'10px'}}
              className="z-20 w-[200px] h-[150px] aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 overflow-hidden group-hover:scale-110 transition-transform duration-300 ease-out"
            />
          </div>
          <div className='flex group'>
          <div className='relative z-10'>
          <Appearance
            imageSrc={
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fdoacao_940817&psig=AOvVaw0HRiVad7Fti0i90oL3sOc1&ust=1738350110184000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDCpfyQnosDFQAAAAAdAAAAABAE'
            }
            href="#"
            title="In space, no one can watch you stream — until now"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          </div>
          <Image
              src={portraitImage}
              alt=""
              style={{marginTop:"-14px", marginLeft:'10px'}}
              className="z-20 w-[200px] h-[150px] aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 overflow-hidden group-hover:scale-110 transition-transform duration-300 ease-out"
            />
          </div>
        </SpeakingSection>
        <SpeakingSection title="Doação">
        <div className='flex group'>
          <div className='relative z-10'>
          <Appearance
            imageSrc={
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fdoacao_940817&psig=AOvVaw0HRiVad7Fti0i90oL3sOc1&ust=1738350110184000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDCpfyQnosDFQAAAAAdAAAAABAE'
            }
            href="#"
            title="In space, no one can watch you stream — until now"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          </div>
          <Image
              src={portraitImage}
              alt=""
              style={{marginTop:"-14px", marginLeft:'10px'}}
              className="z-20 w-[200px] h-[150px] aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 overflow-hidden group-hover:scale-110 transition-transform duration-300 ease-out"
            />
          </div>
          <div className='flex group'>
          <div className='relative z-10'>
          <Appearance
            imageSrc={
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fdoacao_940817&psig=AOvVaw0HRiVad7Fti0i90oL3sOc1&ust=1738350110184000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDCpfyQnosDFQAAAAAdAAAAABAE'
            }
            href="#"
            title="In space, no one can watch you stream — until now"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          </div>
          <Image
              src={portraitImage}
              alt=""
              style={{marginTop:"-14px", marginLeft:'10px'}}
              className="z-20 w-[200px] h-[150px] aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 overflow-hidden group-hover:scale-110 transition-transform duration-300 ease-out"
            />
          </div>
          <div className='flex group'>
          <div className='relative z-10'>
          <Appearance
            imageSrc={
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fdoacao_940817&psig=AOvVaw0HRiVad7Fti0i90oL3sOc1&ust=1738350110184000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDCpfyQnosDFQAAAAAdAAAAABAE'
            }
            href="#"
            title="In space, no one can watch you stream — until now"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          </div>
          <Image
              src={portraitImage}
              alt=""
              style={{marginTop:"-14px", marginLeft:'10px'}}
              className="z-20 w-[200px] h-[150px] aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 overflow-hidden group-hover:scale-110 transition-transform duration-300 ease-out"
            />
          </div>
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
