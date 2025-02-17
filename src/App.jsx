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
        <div className="output m-2 p-2 bg-blue-700 rounded-xl">
         Count: {count}
        </div>
        <div className="onMultipleCount m-1 p-1 bg-blue-500 rou">
          OnMultipleCount: {multiplier}
        </div>
        <button onClick={handleClick}>add:{count}</button>
      </div>
    </>
  )
}

export default App
