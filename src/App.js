import { useContext, useEffect } from "react";

import AStar from "./features/AStar";
import GlobalContext from "./context/GlobalContext";

const App = () => {
  const { algorithm } = useContext(GlobalContext);

  useEffect(() => {
    const originalWarn = console.warn;
    console.warn = function () {};
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return (
    <>
     <AStar />
    </>
      
  );
};

export default App;
