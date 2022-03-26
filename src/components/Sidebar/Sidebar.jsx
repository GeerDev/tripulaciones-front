import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/user/userSlice";
import './Sidebar.scss';
import logoSidebar from '../../img/logo-sidebar.svg'
import profile from '../../img/profile.svg'
import home from '../../img/home.svg'
import checklist from '../../img/checklist.svg'
import logout from '../../img/logout.svg'


const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userNow } = useSelector(state => state.user)
    const { name, imageUser } = userNow
    const { user } = useSelector((state) => state.user)

    const onLogoutUser = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        navigate("/loginuser");
    }

    return (
        <nav className="sidebar-nav">
            <div> {user &&
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
                </div>
                    <ul>
                        <li >
                            <Link to={`/user`} >
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
                                <img src={logout} />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </>
            }
            </div>
        </nav>
    )
}

export default Sidebar;