import firstArr from './dom2.js';
import { secondArr } from './dom2.js';
console.log("firstArr", firstArr)
console.log("secondArr", secondArr )


// const h1Element = document.querySelector('h1')
// console.log(h1Element.style.color = "teal")
// h1Element.classList.add('redcolor')
// h1Element.classList.toggle('redcolor');


// const listElement = document.querySelector('#menu')
// console.log(listElement)

// const listItemElement = document.querySelectorAll('.menu-item')
// // console.log(listItemElement)
// // listItemElement.style.color = 'teal'

// const listItemFirstEl = document.querySelector('.menu-item')
// console.log(listItemFirstEl.textContent = "Hello World")
// listItemFirstEl.style.color = "tomato";
// console.log(listItemFirstEl.style)l



// const selectedById = document.querySelector('#menu');
// // selectedById.style.textTransform = 'uppercase';
// // selectedById.style.fontSize = '2rem';
// // console.log(selectedById); 

// const menuItemsByTagName = document.querySelectorAll("li");
// // console.log(menuItemsByTagName); 

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// // console.log(menuItemsByClass); 

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = '#BF4E30';
// console.log(firstMenuItem); 

// const lincElement = document.querySelector("a")
// const spanElement = document.querySelector("#span")

// console.log(spanElement.parentElement)

// =============================================================

// const text = document.querySelector(".article-text");
// console.log(text.textContent); 

// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas!';

// const button = document.querySelector('#button');

// button.style.backgroundColor = 'teal';
// button.style.border = '1px solid tomato';
// button.style.height = '50px';
// button.style.width = '200px'
// console.log(button.style);


// ================================
// const elem = document.querySelector("#paragraph");

// console.log(elem.classList); 

// console.log(elem.classList.contains("red")); 

// elem.classList.remove("big");
// console.log(elem.classList); 

// elem.classList.add("redcolor");
// console.log(elem.classList); 


// elem.classList.add("a", "b", "c");
// console.log(elem.classList);

// elem.classList.toggle("hidden"); 
// elem.classList.toggle("hidden"); 


// elem.classList.forEach(cls => {
//   console.log(cls); 
// });


// ===================================
// const image = document.querySelector(".image");

// console.log(image.attributes); 
// console.log(image.hasAttribute("src")); 
// image.setAttribute("src", "https://placeimg.com/400/200/nature")
// console.log(image.attributes); 

// console.log(image.getAttribute("alt")); 

// image.setAttribute("alt", "amazing lake and clouds");
// console.log(image.attributes); 

// console.log(image.getAttribute("alt"));




// ======================================================
// const textElement = document.querySelector('.data-text')
// console.log(textElement.dataset)


// const heading = document.createElement('h1');
// console.log(heading); 

// heading.textContent = 'This is a heading';
// console.log(heading.textContent); 

// const rootElem = document.querySelector('#root');

// rootElem.innerHTML = '<p class="text">Pellentesque habitant.</p>';

// rootElem.appendChild(heading)

// rootElem.removeChild(heading)
// heading.remove()

// const rootElement = document.querySelectorAll('#root')
// rootElement.appendChild(heading)

// const image = document.createElement('img');
// image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// image.setAttribute('alt', 'nature');

// console.log(image);

// ====================================

// const heading = document.createElement('h1');
// console.log(heading);

// heading.textContent = 'This is a heading';
// console.log(heading);

// const imageElement = document.createElement('img');
// imageElement.setAttribute('src', 'https://placeimg.com/640/480/nature');
// imageElement.setAttribute('alt', 'nature');

// console.log(imageElement); 


// rootElem.insertBefore(imageElement, heading)

// rootElem.removeChild(heading)
// imageElement.remove()

// =======================================================================

// const parent = document.querySelector('.parent');
// const article = document.querySelector('.article');


// const clone = article.cloneNode(true);
// clone.style.color = 'teal';
// parent.appendChild(clone);

// ======================================================================
// const article = document.querySelector(".article");
// const root1 =document.querySelector('#root')
// const htmlString =
//   `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // article.innerHTML = htmlString;
// root1.innerHTML = htmlString;

// const list = document.querySelector(".list");
// const tech = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const soft = ["English", "Empathy", "Sport"]

// const markup = (arr) => {
//   return arr.reduce(
//   (string, item) => string + `<li class="item">${item}</li>`,
//   ""
// ); 
// } 

// const list = document.querySelector('#list');
// // list.innerHTML = markup(tech)
// // list.innerHTML = markup(soft)
// list.insertAdjacentHTML("afterbegin", markup(soft))
// list.insertAdjacentHTML("afterbegin", markup(tech))

// console.log(list)
// list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
// list.insertAdjacentHTML('afterbegin', '<li>afterbegin item</li>');
// list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
// list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');

// ====================================
// const root = document.querySelector('#root')
// // const list = document.querySelector('#list')
// const singleBtn = document.querySelector('#single');

// const handleClick = (event) => {
//   console.log(event.type)
//   console.log(event.target)
//   console.log(event.currentTarget)
//     // list.innerHTML = markup(tech);
//     // list.insertAdjacentHTML('afterbegin', markup(tech))
// };

// singleBtn.addEventListener('click', handleClick);

// const multiBtn = document.querySelector('#multiple');
// const item = document.querySelector('.item')
// const firstCallback = () => {
//     // list.innerHTML = markup(soft);
//     list.insertAdjacentHTML('afterbegin', markup(soft))
// };
// const secondCallback =()=>console.log("secondCallback")

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);


// =======================================================

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this);
//     console.log(`My name is: ${this.name}`);
//   },
// };


// const btn = document.querySelector('#single');

// // user.showName(); 
// btn.addEventListener('click', user.showName); 
// btn.addEventListener('click', user.showName.bind(user)); 

// ======================================================
// const form = document.querySelector(".form");
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSubmit);


// const articleEl = document.querySelector('.article')
// console.log(articleEl.attributes)

const listItemEl = document.querySelectorAll('.menu-item')
console.log(listItemEl[0])

const anchorEl = document.querySelector('#anchor')
console.log(anchorEl.attributes)