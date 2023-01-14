import { Component } from "react";

// function ShowCoffeeList({ visibleData }) {
//   const coffeeGoods = [];
//   let local = [];

//   for (let i = 0; i < visibleData.length; i++) {
//     function CoffeeContent() {
//       console.log(visibleData);
//       return (
//         <>
//           <a href="/coffee-item" key={i} className="coffee-item">
//             <img src={visibleData[i].image} alt="coffee" />
//             <div className="coffee-item-name">{visibleData[i].name}</div>
//             <div className="coffeee-item-country">{visibleData[i].country}</div>
//             <div className="coffee-item-price">{visibleData[i].price}$</div>
//           </a>
//         </>
//       );
//     }

//     local.push(CoffeeContent);

//     if (local.length > 2 || i === visibleData.length - 1) {
//       const row = (
//         <div key={i} className="coffee-item-row">
//           {local}
//         </div>
//       );
//       coffeeGoods.push(row);
//       local = [];
//     }
//   }

//   return <>{coffeeGoods}</>;
// }

// export default ShowCoffeeList;

function ShowCoffeeList({ visibleData }) {
  const coffeeList = [];

  for (let i = 0; i < visibleData.length; i++) {
    let coffeeCard = (
      <a href="/coffee-item" key={i} className="coffee-item">
        <img src={visibleData[i].image} alt="coffee" />
        <div className="coffee-item-name">{visibleData[i].name}</div>
        <div className="coffeee-item-country">{visibleData[i].country}</div>
        <div className="coffee-item-price">{visibleData[i].price}$</div>
      </a>
    );

    coffeeList.push(coffeeCard);
  }

  return <>{coffeeList}</>;
}

export default ShowCoffeeList;
