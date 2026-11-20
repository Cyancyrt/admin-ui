import React from "react";

function CheckBox(props) {
  const { label, id, ...rest } = props;
  return (
    <>
      <input
        type={rest.type || "checkbox"}
        className="text-sm accent-primary"
        name={rest.name || "status"}
        id={id}
      />
      <label htmlFor={id} className="text-sm text-gray-01 ml-6">
        {label || "Keep me signed in"}
      </label>
    </>
  );
}

export default CheckBox;
