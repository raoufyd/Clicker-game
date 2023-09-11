import React from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

export default function Navbar() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/rank");
  };
  const redirected = () => {
    navigate("/home");
  };
  return (
    <div id="navbar">
      <ul>
        <li onClick={() => redirected()}>{localStorage.getItem("user")}</li>
        <li>
          <button id="btn" onClick={() => redirect()}>
            Ranking
          </button>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}
