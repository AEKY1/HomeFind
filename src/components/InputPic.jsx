import React from "react";
import { FaTrash } from "react-icons/fa6";

export const InputPic = () => {
  return (
    <div className="flex justify-between items-center w-[545px] h-[64px] border border-[#D1D5DB] rounded-[4px]">
      <div className="w-[48px] h-[48px] bg-[#D9D9D9] ml-[10px] "></div>
      <div className="mr-[30px]">
        <button className="border w-[23px] h-[24px] border-[#D1D5DB] text-[#D1D5DB] flex justify-center items-center ">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
