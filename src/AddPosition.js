import React from "react";
import { AddInTable } from "./Table";
const styles = {
  div: {
    width: "200px"
  },
  input: {
    display: "block",
    margin: "10px 10px",
    outline: "none"
  },
  select: {
    display: "block",
    margin: "10px 10px",
    width: "177px",
    height: "22px",
    outline: "none"
  },
  button: {
    display: "block",
    margin: "10px 10px",
    width: "177px"
  }
};

export default class AddPosition extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.div}>
        <select type="number" style={styles.select}>
          <option>Доходы</option>
          <option>Расходы</option>
        </select>
        <input
          type="text"
          style={styles.input}
          placeholder="Категория дохода/расхода"
        />
        <input type="text" style={styles.input} placeholder="Сумма" />
        <button style={styles.button} onClick={AddInTable}>
          Add position
        </button>
      </div>
    );
  }
}
