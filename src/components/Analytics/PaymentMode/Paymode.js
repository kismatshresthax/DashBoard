import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import jsonData from "./payment.json";
import ExcelSheet from "../../Excel/ExcelSheet";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Paymode = () => {
  const [datas, setDatas] = useState([]);
  const newArray = jsonData.map((item) => ({
    cash: item.cash,
    esewa: item.esewa,
    fonePay: item.fonePay,
    clubCard: item.clubCard,
    cardAmount: item.cardAmount,
    nicAsia: item.nicAsia,
  }));

  const valuesArray = newArray.flatMap((obj) => Object.values(obj));
  console.log("jsonData", valuesArray);

  const data = {
    labels: [...new Set(newArray.flatMap((item) => Object.keys(item)))],
    datasets: [
      {
        label: "Payment Mode",
        data: valuesArray.map((items, index) => items),
        backgroundColor: "#2596be",
        borderColor: "#2596be",
      },
    ],
  };

  let table1 = [
    {
      A: "Cash",
      B: "esewa",
      C: "fonePay",
      D: "clubCard",
      E: "cardAmount",
      F: "nicAsia",
    },
  ];

  jsonData.forEach((item) => {
    table1.push({
      A: item.cash,
      B: item.esewa,
      C: item.fonePay,
      D: item.clubCard,
      E: item.cardAmount,
      F: item.nicAsia,
    });
  });
  return (
    <div className="p-5 gap-1">
      <p className="text-xl font-bold  items-center justify-center flex">
        Payment Mode
      </p>
      <hr />
      <Bar data={data} />
    </div>
  );
};

export default Paymode;
