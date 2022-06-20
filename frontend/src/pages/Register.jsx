import { Button, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toDoApi } from "../api/toDoApi";
import { useAuth } from "../providers/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { user, register, auth } = useAuth();

  useEffect(() => {
    if (user.userId) navigate("/profile");
  }, [user]);

  return (
    <>
      Register
      <br />
      <Input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <Button onClick={() => register(username)}>Register</Button>
      <hr />
      <h1>OR!</h1>
      <hr />
      <Button onClick={() => auth("google")}>Google</Button>
      <Button onClick={() => auth("oid")}>Oid</Button>
    </>
  );
};

export default Register;
