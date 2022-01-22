// FUNCTION EXPRESSION
const functionExpression= function(a =5, b = 10, c =20) {
    return a + b + c;
};

// console.log(functionExpression(100))
console.log("functionExpression",functionExpression())


// FUNCTION DECLARATION
function functionDeclaration(a:number, b: number, c: number) {
    return a + b + c;
}
console.log("functionDeclaration",functionDeclaration(50, 100, 200))

// ARRAY FUNCTION
const functionArray = (a, b, c) => {
    return a+b+c
}
console.log("functionArray",functionArray(0.5, 1, 2));

const funcArrmulitpiple = a => a * 2
console.log("funcArrmulitpiple", funcArrmulitpiple(5))



// ==================SEQUENCE=========================

// const fnA = function() {
//   console.log('Почала виконуватися [fnA]');
//   fnB();
//   console.log('Продовжила виконуватися [fnA] після виходу з [fnB]');
// };

// const fnB = function() {
//   console.log('Виконується [fnB]');
// };

// console.log('Почав виконання [main]');
// fnA();
// console.log('Продовжив виконуватися [main] після виходу з [fnA]');

// ===================DEFAULT PARAMETERS============================

// const count = function(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };
// // 
// count(1,5); 
//  count(5);
// count(undefined, 5, 2); 
// count();

// ====================ARRAY OF ARGUMENTS=======================

// const a = [1, 2, 3];
// const b = [4, 5, 6, ...a];
// console.log(b)

//REST => [...arguments]

// const listOfArgs = function () {
//     console.log(arguments)
//     const normalArr = [...arguments]
//     console.log(normalArr)
// };

// listOfArgs(5,10,20,30,40,50)

// =========GUARD CLAUSE=====================


// const guardClauseFunction = userRole => {
//     let accessLevel
//     if (userRole === "admin") {
//         return accessLevel = 3;
//     }else if(userRole === "user") {
//          return accessLevel = 1;
//      }else if (userRole === "manager") {
//          return accessLevel = 2;
//      }
//     return accessLevel = 0;
// }

// const guardClauseFunction = userRole => {
//     let accessLevel
//     if (userRole === "admin") {
//         return accessLevel = 3;
//     }
//      if (userRole === "user") {
//          return accessLevel = 1;
//      }
//      if (userRole === "manager") {
//          return accessLevel = 2;
//      }
//     return accessLevel = 0;
// }
// console.log(guardClauseFunction("manager"))