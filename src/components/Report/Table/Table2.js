import React from "react";

export const Table2 = ({ modal }) => {
  return (
    <div className="p-0">
      <h3 class="font-bold align-center">KOT Total</h3>
      <table className="w-full table-auto left-align">
        <tbody>
          <tr>
            <td className="p-0">K1</td>
            <td className="p-0">{modal.k1}</td>
          </tr>
          <tr>
            <td className="p-0">K2</td>
            <td className="p-0">{modal.k2}</td>
          </tr>
          <tr>
            <td className="p-0">K3</td>
            <td className="p-0">{modal.k3}</td>
          </tr>
          <tr>
            <td className="p-0">B1</td>
            <td className="p-0">{modal.b1}</td>
          </tr>
          <tr>
            <td className="p-0">B2</td>
            <td className="p-0">{modal.b2}</td>
          </tr>
          <tr>
            <td className="p-1">Total</td>
            <td className="p-1">
              {parseFloat(modal.b2) +
                parseFloat(modal.b1) +
                parseFloat(modal.k1) +
                parseFloat(modal.k2) +
                parseFloat(modal.k3) +
                parseFloat(modal.k4 || 0) +
                parseFloat(modal.k5 || 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
