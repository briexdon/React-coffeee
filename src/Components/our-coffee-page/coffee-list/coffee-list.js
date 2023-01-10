import "./coffee-list.css";
import { Component } from "react";

import coffeeData from "../../myCoffeeData";

class CoffeeList extends Component {
  state = {
    data: coffeeData,
  };

  showCoffee = (data) => {
    const coffeeGoods = [];
    let local = [];

    for (let i = 0; i < data.length; i++) {
      let coffeeContent = (
        <div key={i} className="coffee-item">
          <img src={data[i].image} alt="coffee" />
          <div className="coffee-item-name">{data[i].name}</div>
          <div className="coffeee-item-country">{data[i].country}</div>
          <div className="coffee-item-price">{data[i].price}$</div>
        </div>
      );

      local.push(coffeeContent);

      if (local.length > 2 || i === data.length - 1) {
        const row = (
          <div key={i} className="coffee-item-row">
            {local}
          </div>
        );
        coffeeGoods.push(row);
        local = [];
      }
    }

    return coffeeGoods;
  };
  render() {
    const { data } = this.state;
    return (
      <section className="coffee-list">
        {this.showCoffee(this.props.visibleData(data, this.props.globalTerm))}
      </section>
    );
  }
}

export default CoffeeList;
