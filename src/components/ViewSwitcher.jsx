import React, { useState } from "react";
import { GiButtonFinger } from "react-icons/gi";

export const ViewSwitcher = ({
  options = [],
  defaultValue = null,
  onChange = () => {},
}) => {
  const [selected, setSelected] = useState(
    defaultValue || (options.length > 0 ? options[0].value : null)
  );
  const handleChange = (value) => {
    setSelected(value);
    onChange(value);
  };
  console.log(options);
  return (
    <div className="flex gap-2 lg:gap-4">
      {options.map((item, index) => {
        if (selected === item.value) {
          return (
            <button
              key={index}
              onClick={() => handleChange(item.value)}
              className="h-[30px] px-[8px] text-[#00b8d1] border-b-[2px] border-[#00b8d1]  "
            >
              {item.label}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              onClick={() => handleChange(item.value)}
              className="h-[30px] px-[8px] border-b-[2px] hover:text-[#00b8d1] hover:border-[#00b8d1]"
            >
              {item.label}
            </button>
          );
        }
      })}
    </div>
  );
};
export default ViewSwitcher;
