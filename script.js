// Disabilita il clic destro ovunque nella pagina
document.addEventListener('contextmenu', event => event.preventDefault());

// Disabilita il trascinamento di tutte le immagini
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable", "false");
});
