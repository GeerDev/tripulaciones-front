import { Routes, Route } from 'react-router-dom';
import DashboardUser from "../components/DashboardUser/DashboardUser";
import EditUser from '../components/DashboardUser/EditUser/EditUser';
import Forms from '../components/DashboardUser/Forms/Forms';
import PostDetail from "../components/DashboardUser/Posts/PostDetail/PostDetail"
import ProfileUser from '../components/DashboardUser/ProfileUser/ProfileUser';
import Sidebar from "../components/Sidebar/Sidebar"
import './UserRoute.scss'

export const UserRouter = () => {
    return (
        <div className='route-div'>
        <Sidebar />
            <Routes>
            <Route path="/" element={< DashboardUser />} />
            <Route path="/post/:_id" element={<PostDetail />} />
            <Route path="/profile/:_id" element={<ProfileUser />} />
            <Route path="/edit/:_id" element={<EditUser />} />
            <Route path="/forms" element={<Forms />} />
            </Routes>
        </div>
            )
}