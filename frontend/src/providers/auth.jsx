import { React, useState, useEffect, useContext, createContext } from "react";
import http from "axios";
import jwt from "jwt-decode";
import { toDoApi } from "../api/toDoApi";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const { post } = toDoApi();

  const auth = () => {
    const googleBaseUrl = "https://accounts.google.com/o/oauth2/v2/auth";

    const searchParams = new URLSearchParams();
    searchParams.append("response_type", "code");
    searchParams.append(
      "client_id",
      "651816047225-1us03r4vchvce7h51t0c49f4u0ip7ubm.apps.googleusercontent.com"
    );
    searchParams.append("redirect_uri", "http://localhost:3000/callback"); // /callback/${provider} later
    searchParams.append("scope", "openid");
    searchParams.append("prompt", "select_account");

    const completeUrl = googleBaseUrl + "?" + searchParams.toString();
    window.location.href = completeUrl;
  };

  const login = async (code, provider) => {
    try {
      const response = await http.post("http://localhost:4000/api/user/login", {
        code,
        provider,
      });
      console.log("data", response.data);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setUser(jwt(response.data.token));
      console.log(user);
    } catch (err) {
      console.log(err);
      setToken(null);
      localStorage.removeItem("token");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const register = async (username) => {
    const response = post("/user/create", { username });

    if (response?.status === 200) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setUser(jwt(response.data.token));
    }
  };

  const contextValue = { token, auth, logout, login, user, register };

  useEffect(() => {
    const tokenInStorage = localStorage.getItem("token");
    if (tokenInStorage) {
      setToken(tokenInStorage);
      setUser(jwt(tokenInStorage));
    }
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  ); // provide value for my context
};

// custom hook bro
const useAuth = () => {
  const context = useContext(AuthContext); // read the context and subscribe to its changes
  if (!context) throw new Error("add AuthProvider to route"); // dev help only
  return context;
};

export { AuthProvider, useAuth };
