import React from "react";
import SearchBar from "../components/SearchBar";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => (
  <div className="app-header">
    <h1 className="header-text">Covid Tracker</h1>
    {props.enableSearch ? <SearchBar /> : null}
  </div>
);
export default Header;
