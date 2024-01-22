import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const App = () => {
  return (
    <>
      <View>
        <Title>Hello world</Title>
      </View>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </Links>
      <Outlet />
    </>
  )
}

const View = styled.div`
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
