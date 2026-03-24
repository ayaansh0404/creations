import "./maincode.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CodeAdvanced from "./codeAdvanced.jsx";
import Navbarcode  from "./navbarcode.jsx";

function Home() {
  return (
    <div className="page">
      <div className="main-btns bg-white">
        <h1>Choose Your Mode</h1>

        <div className="mode-desc">
          Select a mode to start your coding journey!
        </div>

        <Link to="/advanced">
          <button>⚡ Advanced</button>
        </Link>

        <a href="code/codeBeginer.html" target="_blank" rel="noreferrer">
          <button>👨‍🎓 Beginner</button>
        </a>
      </div>
    </div>
  );
}

export default function MainCode() {
  return (
    <Router><Navbarcode/>
      <Routes>
        <Route path="/advanced" element={<CodeAdvanced />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}