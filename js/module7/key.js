const buttonRef = document.querySelector('.btn');
const textRef = document.querySelector('.txt')

// console.log(buttonRef, textRef);


// window.addEventListener('keypress', (event) => {
//     console.log(event)
//     console.log("keypress event.code", event.code)
//     console.log(" keypress event.key", event.key)
// })

// window.addEventListener('keydown', (event) => {
//     // console.log(event)
//     console.log("keydown event.code", event.code)
//     console.log("keydown event.key", event.key)
// })

// window.addEventListener('keyup', (event) => {
//     // console.log(event)
//     console.log("keyup event.code", event.code)
//     console.log("keyup event.key", event.key)
// })

// =====================================
function addLetter(e) {
    if (e.code === "Backspace") {
        return
    }
    textRef.textContent += e.key 
}


window.addEventListener('keydown', addLetter)

window.addEventListener('keydown', (e) => {
    if (e.code === "Backspace") {
        // window.removeEventListener("keydown", addLetter)
      textRef.textContent = textRef.textContent.slice(0, textRef.textContent.length-1)

    }       
})

// buttonRef.addEventListener('click', () => {
//     textRef.textContent =''
// })