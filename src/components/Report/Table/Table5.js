import React from "react";

export const Table5 = ({ modal }) => {
  return (
    <div className="p-1">
      <h3 class="font-bold align-center">Order Summary</h3>

      <table className="w-full table-auto ">
        <tbody>
          <tr>
            <td className="p-0 left-align">Table Sales</td>
            <td className="p-0">{modal.tableSale}</td>
          </tr>
          <tr>
            <td className="p-0">Take Away</td>
            <td className="p-0"> {modal.takeAway}</td>
          </tr>
          <tr>
            <td className="p-0">Dinning</td>
            <td className="p-0"> {modal.dining}</td>
          </tr>
          <tr>
            <td className="p-0">Home Delivery Sales</td>
            <td className="p-0"> {modal.delivery}</td>
          </tr>
          <tr>
            <td className="p-0">Table Sales</td>
            <td className="p-0"> {modal.tableSales}</td>
          </tr>

          <tr>
            <td className="p-0">TakeAway Sales</td>
            <td className="p-0"> {modal.takeAwaySales}</td>
          </tr>
          <tr>
            <td className="p-0">Home Delivery pending Amount</td>
            <td className="p-0">{modal.homeDeliveryPending}</td>
          </tr>
          <tr>
            <td className="p-0">Home Delivery charge</td>
            <td className="p-0"> {modal.homeDeliveryCharge}</td>
          </tr>
          <tr>
            <td className="p-0">Total Order</td>
            <td className="p-0">{modal.totalOrder}</td>
          </tr>
          <tr>
            <td className="p-0">Cancel Order</td>
            <td className="p-0">{modal.cancelOrder}</td>
          </tr>
          <tr>
            <td className="p-0">Total Complementry</td>
            <td className="p-0">{modal.complementry}</td>
          </tr>
          <tr>
            <td className="p-0">Total Complementy Amt</td>
            <td className="p-0">{modal.complementryAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
