
//==============CONCATINATION==============================
// const message = 'Mango ' + 'is' + ' happy';
// console.log(message); // Mango is happy

// // Тепер подивимося на порядок операндів
// let result;

// result = 5 + '5';
// console.log(result); // '55'
// console.log(typeof result); // string

// result = 5 + '5' + 5;
// console.log(result); // '555'
// console.log(typeof result); // string

// /*
//  * Зверніть увагу, сталася математична операція
//  * складання для перших двох п'ятірок, після чого 10 було
//  * перетворено в рядок '10' і зшито з '5'
//  */
// result = 5 + 5 + '5';
// console.log(result); // '105'
// console.log(typeof result); // string

// ======================================================

// length - властивість, зберігає довжину рядка
// toLowerCase() і toUpperCase() - повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок
// indexOf() - поверне позицію (індекс) на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
// includes() - один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє 
//  чи входить підрядок в рядок, повертає true або false

// const message = 'Welcome to Bahamas!';

// console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// console.log(message.toLowerCase()); // welcome to bahamas!
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// // При цьому вихідний рядок не змінюється
// console.log(message); // Welcome to Bahamas!

// console.log(message.indexOf('to')); // 8
// console.log(message.indexOf('hello')); // -1

// // Всі методи рядків чутливі до регістру
// console.log(message.includes('welcome')); // false
// console.log(message.includes('Welcome')); // true

// ==============================================================

// Використовуючи змінні необхідно скласти рядок підперті значеннями
// const name = 'Mango';
// const age = 2;
// const mood = 'happy';

// const message =
//   'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';

// console.log(message); // My name is Mango, I'm 2 years old and happy.

// /*
//  * Складати рядки зі значеннями, які підставляються
//  * використовуючи конкатенацію дуже незручно.
//  * На допомогу приходять шаблонні рядки та інтерполяція.
//  */
// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

// console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// // В інтерполяції можна використовувати будь-який валідності вираз
// console.log(`Результат додавання дорівнює ${2 + 2}.`); // Результат додавання дорівнює 4.