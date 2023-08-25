import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Custom function
function myApp(){
  return (
    <div>
      <h1>Custom App | by Nadeem</h1>
    </div>
  )
}

// Our Own custom react element in custom object form
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// Another custom react element without any object form
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

// Our Own custom react element in custom object form
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    // anotherElement // inject variables at end
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    // myApp() // it will run fine because at the end of the day we execute funtion for any element creation
   
    // ReactElement // it will not run because we deifne element with our own set of sytax of object which react library does not follows
    // anotherElement // it will run because we gave exact parameter which react expect

    reactElement // it will run because we deifne element with same set of syntax of object which react library followsl
   



)
