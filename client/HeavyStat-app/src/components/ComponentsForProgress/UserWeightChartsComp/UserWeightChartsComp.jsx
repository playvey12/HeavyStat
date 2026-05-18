import React from 'react'
import {userWaightChartsLabels} from '../../../utils/mockData'
import styles from './UserWeightChartsComp.module.css'

import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Legend,Tooltip} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import { useUser } from '../../../utils/contexts/userContext/userContext'
import { useProgress } from '../../../utils/contexts/progressContext/progressContext'
ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);
export default function UserWeightChartsComp() {

const { userWeightData } = useUser()
const {weightsHistory}=useProgress()


const weightStats = [
    { id: 1, text: "Начальный", userWeight: userWeightData?.userStartWeight || 0 },
    { id: 2, text: "Цель", userWeight: userWeightData?.userGoalWeight || 0 }
]

 const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}.${month}`;
};
const lastFive = [...weightsHistory].slice(-5).reverse(); 

 const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#1a1a20',
        titleColor: '#ffffff',
        bodyColor: '#8e8e93',
        borderColor: '#ff3b5c',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        
      }
    },
    scales: {
      x: {
        display: true,
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: '#9ca3af',
          padding: 10,
          font: {
            size: 11,
            family: 'Montserrat, sans-serif'
          }
        }
      },
      y: {
        display: false,
        grid: { display: false },
        border: { display: false }
      }
    }
  };
  const data = {
   
   labels: lastFive.map((item) => formatDate(item.date || item.dateDisplay)),
  datasets: [{
    data: lastFive.map((item) => item.weight || item.exerciseWeightPoint),
        backgroundColor: '#ff3b5c',
        barThickness: 35,
        borderRadius: 6,
        hoverBackgroundColor: '#ff5f7a'
    }]
};

  return (
    <>
      <div className={styles.cardHeader}>
        <h2>История веса</h2>
        <span className={styles.periodBadge}>Последние 5 дней</span>
      </div>
      <div className={styles.barChart}>
      <Bar data={data} options={options} />
      </div>
      <div className={styles.barLabels}>
  {lastFive.map((item, index) => (
    <span key={index}>{formatDate(item.date || item.dateDisplay)}</span>
  ))}
</div>
      <div className={styles.historyStats}>
        {weightStats.map((item)=>(
            <div key={item.id} className={styles.statItem}>
          <span className={styles.statLabel}>{item.text}</span>
          <span className={styles.statValue}>{item.userWeight} кг</span>
        </div>
        ))
    }
      </div>
    </>
  )
}