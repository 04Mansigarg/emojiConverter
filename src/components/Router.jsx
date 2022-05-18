import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Post } from './Post'

import { Navbar } from './Navbar'

export const Router = () => {
  return (
    <div >
    <Navbar/>
    <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="post" element={<Post/>}/>
    </Routes>
    </div>
  )
}
