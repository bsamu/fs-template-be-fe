import { Button, Input } from "@mui/material";
import React from "react";
import { useState } from "react";
import http from "axios";
import { useNavigate } from "react-router-dom";
import { toDoApi } from "../api/toDoApi";
import { useAuth } from "../providers/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const triggerRegister = async () => {
    await register(username);
    navigate("/profile");
  };

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
      <Button onClick={triggerRegister}>Register</Button>
    </>
  );
};

export default Register;
