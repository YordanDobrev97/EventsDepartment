import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo">Event Department</a>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <Link to="/sign-in">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/sign-up">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;