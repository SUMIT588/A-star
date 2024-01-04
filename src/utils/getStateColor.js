import { finalNumbers, initialNumbers } from "../data/data";

import checkArrayEqual from "./checkArrayEqual";

const getStateColor = (state) => {
  if (state.isRecursive) return "#a3a3a3";
  if (checkArrayEqual(state.numbers, initialNumbers)) return "#d643e2";
  if (checkArrayEqual(state.numbers, finalNumbers)) return "green";

  return "#e28743";
};

export default getStateColor;
