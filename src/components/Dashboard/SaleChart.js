import React from "react";
import Donut from "./Donut";

const SaleChart = ({ props }) => {
  return (
    <div className="flex  rounded border border-gray-700 p-4 md:p-8">
      <Donut
        data={[
          {
            name: "Cash",
            value: 210,
            color: "var(--color-fuchsia-400)",
          },
          {
            name: "Card",
            value: 30,
            color: "var(--color-blue-600)",
          },
          {
            name: "Fonepay",
            value: 180,
            color: "var(--color-green-700)",
          },
          {
            name: "Esewa",
            value: 260,
            color: "var(--color-gray-800)",
          },
          {
            name: "Credit",
            value: 60,
            color: "var(--color-yellow-800)",
          },
        ].sort((a, b) => a.value - b.value)}
      />
    </div>
  );
};

export default SaleChart;
