// const value = 50;

// const add = function(num) {
//   const value = 10;
//   const innerValue = 5;

//   return num + value + innerValue;
// };

// console.log(value);

// console.log(add(20)); 


// console.log(innerValue);

// ==============HOISTING=========================
// console.log("1st:",value); 
// value = 5;

// if (true) {
//   console.log("2nd", value); 
//   var value = 10;
//   console.log("3rd",value); 
// }


const findLongestWord = function (string) {
    const stringArr = string.split(" ");
    let longestWord = '';
    for (let item of stringArr) {
        if (item.length > longestWord.length) {
            longestWord =  item
        } 
    return longestWord
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazgggggggggy dog')); // 'jumped'

console.log(findLongestWord('Google dgggggggggggo a roll')); // 'Google'

console.log(findLongestWord('May the force bgggggggggggge with you')); // 'force'
