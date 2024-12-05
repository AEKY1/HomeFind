import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { BtEdit } from "../../../components/BtEdit";
import { BtDelete } from "../../../components/BtDelete";

export const ListRoom = () => {
  return (
    <div>
      <div className="mt-[10px] w-[85%]">
        <div className="grid gap-y-3 grid-cols-3 text-[14px]  ">
          <div className="w-[280px] h-[270px] bg-white rounded-md p-[20px] font-semibold border ">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#4B5563] ">ເລກຫ້ອງ : A01</p>
              <button className="text-[12px] w-[70px] h-[24px] bg-[#FEE2E2] border border-[#F87171] text-[#F87171] rounded-[4px] ">
                ເຕັມ
              </button>
            </div>
            <p className="text-[#9CA3AF] text-[12px] font-normal mt-[5px] ">
              ວັນທີ່ສ້າງ :​ 01-10-2024
            </p>
            <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[4px] "></div>
            <div className="flex items-center mt-[10px]">
              <div className="w-[40%]">
                <p>ຄ່າເຊົ່າ :</p>
              </div>
              <div className="w-[60%]">
                <p>1,000,000 ກີບ</p>
              </div>
            </div>
            <div className="flex items-center mt-[12px]">
              <div className="w-[40%]">
                <p>ຊັ້ນ :</p>
              </div>
              <div className="w-[60%]">
                <p>2</p>
              </div>
            </div>
            <div className="flex items-start mt-[12px]">
              <div className="w-[40%]">
                <p>ລາຍລະອຽດ :</p>
              </div>
              <div className="w-[60%]">
                <p className="text-[12px] font-normal ">
                  ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#E5E7EB] mt-[30px]"></div>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex items-center gap-1 font-normal">
                <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
              </div>
              <div>
                <button className="bg-[#D1D5DB] text-[10px] w-[78px] h-[24px] rounded-[18px] text-white ">
                  ປີດການໃຊ້ງານ
                </button>
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[270px] bg-white rounded-md p-[20px] font-semibold border ">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#4B5563] ">ເລກຫ້ອງ : A01</p>
              <button className="text-[12px] w-[70px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] text-[#4ADE80] rounded-[4px] ">
                ຫວ່າງ
              </button>
            </div>
            <p className="text-[#9CA3AF] text-[12px] font-normal mt-[5px] ">
              ວັນທີ່ສ້າງ :​ 01-10-2024
            </p>
            <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[4px] "></div>
            <div className="flex items-center mt-[10px]">
              <div className="w-[40%]">
                <p>ຄ່າເຊົ່າ :</p>
              </div>
              <div className="w-[60%]">
                <p>1,000,000 ກີບ</p>
              </div>
            </div>
            <div className="flex items-center mt-[12px]">
              <div className="w-[40%]">
                <p>ຊັ້ນ :</p>
              </div>
              <div className="w-[60%]">
                <p>2</p>
              </div>
            </div>
            <div className="flex items-start mt-[12px]">
              <div className="w-[40%]">
                <p>ລາຍລະອຽດ :</p>
              </div>
              <div className="w-[60%]">
                <p className="text-[12px] font-normal ">
                  ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#E5E7EB] mt-[30px]"></div>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex items-center gap-1 font-normal">
                <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
              </div>
              <div>
                <button className="text-white bg-[#4ADE80] text-[10px] w-[78px] h-[24px] rounded-[18px] ">
                  ເປີດການໃຊ້ງານ
                </button>
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[270px] bg-white rounded-md p-[20px] font-semibold border ">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#4B5563] ">ເລກຫ້ອງ : A01</p>
              <button className="text-[12px] w-[70px] h-[24px] bg-[#FEE2E2] border border-[#F87171] text-[#F87171] rounded-[4px] ">
                ເຕັມ
              </button>
            </div>
            <p className="text-[#9CA3AF] text-[12px] font-normal mt-[5px] ">
              ວັນທີ່ສ້າງ :​ 01-10-2024
            </p>
            <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[4px] "></div>
            <div className="flex items-center mt-[10px]">
              <div className="w-[40%]">
                <p>ຄ່າເຊົ່າ :</p>
              </div>
              <div className="w-[60%]">
                <p>1,000,000 ກີບ</p>
              </div>
            </div>
            <div className="flex items-center mt-[12px]">
              <div className="w-[40%]">
                <p>ຊັ້ນ :</p>
              </div>
              <div className="w-[60%]">
                <p>2</p>
              </div>
            </div>
            <div className="flex items-start mt-[12px]">
              <div className="w-[40%]">
                <p>ລາຍລະອຽດ :</p>
              </div>
              <div className="w-[60%]">
                <p className="text-[12px] font-normal ">
                  ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#E5E7EB] mt-[30px]"></div>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex items-center gap-1 font-normal">
                <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
              </div>
              <div>
                <button className="bg-[#D1D5DB] text-[10px] w-[78px] h-[24px] rounded-[18px] text-white ">
                  ປີດການໃຊ້ງານ
                </button>
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[270px] bg-white rounded-md p-[20px] font-semibold border ">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#4B5563] ">ເລກຫ້ອງ : A01</p>
              <button className="text-[12px] w-[70px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] text-[#4ADE80] rounded-[4px] ">
                ເຕັມ
              </button>
            </div>
            <p className="text-[#9CA3AF] text-[12px] font-normal mt-[5px] ">
              ວັນທີ່ສ້າງ :​ 01-10-2024
            </p>
            <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[4px] "></div>
            <div className="flex items-center mt-[10px]">
              <div className="w-[40%]">
                <p>ຄ່າເຊົ່າ :</p>
              </div>
              <div className="w-[60%]">
                <p>1,000,000 ກີບ</p>
              </div>
            </div>
            <div className="flex items-center mt-[12px]">
              <div className="w-[40%]">
                <p>ຊັ້ນ :</p>
              </div>
              <div className="w-[60%]">
                <p>2</p>
              </div>
            </div>
            <div className="flex items-start mt-[12px]">
              <div className="w-[40%]">
                <p>ລາຍລະອຽດ :</p>
              </div>
              <div className="w-[60%]">
                <p className="text-[12px] font-normal ">
                  ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#E5E7EB] mt-[30px]"></div>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex items-center gap-1 font-normal">
                <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
              </div>
              <div>
                <button className="bg-[#4ADE80] text-[10px] w-[78px] h-[24px] rounded-[18px] text-white ">
                  ເປີດການໃຊ້ງານ
                </button>
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[270px] bg-white rounded-md p-[20px] font-semibold border ">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#4B5563] ">ເລກຫ້ອງ : A01</p>
              <button className="text-[12px] w-[70px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] text-[#4ADE80] rounded-[4px] ">
                ເຕັມ
              </button>
            </div>
            <p className="text-[#9CA3AF] text-[12px] font-normal mt-[5px] ">
              ວັນທີ່ສ້າງ :​ 01-10-2024
            </p>
            <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[4px] "></div>
            <div className="flex items-center mt-[10px]">
              <div className="w-[40%]">
                <p>ຄ່າເຊົ່າ :</p>
              </div>
              <div className="w-[60%]">
                <p>1,000,000 ກີບ</p>
              </div>
            </div>
            <div className="flex items-center mt-[12px]">
              <div className="w-[40%]">
                <p>ຊັ້ນ :</p>
              </div>
              <div className="w-[60%]">
                <p>2</p>
              </div>
            </div>
            <div className="flex items-start mt-[12px]">
              <div className="w-[40%]">
                <p>ລາຍລະອຽດ :</p>
              </div>
              <div className="w-[60%]">
                <p className="text-[12px] font-normal ">
                  ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#E5E7EB] mt-[30px]"></div>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex items-center gap-1 font-normal">
                <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
              </div>
              <div>
                <button className="bg-[#4ADE80] text-[10px] w-[78px] h-[24px] rounded-[18px] text-white ">
                  ເປີດການໃຊ້ງານ
                </button>
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[270px] bg-white rounded-md p-[20px] font-semibold border ">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#4B5563] ">ເລກຫ້ອງ : A01</p>
              <button className="text-[12px] w-[70px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] text-[#4ADE80] rounded-[4px] ">
                ເຕັມ
              </button>
            </div>
            <p className="text-[#9CA3AF] text-[12px] font-normal mt-[5px] ">
              ວັນທີ່ສ້າງ :​ 01-10-2024
            </p>
            <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[4px] "></div>
            <div className="flex items-center mt-[10px]">
              <div className="w-[40%]">
                <p>ຄ່າເຊົ່າ :</p>
              </div>
              <div className="w-[60%]">
                <p>1,000,000 ກີບ</p>
              </div>
            </div>
            <div className="flex items-center mt-[12px]">
              <div className="w-[40%]">
                <p>ຊັ້ນ :</p>
              </div>
              <div className="w-[60%]">
                <p>2</p>
              </div>
            </div>
            <div className="flex items-start mt-[12px]">
              <div className="w-[40%]">
                <p>ລາຍລະອຽດ :</p>
              </div>
              <div className="w-[60%]">
                <p className="text-[12px] font-normal ">
                  ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#E5E7EB] mt-[30px]"></div>
            <div className="mt-[10px] flex justify-between items-center">
              <div className="flex items-center gap-1 font-normal">
                <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
              </div>
              <div>
                <button className="bg-[#4ADE80] text-[10px] w-[78px] h-[24px] rounded-[18px] text-white ">
                  ເປີດການໃຊ້ງານ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
