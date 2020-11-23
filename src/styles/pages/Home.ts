import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  width: 100%;

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
  position: fixed;
  z-index: 99999999999;


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
  margin-top: 60px;
  display: flex;
  height: 55vh;
  padding: 0px 200px  0px 200px;
  background: #143954;
  background-image: url('/homepage-intro-pattern.png');
  transition: 0.2s;



  background-size: auto 80%;
  background-repeat: repeat-x;

  @media (max-width: 1200px) {
    padding: 0px 50px  0px 50px;
  }

  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    background-size: auto 100%;
  }

  > img {

    width: 378px;
    height: 390px;
    position: absolute;
    top: 64px;
    right: 25vw;
    transition: 0.2s;


    @media (max-width: 1560px) {
      & {
        right: 15vw;
      }
    }

    @media (max-width: 1360px) {
      & {
        right: 5vw;
      }
    }

    @media (max-width: 1000px) {
      & {
        display: none;
      }
    }
  }

  > aside {
     > img {
        width: 600px;
        height: 214px;
        position: absolute;
        bottom: 450px;
        right: 15vw;
         transition: 0.2s;


        @media (max-width: 1560px) {
          & {
            right: 5vw;
          }
        }

        @media (max-width: 1360px) {
          & {
            right: 0vw;
          }
        }

        @media (max-width: 1000px) {
      & {
        display: none;
      }
    }
    }
  }

  > div {
    > img {
        position: absolute;
        width: 261px;
        height: 90px;
        top: 100px;
        right: 15vw;
        transition: 0.2s;


        @media (max-width: 1560px) {
      & {
        right: 5vw;
      }


    }

      @media (max-width: 1360px) {
        & {
          right: 0vw;
        }
      }

      @media (max-width: 1000px) {
        & {
          display: none;
        }
      }
    }
  }



`

export const SecondImage = styled.img`
    width: 600px;
    height: 240px;
    position: absolute;
    bottom: 240px;
    right: 150px;
`

export const TextContainer = styled.div`
  width: 600px;
  z-index: 92828;
  margin-top: 12px;

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
      border: none;
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
export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 20%;


  > h1 {
      color: #203856;
      font: 500 48px Raleway, Sans-serif;
      text-align: center;

  }

`

export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 52px;

  > aside {
    width: 60%;
    display: flex;
    flex-direction: column;


    > h2 {
      color: #203856;
      font: 500 38px Raleway, Sans-serif;
      margin-bottom: 12px;
    }

    > p {
        color: #333333;
        font: 400 18px Raleway, Sans-serif;

    }
  }

  > div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      > img {
          height: 250px;
          width: 200px;
      }
  }

`
export const ShowCaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 320px;
  background-image: url('/background.png');
  background-size: cover;
  border-top: 1px solid #ccc;

  h1 {
    margin-left: 55px;
    color: #203856;
    font: 500 38px Raleway, Sans-serif;
    margin-bottom: 12px;
  }


  .sc-dlfnbm {
    cursor: pointer;
    border: none;
    transition: 0.4s;
    box-shadow: 0 0 30px rgba(50, 50, 93, 0.25);
    &:hover {
      box-shadow: 0 0 100px rgba(50, 50, 93, 0.25);

    }
  }



`
export const CarosuelCard = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25) !important;
  border: none;


  display: flex;
  flex-direction: row;


  img {
    height: 400px;
    width: 35%;
    pointer-events: none;
  }

  > aside {
    padding: 25px 25px 25px 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header {
      display: flex;
      flex-direction: column;

      > img {
        height: 50px;
        width: 322px;
        margin-bottom: 12px;
      }

      > strong {
        color: #121214;
        font: 400 22px Raleway, Sans-serif;
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      > hr {
        color: #dddddd;
        height: 2px;
        background: #dddddd;
        border: none;
        width: 20px;
        border-radius: 5px;
        margin-bottom: 6px;
      }

      strong {
        color: #338d9d;
        font: 500 18px Raleway, Sans-serif;
      }

      p {
        color: #828282;
        font: 400 18px Raleway, Sans-serif;
      }
    }


  }
`
