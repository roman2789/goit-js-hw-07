import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemsRef = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src= '${item.preview}'
      data-source='${item.original}'
      alt="${item.description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.innerHTML += galleryItemsRef;

gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source}>
`);

  instance.show();

  document.addEventListener("keydown", onGalleryEscape);

  function onGalleryEscape(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onGalleryEscape);
    }
  }
}
