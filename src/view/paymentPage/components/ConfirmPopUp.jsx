import React, { useEffect, useState } from "react";
import { MdDownload, MdDownloadForOffline } from "react-icons/md";

const ConfirmPopUp = ({ onClose }) => {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div className="fixed z-30 inset-0 bg-black backdrop-sm bg-opacity-30 flex justify-center text-[#4B5563]">
        {confirm === false && (
          <div className="bg-white w-[672px] h-[370px] rounded-md mt-[60px] p-[30px] flex flex-col items-center ">
            <p className="text-[14px]">ການອະນຸມັດການຈ່າຍເງີນ</p>
            <div className="w-full h-[214px] bg-[#F3F4F6] px-[40px] pt-[10px] rounded-[4px flex ">
              <div className="w-[70%] ">
                <p className=" text-[12px] font-semibold ">ຂໍ້ມູນການເຊົ່າ</p>
                <div className="flex mt-[15px] ">
                  <div className="w-[50%] text-[12px] ">
                    <p className="mb-[4px]">ເລກຫ້ອງ</p>
                    <p className="font-semibold mb-[15px]">A01</p>
                    <p className="mb-[4px]">ວັນທີ່ເຂົ້າພັກ</p>
                    <p className="font-semibold mb-[15px]">01 - 10 - 2024</p>
                    <p className="mb-[4px]">ຄ່າເຊົ່າ</p>
                    <p className="font-semibold">1,000,000 ກີບ</p>
                  </div>
                  <div className="w-[50%] text-[12px] ">
                    <p className="mb-[4px]">ຜູ້ເຊົ່າ</p>
                    <p className="font-semibold mb-[15px]">John Smith</p>
                    <p className="mb-[4px]">ເບີໂທ</p>
                    <p className="font-semibold">020 55555555</p>
                  </div>
                </div>
              </div>
              <div className="w-[30%] ">
                <p className="text-[12px] font-semibold ">ການຊະລຳເງິນ</p>
                <div className="w-[168px] h-[154px] bg-red-400 mt-[15px] "></div>
              </div>
            </div>
            <div className="flex justify-center mt-[40px] ">
              <div className="flex gap-7">
                <button
                  onClick={onClose}
                  className="border border-[#9CA3AF] text-[#9CA3AF] w-[160px] h-[30px] rounded-[4px] "
                >
                  ກັບຄືນ
                </button>
                <button
                  onClick={() => setConfirm(true)}
                  className="border border-[#00B8D1] bg-[#00B8D1] text-white w-[160px] h-[30px] rounded-[4px] "
                >
                  ຢືນຢັນການຊຳລະ
                </button>
              </div>
            </div>
          </div>
        )}
        {confirm === true && (
          <div className="w-[386px] h-[498px] bg-white py-[15px] px-[25px] mt-[60px] flex flex-col justify-between items-center ">
            <div className="w-full">
              <div className="flex gap-2 items-center">
                <div className="bg-[#D9D9D9] w-[36px] h-[36px] rounded-full "></div>
                <p className="text-[16px] font-semibold ">ອາພາດເມັ້ນວຽງຈັນ</p>
              </div>
              <div className="w-full flex justify-end mt-[5px] ">
                <button className="px-[2px] py-[4px] text-[#00B8D1] flex items-center text-[12px] ">
                  ດາວໂຫລດໃບບິນ <MdDownloadForOffline className="text-[16px]" />
                </button>
              </div>
              <div className="w-full flex justify-between text-[12px] mt-[5px] ">
                <p>ວັນທີ່ອອກໃບບິນ : 30-10-2024</p>
                <p>ເລກທີ່ໃບບິນ : 000000</p>
              </div>
              <div className="bg-[#D9D9D9] w-full py-[3px] pl-[12px] mt-[10px] ">
                <p className="text-[12px] font-semibold ">ຂໍ້ມູນລູກຄ້າ</p>
              </div>
              <div className="border-dashed border-b-2 flex justify-between text-[12px] py-[2px] px-[12px] mt-[12px] ">
                <div>
                  <p>ຊື່ ແລະ ນາມສະກຸ</p>
                  <p>ເບີໂທ</p>
                  <p>ວັນທີ່ເຂົ້າພັກ</p>
                </div>
                <div className="font-semibold">
                  <p>ນາງ ຄຳ ແສງຈັນ</p>
                  <p>020 55555555</p>
                  <p>01-10-2024</p>
                </div>
              </div>
              <div className="border-dashed border-b-2 flex justify-between text-[12px] py-[12px] px-[12px] ">
                <div>
                  <p>ເລກຫ້ອງ</p>
                  <p>ຄ່າເຊົ່າ</p>
                </div>
                <div className="font-semibold">
                  <p>A01</p>
                  <p>1,000,000 ກີບ</p>
                </div>
              </div>
              <div className="flex justify-between text-[12px] py-[12px] px-[12px] ">
                <div>
                  <p>ຈຳນວນທີ່ຕ້ອງຊຳລະ</p>
                </div>
                <div className="font-semibold">
                  <p>1,000,000 ກີບ</p>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="w-[80px] h-[24px] flex justify-center text-[#6B7280] text-[14px] border-2 border-[#6B7280] rounded-[4px] ">
                  ຈ່າຍແລ້ວ
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[14px] ">ຂອບໃຈທີ່ໃຊ້ບໍລິການ</p>
              <button
                className="w-[94px] h-[30px] border-2 border-[#00B8D1] text-[12px] text-[#00B8D1] mt-[25px] rounded-[4px] mb-[10px] "
                onClick={onClose}
              >
                ປິດ
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConfirmPopUp;
