import Posts from "./Posts/Posts"
import {useSelector } from "react-redux";
import React from 'react'
import ChallengesUser from "./ChallengesUser/ChallengesUser"
import './DashboardUser.scss'

const DashboardUser = () => {
  const { userNow } = useSelector(state => state.user)
  const { name, imageUser } = userNow
  return (
    <div className="user-principal">
      <h1>Dashboard User</h1>
      <Posts/>
      <h2>Challenges</h2>
      <ChallengesUser />
    </div>
  )
}

  
export default DashboardUser
