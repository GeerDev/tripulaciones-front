import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, getCompanyById } from "../../features/company/companySlice";
import { logoutUser, getById } from "../../features/user/userSlice";
import { useEffect } from "react";
import profile from "../../img/profile.svg";
import home from "../../img/home.svg";
import checklist from "../../img/checklist.svg";
import logoSidebar from "../../img/logo-sidebar.svg";
import logoutapp from "../../img/logout.svg";
import "./Sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, userNow } = useSelector((state) => state.user);

  const { company, companyInfo } = useSelector((state) => state.company);

  const onLogoutUser = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/loginuser");
  };

  const onLogoutCompany = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/loginCompany");
  };

  useEffect(() => {
    if (user !== null) {
      dispatch(getById(user.user._id));
    } else {
      dispatch(getCompanyById(company.company._id));
    }
  }, []);

  return (
    <>
      {company ? (
        <nav className="sidebar-nav card animate__animated animate__fadeInLeft">
          <>
            <img src={logoSidebar} className="logo-sidebar" />
            <div className="profile-div">
              <div className="profile-img">
                {company.company.imageCompany ?
(                <img
                  className="img-company-profile"
                  src={
                    `http://localhost:4000/images/Company/` +
                    company.company.imageCompany
                  }
                />) : (<img
                  className="img-company-profile"
                  src={
                    `https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg`
                  }
                />)
              }
              </div>
              
              <h3 className="name-profile-sidebar">{company?.company.name}</h3>

              <ul>
                <li>
                  <Link to={`/company`}>
                    <img src={home} />
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/company/profile/${company?.company._id}`}>
                    <img src={profile} />
                    <span>{company?.company.name}</span>
                  </Link>
                </li>

                <li>
                  <Link to="/logincompany" onClick={onLogoutCompany}>
                    <img src={logoutapp} />
                    <span>Cerrar sesión</span>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        </nav>
      ) : (
        <>
          {user.user.role === "admin" ? (
            <nav className="sidebar-nav-admin card animate__animated animate__fadeInLeft">
              {user && (
                <>
                 <img src={logoSidebar} className="logo-sidebar" />
                 <div className="profile-div">
                 <div className="profile-img">
                    {userNow.imageUser ? (
	  <img className="img-user-profile" src={`http://localhost:4000/images/User/` + userNow.imageUser} alt="Imagen User"/>
    ) : (<img className="img-user-profile" src={`https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg`} alt="Imagen User"/>)
    }
    </div>
    <h3 className="name-profile-sidebar">{userNow.name}</h3>
                    </div>
                  <ul>
                    
                    <li>
                      <Link to={`/admin`}>
                        {" "}
                        <img src={home} />
                        <span>Inicio</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/challenges">
                        <img src={checklist} />
                        <span>Retos</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/loginuser" onClick={onLogoutUser}>
                        <img src={logoutapp} />
                        <span>Cerrar sesión</span>
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </nav>
          ) : (
            <nav className="sidebar-nav card animate__animated animate__fadeInLeft">
              {user && (
                <>
                  <img src={logoSidebar} className="logo-sidebar" />
                  <div className="profile-div">
                    <div className="profile-img">
                    {userNow.imageUser ? (
	  <img className="img-user-profile" src={`http://localhost:4000/images/User/` + userNow.imageUser} alt="Imagen User"/>
    ) : (<img className="img-user-profile" src={`https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg`} alt="Imagen User"/>)
    }
                    </div>
                    <h3 className="name-profile-sidebar">{userNow.name}</h3>
                    <ul>
                      <li>
                        <Link to={`/user`}>
                          <img src={home} />
                          <span>Inicio</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`/user/profile/${user?.user._id}`}>
                          <img src={profile} />
                          <span>Perfil</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/user/forms">
                          <img src={checklist} />
                          <span>Formularios</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/loginuser" onClick={onLogoutUser}>
                          <img src={logoutapp} />
                          <span>Cerrar sesión</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </nav>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;
