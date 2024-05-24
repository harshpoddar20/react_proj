import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen "
        style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">

            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "red" }}>
              red
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "green" }}>
              green
            </button>

            <button
            onClick={() => setColor("blue")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "blue" }}>
              blue
            </button>

            <button
            onClick={() => setColor("black")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "black" }}>
              black
            </button>

            <button 
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "grey" }}>
            grey
            </button>
          </div>
        </div>



      </div>

    </>
  )
}

export default App
