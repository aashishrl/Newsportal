import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/style.scss'
import Top from './Components/Top';
import Home from './Pages/Home';
import Header from './Components/Header';
import LatestBox from './Components/Home/LatestBox';
import LatestBox1 from './Components/Home/LatestBox1';
import News from './Pages/News';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Top />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<LatestBox1 />} />
          <Route path='/latest/:id' element={<LatestBox />} />
        </Route>
        <Route path='/:id1' element={<News />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
