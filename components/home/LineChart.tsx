import React from "react";
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

const options = {
  responsive: true,
  plugins: {
    title: { display: true, text: "Social Media Impressions" },
  },
  Tooltip: true,
};

export const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Facebook Impressions",
      data: [39, 32, 47, 68, 72],
      borderColor: "rgb(249,115,22)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Pinterest Impressions",
      data: [50, 39, 43, 33, 42],
      borderColor: "rgb(230,64,17)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const LineChart = () => {
  return <Line data={data} options={options} className="p-3" />;
};

export default LineChart;
