// console.log
// alert
// prompt
// confirm


const message = 'JavaScript is awesome!';
let personName = 'Mango';
const greetMsg = "Good morning, ";

// window.alert(message);

// console.log("Hello Group");
// console.log(message); 
// console.log('My name is: ', personName);
// console.log(`My name is: ${personName}`);

/*
* alert виводить модальне вікно, текст якого відповідає значенням
* змінної (або літерала) яку ми вкажемо в дужках.
*/
// window.alert(message);
// alert(greetMsg, personName);
// alert(`${greetMsg} ${personName}`);


// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// console.log(confirm('Please confirm hotel reservation'));

/*
 * Запитуємо ім'я готелю в якому хотів би зупиниться клієнт
 * і зберігаємо в змінну результат виклику prompt
//  */
// const hotelName = prompt('Please enter desired hotel name:');
// console.log( typeof hotelName);

// console.log(Number(hotelName));
// console.log(Number(hotelName));

// /*
//  * Важлива особливість prompt в тому, що не залежно що ввів користувач,
//  * завжди повернеться рядок. Тобто якщо користувач ввів 5, то повернеться
//  * не число 5, а рядок "5". Про це необхідно завжди пам'ятати.
//  */
// const value = prompt('Please enter a number!');
// console.log(typeof value); // 'string'
// console.log(value); // '5'