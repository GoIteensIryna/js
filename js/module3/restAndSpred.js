
console.log(a)

var a = 5
console.log(a)

//===========SPREAD=================

// const a = [1, 2, 3];
// const b = [a]
// const c = [...a]

// // const y = a.slice()
// console.log("y", y)
// console.log(a)
// // console.log(b)
// // console.log(b[0][0])
// console.log(c)

// console.log(a === c)

// const d = 1
// const z = d

// console.log(d === z)


// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const houses2 = ['Lannister', 'Tyrell']

// const housesInDebt = [...houses, 'Frey of the Crossing', ...houses.slice(5), ...houses2];

// console.log(housesInDebt); 

// const fruitsPrice = {
//     "Lemon": 500,
//     "Apple": 400,
//     "Mango": 700,
//     "Papaya": 800,
//     "Tomato": 100
// }
// const vegetablePrice = {
//     "Tomato": 400,
//     "Potato": 50,
//     "Onion": 200,
//     "Cucumber": 300
// }

// const totalPrice = {...vegetablePrice, ...fruitsPrice }
// console.log(totalPrice)


// ==============REST===========================

// const sum = function (...rest) {
//     let ttl = 0
//     for (let item of rest) {
//         ttl+=item
//     };
//     return ttl
// }
// const myttl = sum(1, 2, 3, 4, 5, 0, 100)
// console.log(myttl)


// const minus = function (ar1, ar2, ar3, ...rest) {
//     console.log(ar1)
//     console.log(ar2)
//     console.log(ar3)
//     console.log(rest)
    // let ttl = localTTL
    // for (let item of rest) {
    //     ttl -= item;
    // };
    // return ttl;
// };
// const myttl = minus(100, 1, 2, 3, 4, 5);
// console.log(myttl);


// const addfunc = function () {
//     console.log(arguments)
// }
// addfunc(1, 2, 3);
// addfunc(1, 2, 3, 4, 5);

// const add = function (...rest) {
//   console.log(rest); 
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5, "fghgj", 35);

// const add = function (value1, value2, ...args) {
//     // const a = [...args];
//     console.log(value1);
//     console.log(value2); 
//   console.log(args); 
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// =============DESTRUCTURIZATION============================

// const hotel1 = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // console.log(hotel.name, hotel.stars, hotel.capacity, hotel.isFull)

// const { name="new hotel", stars: hotelStar, capacity } = hotel1
// console.log(name, hotelStar, capacity)


// console.log(hotel.name, hotel.stars, hotel.capacity)

// const { name, stars, capacity } = hotel;

// console.log(name, stars, capacity); 


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// let { name = 'hotel', stars = 3, status = 'empty' } = hotel;

// console.log(name, stars, status);
// name = "brand new name";
// hotel.capacity
// console.log(name)
// console.log(hotel.name = "new Hotel Name")

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   status: "full"
// };


// const { name: hotelName,stars, status: hotelStatus = 'empty' } = hotel;
// console.log(hotelName, stars, hotelStatus);


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name, ...rest } = hotel;

// console.log(name); 
// console.log(rest); 



// const rgb = [200, 255, 100];
// console.log(`Red: ${rgb[0]}, Green: ${rgb[1]}, Blue: ${rgb[2]}`);

// const [red, green,blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);


// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);


// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(`Red: ${red}, Colors: ${colors}`);

// const rgb = [200, 100, 255];

// const [,, blue] = rgb;

// console.log(`Blue: ${blue}`); 