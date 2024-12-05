import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { MdCurrencyExchange, MdOutlineBedroomParent } from "react-icons/md";
import { TbCalendarX } from "react-icons/tb";
import { RiParentLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Report = () => {
  return (
    <Sidebar>
      <div className="flex justify-center">
        <div className="">
          <p className="mt-[40px] text-[16px] font-semibold ">ລາຍງານທັງໝົດ</p>
          <div className="grid grid-cols-4 gap-6 mt-[25px]">
            <Link to="/report/room">
              <div className="w-[220px] h-[90px] bg-blue-100 rounded-md flex items-center gap-4 pl-5 ">
                <div className="rounded-full bg-blue-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                  <MdOutlineBedroomParent className="text-[20px]" />
                </div>
                <p className="text-[14px] font-semibold">ຫ້ອງເຊົ່າທັງໝົດ</p>
              </div>
            </Link>
            <div className="w-[220px] h-[90px] bg-green-100 rounded-md flex items-center gap-4 pl-5 ">
              <div className="rounded-full bg-green-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                <MdCurrencyExchange className="text-[20px]" />
              </div>
              <p className="text-[14px] font-semibold">ລາຍງານການຊຳລະເເງີນ</p>
            </div>
            <div className="w-[220px] h-[90px] bg-red-100 rounded-md flex items-center gap-4 pl-5 ">
              <div className="rounded-full bg-red-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                <TbCalendarX className="text-[20px]" />
              </div>
              <p className="text-[14px] font-semibold">ລາຍງານການຕິດໜີ້</p>
            </div>
            <div className="w-[220px] h-[90px] bg-yellow-100 rounded-md flex items-center gap-4 pl-5 ">
              <div className="rounded-full bg-yellow-300 text-white w-[40px] h-[40px] flex justify-center items-center">
                <RiParentLine className="text-[20px]" />
              </div>
              <p className="text-[14px] font-semibold">ລາຍງານຜູ້ເຊົ່າ</p>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Report;
