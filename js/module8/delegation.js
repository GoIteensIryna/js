// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// const parentClickHandler = () => {
//   alert(
//     "Parent Handler!"
//   );
// };

// const childClickHandler1 = (event) => {
//     // event.stopPropagation();
//     event.stopImmediatePropagation()
//   alert(
//     "Child Handler1"
//   );
// };
// const childClickHandler2 = () => {
//   alert(
//     "Child Handler2"
//   );
// };

// const innerChildClickHandler = event => {
//   // event.stopPropagation();
//   alert("INNER-CHILD handler!");
// };

// parent.addEventListener("click", parentClickHandler);
// child.addEventListener("click", childClickHandler1);
// child.addEventListener("click", childClickHandler2);
// innerChild.addEventListener("click", innerChildClickHandler);


// ================================

// const listRef = document.querySelector('#myList');
// const itemRef = document.querySelector('.item');
// const anchorRef = document.querySelector('.anchor');
// const svgRef = document.querySelector('.svg');



// listRef.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('target', e.target);
//     // console.log('currentTarget', e.currentTarget);
//   console.dir(e.target.parentNode.dataset.value);
//   console.dir(e.target.parentNode.parentNode.dataset.value);
//     // console.log(e.target.textContent);
//     console.log(e.target.nodeName);

// })


// const lagguageHandler = event => {
//     event.preventDefault();
//     if (event.target.nodeName === 'UL') {
//         return;
//     }
//     if (event.target.dataset
//         || event.target.parentNode.dataset
//         || event.target.parentNode.parentNode.dataset) {
//         console.log(
//             event.target.dataset.value
//             || event.target.parentNode.dataset.value
//             ||event.target.parentNode.parentNode.dataset.value);
//     }
// }


// listRef.addEventListener('click', lagguageHandler)

// =====================================================================

// const navRef = document.querySelector(".js-nav");
// console.log(navRef.querySelector(".btn"));

// const hndlClick = event => {
//   event.preventDefault();
//   const activeBtnRef = navRef.querySelector('.active')
//   const target = event.target;

//   if (target.nodeName !== 'A') {
//     return;
//   }
//   if (!activeBtnRef) {
//     event.target.classList.add('active');
//   }
//   activeBtnRef.classList.remove('active');
//   event.target.classList.add('active');
// }


// navRef.addEventListener("click", hndlClick);

const listRef = document.querySelector('.js-nav')

const onClick = event => {
  event.preventDefault()
  const activeButtonRef = listRef.querySelector('.active')
  // console.log(activeButtonRef);
  if(event.nodeName === "UL"){
    return  
  }
  if(!activeButtonRef){
      event.target.classList.add('active');

  }else{
      activeButtonRef.classList.remove('active')
      event.target.classList.add('active')

  }
            
      
      
} 

listRef.addEventListener('click', onClick)