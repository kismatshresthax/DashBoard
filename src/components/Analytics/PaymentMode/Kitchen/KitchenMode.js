import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import jsonData from '../payment.json'
ChartJS.register(ArcElement, Tooltip, Legend);

const KitchenMode = () => {
  const KitchenArray = jsonData.map((item) => ({
    b1: item.b1,
    b2: item.b2,
    k1: item.k1,
    k2: item.k2,
    k3: item.k3,
  })
  )
  const valuesArray = KitchenArray.flatMap(obj => Object.values(obj))
  const data = {
    labels: [...new Set(KitchenArray.flatMap(item => Object.keys(item)))],
    datasets: [
      {
        label: 'Kitchen array',
        data: valuesArray.map((items) => items),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className='p-5  items-center'>
      <p className='text-xl font-bold  items-center justify-center flex'>KOT Total</p>
      <hr/>
      <div className=' items-center justify-center h-80 flex'>
      <Pie data={data} className='h-80' />
      </div>
      
      <p className=' font-semibold  items-center justify-center flex'>This KOT total is without service charge and Tax</p>
    </div>
  )
}

export default KitchenMode