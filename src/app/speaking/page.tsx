import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import portraitImage from '@/images/portrait.jpg'
import portraitImage1 from '@/images/arrecadacao1.jpeg'
import portraitImage2 from '@/images/arrecadacao2.jpg'
import portraitImage3 from '@/images/doacao-q4cac6ty0snru3dukpbksvhucet4pdewyeaao19ips.png'
import portraitImage4 from '@/images/doacao1.jpg'

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
      intro="Sinta-se a vontade para contribuir com a nossa causa!"
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
            title="Ciclo do Bem – Corrente de Solidariedade"
            description="Uma campanha inspirada no conceito de corrente do bem! Funciona assim: cada pessoa que doa um pacote de absorventes desafia mais três amigos a fazerem o mesmo. Para engajar ainda mais, quem participar pode postar uma foto ou vídeo com a hashtag #CicloDoBem, marcando o projeto."
            event="SysConf 2021"
            cta="Saiba mais"
          />
          </div>
           <Image
              src={portraitImage1}
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
            title="Absorvendo Cultura – Evento Beneficente"
            description="Que tal unir arte, conhecimento e solidariedade? O Absorvendo Cultura seria um evento com apresentações musicais, teatro, dança e poesia, promovendo a reflexão sobre a dignidade menstrual. Para participar, basta doar um pacote de absorventes na entrada."
            event="SysConf 2021"
            cta="Saiba mais"
          />
          </div>
          <Image
              src={portraitImage2}
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
            title="Apadrinhe um Ciclo – Seja o Anjo de uma Estudante"
            description="Essa campanha permite que os doadores se tornem “padrinhos” de alunas que precisam de suporte menstrual. A ideia é que cada pessoa possa doar um valor mensal fixo (por exemplo, R$ 20,00, R$ 30,00 ou mais), garantindo que uma estudante tenha acesso a absorventes todos os meses."
            event="SysConf 2021"
            cta="Saiba mais"
          />
          </div>
          <Image
              src={portraitImage3}
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
            title="Fluxo Solidário – Doe o Valor de um Café e Mude um Ciclo"
            description="Muitas vezes gastamos o valor de um café ou lanche sem perceber, mas esse pequeno valor pode fazer uma grande diferença na vida de uma menina que enfrenta a pobreza menstrual. A campanha Fluxo Solidário convida as pessoas a doarem o equivalente a um café (R$ 5,00, R$ 10,00 ou qualquer valor) para ajudar na compra de absorventes e kits de higiene para alunas em situação de vulnerabilidade."
            event="SysConf 2021"
            cta="Saiba mais"
          />
          </div>
          <Image
              src={portraitImage4}
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
