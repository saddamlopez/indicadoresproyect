import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './PieChart.css';

const PieChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(25, 59, 12, 0.2)',
          'rgba(54, 12, 25, 0.2)',
          'rgba(25, 26, 86, 0.2)',
          'rgba(75, 12, 12, 0.2)',
          'rgba(13, 12, 255, 0.2)',
          'rgba(25, 19, 64, 0.2)',
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
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="pie-chart-container">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;