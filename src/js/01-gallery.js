import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const pictureCart = createPictureCart(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", pictureCart);
galleryEl.addEventListener("click", onPictureClick);

function createPictureCart(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
console.log(galleryItems);

function onPictureClick(event) {
  console.log(event.target);
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  if (event.target.nodeName === "IMG") {
    return instance;
  }
}
