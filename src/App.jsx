import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/nav-bar'
import { Content } from './components/content'

const App = () => (
  <BrowserRouter>
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <Content />
    </div>
  </BrowserRouter>
)

export default App
