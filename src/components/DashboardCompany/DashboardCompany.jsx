import { logout } from "../../features/company/companySlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const DashboardCompany = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = (e) =>{
    e.preventDefault();
    dispatch(logout());
    navigate("/loginCompany");
  }

    return (
      <div>Bienvenido a DashboardCompany - <Link to ="/" onClick={onLogout} className="link">Logout</Link></div>
    )
  }
  
  export default DashboardCompany