import { Routes, Route } from 'react-router-dom';

import DashboardCompany from "../components/DashboardCompany/DashboardCompany";
import LoginCompany from "../components/LoginCompany/LoginCompany";
import RegisterCompany from "../components/RegisterCompany/RegisterCompany";
export const CompanyRouter = () => {
    return (
            <Routes>
                <Route path="/" element={< DashboardCompany/>} />
                <Route path="/" element={< LoginCompany/>} />
                <Route path="/" element={< RegisterCompany/>} />
            </Routes>
            )
}