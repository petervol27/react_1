import { useState } from 'react';

function BasicCalc() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const totalReset = () => {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
  };
  return (
    <div className="text-center mt-4 border rounded w-25 mx-auto py-3 px-0 shadow">
      <input
        className="calcInput"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      ></input>{' '}
      <input
        className="calcInput"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      ></input>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
        <button
          className="btn btn-primary"
          onClick={(e) => setResult(Number(number1 + number2))}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={(e) => setResult(number1 - number2)}
        >
          -
        </button>
        <button
          className="btn btn-warning"
          onClick={(e) => setResult(number1 * number2)}
        >
          *
        </button>
        <button
          className="btn btn-info"
          onClick={(e) => {
            number2 === 0
              ? alert('cannot divide by 0')
              : setResult(number1 / number2);
          }}
        >
          /
        </button>
      </div>
      Result: <input className="calcInput mt-3" readOnly value={result}></input>
      <button className="btn btn-dark ms-3" onClick={totalReset}>
        Reset
      </button>
    </div>
  );
}

export default BasicCalc;
