import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export const BtDelete = ({ name, icon }) => {
  return (
    <div>
      <button className="bg-[#F87171] w-[68px] h-[24px] rounded-[20px] text-[#ffffff] ">
        <div className="flex items-center justify-center gap-1">
          <FaRegTrashAlt />
          ລົບ
        </div>
      </button>
    </div>
  );
};
