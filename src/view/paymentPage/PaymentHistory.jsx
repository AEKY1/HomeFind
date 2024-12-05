import React from "react";
import { Sidebar } from "../../components/Sidebar";
import TagBarPayment from "./components/TagBarPayment";
import { SearchInput } from "../../components/SearchInput";
import { FaCaretDown } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
import { Table } from "antd";
const PaymentHistory = () => {
  const dataSource = [
    {
      key: "1",
      order: 1,
      roomNum: "A01",
      floor: 2,
    },
  ];

  const columns = [
    {
      title: "ລຳດັບ",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "ເລກຫ້ອງ",
      dataIndex: "roomNum",
      key: "roomNum",
    },
    {
      title: "ຊັ້ນ",
      dataIndex: "floor",
      key: "floor",
    },
    {
      title: "ຄ່າເຊົ່າ",
      dataIndex: "floor",
      key: "floor",
    },
    {
      title: "ຄ່າເຊົ່າ",
      dataIndex: "floor",
      key: "floor",
    },
  ];
  return (
    <div>
      <Sidebar>
        <TagBarPayment>
          <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
          <div className="bg-white mt-[30px] w-full h-full p-[20px] pb-[40px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)] rounded-[8px] text-[#4B5563]">
            <div className="flex items-center justify-between ">
              <SearchInput name="ຄົ້ນຫາເລກຫ້ອງ, ຊື່, ນາມສະກຸນ, ເບີໂທ, ອີເມວ..." />
              <RangePicker />
            </div>
            <div className="mt-[30px]">
              <div className="h-[34px] w-full text-[14px] font-semibold bg-[#E5E7EB] flex justify-center items-center ">
                <p>ທັງໝົດ (10) ລາຍການ</p>
              </div>
              <table className="w-full text-[12px] font-normal text-center ">
                <thead>
                  <tr className="border-b-2">
                    <td className="py-[10px]">ລຳດັບ</td>
                    <td>ເລກຫ້ອງ</td>
                    <td>ຊັ້ນ</td>
                    <td>ຄ່າເຊົ່າ</td>
                    <td>ປະຈຳເດືອນ</td>
                    <td>ຜູ້ເຊົ່າ</td>
                    <td>ເບີໂທ</td>
                    <td>ວັນທີ່ຊຳລະ</td>
                    <td>ການຊຳລະເງີນ</td>
                    <td>ໃບບິນ</td>
                    <td>ລາຍລະອຽດ</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2">
                    <td>1</td>
                    <td>A01</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ຕຸລາ (10 ) 2024</td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td>020 55555555</td>
                    <td className="py-[16px] ">30-10-2024</td>
                    <td>
                      <div className="w-full flex justify-center">
                        <div className="w-[102px] h-[42px] rounded-[2px] bg-[#D9D9D9] "></div>
                      </div>
                    </td>
                    <td>
                      <div className="w-full flex justify-center">
                        <MdDownloadForOffline className="text-[16px] text-[#00B8D1] " />
                      </div>
                    </td>
                    <td>
                      <Link to="/payment/history/detail">
                        <div className="w-full flex justify-center">
                          <button className="border border-[#4ADE80] text-[#4ADE80] w-[88px] h-[28px] rounded-[12px] ">
                            ລາຍລະອຽດ
                          </button>
                        </div>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b-2">
                    <td>2</td>
                    <td>A02</td>
                    <td>2</td>
                    <td>1,000,000 ກີບ </td>
                    <td>ຕຸລາ (10 ) 2024</td>
                    <td>ນາງ ມະນີ ແສງຈັນ</td>
                    <td className="py-[16px] ">020 55555555</td>
                    <td>30-10-2024</td>
                    <td>
                      <div className="w-full flex justify-center">
                        <div className="w-[102px] h-[42px] rounded-[2px] bg-[#D9D9D9] "></div>
                      </div>
                    </td>
                    <td>
                      <div className="w-full flex justify-center">
                        <MdDownloadForOffline className="text-[16px] text-[#00B8D1] " />
                      </div>
                    </td>
                    <td>
                      <div className="w-full flex justify-center">
                        <button className="border border-[#4ADE80] text-[#4ADE80] w-[88px] h-[28px] rounded-[12px] ">
                          ລາຍລະອຽດ
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TagBarPayment>
      </Sidebar>
    </div>
  );
};

export default PaymentHistory;
