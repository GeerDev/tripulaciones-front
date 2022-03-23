import { Routes, Route } from 'react-router-dom';

import DashboardUser from "../components/DashboardUser/DashboardUser";
import Sidebar from "../components/Sidebar/Sidebar"

export const UserRouter = () => {
    return (
        <Sidebar>
            <Routes>
            <Route path="/" element={< DashboardUser />} />
            </Routes>
            </Sidebar>
            )
}