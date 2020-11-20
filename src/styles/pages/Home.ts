import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`

  display: flex;
  flex-direction: column;


`
export const Header = styled.div`
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  > img {
    cursor: pointer;
    transition:  0.2s;

    width: 212px;
    height: 55px;


    &:active {
      width: 175px;
      height: 45px;
    }
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondWhite};
  margin-left: 12px;
  font: 500 18px Raleway, Sans-serif;
  cursor: pointer;
  transition:  0.3s;

  &:hover {
    color: #fff;
  }

`

export const ApresentationWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 55vh;
  padding: 20px 200px 0px;
  background: #143954;
  background-image: url('/homepage-intro-pattern.png');

  background-size: auto 70%;
  background-repeat: repeat-x;

  > img {

    width: 378px;
    height: 390px;
    position: absolute;
    top: 64px;
    right: 720px;
  }

  > aside {
      img {
        width: 600px;
        height: 214px;
        position: absolute;
        bottom: 420px;
        right: 450px;
      }

  }



`

export const SecondImage = styled.img`
    width: 600px;
    height: 260px;
    position: absolute;
    bottom: 240px;
    right: 150px;
`

export const TextContainer = styled.div`
  width: 600px;
  z-index: 92828;

  > p {
    font: 400 22px Raleway, Sans-serif;
    margin-top: 24px;
    max-width: 370px;
    z-index: 200;
    color: ${({ theme }) => theme.colors.textSecondWhite}

  }

  > button {
      margin-top: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 16px;
      background: #40a9bd;
      border-radius: 6px;
      width: 143px;
      height: 40px;
      font: 500 14px Raleway, Sans-serif;
      cursor: pointer;
      color: #fff;
      transition: background 0.3s;

      &:hover {
        background: #4abdd2;
      }
  }

`
export const TextApresentation = styled.strong`
    font: 500 48px Raleway, Sans-serif;
    color: ${({ theme }) => theme.colors.textWhite};
`
