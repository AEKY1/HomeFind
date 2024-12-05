import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { SearchInput } from "../../components/SearchInput";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ReportAllRoom = () => {
  return (
    <Sidebar>
      <div className="px-[30px] text-[#4B5563]">
        <Link to="/report">
          <div className="flex items-center my-[30px] ">
            <FaChevronLeft className="mr-[5px]" /> ກັບຄືນ
          </div>
        </Link>
        <SearchInput name="ຄົ້ນຫາເລກຫ້ອງ, ຊັ້ນ, ຄ່າເຊົ່າ..." />
        <p className="text-[14px] font-semibold mt-[40px]">
          ລາຍງານຫ້ອງທັງໝົດ 100 ຫ້ອງ
        </p>
        <div className="bg-white w-full rounded-[8px] px-[8px] py-[16px] mt-[10px] ">
          <div className="flex gap-3">
            <div className="border border-[#00B8D1] rounded-[18px] w-[112px] h-[36px] text-[14px] text-[#00B8D1] flex justify-center items-center ">
              ຫວ່າງ
            </div>
            <div className="border border-[#00B8D1] rounded-[18px] w-[112px] h-[36px] text-[14px] text-[#00B8D1] flex justify-center items-center ">
              ເຕັມ
            </div>
          </div>
          <table className="w-full text-center mt-[16px] ">
            <thead className="bg-[#E5E7EB]">
              <tr>
                <td className="py-[5px]">ລຳດັບ</td>
                <td>ເລກຫ້ອງ</td>
                <td>ຊັ້ນ</td>
                <td>ຄ່າເຊົ່າ</td>
                <td>ສະຖານະ</td>
                <td>ວັນທີ່ສ້າງ</td>
                <td>ລາຍລະອຽດ</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-[20px]">1</td>
                <td>A01</td>
                <td>2</td>
                <td>2,000,000 ກີບ</td>
                <td>
                  <div className="w-full flex justify-center">
                    <div className="w-[68px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] text-[#4ADE80] rounded-[20px] ">
                      ຫວ່າງ
                    </div>
                  </div>
                </td>
                <td>01-10-2024</td>
                <td className="w-[350px]">
                  ຄ່າຫ້ອງ 1,000,000 ກີບ ຄ່າສ່ວນກາງ 500,000ກີບ...
                </td>
                <td className="w-[150px]">
                  <button className="bg-[#E5E7EB] w-[30px] h-[30px] rounded-[50%] mr-[10px] text-[#9CA3AF]  ">
                    <div className="flex items-center justify-center text-[20px]">
                      <MdOutlineRemoveRedEye />
                    </div>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="py-[20px]">2</td>
                <td>A02</td>
                <td>2</td>
                <td>2,000,000 ກີບ</td>
                <td>
                  <div className="w-full flex justify-center">
                    <div className="w-[68px] h-[24px] bg-[#FEF9C3] border border-[#FDE047] text-[#FDE047] rounded-[20px] ">
                      ເຕັມ
                    </div>
                  </div>
                </td>
                <td>01-10-2024</td>
                <td className="w-[350px]">
                  ຄ່າຫ້ອງ 1,000,000 ກີບ ຄ່າສ່ວນກາງ 500,000ກີບ...
                </td>
                <td className="w-[150px]">
                  <button className="bg-[#E5E7EB] w-[30px] h-[30px] rounded-[50%] mr-[10px] text-[#9CA3AF]  ">
                    <div className="flex items-center justify-center text-[20px]">
                      <MdOutlineRemoveRedEye />
                    </div>
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

export default ReportAllRoom;
