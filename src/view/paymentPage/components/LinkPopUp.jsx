import React from "react";
import { FaCaretDown, FaTrash } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { BtUpLoad } from "../../../components/BtUpLoad";
import { InputPic } from "../../../components/InputPic";

const LinkPopUp = ({ onClose }) => {
  return (
    <div className="fixed z-30 inset-0 bg-black backdrop-sm bg-opacity-30 flex justify-center items-center">
      <div className="bg-white w-[526px] rounded-md text-[#4B5563] p-[30px] flex flex-col items-center text-[12px] ">
        <p className="text-[14px] font-semibold">ການສ້າງລີ້ງຮຽກເກັບເງີນ</p>
        <div className="w-full bg-[#F3F4F6] flex justify-center py-[6px] rounded-[4px] mt-[12px]  ">
          ລີ້ງ : https://claude.ai/chat/65da426d-7f6d-450f-805a-ceb7a7977854
        </div>
        <div className="w-full mt-[16px]">
          ຫົວຂໍ້
          <input
            type="text"
            className="w-full h-[34px] rounded-[4px] pl-[10px] border-2 "
            placeholder="ເພີ່ມຫົວຂໍ້"
          />
        </div>
        <div className="w-full mt-[12px]">
          ກຳນົດວັນສົ່ງ
          <div className="relative">
            <input
              type="text"
              className="w-full h-[34px] rounded-[4px] pl-[10px] border-2 "
              placeholder="ເລືອກວັນທີ່ສົ່ງ"
            />
            <div className="absolute top-[8px] right-2 text-[18px]">
              <MdDateRange />
            </div>
          </div>
        </div>
        <div className="mt-[10px] w-full">
          <p>
            ເພີ່ມ QR Code{" "}
            <span className="text-[#9CA3AF]">(ສຳລັບຊຳລະເງີນ)</span>
          </p>
          <div className="mt-[10px] ">
            <BtUpLoad />
          </div>
          <div className="mt-[10px]  ">
            <div className="flex justify-between items-center w-full h-[64px] border border-[#D1D5DB] rounded-[4px]">
              <div className="w-[48px] h-[48px] bg-[#D9D9D9] ml-[10px] "></div>
              <div className="mr-[30px]">
                <button className="border w-[23px] h-[24px] border-[#D1D5DB] text-[#D1D5DB] flex justify-center items-center ">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[12px]">
          ເລືອກຫ້ອງ
          <div className="relative">
            <input
              type="text"
              className="w-full h-[34px] rounded-[4px] pl-[10px] border-2 "
              placeholder="ກະລຸນາເລືອກຫ້ອງທີ່ຕ້ອງການສົ່ງລີ້ງນີ້ເຖີງ"
            />
            <div className="absolute top-2 right-2 text-[18px]">
              <FaCaretDown />
            </div>
          </div>
        </div>
        <div className="w-full mt-[12px]">
          ລາຍລະອຽດ
          <textarea
            className="w-full h-[136px] rounded-[4px] pl-[10px] border-2 "
            name=""
            id=""
          ></textarea>
        </div>
        <div className="w-full flex justify-center gap-5 mt-[26px]">
          <button
            onClick={onClose}
            className="w-[160px] h-[30px] border-2 border-[#9CA3AF] rounded-md text-[#9CA3AF] "
          >
            ກັບຄືນ
          </button>
          <button className="w-[160px] h-[30px] border-2 border-[#00B8D1] rounded-md text-white bg-[#00B8D1] ">
            ຢືນຢັນການສ້າງ
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkPopUp;
