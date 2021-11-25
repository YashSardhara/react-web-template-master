import React from "react";
// import { Link } from "react-router-dom";

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
    <div key={index}>
      <a href={lists.to}> {lists.name}</a>
    </div>
  ));

  return (
    <>
      <div className="HeaderBar">
        <div>Logo</div>
        <div className="Navbar">{menuItem}</div>
      </div>
    </>
  );
};

export default Header;
