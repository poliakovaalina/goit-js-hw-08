import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

const item = gallery.forEach((element) => {
  const linkRef = document.createElement("a");
  linkRef.href = element.original;
  const imgRef = document.createElement("img");
  imgRef.src = element.preview;
  imgRef.dataset.source = element.original;
  imgRef.alt = element.description;
  galleryRef.insertAdjacentHTML(
    "afterbegin",
    `<li><a href="${element.original}"><img src="${element.preview}" data-source="${element.original}" alt="${element.description}"></a></li>`
    );

});
// Присваивание класса картинкам
const previewRef = document.querySelectorAll('img');
console.log(previewRef)
const imgHendler = previewRef.forEach(elem => {
elem.classList.add('gallery__image')
})


// Присваивание класса элементам списка
 const listRef = document.querySelectorAll('li');
    console.log(listRef)
const itemHendler = listRef.forEach(elem =>{
   elem.classList.add('gallery__item')
})

// Присваивание класса ссылкам
const imgLinkRef = document.querySelectorAll('a')
console.log(imgLinkRef)
const linkHendler = imgLinkRef.forEach(elem => {
    elem.classList.add('gallery__link')
})

const galleryJsRef = document.querySelector('.js-gallery')
console.log(galleryJsRef)
galleryJsRef.addEventListener('click', galleryHendler)


function galleryHendler (event){
  event.preventDefault();
const target = event.target
  // const bigUrl = target.dataset.source
  // console.log("event target: ", bigUrl);
if (target.nodeName !== 'IMG'){
      return
    }
    target.classList.add('gallery__image')

    const divRef = document.querySelector('div.lightbox')
    console.log(divRef)
    divRef.classList.add('is-open')
    
    const substitutionSrc = document.querySelector('img.lightbox__image')
    console.log(substitutionSrc)
    substitutionSrc.classList.remove('gallery__image')
    const allImgRef = document.querySelectorAll('img[data-source]')
    console.log(allImgRef)
    // substitutionSrc.src = allImgRef.dataset.source

    
    const allImgRefFn = allImgRef.forEach(e => {
      console.log(e)
      substitutionSrc.src = e.dataset.source
    })
    // substitutionSrc.src = element.preview;
    // event.target.addEventListener('click', z)

    // function z () {
    //   divRef.classList.add('is-open')
    // }

}

// const openModal = document.querySelectorAll('.gallery__image')
// console.log(openModal)

// const divRef = document.querySelector('div.lightbox')
// console.log(divRef)
// divRef.classList.add('is-open')

// // event.addEventListener('click', () => {
// //   divRef.classList.add('is-open')
// // })








// const openModal = document.querySelector('.lightbox')
// console.log(openModal)
// openModal.addEventListener('click', () =>{
//   openModal.classList.add('.is-open')
// })

// const openModal = document.querySelectorAll('.gallery__image')
// console.log(openModal)



// openModal.addEventListener('click', () =>{
// const divRef = document.querySelector('.lightbox')
// console.log(divRef)
//   divRef.classList.add('.is-open')

// })







































// // Присваивание класса картинкам
// const previewRef = document.querySelectorAll('img');
// console.log(previewRef)
// const imgHendler = previewRef.forEach(elem => {
// elem.classList.add('gallery__image')
// })












// galleryJsRef.addEventListener('click', galleryHandler)

// function galleryHandler(event) {
//   event.preventDefault();
//   const target = event.target;
//   const bigUrl = target.dataset.source
//   console.log("event target: ", bigUrl);


//   // if (target.nodeName !== 'IMG'){
//   //   return
//   // }
//   const currentImg = event.currentTarget.querySelector('gallery__image');
//   console.log('currentImg:', currentImg)

//   if(currentImg){
//     console.log('Уже есть, снимаем класс!')
//     currentImg.classList.remove('gallery__image')
//   }

//   // target.classList.add('gallery__image')
// }

