import React, { useEffect } from 'react';
import './App.css';
import { useCounterStore } from './store';

const setCount = () => {
  const count = useCounterStore.setState({ count: 1 });
  console.log(count);
}

const App = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <div className="App">
      <App2 count={count} />
    </div>
  );
};

const App2 = ({ count }: { count: number }) => {
  useEffect(() => {
    setCount();
  }, [])
  return (
    <div className="App">
      <button onClick={() => useCounterStore.getState().decrement()}>Decrement</button>
      Count: {count}
      <button onClick={() => useCounterStore.getState().increment()}>Increment</button>
      <button onClick={() => useCounterStore.getState().incrementAsync()}>Increment Async</button>

    </div>
  );
};

export default App;
