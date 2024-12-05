import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar";
import { SearchInput } from "../../components/SearchInput";

import ViewSwitcher from "../../components/ViewSwitcher";
import { TableBooking } from "./components/TableBooking";
import { TableBooker } from "../booker/components/TableBooker";
import BookingHistory from "./BookingHistory";

export const Booking = () => {
  const [viewSwitcher, setViewSwitcher] = useState("main1");
  return (
    <div>
      <Sidebar>
        <div className="m-[30px]">
          <div className="text-[#9CA3AF] tetx-[14px] flex ">
            <ViewSwitcher
              options={[
                { label: "ລາຍການຈອງ", value: "main1" },
                { label: "ປະຫວັດການຈອງ", value: "main2" },
              ]}
              defaultValue={viewSwitcher}
              onChange={(value) => setViewSwitcher(value)}
            />
          </div>
          <div className="bg-[#D9D9D9] w-full h-[1.5px]"></div>
          {viewSwitcher === "main1" && (
            <>
              <div className="mt-[40px] flex ">
                <SearchInput name="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ສະຖານະ" />
              </div>
              <TableBooking />
            </>
          )}
          {viewSwitcher === "main2" && <>
          <BookingHistory/></>}
        </div>
      </Sidebar>
    </div>
  );
};
