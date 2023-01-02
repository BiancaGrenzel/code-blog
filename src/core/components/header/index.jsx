import React from 'react'
import { Header } from './styles'
import { Typography } from '../../styles'

function Home({children}) {
  return (
    <Header>
      <Typography.Title color='#fff'>Codelândia</Typography.Title>
      <Typography.Subtitle color='#fff'>blog</Typography.Subtitle>
      {children}
    </Header>
  )
}

export default Home
