import React, { useEffect, useReducer, useRef } from 'react';
import { useRefHook } from './useRef';

export default function App() {
  const refValue1 = useRefHook(0);
  const refValue2 = useRef(0);
  const [value, forceRender] = useReducer((x) => x + 1, 0);

  const handleIncrement = () => {
    refValue1.current += 1;
    refValue2.current += 1;

    console.log(`Ref value from custom hook: ${refValue1.current}`);
    console.log(`Ref value from original hook: ${refValue2.current}`);
  };

  useEffect(() => {
    console.log(`Ref value from custom hook: ${refValue1.current}`);
    console.log(`Ref value from original hook: ${refValue2.current}`);
    console.log(`Value of state: ${value}`);
  }, [value]);

  return (
    <div>
      <button onClick={handleIncrement}>Increment values</button>
      <button onClick={() => forceRender()}>Cause render</button>
    </div>
  );
}
