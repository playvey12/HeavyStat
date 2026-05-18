import React, { useState, useEffect } from 'react'
import styles from './ExerciseChartsComp.module.css'
import { exerciseChartPeriodText } from '../../../utils/mockData'
import { Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip, Filler } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useProgress } from '../../../utils/contexts/progressContext/progressContext'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip, Filler);

export default function ExerciseChartsComp() {

  
  const { selectedPeriod, selectedExercise, handlePeriodChange, handleExerciseChange,allRecords  ,muscleList,deleteRecordPoint} = useProgress();

  const currentExerciseData = allRecords[selectedExercise] || [];
  //фильтр по датам
  const getFilteredData = () => {
    if (!currentExerciseData.length) return [];
    
    const now = new Date();
    let daysToFilter = 30; 
    
    if (selectedPeriod === "3months") {
      daysToFilter = 90;
    } else if (selectedPeriod === "all_time") {
      return currentExerciseData; 
    }
    
    const cutoffDate = new Date();
    cutoffDate.setDate(now.getDate() - daysToFilter);
    
    return currentExerciseData.filter(record => {
      const recordDate = new Date(record.date);
      return recordDate >= cutoffDate;
    });
  };

  const filteredData = getFilteredData();
  const sortedData = [...filteredData].sort((a, b) => new Date(a.date) - new Date(b.date));

  const data = {
    labels: sortedData.map((record) => record.exerciseWeightDate),
    datasets: [{
      label: 'Рабочий вес (кг)',
      data: sortedData.map((record) => record.exerciseWeightPoint),
      borderColor: '#ff3b5c',
      borderWidth: 3,
      pointBackgroundColor: '#1e1e2e',
      pointBorderColor: '#ff3b5c',
      pointRadius: 5,
      pointHoverRadius: 8,
      fill: true,
      tension: 0.4,
      backgroundColor: 'rgba(255, 59, 92, 0.1)'
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y} кг`;
          }
        }
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#8e8e93', font: { family: 'Montserrat' } },
        title: {
          display: true,
          text: 'Вес (кг)',
          color: '#8e8e93'
        }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#8e8e93', font: { family: 'Montserrat' } },
        title: {
          display: true,
          text: 'Дата',
          color: '#8e8e93'
        }
      }
    }
  };



const handleDeletePoint = () => {
    if (sortedData.length > 0) {
        const lastPoint = sortedData[sortedData.length - 1]
        const pointId = lastPoint._id || lastPoint.id  
        if (pointId) {
            deleteRecordPoint(pointId)
        } else {
            console.error('Нет ID для удаления:', lastPoint)
        }
    }
}

  const EmptyState = () => (
    <div className={styles.noDataContainer}>
      <div className={styles.emptyIcon}>
        <i className="fas fa-chart-line"></i>
      </div>
      <h3 className={styles.noDataTitle}>Нет сохранённых рекордов</h3>
      <p className={styles.noDataText}>
        У вас пока нет записей для упражнения "{selectedExercise}"
      </p>
      
      <div className={styles.tipCard}>
        <div className={styles.tipTitle}>
          <i className="fas fa-lightbulb"></i>
          <span>Как это работает?</span>
        </div>
        <div className={styles.tipText}>
          Во время тренировки, когда вы устанавливаете новый личный рекорд, 
          появится специальное окно, где вы сможете сохранить свой результат.
          <div className={styles.exampleRecord}>
            <span>📊 Пример:</span>
            <strong>{selectedExercise}: 85.5 кг</strong>
          </div>
        </div>
      </div>

      <div className={styles.selectHint}>
        <p>
          <i className="fas fa-info-circle"></i>
          Выберите другое упражнение из списка выше, чтобы увидеть его рекорды
        </p>
      </div>
    </div>
  );

 
  return (
    <>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleGroup}>
          <h2>Динамика прогресса</h2>
          <span className={styles.subtitle}>График изменения результатов</span>
        </div>
        <div className={styles.cardControls}>
          <div className={styles.selectGroup}>
            <label>Упражнение</label>
            <select value={selectedExercise} onChange={handleExerciseChange} className={styles.customSelect}>
              {muscleList.map((muscle) => (
    <optgroup key={muscle._id} label={muscle.nameOfMuscle}>
        {muscle.exercises.map((exercise, idx) => (
            <option key={idx}>{exercise}</option>
        ))}
    </optgroup>
))}
            </select>
          </div>
          <div className={styles.selectGroup}>
            <label>Период</label>
            <select className={styles.customSelect} value={selectedPeriod} onChange={handlePeriodChange}>
              {exerciseChartPeriodText.map((item) => (
                <option key={item.id} value={item.value}>{item.text}</option>
              ))}
            </select>
          </div>
            <button className={styles.deletePointBtn}  onClick={handleDeletePoint}><i className="fa-solid fa-trash"></i></button>
        </div>
      
      </div>
      
      <div className={styles.chartWrapper}>
        {currentExerciseData.length === 0 ? (
          <EmptyState />
        ) : sortedData.length > 0 ? (
          <Line data={data} options={options} />
        ) : (
          <div className={styles.noDataContainer}>
            <div className={styles.emptyIcon}>
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3 className={styles.noDataTitle}>Нет данных за выбранный период</h3>
            <p className={styles.noDataText}>
              За период "{selectedPeriod === '30days' ? '30 дней' : selectedPeriod === '3months' ? '3 месяца' : 'всё время'}" 
              нет сохранённых рекордов для упражнения "{selectedExercise}"
            </p>
            <button 
              className={styles.hintButton}
              onClick={() => handlePeriodChange({ target: { value: 'all_time' } })}
            >
              <i className="fas fa-chart-line"></i>
              Показать все рекорды
            </button>
          </div>
        )}
      </div>
    </>
  );
}