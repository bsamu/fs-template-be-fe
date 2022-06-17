import { Button, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toDoApi } from "../api/toDoApi";
import { useAuth } from "../providers/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { user, register } = useAuth();

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
    </>
  );
};

export default Register;
