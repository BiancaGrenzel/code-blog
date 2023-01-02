import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment'
import { news } from '../models'
import Card from '../../../core/components/card'
import Header from '../../../core/components/header'
import { Box, Container } from './styles'
import Input from '../../../core/components/input'

function Home() {
  const [newsList, setNewsList] = useState([])
  const [filter, setFilter] = useState('')
  const filteredList = newsList.filter((item) => item.title.includes(filter));

  const getNews = useCallback(async () => {
    const response = await news.getNewsByPopularity();
    setNewsList(response.articles);
  }, [])
  
  useEffect(() => {
    getNews()
  }, [])

  const renderNews = () => {
    if(!filter){
      return newsList?.map((item) => {
        return (
          <Card date={moment(item.publishedAt).utc().format('MM/DD/YYYY')} title={item.title} text={item.description} key={`${item.title}-${Math.random()}`}/>
        )
      })
    } else {
      return filteredList?.map((item) => {
        return (
          <Card date={moment(item.publishedAt).utc().format('MM/DD/YYYY')} title={item.title} text={item.description} key={`${item.title}-${Math.random()}`}/>
        )
      })
    }
  }

  return (
    <Container>
      <Header>
        <Input placeholder='Search by the title' value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </Header>
      <Box>
        {renderNews()}
      </Box>
    </Container>
  )
}

export default Home
