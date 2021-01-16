import React  from "react"
import "./styles.css";
import FinalChanges from "./FinalChanges";
import SearchPosition from "./SearchPosition";
import { Table } from "./Table";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: []
    };
    this.maxId = 0;
  }

  addPoint = () => {
    const newItem = {
      label: document.querySelector(".category").value,
      id: this.maxId++,
      sum: document.querySelector(".summ").value,
      select: document.querySelector(".select").value
    };

    this.setState(({ positions }) => {
      const newArr = [...positions, newItem];
      return { positions: newArr };
    });
  };

  deletePoint(id) {
    this.setState(({ positions }) => {
      const index = positions.findIndex((element) => element.id === id);

      const before = positions.slice(0, index);
      const after = positions.slice(index + 1);

      const newArr = [...before, ...after];
      return {
        positions: newArr
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Manage your money</h1>
        <FinalChanges />
        <SearchPosition />
        <Table
          items={this.state.positions}
          onAdd={this.addPoint}
          onDelete={(id) => this.deletePoint(id)}
          label={(label) => label}
          sum={(sum) => sum}
          select={(select) => select}
        />
      </div>
    );
  }
}

