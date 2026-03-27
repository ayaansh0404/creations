import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbarcode() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    <div className="row bg-danger p-2 rounded-5">
      <select
        className="col-6 bg-success text-white rounded-5 p-3 w-2"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>Select Mode</option>
        <option value="/advanced">Advanced</option>
        <option value="/beginner">Beginner</option>
      </select>
    </div>
  );
}