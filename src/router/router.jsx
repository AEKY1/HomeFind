import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Booker } from "../view/booker/Booker";
import { Booking } from "../view/booking/Booking";
import { Main } from "../view/main/Main";
import { BookingDetail } from "../view/booking/BookingDetail";
import { BookerDetail } from "../view/booker/BookerDetail";
import { ManageRoom } from "../view/roompage/ManageRoom";
import { ManageRoomDetail } from "../view/roompage/ManageRoomDetail";
import { LeaseRoom } from "../view/roompage/LeaseRoom";
import { LeaseRoomDetail } from "../view/roompage/LeaseRoomDetail";
import { CheckPayment } from "../view/paymentPage/CheckPayment";
import { ConfirmPayment } from "../view/paymentPage/ConfirmPayment";
import PaymentHistory from "../view/paymentPage/PaymentHistory";
import PaymentLink from "../view/paymentPage/PaymentLink";
import PaymentHistoryDetail from "../view/paymentPage/PaymentHistoryDetail";
import Agreement from "../view/agreement/Agreement";
import AddAgreement from "../view/agreement/AddAgreement";
import AgreementDetail from "../view/agreement/AgreementDetail";
import CheckIn from "../view/checkin/CheckIn";
import CheckOut from "../view/checkOut/CheckOut";
import CheckInDetail from "../view/checkIn/CheckInDetail";
import ReportProblem from "../view/reportProblem/ReportProblem";
import ProblemHistory from "../view/reportProblem/ProblemHistory";
import Report from "../view/report/Report";
import ReportAllRoom from "../view/report/ReportAllRoom";
const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/booking/detail",
      element: <BookingDetail />,
    },
    {
      path: "agreement",
      element: <Agreement />,
    },
    {
      path: "agreement/add",
      element: <AddAgreement />,
    },
    {
      path: "agreement/detail",
      element: <AgreementDetail />,
    },
    {
      path: "/manageRoom",
      element: <ManageRoom />,
    },
    {
      path: "/manageRoom/addRoom",
      element: <ManageRoomDetail />,
    },
    {
      path: "/manageRoom/showLeaseRoom",
      element: <LeaseRoom />,
    },
    {
      path: "/manageRoom/addLeaseRoom",
      element: <LeaseRoomDetail />,
    },
    {
      path: "/booker",
      element: <Booker />,
    },
    {
      path: "/booker/detail",
      element: <BookerDetail />,
    },
    {
      path: "/payment",
      element: <CheckPayment />,
    },
    {
      path: "payment/confirm",
      element: <ConfirmPayment />,
    },
    {
      path: "payment/history",
      element: <PaymentHistory />,
    },
    {
      path: "payment/history/detail",
      element: <PaymentHistoryDetail />,
    },
    {
      path: "payment/link",
      element: <PaymentLink />,
    },
    {
      path: "reportProblem",
      element: <ReportProblem />,
    },
    {
      path: "reportProblem/history",
      element: <ProblemHistory />,
    },
    {
      path: "checkIn",
      element: <CheckIn />,
    },
    {
      path: "checkIn/detail",
      element: <CheckInDetail />,
    },
    {
      path: "checkOut",
      element: <CheckOut />,
    },
    {
      path: "report",
      element: <Report />,
    },
    {
      path: "report/room",
      element: <ReportAllRoom />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default RouterPath;
