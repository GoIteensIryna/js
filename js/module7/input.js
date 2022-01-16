const inputRef = document.querySelector('.input_js');
const textRef = document.querySelector('.error_js');
const checkboxRef = document.querySelector('.checkbox_js')
const buttonRef = document.querySelector('.button_js')

console.dir(checkboxRef)

// =======================================


// inputRef.addEventListener('change', (event) => {
//     console.log("change", event.target.value)
// })


// inputRef.addEventListener('focus', e => {
//     textRef.classList.remove('visually-hidden')
// })

// inputRef.addEventListener('blur', e => {
//     textRef.classList.add('visually-hidden')
// })


// ==========================


// inputRef.addEventListener('input', (e) => {
//     console.log("change", e.target.value)
// } )

// =================================

checkboxRef.addEventListener('change', event => {
    console.log(event.target.checked)
    buttonRef.disabled = !event.target.checked
})


// chackboxRef.addEventListener('change', (event) => {
//     console.log(event.target.checked)
//     console.log(buttonRef.disabled)
//     buttonRef.disabled = !event.target.checked
// });
