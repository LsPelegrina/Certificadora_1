import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'


function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Últimas notícias',
  description: 'Notícias mais recentes',
}


export default function Projects() {
  return (
    <SimpleLayout
      title="Últimas notícias"
      intro="Mantenha-se informada!"
    >
     <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/42295_43739F693E86ABFF-1.jpg?w=1220&h=674&crop=1&quality=85" alt="" className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">16 Mar, 2024</time>
            <a href="#" className="relative z-10 rounded-full px-3 py-1.5 font-medium text-pink-500 bg-pink-100 border-1 border-pink-200">Governo</a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-pink-400 dark:text-white dark:group-hover:text-pink-300">
              <a href="#">
                <span className="absolute inset-0"></span>
                Governo lança programa de distribuição gratuita de absorventes pelo SUS 
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">De acordo com o Ministério da Saúde, cerca de 8 milhões de pessoas serão beneficiadas pela iniciativa que prevê investimento de R$ 418 milhões por ano </p>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/absorvente-interno.jpg?w=1220&h=674&crop=1&quality=85" alt="" className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">10 Mai, 2024</time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-pink-500 bg-pink-100 border-1 border-pink-200">Saúde</a>
          </div>
          <div className="group relative">
            <h3 className="dark:text-white dark:group-hover:text-pink-300 mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-pink-400">
              <a href="#">
                <span className="absolute inset-0"></span>
                Metais tóxicos em absorventes internos: entenda evidências e recomendações 
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Estudo da Universidade da Califórnia, nos EUA, identificou 16 tipos de metais, incluindo chumbo e arsênio, nesses produtos; mas especialistas pedem cautela e mais pesquisas.</p>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/WhatsApp-Image-2024-03-07-at-12.41.33.jpeg?w=1170&h=674&crop=1&quality=85" alt="" className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">6 Jun, 2024</time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-pink-500 bg-pink-100 border-1 border-pink-200">Governo</a>
          </div>
          <div className="group relative">
            <h3 className="dark:text-white dark:group-hover:text-pink-300 mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-pink-400">
              <a href="#">
                <span className="absolute inset-0"></span>
                Licença menstrual: servidoras do DF podem se afastar do trabalho por até 3 dias 
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Lei Complementar foi promulgada pela Câmera Legislativa na quarta-feira (6) Nesta quarta-feira (6), a Câmara Legislativa do Distrito Federal (CLDF)  </p>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/42295_43739F693E86ABFF-1.jpg?w=1220&h=674&crop=1&quality=85" alt="" className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">24 Out, 2024</time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-pink-500 bg-pink-100 border-1 border-pink-200">Governo</a>
          </div>
          <div className="group relative">
            <h3 className="dark:text-white dark:group-hover:text-pink-300 mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-pink-400">
              <a href="#">
                <span className="absolute inset-0"></span>
                Dignidade menstrual: saiba como retirar absorventes gratuitamente pelo SUS 
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">A disponibilização é direcionada para pessoas com baixa renda ou em estado de vulnerabilidade social </p>
          </div>
        </div>
      </article>
    </div>
    </SimpleLayout>
  )
}