// // Присваивание класса элементам списка
// const listRef = document.querySelectorAll('li');
// console.log(listRef)
// const itemHendler = listRef.forEach(elem =>{
// elem.classList.add('gallery__item')
// })
// listRef.addEventListener('click', itemHendler )

// // Присваивание класса ссылкам
// const imgLinkRef = document.querySelectorAll('a')
// console.log(imgLinkRef)

// const linkHendler = imgLinkRef.forEach(elem => {
// elem.classList.add('gallery__link')
// })
// imgLinkRef.addEventListener('click', linkHendler )



// // Присваивание класса элементам списка
//  const listRef = document.querySelectorAll('li');
//     console.log(listRef)
// const itemHendler = listRef.forEach(elem =>{
//    elem.classList.add('gallery__item')
// })

// // Присваивание класса ссылкам
// const imgLinkRef = document.querySelectorAll('a')
// console.log(imgLinkRef)
// const linkHendler = imgLinkRef.forEach(elem => {
//     elem.classList.add('gallery__link')
// })







// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();
  
//   const target = event.target;
//   console.log("event target: ", target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }




























// galleryRef.addEventListener('click', galleryHendler)

// function galleryHendler(event){
//     console.log(event.target)

// }

// galleryRef.addEventListener('click', galleryHendler)

// function galleryHendler(event){
//     // console.log(event.target)

//     // console.log(event.target.nodeName)

//     if(event.target.nodeName !== 'IMG'){
//         return
//     }
//     const galleryImg = event.target;
//     galleryImg.classList.add('gallery__image')
   
// }












// // Присваивание класса элементам списка
//  const listRef = document.querySelectorAll('li');
//     console.log(listRef)
// const itemHendler = listRef.forEach(elem =>{
//    elem.classList.add('gallery__item')
// })

// // Присваивание класса ссылкам
// const imgLinkRef = document.querySelectorAll('a')
// console.log(imgLinkRef)
// const linkHendler = imgLinkRef.forEach(elem => {
//     elem.classList.add('gallery__link')
// })

// // Присваивание класса картинкам
// const previewRef = document.querySelectorAll('img');
// console.log(previewRef)
// const imgHendler = previewRef.forEach(elem => {
// elem.classList.add('gallery__image')
// })










































// Код

// import gallery from "./gallery-items.js";

// const galleryRef = document.querySelector(".gallery");
// console.log(galleryRef);

// const item = gallery.forEach((element) => {
//   const linkRef = document.createElement("a");
//   linkRef.href = element.original;
//   const imgRef = document.createElement("img");
//   imgRef.src = element.preview;
//   imgRef.dataset.source = element.original;
//   imgRef.alt = element.description;
//   galleryRef.insertAdjacentHTML(
//     "afterbegin",
//     `<li><a href="${element.original}"><img src="${element.preview}" data-source="${element.original}" alt="${element.description}"></a></li>`
//     );
// });

// const galleryJsRef = document.querySelector(".js-gallery");
// galleryJsRef.addEventListener('click', galleryHandler)

// function galleryHandler(event) {
//   event.preventDefault();
//   const target = event.target;
//   const bigUrl = target.dataset.source
//   console.log("event target: ", bigUrl);

//   if (target.nodeName !== 'IMG'){
//     return
//   }
//   const currentImg = event.currentTarget.querySelector('gallery__image');
//   console.log('currentImg:', currentImg)

//   if(currentImg){
//     console.log('Уже есть, снимаем класс!')
//     currentImg.classList.remove('gallery__image')
//   }

//   target.classList.add('gallery__image')
// }





// // // Присваивание класса элементам списка
// //  const listRef = document.querySelectorAll('li');
// //     console.log(listRef)
// // const itemHendler = listRef.forEach(elem =>{
// //    elem.classList.add('gallery__item')
// // })

// // // Присваивание класса ссылкам
// // const imgLinkRef = document.querySelectorAll('a')
// // console.log(imgLinkRef)
// // const linkHendler = imgLinkRef.forEach(elem => {
// //     elem.classList.add('gallery__link')
// // })
