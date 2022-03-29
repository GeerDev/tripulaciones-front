import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankingCompanies } from "../../../features/company/companySlice";
import {
  getRanking,
  getForm,
  getStats,
} from "../../../features/datascience/datascienceSlice";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Radar, Bar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const RankingCompanies = () => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.company);
  const { stats, ranking } = useSelector((state) => state.datascience);
  console.log(stats);
  useEffect(() => {
    dispatch(getRankingCompanies());
    dispatch(getRanking());
    dispatch(getStats());
  }, []);
  const scores = [];
  const names = [];
  for (let i = 0; i < ranking.length; i++) {
    scores.push(ranking[i].score);
    names.push(ranking[i].company_name);
  }
  const statsNames = [];

  for (let i = 0; i < stats.length; i++) {
    statsNames.push(stats[i].category_name);
  }
  const data = {
    labels: statsNames,
    datasets: [
      {
        label: "Nombre Empresa",
        data: [6, 7, 9, 7, 9, 10, 8, 5, 2, 5],
        backgroundColor: "blue",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <Radar
        data={data}
        options={{
          legend: true,
          gridLines: {
            display: true,
          },
          scale: {
            gridLines: {
              color: [
                "white",
                "white",
                "white",
                "white",
                "white",
                "white",
                "white",
                "white",
              ],
            },
            pointLabels: {
              fontSize: 12,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              display: true,
              maxTicksLimit: 5,
            },
          },
        }}
      />
      {
        <Bar
          width={500}
          height={500}
          data={{
            labels: names,
            datasets: [
              {
                label: "Score",
                data: scores,
                backgroundColor: ["red", "blue", "yellow", "black"],
              },
            ],
          }}
        />
      }
    </>
  );
};

export default RankingCompanies;
