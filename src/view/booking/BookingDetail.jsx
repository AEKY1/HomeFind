import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const BookingDetail = () => {
  return (
    <div>
      <Sidebar>
        <div className="flex justify-center m-[10px]  ">
          <div>
            <Link to="/booking">
              <div className="flex items-center my-[10px] text-[#4B5563]">
                <FaArrowLeftLong className="mr-[5px]" /> ລາຍລະອຽດ
              </div>
            </Link>
            <div className="w-[692px] h-[592px] bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)] rounded-[8px]">
              <div className="flex justify-between p-[20px] h-full ">
                <div className="flex flex-col text-[12px] ml-[20px] w-[50%]  ">
                  <p className="text-[#374151] mb-[30px] font-semibold text-[14px] ">
                    ຂໍ້ມູນຜູ້ຈອງ
                  </p>
                  <p className="text-[#4B5563] mb-[15px]  ">ຊື່ : ຕາຕູ່ນ</p>
                  <p className="text-[#4B5563] mb-[15px]  ">
                    ນາມສະກຸນ : ນັນທະໄຊ
                  </p>
                  <p className="text-[#4B5563] mb-[15px]  ">
                    ເບີໂທ : 020 55555555
                  </p>
                  <p className="text-[#4B5563] mb-[15px]  ">
                    ວັນທີຈອງ : 10-10-2024
                  </p>
                </div>
                <div className="bg-[#D9D9D9] w-[1.5px] h-full"></div>
                <div className="w-[50%] text-[12px] pl-[20px] ">
                  <div className="w-full flex justify-between items-center ">
                    <div className="text-[#374151] h-full font-semibold text-[14px] ">
                      ຂໍ້ມູນຫ້ອງ
                    </div>
                    <div>
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
                  </div>
                  <div className="mt-[30px] flex">
                    <div className="bg-[#D9D9D9] w-[148px] h-[92px] mr-[10px] rounded-[4px]"></div>
                    <div className="bg-[#D9D9D9] w-[148px] h-[92px] rounded-[4px]"></div>
                  </div>
                  <div className="mt-[10px] flex">
                    <div className="bg-[#D9D9D9] w-[148px] h-[92px] mr-[10px] rounded-[4px]"></div>
                    <div className="bg-[#D9D9D9] w-[148px] h-[92px] rounded-[4px]"></div>
                  </div>
                  <div className="mt-[30px]">
                    <p className="text-[#4B5563] mb-[15px]  ">
                      ຊື່ : ອາພາດເມັ້ນສີບຸນເຮືອງ
                    </p>
                    <p className="text-[#4B5563] mb-[15px]  ">
                      ທີຢູ່ : ສິບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ
                    </p>
                    <p className="text-[#4B5563] mb-[15px]  ">
                      ເບີໂທ : 020 55555555
                    </p>
                    <p className="text-[#4B5563] mb-[15px]  ">
                      ປະເພດຄ່າເຊົ່າ : ລາຍປີ
                    </p>
                    <p className="text-[#4B5563] mb-[15px]  ">
                      ລາຄາ : 20,000,000 ກີບ/ປີ
                    </p>
                    <p className="text-[#4B5563] mb-[15px]  ">ຄ່ານາຍໜ້າ :</p>
                    <div className="text-[#4B5563] mb-[15px] flex  ">
                      <p className="w-[70px]">ລາຍລະອຽດ:</p>
                      <span>
                        ຫ້ອງແຖວ2ຊັ້ນ ມີ 3ຫ້ອງນອນ 2 ຫ້ອງນ້ຳ ມີ2ຊັ້ນ
                        <br />
                        ເໝາະແກ່ການເຊົ່າເປັນຫ້ອງການ
                        <br />
                        ໃຜທີ່ກຳລັງຕ້ອງການຫ້ອງທາງໃກ້ແຄມທາງໃຫຍ່ແມ່ນກົດຈອງໄດ້ເລີຍ.
                      </span>
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
