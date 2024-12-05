import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { PiCaretLeftLight } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa6";
import { BtDelete } from "../../components/BtDelete";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ManageRoomDetail = () => {
  return (
    <div>
      <Sidebar>
        <div className="w-full flex justify-center">
          <div className="mt-[30px]">
            <Link to="/manageRoom">
              <p className="flex items-center gap-3 text-[16px] text-[#4B5563] ">
                <PiCaretLeftLight /> ເພີ່ມຫ້ອງ
              </p>
            </Link>
            <div className="w-[688px] h-[880px] rounded-[8px] bg-white border-2 mt-[10px] p-[30px] text-[#4B5563] text-[12px] ">
              <div className="flex gap-3">
                <div> 
                  <p className="mb-[2px]">
                    ຄຳນຳໜ້າເລກຫ້ອງ{" "}
                    <span className="text-[#9CA3AF]">(ຖ້າມີ)</span>
                  </p>
                  <input
                    type="text"
                    placeholder="ຄວນເປັນຕົວເລກ ຫລື ອັກສອນພາສາອັງກິດ"
                    className="border border-[#D1D5DB] w-[200px] h-[30px] rounded-[4px] text-[10px] pl-[10px] focus:outline-none "
                  />
                </div>
                <div>
                  <p className="mb-[2px]">ເລກຫ້ອງເລີ່ມຕົ້ນ</p>
                  <input
                    type="text"
                    placeholder="ເພີ່ມເລກຫ້ອງ"
                    className="border border-[#D1D5DB] w-[200px] h-[30px] rounded-[4px] text-[10px] pl-[10px] focus:outline-none "
                  />
                </div>
                <div>
                  <p className="mb-[2px]">ເລກຫ້ອງສິ້ນສຸດ</p>
                  <input
                    type="text"
                    placeholder="ເພີ່ມເລກຫ້ອງ"
                    className="border border-[#D1D5DB] w-[200px] h-[30px] rounded-[4px] text-[10px] pl-[10px] focus:outline-none "
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-[30px]">
                <div>
                  <p className="mb-[2px]">ຄ່າເຊົ່າ</p>
                  <div className="w-[306px] relative">
                    <input
                      type="text"
                      placeholder="0"
                      className="border border-[#D1D5DB] w-[306px] h-[30px] rounded-[4px] text-[10px] pl-[10px] focus:outline-none "
                    />
                    <button className="w-[50px] h-[30px] absolute top-0 right-0 flex justify-center items-center gap-1 border border-[#D1D5DB] ">
                      ກີບ
                      <FaCaretDown />
                    </button>
                  </div>
                </div>
                <div>
                  <p className="mb-[2px]">ຄ່າມັດຈຳ</p>
                  <input
                    type="text"
                    placeholder=""
                    className="border border-[#D1D5DB] w-[306px] h-[30px] rounded-[4px] text-[10px] pl-[10px] focus:outline-none "
                  />
                </div>
              </div>
              <div className="flex mt-[30px] gap-3">
                <div>
                  <p className="mb-[2px]">ຂະໜາດຫ້ອງ</p>
                  <input
                    type="text"
                    placeholder=""
                    className="border border-[#D1D5DB] w-[306px] h-[30px] rounded-[4px] text-[10px] pl-[10px] focus:outline-none "
                  />
                </div>
                <div>
                  <p className="mb-[2px]">ຊັ້ນ</p>
                  <div className="w-[306px] relative">
                    <input
                      type="number"
                      placeholder=""
                      className="border border-[#D1D5DB] w-[306px] h-[30px] rounded-[4px] text-[10px] pl-[10px] focus:outline-none "
                    />
                    <button className="w-[40px] h-[30px] absolute top-0 right-0 flex justify-center items-center">
                      <FaCaretDown />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex mt-[30px]">
                <div>
                  <p className="mb-[2px]">ລາຍລະອຽດ</p>
                  <textarea
                    placeholder="ຂໍ້ຄວາມ.... "
                    className="border border-[#D1D5DB] w-[625px] h-[118px] rounded-[4px] text-[10px] pl-[10px] pt-[10px] focus:outline-none "
                    name=""
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="mt-[30px]">
                <button className="w-full h-[34px] bg-[#00B8D1] text-white rounded-[4px] ">
                  ເພີ່ມ
                </button>
              </div>
              <div className="bg-[#E5E7EB] w-full h-[1px] mt-[20px]"></div>
              <table className="w-full border-collapse border border-[#D9D9D9] ">
                <thead>
                  <tr className="h-[34px] text-center text-[12px] text-[#374151] bg-[#E5E7EB] ">
                    <th class="border border-[#D9D9D9]  ">ເລກຫ້ອງ</th>
                    <th class="border border-[#D9D9D9]">ຊັ້ນ</th>
                    <th class="border border-[#D9D9D9]">ຄ່າເຊົ່າ</th>
                    <th class="border border-[#D9D9D9]">ຂະໜາດ</th>
                    <th class="border border-[#D9D9D9]">ລາຍລະອຽດ</th>
                    <th class="border border-[#D9D9D9]">ຈັດການ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td class="border border-[#D9D9D9] py-[30px]">A01</td>
                    <td class="border border-[#D9D9D9]">2</td>
                    <td class="border border-[#D9D9D9]">2,000,000 ກີບ</td>
                    <td class="border border-[#D9D9D9]">24 ຕຣ.ມ</td>
                    <td class="border border-[#D9D9D9]">
                      ຄ່າຫ້ອງ 1,000,000 ກີບ <br />
                      ຄ່າສ່ວນກາງ 500,000ກີບ <br />
                      ຄ່າຊ້ອມບຳລຸງ 500,000ກີບ
                    </td>
                    <td class="border border-[#D9D9D9]">
                      <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
                    </td>
                  </tr>
                  <tr className="text-center ">
                    <td class="border border-[#D9D9D9] py-[30px]">A02</td>
                    <td class="border border-[#D9D9D9] px-[20px]">2</td>
                    <td class="border border-[#D9D9D9]">2,000,000 ກີບ</td>
                    <td class="border border-[#D9D9D9]">24 ຕຣ.ມ</td>
                    <td class="border border-[#D9D9D9]">
                      ຄ່າຫ້ອງ 1,000,000 ກີບ <br />
                      ຄ່າສ່ວນກາງ 500,000ກີບ <br />
                      ຄ່າຊ້ອມບຳລຸງ 500,000ກີບ
                    </td>
                    <td class="border border-[#D9D9D9]">
                      <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td class="border border-[#D9D9D9] py-[30px]">A03</td>
                    <td class="border border-[#D9D9D9]">2</td>
                    <td class="border border-[#D9D9D9]">2,000,000 ກີບ</td>
                    <td class="border border-[#D9D9D9]">24 ຕຣ.ມ</td>
                    <td class="border border-[#D9D9D9]">
                      ຄ່າຫ້ອງ 1,000,000 ກີບ <br />
                      ຄ່າສ່ວນກາງ 500,000ກີບ <br />
                      ຄ່າຊ້ອມບຳລຸງ 500,000ກີບ
                    </td>
                    <td class="border border-[#D9D9D9]">
                      <BtDelete name="ລົບ" icon={<FaRegTrashAlt />} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center gap-4 mt-[30px]">
                <button className="w-[306px] h-[34px] border border-[#9CA3AF] text-[#9CA3AF] text-[14px] rounded-[4px] ">
                  ຍົກເລີກ
                </button>
                <button className="w-[306px] h-[34px] border bg-[#00B8D1] text-white text-[14px] rounded-[4px] ">
                  ບັນທືກ
                </button>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
