import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "../providers/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, token, logout } = useAuth();

  const nav = (path) => {
    console.log("rerouting");
    navigate(path);
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Button onClick={() => nav("/")} variant="contained" size="small">
          Home
        </Button>
        <Button onClick={() => nav("/about")} variant="contained" size="small">
          About
        </Button>
        <Button
          onClick={() => nav("/profile")}
          variant="contained"
          size="small"
        >
          Profile
        </Button>
      </div>
      <div>
        {!token ?(
          <>
        <Button onClick={() =>auth("google")}>
          Login with GOOGLE
        </Button>
        <Button onClick={() => auth("oid")}>
          Login with MY OID
        </Button>
          </>
        )
        :
        <Button onClick={logout}>
          Logout
        </Button>
        }
      </div>
    </nav>
  );
};

export default Navbar;
