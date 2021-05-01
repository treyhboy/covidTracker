import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>;
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/state/${1234}`}>State Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
