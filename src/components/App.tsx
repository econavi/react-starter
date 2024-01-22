import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

import userIconSrc from 'assets/user.png'
import ThemeSwitcherSvg from 'assets/theme-switcher.svg'

export const App = () => {
  return (
    <>
      <Header>
        <Title>Hello world</Title>
      </Header>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </Links>
      <Icons>
        <UserIcon src={userIconSrc} alt="" width="50" height="50" />
        <ThemeSwitcherSvgStyled width="50" height="50" />
      </Icons>
      <Outlet />
    </>
  )
}

const Header = styled.header`
  padding: 0.5em;
  background: #242424;
`

const Title = styled.h1`
  margin: 0;
  color: white;
`

const Links = styled.nav`
  display: flex;
  gap: 10px;
  padding: 0.5em;
  font-size: 20px;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const UserIcon = styled.img`
  display: block;
`

const ThemeSwitcherSvgStyled = styled(ThemeSwitcherSvg)`
  display: block;
  overflow: visible;
`
