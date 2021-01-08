import React from "react";

const styles = {
  div: {
    display: "flex",
    justifyContent: "space-between",
    width: "250px",
    alignItems: "right",
    marginRight: "100px",
    marginLeft: "auto"
  },
  span: {
    padding: "5px",
    fontFamily: "sans-serif",
    fontWeight: "bold"
  }
};

export default function FinalChanges() {
  return (
    <div style={styles.div}>
      <span style={styles.span}>Итого приход</span>
      <span style={styles.span}>Итого расход</span>
    </div>
  );
}
