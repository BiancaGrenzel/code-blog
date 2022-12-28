import React from 'react'
import { Header } from './styles'
import { Typography } from '../../styles'
import Input from '../input'

function Home() {
  return (
    <Header>
      <Typography.Title>Codelândia</Typography.Title>
      <Typography.Subtitle>blog</Typography.Subtitle>
      <Input placeholder='Pesquise aqui'/>
    </Header>
  )
}

export default Home
