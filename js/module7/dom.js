console.log("First task:")
const listOfDepartment = [

{

id: 1,

departmentName: "FrontEnd",

amountOfEmployee: 4,

employeeSalary: [

{ id: 101, employeeName: "Iann " , salary: 100},

{ id: 102, employeeName: "Yeva ", salary: 120 },

{ id: 103, employeeName: "Adam " , salary: 30},

{ id: 104, employeeName: "Smith ", salary: 70}

]

},

{

id: 1,

departmentName: "BackEnd",

amountOfEmployee: 3,

employeeSalary: [

{ id: 201, employeeName: "Lev " , salary: 80},

{ id: 202, employeeName: "Gleb ", salary: 140 },

{ id: 203, employeeName: "Helen " , salary: 25},

]

},

{

id: 1,

departmentName: "FullStack",

amountOfEmployee: 5,

employeeSalary: [

{ id: 301, employeeName: "Yana " , salary: 150},

{ id: 302, employeeName: "Sam ", salary: 60 },

{ id: 303, employeeName: "Viktor ", salary: 30 },

{ id: 304, employeeName: "Andri ", salary: 20 },

{ id: 305, employeeName: "Olha " , salary: 180},

]

}

]



const ttlSalaryDepartment = (employeeList) => {
  let total = 0;
  for (let element of employeeList) {
  total += element.salary;
  }
  return total;
}

const averageSallaryDepartment = (employeeList) => Math.round(ttlSalaryDepartment(employeeList) / employeeList.length);


 

const workWithSalary = (arr, callback) => {
 for (let element of arr) {
 console.log(callback(element.employeeSalary))
 }
 return callback;
}



workWithSalary(listOfDepartment, averageSallaryDepartment, ttlSalaryDepartment)

workWithSalary(listOfDepartment, ttlSalaryDepartment)

console.log("Second task:")
/*
const sum = (a, b) => a + b;

const mult = (a, b) => a * b; 

 

const hof = (func, a, b) => {

 return func(a,b)

 }

 console.log(hof(sum, 10, 20))

 console.log(hof(mult, 10, 20, 100, 50))

*/
const sum = (...args) => {
  let res = 0;
  for (let el of args) {
    res = res + el;
  }
  return res;
};


const mult = (...args) => {
  let res = 1;
    for (let el of args) {
     res = res * el;
    }
    return res;
} 

const divid = (...args) => {
  let res = 1;
  for (let el of args) {
    res = res / el;
  }
return res;
}

const minus = (...args) => {
  let res = 0;
  for (let el of args) {
    res = res - el;
  }
  return res;
}



const multyFunc = (func, ...rest) => {
return func(...rest)
}

console.log(`Сума ваших чисел дорівнює ${multyFunc(sum, 10, 20)}`)

console.log((`Ваша сума становить ${multyFunc(sum, 10, 20, 100, 50)}`)) 

console.log(`Загальний добуток становить ${multyFunc(mult, 10, 20)}`);

console.log(`Загальний добуток становить ${multyFunc(mult, 10, 20, 100, 50)}`); 

console.log(`Частка ваших чисел дорівнює ${multyFunc(divid, 10, 20)}`)

console.log(`Загальна частка становить ${multyFunc(divid, 10, 20, 100, 50)}`); 

console.log(`Різниця ваших чисел дорівнює ${multyFunc(minus, 10, 20)}`)

console.log(`Загальна різниця становить ${multyFunc(minus, 10, 20, 100, 50)}`); 