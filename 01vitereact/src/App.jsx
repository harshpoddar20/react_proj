import Cai from "./cai"
function App() {


  const username="welcome"
  //in h1 under curly bracket is how you pass the variable and it is an evaluated expression 
  //which means that you cannot do any operation under that bracket just final var

  return (
    <>
      <Cai />
      
      <h1>hello and {username}</h1>

      <p>hello world</p>

      
    </>


  )
}

export default App
