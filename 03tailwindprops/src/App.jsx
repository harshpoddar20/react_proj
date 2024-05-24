import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj={ //tis is to pass te value as an object
    username:"hitesh",
    age:21
  }

  //usin props we can pass arguments in react components here channel is prop

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>Tailwind Test</h1>       
      <Card username="hello world" /> 
      

      <Card username="hars poddar"/>


      


    </>
  )
}

export default App
