import React, { useState } from "react";
import Switch from "react-switch";
import PropTypes from "prop-types";

const SwitchButton = (props) => {
  const [checked, setChecked] = useState(false);

  const handleSwitchEvent = (nextChecked) => {
    setChecked(nextChecked);
    props.handleSwitch(checked);
  };

  return (
    <div>
      <label className="inline-view">
        <Switch onChange={handleSwitchEvent} checked={checked} />
        <p> {checked ? "Dark" : " Light "}</p>
      </label>
    </div>
  );
};

SwitchButton.propTypes = {
  handleSwitch: PropTypes.func,
};
export default SwitchButton;
