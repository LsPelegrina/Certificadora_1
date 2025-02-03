import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import portraitImage1 from '@/images/header1.jpg'
import portraitImage2 from '@/images/header2.jpg'
import portraitImage3 from '@/images/header3.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'Bons Fluidos',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="mb-10 h-100 w-100">
            <Image
              src={portraitImage1}
              alt=""
              className="aspect-square overflow-hidden rounded-2xl bg-zinc-100 object-cover transition-transform duration-300 ease-out hover:scale-110 dark:bg-zinc-800"
            />
          </div>
          <div className="mb-10 h-100 w-100">
            <Image
              src={portraitImage2}
              alt=""
              className="aspect-square overflow-hidden rounded-2xl bg-zinc-100 object-cover transition-transform duration-300 ease-out hover:scale-110 dark:bg-zinc-800"
            />
          </div>
          <div className="mb-10 h-100 w-100">
            <Image
              src={portraitImage3}
              alt=""
              className="aspect-square overflow-hidden rounded-2xl bg-zinc-100 object-cover transition-transform duration-300 ease-out hover:scale-110 dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            O projeto{' '}
            <span className="text-pink-500 dark:text-pink-500">
              Bons Fluidos
            </span>{' '}
            da UTFPR-CP tem como objetivo levar dignidade para meninas que têm o
            direito à educação prejudicado por menstruarem.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              A menstruação não deveria ser um obstáculo para o direito à
              educação. No entanto, para muitas meninas, a falta de acesso a
              itens básicos de higiene menstrual se torna um fator que
              compromete sua frequência escolar e, consequentemente, seu futuro.
              O Projeto Bons Fluidos nasce com um propósito claro: garantir
              dignidade para todas as alunas, promovendo acesso a absorventes,
              informação e acolhimento.
            </p>
            <p>
              Infelizmente, a pobreza menstrual ainda é uma realidade que afasta
              muitas meninas da escola. Sem acesso a absorventes, elas recorrem
              a alternativas precárias e, muitas vezes, evitam comparecer às
              aulas durante o período menstrual. Esse problema afeta diretamente
              sua aprendizagem, autoestima e oportunidades futuras.
            </p>
            <p>
              O Bons Fluidos trabalha para que nenhuma menina precise escolher
              entre estudar e menstruar. Nosso objetivo é:
            </p>
            <p>
              <ul>
                <li>
                  - Distribuir absorventes e produtos de higiene íntima para
                  estudantes em situação de vulnerabilidade.
                </li>
                <li>
                  - Conscientizar sobre saúde menstrual, promovendo palestras e
                  rodas de conversa para combater tabus e desinformação.
                </li>
                <li>
                  - Criar um ambiente escolar mais acolhedor, onde a menstruação
                  seja vista com naturalidade e respeito.
                </li>
              </ul>
            </p>
            <p>
              Como Fazemos Isso Acontecer? 
            </p>
            <p>
            💜 Campanhas de arrecadação:
              Mobilizamos doações de absorventes para distribuir gratuitamente
              às alunas que precisam.
            </p>
            <p>
            📚 Educação e conscientização: Realizamos
              encontros, palestras e materiais informativos sobre saúde
              menstrual e direitos femininos.
            </p>
            <p>
            🤝 Parcerias solidárias: Unimos
              forças com empresas, ONGs e voluntários para ampliar nosso impacto
              e alcançar mais meninas.
            </p>
            <p>
            Junte-se a Essa Causa!
            </p>
            <p>
            Se você acredita que todas as meninas merecem estudar sem obstáculos, venha fazer parte do Bons Fluidos! Você pode contribuir doando absorventes, participando das ações educativas ou ajudando a espalhar essa mensagem.
              </p>
              <p>
              🌱 Menstruar é natural. Ter dignidade é um direito. Vamos juntos garantir um futuro melhor para todas!
              </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Siga no X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Siga no Instagram
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Siga no LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:bonsfluidos@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              bonsfluidos@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
