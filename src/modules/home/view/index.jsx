import React from 'react'
import Card from '../../../core/components/card'
import Header from '../../../core/components/header'
import { Container } from './styles'


function Home() {
  return (
    <div>
      <Header/>
      <Container>
        <Card/>
      </Container>
    </div>
  )
}

export default Home
