import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import InitialScreen from "../components/InitialScreen/InitialScreen";

import LoginCompany from "../components/AuthCompany/LoginCompany/LoginCompany";
import RegisterCompany from "../components/AuthCompany/RegisterCompany/RegisterCompany";
import LoginUserAdmin from "../components/AuthUserAdmin/LoginUserAdmin/LoginUserAdmin";
import RegisterUserAdmin from "../components/AuthUserAdmin/RegisterUserAdmin/RegisterUserAdmin";

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
              <Route path="/loginuseradmin" element={<LoginUserAdmin />} />
              <Route path="/registeruseradmin" element={<RegisterUserAdmin />} />
    
              <Route path="/user/*" element= { <UserRouter /> } />
              <Route path="/company/*" element= { <CompanyRouter /> } />
              <Route path="/admin/*" element= { <AdminRouter /> } />

              <Route path="*" element={ <NotFound />  } />
          </Routes>
        </Router>
    )
}