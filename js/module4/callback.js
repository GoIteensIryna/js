
// const printMessage = function (message) {
//   console.log(message);
// };

// const splitMessage = function (message) {
//     return message.split(" ")
// }
// // printMessage("calll back funk")

// const higherOrderFunction = function (callback) {
//   const string = 'HOFs are awesome';
//   return callback(string);
// };
// console.log(higherOrderFunction(splitMessage))
// console.log(higherOrderFunction(printMessage))


//========================================================================

// const numberArray = [1, 11, 50, 3, 70, 2, 0, 17, 54, 120, 40]


// const isElementBiggerNumber = (element, number=50) => {
//     return (element >= number) ? true : false
    
//     // if (element >= number) {
//     //     return true
//     // } else {
//     //     return fakse
//     // }
// }

// const isElementEven = (element) => {
//     if (element %   === 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// // const hof = (arr, test) => {
// //     const resultArray = [];
// //     for (let element of arr) {
// //         const testResult = test(element)
// //         if (testResult) {
// //             resultArray.push(element)
// //         }
// //     }
// //     return resultArray
// // }
// const hof = (arr, test) => {
//     const resultArray = [];
//     for (let element of arr) {
//         if (test(element)) {
//             resultArray.push(element)
//         }
//     }
//     return resultArray
// }
// console.log(hof(numberArray, isElementBiggerNumber))
// console.log(hof(numberArray, isElementEven))

// =====================================================

// const listOfDepartment = [
//     {
//         id: 1,
//         departmentName: "FrontEnd",
//         amountOfEmployee: 4,
//         employeeSalary: [
//             { id: 101, employeeName: "Iann " , salary: 100},
//             { id: 102, employeeName: "Yeva ", salary: 120 },
//             { id: 103, employeeName: "Adam " , salary: 30},
//             { id: 104, employeeName: "Smith ", salary: 70}
//         ]
//     },
//     {
//         id: 1,
//         departmentName: "BackEnd",
//         amountOfEmployee: 3,
//         employeeSalary: [
//             { id: 201, employeeName: "Lev " , salary: 80},
//             { id: 202, employeeName: "Gleb ", salary: 140 },
//             { id: 203, employeeName: "Helen " , salary: 25},
//         ]
//     },
//         {
//         id: 1,
//         departmentName: "FullStack",
//         amountOfEmployee: 5,
//         employeeSalary: [
//             { id: 301, employeeName: "Yana " , salary: 150},
//             { id: 302, employeeName: "Sam ", salary: 60 },
//             { id: 303, employeeName: "Viktor ", salary: 30 },
//             { id: 304, employeeName: "Andri ", salary: 20 },
//             { id: 305, employeeName: "Olha " , salary: 180},
//         ]
//     }
// ]

// const ttlSalaryDepartment = (employeeList) => {

// }

// const averageSallaryDepartment = (employeeList) => {

// }


// const workWithSalary = (arr, callback) => {

//  }

// workWithSalary(listOfDepartment, averageSallaryDepartment)
// workWithSalary(listOfDepartment, ttlSalaryDepartment)


// const sum = (a, b) => a + b;
// const mult = (a, b) => a * b; 
// // const divid = (a, b) => a / b;
// // const minus = (a, b) => a - b;

// const multyFunc = (func, a, b) => {
//     return func(a,b)
// }
// console.log(multyFunc(sum, 10, 20))
// console.log(multyFunc(sum, 10, 20, 100, 50))

// ==============================================

// const sum = () => {};
// const mult = () => {}

// const multyFunc = ( => {}
// console.log(multyFunc(mult, 10, 20))
// console.log(multyFunc(mult, 10, 20, 100, 50))

// ==================================



// console.log("1")
// const user = {
//     name: "Vasya",
//     greetUser() {
//         console.log(`Hi, `, this.name)
//     }
// }

// setTimeout(() => {
//     user.greetUser()
// }, 3000)

// console.log("2")

// const myBtn = document.getElementById("button")

// const func = () => {
//     console.log("hello")
// }

// myBtn.addEventListener("click", func)

// (() => {
//     console.log("right now")
// })()

