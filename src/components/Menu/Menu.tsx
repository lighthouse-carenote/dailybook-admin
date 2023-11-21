import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const pathNames = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate("/")}>Dashboard</div>
      <div onClick={() => navigate("/system")}>System</div>
      <div onClick={() => navigate("/dailybook")}>Dailybook</div>
    </div>
  );
};

export default Menu;
