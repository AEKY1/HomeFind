import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar";
import { SearchInput } from "../../components/SearchInput";
import { ButtonAdd } from "../../components/ButtonAdd";
import { TableBooker } from "./components/TableBooker";

export const Booker = () => {
  return (
    <div>
      <Sidebar>
        <div className="m-[30px]">
          <div className="mt-[40px] flex justify-between items-center">
            <SearchInput name="ຄົ້ນຫາເລກຫ້ອງ, ຊື່, ນາມສະກຸນ, ເບີໂທ, ອີເມວ..." />
            <ButtonAdd name="ເພີ່ມຜູ້ເຊົ່າ" />
          </div>
          <div className="text-[12px] mt-[15px] text-[#4B5563]">
            ທັງໝົດ 10ຄົນ
          </div>
          <TableBooker />
        </div>
      </Sidebar>
    </div>
  );
};
