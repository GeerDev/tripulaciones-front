import { useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/user/userSlice";


const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user)
    
    const onLogoutUser = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        navigate("/loginuser");
    }

    return (
        <nav>
            <div> {user &&
                <>
                    <ul>
                        <li>
                            <Link to={`/user/profile/${user?.user._id}`}>
                                {user?.user.name}
                            </Link>
                        </li>
                        <li>
                            <Link to={`/user`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/user/forms'>
                                Forms
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
            </div>
        </nav>
    )
}

export default Sidebar;