import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import jsonData from '../payment.json'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const CreditMode = () => {
    
    const creditArray = jsonData.map((item) => ({
        creditAmount: item.creditAmount,
        creditCard: item.creditCard,
        creditCash: item.creditCash,
        creditFonePay: item.creditFonePay,
        creditNIC: item.creditNIC,
        creditRecivied: item.creditRecivied,
        creditesewa: item.creditesewa,
    })
    )
    const valuesArray = creditArray.flatMap(obj => Object.values(obj))


    const data = {
        labels: [...new Set(creditArray.flatMap(item => Object.keys(item)))],
        datasets: [
            {
                label: "Credit mode",
                data: valuesArray.map((items) => items),
                backgroundColor: "#C70039",
                borderColor: "#C70039"
            }
        ]
    };
    return (
        <div className='p-5 gap-1'>
            <p className='text-xl font-bold  items-center justify-center flex'>Credit Payment</p>
            <hr />
            <Bar data={data} />
        </div>
    )
}

export default CreditMode