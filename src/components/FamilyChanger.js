import React from "react";

// Stateless functions that do not have class should not have 'this".props, props should be passed into function parameter.
export default function FamilyChanger(props) {
  return (
    <select
      className="dropDownContainer"
      onChange={e => props.update(e.target.value)}
      disabled={props.allowEdit === "false"}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  );
}
