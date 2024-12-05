import React from "react";
import { IoMdCloudUpload } from "react-icons/io";

export const BtUpLoad = () => {
  return (
    <div>
      <button className="px-[20px] py-[4px] gap-1 flex justify-center items-center border border-[#00B8D1] rounded-[8px] ">
        <IoMdCloudUpload className="text-[20px]" />
        ອັບໂຫຼດ
      </button>
    </div>
  );
};
