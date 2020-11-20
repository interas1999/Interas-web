import styled from 'styled-components'

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
