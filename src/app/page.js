import React from 'react';
import Image from 'next/image';

export default function Home() {

  return (

<main className="min-h-screen flex-col items-center justify-between mt-0 main-page">
      <header className="header">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex d-flex justify-center items-center">
          <div className="bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          </div>
        </div>
      </header>

      <div className="flex align-center justify-center mt-15">
        <a>
          <Image
            src="/2nibble-logo-200.png"
            alt="2nibble"
            className="image"
            width={200}
            height={200}
            priority
          />
        </a>
      </div>
      <div className="flex align-center justify-center">
        <h1 className="page-title mt-0">2NIBBLE</h1>
        <div className="label mt-10">
          <h1>EQUIPE BRASILEIRA DE JOGOS INDIE</h1>
        </div>

      </div>

      <div className="text-center arrow">
        <a href="#Sobre">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
        </svg>
        </a>
      </div>

      <div className="about" id="Sobre">
        <h1>Sobre Nós</h1>

        <p>
          A <strong>2NIBBLE</strong> é uma empresa independente de desenvolvimento de jogos.
        </p>

        <p className="mt-2">
        A equipe é composta em boa parte por atuais ou <span title="Desenvolvedores de modificações para jogos eletrônicos" className="doubt">ex-modders</span> que trabalham remotamente em diversas partes do Brasil e outros países, que buscam desenvolver jogos indie de tamanho médio-grande, geralmente PC ou outras plataformas.
        </p>
        <p className="mt-3">
        Veja mais na página <a href="#">Sobre</a>, nos apoie na página de <a className="link" href="#">doação/financiamento</a>. Estamos abertos para novas pessoas nos ajudarem.
        </p>
      </div>

      <div className="projects">
        <h1>Nossos Projetos</h1>

        <div className="works">
        <Image
            src="/impunes-cover.jpg"
            alt="Impunes"
            className="image"
            width={450}
            height={450}
            priority
          />

          <div className="work-description">
            <h3>
              Impunes
            </h3>

            <p>
            Um jogo estilo GTA ambientado no Brasil.

O jogo se passa numa cidade praiana, contrastada pelo luxo e pobreza, circulada por uma zona rural.

O maior foco é a diversão e a diversidade proporcionada no gameplay, muita coisa para fazer com elementos arcade e roleplay.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold">Redes Sociais</h2>
            <ul className="mt-4">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2NIBBLE</h2>
            <ul className="mt-4">
              <li>
                <a href="#">Impunes</a>
              </li>
              <li>
                <a href="#">Equipe</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Informações</h2>
            <ul className="mt-4">
              <li>
                <a href="#">Contatos</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </main>

  )
}
