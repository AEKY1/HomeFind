import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SearchInput } from "../../components/SearchInput";
import { RiParentLine } from "react-icons/ri";
import {
  MdOutlineBedroomParent,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { TbCalendarX, TbDoorEnter } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";
import { CiLogin, CiLogout } from "react-icons/ci";
import ReactECharts from "echarts-for-react";

export const Main = () => {
  const circleChart = {
    tooltip: {
      trigger: "",
    },
    legend: {
      bottom: "5%",
      left: "0%",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { name: "ຫ້ອງວ່າງ10 ຫ້ອງ", value: 10 },
          { name: "ຫ້ອງເຕັມ 10 ຫ້ອງ", value: 10 },
        ],
      },
    ],
  };
  const chart = {
    dataset: [
      {
        dimensions: ["name", "age", "profession", "score", "date"],
        source: [
          ["Hannah ", 41, "Engineer", 314, "2011-02-12"],
          ["Zhao ", 20, "Teacher", 351, "2011-03-01"],
          ["Jasmin  ", 52, "Musician", 287, "2011-02-14"],
          ["Li Lei", 37, "Teacher", 219, "2011-02-18"],
          ["Karle ", 25, "Engineer", 253, "2011-04-02"],
          ["Mia ", 71, "Engineer", 165, "2011-03-19"],
          ["Böhm ", 36, "Musician", 318, "2011-02-24"],
          ["Han ", 67, "Engineer", 366, "2011-03-12"],
        ],
      },
      {
        transform: {
          type: "sort",
          config: { dimension: "score", order: "desc" },
        },
      },
    ],
    xAxis: {
      type: "category",
      axisLabel: { interval: 0, rotate: 0 },
    },
    yAxis: {},
    series: {
      type: "bar",
      encode: { x: "name", y: "score" },
      datasetIndex: 1,
    },
  };
  return (
    <div>
      <Sidebar>
        <div className="my-[30px] mx-[100px] text-[#4B5563] text-[12px] ">
          <p className="text-[16px] font-semibold">ສະບາຍດີ, Sunny</p>
          <p>ຍິນດີຕອນຮັບເຂົ້າສູ່ລະບົບຈັດການ Home Find Management</p>
          <div className="grid grid-cols-4 gap-4 mt-[30px] ">
            <div className="w-[240px] h-[120px] bg-green-100 rounded-md ">
              <div className="flex items-center gap-5 pt-[20px] pl-[16px] ">
                <div className="rounded-full bg-green-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <RiParentLine className="text-[20px]" />
                </div>
                <p>ຜູ້ເຊົ່າທັງໝົດ</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-[16px] font-semibold ml-[20px] mt-[10px]">
                  ທັງໝົດ 100 (ຄົນ)
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[120px] bg-blue-100 rounded-md ">
              <div className="flex items-center gap-5 pt-[20px] pl-[16px] ">
                <div className="rounded-full bg-blue-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <MdOutlineBedroomParent className="text-[20px]" />
                </div>
                <p>ຫ້ອງເຊົ່າທັງໝົດ</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-[16px] font-semibold ml-[20px] mt-[10px]">
                  ທັງໝົດ 20 (ຫ້ອງ)
                </p>
              </div>
            </div>

            <div className="w-[240px] h-[120px] bg-amber-100 rounded-md ">
              <div className="flex items-center gap-5 pt-[20px] pl-[16px] ">
                <div className="rounded-full bg-amber-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <TbDoorEnter className="text-[20px]" />
                </div>
                <p>ການຈອງທັງໝົດ</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-[16px] font-semibold ml-[30px] mt-[10px]">
                  ທັງໝົດ 2 (ລາຍການ)
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[120px] bg-pink-100 rounded-md ">
              <div className="flex items-center gap-5 pt-[20px] pl-[16px] ">
                <div className="rounded-full bg-pink-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <FiFileText className="text-[20px]" />
                </div>
                <p>ສັນຍາເຊົ່າທັງໝົດ</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-[16px] font-semibold ml-[30px] mt-[10px]">
                  ທັງໝົດ 1 (ລາຍການ)
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[120px] bg-red-100 rounded-md ">
              <div className="flex items-center gap-5 pt-[20px] pl-[16px] ">
                <div className="rounded-full bg-red-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <TbCalendarX className="text-[20px]" />
                </div>
                <p>ການຕິດໜີ້ທັງໝົດ</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-[16px] font-semibold ml-[30px] mt-[10px]">
                  ທັງໝົດ 1 (ລາຍການ)
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[120px] bg-teal-100 rounded-md ">
              <div className="flex items-center gap-5 pt-[20px] pl-[16px] ">
                <div className="rounded-full bg-teal-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <CiLogin className="text-[20px]" />
                </div>
                <p>ການ check-in</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-[16px] font-semibold ml-[30px] mt-[10px]">
                  ທັງໝົດ 2 (ລາຍການ)
                </p>
              </div>
            </div>

            <div className="w-[240px] h-[120px] bg-purple-100 rounded-md ">
              <div className="flex items-center gap-5 pt-[20px] pl-[16px] ">
                <div className="rounded-full bg-purple-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <CiLogout className="text-[20px]" />
                </div>
                <p>ການ check-out</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-[16px] font-semibold ml-[30px] mt-[10px]">
                  ທັງໝົດ 1 (ລາຍການ)
                </p>
              </div>
            </div>
            <div className="w-[240px] h-[120px] bg-orange-100 rounded-md ">
              <div className="flex items-center gap-5 pt-[20px] pl-[16px] ">
                <div className="rounded-full bg-orange-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <MdOutlineManageAccounts className="text-[20px]" />
                </div>
                <p>ສິດຜູ້ໃຊ້ທັງໝົດ</p>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-[16px] font-semibold ml-[5px] mt-[10px]">
                  ທັງໝົດ 2 (ຄົນ)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[30px] mx-[80px] text-[#4B5563] text-[12px] flex gap-5 ">
          <div className="w-[310px]  bg-white rounded-md p-[10px] ">
            <p className="text-[#4B5563] text-[14px]">ຫ້ອງຫວ່າງ / ຫ້ອງເຕັມ</p>
            <ReactECharts option={circleChart} />
          </div>
          <div className="flex-grow bg-white rounded-md p-[20px] ">
            <div className="flex justify-between items-center font-semibold">
              <p className="ml-[25px]">ລາຍຮັບ</p>
              <p>ປະຈຳເດືອນ ຕຸລາ (10) - ພະຈິກ (11) ປີ 2024</p>
              <p>ເລືອກລາຍການສະແດງ</p>
            </div>
            <ReactECharts option={chart} />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};
