import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { SearchInput } from "../../components/SearchInput";
import { Link, useLocation } from "react-router-dom";
import { BtEdit } from "../../components/BtEdit";
import { BtDelete } from "../../components/BtDelete";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { Switch } from "../../components/Switch";
import { TagBarActive } from "../../components/TagBarActive";
import { CardOne } from "./components/CardOne";

export const LeaseRoom = () => {
  const [color, setColor] = useState("#FBBF24");
  const [backgroud, setBackgroud] = useState("#FEF3C7");
  const [borderColor, setBorderColor] = useState("#FBBF24");

  function changeColor(state) {
    if (state == true) {
      setColor("#22C55E");
      setBackgroud("#BBF7D0");
      setBorderColor("#4ADE80");
    } else {
      setColor("#FBBF24");
      setBackgroud("#FEF3C7");
      setBorderColor("#FBBF24");
    }
  }
  return (
    <div>
      <Sidebar>
        <div className="m-[50px] ml-[120px]">
          <div className="text-[#9CA3AF] text-[14px] flex ">
            <div>
              <TagBarActive
                name="ຫ້ອງທັງໝົດ"
                isActive={false}
                path="/manageRoom"
              />
            </div>
            <div>
              <TagBarActive
                name="ປ່ອຍເຊົ່າ"
                isActive={true}
                path="/manageRoom/showLeaseRoom"
              />
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
          <div className="mt-[20px] ">
            <SearchInput name="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ສະຖານະ" />
          </div>
          <p className="text-[#4B5563] text-[12px] mt-[20px] ">
            ທັງໝົດ 10 ຫ້ອງ
          </p>
          <div className="grid gap-y-3 grid-cols-3 text-[12px] text-[#6B7280] mt-[10px] ">
            <div className="w-[330px] h-[358px] bg-white rounded-md p-[20px] border ">
              <CardOne />
            </div>
            <div className="w-[330px] h-[358px] bg-white rounded-md p-[20px] border ">
              <div className="w-[290px] h-[132px] bg-[#D9D9D9] rounded-[4px] "></div>
              <div className="flex justify-between items-center mt-[6px]">
                <div className="flex gap-2 items-center font-semibold text-[#374151]">
                  <p>ເລກຫ້ອງ</p>
                  <p>A03</p>
                </div>
                <div
                  className={`text-[${color}] border border-[${borderColor}] bg-[${backgroud}] w-[64px] h-[22px] rounded-[18px] flex justify-center items-center  `}
                >
                  ເຕັມ
                </div>
              </div>
              <p className="mt-[10px]">ຊື່ທີ່ພັກ : ອາພາດເມັ້ນສີບຸນເຮືອງ</p>
              <p className="mt-[10px]">
                ຄ່າເຊົ່າລາຍເດືອນ : 1,000,000 ກີບ/ເດືອນ
              </p>
              <p className="mt-[10px]">
                ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ
              </p>
              <div className="flex justify-between items-center mt-[15px]">
                <p>ວັນທີ່ສ້າງ : 20/10/2024</p>
                <div
                  className={`text-[${color}] border border-[${borderColor}] bg-[${backgroud}] w-[64px] h-[22px] rounded-[18px] flex justify-center items-center  `}
                >
                  ກຳລັງຖືກຈອງ
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
                      changeColor(value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[358px] bg-white rounded-md p-[20px] border ">
              <div className="w-[290px] h-[132px] bg-[#D9D9D9] rounded-[4px] "></div>
              <div className="flex justify-between items-center mt-[6px]">
                <div className="flex gap-2 items-center font-semibold text-[#374151]">
                  <p>ເລກຫ້ອງ</p>
                  <p>A01</p>
                </div>
                <div
                  className={`text-[${color}] border border-[${borderColor}] bg-[${backgroud}] w-[64px] h-[22px] rounded-[18px] flex justify-center items-center `}
                >
                  ຫວ່າງ
                </div>
              </div>
              <p className="mt-[10px]">ຊື່ທີ່ພັກ : ອາພາດເມັ້ນສີບຸນເຮືອງ</p>
              <p className="mt-[10px]">
                ຄ່າເຊົ່າລາຍເດືອນ : 1,000,000 ກີບ/ເດືອນ
              </p>
              <p className="mt-[10px]">
                ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ
              </p>
              <div className="flex justify-between items-center mt-[15px]">
                <p>ວັນທີ່ສ້າງ : 20/10/2024</p>
                <div
                  className={`text-[${color}] border border-[${borderColor}] bg-[${backgroud}] w-[64px] h-[22px] rounded-[18px] flex justify-center items-center `}
                >
                  ຖືກປ່ອຍເຊົ່າ
                </div>
              </div>
              <div className="flex justify-between items-center mt-[10px]">
                <div className="flex items-center gap-1 ">
                  <BtEdit />
                  <BtDelete />
                </div>
                <div className="flex items-center gap-1 ">
                  <p className="text-[#374151]">ປ່ອຍເຊົ່າ</p>
                  <Switch
                    onSwitch={(value) => {
                      changeColor(value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
