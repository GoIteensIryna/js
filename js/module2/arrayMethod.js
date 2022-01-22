//========  join() split()=================

// const message = 'Welcome, to Bahamas!';
// console.log(message);
// console.log(message.split(","))


// console.log(message.split(' ')); 
// console.log(message.split(''));

// const myMsg = "Hello#world@how@are@you@today?"
// console.log(myMsg.split(/#|@/))

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients.join(' ')); 
// console.log(clients.join(',')); 
// console.log(clients.join('-'));

// ========indexOf() і includes()=================================

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// let lookFor = "Peter"
// console.log(clients.includes(lookFor))
// console.log(clients.indexOf(lookFor))



// console.log(clients.indexOf('Poly')); 
// console.log(clients.indexOf('Monkong')); 


// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.includes('Poly')); 
// console.log(clients.includes('Monkong'));

// ===============push(), pop(), shift(), unshift()==================


// const a = [1, 2, 3]
// console.log(a)
// console.log(a.push(5, 10, 25, ["a"]))
// console.log(a)

// console.log(a.pop());
// console.log(a)

// console.log(a.unshift(10));
// console.log(a);
// console.log(a.shift());
// console.log(a)



// const stack = [];


// stack.push(1);
// console.log(stack); 

// stack.push(2);
// console.log(stack); 

// stack.push(3);
// console.log(stack);


// console.log(stack.pop()); 
// console.log(stack); 

// console.log(stack.pop()); 
// console.log(stack);

// console.log(stack.pop()); 
// console.log(stack); 

// console.log(stack.pop());

// const clients = ['Mango', 'Ajax', 'Poly'];

// console.log(clients.shift()); 
// console.log(clients);

// clients.unshift('Kiwi');
// console.log(clients); 

// ===============slice()==================

// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// a.unshift(15, 20, 25);
// console.log(a)
// console.log(a.indexOf(0))
// slice(start, end);

// console.log(a.slice());
// const b = a.slice()

// const b = a.slice(4)

// const b = a.slice(4, 6)

// const b = a.slice(4)

// const b = a.slice(-5)
//  console.log("a=", a,"b=", b);

// const b = a.slice(0, 5);
// console.log(b)

// const b = a.slice(5, 6);
// const b = a.slice(3, a.length-1)

// console.log("a=", a,"b=", b);

// =============splice()==================


// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const b = a.splice();

// // const b = a.splice(5);
// // console.log("a=", a, "b=", b);

// const b = a.splice(5, 3);
// console.log("a=", a,"b=", b);


// console.log("a=", a,"b=", b);

// const colors = ['red', 'green', 'blue'];

// // colors.splice(2, 0, 'purple');
// // console.log(colors); 
// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors);

// colors.splice(2, 1, 'black');
// console.log(colors);

// ==================================

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const a = oldClients.slice()
// a[0] = 1
// console.log(oldClients)
// console.log(a)

// oldClients.includes("Iryna")
// console.log(oldClients)

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];
// const myNumber = [0,1,2]

// console.log(oldClients, newClients);

// // const allClients = oldClients.concat(newClients)
// const allClients = newClients.concat(oldClients)
// const newAllClients = allClients.concat(myNumber);
// console.log(newAllClients)

// const allClients = oldClients.concat(newClients);

// console.log(allClients);
// // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// console.log(oldClients);
// // ["Mango", "Ajax", "Poly", "Kiwi"]

// console.log(newClients);
// ["Monkong", "Singu"]