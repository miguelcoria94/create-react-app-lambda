import React, {useState}from "react"
import "./App.css"

const App = () => {
  const [switchImg, setSwitch] = useState(false)

  function handleSwitch(){
    setSwitch(!switchImg)
  }


  return (
    <>
    { switchImg && <img src="/emili.jpg" height={300} />}
     
      <button onClick={handleSwitch}> {switchImg ? "No Beso 💩" : "Un Beso 😘"}</button>
    </>
  )
}

export default App
