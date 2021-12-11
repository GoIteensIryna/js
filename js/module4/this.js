// console.log(this)

// const abc = function () {
//     console.log(this)
// }
// abc()

// const myObj = {
//     name: "Petya",
//     age:10,
//     objFunc() {
//         console.log(this)
//     }
// }
// myObj.objFunc()

// =============================================
// const masha = {
//     name: "Masha",
//     age:15,
//     showThisName(){
//     console.log(this)
//     }
// }

// masha.showThisName()


// const petya = masha;
// petya.name = "Petya"
// petya.showThisName()


// ============================================

// const func = function () { }
// console.log(func)

// const showThisFunc = function () {
//     console.log("showname function", this)
// }

// const showThisFunc = () => {
//     console.log("showname function", this)
// }
// showThisFunc()

// const mashaObj = { name: "Masha" }
// mashaObj.show = showThisFunc;
// console.log(mashaObj.show())


// const petyaObj = { name: "Petya" };
// petyaObj.showThisObj = showThisFunc;
// petyaObj.showThisObj()

// ====================================================================

// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     const fn = () => {
//       /*
//        * Стрілки запам'ятовують контекст під час оголошення,
//        * З батьківської області видимості
//        */
//       console.log('this in fn: ', this);
//     };

//     fn();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();


// ====================================


// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };
// hotel.showThis()

// const fn = function (callback) {
//   callback();
// };

// fn(hotel.showThis); 

// =========================================

// const greet = function () {
//     console.log(this)
//   return `Wellcome to ${this.name} hotel!`;
// };
// const greet =  ()=> {
//     console.log(this)
//   return `Wellcome to ${this.name} hotel!`;
// };

// greet()

// const hotel1 = { name: 'Resort' };
// const hotel2 = { name: 'Mariott' };
// console.log(greet.call(hotel1))

// console.log(greet.call(hotel1))
// console.log(greet.call(hotel2))

// console.log(greet.apply(hotel2)); 
// console.log(greet.apply(hotel1)); 


// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// // const greet = (guest, stars) => {
// //     console.log(this)
// //   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// // };


// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };


// console.log(greet.call(hotel, 'Mango', 5));
// console.log(greet.call(motel, "Poly", 4));

// console.log(greet.apply(hotel, ['David', 5]));
// console.log(greet.apply(motel, ['Maksym', 4]));

// ===============================================================

// const greet = function (guest) {
//     console.log(this)
//   return `${guest}, welcome to ${this.name}!`;
// };

// // const greet =  (guest)=>{
// //     console.log(this)
// //   return `${guest}, welcome to ${this.name}!`;
// // };

// greet()
// const hotel = {name: "Mariott"}

// const a = greet.bind(hotel, "Misha")
// console.log(a())



// const hotelGreeter = greet.bind(hotel, 'Mango');

// console.log(hotelGreeter())


const func = function(){
    console.log(this)
}
func()

const myObj = { name: "Serge" }

const a = func.bind(myObj)
a()



