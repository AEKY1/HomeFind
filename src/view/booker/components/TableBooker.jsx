import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BtEdit } from "../../../components/BtEdit";
import { BtDelete } from "../../../components/BtDelete";

export const TableBooker = () => {
  return (
    <div>
      <div className="w-[100%] h-[480px] bg-white mt-[15px] rounded-[8px] p-[10px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)]">
        <table className="w-[100%] text-[#4B5563]">
          <thead>
            <tr className="bg-[#E5E7EB]  h-[36px] text-[14px] text-center ">
              <th>ລຳຕັບ</th>
              <th>ໂປຣໄຟລ໌</th>
              <th>ຊື່ ແລະ ນາມສະກຸນ</th>
              <th>ເບີໂທ</th>
              <th>ອີເມວ</th>
              <th>ເລກບັດປະຈຳຕົວ</th>
              <th>ເລກຫ້ອງ</th>
              <th>ສະຖານະ</th>
              <th>ວັນທີ່ເຂົ້າພັກ</th>
              <th>ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-[12px] border-b-2">
              <td>1</td>
              <td className=" py-[20px]">
                <div className="w-full flex justify-center">
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] "></div>
                </div>
              </td>
              <td>ນາງ ມະນີ ແສງຈັນ</td>
              <td>020 55555555</td>
              <td>many@gmail.com</td>
              <td>000-11111111</td>
              <td>A01</td>
              <td>
                <button className="bg-[#DCFCE7] border border-[#4ADE80] w-[68px] h-[24px] rounded-[20px] text-[#4ADE80] ">
                  ກຳລັງເຊົ່າ
                </button>
              </td>
              <td>01-10-2024</td>
              <td>
                <div className="flex justify-center items-center w-full gap-2">
                  <Link to="/booker/detail">
                    <BtEdit />
                  </Link>

                  <BtDelete />
                </div>
              </td>
            </tr>
            <tr className="text-center text-[12px] border-b-2">
              <td>2</td>
              <td className=" py-[20px]">
                <div className="w-full flex justify-center">
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] "></div>
                </div>
              </td>
              <td>ນາງ ມະນີ ແສງຈັນ</td>
              <td>020 55555555</td>
              <td>many@gmail.com</td>
              <td>000-11111111</td>
              <td>A01</td>
              <td>
                <button className="bg-[#DCFCE7] border border-[#4ADE80] w-[68px] h-[24px] rounded-[20px] text-[#4ADE80] ">
                  ກຳລັງເຊົ່າ
                </button>
              </td>
              <td>01-10-2024</td>
              <td>
                <div className="flex justify-center items-center w-full gap-2">
                  <Link to="/booker/detail">
                    <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                  </Link>

                  <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
                </div>
              </td>
            </tr>
            <tr className="text-center text-[12px] border-b-2">
              <td>3</td>
              <td className=" py-[20px]">
                <div className="w-full flex justify-center">
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] "></div>
                </div>
              </td>
              <td>ນາງ ມະນີ ແສງຈັນ</td>
              <td>020 55555555</td>
              <td>many@gmail.com</td>
              <td>000-11111111</td>
              <td>A01</td>
              <td>
                <button className="bg-[#DCFCE7] border border-[#4ADE80] w-[68px] h-[24px] rounded-[20px] text-[#4ADE80] ">
                  ກຳລັງເຊົ່າ
                </button>
              </td>
              <td>01-10-2024</td>
              <td>
                <div className="flex justify-center items-center w-full gap-2">
                  <Link to="/booker/detail">
                    <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                  </Link>

                  <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
                </div>
              </td>
            </tr>
            <tr className="text-center text-[12px] border-b-2">
              <td>4</td>
              <td className=" py-[20px]">
                <div className="w-full flex justify-center">
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#D9D9D9] "></div>
                </div>
              </td>
              <td>ນາງ ມະນີ ແສງຈັນ</td>
              <td>020 55555555</td>
              <td>many@gmail.com</td>
              <td>000-11111111</td>
              <td>A01</td>
              <td>
                <button className="bg-[#FECACA] border border-[#F87171] w-[68px] h-[24px] rounded-[20px] text-[#F87171]">
                  ກຳລັງເຊົ່າ
                </button>
              </td>
              <td>01-10-2024</td>
              <td>
                <div className="flex justify-center items-center w-full gap-2">
                  <Link to="/booker/detail">
                    <BtEdit name="ແກ້ໄຂ" icon={<LuPencil />} />
                  </Link>

                  <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
