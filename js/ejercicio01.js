// Obtener los botones y el selector
const colorPicker = document.getElementById("color-picker");
const changeColorButtonId = document.getElementById("change-color-button-id");
const changeColorButtonTagName = document.getElementById("change-color-button-tagName");

// Cambiar el color del encabezado

// Usando getElementsBy
changeColorButtonId.addEventListener("click", () => {
  const headerByTagName = document.getElementsByTagName("h1")[0];
  headerByTagName.style.color = colorPicker.value;
});

// Usando getElementById
changeColorButtonTagName.addEventListener("click", () => {
    const headerById = document.getElementById("main-header");
    headerById.style.color = colorPicker.value;
  });