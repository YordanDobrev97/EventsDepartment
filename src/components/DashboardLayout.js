import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";

import "../styles/dashboard-layout.css";

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
           <Sidenav />

            <Outlet />
        </div>
    )
}

export default DashboardLayout;