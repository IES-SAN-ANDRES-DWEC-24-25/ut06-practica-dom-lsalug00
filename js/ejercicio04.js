// Seleccionar elementos del DOM
const input = document.querySelector(".AñadirElemento");
const addButton = document.querySelector(".BotonAñadir");
const deleteLastButton = document.querySelector(".BotonBorrarUltimo");
const deleteFirstButton = document.querySelector(".BotonBorrarPrimero");
const ul = document.querySelector(".lista ul");

// Evento para añadir un nuevo elemento a la lista
addButton.addEventListener("click", () => {
  const newItemText = input.value.trim(); // Obtener el texto del input y eliminar espacios

  if (newItemText !== "") {
    // Crear un nuevo elemento de lista
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;

    // Añadir el nuevo elemento a la lista
    ul.appendChild(newItem);

    // Limpiar el input después de añadir el elemento
    input.value = "";
  } else {
    alert("Por favor, introduce un elemento para añadir."); // Mensaje si el input está vacío
  }
});

// Evento para borrar el último elemento de la lista
deleteLastButton.addEventListener("click", () => {
  if (ul.children.length > 0) {
    ul.removeChild(ul.lastElementChild); // Eliminar el último hijo de la lista
  } else {
    alert("No hay elementos en la lista para borrar."); // Mensaje si la lista está vacía
  }
});

// Evento para borrar el primer elemento de la lista
deleteFirstButton.addEventListener("click", () => {
  if (ul.children.length > 0) {
    ul.removeChild(ul.firstElementChild); // Eliminar el primer hijo de la lista
  } else {
    alert("No hay elementos en la lista para borrar."); // Mensaje si la lista está vacía
  }
});