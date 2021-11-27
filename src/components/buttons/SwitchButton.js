import React, { useState } from "react";
import Switch from "react-switch";

const SwitchButton = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <>
      <label className="inline-view">
        <Switch onChange={handleChange} checked={checked} className="" />
      </label>
      <p> {checked ? " Dark  " : " Light "}</p>
    </>
  );
};

/* <p>
  The switch is <span>{checked ? "on" : "off"}</span>.
</p> */

export default SwitchButton;
