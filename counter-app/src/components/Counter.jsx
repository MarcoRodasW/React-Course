import { useEffect } from 'react'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount((count) => count + 1)
  }

  useEffect(() => {
    if (count > 10 || count < -10) {
      alert('Limited amount')
      setCount(0)
    }
  }, [count])

  return (
    <>
      <div className="flex gap-2 justify-center items-center mt-8 ">
        <button className="bg-slate-600 text-gray-300 p-2 rounded-xl" onClick={handleIncrease}>
          Increase
        </button>
        <p className="text-lg text-slate-800 font-bold">{count}</p>
        <button
          className="bg-slate-600 text-gray-300 p-2 rounded-xl"
          onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="bg-red-600 text-slate-800 p-2 rounded-xl" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </>
  )
}
