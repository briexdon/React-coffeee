import "./coffee-list.css";
import { Component } from "react";

import ShowCoffeeList from "../../functions";

class CoffeeList extends Component {
  render() {
    return (
      <section className="coffee-list">
        <ShowCoffeeList visibleData={this.props.visibleData} />
      </section>
    );
  }
}

export default CoffeeList;
