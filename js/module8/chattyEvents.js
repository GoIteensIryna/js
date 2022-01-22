
// const spanRef = document.querySelector('.mousSpan')

// let mousEvents = 0;

// const eventCount = () => {
//     mousEvents += 1
//     spanRef.textContent = mousEvents;
// }



// const throttledEventCount = _.throttle(() => {
//     mousEvents += 1
//     spanRef.textContent = mousEvents;
// }, 300)

// window.addEventListener('mousemove', eventCount)


// ==========================================================
const spanRef = document.querySelector('.mousSpan')
const inputRef = document.querySelector('#myInput')
let inputCounter = 0;

// inputRef.addEventListener('input',(e)=> {
//     console.dir(e.target.value);
// })

// const inputCounterCallback = () => {
//     inputCounter += 1
//     spanRef.textContent = inputCounter
// }



// const inputCounterCallbackDebounce = _.debounce(() => {
//     inputCounter += 1
//     spanRef.textContent = inputCounter
// }, 300)

inputRef.addEventListener('input', inputCounterCallback)