import React from "react";

export const SearchInput = ({ name }) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder={name}
          className="w-[400px] h-[40px] border border-[#00B8D1] rounded-[18px] mr-[10px] pl-[40px] pt-[5px] focus:outline-none flex items-center "
        />
        <button className="w-[80px] h-[40px] bg-[#00B8D1] rounded-[18px] text-white text-[14px] ">
          ຄົ້ນຫາ
        </button>
      </div>
    </div>
  );
};
