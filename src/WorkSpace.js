import React from "react";
import AddPosition from "./AddPosition";
import Table from "./Table";

const styles = {
  div: {
    display: "flex"
  }
};
export default class WorkSpace extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.div}>
        <AddPosition />
        <Table />
      </div>
    );
  }
}
