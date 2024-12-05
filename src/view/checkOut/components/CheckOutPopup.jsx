import React, { useState } from "react";
import { MdDownloadForOffline } from "react-icons/md";

const CheckOutPopup = ({ onClose }) => {
  const [next, setNext] = useState(false);
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div className="fixed z-30 inset-0 bg-black backdrop-sm bg-opacity-30 flex justify-center items-center ">
        {next === false && confirm === false && (
          <div className="bg-white w-[570px] rounded-md py-[30px] px-[20px] text-[12px] flex justify-center text-[#4B5563] ">
            <div>
              <p className="my-[10px] font-semibold text-[14px] text-center ">
                Check-out
              </p>
              <div className="bg-[#F3F4F6] w-[530px] h-[160px] rounde-[4px] py-[10px] px-[50px] font-semibold ">
                <p>ຂໍ້ມູນການເຊົ່າ</p>
                <div className="w-full flex justify-between mt-[14px] gap-6 ">
                  <div>
                    <p className="font-normal">ເລກຫ້ອງ</p>
                    <p>A01</p>
                  </div>
                  <div>
                    <p className="font-normal">ຄ່າມັດຈຳ</p>
                    <p>500,000 ກີບ</p>
                  </div>
                  <div>
                    <p className="font-normal">ຜູ້ເຊົ່າ</p>
                    <p>ນາງ ຄຳ ແສງຈັນ</p>
                  </div>
                </div>
                <div className="w-full flex justify-between mt-[14px] gap-6">
                  <div>
                    <p className="font-normal">ວັນທີ່ເຂົ້າພັກ</p>
                    <p>01 - 10 - 2024</p>
                  </div>
                  <div>
                    <p className="font-normal">ຄ່າເຊົ່າ</p>
                    <p>1,000,000 ກີບ</p>
                  </div>
                  <div>
                    <p className="font-normal">ເບີໂທ</p>
                    <p>020 55555555</p>
                  </div>
                </div>
              </div>
              <div className="w-full mt-[15px]">
                <p className="pb-[5px] ">ວັນທີ່ Check out</p>
                <input
                  type="text"
                  className="w-full h-[26px] border-2 rounded-[2px] "
                />
              </div>
              <p className="mt-[20px] font-semibold">ການກວດການຫ້ອງ</p>
              <div className="w-full mt-[10px] flex pl-[8px] ">
                <div className="w-[40%] flex flex-col gap-3 ">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ສົ່ງກະແຈຄືນແລ້ວ
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ອະນາໄມຫ້ອງແລ້ວ
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ອຸປະກອນພາຍໃນຫ້ອງຢູ່ຄົບ
                  </div>
                </div>
                <div className="w-[60%] flex flex-col gap-3 ">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ເຄື່ອງໃຊ້ໄຟຟ້າສະພາບປົກກະຕິ
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ຫ້ອງນອນປົກກະຕິ
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ຫ້ອງນ້ຳປົກກະຕິ
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-[80px] ">
                <button
                  onClick={onClose}
                  className="border-2 border-[#9CA3AF] w-[160px] h-[30px] text-[#9CA3AF] rounded-md "
                >
                  ຍົກເລີກ
                </button>
                <button
                  onClick={() => setNext(true)}
                  className="border-2 border-[#00B8D1] w-[160px] h-[30px] text-white bg-[#00B8D1] rounded-md "
                >
                  ຕໍ່ໄປ
                </button>
              </div>
            </div>
          </div>
        )}
        {next === true && confirm === false && (
          <div className="bg-white w-[570px] rounded-md py-[30px] px-[20px] text-[12px] flex justify-center text-[#4B5563] ">
            <div className=" w-full">
              <p className="font-bold text-[16px] text-center ">Check-out</p>
              <p className="text-[14px] font-semibold mt-[20px] ">
                ລາຍການໜີ້ຄ້າງຊຳລະ
              </p>
              <table className="text-center text-[#6B7280] w-full border-2 mt-[10px] ">
                <thead className="bg-[#F3F4F6] text-[14px]">
                  <tr>
                    <th className="border-r-2 py-[5px] ">ລາຍການ</th>
                    <th>ຈຳນວນ</th>
                  </tr>
                </thead>
                <tbody className="text-[12px] ">
                  <tr>
                    <td className="border-r-2 border-b-2 py-[10px]">----</td>
                    <td className="border-b-2">0 ກີບ</td>
                  </tr>
                  <tr>
                    <td className="border-r-2 py-[10px]">----</td>
                    <td>0 ກີບ</td>
                  </tr>
                </tbody>
              </table>
              <div className="w-full border-2 border-t-0 flex justify-between py-[10px] px-[20px]">
                <p>ໜີ້ຄົງຄ້າງລວມ :</p>
                <p>0 ກີບ</p>
              </div>
              <p className="text-[14px] font-semibold mt-[20px]">
                ລາຍລະອຽດເພີ່ມເຕີມ
              </p>
              <textarea
                name=""
                id=""
                className="border-2 w-full h-[84px] mt-[10px] "
              ></textarea>
              <div className="flex justify-center gap-6 mt-[70px] ">
                <button
                  onClick={onClose}
                  className="border-2 border-[#9CA3AF] w-[160px] h-[30px] text-[#9CA3AF] rounded-md "
                >
                  ຍົກເລີກ
                </button>
                <button
                  onClick={() => setConfirm(true)}
                  className="border-2 border-[#00B8D1] w-[160px] h-[30px] text-white bg-[#00B8D1] rounded-md "
                >
                  ຢືນຢັນການ Check out
                </button>
              </div>
            </div>
          </div>
        )}
        {next === true && confirm === true && (
          <div className="bg-white w-[386px] rounded-md py-[30px] px-[20px] text-[12px] flex justify-center text-[#4B5563] ">
            <div className="w-full">
              <div className="flex gap-2 items-center">
                <div className="w-[36px] h-[36px] bg-[#D9D9D9] rounded-full "></div>
                <p className="text-[14px] font-semibold ">ອາພາດເມັ້ນວຽງຈັນ</p>
              </div>
              <div className="w-full flex justify-end mt-[2px] ">
                <button className="px-[2px] py-[4px] text-[#00B8D1] flex items-center text-[12px] ">
                  ດາວໂຫລດໃບບິນ <MdDownloadForOffline className="text-[16px]" />
                </button>
              </div>
              <div className="w-full flex justify-between mt-[2px] my-[10px] ">
                <p>ວັນທີ່ອອກໃບບິນ : 30-10-2024</p>
                <p>ເລກທີ່ໃບບິນ : 000000</p>
              </div>
              <div className="bg-[#E5E7EB] w-full pl-[10px] ">ຂໍ້ມູນລູກຄ້າ</div>
              <div className="w-full flex justify-between mt-[16px] px-[6px] ">
                <div>
                  <p>ຊື່ ແລະ ນາມສະກຸນ</p>
                  <p className="mt-[10px]">ເບີໂທ</p>
                  <p className="mt-[10px]">ວັນທີ່ເຂົ້າພັກ</p>
                  <p className="mt-[10px]">ວັນທີ່ check out</p>
                  <p className="mt-[10px]">ເລກຫ້ອງ</p>
                </div>
                <div className="font-semibold flex flex-col items-center">
                  <p>ນາງ ຄຳ ແສງຈັນ</p>
                  <p className="mt-[10px]">020 55555555</p>
                  <p className="mt-[10px]">01-10-2024</p>
                  <p className="mt-[10px]">30-10-2024</p>
                  <p className="mt-[10px]">A01</p>
                </div>
              </div>
              <div className="bg-[#E5E7EB] w-full pl-[10px] ">ການກວດກາຫ້ອງ</div>
              <div className="w-full mt-[10px] flex pl-[8px] ">
                <div className="w-[50%] flex flex-col gap-3 ">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ຄືນກະແຈແລ້ວ
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ອະນາຫ້ອງໄມແລ້ວ
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ອຸປະກອນພາຍໃນຫ້ອງຢູ່ຄົບ
                  </div>
                </div>
                <div className="w-[50%] flex flex-col gap-3 ">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ເຄື່ອງໃຊ້ໄຟຟ້າສະພາບປົກກະຕິ
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ຫ້ອງນອນປົກກະຕິ
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    ຫ້ອງນ້ຳປົກກະຕິ
                  </div>
                </div>
              </div>
              <div className="bg-[#E5E7EB] w-full pl-[10px] ">
                ລາຍການໜີ້ຄົງຄ້າງ
              </div>
              <div className="flex flex-col items-center mt-[50px] ">
                <p className="mb-[25px]">ຂອບໃຈທີ່ໃຊ້ບໍລິການ</p>
                <button
                  onClick={onClose}
                  className="border-2 border-[#00B8D1] text-[#00B8D1] text-[12px] py-[3px] px-[40px] rounded-md "
                >
                  ປິດ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckOutPopup;
