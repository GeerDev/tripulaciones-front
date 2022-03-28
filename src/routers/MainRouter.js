import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import InitialScreen from "../components/InitialScreen/InitialScreen";

import LoginCompany from "../components/AuthCompany/LoginCompany/LoginCompany";
import RegisterCompany from "../components/AuthCompany/RegisterCompany/RegisterCompany";
import LoginUser from "../components/AuthUser/LoginUser/LoginUser";
import RegisterUser from "../components/AuthUser/RegisterUser/RegisterUser"

import NotFound from "../components/NotFound/NotFound"

import { UserRouter } from "./UserRouter";
import { CompanyRouter } from "./CompanyRouter";
import { AdminRouter } from "./AdminRouter";

export const MainRouter = () => {
    return (
        <Router>
          <Routes>
              <Route path="/" element={< InitialScreen/>} />

              <Route path="/logincompany" element={<LoginCompany />} />
              <Route path="/registercompany" element={<RegisterCompany />} />

              <Route path="/loginuser" element={<LoginUser />} />
              <Route path="/registeruser" element={<RegisterUser />} />
              
              <Route path="/user/*" element= { <UserRouter /> } />
              <Route path="/company/*" element= { <CompanyRouter /> } />
              <Route path="/admin/*" element= { <AdminRouter /> } />

              <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Router>
    )
}