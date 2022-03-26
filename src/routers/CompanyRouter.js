import { Routes, Route } from 'react-router-dom';

import DashboardCompany from "../components/DashboardCompany/DashboardCompany";
import CompanyZone from "../guards/CompanyZone";
export const CompanyRouter = () => {
    return (
            <Routes>
                <Route path="/" element={< DashboardCompany/>} />
                <Route path="/profile" />
            </Routes>
            )
}