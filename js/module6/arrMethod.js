// const result = array.method(callback(item, index, array));



    
// const arrFunc = ()=> {}    
// ()=>{}

// for (let i = 0; i <= array.length; i += 1){
    
// }

// array.forEach((element, index, arr) => {
//     console.log("element", element);
//     console.log("index", index);
//     console.log("array", arr)
// })


// array.forEach((element, index) => {
//     console.log(`Our ${index+1} is ${element}`)
// })


// =========================================================
// const numbers = [1, 2, 3, 7, 15, 45, 32, 65];
// const array = ["a", "b", "c"]

// const newNumbers = numbers.map(item => item*2)
// console.log(newNumbers)

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); 

// const chngedArr = array.map(item => `${item} is letter`);
// console.log(chngedArr)

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// const namesList = users.map(item => {
//    return item.name
// })
// console.log(namesList)

// const names = users.map(user => user.name);

// console.log(names); 

// ===========================================================

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArr = numbers.filter(item => item <5);
// console.log(newArr)
// console.log(numbers.filter(num => num > 5)); 

// console.log(numbers.filter(num => num < 5)); 

// console.log(numbers.filter(num => num === 100)); 

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Ajux', isActive: true },
//     { name: 'Avax', isActive: true },
// ];


// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);



// const result = users.filter(item => {
//     return item.name.includes("Av")
// });
// console.log(result)



// ================================================
// const numbers = [3, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.filter(item => item > 5))

// console.log(numbers.find(num => num > 3)); 

// console.log(numbers.find(num => num < 5)); 

// console.log(numbers.find(num => num === 5)); 

// console.log(numbers.find(num => num === 555)); 

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// const myUser = users.find((item, idx, arr)=> item.id === "001")
// console.log(myUser)

// console.log(users.find(item => item.isActive))

// const user = users.find(user => user.id === '002');
// console.log(user);

// const getUser = (arr, property, propValue) => {
//     return arr.find(item => {
//         return item[property]=== propValue;
//     })
// };
// console.log(getUser(users, "name", "Poly"))

// const getUser = function(arr, id){
//     return arr.find(item => item.id === id)
// }
// console.log(getUser(users, '003'))


// const getUserById = (arr, id) => arr.find(item => item.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// =======================================================

// const numbers = [3, 18, 2, 3, 4, 5, 6, 7, 28, 9];

// // console.log(numbers.every(item => item >= 0))
// console.log(numbers.some(item => item > 20))

// console.log(numbers.every(item => item >= 3))
// console.log(numbers.some(item => item >= 3))

// const users = [
//   { id: '000', name: 'Mango', isActive: false },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // console.log(users.some(item => !item.isActive))

// console.log(users.every(item => item.isActive))
// console.log(users.some(item => item.isActive))

// =========================================================

// array.reduce((acc, item, index, arr) => {
//     // work with
// }, 0)

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, item) => {
//     acc += item ;
//     return acc
// }, 0);
// console.log(sum)


// const summ = numbers.reduce((acc, value) => {
//     acc += value
//     return acc
// }, 0);

// console.log(summ);

// const tweets = [
//   { id: '000', likes: 5, comments: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, comments: 3, tags: ['html', 'css'] },
//   { id: '002', likes: 17, comments: 0, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, comments: 74, tags: ['css', 'react'] },
//   { id: '004', likes: 0, comments: 52,  tags: ['js', 'nodejs', 'react'] },
// ];

// const ttlTags = tweets.reduce((acc, item) => {
//     acc.push(...item.tags)
//     return acc;
// }, []);
// console.log(ttlTags)

// let ttlLikes = 0;
// for (let tweet of tweets) {
//     ttlLikes += tweet.likes
// };
// console.log(ttlLikes)

// const totalLikes = tweets.reduce((acc, item) => {
//     acc += item.likes;
//     return acc
// }, 0)
// console.log(totalLikes)

// const likes = tweets.reduce((acc, tweet) => {
//     acc += tweet.likes
//     return acc
// },0)

// console.log(likes); 


// const myFunc = (arr, props) => {
//     const result = arr.reduce((acc, item) => {
//         acc += item[props]
//         return acc;
//     }, 0);
//     return result
// }

// console.log(myFunc(tweets, "likes"));
// console.log(myFunc(tweets, "comments"))

// const tagList = tweets.reduce((acc, item) => {
//     return [...acc, ...item.tags]
//  }, [])
// console.log(tagList)

// const unicTagList = tweets.reduce((acc, item) => {
//     item.tags.forEach(element => {
//         if(!acc.includes(element)) {
//            acc.push(element)
//        } else return
//     });

//     return acc
// },[])

// console.log(unicTagList)

// ===========================================

// const numbers = [2, 1, 4, 3, 5];

// console.log('Before sort: ', numbers); 
// console.log('After sort: ', numbers.sort()); 
// console.log('Reverse sort: ', numbers.reverse());


// console.log(numbers.sort((a,b)=> a > b ? -1: 1))


// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log('Before sort: ', clients); 
// console.log('After sort: ', clients.sort()); 
// console.log('Reverse sort: ', clients.reverse()); 
// console.log(clients.sort((a, b) => a > b ? -1 : 1))

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// console.log(users.sort((a,b)=> a.name > b.name ? 1 : -1))

// ==============================================

// const numbers = [2, 1, 4, 3, 5];

// const correctedNumbers = numbers
//     .map(item => item * 2)
//     .filter(item => item >= 5)
//     .sort((a,b) => a-b)
    
//     console.log(correctedNumbers)

// ====================================

//   const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 38, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 35, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 25, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 28, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
//   ]

// // console.log(friends.filter(item => {
// // return item.name.includes("an")
// // }))
  
// const tweets = [
//   { id: '000', likes: 5, comments: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, comments: 3, tags: ['html', 'css'] },
//   { id: '002', likes: 17, comments: 0, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, comments: 74, tags: ['css', 'react'] },
//   { id: '004', likes: 0, comments: 52,  tags: ['js', 'nodejs', 'react'] },
// ];

// console.log(tweets.filter(item => {
//    return item.tags.includes("css") 
// }))


// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];