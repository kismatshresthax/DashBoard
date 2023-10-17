import React from "react";

export const Table4 = ({ modal }) => {
  return (
    <div className="p-1">
      <h3 class="font-bold align-center">{"Cash Summary"}</h3>
      <table className="w-full table-auto left-align">
        <tbody>
          <tr>
            <td className="p-0 left-align">Opening Balance</td>
            <td className="p-0"> {modal.openingBalance}</td>
          </tr>
          <tr>
            <td className="p-0">Cash</td>
            <td className="p-0"> {modal.cash}</td>
          </tr>
          <tr>
            <td className="p-0">Cash Drop</td>
            <td className="p-0">{modal.cashDrop}</td>
          </tr>
          <tr>
            <td className="p-0">Net Cash</td>
            <td className="p-0">{modal.netCash}</td>
          </tr>
          <tr>
            <td className="p-0">Credit Received</td>
            <td className="p-0">{modal.creditRecivied}</td>
          </tr>
          <tr>
            <td className="p-0">By Cash</td>
            <td className="p-0">{modal.creditCash}</td>
          </tr>
          <tr>
            <td className="p-0">By Card</td>
            <td className="p-0"> {modal.creditCard}</td>
          </tr>
          <tr>
            <td className="p-0">By Esewa</td>
            <td className="p-0"> {modal.esewa}</td>
          </tr>
          <tr>
            <td className="p-0">By FonePay</td>
            <td className="p-0">{modal.fonePay}</td>
          </tr>
          <tr>
            <td className="p-0">ClubCard</td>
            <td className="p-0"> {modal.clubCard}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
