import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import TagBarPayment from "./components/TagBarPayment";
import { BtEdit } from "../../components/BtEdit";
import { LuPencil } from "react-icons/lu";
import { BtDelete } from "../../components/BtDelete";
import { FaRegTrashAlt } from "react-icons/fa";
import LinkPopUp from "./components/LinkPopUp";

const PaymentLink = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div>
      <Sidebar>
        <TagBarPayment>
          <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
          <div className="mt-[20px] text-[14px] text-[#4B5563] ">
            <p className="font-semibold mb-[10px] ">
              ຈັດການ ແລະ ກຳນົດເວລາການສົ່ງລີ້ງຮຽກເກັບເງີນ
            </p>
            <div className="py-[20px] px-[50px] rounded-[8px] bg-white ">
              <div className="flex gap-3 mb-[20px]">
                <div className="w-full bg-[#F3F4F6] flex justify-center py-[6px] rounded-[4px] ">
                  ລີ້ງ :
                  https://claude.ai/chat/65da426d-7f6d-450f-805a-ceb7a7977854
                </div>
                <button
                  onClick={() => setShowPopUp(true)}
                  className="w-[102px] bg-[#00B8D1] text-white text-[12px] rounded-[4px] "
                >
                  ສ້າງລີ້ງຊຳລະເງີນ
                </button>
              </div>
              <table className="text-[12px] text-center border border-[#D1D5DB] w-full">
                <thead className="bg-[#F3F4F6]">
                  <tr>
                    <td className="border-r border-[#D1D5DB] py-[5px] ">
                      ຫົວຂໍ້
                    </td>
                    <td className="border-r border-[#D1D5DB] ">
                      ວັນທີ່ກຳນົດສົ່ງ
                    </td>
                    <td className="border-r border-[#D1D5DB] ">
                      ທີ່ສົ່ງເຖີງທັງໝົດ
                    </td>
                    <td className="border-r border-[#D1D5DB] ">ວັນທີ່ສ້າງ</td>
                    <td className="w-[250px] ">ຈັດການ</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r border-[#D1D5DB] py-[16px] ">
                      ຮຽກເກັບເງີນຄ່າເຊົ່າ
                    </td>
                    <td className="border-r border-[#D1D5DB] ">30</td>
                    <td className="border-r border-[#D1D5DB] ">20 (ຫ້ອງ)</td>
                    <td className="border-r border-[#D1D5DB] ">01-01-2024</td>
                    <td>
                      <div className="w-full flex justify-center gap-3 ">
                        <BtEdit />
                        <BtDelete />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TagBarPayment>
      </Sidebar>
      {showPopUp && <LinkPopUp onClose={() => setShowPopUp(false)} />}
    </div>
  );
};

export default PaymentLink;
