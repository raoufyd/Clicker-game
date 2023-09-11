import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./Navbar";

export default function Rank() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("profiles")) || [];
    console.log("p : ", p);

    var tarray = [];
    p.sort(function (a, b) {
      return b.num - a.num;
    });

    setProfiles(p);

    console.log("profiles : ", profiles);
  }, []);

  return (
    <div className="page02">
      <div className="navrank">
        <Navbar />
      </div>
      <div id="list">
        {profiles.map((p) => (
          <div key={p.num} id="classement">
            <span>{p.use}</span>
            <span>{p.num}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
