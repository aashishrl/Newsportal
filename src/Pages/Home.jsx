import React from 'react'
import Banner from '../Components/Home/Banner'
import Latest from '../Components/Home/Latest'
import Trending from '../Components/Home/Trending'
import CurrentIssues from '../Components/Home/CurrentIssues'
import WomensCup from '../Components/Home/WomensCup'

function Home() {
  return (
    <>
      <Banner/>
      <Latest/>
      <Trending/>
      <CurrentIssues/>
      <WomensCup/>
    </>
  )
}

export default Home
