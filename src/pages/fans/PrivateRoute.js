import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // const navigate = useNavigate()
  const token = localStorage.getItem("access_token");
  if (!token) {
    return (
      <Navigate
        to={
          location.pathname.includes("fans") ? "/fans/login" : "/artistes/login"
        }
      />
    );
  }

  return children;
};

export default PrivateRoute;
