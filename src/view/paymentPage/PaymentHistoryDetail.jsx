import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";

const PaymentHistoryDetail = () => {
  return (
    <div>
      <Sidebar>
        <div className="flex justify-center">
          <div>
            <Link to="/payment/history">
              <div className="flex items-center my-[15px] text-[#4B5563] mt-[30px] ">
                <FaChevronLeft className="mr-[5px]" /> ກັບຄືນ
              </div>
            </Link>
            <div className="w-[798px] h-[334px] text-[#4B5563] bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)] rounded-[8px] p-[20px]">
              <div className="flex">
                <div className="w-[60%]">
                  <p className="font-semibold text-[14px] ">ຂໍ້ມູນຫ້ອງ</p>
                </div>
                <div className="w-[40%] flex justify-between px-[40px]">
                  <p className="font-semibold text-[14px] ">ການຊຳລະເງີນ</p>

                  <button className="px-[2px] py-[4px] text-[#00B8D1] flex items-center text-[12px] ">
                    ດາວໂຫລດໃບບິນ{" "}
                    <MdDownloadForOffline className="text-[16px]" />
                  </button>
                </div>
              </div>
              <div className="flex mt-[8px]">
                <div className="w-[60%] text-[12px] flex ">
                  <div className="w-[50%]">
                    <p className="mt-[10px]">ເລກຫ້ອງ : A05</p>
                    <p className="mt-[10px]">ຊັ້ນ : 2</p>
                    <p className="mt-[10px]">ຄ່າເຊົ່າ : 1,000,000 ກີບ</p>
                    <p className="mt-[10px]">ປະຈຳເດືອນ : ຕຸລາ (10 ) 2024</p>
                  </div>
                  <div className="w-[50%]">
                    <p className="mt-[10px]">ເລກຫ້ອງ : A05</p>
                    <p className="mt-[10px]">ຊັ້ນ : 2</p>
                    <p className="mt-[10px]">ຄ່າເຊົ່າ : 1,000,000 ກີບ</p>
                    <p className="mt-[10px]">ປະຈຳເດືອນ : ຕຸລາ (10 ) 2024</p>
                  </div>
                </div>
                <div className="bg-[#9CA3AF] w-[2px] h-[234px] mt-[8px] "></div>
                <div className="w-[40%] px-[40px] mt-[8px]">
                  <div className="w-full h-[234px] bg-[#D9D9D9]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default PaymentHistoryDetail;
