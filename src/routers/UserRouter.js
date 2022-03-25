import { Routes, Route } from 'react-router-dom';

import DashboardUser from "../components/DashboardUser/DashboardUser";
import Forms from '../components/DashboardUser/Forms/Forms';
import PostDetailUser from "../components/DashboardUser/PostsUser/PostDetailUser/PostDetailUser"
import ProfileUser from '../components/DashboardUser/ProfileUser/ProfileUser';
import Sidebar from "../components/Sidebar/Sidebar"

export const UserRouter = () => {
    return (
        <>
        <Sidebar />
            <Routes>
            <Route path="/" element={< DashboardUser />} />
            <Route path="/post/:id" element={<PostDetailUser />} />
            <Route path="/profile/:id" element={<ProfileUser />} />
            <Route path="/forms" element={<Forms />} />
            </Routes>
        </>
            )
}