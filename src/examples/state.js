import React, {useState, useEffect, useRef} from 'react'
import './App.css';


function App() {

  const renderCound = useRef(1)
  const inputRef = useRef(null)

  const [value, setValue] = useState('')


  useEffect(() => {
    console.log('useEffect')
    renderCound.current++
    console.log(inputRef.current.value)
  })

  function focus() {
    inputRef.current.focus()
  }

  return (
    <div className="App">
      <form>
        <input ref = {inputRef} type = "text" onChange = {(event) => setValue(event.target.value)} value = {value}></input>
        <input type = "button" className = "btn btn-success" onClick = {focus}/>
      </form>

      {renderCound.current}
    

    </div>
  );
}

export default App;
