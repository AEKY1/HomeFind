import React, { useState } from "react";
import { Switch } from "../../../components/Switch";
import { BtDelete } from "../../../components/BtDelete";
import { BtEdit } from "../../../components/BtEdit";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

export const CardOne = () => {
  const [Value, setValue] = useState(false);
  function checkStaus(staus) {
    setValue(staus);
  }

  return (
    <div>
      <div className="w-[290px] h-[132px] bg-[#D9D9D9] rounded-[4px] "></div>
      <div className="flex justify-between items-center mt-[6px]">
        <div className="flex gap-2 items-center font-semibold text-[#374151]">
          <p>ເລກຫ້ອງ</p>
          <p>A03</p>
        </div>
        <div>
          {Value === true && (
            <div className="text-[#22C55E] border border-[#4ADE80] bg-[#BBF7D0] w-[64px] h-[22px] rounded-[18px] flex justify-center items-center ">
              ຫວ່າງ
            </div>
          )}
          {Value === false && (
            <div className="text-[#FBBF24] border border-[#FBBF24] bg-[#FEF3C7] w-[64px] h-[22px] rounded-[18px] flex justify-center items-center ">
              ເຕັມ
            </div>
          )}
        </div>
      </div>
      <p className="mt-[10px]">ຊື່ທີ່ພັກ : ອາພາດເມັ້ນສີບຸນເຮືອງ</p>
      <p className="mt-[10px]">ຄ່າເຊົ່າລາຍເດືອນ : 1,000,000 ກີບ/ເດືອນ</p>
      <p className="mt-[10px]">ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ</p>
      <div className="flex justify-between items-center mt-[15px]">
        <p>ວັນທີ່ສ້າງ : 20/10/2024</p>
        <div>
          {Value === true && (
            <div className="text-[#22C55E] border border-[#4ADE80] bg-[#BBF7D0] w-[64px] h-[22px] rounded-[18px] flex justify-center items-center  ">
              ຖືກປ່ອຍເຊົ່າ
            </div>
          )}
          {Value === false && (
            <div className="text-[#FBBF24] border border-[#FBBF24] bg-[#FEF3C7] w-[64px] h-[22px] rounded-[18px] flex justify-center items-center  ">
              ກຳລັງຖືກຈອງ
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-[10px]">
        <div className="flex items-center gap-1 ">
          <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
          <BtDelete name="ແກ້ໄຂ" icon={<FaRegTrashAlt />} />
        </div>
        <div className="flex items-center gap-1 ">
          <p className="text-[#374151]">ປ່ອຍເຊົ່າ</p>
          <Switch
            onSwitch={(value) => {
              checkStaus(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
