import "../style/App.css";
import React, { useEffect, useState } from "react";
import Score from "./Score";
import Timers from "./Timers";
import Popups from "./Popups";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();
  var num = 0;

  if (seconds === 0) {
  } else {
    num = (count / seconds).toFixed(2);
  }

  useEffect(() => {
    var user = localStorage.getItem("user");
    localStorage.setItem("num", num);

    if (!user) navigate("/");
  });

  function start() {
    setIsActive(true);
  }

  if (seconds === 5) {
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

    //profiles after get
    console.log("profiles after get: ", profiles);

    profiles.push({ use: localStorage.getItem("user"), num });

    //profiles after push
    console.log("profiles after push: ", profiles);

    localStorage.setItem("profiles", JSON.stringify(profiles));

    //profiles after set
    console.log("profiles after set: ", profiles);
    return (
      <div className="page02">
        <div className="navrank">
          <Navbar />
        </div>
        <Popups
          setIsActive={setIsActive}
          setCount={setCount}
          setSeconds={setSeconds}
        />
      </div>
    );
  }

  return (
    <div id="page">
      <Navbar />
      <div id="app">
        <div id="board">
          <div id="score" className="case">
            {count}
            <span>Score</span>
          </div>
          <div id="timer" className="case">
            <Timers
              seconds={seconds}
              setSeconds={setSeconds}
              isActive={isActive}
              setIsActive={isActive}
            />
            <span>Timer</span>
          </div>
          <div id="clicks" className="case">
            {num}
            <span>Click/s</span>
          </div>
        </div>

        <Score start={start} count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
