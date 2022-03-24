import { useDispatch, useSelector} from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/user/userSlice";


const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user)
    
    const onLogoutUser = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        navigate ('/loginuser')
    }
    /* const onLogoutCompany = (e) => {
        e.preventDefault();
        dispatch(logoutCompay);
        navigate ('/logincompany')
    } */
    return (
        <nav>
            <div> {user ?
                <>
                    <ul>
                        <li>
                            <Link to='/'>
                                {user?.user.name}
                            </Link>
                        </li>
                        <li>
                            <Link to='/' onClick={onLogoutUser}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </>
                :
                <>
                    <ul>
                        <li> <Link to='/registeruser'>Registro</Link> </li>
                        <li> <Link to='/loginuser'>Login</Link> </li>
                    </ul>
                </>
            }
            </div>
        </nav>
    )
}

export default Sidebar;