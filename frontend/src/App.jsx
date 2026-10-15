import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <Text text="Holla!"/>
    <Text text="First prop1!1!1"/>
    </>
  )
}

function Text({text}){
  return(
    <div><p>{text}</p></div>
  )
}

export default App
