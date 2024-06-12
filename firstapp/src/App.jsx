import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = ()=>{
    if(count<10)
    setCount(count + 1)
  }
  const minusValue = ()=>{
    if(count>0)
    setCount(count - 1)
  }

  return (
  
    <>

     <h1>chai aur react | {count}</h1>
     <h2>count :{count}</h2>
     <button onClick={addValue}>add</button>
     <button onClick={minusValue}>minus</button>


   




    </>
  )
}


export default App
