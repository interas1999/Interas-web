import { useCallback, useEffect, useState } from 'react'
import SEO from '@/components/SEO'
import Typist from 'react-typist'
import Carosuel from 'react-elastic-carousel'
import * as Scroll from 'react-scroll'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {
  Container,
  Header,
  NavText,
  NavWrapper,
  ApresentationWrapper,
  TextContainer,
  SecondImage,
  TextApresentation,
  ProductsWrapper,
  ProductCard,
  ShowCaseWrapper,
  CarosuelCard
} from '../styles/pages/Home'

import logoBranca from '../../public/logo-branca.png'

export default function Home() {
  const [typeText, setTypeText] = useState(false)

  useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments)
    })

    scrollSpy.update()

    return function cleanup() {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

  function scrollToTop() {
    scroll.scrollToTop()
  }

  function scrollTo(number: number) {
    scroll.scrollTo(number)
  }

  setInterval(() => {
    setTypeText(true)
  }, 500)

  return (
    <Container>

      <SEO
        title="Interas Gestão e Tecnologia"
        shouldExludeTitleSuffix
        image="logo.png"
      />

      <Header>

          <img src={logoBranca} alt="Interas"/>

        <NavWrapper>

        <NavText onClick={scrollToTop} >Início</NavText>
        <NavText onClick={scrollToTop} >Quem Somos?</NavText>
        <NavText onClick={() => { scrollTo(580) }} >Soluções</NavText>
        <NavText>Produtos</NavText>
        <NavText>Contato</NavText>

        </NavWrapper>

      </Header>
      <ApresentationWrapper>
        <TextContainer >
          <TextApresentation> Procurando soluções em </TextApresentation>

          {typeText && (

          <Typist onTypingDone={() => { setTypeText(false) }} stdTypingDelay={5} cursor={{ show: true, blink: true }} >
          <TextApresentation > Automoção de Chat ?</TextApresentation>
          <Typist.Backspace count={20} delay={400} />
          <TextApresentation> HotSpot ? </TextApresentation>
          <Typist.Backspace count={9} delay={400} />
          <TextApresentation>elp Desk ? </TextApresentation>
          <Typist.Backspace count={11} delay={400} />

          </Typist>

          )}

          <p>
            Somos uma empresa integradora de
            soluções e consultoria em Tecnologia.
            Unimos novas idéias à novas tecnologias e
            oferecemos um olhar único para sua necessidade
            tecnológica.
          </p>

          <button onClick={() => { scrollTo(580) }} >Vamos começar</button>

        </TextContainer>

        <SecondImage
          src="/homepage-window.png" alt="coffe"
        />

        <aside>

        <img
          src="/apresentationImage.svg" alt="coffe"
        />
        </aside>

        <div>
          <img src="/wall.svg" alt="wall"/>
        </div>

      </ApresentationWrapper>

      <ProductsWrapper>
        <h1>Conheça nossas soluções</h1>

        <ProductCard>

          <aside>
          <h2>Somos a solução certa em Help Desk</h2>
          <p>Say hello to your one-stop, relationship-building platform and
            goodbye to outdated media databases: Muck Rack’s search
             engine lets you discover and pitch relevant journalists in a much
             more targeted way than legacy media databases. Building and sharing media
             lists has never been easier, and since they’re automatically kept up-to-date
             you can finally stop spending time maintaining old media contact lists.
             </p>
          </aside>

          <div>
            <img src="/helpdesk.png" alt="helpdesk"/>

          </div>

        </ProductCard>

        <ProductCard>

          <div>
            <img src="/chat.png" alt="mail"/>
          </div>

          <aside>
          <h2>Automatize o atendimento da sua empresa</h2>
          <p>Say hello to your one-stop, relationship-building platform and
            goodbye to outdated media databases: Muck Rack’s search
             engine lets you discover and pitch relevant journalists in a much
             more targeted way than legacy media databases. Building and sharing media
             lists has never been easier, and since they’re automatically kept up-to-date
             you can finally stop spending time maintaining old media contact lists.
             </p>
          </aside>

        </ProductCard>

        <ProductCard>

          <aside>
          <h2>Faça parte da nossa rede de HotSpot</h2>
          <p>Say hello to your one-stop, relationship-building platform and
            goodbye to outdated media databases: Muck Rack’s search
             engine lets you discover and pitch relevant journalists in a much
             more targeted way than legacy media databases. Building and sharing media
             lists has never been easier, and since they’re automatically kept up-to-date
             you can finally stop spending time maintaining old media contact lists.
             </p>
          </aside>

          <div>
            <img src="/contact.png" alt="mail"/>

          </div>

        </ProductCard>

      </ProductsWrapper>

      <ShowCaseWrapper>
            <h1>O que nossos cientes dizem</h1>

            <Carosuel
              enableTilt={true}
              autoPlaySpeed={4000}
              pagination={false}
              className="carosuel"
              enableAutoPlay={true}
              showArrows={true}
              easing="ease"
            >

              <CarosuelCard >
                <img src="/roni.png" alt="Rodrigo Almirante"/>

                <aside>

                  <header>

                  <img src="/hostdime.png" alt="HostDime"/>

                  <strong>A big part of my day to day at Small Girls PR is focused on pitching and media outreach, including developing story angles, networking with reporters and lots of writing, research and keeping up-to-date with the news.</strong>
                  </header>
                <div>
                  <hr/>
                  <strong>Roni Freire</strong>
                  <p>CEO HostDime</p>
                </div>
                </aside>

              </CarosuelCard>

              <CarosuelCard>
                <img src="/marconde.png" alt="Rodrigo Almirante"/>

                <aside>

                  <header>

                  <img src="/pgprime.png" alt="HostDime"/>

                  <strong>A big part of my day to day at Small Girls PR is focused on pitching and media outreach, including developing story angles, networking with reporters and lots of writing, research and keeping up-to-date with the news.</strong>
                  </header>
                <div>
                  <hr/>
                  <strong>Abélio e Marcondes Olivéria</strong>
                  <p>CEO e CTO PGPrime</p>
                </div>
                </aside>

              </CarosuelCard>

              <CarosuelCard>
                <img src="/thiago.png" alt="Rodrigo Almirante"/>

                <aside>

                  <header>

                  <img src="/nemo.png" alt="HostDime" style={{ width: 70, height: 70 }} />

                  <strong>
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  </strong>
                  </header>
                <div>
                  <hr/>
                  <strong>Thiago Salem</strong>
                  <p>Fundador Nemo Sushi</p>
                </div>
                </aside>

              </CarosuelCard>

            </Carosuel>

      </ShowCaseWrapper>

    </Container>
  )
}
