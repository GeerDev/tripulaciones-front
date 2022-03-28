import { Routes, Route } from 'react-router-dom';
import DashboardCompany from "../components/DashboardCompany/DashboardCompany";
import ProfileCompany from '../components/DashboardCompany/ProfileCompany/ProfileCompany';
import EditCompany from '../components/DashboardCompany/EditCompany/EditCompany';
import Sidebar from '../components/Sidebar/Sidebar';

export const CompanyRouter = () => {
    return (
        <div className='router-div-company'>
            <Sidebar />
            <div className='container-company-routes'>
                <Routes>
                    <Route path="/" element={< DashboardCompany />} />
                    <Route path="/profile/:_id" element={<ProfileCompany />} />
                    <Route path="/edit/:_id" element={<EditCompany />} />
                </Routes>
            </div>

        </div>
    )
}