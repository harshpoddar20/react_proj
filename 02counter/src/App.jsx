import { useState } from 'react' //this is where you import hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(10)
  //var counter declared above wit usestate hooks
  //setcounter is a function

  //let counter=15

  const addValue= ()=>{
    if(counter==20){
      console.log("Value not allowed to go above 20 and it will be reset to 10")
      counter=9
    }
    counter=counter +1 
    //UI updation is controlled by react so above part value
    //of counter will not be updated and here is where hooks are needed in react
    setCounter(counter)

    // *** if i want to update prev counter again and again then use setCounter(prevCounter=>prevCounter +1) 
    //****if we want to repeat te same task
    // console.log("clicked",counter)
  }

  const removeValue=()=>{
    if(counter==0){
      console.log("Value not allowed to go below 0 and it will be reset to 10")
      counter=11
    }
    counter=counter-1

    setCounter(counter)
    // console.log("Unclicked",counter)

  }
  return (
    <>
        <h1>welcome to te app</h1>
        <h3>counter value:{counter}</h3>

        <button
        onClick={addValue}>Add value</button>
        <br />
        <br />
        <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
