import React from "react";

export default function Popups({ setSeconds, setCount, setIsActive }) {
  return (
    <div
      onClick={() => {
        setSeconds(0);
        setCount(0);
        setIsActive(false);
      }}
      id="popup"
    >
      Go to the rank
    </div>
  );
}
