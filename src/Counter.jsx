import React, { useState } from "react";

//export default function Counter(props) {
//const [count, setCount] = useState(parseInt(props.i));

export default function Counter({ i }) {
  const [count, setCount] = useState(i);

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <p>The count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}
