import { Routes, Route } from 'react-router-dom';

import DashboardCompany from "../components/DashboardCompany/DashboardCompany";
import Sidebar from '../components/Sidebar/Sidebar';

export const CompanyRouter = () => {
    return (
        <>
        <Sidebar />
            <Routes>
                <Route path="/" element={< DashboardCompany/>} />
            </Routes>
        </>
            )
}