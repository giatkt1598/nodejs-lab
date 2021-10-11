import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { MyButton } from "my-button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyButton>This is button from workspace 'my-button'</MyButton>
    </div>
  )
}

export default App
