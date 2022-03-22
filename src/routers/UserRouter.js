import { Routes, Route } from 'react-router-dom';

import DashboardUser from "../components/DashboardUser/DashboardUser";

export const UserRouter = () => {
    return (
            <Routes>
                <Route path="/" element={< DashboardUser/>} />
            </Routes>
            )
}