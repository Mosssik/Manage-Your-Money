import React from "react";

const styles = {
  div: {
    margin: "0 auto",
    display: "flex"
  },
  table: {
    borderCollapse: "collapse"
  },
  tdHead: {
    padding: "5px",
    border: "1px solid",
    width: "300px",
    height: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.15 )",
    fontWeight: "bold"
  },
  tdFoot: {
    padding: "5px",
    border: "1px solid",
    width: "300px",
    height: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.15 )"
  },
  button: {
    display: "block",
    margin: "20px 0"
  },
  img: {
    width: "20px",
    height: "20px"
  }
};
const imageTrash = "https://s.svgbox.net/hero-outline.svg?ic=trash&fill=000000";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.div}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tr}>
              <td style={styles.tdHead}>Доход/расход</td>
              <td style={styles.tdHead}>Категория</td>
              <td style={styles.tdHead}>Сумма</td>
            </tr>
          </thead>
          <tfoot className="table">
            <tr style={styles.tr}>
              <td style={styles.tdFoot}>number1</td>
              <td style={styles.tdFoot}>number2</td>
              <td style={styles.tdFoot}>number3</td>
              <td>
                <button style={styles.button}>
                  <img src={imageTrash} style={styles.img} alt="trash" />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
