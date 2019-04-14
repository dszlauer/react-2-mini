import React from "react";

// Stateless functions that do not have class should not have 'this".props, props should be passed into function parameter.
export default function ColorChanger(props) {
  return (
    <select
      className="dropDownContainer"
      onChange={e => props.update(e.target.value)}
      disabled={props.allowEdit === "false"}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  );
}
