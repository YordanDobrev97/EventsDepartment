import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import HomePage from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="sign-up" element={<SignUp />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
