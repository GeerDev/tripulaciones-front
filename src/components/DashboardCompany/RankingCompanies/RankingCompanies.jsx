import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRanking,} from "../../../features/datascience/datascienceSlice";
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
import { Bar } from "react-chartjs-2";

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
    dispatch(getRanking());
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
  
  return (
    <>
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
                backgroundColor: ["rgba(25, 19, 72, 0.3)", "rgba(25, 19, 72, 0.3)", "rgba(25, 19, 72, 0.3)", "rgba(25, 19, 72, 0.3)"],
              },
            ],
          }}
        />
      }
    </>
  );
};

export default RankingCompanies;
