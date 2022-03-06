import React from 'react'
import styled from 'styled-components'
import Homescreen from './components/homescreen/home'

const App=()=> {
  return(
    <Container>
        <Homescreen/>
    </Container>
  )
}

export default App;
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
// const Wrapper = styled.div`
// width: 80%;
// `