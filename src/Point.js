import React from "react";
import { styles, imageTrash } from "./Table";

class Point extends React.Component {
  render() {
    const { onDelete, label, sum, select } = this.props;
    return (
      <tr style={styles.tr}>
        <td style={styles.tdFoot}>{select}</td>
        <td style={styles.tdFoot}>{label}</td>
        <td style={styles.tdFoot}>{sum}</td>
        <td>
          <button style={styles.buttonTab} className="trash" onClick={onDelete}>
            <img src={imageTrash} style={styles.img} alt="trash" />
          </button>
        </td>
      </tr>
    );
  }
}

export { Point };
