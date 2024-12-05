import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { SearchInput } from "../../components/SearchInput";
import { Link } from "react-router-dom";
import ConfirmPopUp from "./components/ConfirmPopUp";
import { TagBarActive } from "../../components/TagBarActive";
import TagBarPayment from "./components/TagBarPayment";

export const ConfirmPayment = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div>
      <Sidebar>
        <TagBarPayment>
          <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
          <div className="bg-white mt-[30px] w-full h-full p-[20px] pb-[40px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)] rounded-[8px] text-[#4B5563]">
            <div className="flex items-center ">
              <SearchInput name="ຄົ້ນຫາເລກຫ້ອງ, ຊື່, ນາມສະກຸນ, ເບີໂທ, ອີເມວ..." />
            </div>
            <div className="mt-[30px]">
              <div className="h-[34px] w-full text-[14px] font-semibold bg-[#E5E7EB] flex justify-center items-center ">
                <p>
                  ລໍຖ້າອະນຸມັດ ( <span className="text-red-600">2</span> ){" "}
                  <span className="text-red-600">ລາຍການ</span>
                </p>
              </div>
              <table className="w-full text-[12px] font-normal text-center ">
                <thead>
                  <tr className="border-b-2">
                    <th className="py-[10px]">ລຳດັບ</th>
                    <th>ເລກຫ້ອງ</th>
                    <th>ຊັ້ນ</th>
                    <th>ຄ່າເຊົ່າ</th>
                    <th>ປະຈຳເດືອນ</th>
                    <th>ຜູ້ເຊົ່າ</th>
                    <th>ເບີໂທ</th>
                    <th>ວັນທີ່ຊຳລະ</th>
                    <th>ການຊຳລະເງີນ</th>
                    <th>ຈັດການ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2">
                    <td>1</td>
                    <td>A01</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ຕຸລາ (10 ) 2024</td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td>020 55555555</td>
                    <td className="py-[16px] ">30-10-2024</td>
                    <td>
                      <div className="w-full flex justify-center">
                        <div className="w-[102px] h-[42px] rounded-[2px] bg-[#D9D9D9] "></div>
                      </div>
                    </td>
                    <td>
                      <div className="w-full flex justify-center">
                        <button
                          onClick={() => setShowPopUp(true)}
                          className="bg-[#86EFAC] text-white w-[112px] h-[28px] rounded-[12px] "
                        >
                          ອະນຸມັດການຊຳລະ
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b-2">
                    <td>2</td>
                    <td>A02</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ຕຸລາ (10 ) 2024</td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td className="py-[16px] ">020 55555555</td>
                    <td>30-10-2024</td>
                    <td>
                      <div className="w-full flex justify-center">
                        <div className="w-[102px] h-[42px] rounded-[2px] bg-[#D9D9D9] "></div>
                      </div>
                    </td>
                    <td>
                      <div className="w-full flex justify-center">
                        <button className="bg-[#86EFAC] text-white w-[112px] h-[28px] rounded-[12px] ">
                          ອະນຸມັດການຊຳລະ
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
      {showPopUp && <ConfirmPopUp onClose={() => setShowPopUp(false)} />}
    </div>
  );
};
