// src/components/ReportChart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ReportChart = ({ entries }) => {
  const projectData = entries.reduce((acc, entry) => {
    acc[entry.task] = (acc[entry.task] || 0) + entry.time;
    return acc;
  }, {});

  const labels = Object.keys(projectData);
  const dataValues = Object.values(projectData);

  const data = {
    labels,
    datasets: [
      {
        label: 'Time Spent (in seconds)',
        data: dataValues,
        backgroundColor: ['#4CAF50', '#FF9800', '#03A9F4'],
        borderColor: '#000',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw} seconds`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ReportChart;
