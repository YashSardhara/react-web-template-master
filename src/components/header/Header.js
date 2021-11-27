import SwitchButton from "../buttons/SwitchButton";
import React from "react";
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
    <>
      <div key={index}>
        <a href={lists.to}>{lists.name}</a>
      </div>
    </>
  ));
  return (
    <>
      <isDark.Consumer>
        {(theme) => {
          return (
            <div className={`HeaderBar${theme === "-dark" ? "-dark" : ""}`}>
              <div>Logo</div>
              <div className="Navbar">
                {menuItem}
                <SwitchButton />
              </div>
            </div>
          );
        }}
      </isDark.Consumer>
    </>
  );
};

export default Header;
