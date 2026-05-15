import "./maincode.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CodeAdvanced from "./codeAdvanced.jsx";
import CodeBeginner from "./codeBeginner.jsx";
import Navbarcode from "./navbarcode.jsx";

function Home() {
  return (
    <div className="page">
      <div className="main-btns bg-white">
        <h1>Choose Your Mode</h1>

        <div className="mode-desc animate__animated animate__fadeIn">
          Select a mode to start your coding journey!
        </div>

        <div className="row"> 
          <div className="col-6">
            <Link to="/advanced">
              <button className="animate__animated animate__lightSpeedInLeft">⚡ Advanced</button>
            </Link>
          </div>

          <div className="col-6">
            <Link to="/beginner">
              <button className="animate__animated animate__lightSpeedInRight">👨‍🎓 Beginner</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainCode() {
  return (
    <Router>
      <Navbarcode />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advanced" element={<CodeAdvanced />} />
        <Route path="/beginner" element={<CodeBeginner />} />
      </Routes>
    </Router>
  );
}