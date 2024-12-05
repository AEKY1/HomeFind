import React from "react";
import { LuPencil } from "react-icons/lu";

export const BtEdit = () => {
  return (
    <div>
      <button className="bg-[#00B8D1] w-[68px] h-[24px] rounded-[20px] text-[#ffffff] ">
        <div className="flex items-center justify-center gap-1">
          <LuPencil />
          ແກ້ໄຂ
        </div>
      </button>
    </div>
  );
};
