import React, { useEffect } from "react";

export default function Timers({ isActive, seconds, setSeconds }) {
  useEffect(() => {
    let interval = null;
    if (isActive && seconds < 60) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return <div className="time">{seconds}</div>;
}
