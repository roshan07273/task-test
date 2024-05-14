import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js";
import "chart.js/auto";

const MyPage = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 10 }, (_, i) => `Data ${i + 1}`),
        datasets: [
          {
            data: Array.from({ length: 10 }, () => 10),
            backgroundColor: "rgba(60, 18, 235, 0.8)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 10,
              },
            },
          ],
        },
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          bar: {
            barPercentage: 0.5,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div
      className="md:container mt-6 shadow-2xl mb-6"
      style={{ height: "200px", width: "100%" }}
    >
      <canvas ref={chartRef} style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
};

export default MyPage;
