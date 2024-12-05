import React from "react";
import { TagBarActive } from "../../../components/TagBarActive";
import { useLocation } from "react-router-dom";

const TagBarPayment = ({ children }) => {
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
  const tagList = [
    {
      title: "ຫ້ອງທີ່ຖືກເຊົ່າທັງໝົດ",
      path: "/payment",
    },
    {
      title: "ລໍຖ້າອະນຸມັດ ( 2 )",
      path: "/payment/confirm",
    },
    {
      title: "ປະຫວັດການຊຳລະເງິນ",
      path: "/payment/history",
    },
    {
      title: "ຈັດການລີ້ງ",
      path: "/payment/link",
    },
  ];
  return (
    <div className="m-[30px]">
      <div className="text-[#9CA3AF] text-[14px] flex ">
        {tagList.map((item, index) => (
          <TagBarActive
            key={index}
            name={item.title}
            isActive={checkPathTag(item.path)}
            path={item.path}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default TagBarPayment;
