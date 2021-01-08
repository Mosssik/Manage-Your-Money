import React from "react";

const styles = {
  div: {
    textAlign: "left"
  },
  input: {
    margin: "30px 0 10px 287px",
    backgroundColor: "rgba(0, 0, 0, 0.15 )",
    borderRadius: "10px",
    outline: "none"
  }
};

export default class SearchPosition extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.div}>
        <input
          type="text"
          style={styles.input}
          placeholder="search by position"
        />
      </div>
    );
  }
}
