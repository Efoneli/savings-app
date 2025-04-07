// 'use client'
// import { useState } from "react"



// export default function Counter() {
// const [count, setCount] = useState(2)

//     return(
//         <div>
//             <h2>Count: {count} </h2>
//             <button onClick={() => setCount(count + 2)}>Increase</button>
//         </div>
//     )
// }



// 'use client'
// import { useReducer } from "react"

// const initialState = { count: 0 }

// function reducer ( state, action ) {
//     switch (action.type) {
//         case 'increase':
//             return { count: state.count + 1}
//         case 'decrease':
//             return { count: state.count - 1}
//         default:
//             return state
//     }
// }

// export default function Counter() {
// const [state, dispatch] = useReducer(reducer, initialState)

//     return(
//         <div>
//             <h2>Count: {state.count} </h2>
//             <button onClick={() => dispatch({ type: 'increase'})}>Increase</button>
//             <button onClick={() => dispatch({ type: 'decrease'})}>Decrease</button>
//         </div>
//     )
// }



import React, { useContext, useState, createContext } from 'react'

// Create a context
const ThemeContext = createContext()

// Context provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// A component using the context
const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current Theme: {theme}
    </button>
  )
}

// App
const App = () => (
  <ThemeProvider>
    <Button />
  </ThemeProvider>
)
