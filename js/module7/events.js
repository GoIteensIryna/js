const targetBtnRef = document.querySelector('.btn_target');
const btnAddRef = document.querySelector('.btn_add');
const btnRemoveRef = document.querySelector('.btn_remove');



// targetBtnRef.addEventListener('click', () => { console.log("3nd clg") });
// targetBtnRef.addEventListener('click', () => { console.log("1st clg") });
// targetBtnRef.addEventListener('click', () => { console.log("2nd clg") });

// ================================

// btnAddRef.addEventListener('click', () => {
//     btnTargetRef.addEventListener('click', () => {
//         console.log("click");
//     });
// });

// btnRemoveRef.addEventListener('click', () => {
//     btnTargetRef.removeEventListener('click', () => {
//         console.log("click");
//     });
// });

// ====================================

function onClick(){
console.log("HI")
}


btnAddRef.addEventListener('click', () => {
    targetBtnRef.addEventListener('click', onClick);
});

btnRemoveRef.addEventListener('click', () => {
    targetBtnRef.removeEventListener('click', onClick);
});













// function onClickFunction(){
// console.log("click")
// }

// btnAddRef.addEventListener('click', () => {
//     btnTargetRef.addEventListener('click', onClickFunction)
// })

// btnRemoveRef.addEventListener('click', () => {
//     btnTargetRef.removeEventListener('click', onClickFunction)
// })