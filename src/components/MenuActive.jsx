import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export const MenuActive = ({ name, icon, isActive, path }) => {
  return (
    <div>
      {isActive === true && (
        <Link to={path}>
          <div className="text-[16px] bg-white text-black flex items-center pl-[20px] h-[40px] w-[200px]  mt-[10px] rounded-[20px] gap-2">
            <span className="text-[20px]">{icon}</span>
            {name}
          </div>
        </Link>
      )}
      {isActive === false && (
        <Link to={path}>
          <div className="text-[18px] flex items-center pl-[20px] h-[40px] w-[200px]  mt-[10px] rounded-[20px] hover:bg-[#1e667e] gap-2">
            <span className="text-[20px]">{icon}</span>
            {name}
          </div>
        </Link>
      )}
    </div>
  );
};
// className="flex items-center h-[40px] w-[200px]  mt-[50px] rounded-[20px]"
