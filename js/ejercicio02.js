// Seleccionar el botón y la lista
const button = document.getElementById("toggle-theme");
const list = document.querySelector(".container");

// Agregar un evento al botón para alternar los estilos
button.addEventListener("click", () => {
  // Alternar la clase 'inverso' en la lista
  list.classList.toggle("inverso");

  // Cambiar el texto del botón según el estado actual
  button.textContent = list.classList.contains("inverso")
    ? "Fondo Claro"
    : "Fondo Oscuro";
});
