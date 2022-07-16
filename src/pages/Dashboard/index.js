import { Link } from "react-router-dom";
import EventTable from "../../components/EventTable";
import { appState } from "../../store/store";

const Dashboard = () => {
    const { user } = appState();
    return (
        <div className="row">
            <h1>Welcome, {user.fullName}</h1>

            <Link to="/dashboard/new-event" className="waves-effect waves-light btn">New Event</Link>

            <EventTable />
        </div>
    )
}

export default Dashboard;