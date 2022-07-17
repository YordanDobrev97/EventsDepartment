import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/MainLayout';
import HomePage from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";

import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";

import NewEvent from "./pages/Dashboard/NewEvent";
import EventDetails from "./pages/Dashboard/EventDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>

          <Route path="dashboard" element={<DashboardLayout />}>
              <Route path="home" element={<Dashboard />} />

              <Route path="new-event" element={<NewEvent />}/>
              <Route path="event/:id" element={<EventDetails />}/>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
