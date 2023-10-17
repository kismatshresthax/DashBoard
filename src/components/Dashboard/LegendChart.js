import React from "react";

const LegendChart = () => {
  const jsonData = {
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
  //   const newArray = jsonData.map((item) => ({
  //     cash: item.cash,
  //     esewa: item.esewa,
  //     fonePay: item.fonePay,
  //     clubCard: item.clubCard,
  //     cardAmount: item.cardAmount,
  //     nicAsia: item.nicAsia,
  //   }));

  const data = [
    {
      name: "Cash",
      value: jsonData.cash,

      color: "#19F658",
    },
    {
      name: "Card",
      value: jsonData.cardAmount,
      color: "#36A2EB",
    },
    {
      name: "Fonepay",
      value: jsonData.fonePay,
      color: " #FFCD56",
    },
    {
      name: "E-sewa",
      value: jsonData.esewa,
      color: "#FF0984",
    },
    {
      name: "Credit",
      value: jsonData.creditAmount,
      color: " #9999",
    },
    {
      name: "ClubCard",
      value: jsonData.clubCard,
      color: " #FF1A08",
    },
    {
      name: "Cheque",
      value: 0,
      color: "#FF6384",
    },
  ];
  return (
    <div>
      <h2 className="flex justify-center text-black text-xl font-bold items-center align-center">
        Amount
      </h2>
      <ul className="list-none flex flex-col gap-2 m-0 text-gray-200">
        {data.map((item, index) => {
          const { name, color, value } = item;

          return (
            <li
              key={index}
              className="list-none m-0  px-5 flex items-center justify-between"
            >
              <span className="flex text-gray-700 font-semibold items-center gap-2">
                <span
                  className="block w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {name}
              </span>
              <span className="text-gray-700 font-semibold">
                {"Rs." + value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LegendChart;
