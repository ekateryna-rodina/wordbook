import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { amountAdded, incremented } from './features/counter/counter-slice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };
  const handleClickWithArgs = (amount: number) => {
    dispatch(amountAdded(amount));
  };
  return (
    <div className="App">
      <button onClick={() => handleClickWithArgs(3)}>count is {count}</button>
    </div>
  );
}

export default App;