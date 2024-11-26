import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  // const increaseCount = () => {
  //   setCount(count + 1);
  // };
  // const decreaseCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   } else {
  //     alert('cannot go beyond 0');
  //     return;
  //   }
  // };
  // const resetCounter = () => {
  //   setCount(0);
  // };
  return (
    <main className="counter">
      <label>Current Count:</label>
      <input readOnly value={count}></input>
      <div className="d-flex justify-content-center align-items-center gap-3 my-3">
        <button
          className="counterIncrease btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
        <button
          className="counterDecrease btn btn-danger"
          onClick={() =>
            count > 0 ? setCount(count - 1) : alert('cannot decrease beyond 0')
          }
        >
          Decrease Count
        </button>
        <button
          className="counterReset btn btn-warning"
          onClick={() => setCount(0)}
        >
          Reset Counter
        </button>
      </div>
    </main>
  );
}

export default Counter;
