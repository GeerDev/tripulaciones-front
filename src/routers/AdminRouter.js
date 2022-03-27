import { Routes, Route } from 'react-router-dom';

import DashboardAdmin from "../components/DashboardAdmin/DashboardAdmin";
import Sidebar from '../components/Sidebar/Sidebar';

export const AdminRouter = () => {
    return (
        <>
        <Sidebar/>
            <Routes>
                <Route path="/" element={< DashboardAdmin/>} />
            </Routes>
        </>
            )
}