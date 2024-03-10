import React, { useState } from "react";
import Launch from "./launch";

export const ProcessCtx = React.createContext();

const App = () => {
  const process = [<Launch/>];
  const [index, setIndex] = useState(0);

  const processContral = () => {
    if ( index + 1 < process.length ) {
      setIndex(prev => prev + 1)
    }
  }

  return (
    <ProcessCtx.Provider value={processContral}>
      {process[index]}
    </ProcessCtx.Provider>
  )
} 

export default App