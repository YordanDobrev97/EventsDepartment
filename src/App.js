import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="sign-up" element={<SignUp />}/>
            <Route path="sign-in" element={<SignIn />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
