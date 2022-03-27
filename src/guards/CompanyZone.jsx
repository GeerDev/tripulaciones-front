import { Navigate } from "react-router-dom";

const AdminZone = ({ children }) => {
    const company = JSON.parse(localStorage.getItem("company"));
    return company?.company.rol == "company" ? children : <Navigate to="/loginCompany" />;
}

export default AdminZone;