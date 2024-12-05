import React from "react";
import { FaBell } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";

export const Navbar = () => {
  return (
    <div>
      <div className="w-[100%] h-[50px] bg-white drop-shadow-lg flex justify-end">
        <div className="h-[50px]  flex justify-center items-center ">
          <div className="m-[20px]">
            <FaBell className="h-[25px] w-[25px] text-[#00B8D1] " />
          </div>
          <div className="m-[20px]">
            <MdOutlineLogout className="h-[25px] w-[25px]  " />
          </div>
        </div>
      </div>
    </div>
  );
};
