import { Container } from '../styles/pages/Home'
import Image from 'next/image'
import SEO from '@/components/SEO'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
  (function(s, z, c, h, a, t) {
    s.SZchat = s.SZchat || function() {
      (s.SZchat.q = s.SZchat.q || []).push(arguments)
    }
    t = z.createElement(c),
      a = z.getElementsByTagName(c)[0]; t.async = 1
    t.src = h + '/webchat/v2/szchat.js'; a.parentNode.insertBefore(t, a)
    s.SZchat('cid', '5f736baa8aff6b5f29188083')
    s.SZchat('host', h)
  })(window, document, 'script', 'https://interas.sz.chat')
  })

  return (
    <Container>

      <SEO
        title="Interas"
        shouldExludeTitleSuffix
        image="logo.png"
      />

      <Header>

        <Image />

        <Home />
        <QuemSomos />
        <Solucoes />
        <Produtos />
        <Contato />

      </Header>

    </Container>
  )
}
