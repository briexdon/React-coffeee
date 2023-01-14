import "./coffee-list.css";
import { Component } from "react";

import CoffeeCard from "../../coffeeCard";

class CoffeeList extends Component {
  render() {
    const { visibleData } = this.props;
    return (
      <section className="coffee-list">
        {" "}
        {visibleData.map((data) => (
          <CoffeeCard data={data} key={data.id} />
        ))}
      </section>
    );
  }
}

export default CoffeeList;
