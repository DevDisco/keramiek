import React from "react";

//a,b,c are inside props, now destructure them into vars
export default function ShowSpreadDestruct({ a, b, c }) {
  return (
    <div>
      <h4>Lalala</h4>
      <p>
        a: {a}, b: {b}, c: {c}
      </p>
    </div>
  );
}
