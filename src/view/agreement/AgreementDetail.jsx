import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import Logo from "../../../public/Images/Emblem_of_Laos.svg 1.png";

const AgreementDetail = () => {
  return (
    <div>
      <Sidebar>
        <div className="w-full flex justify-center">
          <div>
            <Link to="/agreement">
              <p className="text-[16px] flex items-center gap-2 mt-[30px] mb-[10px] text-[#4B5563] ">
                <span className="text-[12px]">
                  <FaChevronLeft />
                </span>{" "}
                ກັບຄືນ
              </p>
            </Link>
            <div className="w-[586px] bg-white rounded-md flex flex-col items-center pt-[40px] pb-[80px] px-[50px] text-[12px] text-[#6B7280] ">
              <img src={Logo} alt="" className="w-[74px] h-[68px] " />
              <p className="mt-[26px]">ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</p>
              <p>ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ</p>
              <div className="flex flex-col items-end w-full mt-[20px]">
                <p>ເລກທີ...../ນວຈ</p>
                <p>ນະຄອນຫລວງວຽງຈັນ</p>
              </div>
              <p className="text-[14px] font-semibold mt-[16px] ">ສັນຍາເຊົ່າ</p>
              <p className="text-[14px] mt-[40px] ">ລະຫວ່າງ</p>
              <p className="mt-[60px]">
                ຂ້າພະເຈົ້າ (ຜູ້ໃຫ້ເຊົ່າ) ນາງ ສົມແກ້ວ ຈັນທະແສງ ທີ່ຢູ່ປັດຈຸບັນບ້ານ
                ທົ່ງສ້າງນາງ ເມືອງຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ{" "}
              </p>
              <p>ເບີໂທ 020 55555555 ເອີ້ນວ່າຝ່າຍ ກ</p>
              <p className="my-[40px]">ແລະ</p>
              <p>
                ຜູ້ເຊົ່າ _____________ ທີ່ຢູ່ປັດຈຸບັນ _____________ ເມືອງ
                _____________ ແຂວງ _____________
              </p>
              <p>ເບີໂທ _____________ ເອີ້ນວ່າຝ່າຍ ຂ</p>
              <p className="mt-[60px]">
                ວັນທີ່ເຂົ້າພັກ _____________ ຄ່າເຊົ່າ _____________{" "}
              </p>
              <div className="w-full px-[20px] mt-[30px]">
                <p className="font-semibold">ເງື່ອນໄຂການເຊົ່າ</p>
                <div className="flex mt-[14px] ">
                  <p>1).</p>
                  <div className="border-b-2 border-[#9CA3AF] w-full text-[10px]  "></div>
                </div>
                <div className="flex mt-[8px]">
                  <p>2).</p>
                  <div className="border-b-2 border-[#9CA3AF] w-full text-[10px]  "></div>
                </div>
                <div className="flex mt-[8px]">
                  <p>3).</p>
                  <div className="border-b-2 border-[#9CA3AF] w-full text-[10px]  "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default AgreementDetail;
