import React from "react";
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
  },
  divTab: {
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
  buttonTab: {
    display: "block",
    margin: "20px 0"
  },
  img: {
    width: "20px",
    height: "20px"
  },
  divWrap: {
    display: "flex"
  }
};

const imageTrash = "https://s.svgbox.net/hero-outline.svg?ic=trash&fill=000000";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
  }

  addPoint = () => {
    const element = (
      <tr style={styles.tr}>
        <td style={styles.tdFoot}>State of category</td>
        <td style={styles.tdFoot}>Category</td>
        <td style={styles.tdFoot}>Amount</td>
        <td>
          <button style={styles.buttonTab}>
            <img src={imageTrash} style={styles.img} alt="trash" />
          </button>
        </td>
      </tr>
    );
    this.setState(({ points }) => points.push(element));
    console.log(this.state.points);
  };

  deletePoint() {}

  render() {
    return (
      <div style={styles.divWrap}>
        <div style={styles.div}>
          <select style={styles.select}>
            <option>Доходы</option>
            <option>Расходы</option>
          </select>
          <input
            type="text"
            style={styles.input}
            placeholder="Категория дохода/расхода"
          />
          <input type="text" style={styles.input} placeholder="Сумма" />
          <button style={styles.button} onClick={this.addPoint}>
            Add position
          </button>
        </div>
        <div style={styles.divTab}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tr}>
                <td style={styles.tdHead}>Доход/расход</td>
                <td style={styles.tdHead}>Категория</td>
                <td style={styles.tdHead}>Сумма</td>
              </tr>
            </thead>
            <tfoot className="table" key={this.state.points.id}>
              {this.state.points}
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export { imageTrash, Table };
