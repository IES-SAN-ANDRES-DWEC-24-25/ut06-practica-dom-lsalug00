// Seleccionar elementos del DOM
const input = document.querySelector(".AñadirElemento");
const button = document.querySelector(".BotonAñadir");
const ul = document.querySelector(".lista ul");

// Agregar un evento al botón para añadir un nuevo elemento a la lista
button.addEventListener("click", () => {
    // Obtener el texto del input y eliminar espacios
    const newItemText = input.value.trim();

  if (newItemText !== "") {
    // Crear un nuevo elemento de lista
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;

    // Añadir el nuevo elemento a la lista
    ul.appendChild(newItem);

    // Limpiar el input después de añadir el elemento
    input.value = "";
  } else {
    // Mostrar un mensaje si el input está vacío (opcional)
    alert("Por favor, introduce un elemento para añadir.");
  }
});