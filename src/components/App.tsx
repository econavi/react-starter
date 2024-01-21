import styled from 'styled-components'

export const App = () => {
  return (
    <View>
      <Title>Hello world</Title>
    </View>
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
