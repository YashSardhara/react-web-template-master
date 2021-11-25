import React from "react";
// import { Link } from "react-router-dom";
import { isDark } from "src/App";
const items = [
  {
    name: "home",
    to: "/",
  },
  {
    name: "Album",
    to: "/album",
  },
];

const Header = () => {
  const menuItem = items.map((lists, index) => (
    <isDark.Consumer key={index}>
      {(theme) => {
        return (
          <div>
            <a className={`text${theme}`} href={lists.to}>
              {lists.name}
            </a>
          </div>
        );
      }}
    </isDark.Consumer>
  ));

  return (
    <>
      <isDark.Consumer>
        {(theme) => {
          return (
            <div className={`HeaderBar${theme}`}>
              <div>Logo</div>
              <div className="Navbar">{menuItem}</div>
            </div>
          );
        }}
      </isDark.Consumer>
    </>
  );
};

export default Header;
