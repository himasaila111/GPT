import React from 'react'
import './app.css'
import {CTA, Brand, NavBar} from "./components"
import {Features, Footer, Header, Possibility, WhatGPT3, Blog} from "./containers"

const App = () => {
  return (
   <div className="App">
    <div className="gradient__bg">
      <NavBar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default App