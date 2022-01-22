// console.log("hi")

// let cost = 0;
// const subscription = 'pro';

// if (0<1) {
//   cost = 100;
// }

// console.log(cost); 

// console.log("buy!")

// =====================================

// let cost = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 100;
// }

// console.log(cost); 


// let cost;
// const subscription = 'ghjghjghj';
// if (subscription === 'hhh') {
//   cost = 100;
// }  else {
//   cost = 35;
// }

// console.log(cost); 

// let cost;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); 

// let cost;
// const subscription = 'Premium';

// if (subscription.toLowerCase() === 'free') {
//   cost = 0;
// } else if (subscription.toLowerCase() === 'pro') {
//   cost = 100;
// } else if (subscription.toLowerCase() === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost); 
// // ==========================================================================

// let type;
// const age = 20;

// // if (age >= 18) {
// //   type = 'adult';
// // } else {
// //   type = 'child';
// // };

// type = age>=18 ? "adult" : "child";


// console.log(type)


// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); 

// // ======================================================================

let cost;
const subscription = 'Premium';

switch (subscription.toLowerCase()) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost); 



