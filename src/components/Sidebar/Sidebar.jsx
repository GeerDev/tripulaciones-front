import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/company/companySlice";
import { logoutUser } from "../../features/user/userSlice";
import './Sidebar.scss';
import profile from '../../img/profile.svg'
import home from '../../img/home.svg'
import checklist from '../../img/checklist.svg'
import logoSidebar from '../../img/logo-sidebar.svg'
import logoutapp from '../../img/logout.svg'


const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userNow } = useSelector(state => state.user)
    const { name, imageUser } = userNow
    const { user } = useSelector((state) => state.user)
    const { company } = useSelector((state) => state.company)

    const onLogoutUser = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        navigate("/loginuser");
    }

    const onLogoutCompany = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate("/loginCompany");
    }

    return (
        <>
            {company ?
                <nav>
                    <>
                        <ul>
                            <li>
                                {/* <Link to={`/company/profile/${user?.user._id}`}> */}
                                {company?.company.name}
                                {/* </Link> */}
                            </li>
                            <li>
                                <Link to='/logincompany' onClick={onLogoutCompany}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </>
                </nav>
                :
                <>
                    {
                        user.user.role === 'admin' ?
                            <nav>
                                {user &&
                                    <>
                                        <ul>
                                            <li>
                                                {user?.user.name}
                                            </li>
                                            <li>
                                                <Link to={`/admin`}>
                                                    Inicio
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/admin/challenges'>
                                                    Retos
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/loginuser' onClick={onLogoutUser}>
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </>
                                }
                            </nav>
                            :
                            <nav className="sidebar-nav" >
                                {user &&
                                    <>
                                        <img src={logoSidebar} className="logo-sidebar" />
                                        <div className="profile-div">
                                            <div className="profile-img">
                                                <img
                                                    className="img-user-profile"
                                                    src={`http://localhost:4000/images/User/` + imageUser}
                                                />
                                            </div>
                                            <h3 className="name-profile-sidebar">{name}</h3>

                                            <ul>
                                                <li>
                                                    <Link to={`/user`}>
                                                        <img src={home} />
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`/user/profile/${user?.user._id}`}>
                                                        <img src={profile} />
                                                        {user?.user.name}
                                                    </Link>

                                                </li>
                                                <li>
                                                    <Link to='/user/forms'>
                                                        <img src={checklist} />
                                                        Forms
                                                    </Link>

                                                </li>
                                                <li>
                                                    <Link to='/loginuser' onClick={onLogoutUser}>
                                                        <img src={logoutapp} />
                                                        Logout
                                                    </Link>

                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                }
                            </nav>
                    }
                </>
            }
        </>
    )
}

export default Sidebar;