import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    const user = useSelector((state) => state.user);
    
    const logOut = () => {
        
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
                                    <button onClick={logOut}>LogOut</button>
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