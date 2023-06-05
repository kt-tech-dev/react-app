import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import { getAPI } from "../../utils/utils";
import styles from "./Mcu.module.css";
Chart.register(...registerables);

type mcu = {
  days_until: number;
  overview: string;
  poster_url: string;
  release_date: string;
  title: string;
  type: string;
  following_production: nextMcu;
};

type nextMcu = {
  days_until: number;
  overview: string;
  poster_url: string;
  release_date: string;
  title: string;
  type: string;
};

function Mcu() {
  const [state1, setState1] = useState<mcu>();
  const fetchMCU = async () => {
    let response = (await getAPI(
      "https://www.whenisthenextmcufilm.com/api"
    )) as mcu;
    setState1(response);
  };
  useEffect(() => {
    fetchMCU();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      {state1 && (
        <>
          <div className={styles.posterContainer}>
            <img className={styles.poster} src={state1.poster_url} />
          </div>
          <div className={styles.title}>
            <span>{state1.title}</span>
            <br />
            <span>{state1.release_date}</span>
          </div>
        </>
      )}
    </div>
  );
}
export default Mcu;
