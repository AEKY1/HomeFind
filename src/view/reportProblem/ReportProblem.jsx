import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { TagBarActive } from "../../components/TagBarActive";
import { ButtonAdd } from "../../components/ButtonAdd";
import { BtEdit } from "../../components/BtEdit";
import { BtDelete } from "../../components/BtDelete";
import AddProblemPopup from "./components/AddProblemPopup";

const ReportProblem = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <Sidebar>
        <div className="px-[30px] pt-[40px] text-[#4B5563] ">
          <div className="flex">
            <TagBarActive
              name="ການແຈ້ງບັນຫາ"
              path={"/reportProblem"}
              isActive={true}
            />
            <TagBarActive
              name="ປະຫວັດການແຈ້ງບັນຫາທັງໝົດ"
              path={"/reportProblem/history"}
              isActive={false}
            />
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
          <div className="flex justify-between my-[26px] ">
            <p className="text-[12px]">ບັນຫາທັງໝົດ 3 ລາຍການ</p>
            <button onClick={() => setShowPopUp(true)}>
              <ButtonAdd name="ແຈ້ງບັນຫາ" />
            </button>
          </div>
          <div className="bg-white p-[10px] h-[370px] ">
            <table className="text-center w-full">
              <thead className="text-[14px] bg-[#E5E7EB]">
                <tr>
                  <th className="py-[6px]">ລຳດັບ</th>
                  <th>ຫົວຂໍ້</th>
                  <th>ລາຍລະອຽດ</th>
                  <th>ສະຖານະ</th>
                  <th>ອັບເດດສະຖານະ</th>
                  <th>ວັນທີ່ສ້າງ</th>
                  <th>ຈັດການ</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                <tr className="border-b-2">
                  <td className="py-[16px]">1</td>
                  <td>ດອກໄຟທາງຍາງຊັ້ນ 2 ບໍ່ຮຸ່ງ</td>
                  <td>ດອກໄຟບໍ່ຮຸ່ງ 3 ດອກຕັ້ງແຕ່ຫົວຂັ້ນໄດ້ຂື້ນໄປ</td>
                  <td>ລໍຖ້າການແກ້ໄຂ</td>
                  <td>
                    <button className="bg-[#4ADE80] px-[8px] py-[2px] rounded-[20px] text-white ">
                      ສຳເລັດການແກ້ໄຂ
                    </button>
                  </td>
                  <td>01-10-2024</td>
                  <td>
                    <div className="w-full flex gap-2 justify-center items-center">
                      <BtEdit />
                      <BtDelete />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
      {showPopUp && <AddProblemPopup onClose={() => setShowPopUp(false)} />}
    </>
  );
};

export default ReportProblem;
