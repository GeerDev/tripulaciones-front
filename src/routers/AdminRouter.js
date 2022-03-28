import { Routes, Route } from "react-router-dom";
import ChallengesAdmin from "../components/DashboardAdmin/ChallengesAdmin/ChallengesAdmin";

import DashboardAdmin from "../components/DashboardAdmin/DashboardAdmin";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminZone from "../guards/AdminZone";

export const AdminRouter = () => {
  return (
    <>
      <AdminZone>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardAdmin />} />
          <Route path="/challenges" element={<ChallengesAdmin />} />
        </Routes>
      </AdminZone>
    </>
  );
};
