import React from "react";
import { styles, imageTrash } from "./Table";

class Point extends React.Component {
  render() {
    return (
      <tr style={styles.tr}>
        <td style={styles.tdFoot}>{document.querySelector(".select").value}</td>
        <td style={styles.tdFoot}>
          {document.querySelector(".category").value}
        </td>
        <td style={styles.tdFoot}>{document.querySelector(".summ").value}</td>
        <td>
          <button
            style={styles.buttonTab}
            className="trash"
            onClick={this.deletePoint}
          >
            <img src={imageTrash} style={styles.img} alt="trash" />
          </button>
        </td>
      </tr>
    );
  }
}

export { Point };
