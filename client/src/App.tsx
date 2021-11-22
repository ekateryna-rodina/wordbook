import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Menu } from './components/Menu';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { UserActions } from './components/UserActions';
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
      <Menu />
      <button onClick={() => handleClickWithArgs(3)}>count is {count}</button>
      <SignUp />
      <SignIn />
      <UserActions />
      {/* <CreateRecord /> */}
    </div>
  );
}

export default App;
