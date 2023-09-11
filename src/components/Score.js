import React, { useRef } from "react";
import { useRipple } from "react-use-ripple";

export default function Score({ count, setCount, start }) {
  const ref = useRef();
  useRipple(ref);
  return (
    <button
      ref={ref}
      id="table"
      onClick={() => {
        setCount(count + 1);
        start();
      }}
    ></button>
  );
}
