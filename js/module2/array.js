
// const myArray = new Array;
// const yourArray = [];
// console.log(yourArray)

// const arr = ["Polina", 15, null];

//const employee = ["Arsen Avakov", "Natalie Reznik", "Dmytro Kuliba"];
// const numberArr = [29,28,27,26,25,24,23,22,21,20];

// console.log(numberArr.length)


// console.log(employee[0]);
// console.log(employee[1]);
// console.log(employee[2]);

// employee[0] = "Volodymyr Vakarchuk";
// employee[3] = "Oleg Skrypka";
// console.log(employee)

// const arrLength = numberArr.length;
// console.log(numberArr[arrLength-1])


// ===========================================
//  const numberArr = [29,28,27,26,25,24,23,22,21,20];
// for (let i = 0; i < numberArr.length; i += 1){
//     console.log(numberArr[i])
// }

// let sum = 0;
// for (let number of numberArr) {
//     // console.log(number)
//     sum += number
// }
// console.log(sum)

// const string = 'javas,c.r@ipt';

// for (const character of string) {
//   console.log(character);
// }

// ========================================================

// const rundomNumberArray = [0, 256, 7, null, 3, 27, 1155, 100,45, 68, 150]
// for (let number of rundomNumberArray) {
//     if(!number) {
//         console.log("falsy znachennya", number)
//         continue
//     };
//     console.log(number)
// };

// const checkNumber = 256;
// for (let i = 0; i < rundomNumberArray.length; i += 1){
//     console.log(rundomNumberArray[i]);
//     if (rundomNumberArray[i] === checkNumber) {
//         console.log("We finded it!!!")
//         break
//     }
// }



// ===============================

// const rundomNumberArray = [0, 256, 7, 45, 3, 27, 1155, 100,45, 68, 150]
//const matrix = [0, "hello", [1, 2,["a", "b"], 3], "Ok", [4, 5, 6],  [7, 8, 9]];
// console.log(typeof 1)
// console.log(matrix[5][2])
// ,
// // console.log(matrix[0][0]); 
// // console.log(matrix[1][2]); 
// // console.log(matrix[2][2]);


// let total = 0

// for (let i = 0; i < matrix.length; i += 1){
//     console.log("main array",matrix[i])
//     if (Array.isArray(matrix[i])) {
//         for (let j = 0; j < matrix[i].length; j += 1){
//             console.log("Sub Array",matrix[i][j])
//         }
//     }
    
// }

// for (let i = 0; i < matrix.length; i += 1){
//     console.log("Підмассив матріці", matrix[i]);
//     for (let j = 0; j < matrix[i].length; j += 1){
//         console.log("Element of matrix", matrix[i][j]);
//         total += matrix[i][j];
//     }
// }
// console.log(total)