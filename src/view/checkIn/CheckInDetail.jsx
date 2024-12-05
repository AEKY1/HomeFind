import React, { useState } from "react";
import { BtUpLoad } from "../../components/BtUpLoad";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { Sidebar } from "../../components/Sidebar";
import PopUpCheckIn from "./components/PopUpCheckIn";

const CheckInDetail = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div>
      <Sidebar>
        <div className="flex justify-center m-[10px]">
          <div className=" h-full ">
            <Link to="/checkIn">
              <div className="flex items-center my-[15px] text-[#4B5563] ">
                <FaChevronLeft className="mr-[5px]" /> ກັບຄືນ
              </div>
            </Link>
            <div className="w-[600px] h-full bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)] rounded-[8px]">
              <div className="p-[26px] h-full text-[14px] ">
                <p className="text-[16px] text-[#1F2937] font-semibold">
                  Check-in
                </p>
                <div className="flex w-full mt-[20px] justify-between">
                  <div className="w-[50%] text-[#4B5563] ">
                    <div className="flex flex-col mb-[20px]">
                      ຊື່ ແລະ ນາມສະກຸນ
                      <input
                        className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none "
                        type="text"
                        placeholder="ປ້ອນຊື່"
                      />
                    </div>
                    <div className="flex flex-col mb-[20px]">
                      ອີເມວ
                      <input
                        className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none "
                        type="text"
                        placeholder="ປ້ອນອີເມວ"
                      />
                    </div>
                    <div className="flex flex-col mb-[20px]">
                      ເມືອງ
                      <input
                        className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none "
                        type="text"
                        placeholder="ປ້ອນເມືອງ"
                      />
                    </div>
                    <div className="flex flex-col mb-[20px]">
                      ເລືອກເອກະສານປະຈຳຕົວຜູ້ເຊົ່າ
                      <select className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none ">
                        <option value="">ບັດປະຈຳຕົວ</option>
                        <option value="">ສຳມະໂນຄົວ</option>
                        <option value="">ພາສສະປອດ</option>
                      </select>
                    </div>
                    <div className="flex flex-col mb-[20px] text-[12px]">
                      <div className="flex m-[3px]">
                        ອັບໂຫຼດຮູບເອກະສານ
                        <span className="text-[#9CA3AF]">
                          (ຂະໝາດ 1:2 ຫຼື 1270 x 740)
                        </span>
                      </div>
                      <div className="mt-[10px]">
                        <BtUpLoad />
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] text-[#4B5563] ">
                    <div className="flex flex-col mb-[20px]">
                      ເບີໂທ
                      <input
                        className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none "
                        type="text"
                        placeholder="ປ້ອນເບີໂທຕິດຕໍ່"
                      />
                    </div>
                    <div className="flex flex-col mb-[20px]">
                      ບ້ານ
                      <input
                        className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none "
                        type="text"
                        placeholder="ປ້ອນບ້ານ"
                      />
                    </div>
                    <div className="flex flex-col mb-[20px]">
                      ແຂວງ
                      <input
                        className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none "
                        type="text"
                        placeholder="ປ້ອນແຂວງ"
                      />
                    </div>
                    <div className="flex flex-col mb-[20px]">
                      ເລກບັດປະຈຳຕົວ
                      <input
                        className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none "
                        type="text"
                        placeholder="ປ້ອນເລກບັດປະຈຳຕົວ"
                      />
                    </div>
                    <div className="flex flex-col mb-[20px] ">
                      ວັນທີ່ເຂົ້າພັກ
                      <input
                        className="border border-[#D1D5DB] w-[266px] h-[34px] rounded-[6px] mt-[10px] pl-[20px] focus:outline-none "
                        type="text"
                        placeholder="ປ້ອນວັນທີ່ເຂົ້າພັກ"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-[100px] text-[#1F2937] text-[16px] font-semibold">
                  ຂໍ້ມູນຫ້ອງ
                </p>
                <div className="flex justify-between text-[#4B5563] mt-[20px]">
                  <div className="flex flex-col">
                    ຫ້ອງ
                    <input
                      className="border border-[#D1D5DB] w-[265px] h-[34px] rounded-[6px] mt-[7px] focus:outline-none "
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    ຄ່າເຊົ່າ
                    <input
                      className="border border-[#D1D5DB] w-[265px] h-[34px] rounded-[6px] mt-[7px] focus:outline-none "
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="flex flex-col text-[#4B5563] mt-[20px]">
                  ຄ່າມັດຈຳ
                  <input
                    className="border border-[#D1D5DB] w-[265px] h-[34px] rounded-[6px] mt-[7px] focus:outline-none "
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col mt-[20px] text-[#4B5563] ">
                  ລາຍລະອຽດຫ້ອງ
                  <textarea
                    name=""
                    id=""
                    className="border w-full h-[130px] mt-[7px] focus:outline-none "
                  ></textarea>
                </div>
                <div className="w-full flex justify-center mt-[60px]">
                  <button className="w-[128px] h-[44px] border border-[#00B8D1] rounded-[8px] mr-[15px] ">
                    ຍົກເລີກ
                  </button>
                  <button
                    onClick={() => {
                      setShowPopUp(true);
                    }}
                    className="w-[128px] h-[44px]  bg-[#00B8D1] rounded-[8px] text-white "
                  >
                    ບັນທືກ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
      {showPopUp && <PopUpCheckIn onClose={() => setShowPopUp(false)} />}
    </div>
  );
};

export default CheckInDetail;
