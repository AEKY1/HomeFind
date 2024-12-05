import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { FaKipSign } from "react-icons/fa6";
import { SearchInput } from "../../components/SearchInput";
import { Link } from "react-router-dom";
import TagBarPayment from "./components/TagBarPayment";

export const CheckPayment = () => {
  return (
    <div>
      <Sidebar>
        <TagBarPayment>
          <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
          <div className="mt-[30px] flex gap-5 ">
            <div className="text-[14px] text-[#4B5563] w-[260px] h-[90px] bg-[#BFDBFE] flex flex-col justify-center items-center gap-4 rounded-[8px] ">
              <p>ລວມທີ່ຕ້ອງຊຳລະໄດ້ທັງໝົດ</p>
              <p className="flex items-center text-[16px] ">
                <span>
                  <FaKipSign />
                </span>
                5,000,000
              </p>
            </div>
            <div className="text-[#4B5563] text-[14px] w-[260px] h-[90px] bg-[#BBF7D0] flex flex-col justify-center items-center gap-4 rounded-[8px] ">
              <p>ຊຳລະແລ້ວ</p>
              <p className="flex items-center text-[16px] ">
                <span>
                  <FaKipSign />
                </span>
                2,000,000
              </p>
            </div>
            <div className="text-[#4B5563] text-[14px] w-[260px] h-[90px] bg-[#FECACA] flex flex-col justify-center items-center gap-4 rounded-[8px] ">
              <p>ໜີ້ຄ້າງຈ່າຍທັງໝົດ</p>
              <p className="flex items-center text-[16px] ">
                <span>
                  <FaKipSign />
                </span>
                3,000,000
              </p>
            </div>
          </div>
          <div className="bg-white mt-[30px] w-full h-full p-[20px] pb-[40px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)] rounded-[8px] text-[#4B5563]">
            <div className="flex justify-between items-center ">
              <SearchInput name="ຄົ້ນຫາເລກຫ້ອງ, ຊື່, ນາມສະກຸນ, ເບີໂທ, ອີເມວ..." />
              <p className="text-[14px]">
                ການຊຳລະເງີນປະຈຳວັນທີ່ 30 ເດືອນ ຕຸລາ (10) ປີ 2024
              </p>
            </div>
            <div className="mt-[30px]">
              <div className="h-[34px] w-full text-[14px] font-semibold bg-[#E5E7EB] flex justify-center items-center ">
                <p>ຫ້ອງທີ່ຕ້ອງຊຳລະທັງໝົດ (10) ຫ້ອງ</p>
              </div>
              <table className="w-full text-[12px] font-normal text-center ">
                <thead>
                  <tr className="border-b-2">
                    <th className="py-[10px]">ລຳດັບ</th>
                    <th>ເລກຫ້ອງ</th>
                    <th>ຊັ້ນ</th>
                    <th>ຄ່າເຊົ່າ</th>
                    <th>ຜູ້ເຊົ່າ</th>
                    <th>ເບີໂທ</th>
                    <th>ວັນທີ່ເຂົ້າພັກ</th>
                    <th>ສະຖານະ</th>
                    <th>ລາຍລະອຽດ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2">
                    <td>1</td>
                    <td>A01</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td>020 55555555</td>
                    <td>01-10-2024</td>
                    <td className="text-[#4ADE80] py-[14px] ">ຊຳລະແລ້ວ</td>
                    <td>
                      <div className="w-full flex justify-center">
                        <button className="border border-[#4ADE80] text-[#4ADE80] w-[88px] h-[28px] rounded-[12px] ">
                          ລາຍລະອຽດ
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-2">
                    <td>2</td>
                    <td>A02</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td>020 55555555</td>
                    <td>01-10-2024</td>
                    <td className="text-[#4ADE80] py-[14px]  ">ຊຳລະແລ້ວ</td>
                    <td>
                      <div className="w-full flex justify-center">
                        <button className="border border-[#4ADE80] text-[#4ADE80] w-[88px] h-[28px] rounded-[12px] ">
                          ລາຍລະອຽດ
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-2">
                    <td>3</td>
                    <td>A03</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td>020 55555555</td>
                    <td>01-10-2024</td>
                    <td className="text-[#F87171] py-[14px]  ">
                      ຍັງບໍ່ທັນຊຳລະ
                    </td>
                    <td>
                      <div className="w-full flex justify-center">
                        <button className="border border-[#4ADE80] text-[#4ADE80] w-[88px] h-[28px] rounded-[12px] ">
                          ລາຍລະອຽດ
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-2">
                    <td>4</td>
                    <td>A04</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td>020 55555555</td>
                    <td>01-10-2024</td>
                    <td className="text-[#F87171] py-[14px] ">ຍັງບໍ່ທັນຊຳລະ</td>
                    <td>
                      <div className="w-full flex justify-center">
                        <button className="border border-[#4ADE80] text-[#4ADE80] w-[88px] h-[28px] rounded-[12px] ">
                          ລາຍລະອຽດ
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-2">
                    <td>5</td>
                    <td>A05</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td>020 55555555</td>
                    <td>01-10-2024</td>
                    <td className="text-[#F87171] py-[14px] ">ຍັງບໍ່ທັນຊຳລະ</td>
                    <td>
                      <div className="w-full flex justify-center">
                        <button className="border border-[#4ADE80] text-[#4ADE80] w-[88px] h-[28px] rounded-[12px] ">
                          ລາຍລະອຽດ
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TagBarPayment>
      </Sidebar>
    </div>
  );
};
