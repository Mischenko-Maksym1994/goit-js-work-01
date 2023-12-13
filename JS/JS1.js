// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const array = [];
  
//     for (const product of products) {
//         if (propName === product.name) {
//             array.push(product.name);
//         } else if (propName === product.price) {
//             array.push(product.price);
//         }
//       else if (propName === product.quantity) {
//                 array.push(product.quantity);
//             } else {
//                 return array;
//             }
//             return array;
//         }
// }
    
// console.log(getAllPropValues("name"));


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;

//     for (const potion of potions) {
//       totalPrice += potion.price;
//       console.log(totalPrice);
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());


// function getExtremeScores(scores) {
//   const best = Math.max(...scores);
//   const worst = Math.min(...scores);
//   const scor = {
//     best,
//     worst,
//   };
//   return scor;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback;
// }

// console.log(makeMessage("Royal Grand", makePizza));



const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;


const names = books.filter((book) => book.rating > MIN_BOOK_RATING).map((book) => book.author).toSorted((a, b) => a.localeCompare(b));

// const names = books.map(book => book.author).filter((book) => book.rating > MIN_BOOK_RATING).toSorted((a, b) => a.author.localCompare(b.author));

// console.log(names);
console.log(names);