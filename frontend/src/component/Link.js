import { Link, Outlet } from "react-router-dom";
import React from "react";

function Linkk() {
  return (
    <>
      <ul className=" nav-ul">
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/create">CREATE</Link>
        </li>

        <li>
          <Link to="/update">UPDATE</Link>
        </li>

        <li>
          {" "}
          <Link to="/delete">DELETE</Link>
        </li>

        <li>
          {" "}
          <Link to="/contact">CONTACT</Link>
        </li>

        <li>
          {" "}
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Linkk;
