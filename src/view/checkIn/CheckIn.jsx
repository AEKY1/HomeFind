import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SearchInput } from "../../components/SearchInput";
import { Link } from "react-router-dom";

const CheckIn = () => {
  return (
    <div>
      <Sidebar>
        <div className="w-full flex justify-center">
          <div>
            <div className="mt-[40px] ">
              <SearchInput />
            </div>
            <p className="text-[14px] text-[#6B7280] mt-[24px]">
              ຫ້ອງທີ່ພ້ອມໃຫ້ check-in ທັງໝົດ 10 ຫ້ອງ
            </p>
            <div className="grid grid-cols-3 gap-6 mt-[8px]">
              <Link to="/checkIn/detail">
                <div className="w-[280px]  bg-white rounded-md text-[14px] text-[#4B5563] p-[16px] pb-[24px] ">
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">ເລກຫ້ອງ : A01</p>
                      <div className="w-[70px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] flex justify-center items-center rounded-[4px] ">
                        <p className="text-[#4ADE80] text-[12px]">ຫວ່າງ</p>
                      </div>
                    </div>
                    <p className="text-[12px] text-[#9CA3AF] mt-[8px] ">
                      ວັນທີ່ສ້າງ :​ 01-10-2024
                    </p>
                    <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[5px] "></div>
                    <div className="flex font-semibold mt-[10px]">
                      <div className="w-[50%]">
                        <p>ຄ່າເຊົ່າ :</p>
                        <p className="mt-[10px]">ຊັ້ນ :</p>
                        <p className="mt-[10px]">ລາຍລະອຽດ :</p>
                      </div>
                      <div className="w-[50%]">
                        <p>1,000,000 ກີບ</p>
                        <p className="mt-[10px]">2</p>
                        <p className="font-normal text-[12px] mt-[8px]">
                          ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="w-[280px]  bg-white rounded-md text-[14px] text-[#4B5563] p-[16px] pb-[24px] ">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">ເລກຫ້ອງ : A01</p>
                    <div className="w-[70px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] flex justify-center items-center rounded-[4px] ">
                      <p className="text-[#4ADE80] text-[12px]">ຫວ່າງ</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#9CA3AF] mt-[8px] ">
                    ວັນທີ່ສ້າງ :​ 01-10-2024
                  </p>
                  <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[5px] "></div>
                  <div className="flex font-semibold mt-[10px]">
                    <div className="w-[50%]">
                      <p>ຄ່າເຊົ່າ :</p>
                      <p className="mt-[10px]">ຊັ້ນ :</p>
                      <p className="mt-[10px]">ລາຍລະອຽດ :</p>
                    </div>
                    <div className="w-[50%]">
                      <p>1,000,000 ກີບ</p>
                      <p className="mt-[10px]">2</p>
                      <p className="font-normal text-[12px] mt-[8px]">
                        ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[280px]  bg-white rounded-md text-[14px] text-[#4B5563] p-[16px] pb-[24px] ">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">ເລກຫ້ອງ : A01</p>
                    <div className="w-[70px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] flex justify-center items-center rounded-[4px] ">
                      <p className="text-[#4ADE80] text-[12px]">ຫວ່າງ</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#9CA3AF] mt-[8px] ">
                    ວັນທີ່ສ້າງ :​ 01-10-2024
                  </p>
                  <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[5px] "></div>
                  <div className="flex font-semibold mt-[10px]">
                    <div className="w-[50%]">
                      <p>ຄ່າເຊົ່າ :</p>
                      <p className="mt-[10px]">ຊັ້ນ :</p>
                      <p className="mt-[10px]">ລາຍລະອຽດ :</p>
                    </div>
                    <div className="w-[50%]">
                      <p>1,000,000 ກີບ</p>
                      <p className="mt-[10px]">2</p>
                      <p className="font-normal text-[12px] mt-[8px]">
                        ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[280px]  bg-white rounded-md text-[14px] text-[#4B5563] p-[16px] pb-[24px] ">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">ເລກຫ້ອງ : A01</p>
                    <div className="w-[70px] h-[24px] bg-[#DCFCE7] border border-[#4ADE80] flex justify-center items-center rounded-[4px] ">
                      <p className="text-[#4ADE80] text-[12px]">ຫວ່າງ</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#9CA3AF] mt-[8px] ">
                    ວັນທີ່ສ້າງ :​ 01-10-2024
                  </p>
                  <div className="w-full h-[1.5px] bg-[#E5E7EB] mt-[5px] "></div>
                  <div className="flex font-semibold mt-[10px]">
                    <div className="w-[50%]">
                      <p>ຄ່າເຊົ່າ :</p>
                      <p className="mt-[10px]">ຊັ້ນ :</p>
                      <p className="mt-[10px]">ລາຍລະອຽດ :</p>
                    </div>
                    <div className="w-[50%]">
                      <p>1,000,000 ກີບ</p>
                      <p className="mt-[10px]">2</p>
                      <p className="font-normal text-[12px] mt-[8px]">
                        ຄ່າຫ້ອງ 1,000,000 ກີບ <br /> ຄ່າສ່ວນກາງ 500,000ກີບ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default CheckIn;
