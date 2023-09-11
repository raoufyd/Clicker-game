import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Log() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/home");
  });

  const play = () => {
    localStorage.setItem("user", user);
    if (user) navigate("/home");
  };

  return (
    <div>
      <input
        type="text"
        name="user"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      ></input>
      <button onClick={() => play()}>Play</button>
    </div>
  );
}

export default Log;
