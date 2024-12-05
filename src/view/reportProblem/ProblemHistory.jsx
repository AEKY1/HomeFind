import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { TagBarActive } from "../../components/TagBarActive";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const ProblemHistory = () => {
  return (
    <Sidebar>
      <div className="px-[30px] pt-[40px] text-[#4B5563] ">
        <div className="flex">
          <TagBarActive
            name="ການແຈ້ງບັນຫາ"
            path={"/reportProblem"}
            isActive={false}
          />
          <TagBarActive
            name="ປະຫວັດການແຈ້ງບັນຫາທັງໝົດ"
            path={"/reportProblem/history"}
            isActive={true}
          />
        </div>
        <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
        <div className="my-[26px] ">
          <p className="text-[12px]">ບັນຫາທັງໝົດ 3 ລາຍການ</p>
        </div>
        <div className="bg-white p-[10px] h-[370px] ">
          <div className="w-full flex justify-end ">
            <RangePicker />
          </div>
          <table className="text-center w-full mt-[10px] ">
            <thead className="text-[14px] bg-[#E5E7EB]">
              <tr>
                <th className="py-[6px]">ລຳດັບ</th>
                <th>ຫົວຂໍ້</th>
                <th>ລາຍລະອຽດ</th>
                <th>ສະຖານະ</th>
                <th>ວັນທີ່ສ້າງ</th>
                <th>ວັນທີ່ສຳເລັດ</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              <tr className="border-b-2">
                <td className="py-[16px]">1</td>
                <td>ດອກໄຟທາງຍາງຊັ້ນ 2 ບໍ່ຮຸ່ງ</td>
                <td>ດອກໄຟບໍ່ຮຸ່ງ 3 ດອກຕັ້ງແຕ່ຫົວຂັ້ນໄດ້ຂື້ນໄປ</td>
                <td className="text-[#4ADE80]">ສຳເລັດການແກ້ໄຂ</td>
                <td>01-10-2024</td>
                <td>02-10-2024</td>
                <td>
                  <button className="bg-[#00B8D1] text-white rounded-[20px] text-[12px] px-[8px] py-[4px]">
                    ເບີ່ງລາຍລະອຽດ
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Sidebar>
  );
};

export default ProblemHistory;
