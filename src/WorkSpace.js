import React from "react";
import AddPosition from "./AddPosition";
import { Table } from "./Table";

const styles = {
  div: {
    display: "flex"
  }
};
export default function WorkSpace() {
  return (
    <div style={styles.div}>
      <AddPosition />
      <Table />
    </div>
  );
}
