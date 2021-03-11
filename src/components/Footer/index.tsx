import Link from 'next/link'

import * as S from './styles'
import Logo from 'components/Logo'
import Heading from 'components/Heading'
import React from 'react'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href="#" target="_blank" rel="noopener, noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopener, noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener, noreferrer">
            Youtube
          </a>
          <a href="#" target="_blank" rel="noopener, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resourses">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem Ipsum dolor sit</span>
        <span>Lorem Ipsum</span>
        <span>Lorem Ipsum dolor</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2021 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
