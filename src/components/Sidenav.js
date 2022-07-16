import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaCircle, FaSignOutAlt, FaHome } from "react-icons/fa";
import { logOut } from "../features/userSlice";

const Sidenav = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logOut());
        navigation("/")
    }
    return (
        <>
            <div className="side-nav">
                <h3>My events</h3>

                <ul className="side-menu">
                    <li className="side-item">
                        <Link to="/dashboard/home" style={{color: "white"}}>
                            <FaHome className="menu-icon" />
                            Home
                        </Link>
                    </li>
                    <li className="side-item">
                        <FaCircle className="menu-icon" />
                        All
                    </li>
                    <li className="side-item">
                        <FaCircle className="menu-icon" style={{ color: "#64D0C9" }} />
                        Free
                    </li>
                    <li className="side-item">
                        <FaCircle className="menu-icon" style={{ color: "#819ED6" }} />
                        Paid
                    </li>
                    <li className="side-item">
                        <FaCircle className="menu-icon" style={{ color: "#819ED6" }} />
                        Online
                    </li>
                    <li className="side-item">
                        <FaCircle className="menu-icon" style={{ color: "#EA8520" }} />
                        Offline
                    </li>
                </ul>

                <button onClick={logout} className="side-logout-btn">
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </>
    )
}

export default Sidenav;