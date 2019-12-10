import React, { useState, createContext } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = props => {
  const [scrollHeight, setScrollHeight] = useState(0);

  return (
    <ScrollContext.Provider value={[scrollHeight, setScrollHeight]}>
      {props.children}
    </ScrollContext.Provider>
  );
};
