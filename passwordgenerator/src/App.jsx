import { useState,useCallback ,useEffect,useRef} from 'react'

import './App.css'

function App() {
const [length,setLength] = useState(8)
const [numberAllowed,setNumberAllowed] = useState(false)
const [charactersAllowed,setCharactersAllowed] = useState(false)
const [password,setPassword] = useState("")
// ref hook 
const passwordRef= useRef(null)


const PasswordGenerator = useCallback(()=>{
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) { str += "0123456789"
    
  }
  if(numberAllowed){
    str += "!@#$%^&[]{}"
  }
  for(let i=0;i<=length;i++){
    let char = Math.floor(Math.random() * str.length +1)
    pass += str.charAt(char)
  }

  setPassword(pass)

} ,[length,numberAllowed,charactersAllowed,setPassword])

const copyPasswordToClickboard = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{PasswordGenerator()},[length,numberAllowed,charactersAllowed,PasswordGenerator])

  return (
    <>
   
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"  value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClickboard} >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer'  onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="">Length:{length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" name="" id="numberInput" defaultChecked={numberAllowed} onChange={()=>{ setNumberAllowed((prev)=> !prev) ; }}  />
          <label htmlFor="">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" name="" id="characterInput" defaultChecked={charactersAllowed} onChange={()=>{ setCharactersAllowed((prev)=> !prev) ; }}  />
          <label htmlFor="">Character</label>
          </div>
      </div>
     </div>
    </>
  )
}

export default App
