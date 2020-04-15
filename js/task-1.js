import gallery from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

gallery.forEach((element) => {
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


const galleryLinkRef = document.querySelector('ul.js-gallery')
console.log(galleryLinkRef)

galleryLinkRef.addEventListener('click', tagClickHendler)

function tagClickHendler (event){
  event.preventDefault();

    if(event.target.nodeName !== 'IMG'){
        return;
    }

    const targetImgNext = event.target
    targetImgNext.classList.add('gallery__image')

}


// Присваивание класса элементам списка
const listRef = document.querySelectorAll('li');
console.log(listRef)
listRef.forEach(elem =>{
elem.classList.add('gallery__item')
})

// Присваивание класса ссылкам
const imgLinkRef = document.querySelectorAll('a')
console.log(imgLinkRef)
imgLinkRef.forEach(elem => {
elem.classList.add('gallery__link')
})

// Присваивание класса картинкам  и работа с модальным окном
const previewRef = document.querySelectorAll('img');
console.log(previewRef)

previewRef.forEach(elem => {
elem.classList.add('gallery__image')
elem.addEventListener('click', () => {

const divRef = document.querySelector('div.lightbox')
console.log(divRef)
divRef.classList.add('is-open')
const substitutionSrc = document.querySelector('img.lightbox__image')
console.log(substitutionSrc)
substitutionSrc.classList.remove('gallery__image')
const allImgRef = document.querySelectorAll('img[data-source]')
console.log(allImgRef)
    substitutionSrc.src = elem.dataset.source

    const btnClose = document.querySelector('button[data-action ="close-lightbox"]')
    console.log(btnClose)
    btnClose.addEventListener('click', () =>{
        divRef.classList.remove('is-open')
        substitutionSrc.src = ""
    })

})
})


