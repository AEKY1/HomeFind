import React, { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import Logo from "../../../../public/Images/Emblem_of_Laos.svg 1.png";
import { MdDownload, MdDownloadForOffline } from "react-icons/md";

const PopUpCheckIn = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed z-30 inset-0 bg-black backdrop-sm bg-opacity-30 flex justify-center overflow-y-scroll ">
      <div className="w-full flex justify-center mt-[30px] ">
        <div>
          <div className="flex justify-between items-center mb-[10px]  ">
            <button
              onClick={onClose}
              className="px-[18px] py-[6px] bg-white flex items-center text-[12px] text-[#00B8D1] border border-[#00B8D1] rounded-md"
            >
              ປິດໜ້ານີ້
            </button>
            <button className="px-[18px] py-[6px] text-white flex items-center text-[12px] gap-1 bg-[#00B8D1] rounded-md ">
              ດາວໂຫລດໃບບິນ{" "}
              <div className="bg-white rounded-full text-[#00B8D1] p-[2px]">
                {" "}
                <MdDownload className="text-[12px]" />
              </div>
            </button>
          </div>
          <div className="h-full w-full  ">
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
                ຜູ້ເຊົ່າ ນາງ ສົມແກ້ວ ຈັນທະແສງ ທີ່ຢູ່ປັດຈຸບັນບ້ານ ທົ່ງສ້າງນາງ
                ເມືອງຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ
              </p>
              <p>ເບີໂທ 020 55555555 ເອີ້ນວ່າຝ່າຍ ຂ</p>
              <p className="mt-[60px]">
                ວັນທີ່ເຂົ້າພັກ 01/10/2024 ຄ່າເຊົ່າ 100,000 ບາດ/ປີ
              </p>
              <div className="w-full px-[20px] mt-[16px]">
                <p>
                  ທັງສອງຝ່າຍຕົກລົງເຫັນດີເປັນເອກະພາບກັບ ໂດຍມີເງື່ອນໄຂດັ່ງນີ້ :
                </p>
                <p className="font-semibold mt-[60px]">ເງື່ອນໄຂການເຊົ່າ</p>
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
            <div className="h-[100px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCheckIn;
