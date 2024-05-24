import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//creatin my own app and printin it
function Myapp(){
  return(
    <div>
        <h1>Custom app</h1>
    </div>
  )
}

//tis is creatin te object just like te above func gets converted to an 
//obj to get called in the react dom 
//here our own obj wont work as it is not acc to the rules
const anoterElement=(
  <a href="https://google.com" target ='_blank'>Visit google </a>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
   
//   anoterElement
//   )


//usin this we can now give it in object form and run te app
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },
  'click me to visit google'
)

// ReactDOM.createRoot(document.getElementById('root')).render(
   
//   reactElement
//   )

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <Myapp /> 
  </React.StrictMode>,
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <App /> 
  </React.StrictMode>,
)


