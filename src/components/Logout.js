import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const disconnect = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <button id="btn" onClick={() => disconnect()}>
      Logout
    </button>
  );
}
