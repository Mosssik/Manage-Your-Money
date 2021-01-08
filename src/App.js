import React from "react";
import "./styles.css";
import FinalChanges from "./FinalChanges";
import SearchPosition from "./SearchPosition";
import WorkSpace from "./WorkSpace";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <FinalChanges />
        <SearchPosition />
        <WorkSpace />
      </div>
    );
  }
}
