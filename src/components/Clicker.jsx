import { useState } from "react"
import { FiRefreshCcw } from "react-icons/fi";

const Clicker = () => {
  const[count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount -1)
  }

  const reset = () => {
    setCount(prevCount => prevCount = 0)
  }

  return (
    <div className="clicker-container">
      <div className="result">
        {count}
      </div>
      <div className="btn-container">
        <button className="minus-btn" onClick={decrement}>-</button>
        <button className="reset-btn" onClick={reset}><FiRefreshCcw /></button>
        <button className="plus-btn" onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Clicker