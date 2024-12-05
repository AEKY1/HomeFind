import React from "react";
import { SearchInput } from "../../components/SearchInput";
import { Sidebar } from "../../components/Sidebar";
import { FaCaretDown } from "react-icons/fa6";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Link, useLocation } from "react-router-dom";
import { TagBarActive } from "../../components/TagBarActive";
import { ListRoom } from "./components/ListRoom";

export const ManageRoom = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  function checkPathTag(path) {
    if (pathname == path) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }

  return (
    <div>
      {" "}
      <Sidebar>
        <div className="m-[50px] ml-[120px] ">
          <div className="text-[#9CA3AF] text-[14px] flex ">
            <div>
              <TagBarActive
                name="ຫ້ອງທັງໝົດ"
                isActive={true}
                path="/manageRoom"
              />
            </div>

            <div>
              <TagBarActive
                name="ປ່ອຍເຊົ່າ"
                isActive={false}
                path="/manageRoom/showLeaseRoom"
              />
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
          <div className="mt-[20px] flex justify-between items-center">
            <div className="flex gap-4">
              <SearchInput name="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ຊັ້ນ" />
              <button className="flex justify-center items-center w-[122px] h-[40px] border border-[#00B8D1] rounded-[18px] gap-2 bg-white ">
                <p className="text-[#00B8D1] text-[14px]">ເລືອກສະຖານະ</p>{" "}
                <FaCaretDown className="text-[#6B7280] " />
              </button>
            </div>
            <div className="flex gap-3">
              <Link to="/manageRoom/addLeaseRoom">
                <div className="flex items-center">
                  <button className="w-[114px] h-[40px] bg-[#00B8D1] rounded-[18px] text-white text-[14px] ">
                    ການປ່ອຍເຊົ່າ
                  </button>
                </div>
              </Link>
              <Link to="/manageRoom/addRoom">
                <ButtonAdd name="ເພີ່ມຫ້ອງ" />
              </Link>
            </div>
          </div>
          <p className="text-[#4B5563] text-[12px] mt-[20px] ">
            ທັງໝົດ 10 ຫ້ອງ
          </p>
          <ListRoom />
        </div>
      </Sidebar>
    </div>
  );
};
