import CompaniesAdmin from "./CompaniesAdmin/CompaniesAdmin";
import "./DashboardAdmin.scss";

const DashboardAdmin = () => {
  return (
    <div className="admin_ancho">
      <h2 className="title">Panel de administración</h2>
      <hr />

      <CompaniesAdmin />
    </div>
  );
};

export default DashboardAdmin;
