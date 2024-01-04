import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

const Header = ({ generatePossibleState, reset, showGenerateButton }) => {
  const { algorithm, setAlgorithm } = useContext(GlobalContext);

  const handleChange = (e) => {
    setAlgorithm(e.target.value);
  };

  return (
    <div className="content">
      <div className="title-wrapper">
        <h2 className="title">Heuristic Approach</h2>
        <h3>Using manhatton distance</h3>
        <h4>Total misplaced tiles : 4</h4>
      </div>
      <div>
        {showGenerateButton && (
          <button className="button" onClick={generatePossibleState}>
            {algorithm === "bfs" || algorithm === "aStar" ? "Next" : "Generate"}
          </button>
        )}
        <button
          className="button"
          style={{ backgroundColor: "#800080" }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Header;
