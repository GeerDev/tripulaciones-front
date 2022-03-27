import Posts from "./Posts/Posts"
import {useSelector } from "react-redux";
import React from 'react'
import ChallengesUser from "./ChallengesUser/ChallengesUser"




const DashboardUser = () => {
  const { userNow } = useSelector(state => state.user)
  const { name, imageUser } = userNow
  return (
    <div>
      <h1>Dashboard User</h1>
      <h2>Posts</h2>
      <Posts/>
      <h2>Challenges</h2>
      <ChallengesUser />
    </div>
  )
}

  
export default DashboardUser
