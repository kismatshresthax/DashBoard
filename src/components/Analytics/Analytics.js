import React from "react";
import CoinIcon from "../../icons/coin.svg";
import OrderIcon from "../../icons/order.svg";
import CustomerIcon from "../../icons/customer.svg";

import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import Paymode from "./PaymentMode/Paymode";
import {
  BsCashCoin,
  BsPersonFill,
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import PaymodeLine from "./PaymentMode/PaymodeLine";
import Paymentpie from "./PaymentMode/Paymentpie";
import CreditMode from "./PaymentMode/CreditMode/CreditMode";
import KitchenMode from "./PaymentMode/Kitchen/KitchenMode";
const Analytics = () => {
  const cards = [
    {
      text: "Total sales",
      icon: "fa-solid fa-person-rays",
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
    {
      text: "Total orders",
      icon: "fa-solid fa-file",
      iconColor: "text-neutral-500",
      money: "342",
      percent: "4.2%",
      percentColor: "text-lime-500",
      trend: "fa-solid fa-arrow-up",
    },
    {
      text: "Cancelled orders",
      icon: "fa-solid fa-circle-xmark",
      iconColor: "text-orange-600",
      money: "12",
      percent: "1.5%",
      percentColor: "text-orange-600",
      trend: "fa-solid fa-arrow-down",
    },
  ];
  return (
    <div>
      <div className=" justify-start w-full items-start flex-wrap xl:flex-nowrap gap-4 inline-flex">
        {cards.map(
          (
            { text, icon, money, percent, percentColor, trend, iconColor },
            index
          ) => {
            return (
              <div
                key={index}
                className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start mb-5 gap-4 bg-white flex"
              >
                <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex">
                  <div className="w-full h-[164px] px-6 pt-6 pb-4 bg-white rounded-xl shadow flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch justify-start items-center gap-3 inline-flex">
                      <div className={`w-6 h-6 relative ${iconColor}`}>
                        <i className={icon}></i>
                      </div>
                      <div className="grow shrink basis-0 text-zinc-900 text-base font-medium leading-normal">
                        {text}
                      </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-center items-start gap-1 flex">
                      <div className="text-zinc-900 text-[40px] font-semibold leading-[48px]">
                        {money}
                      </div>
                      <div className="h-5 relative flex gap-2">
                        <div className={`${percentColor} flex items-center`}>
                          <div
                            className={` text-sm font-semibold leading-tight`}
                          >
                            <i className={trend}></i>
                          </div>
                          <div className="">
                            <div className="text-sm font-semibold leading-tight">
                              {percent}
                            </div>
                          </div>
                        </div>
                        <div className=" text-zinc-500 text-xs font-medium leading-[18px]">
                          from last month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <Paymode />
      <KitchenMode />
    </div>
  );
};
export default Analytics;
