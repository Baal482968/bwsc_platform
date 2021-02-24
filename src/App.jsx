import React from 'react'
import { Navbar } from './components/nav-bar'
import { Content } from './components/content'

const App = () => (
  <div className="w-screen h-screen overflow-x-hidden">
    <Navbar />
    <Content />
  </div>
)

export default App
