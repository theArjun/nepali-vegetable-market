import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const chart_data = { ...props };
  const pad = 5;
  const min_value = Math.min(...chart_data.min_price_list.map(Number)) - pad;
  const max_value = Math.max(...chart_data.max_price_list.map(Number)) + pad;

  const lineChartOptions = {
    title: {
      display: false,
      text: "Price ",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: max_value,
            suggestedMin: min_value,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  const lineChartData = {
    labels: chart_data.date_list,
    datasets: [
      {
        label: "Min Price",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#6c757d",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data.min_price_list,
      },
      {
        label: "Average Price",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,1,192,0.4)",
        borderColor: "#54a972",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data.avg_price_list,
      },
      {
        label: "Max Price",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,0,50,0.4)",
        borderColor: "#dd4d44",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data.max_price_list,
      },
    ],
  };
  return (
    <div>
      <Line data={lineChartData} options={lineChartOptions} />
    </div>
  );
};

export default LineChart;
