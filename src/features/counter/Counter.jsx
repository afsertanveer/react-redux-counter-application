import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'
import { useState } from 'react'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  const addValue = Number(incrementAmount) || 0

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        name="incrementAmount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
        id="incrementAmount"
      />
      <div className="">
        <button onClick={()=>dispatch(incrementByAmount(incrementAmount))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}

export default Counter
