const boxTheeRef = document.querySelector('.three')
// console.log(boxTheeRef);




const options = {
    rootMargin: '150px',
    // threshold: [0, 0.25, 0.50, 0.75, 1]
}

const io = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        // console.log(entry);
        // console.log(entry.intersectionRatio);
        if (entry.isIntersecting) {
            console.log(observer);
            console.log("Im here");
            // observer.disconnect()
        }
    })
}, options);

io.observe(boxTheeRef)


const a = [1, 2, 3, 4]

const myMark = a.reducer((acc, item) => {
  acc += `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${item}
  >
    <img
      class="gallery__image"
      src=${item}
      data-source=${item.src}
      alt="Tulips"
    />
  </a>
</li>`
    return acc 
})

const iRef = document.querySelector('#i')

iRef.innerHTML = myMark
