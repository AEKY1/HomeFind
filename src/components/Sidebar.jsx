import React from "react";
import { MdOutlineDashboard, MdOutlineReportProblem } from "react-icons/md";
import { TbDoorEnter, TbReportSearch } from "react-icons/tb";

import { MdOutlineBedroomParent } from "react-icons/md";
import { TbCalendarX } from "react-icons/tb";
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { RiParentLine } from "react-icons/ri";
import { Navbar } from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { MenuActive } from "./MenuActive";
import { FiFileText } from "react-icons/fi";
import { CiLogin, CiLogout } from "react-icons/ci";

export const Sidebar = ({ children }) => {
  console.log("this is sidebar");
  const location = useLocation();
  const { hash, pathname, search } = location;
  console.log(pathname);

  function checkPath(path) {
    let Paths = pathname.split("/");
    let firstPath = "/" + Paths[1];
    if (firstPath == path) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
  const menuList = [
    {
      icon: <MdOutlineDashboard />,
      name: "ໜ້າຫລັກ",
      path: "/",
    },
    {
      icon: <TbDoorEnter />,
      name: "ຈັດການການຈອງ",
      path: "/booking",
    },
    {
      icon: <FiFileText />,
      name: "ຈັດການສັນຍາເຊົ່າ",
      path: "/agreement",
    },
    {
      icon: <MdOutlineBedroomParent />,
      name: "ຈັດການຫ້ອງ",
      path: "/manageRoom",
    },
    {
      icon: <RiParentLine />,
      name: "ຈັດການຜູ້ເຊົ່າ",
      path: "/booker",
    },
    {
      icon: <MdCurrencyExchange />,
      name: "ຈັດການການຊຳລະເງີນ",
      path: "/payment",
    },
    {
      icon: <TbCalendarX />,
      name: "ຈັດການການຕິດໜີ້",
      path: "/f",
    },
    {
      icon: <MdOutlineReportProblem />,
      name: "ແຈ້ງບັນຫາ",
      path: "/reportProblem",
    },
    {
      icon: <CiLogin />,
      name: "Check-in",
      path: "/checkIn",
    },
    {
      icon: <CiLogout />,
      name: "Check-out",
      path: "/checkOut",
    },
    {
      icon: <TbReportSearch />,
      name: "ລາຍງານ",
      path: "/report",
    },
    {
      icon: <MdOutlineManageAccounts />,
      name: "ຈັດການສິດຜູ້ເຂົ້າໃຊ້",
      path: "/f",
    },
  ];
  return (
    <div className="flex w-full h-full">
      <div className="w-[300px]"></div>
      <div className="w-[300px] h-screen bg-gradient-to-r from-[#00B8D1] to-[#005E6B] text-white text-[16px] fixed z-20">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center items-center text-[16px] text-white">
              <div className="w-[40px] h-[40px] rounded-[10px] my-[30px] mr-[10px]">
                <img src="./../public/Images/logo_homeFind.png" alt="" />
              </div>
              Home Find Management
            </div>
            <div className="w-[235px] h-[1px] bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[20px]">
          {menuList.map((item, index) => (
            <MenuActive
              key={index}
              name={item.name}
              icon={item.icon}
              isActive={checkPath(item.path)}
              path={item.path}
            />
          ))}
        </div>
      </div>
      <div className="flex-grow bg-slate-100 min-h-screen pb-[200px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
