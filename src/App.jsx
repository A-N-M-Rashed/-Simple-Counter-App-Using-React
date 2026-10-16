import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CounterBTN from './CounterBTN'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col py-5 gap-2 items-center justify-center'>
      <h3>Count {count} </h3>
      <div className='flex gap-3'>
        <div>
          <CounterBTN isIncrement={true} handleCount={() => setCount(count + 1)} />
        </div>
        <div onClick={()=> setCount(0)} className="bg-blue-500 hover: bg-blue-600 text-white px-3 rounded-md w-fit cursor-pointer">
          Reset
        </div>
        <div>
          <CounterBTN isIncrement={false} handleCount={() => setCount(count - 1)} />
        </div>

      </div>
    </div>
  )
}

export default App
