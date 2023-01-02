import React, { useCallback, useEffect, useState } from 'react'
import moment from 'moment'
import { news } from '../models'
import Card from '../../../core/components/card'
import Header from '../../../core/components/header'
import { Container } from './styles'

function Home() {
  const [newsList, setNewsList] = useState([])

  const getNews = useCallback(async () => {
    const response = await news.getNewsByPopularity();
    console.log(response)
    setNewsList(response.articles);
  }, [])
  
  useEffect(() => {
    getNews()
  }, [])

  const renderNews = () => {
    return newsList?.map((item) => {
      return (
        <Card date={moment(item.publishedAt).utc().format('MM/DD/YYYY')} title={item.title} text={item.description} key={`${item.title}-${Math.random()}`}/>
      )
    })
  }

  return (
    <div>
      <Header/>
      <Container>
        {renderNews()}
      </Container>
    </div>
  )
}

export default Home
