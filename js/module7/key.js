const buttonRef = document.querySelector('.btn');
const textRef = document.querySelector('.txt')

// console.log(buttonRef, textRef);

// window.addEventListener('keypress', (event) => {
//     // console.log(event)
//     console.log("event.code", event.code)
//     console.log("event.key", event.key)
// })

// window.addEventListener('keydown', (event) => {
//     // console.log(event)
//     console.log("event.code", event.code)
//     console.log("event.key", event.key)
// })

// window.addEventListener('keyup', (event) => {
//     // console.log(event)
//     console.log("event.code", event.code)
//     console.log("event.key", event.key)
// })

// =====================================

window.addEventListener('keydown', (e) => {
    textRef.textContent += e.key
})

buttonRef.addEventListener('click', () => {
    textRef.textContent =''
})