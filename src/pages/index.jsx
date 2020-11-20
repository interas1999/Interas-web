import Image from 'next/image'
import SEO from '@/components/SEO'
import { useEffect } from 'react'
import Typist from 'react-typist'

import {
  Container,
  Header,
  HeaderImage,
  NavText,
  NavWrapper,
  ApresentationWrapper,
  TextContainer,
  SecondImage,
  TextApresentation
} from '../styles/pages/Home'

import logoBranca from '../../public/logo-branca.png'
import coffe from '../assets/coffe.svg'

export default function Home() {
  // useEffect(() => {
  // (function(s, z, c, h, a, t) {
  //   s.SZchat = s.SZchat || function() {
  //     (s.SZchat.q = s.SZchat.q || []).push(arguments)
  //   }
  //   t = z.createElement(c),
  //     a = z.getElementsByTagName(c)[0]; t.async = 1
  //   t.src = h + '/webchat/v2/szchat.js'; a.parentNode.insertBefore(t, a)
  //   s.SZchat('cid', '5f736baa8aff6b5f29188083')
  //   s.SZchat('host', h)
  // })(window, document, 'script', 'https://interas.sz.chat')
  // })

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
          <Typist stdTypingDelay={15} cursor={{ show: true, blink: true }} >
          <TextApresentation > Automoção de chat ?</TextApresentation>
          <Typist.Backspace count={20} delay={400} />
          <TextApresentation> HotSpot ? </TextApresentation>
          <Typist.Backspace count={9} delay={400} />
          <TextApresentation>elp Desk ? </TextApresentation>

          </Typist>

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

      </ApresentationWrapper>

    </Container>
  )
}
