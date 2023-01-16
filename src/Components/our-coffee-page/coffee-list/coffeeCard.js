import { Component } from "react";
import { Link } from "react-router-dom";

class CoffeeCard extends Component {
  render() {
    const { data, classBest, img, name, price } = this.props;
    const classCoffeeCard = "coffee-card";
    const country = classBest ? null : <div className="coffeee-item-country">{data.country}</div>;

    return (
      <Link
        to={{
          pathname: "/coffee-item",
          state: {
            title: "Title1",
          },
        }}
      >
        <div className={classBest ?? classCoffeeCard}>
          <img src={img ?? data.image} alt="coffee" />
          <div className="coffee-item-name">{name ?? data.name}</div>
          {country}
          <div className="coffee-item-price">{price ?? data.price}$</div>
        </div>
      </Link>
    );
  }
}

export default CoffeeCard;
