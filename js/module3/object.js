// const resortHotel = {}
// console.log(resortHotel)

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     isBudget: false,
//     listofRestrong: ['Main', "Beach", "Night Club"],
//     management: {
//         chief: "Golovach Stanislav",
//         ceo: " Mr Cooper Bill",
//         accountantdep: {mainAcc: "Glensta Helga"}
//     }

// };
// console.log(hotel.name)
// hotel.name = "Best Western"
// console.log(hotel["name"])

// console.log(hotel['stars'])
// console.log(hotel.management)
// console.log(hotel.management.ceo)
// console.log(hotel.listofRestrong)
// console.log(hotel.listofRestrong[0])
// console.log(hotel.isRenovated = false)
// console.log(hotel)
// console.log(hotel.address = "Lviv")
// console.log(hotel)


// // ===========SHORTCAT==============
// let name = 'Resort Hotel';
// let stars = 5;

// const myHotel = {
//     name,
//     stars,
//     capacity: 100
// }
// console.log(myHotel)


// const es5hotel = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };


// console.log(es5hotel);


// ============================================

// const i = "greating"
// const b = () => "age"
// console.log(b())

// const newObject = {
//     [i]: "Hi",
//     [b()] : 2

// }
// console.log(newObject)




// ============METHODS=================

// const train = {
//     name: "Intercity",
//     time: 3,
//     getSpeed(distance){ return distance / this.time},
// }
// // train.time = 7
// console.log(train.getSpeed(600))



// const train = {
//     name: "Interciti",
//     distance: 600,
//     time: 6,
//     getSpeed() { return this.distance / this.time }
// }

// console.log(train.getSpeed())
// train.time = 4;
// console.log(train.getSpeed())

// const flight = {
//     name: "Antonov70",
//     averageSpeed: 400,
//     getDistance(time) { return time * this.averageSpeed }
// };
// console.log(flight.getDistance(5))

// ============FOR IN================

// const numbers = [1, 2, 3]
// for (let item of numbers) {
//     console.log(item)
// }


// const myHotel = {
//     name: "Resort Hotel",
//     capacity: 200,
//     owner: "Mr Horoof",
//     isRenovated: false
// }
// console.log(myHotel.name)


// for (let key in myHotel) {
//     console.log(key);
//     console.log(myHotel[key])
// }


// for (let item in myHotel) {
//     console.log(item)
//     console.log(myHotel[item])
// }


// =========OBJECT======================

// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)

const book = {
    name: "Geralt of Rivia",
    role: 'wizard',
    weapon: "sword",
    author: 'Andrzej Sapkowski',
    isFilming: true
}

const bookKeys = Object.keys(book)


for (let element of bookKeys) {
    console.log(element, book[element])
}

const countProps = function (obj) {
  console.log(obj)
};

console.log(countProps(book)); 

// for (let item of bookEntries) {
//     const key = item[0]
//     const value = item[1]
//     console.log(`${key}: ${value}`)
// }

// const salaryList = {
//     "Mongo": 100,
//     "Poly": 200,
//     "Deny": 150,
//     "Yen": 400
// }


// const values = Object.values(salaryList)
// console.log(values)

// let sum = 0;
// for (let value of values) {
//     sum += value
//     // values.length

// }
// console.log(sum/values.length)

// // ==========SPREAD REST================

// console.log(Math.min(values))
// console.log(Math.min(...values))
