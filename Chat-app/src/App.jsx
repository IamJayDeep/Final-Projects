import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Room from './Pages/Room'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Room />
    </>
  )
}

export default App
