import { Routes, Route } from 'react-router-dom';

import DashboardCompany from "../components/DashboardCompany/DashboardCompany";

export const CompanyRouter = () => {
    return (
            <Routes>
                <Route path="/" element={< DashboardCompany/>} />
            </Routes>
            )
}