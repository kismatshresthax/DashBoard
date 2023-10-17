import React from "react";
import { format } from "date-fns";
import NepaliDate from "../../../NepaliDate";

export const Table1 = ({ modal }) => {

  return (
    <div className="p-1">
      <h3 class="font-bold align-center">{"Session Summary"}</h3>

      <table className="w-full table-auto">
        <tbody>
          <tr>
            <td className="p-0 left-align">Session Date</td>
            <td className="p-0">
              {format(new Date(modal.sessionDate), "yyyy/MM/dd")}
            </td>
          </tr>
          <tr>
            <td className="p-0">Nepali Date</td>
            <td className="p-0">{NepaliDate(modal.sessionDate)} </td>
          </tr>
          <tr>
            <td className="p-0">Login Date</td>
            <td className="p-0"> {format(new Date(modal.loginDate), "yyyy/MM/dd")}</td>
          </tr>

          <tr>
            <td className="p-0">Report By</td>
            <td className="p-0"> {modal.reportBy}</td>
          </tr>
          <tr>
            <td className="p-0">Fiscal Year</td>
            <td className="p-0"> {modal.fiscalyear}</td>
          </tr>
          <tr>
            <td className="p-0">Total Bill NO</td>
            <td className="p-0"> {modal.totalBillNo}</td>
          </tr>
          <tr>
            {" "}
            <td className="p-0">First Bill No</td>
            <td className="p-0"> {modal.firstBillNo}</td>
          </tr>
          <tr>
            <td className="p-0">Last Bill NO</td>
            <td className="p-0"> {modal.lastBillNo}</td>
          </tr>
          <tr>
            <td className="p-0">Total Bill Void</td>
            <td className="p-0"> {modal.totalBillVoid}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
