import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { FaChevronLeft } from "react-icons/fa6";
import Logo from "../../../public/Images/Emblem_of_Laos.svg 1.png";
import { Link } from "react-router-dom";
import { MdDownload } from "react-icons/md";

const AddAgreement = () => {
  return (
    <div>
      <Sidebar>
        <div className="w-full flex justify-center">
          <div>
            <div className="flex justify-between items-center mb-[10px] mt-[20px]  ">
              <Link to="/agreement">
                <p className="text-[16px] flex items-center gap-2 text-[#4B5563] ">
                  <span className="text-[12px]">
                    <FaChevronLeft />
                  </span>{" "}
                  ກັບຄືນ
                </p>
              </Link>
              <button className="px-[18px] py-[6px] text-white flex items-center text-[12px] gap-1 bg-[#00B8D1] rounded-md ">
                ດາວໂຫລດໃບບິນ{" "}
                <div className="bg-white rounded-full text-[#00B8D1] p-[2px]">
                  {" "}
                  <MdDownload className="text-[12px]" />
                </div>
              </button>
            </div>
            <div className="w-[586px] bg-white rounded-md flex flex-col items-center py-[40px] px-[50px] text-[12px] text-[#6B7280] ">
              <img src={Logo} alt="" className="w-[74px] h-[68px] " />
              <p className="mt-[26px]">ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</p>
              <p>ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນາຖາວອນ</p>
              <div className="flex flex-col items-end w-full mt-[20px]">
                <p>ເລກທີ...../ນວຈ</p>
                <p>ນະຄອນຫລວງວຽງຈັນ</p>
              </div>
              <p className="text-[14px] font-semibold mt-[16px] ">ສັນຍາເຊົ່າ</p>
              <p className="text-[14px] mt-[40px] ">ລະຫວ່າງ</p>
              <div className="flex w-full mt-[50px] ">
                <div className="w-[45%]">
                  <div className="flex justify-end">
                    ຂ້າພະເຈົ້າ{" "}
                    <span className="text-[#374151]">(ຜູ້ໃຫ້ເຊົ່າ)</span> :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນຊື່ ແລະ ນາມສະກຸນຜູ້ໃຫ້ເຊົ່າ"
                    />
                  </div>
                  <div className="flex justify-end mt-[14px] ">
                    ເມືອງ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນເມືອງ"
                    />
                  </div>
                  <div className="flex justify-end mt-[14px]">
                    ເບີໂທ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນເບີໂທ"
                    />
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className="flex justify-end ">
                    ທີ່ຢູ່ປັດຈຸບັນບ້ານ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນບ້ານ"
                    />
                  </div>
                  <div className="flex justify-end mt-[14px]">
                    ແຂວງ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນແຂວງ"
                    />
                  </div>
                  <p className="ml-[40px] mt-[14px]">ເອີ້ນວ່າຝ່າຍ ກ</p>
                </div>
              </div>
              <p className="my-[30px] ">ແລະ</p>
              <div className="flex w-full ">
                <div className="w-[45%]">
                  <div className="flex justify-end">
                    ຜູ້ເຊົ່າ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນຊື່ ແລະ ນາມສະກຸນຜູ້ເຊົ່າ"
                    />
                  </div>
                  <div className="flex justify-end mt-[14px] ">
                    ເມືອງ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນເມືອງ"
                    />
                  </div>
                  <div className="flex justify-end mt-[14px]">
                    ເບີໂທ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນເບີໂທ"
                    />
                  </div>
                  <div className="flex justify-end mt-[50px]">
                    ວັນທີ່ເຂົ້າພັກ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນວັນທີ່ເຂົ້າພັກ"
                    />
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className="flex justify-end ">
                    ທີ່ຢູ່ປັດຈຸບັນບ້ານ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນບ້ານ"
                    />
                  </div>
                  <div className="flex justify-end mt-[14px]">
                    ແຂວງ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນແຂວງ"
                    />
                  </div>
                  <p className="ml-[40px] mt-[14px]">ເອີ້ນວ່າຝ່າຍ ຂ</p>
                  <div className="flex justify-end mt-[50px]">
                    ຄ່າເຊົ່າ :
                    <input
                      type="text"
                      className="border-b-2 border-[#9CA3AF] w-[126px] text-[10px] pl-1 focus:outline-none "
                      placeholder="*ປ້ອນວັນທີ່ເຂົ້າພັກ"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start px-[40px] ">
                <p className="mt-[20px] ">
                  ທັງສອງຝ່າຍຕົກລົງເຫັນດີເປັນເອກະພາບກັບ ໂດຍມີເງື່ອນໄຂດັ່ງນີ້ :
                </p>
              </div>
              <div className="w-full px-[20px] mt-[30px]">
                <p className="font-semibold">ເງື່ອນໄຂການເຊົ່າ</p>
                <div className="flex mt-[14px] ">
                  <p>1).</p>
                  <input
                    type="text"
                    className="border-b-2 border-[#9CA3AF] w-full text-[10px] pl-1 focus:outline-none "
                  />
                </div>
                <div className="flex mt-[8px]">
                  <p>2).</p>
                  <input
                    type="text"
                    className="border-b-2 border-[#9CA3AF] w-full text-[10px] pl-1 focus:outline-none "
                  />
                </div>
                <div className="flex mt-[8px]">
                  <p>3).</p>
                  <input
                    type="text"
                    className="border-b-2 border-[#9CA3AF] w-full text-[10px] pl-1 focus:outline-none "
                  />
                </div>
                <button className="bg-[#D1D5DB] border-[1.5px] border-[#9CA3AF] px-[2px] rounded-[4px] mt-[8px]">
                  + add
                </button>
              </div>
              <div className="flex gap-4 mt-[50px]">
                <button className="w-[160px] h-[30px] border-2 border-[#9CA3AF] text-[#9CA3AF] rounded-md ">
                  ຍົກເລີກ
                </button>
                <button className="w-[160px] h-[30px] border-2 border-[#00B8D1] bg-[#00B8D1] text-white rounded-md ">
                  ບັນທືກການສ້າງສັນຍາ
                </button>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default AddAgreement;
