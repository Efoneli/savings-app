'use client'

import { useCounterStore } from '../stores/counterStore'

export default function Counter() {
  const { count, increase, decrease, reset } = useCounterStore()

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <div className="flex gap-3">
        <button onClick={increase} className="bg-green-500 text-white px-4 py-2 rounded">+</button>
        <button onClick={decrease} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
        <button onClick={reset} className="bg-gray-700 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  )
}
