import React, { useState } from "react";
import ComponentsOne from "./components/ComponentsOne";
import { createContext } from "react";
import { ComponentsThree } from "./components/ComponentsThree";

export const Context = createContext();

const App = () => {
  const [data, setData] = useState({ name: "terry", age: 19 });

  const hundleClick = (x) => {
    alert(x);
  };

  return (
    <>
      <Context.Provider value={{ data, hundleClick }}>
        <ComponentsOne />
        <ComponentsThree />
      </Context.Provider>
    </>
  );
};

export default App;

// context => React => createContext
// createContext => Context
// <> APP </> => Context.Provider
// data => Context.Provider => value => obj
// contextCu => () => return
