import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

export const TableBooking = () => {
  return (
    <div>
      <div className="w-[100%] h-[480px] bg-white mt-[15px] rounded-[8px] p-[10px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)]">
        <table className="w-[100%] text-[#4B5563]">
          <thead>
            <tr className="bg-[#E5E7EB]  h-[36px] text-[14px] text-center ">
              <th className="pl-[8px]">ຮູບ</th>
              <th>ຊື່ທີ່ພັກ</th>
              <th>ປະເພດຫ້ອງພັກ</th>
              <th>ສະຖານທີ່</th>
              <th>ລາຄາ</th>
              <th>ຜູ້ຈອງ</th>
              <th>ເບີໂທຜູ້ຈອງ</th>
              <th>ວັນທີ່ຈອງ</th>
              <th>ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-[12px] border-b-2">
              <td>
                <div className="w-full flex justify-center">
                  <div className="w-[116px] h-[70px] rounded-[4px] bg-[#D9D9D9] "></div>
                </div>
              </td>
              <td className=" py-[40px]">ຫ້ອງແຖວທົ່ງສ້າງນາງ</td>
              <td>ຫ້ອງແຖວ</td>
              <td>
                ນະຄອນຫລວງວຽງຈັນ <br />
                ຈັນທະບຸລີ
                <br />
                ທົ່ງສ້າງນາງ
              </td>
              <td>1,000,000 ກີບ/ເດືອນ</td>
              <td>ຕາຕູ່ນ ນັນທະໄຊ</td>
              <td>020 55555555</td>
              <td>20/10/2024</td>
              <td>
                <div className="w-full flex justify-center items-center ">
                  <Link to="/booking/detail">
                    <button className="bg-[#E5E7EB] w-[30px] h-[30px] rounded-[50%] mr-[10px] text-[#9CA3AF] ">
                      <div className="flex items-center justify-center text-[20px]">
                        <MdOutlineRemoveRedEye />
                      </div>
                    </button>
                  </Link>
                  <button className="bg-[#00B8D1] w-[68px] h-[24px] rounded-[20px] mr-[10px] text-[#ffffff] ">
                    <div className="flex items-center justify-center">
                      ອະນຸມັດ
                    </div>
                  </button>
                  <button className="bg-[#F87171] w-[68px] h-[24px] rounded-[20px] text-[#ffffff] ">
                    <div className="flex items-center justify-center">
                      ປະຕິເສດ
                    </div>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="text-center text-[12px] border-b-2">
              <td>
                <div className="w-full flex justify-center">
                  <div className="w-[116px] h-[70px] rounded-[4px] bg-[#D9D9D9] "></div>
                </div>
              </td>
              <td className=" py-[40px]">ຊື່ທີ່ພັກ</td>
              <td>ຫ້ອງແຖວ</td>
              <td>
                ນະຄອນຫລວງວຽງຈັນ <br />
                ຈັນທະບຸລີ
                <br />
                ທົ່ງສ້າງນາງ
              </td>
              <td>1,000,000 ກີບ/ເດືອນ</td>
              <td>ຕາຕູ່ນ ນັນທະໄຊ</td>
              <td>020 55555555</td>
              <td>20/10/2024</td>
              <td>
                <div className="w-full flex justify-center items-center ">
                  <Link to="/booking/detail">
                    <button className="bg-[#E5E7EB] w-[30px] h-[30px] rounded-[50%] mr-[10px] text-[#9CA3AF] ">
                      <div className="flex items-center justify-center text-[20px]">
                        <MdOutlineRemoveRedEye />
                      </div>
                    </button>
                  </Link>
                  <button className="bg-[#00B8D1] w-[68px] h-[24px] rounded-[20px] mr-[10px] text-[#ffffff] ">
                    <div className="flex items-center justify-center">
                      ອະນຸມັດ
                    </div>
                  </button>
                  <button className="bg-[#F87171] w-[68px] h-[24px] rounded-[20px] text-[#ffffff] ">
                    <div className="flex items-center justify-center">
                      ປະຕິເສດ
                    </div>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="text-center text-[12px] border-b-2">
              <td>
                <div className="w-full flex justify-center">
                  <div className="w-[116px] h-[70px] rounded-[4px] bg-[#D9D9D9] "></div>
                </div>
              </td>
              <td className=" py-[40px]">ຊື່ທີ່ພັກ</td>
              <td>ຫ້ອງແຖວ</td>
              <td>
                ນະຄອນຫລວງວຽງຈັນ <br />
                ຈັນທະບຸລີ
                <br />
                ທົ່ງສ້າງນາງ
              </td>
              <td>1,000,000 ກີບ/ເດືອນ</td>
              <td>ຕາຕູ່ນ ນັນທະໄຊ</td>
              <td>020 55555555</td>
              <td>20/10/2024</td>
              <td>
                <div className="w-full flex justify-center items-center ">
                  <Link to="/booking/detail">
                    <button className="bg-[#E5E7EB] w-[30px] h-[30px] rounded-[50%] mr-[10px] text-[#9CA3AF] ">
                      <div className="flex items-center justify-center text-[20px]">
                        <MdOutlineRemoveRedEye />
                      </div>
                    </button>
                  </Link>
                  <button className="bg-[#86EFAC] w-[68px] h-[24px] rounded-[20px] mr-[10px] text-[#ffffff] ">
                    <div className="flex items-center justify-center">
                      ສຳເລັດ
                    </div>
                  </button>
                  <button className="bg-[#D1D5DB] w-[68px] h-[24px] rounded-[20px] text-[#ffffff] ">
                    <div className="flex items-center justify-center">
                      ປະຕິເສດ
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
