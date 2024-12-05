import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { ButtonAdd } from "../../components/ButtonAdd";
import { FaFile } from "react-icons/fa6";
import { BtEdit } from "../../components/BtEdit";
import { BtDelete } from "../../components/BtDelete";
import { Link } from "react-router-dom";

const Agreement = () => {
  return (
    <div>
      <Sidebar>
        <div className="w-full py-[40px] px-[120px]">
          <div className="flex justify-between">
            <div>
              <p className="text-[14px] font-semibold text-[#4B5563]">
                ສ້າງສັນຍາການເຊົ່າ
              </p>
              <p className="text-[12px] text-[#6B7280] ">
                ທ່ານສາມາດສ້າງສັນຍາການເຊົ່າລະຫວ່າງຜູ້ເຊົ່າ ກັບ ເຈົ້າຂອງສະຖານທີ່{" "}
                <br />
                ໄດ້ງ່າຍດາຍບ່ອນນີ້
              </p>
            </div>
            <div>
              <Link to="/agreement/add">
                <ButtonAdd name="ສ້າງສັນຍາເຊົ່າ" />
              </Link>
            </div>
          </div>
          <div className="h-[1.5px] w-full bg-[#D1D5DB] mt-[10px] "></div>
          <Link to="/agreement/detail">
            <div className="w-[236px]  bg-white p-[16px] mt-[20px] flex flex-col items-center rounded-md ">
              <FaFile className="text-[#90CAF9] text-[100px]" />
              <p className="text-[12px] text-[#6B7280] my-[16px]">ສັນຍາເຊົ່າ</p>
              <p className="text-[10px] text-[#9CA3AF] my-[10px]">
                ວັນທີ່ສ້າງ :​ 01-10-2024
              </p>
              <div className="bg-[#D9D9D9] h-[1px] w-full "></div>
              <div className="text-[12px] flex gap-2 mt-[10px]">
                <BtEdit />
                <BtDelete />
              </div>
            </div>
          </Link>
        </div>
      </Sidebar>
    </div>
  );
};

export default Agreement;
