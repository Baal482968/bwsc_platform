import React, { useEffect, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/nav-bar'
import { Content } from './components/content'

const App = () => {
  const navbarRef = useRef()
  useEffect(() => {
    const navbarSection = navbarRef.current
    if (navbarSection) {
      navbarSection.addEventListener('touchmove', (e) => {
        e.preventDefault()
      })
    }
  }, [])
  return (
    <BrowserRouter>
      <div className="w-screen h-screen overflow-x-hidden">
        <div ref={navbarRef}>
          <Navbar />
        </div>
        <Content />
      </div>
    </BrowserRouter>
  )
}

export default App
