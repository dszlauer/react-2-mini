import React from "react";

// Stateless functions that do not have class should not have 'this".props, props should be passed into function parameter.
export default function EditToggle(props) {
  return (
    <select
      className="dropDownContainer ml0"
      onChange={e => props.update(e.target.value)}>
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  );
}
