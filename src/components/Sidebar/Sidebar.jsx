import { useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/company/companySlice";
import { logoutUser } from "../../features/user/userSlice";


const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        { company ?
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
                    <nav>
                    {user &&
                        <>
                            <ul>
                                <li>
                                    <Link to={`/user/profile/${user?.user._id}`}>
                                        {user?.user.name}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/user`}>
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/user/forms'>
                                        Pruebas
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
            }
            </>
        }
        </>
    )
}

export default Sidebar;