import Posts from "./Posts/Posts"
import { useSelector } from "react-redux";
import React from 'react'
import ChallengesUser from "./ChallengesUser/ChallengesUser"
import './DashboardUser.scss'
import RakingCompaniesUser from "./RankingCompaniesUser/RankingCompaniesUser";

const DashboardUser = () => {
  const { userNow } = useSelector(state => state.user)
  const { name, imageUser } = userNow
  return (
    <div className="user-principal">
      <h1>Dashboard Empleado</h1>
      <div className="container-posts-challenges">
        <Posts />
        <div className="challenge-container">
          <RakingCompaniesUser />

        </div>
      </div>
        <h2>Retos</h2>
        <ChallengesUser />

    </div>
  )
}

export default DashboardUser