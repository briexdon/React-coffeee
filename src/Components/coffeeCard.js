function CoffeeCard({ data }) {
  return (
    <a href="/coffee-item" className="coffee-item">
      <img src={data.image} alt="coffee" />
      <div className="coffee-item-name">{data.name}</div>
      <div className="coffeee-item-country">{data.country}</div>
      <div className="coffee-item-price">{data.price}$</div>
    </a>
  );
}

export default CoffeeCard;
