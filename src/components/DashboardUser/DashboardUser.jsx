import Posts from "./Posts/Posts"
import React from 'react'
import ChallengesUser from "./ChallengesUser/ChallengesUser"


const DashboardUser = () => {
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
