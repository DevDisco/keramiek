import React from "react";
import ShowSpreadDestruct from "./ShowSpreadDestruct";

export default function SpreadDestruct() {
  const example = [
    {
      a: 1,
      b: 2,
      c: "yes",
    },
    {
      a: 6,
      b: 0,
      c: "no",
    },
    {
      a: 8,
      b: 7,
      c: "maybe",
      d: "yup",
    },
  ];

  let i = 0;

  return (
    <div>
      {example.map((item) => {
        //const { a, b, c } = item;
        //return <ShowSpreadDestruct a={a} b={b} c={c} />;
        return <ShowSpreadDestruct key={++i} {...item} />;
      })}
    </div>
  );
}
