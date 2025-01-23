let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";

window.addEventListener("load", iniciar);

function iniciar() {
  listDiv = document.querySelector(".list");
  listUl = listDiv.querySelector("ul");
  lis = listUl.children;
  toggleList = document.getElementById("toggleList");
  descriptionInput = document.querySelector("input.description");
  descriptionP = document.querySelector("p.description");
  descriptionButton = document.querySelector("button.description");
  addItemInput = document.querySelector("input.addItemInput");
  addItemButton = document.querySelector("button.addItemButton");

  // Agregar botones a los elementos existentes
  for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
  }

  // Listeners para las acciones generales
  listUl.addEventListener("click", crearbotones);
  toggleList.addEventListener("click", MostrarOcultarLista);
  descriptionButton.addEventListener("click", CambiarTextoLista);
  addItemButton.addEventListener("click", AñadirElemento);
}

function attachListItemButtons(li) {
  let subir = document.createElement("button");
  subir.className = "subir";
  subir.textContent = "subir";
  li.appendChild(subir);

  let bajar = document.createElement("button");
  bajar.className = "bajar";
  bajar.textContent = "bajar";
  li.appendChild(bajar);

  let borrar = document.createElement("button");
  borrar.className = "borrar";
  borrar.textContent = "borrar";
  li.appendChild(borrar);
}

function crearbotones(event) {
  const button = event.target;
  const li = button.parentElement;

  if (button.className === "borrar") {
    // Borrar el elemento
    li.remove();
  } else if (button.className === "subir") {
    // Mover el elemento hacia arriba
    const prevLi = li.previousElementSibling;
    if (prevLi) {
      listUl.insertBefore(li, prevLi);
    }
  } else if (button.className === "bajar") {
    // Mover el elemento hacia abajo
    const nextLi = li.nextElementSibling;
    if (nextLi) {
      listUl.insertBefore(nextLi, li);
    }
  }
}

function MostrarOcultarLista() {
  if (listDiv.style.display === "none") {
    listDiv.style.display = "block";
    toggleList.textContent = "Ocultar lista";
  } else {
    listDiv.style.display = "none";
    toggleList.textContent = "Mostrar lista";
  }
}

function CambiarTextoLista() {
  const newText = descriptionInput.value.trim();
  if (newText !== "") {
    descriptionP.textContent = newText;
    descriptionInput.value = "";
  }
}

function AñadirElemento() {
  const newItemText = addItemInput.value.trim();
  if (newItemText !== "") {
    const li = document.createElement("li");
    li.textContent = newItemText;
    attachListItemButtons(li);
    listUl.appendChild(li);
    addItemInput.value = "";
  }
}