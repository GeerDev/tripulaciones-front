import { Routes, Route } from "react-router-dom";
import ChallengesAdmin from "../components/DashboardAdmin/ChallengesAdmin/ChallengesAdmin";

import DashboardAdmin from "../components/DashboardAdmin/DashboardAdmin";
import Sidebar from "../components/Sidebar/Sidebar";

export const AdminRouter = () => {
  return (
    <div className="router-div-company">
      <Sidebar />
      <div className="container-company-routes">
        <Routes>
          <Route path="/" element={<DashboardAdmin />} />
          <Route path="/challenges" element={<ChallengesAdmin />} />
        </Routes>
      </div>
    </div>
  );
};
