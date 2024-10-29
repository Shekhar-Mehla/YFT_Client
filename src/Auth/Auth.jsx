import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { userdata } from "../context/ContextApi.jsx";

const Auth = ({ children }) => {
  const { user } = userdata();
  const location = useLocation();
  console.log(user);

  return user?._id ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Auth;
