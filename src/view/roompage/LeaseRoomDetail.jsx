import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa6";
import { RiHomeOfficeFill } from "react-icons/ri";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { BtUpLoad } from "../../components/BtUpLoad";
import { InputPic } from "../../components/InputPic";
import { Switch } from "../../components/Switch";

export const LeaseRoomDetail = () => {
  return (
    <div>
      <Sidebar>
        <div className="flex justify-center m-[10px]">
          <div className=" h-full w-[594px] ">
            <Link to="/manageRoom">
              <div className="flex items-center my-[15px] text-[#4B5563] ">
                <FaChevronLeft className="mr-[5px]" /> ກັບຄືນ
              </div>
            </Link>
            <div className="p-[26px] w-[600px] h-full bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)] rounded-[8px] text-[16px] text-[#4B5563] ">
              <div>
                <p className="font-semibold text-[#1F2937] ">
                  ເລືອກປະເພດບໍລິການ
                </p>
                <div className="flex gap-6 mt-[20px]">
                  <button className="w-[78px] h-[78px] border-2 border-[#9CA3AF] rounded-[4px] text-[#9CA3AF] flex flex-col items-center justify-center ">
                    <RiHomeOfficeFill className="text-[36px]" />
                    <p className="text-[12px]">ຫ້ອງແຖວ</p>
                  </button>
                  <button className="w-[78px] h-[78px] border-2 border-[#9CA3AF] rounded-[4px] text-[#9CA3AF] flex flex-col items-center justify-center ">
                    <PiBuildingApartmentFill className="text-[36px]" />
                    <p className="text-[12px]">ອາພາດເມັນ</p>
                  </button>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="font-semibold text-[#1F2937] ">ຮູບພາບສະຖານທີ່</p>
                <p className="mt-[30px]">
                  ອັບໂຫຼດຮູບພາບໜ້າປົກ 1 ຮູບ{" "}
                  <span className="text-[#9CA3AF]">
                    (ຂະໝາດ 1:2 ຫຼື 1270 x 740)
                  </span>
                </p>
                <div className="mt-[15px]">
                  <BtUpLoad />
                </div>
                <div className="mt-[15px]">
                  <InputPic />
                </div>
              </div>
              <div className="mt-[30px]">
                <p>
                  ອັບໂຫຼດຮູບພາບເພີ່ມຕື່ມ 4 ຮູບ{" "}
                  <span className="text-[#9CA3AF]">
                    (ຂະໝາດ 1:2 ຫຼື 1270 x 740)
                  </span>
                </p>
                <div className="mt-[15px]">
                  <BtUpLoad />
                </div>
                <div className="mt-[15px]">
                  <InputPic />
                </div>
                <div className="mt-[8px]">
                  <InputPic />
                </div>
              </div>
              <div className="mt-[40px]">
                <p className="font-semibold text-[#1F2937] ">ຂໍ້ມູນສະຖານທີ່</p>
                <div className="flex gap-3 mt-[20px]">
                  <div>
                    <p>ເລືອກຫ້ອງ</p>
                    <div className="w-[266px] relative mt-[5px]">
                      <input
                        type="text"
                        placeholder="ເລືອກຫ້ອງທີ່ຈະປ່ອຍເຊົ່າ"
                        className="w-[266px] h-[44px] border border-[#D1D5DB] focus:outline-none pl-[10px] rounded-[6px] "
                      />
                      <button className="h-[44px] absolute top-0 right-4 text-[18px] flex items-center ">
                        <FaChevronDown />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>ຊື່ສະຖານ</p>
                    <input
                      type="text"
                      placeholder="ປ້ອນຊື່"
                      className="mt-[5px] w-[266px] h-[44px] border border-[#D1D5DB] focus:outline-none pl-[10px] rounded-[6px] "
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-[15px]">
                  <div>
                    <p>ບ້ານ</p>
                    <input
                      type="text"
                      placeholder="ປ້ອນບ້ານ"
                      className="mt-[5px] w-[266px] h-[44px] border border-[#D1D5DB] focus:outline-none pl-[10px] rounded-[6px] "
                    />
                  </div>
                  <div>
                    <p>ເມືອງ</p>
                    <input
                      type="text"
                      placeholder="ປ້ອນເມືອງ"
                      className="mt-[5px] w-[266px] h-[44px] border border-[#D1D5DB] focus:outline-none pl-[10px] rounded-[6px] "
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-[15px]">
                  <div>
                    <p>ປະເພດຄ່າເຊົ່າ</p>
                    <div className="w-[266px] relative mt-[5px]">
                      <input
                        type="text"
                        placeholder=""
                        className="w-[266px] h-[44px] border border-[#D1D5DB] focus:outline-none pl-[10px] rounded-[6px] "
                      />
                      <button className="h-[44px] absolute top-0 right-4 text-[18px] flex items-center ">
                        <FaChevronDown />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>ແຂວງ</p>
                    <input
                      type="text"
                      placeholder="ປ້ອນຊື່"
                      className="mt-[5px] w-[266px] h-[44px] border border-[#D1D5DB] focus:outline-none pl-[10px] rounded-[6px] "
                    />
                  </div>
                </div>
                <div className="mt-[15px]">
                  <p>ຄ່າເຊົ່າຕໍ່ເດືອນ</p>
                  <input
                    type="text"
                    placeholder="ກຳນົດຄ່າເຊົ່າ"
                    className="mt-[5px] w-[266px] h-[44px] border border-[#D1D5DB] focus:outline-none pl-[10px] rounded-[6px] "
                  />
                </div>
                <div className="mt-[30px]">
                  <p>
                    ປ່ອຍເຊົ່າ
                    <span className="text-[#9CA3AF]">
                      (ສາມາດເປີດເພື່ອປ່ອຍເຊົ່າຜ່ານເວັນໄຊ໌ homefimd.la ໄດ້ທັນທີ)
                    </span>
                  </p>
                  <div className="mt-[10px]">
                    <Switch />
                  </div>
                </div>
                <div className="mt-[24px]">
                  <p>ລາຍລະອຽດເພີ່ມເຕີມ</p>
                  <textarea
                    name="text"
                    id=""
                    placeholder=""
                    className="mt-[5px] w-[546px] h-[120px] focus:outline-none border border-[#D1D5DB] "
                  ></textarea>
                </div>
                <div className="w-full flex justify-center mt-[10px]">
                  <button className="w-[128px] h-[44px] border border-[#00B8D1] rounded-[8px] mr-[15px] ">
                    ຍົກເລີກ
                  </button>
                  <button className="w-[128px] h-[44px]  bg-[#00B8D1] rounded-[8px] text-white ">
                    ບັນທືກ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
