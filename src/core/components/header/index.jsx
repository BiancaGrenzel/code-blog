import React from 'react'
import { Header } from './styles'
import { Typography } from '../../styles'
import Input from '../input'

function Home() {
  return (
    <Header>
      <Typography.Title color='#fff'>Codelândia</Typography.Title>
      <Typography.Subtitle color='#fff'>blog</Typography.Subtitle>
      <Input placeholder='Pesquise aqui'/>
    </Header>
  )
}

export default Home
