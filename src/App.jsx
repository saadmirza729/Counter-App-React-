import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementHandler = () => {
    setCount(count + 1)
  }
  const decrementHandler = () => {
    setCount(count - 1)
  }
  const resetHandler = () => {
    setCount(0)
  }

  return (
    <>
      <div className='w-[320px] bg-amber-50 rounded-2xl h-[300px] p-3 text-black flex flex-col justify-center items-center'>

        <h1 className='text-gray-800 font-bold text-3xl mb-7'>Counter App</h1>

        <h2 className={`text-gray-600 text-6xl flex font-bold ${count < 0 ? "text-red-800":"text-green-800"}`}>{count}</h2>

        <div className='mt-[20px]'>
          <button onClick={incrementHandler} className='bg-gray-600 p-1 pl-2 pr-2 rounded mr-2 font-bold text-amber-50 hover:bg-gray-800 transition-all duration-300'>Increment</button>
          <button onClick={decrementHandler} className='bg-gray-400 p-1 pl-2 pr-2 rounded font-bold  hover:bg-gray-500 transition-all duration-300'>Decrement</button>


        </div>
        <div className='mt-[20px] mb-4'>
          <button onClick={resetHandler} className='bg-gray-600 p-1 pl-2 pr-2 rounded mr-2 font-bold text-amber-50 hover:bg-gray-800 transition-all duration-300'>Reset</button>


        </div>
      </div>

    </>
  )
}

export default App
