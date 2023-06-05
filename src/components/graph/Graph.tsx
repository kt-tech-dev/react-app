import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
Chart.register(...registerables);

function Graph() {
  // グラフのデータやオプションの設定
  const data = {
    labels: ["データ1", "データ2", "データ3"],
    datasets: [
      {
        label: "シェア数",
        data: [10, 20, 30],
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  let response = "test";
  const getMcu = async () => {
    response = await axios.get("https://www.whenisthenextmcufilm.com/api");
  };

  useEffect(() => {
    getMcu();
  }, []);

  return (
    <div>
      {/* <Bar data={data} options={options} /> */}
      <span>{response}</span>
      <button onClick={getMcu}>button</button>
    </div>
  );
}
export default Graph;
