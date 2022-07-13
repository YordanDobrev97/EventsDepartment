
import { appState } from "../../store/store";

const Dashboard = () => {
    const { user } = appState();
    return (
        <>
            <h1>Welcome, {user.fullName}</h1>
        </>
    )
}

export default Dashboard;