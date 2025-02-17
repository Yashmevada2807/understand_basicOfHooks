import { useState,useMemo,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const multiplier = useMemo(() =>{
    return count*2
  },[count])

  const handleClick = useCallback(()=>{
    setCount(() => count+1)
  },[count])

  return (
    <>
      <div className="container">
        <div className="output">
         Count: {count}
        </div>
        <div className="onMultipleCount">
          OnMultipleCount: {multiplier}
        </div>
        <button onClick={handleClick}>add:{count}</button>
      </div>
    </>
  )
}

export default App
