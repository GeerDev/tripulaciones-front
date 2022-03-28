import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankingCompanies } from "../../../features/company/companySlice";
import { getRanking, getForm, getStats } from "../../../features/datascience/datascienceSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RankingCompanies = () => {
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.company);
  const { stats, ranking, forms } = useSelector((state) => state.datascience);
  console.log("Stats: ", stats);
  // console.log("Ranking: ", ranking);
  // console.log("Forms: ", forms);

  useEffect(() => {
    dispatch(getRankingCompanies());
    dispatch(getRanking())
    dispatch(getStats())
    dispatch(getForm())
  }, []);
  const scores = [];
  const names = [];
  for (let i = 0; i < companies.length; i++) {
    scores.push(companies[i].score);
    names.push(companies[i].name);
  }

  return (
    <>
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
    </>
  );
};

export default RankingCompanies;
