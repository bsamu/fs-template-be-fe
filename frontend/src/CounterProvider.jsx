import { React, useState, useContext, createContext } from "react";
const CounterContext = createContext();

// custom hook bro
const useCounter = () => {
  return useContext(CounterContext);
};

const CounterProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  const contextValue = { increment, decrement, value };

  return <CounterContext.Provider value={{ increment, decrement, value }}>{children}</CounterContext.Provider>;
};

export { CounterProvider, useCounter };