import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])

  const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
  }

  return (
    <div className={"container"}>
      <h1>Hello World</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", whiteSpace: "nowrap" }}>
        <span>{counter}</span>
        <span>History: {values.toString()}</span>
      </div>
      <button onClick={handleClick}>
        Add
      </button>
    </div>
  )
}

export { App }