import React, { useEffect } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Protected = ({ children }) => {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
    if (!user.userId) {
      return navigate("/register");
    }
    // eslint-disable-next-line
  }, [token, user]);

  return (
    <>
      {!token ? (
        <Navigate to={"/"} />
      ) : !user.userId && location.pathname !== "/register" ? (
        <Navigate to={"/register"} />
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </>
  );
};

export default Protected;
