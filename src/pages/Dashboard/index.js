import EventTable from "../../components/EventTable";
import { appState } from "../../store/store";

const Dashboard = () => {
    const { user } = appState();
    return (
        <div className="row">
            <h1>Welcome, {user.fullName}</h1>

            <button className="waves-effect waves-light btn">New Event</button>

            <EventTable />
        </div>
    )
}

export default Dashboard;