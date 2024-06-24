import React, { useContext } from 'react';
import Counter from './Counter';
import { CounterContext } from './CounterContext';

const App = () => {
  const count = useContext(CounterContext);
  console.log(count);

  return (
    <div>
      <h1>Counter is {count.count}</h1>
      <Counter />
    </div>
  );
};

export default App;
