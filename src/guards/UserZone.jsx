import { Navigate } from "react-router-dom";

const UserZone = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.user.rol == "user" ? children : <Navigate to="/loginuser" />;
}

export default UserZone;