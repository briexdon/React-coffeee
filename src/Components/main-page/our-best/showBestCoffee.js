import CoffeeCard from "../../our-coffee-page/coffee-list/coffeeCard";
function ShowBestCoffee({ data }) {
  let best = [];
  let res = [];
  let sortData = data.sort((a, b) => b.price - a.price);

  for (let i = 0; i < 3; i++) {
    best.push(sortData[i]);
  }

  best.forEach((elem, i) => {
    let coffeeCard = (
      <CoffeeCard
        key={i}
        classBest={"best-coffee"}
        img={elem.image}
        name={elem.name}
        price={elem.price}
      />
    );

    res.push(coffeeCard);
  });

  return res;
}

export default ShowBestCoffee;
