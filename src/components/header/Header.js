import SwitchButton from "../buttons/SwitchButton";
import React from "react";
import { isDark } from "src/App";
import PropTypes from "prop-types";

const items = [
  {
    name: "home",
    to: "/",
  },
  {
    name: "Album",
    to: "/album",
  },
  {
    name: "Signup",
    to: "/signup",
  },
  {
    name: "Counter",
    to: "/counter",
  },
];

const Header = (props) => {
  const menuItem = items.map((lists, index) => (
    <div key={index} className="mx-4 px-1">
      <a href={lists.to}>{lists.name}</a>
    </div>
  ));

  return (
    <>
      <isDark.Consumer>
        {(theme) => {
          return (
            <div className={`HeaderBar${theme}`}>
              <div>Logo</div>
              <div className="Navbar">
                {menuItem}
                <SwitchButton handleSwitch={props.handleSwitch} />
              </div>
            </div>
          );
        }}
      </isDark.Consumer>
    </>
  );
};
Header.propTypes = {
  handleSwitch: PropTypes.func,
};
export default Header;




