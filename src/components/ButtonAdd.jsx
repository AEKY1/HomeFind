import React from "react";

export const ButtonAdd = ({ name }) => {
  return (
    <div>
      <div className="flex items-center">
        <button className="w-[114px] h-[40px] bg-[#00B8D1] rounded-[18px] text-white text-[14px] ">
          <span className="text-[20px] mr-[7px]">+</span> {name}
        </button>
      </div>
    </div>
  );
};
