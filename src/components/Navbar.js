import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { logOut } from "../features/userSlice";
import "../styles/navbar.css";

const Navbar = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    
    const logout = () => {
        dispatch(logOut());
        navigation("/")
    }

    return (
        <>
            <nav className="nav">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Event Department</Link>
                    <ul className="right hide-on-med-and-down">
                        {user.fullName ? (
                            <>
                                <li>
                                    Hello, {user.fullName}
                                </li>
                                <li>
                                    <button onClick={logout}>LogOut</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/sign-in">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/sign-up">Sign Up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;