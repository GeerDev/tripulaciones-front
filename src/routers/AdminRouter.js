import { Routes, Route } from 'react-router-dom';

import DashboardAdmin from "../components/DashboardAdmin/DashboardAdmin";

export const AdminRouter = () => {
    return (
            <Routes>
                <Route path="/" element={< DashboardAdmin/>} />
            </Routes>
            )
}