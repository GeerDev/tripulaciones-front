import { Navigate } from "react-router-dom";

const CompanyZone = ({ children }) => {
    const company = JSON.parse(localStorage.getItem("company"));
    console.log(company);
    return company ? children : <Navigate to="/" />;
}

export default CompanyZone;