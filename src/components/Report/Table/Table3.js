import React from "react";

export const Table3 = ({ modal }) => {
  return (
    <div className="p-1">
      <h3 class="font-bold align-center">{"Sales Summary"}</h3>
      <table className="w-full table-auto">
        <tbody>
          <tr>
            <td className="p-0 left-align">Sub Total</td>
            <td className="p-0">{modal.subTotal}</td>
          </tr>
          <tr>
            <td className="p-0">Total Discount</td>
            <td className="p-0">{modal.totalDiscount}</td>
          </tr>{" "}
          <tr>
            <td className="p-0">Total Service Charge</td>
            <td className="p-0">{modal.totalServiceCharge}</td>
          </tr>{" "}
          <tr>
            <td className="p-0">Total Extra Charge</td>
            <td className="p-0">{modal.totalExtraCharge}</td>
          </tr>{" "}
          <tr>
            <td className="p-0">Total Tax</td>
            <td className="p-0">{modal.totalTax}</td>
          </tr>{" "}
          <tr>
            <td className="p-0">Grand Total</td>
            <td className="p-0">{modal.grandTotal}</td>
          </tr>{" "}
          <tr>
            <td className="p-0">Sales By Cash</td>
            <td className="p-0">{modal.cashAmount}</td>
          </tr>
          <tr>
            <td className="p-0">Sales By Card</td>
            <td className="p-0">{modal.cardAmount}</td>
          </tr>
          <tr>
            <td className="p-0">Sales By FonePay</td>
            <td className="p-0">{modal.fonePay}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
