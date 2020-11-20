import { useState } from 'react'
import SEO from '@/components/SEO'
import Typist from 'react-typist'
import Carosuel from 'react-elastic-carousel'

import {
  Container,
  Header,
  HeaderImage,
  NavText,
  NavWrapper,
  ApresentationWrapper,
  TextContainer,
  SecondImage,
  TextApresentation,
  ProductsWrapper,
  ProductCard,
  ShowCaseWrapper
} from '../styles/pages/Home'

import logoBranca from '../../public/logo-branca.png'
import coffe from '../assets/coffe.svg'

export default function Home() {
  const [typeText, setTypeText] = useState(false)

  setInterval(() => {
    setTypeText(true)
  }, 500)

  return (
    <Container>

      <SEO
        title="Interas"
        shouldExludeTitleSuffix
        image="logo.png"
      />

      <Header>

          <img src={logoBranca} alt="Interas"/>

        <NavWrapper>

        <NavText>Início</NavText>
        <NavText>Quem Somos?</NavText>
        <NavText>Soluções</NavText>
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

          <button onClick={() => {}} >Vamos começar</button>

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

            <Carosuel>
              <p>maoews</p>
              <h3>dwad</h3>
              <strong></strong>
            </Carosuel>

      </ShowCaseWrapper>

    </Container>
  )
}
