import React from "react";
import Nav from "../Nav/Nav";
import classes from "./Header.module.scss";
import reactLogo from "../../assets/purpleLogo.png";;
export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <img src={reactLogo}></img>
      <h1>React student toolkit</h1>
      <Nav></Nav>
    </header>
  );
};
export default Header;
