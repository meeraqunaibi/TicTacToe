import React from "react";
import "./header.component.css";
const Header = (props) => {
  return (
    <div className="header">
      <span>X: {props.points.xPoint}</span>
      <span>O: {props.points.oPoint}</span>
      <span>Turn: {props.turn}</span>
    </div>
  );
};
export default Header;
