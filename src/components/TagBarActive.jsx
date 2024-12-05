import React from "react";
import { Link } from "react-router-dom";

export const TagBarActive = ({ name, isActive, path }) => {
  return (
    <div>
      {isActive == true && (
        <Link to={path}>
          <button className="h-[30px] px-[8px] text-[#00b8d1] border-b-[2px] border-[#00b8d1] mr-[15px]  ">
            {name}
          </button>
        </Link>
      )}
      {isActive === false && (
        <Link to={path}>
          <button className="h-[30px] px-[8px] border-b-[2px] hover:text-[#00b8d1] hover:border-[#00b8d1] mr-[15px]">
            {name}
          </button>
        </Link>
      )}
    </div>
  );
};
