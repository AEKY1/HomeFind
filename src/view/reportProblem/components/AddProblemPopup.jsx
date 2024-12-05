import React from "react";

const AddProblemPopup = ({ onClose }) => {
  return (
    <div className="fixed z-30 inset-0 bg-black backdrop-sm bg-opacity-30 flex justify-center items-center">
      <div className="bg-white rounded-md w-[516px] px-[20px] py-[30px] flex flex-col items-center text-[#4B5563] ">
        <p className="text-[14px]">
          ແຈ້ງບັນຫາ <span className="text-red-600">!</span>
        </p>
        <div className="w-full text-[12px] mt-[16px] ">
          ຫົວຂໍ້
          <input
            type="text"
            className="w-full rounded-[4px] border-2 pl-[8px] py-[6px] mt-[5px] mb-[16px] "
            placeholder="ເພີ່ມຫົວຂໍ້"
          />
          ລາຍລະອຽດ
          <textarea
            type="text"
            className="w-full rounded-[4px] border-2 pl-[8px] h-[124px] mt-[5px] "
            placeholder="ຂໍ້ຄວມ...."
          ></textarea>
          <div className="flex justify-center gap-6 mt-[50px] ">
            <button
              onClick={onClose}
              className="border-2 border-[#9CA3AF] w-[160px] h-[30px] text-[#9CA3AF] rounded-md "
            >
              ຍົກເລີກ
            </button>
            <button className="border-2 border-[#00B8D1] w-[160px] h-[30px] text-white bg-[#00B8D1] rounded-md ">
              ບັນທືກ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProblemPopup;
