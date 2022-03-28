import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankingCompanies } from "../../../features/company/companySlice";
import {
  getRanking,
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
  console.log(statsNames)

  const scoreStats1 = stats.map((element) => {
    return element.score[0]
  })

  const scoreStats2 = stats.map((element) => {
    return element.score[1]
  })

  console.log(scoreStats1);
  console.log(scoreStats2);

  const data = {
    labels: statsNames,
    datasets: [
      {
        label: "Valor Empresa",
        data: scoreStats1,
        backgroundColor: "blue",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
      {
        label: "Valor Cers",
        data: scoreStats2,
        backgroundColor: "red",
        borderColor: "rgba(00, 255, 00, 0.1)",
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
          width={1100}
          height={1100}
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
