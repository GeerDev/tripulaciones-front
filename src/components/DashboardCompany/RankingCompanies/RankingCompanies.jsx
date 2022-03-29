import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRanking } from "../../../features/datascience/datascienceSlice";
import { getRankingCompanies } from "../../../features/company/companySlice";
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
  const { companies } = useSelector((state) => state.company);
  
  useEffect(() => {
    dispatch(getRanking());
    dispatch(getRankingCompanies())
  }, []);
  const scores = [];
  const names = [];
  for (let i = 0; i < companies.length; i++) {
    scores.push(companies[i].score);
    names.push(companies[i].name);
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
                label: "Ranking de puntuación general",
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
