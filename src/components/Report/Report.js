import axios from "axios";
import { React, useState, Fragment, useRef, useContext } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import config from "../../config";
import ReactToPrint from "react-to-print";
//import {jsPDF} from 'jspdf'
import jsonData from "../Analytics/PaymentMode/payment.json";
import { toast } from "react-toastify";
import UserSessionContext from "../../contexts/UserSessionContext";
import { Dialog, Transition } from "@headlessui/react";
import { Table1 } from "./Table/Table1";
import { Table2 } from "./Table/Table2";
import { Table3 } from "./Table/Table3";
import { Table4 } from "./Table/Table4";
import { Table5 } from "./Table/Table5";
import CompanyContext from "../../contexts/CompanyContext";
const Report = () => {
  const companyContext = useContext(CompanyContext);
  const userSessionContext = useContext(UserSessionContext)
  console.log(companyContext.company.name);
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState([]);

  const componentRef = useRef(null);

  const [records, setRecords] = useState( []);
  const [data, setData] = useState(records);
  const handleOpen = (e, i) => {
    console.log(companyContext.company);
    setOpen(true);

    setModal(...[i]);
  };
  console.log(companyContext.company);
  const closeModal = () => {
    setOpen(false);
  };
  //   const createDownLoadData =() =>{
  //     const doc = new jsPDF()

  //     const body = data.slice(1,data.length)

  //     // doc.autoTable({
  //     //     head : [data[0]],
  //     //     body : body
  //     // })
  //     doc.save('hello');
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    let _data = {
      dayendDate: format(startDate, "yyyy-MM-dd"),
      companyId: companyContext.company.id,
    };

  

    const fig = {
      headers: {
        Authorization: userSessionContext.token,
      },
    };

    axios
      .post(`${config.APP_CONFIG}/Sales/POS/dayendReport/api`, _data, fig)
      .then((res) => {
        if (res.data.status_code === 200) {
          setRecords(res.data.msg);
          console.log(res.data.msg);
        } else {
          setRecords([]);
        }
      })
      .catch((err) => {
        toast.error("Error");

        //setRecords([]);
      });
  };

  return (
    <>
      <form
        className="w-1/1 bg-white p-6 rounded shadow-md justify-center items-center mb-8"
        onSubmit={handleSubmit}
      >
        <div className="flex space-x-2">
          <div className="w-3/4">
            <DatePicker
              name="dateFrom"
              label="DateFrom"
              selected={startDate}
              value={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full py-2 px-3 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="w-1/4">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="grid col-1 bg-white h-90 shadow-sm">
        <p class="text-xl"> Recent Day Book</p>

        <div class="overflow-auto rounded-lg shadow hidden md:block">
          <table class="w-full">
            <thead class="bg-gray-50 border-b-1 border-gray-200">
              <tr>
                <th class="w-15 p-1 text-sm font-semibold tracking-wide text-left">
                  No.
                </th>
                <th class="w-25 p-1 text-sm font-semibold tracking-wide text-left">
                  Date
                </th>
                <th class="w-15 p-1 text-sm font-semibold tracking-wide text-left">
                  Bills
                </th>
                <th class="w-20 p-1 text-sm font-semibold tracking-wide text-left">
                  Opening blc
                </th>
                <th class="w-25 p-1 text-sm font-semibold tracking-wide text-left">
                  Cash Drop
                </th>
                <th class="w-25 p-1 text-sm font-semibold tracking-wide text-left">
                  Closing
                </th>
                <th class="w-25 p-1 text-sm font-semibold tracking-wide text-left">
                  Credit
                </th>
                <th class="w-24 p-1 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              {records.length > 0
                ? records.map((i, index) => {
                    console.log(i);
                    return (
                      <tr className="">
                        <td className="p-3 text-sm text-">{index + 1} </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                         { format(new Date(i.createdAt), "yyyy/MM/dd")}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {i.b1}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {i.openingBalance}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {i.cashDrop}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {i.closing}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {i.creditAmount}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                          <button onClick={(e) => handleOpen(e, i)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                            >
                              {" "}
                              <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                            </svg>
                          </button>
                          <button class="p-3">
                            <i class="fa-solid fa-download"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1  gap-15 md:hidden text place-content-center overflow-auto ">
          {records &&
            records.map((item) => (
              
              <div
                key={item.id}
                class="bg-white space-y-3 p-4 rounded-lg shadow  p-4 m-4 text-center overflow-auto "
              >
                <div class="flex items-center space-x-5 text-sm">
                  <div>
                    <a href="#" class="text-blue-500 hover:underline">          
                      ID:
                      {item.id}
                    </a>
                  </div>
                  <div class="text-gray-500">Date: { format(new Date(item.createdAt), "yyyy/MM/dd")}</div>
                  <div>Bills No:{item.totalBillNo}</div>
                 
                </div>
                <div class="flex items-center space-x-5 text-sm">
                  <div class="text-sm text-gray-700">
                    Op Balance:{item.openingBalance}
                  </div>
                  <div class="text-sm font-medium text-black">
                   
                    Closing: {item.closing}
                  </div>
                </div>
                <div class="flex items-center space-x-5 text-sm">
                  <div class="text-sm font-medium text-black">
                    
                    Cash Drop: {item.cashDrop}
                  </div>

                  <div class="text-sm font-medium text-black">
                   
                    Credit:{item.creditAmount}
                  </div>
                  <button class="p-3">
                            <i class="fa-solid fa-download"></i>
                          </button>

                  
                </div>
              </div>
            ))}
        </div>

        <Dialog open={open} className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="  rounded-2xl bg-white align-middle shadow-xl ">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  DayEnd Date
                </Dialog.Title>
                <div className=" flex flex-end px-5  w-10 h-10 mt-5">
                  <ReactToPrint
                    trigger={() => (
                      <button>
                        <i class="fa-solid fa-print"></i>
                      </button>
                    )}
                    content={() => componentRef.current}
                  />
                </div>
                <div ref={componentRef} className="mt-5">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "Bold",
                      
                    }}
                  >
                    <p className="font-bold text-gray-800">
                      {companyContext.company.name || ""}
                    </p>
                    <p className="font-bold text-gray-800">
                      {companyContext.company.address}
                    </p>
                    <p className="font-bold text-gray-800">
                      {companyContext.company.panNo}
                    </p>
                  </div>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "25px",
                      fontWeight: "Bold",
                      margin:'0px',
                      padding:'0px'
                    }}
                  >
                    Close Counter Report
                  </span>

                  <div className="grid  grid-cols-1 md:grid-cols-2 gap-1">
                    <div className="px-8">
                      <Table1 modal={modal} />
                    </div>
                    <div className="px-8">
                      <Table2 modal={modal} />
                    </div>
                    <div className="px-8">
                      <Table3 modal={modal} />
                    </div>
                    <div className="px-8">
                      <Table4 modal={modal} />
                    </div>
                    <div className="px-8">
                      <Table5 modal={modal} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "35px",
                      alignContent: "center",
                    }}
                  >
                    <div style={{ width: "200px", textAlign: "center" }}>
                      <span>-------------------</span>
                      <br />

                      <span>Prepared By:</span>
                      <br />
                    </div>
                    <div style={{ width: "200px", textAlign: "center" }}>
                      <span>-------------------</span>
                      <br />
                      <span>Approved By:</span>
                      <br />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Report;
