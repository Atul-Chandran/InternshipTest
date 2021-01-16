import React from "react";
const HeaderStyle = {
  textAlign: "center"
}

const Header = props => {
  return (
    <header className="App-header">
      <h2 style = {HeaderStyle}>{props.text}</h2>
    </header>
  );
};

export default Header;
