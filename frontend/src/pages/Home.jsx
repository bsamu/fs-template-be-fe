import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useCounter } from "../hooks/useCounter";
import { useCounter as useGlobalCounter } from "../providers/counter";
import { useAuth } from "../providers/auth";

const Home = () => {
  const { counter, increment, decrement } = useCounter("Home");
  const { value, increment: goUp, decrement: goDown } = useGlobalCounter();

  const { auth, token } = useAuth();

  return (
    <div>
      <h3>Home</h3>
      <p>{token ? "Logged in" : "Anonymus"}</p>
      <h4>Counter: {counter}</h4>
      <Button onClick={decrement} variant="contained" size="small">
        -
      </Button>
      <Button onClick={increment} variant="contained" size="small">
        +
      </Button>
      <h4>Provider Value: {value}</h4>
      <Button onClick={goDown} variant="contained" size="small">
        -
      </Button>
      <Button onClick={goUp} variant="contained" size="small">
        +
      </Button>
      {token ? (
        <>
          <br />
          <p>Welcome</p>
        </>
      ) : (
        <>
        <Button onClick={() => auth("google")} variant="contained" color="info" size="small">
          Google login
        </Button>
        <Button onClick={() => auth("oid")} variant="contained" color="info" size="small">
          My login
        </Button>
         </>
      )}
    </div>
  );
};

export default Home;
