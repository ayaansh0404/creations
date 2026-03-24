import React from "react";
import { Link } from "react-router-dom";

export default function Navbarcode() {
  return (
    <div className="row bg-danger p-2 rouded-5">
      <div className="col-6"><Link to="/advanced">
        <button>Advanced</button>
      </Link></div>
      <Link className="col-6" to="/beginner">
        <button className="bg-danger">Beginner</button>
      </Link>
    </div>
  );
}