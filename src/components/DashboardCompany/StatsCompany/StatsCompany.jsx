import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../../features/datascience/datascienceSlice";
import './StatsCompany.scss'

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const StatsCompany = () => {

  const dispatch = useDispatch();
  const { stats } = useSelector((state) => state.datascience);

  const statsNames = [];

  for (let i = 0; i < stats.length; i++) {
    statsNames.push(stats[i].category_name);
  }

  const scoreStats1 = stats.map((element) => {
    return Math.trunc(element.score[0])
  })

  const scoreStats2 = stats.map((element) => {
    return Math.trunc(element.score[1])
  })

  useEffect(() => {
    dispatch(getStats());
  }, []);

  const data = {
    labels: ['Acción Social','Compromiso','Política y RSC','Derechos Humanos','Sostenibilidad Estructural','Presupuesto Sostenibilidad','Innovación','Proveedores','Medio Ambiente','Personas'],
    datasets: [
      {
        label: 'CERS',
        data: [8,7,7,5,8,6,7,8,6,9],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Datos Empresa',
        data: [9,8,10,8,9,9,8,8,7,10],
        backgroundColor: 'rgba(25, 19, 72, 0.3)',
        borderColor: 'rgba(25, 19, 72, 0.3)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Radar data={data}/>
  )
}

export default StatsCompany