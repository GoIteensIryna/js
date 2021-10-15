// const a = 5

// if(true) {
// console.log("block scope", a)
// }

// console.log("global scope", a)



// ============================

// let b = 10

// b +=3
// console.log("gloval scope", b)

// if("hello") {
//     b +=5
//     console.log("block scope", b)
// }

// ====================================

// if(5){
//     const scopeName = "I'm a block scope";
//     console.log(scopeName);
// };

// console.log("I'm global scope");
// console.log(scopeName);

// ==================================================

// const global = 'global';2
// if (true) {
//   const blockA = 'block A';

//   console.log("first block scope: ",global); 
//   console.log("first block scope: ", blockA); 

//   console.log("first block scope: ",blockB); 
//   console.log("first block scope: ",blockC); 

//   if (true) {
//     const blockB = 'block B';

//     console.log("2nd block scope: ",global);
//     console.log("2nd block scope: ",blockA); 
//     console.log("2nd block scope: ",blockB); 


//     // console.log("2nd block scope: ",blockC); 
//   }
// }

// if (true) {
//   const blockC = 'block C';
//   console.log("separate block scope: ",global); 
//   console.log("separate block scope: ",blockC); 

// //   console.log("separate block scope: ",blockA);
// //   console.log("separate block scope: ",blockB); 
// }

// console.log("global scope: ",global); 


// console.log("global scope: ",blockA);
// console.log("global scope: ",blockB); 
// console.log("global scope: ",blockC); 