// Obtener elementos del DOM
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const close = document.getElementById("close");
const galleryItems = document.querySelectorAll(".gallery-item");

// Abrir modal al hacer clic en una imagen
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = item.src;
  });
});

// Cerrar modal al hacer clic en la "X"
close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
