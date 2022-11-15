import React, {useState}from "react"
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

  function handleSub(){
    setCount(count - 1)
  }


  return (
    <>
      <h1>
        {count}
      </h1>
      <button onClick={handleClick}>Add One</button>
      <button onClick={handleSub}>Subtract One</button>
    </>
  )
}

export default App
