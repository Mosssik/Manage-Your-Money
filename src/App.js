import React from "react";
import "./styles.css";
import FinalChanges from "./FinalChanges";
import SearchPosition from "./SearchPosition";
import WorkSpace from "./WorkSpace";

export default function App(props) {
  return (
    <div className="App">
      <FinalChanges />
      <SearchPosition />
      <WorkSpace />
    </div>
  );
}
