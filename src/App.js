import React from 'react'
import { Routes, Route } from 'react-router'
import Rootlayout from './components/Rootlayout'
import Home from './page/Home'
import Contact from './page/Contact'
import About from './page/About'
import Detail from './page/Detail'
import Detail2 from './page/Detail2'
import Search from './page/Search'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='detail2/:ids' element={<Detail2 />} />
        <Route path='searchmeal/:search' element={<Search />} />


      </Route>

    </Routes>
  )
}

export default App
