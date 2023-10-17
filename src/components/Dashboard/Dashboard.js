import React from "react";
import jsonData from "../Analytics/PaymentMode/payment.json";
import taxIcon from "../../icons/taxreturn.svg";
import SaleChart from "./SaleChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { format } from "date-fns";
import { Doughnut, Pie } from "react-chartjs-2";
import LegendChart from "./LegendChart";
ChartJS.register(ArcElement, Tooltip, Legend);
const cards = [
  {
    text: "Total sales",
    icon: "fa-solid 	fa fa-rupee",
    iconColor: "text-neutral-500",
    money: "$1,290",
    percent: "2.2%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Net sales",
    icon: "fa-solid fa-filter-circle-dollar",
    iconColor: "text-neutral-500",
    money: "$1,940",
    percent: "4.0%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
];

const cards1 = [
  {
    text: "Table",
    icon: "fa-solid fa-table",

    iconColor: "text-neutral-500",
    money: "1,290",
    percent: "2.2%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Takeway",
    icon: "	fa fa-rupee",
    iconColor: "text-neutral-500",
    money: "$1,40",

    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "HomeDelivery",
    icon: "	fa fa-rupee",
    iconColor: "text-neutral-500",
    money: "Rs 1,40",

    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Dining",
    icon: "	fa fa-rupee",
    iconColor: "text-neutral-500",
    money: "Rs 0",

    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },

  // {
  //   text: "Total orders",
  //   icon: "fa-solid fa-file",
  //   iconColor: "text-neutral-500",
  //   money: "342",
  //   percent: "4.2%",
  //   percentColor: "text-lime-500",
  //   trend: "fa-solid fa-arrow-up",
  // },
  // {
  //   text: "Cancel order",
  //   icon: "fa-solid fa-circle-xmark",
  //   iconColor: "text-orange-600",
  //   money: "12",
  //   percent: "1.5%",
  //   percentColor: "text-orange-600",
  //   trend: "fa-solid fa-arrow-down",
  // },
];
const Dashboard = (props) => {
  const data = {
    b1: 142.59,
    b2: 0,
    cancelOrder: 1,
    cardAmount: 6692.16,
    cash: 620,
    cashAmount: 6692.16,
    cashDiff: 0,
    cashDrop: 0,
    cashSettlement: 0,
    closing: 0,
    clubCard: 0,
    company_id: 108,
    complementry: 131,
    complementryAmount: 39025.7,
    counterCash: 12692.2,
    countingCash: 0,
    createdAt: "Wed, 04 Oct 2023 12:42:11 GMT",
    creditAmount: 8060.03,
    creditCard: 0,
    creditCash: 0,
    creditFonePay: 0,
    creditNIC: 0,
    creditRecivied: 0,
    creditesewa: 0,
    dinning: 0,
    esewa: 0,
    firstBillNo: "2496",
    fiscalyear: "2080/81",
    fonePay: 5634.01,
    grandTotal: 27636.2,
    homeDelivery: 0,
    homeDeliveryCharge: 0,
    homeDeliveryPending: 0,
    id: 164,
    k1: 24662.9,
    k2: 0,
    k3: 0,
    lastBillNo: "2571",
    logOut: "Wed, 04 Oct 2023 18:27:00 GMT",
    loginDate: "Wed, 04 Oct 2023 13:21:28 GMT",
    netCash: 24544.4,
    nicAsia: 0,
    openingBalance: 6000,
    reportBy: "sunami",
    sessionDate: "Wed, 04 Oct 2023 00:00:00 GMT",
    status: "T",
    subTotal: 24544.4,
    tableSale: 19,
    tableSales: 15202.2,
    takeAway: 14,
    takeAwaySales: 12434,
    totalBillNo: 33,
    totalBillVoid: "0",
    totalDiscount: 87.61,
    totalExtraCharge: 0,
    totalOrder: 33,
    totalServiceCharge: 0,
    totalTax: 3179.41,
  };
  const kot = [
    {
      name: "Kitchen(K1)",
      value: data.k1,

      color: "#36A2EB",
    },
    {
      name: "Kitchen(K2)",
      value: data.k2,
      color: "#FFCD56",
    },
    {
      name: "Kitchen(K3)",
      value: data.k3,
      color: "#FF0984",
    },
    {
      name: "Bar(B1)",
      value: data.b1,
      color: "#6366F1",
    },

    {
      name: "Bar(B2)",
      value: data.b2,
      color: "#FF6384",
    },
  ];
  console.log(data)
  return (
    <div className="">
      <div className="text-gray-700 text-2xl  font-bold">
        <p>{format(new Date(data.loginDate), "yyyy/MM/dd") }</p>
      </div>
      <div className="grid lg:grid-cols-5 gap-2 mb-5">
        <div className="rounded-xl bg-white h-20 shadow-sm p-5 md:h-24  ">
          <div class="flex items-center space-x-4">
            <div class="flex flex-col align-center mt-auto">
              <div class="text-gray-600">Sub Total</div>
              <div class=" flex flex-start">
                <div class="text-xl font-bold text-gray-900  md:text-base">
                  Rs. {(data.subTotal || 0).toFixed(3)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white h-20 shadow-sm p-5  md:h-24 ">
          <div class="flex items-center space-x-4">
            <div class="flex flex-col align-center mt-auto">
              <div class="text-gray-600">Total Discount</div>
              <div class=" flex flex-start">
                <div class=" text-xl font-bold text-gray-900  md:text-base">
                  {" "}
                  Rs.{data.totalDiscount || 0}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white h-20 shadow-sm p-5 md:h-24  ">
          <div class="flex items-center space-x-4">
            <div class="flex flex-col align-center mt-auto">
              <div class="text-gray-600 text-sm">Service-Extra Charge</div>
              <div class=" flex flex-start">
                <div class=" text-xl font-bold text-gray-900  md:text-base">
                  {" "}
                  Rs.{data.totalServiceCharge || 0}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white h-20 shadow-sm p-5 md:h-24 ">
          <div class="flex items-start space-x-4">
            <div class="flex flex-col align-center mt-auto">
              <div class="text-gray-600">Total tax</div>
              <div class=" flex flex-start">
                <div class=" text-xl font-bold text-gray-900  md:text-base">
                  {" "}
                  Rs.{data.totalTax || 0}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white h-20 shadow-sm p-5  md:h-24 ">
          <div class="flex items-center space-x-4"></div>

          <div class="flex flex-col align-center mt-auto">
            <div class="text-gray-600">Grand-Total</div>
            <div class=" flex flex-start">
              <div class=" text-xl font-bold text-gray-900  md:text-base">
                {" "}
                Rs.{data.grandTotal || 0}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" justify-start w-full items-start z-0 flex-wrap xl:flex-nowrap gap-4 inline-flex">
        {cards1.map(
          (
            { text, icon, money, percent, percentColor, trend, iconColor },
            index
          ) => {
            return (
              <div
                key={index}
                className="  sm:min-w-[200px]   xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start mb-5 gap-4 bg-white flex"
              >
                <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex">
                  <div className="w-full h-[100px] px-5 pt-5 pb-4 bg-white rounded-xl shadow flex-col justify-start items-start gap-6 flex">
                    <div className="  gap-0 md:self-stretch justify-start items-center gap-3 inline-flex ">
                      <div className={`w-6 h-6 relative ${iconColor}`}>
                        <i className={icon}></i>
                      </div>
                      <div className="grow shrink basis-0 text-zinc-900 text-base font-normal leading-normal">
                        {text}({data.tableSale})
                      </div>
                    </div>
                    <div className="self-stretch h-[25px] flex-col justify-center items-start gap-1 flex">
                      <div className="text-zinc-900 text-[15px] font-semibold leading-[48px]">
                        {money}
                      </div>
                      <div className="h-5 relative flex gap-2">
                        <div
                          className={`${percentColor} flex items-center`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div>
        <h2 className="flex justify-center text-black text-xl font-bold items-center align-center">
          Sales Summary
        </h2>

        <div className="grid  bg-white rounded-xl drop-shadow  md:grid-cols-2 gap-4 sm:gap-8 mb-2">
          <div className="w-64 h-64 xl:w-50 xl:h-50 sm:w-35 sm:h-35 xs:w-35 xs:h-35 mx-auto">
            <Doughnut
              data={{
                labels: [],
                datasets: [
                  {
                    label: "Sales",
                    data: [
                      data.cash,
                      data.cardAmount,
                      data.fonePay,
                      data.esewa,
                      data.creditAmount,
                      data.clubCard,
                      data.cheque,
                    ],
                    backgroundColor: [
                      "rgb(25, 246, 88)",

                      "#36A2EB",
                      " #FFCD56",
                      "#FF0984",
                      "#9999",
                      "rgb(255, 26, 8)",
                      "#FF6384",
                    ],
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </div>
          <LegendChart />
        </div>
      </div>
      <div>
        <h2 className="flex justify-center text-black text-xl font-bold items-center align-center">
          Kot Summary
        </h2>

        <div className="grid  bg-white rounded-xl drop-shadow  md:grid-cols-2 gap-4 sm:gap-8 mb-2">
          <div className="w-64 h-64 xl:w-50 xl:h-50 sm:w-35 sm:h-35 xs:w-35 xs:h-35 mx-auto">
            <Pie
              data={{
                labels: [],
                datasets: [
                  {
                    label: "Kot",
                    data: [
                      parseFloat(data.k1),
                      data.k2,
                      data.k3,
                      parseFloat(data.b1),
                      data.b2,
                    ],
                    backgroundColor: [
                      "#36A2EB",
                      "#FFCD56",
                      "#FF0984",
                      "#6366F1",

                      "#FF6384",
                    ],
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </div>

          <ul className="list-none flex flex-col gap-2 m-0 text-gray-200 py-5">
            {kot.map((item, index) => {
              const { name, color, value } = item;

              return (
                <li
                  key={index}
                  className="list-none m-0  px-5 py-1 flex items-center justify-between"
                >
                  <span className="flex text-gray-700 font-semibold items-center gap-2">
                    <span
                      className="block w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    {name}
                  </span>
                  <span className="text-gray-700 font-semibold">
                    {"Rs." + parseFloat(value)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
              {jsonData &&
                jsonData.map((item) => (
                  <tr class="bg-white">
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        href="#"
                        class="font-bold text-blue-500 hover:underline"
                      >
                        {item.id}
                      </a>
                    </td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        { format(new Date(item.createdAt), "yyyy/MM/dd")}

                    </td>

                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.totalBillNo}
                    </td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.openingBalance}
                    </td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.cashDrop}
                    </td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.closing}
                    </td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.creditAmount}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>

                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                              fill=""
                            />
                            <path
                              d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 md:hidden text place-content-center overflow-auto ">
          {jsonData &&
            jsonData.map((item) => (
              
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
      </div>
    </div>
  );
};
export default Dashboard;
