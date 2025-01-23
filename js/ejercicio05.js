document.addEventListener("DOMContentLoaded", () => {
    // Creamos un contenedor para mostrar el mensaje
    const output = document.querySelector("#resultado");
  
    // Seleccionamos todos los elementos <h3>
    const h3Elements = document.querySelectorAll("h3");
  
    h3Elements.forEach(h3 => {
      h3.addEventListener("click", event => {
        // Extraemos el elemento target
        const target = event.target;
  
        // Recuperamos el texto del H3 (eliminar espacios innecesarios)
        const h3Text = target.textContent.trim();
  
        // Obtenemos el div que contiene este H3
        const parentDiv = target.closest("div");
        const turno = parentDiv.id; // "mañana" o "tarde"
  
        // Obtenemos la lista de grupos asociados a este H3
        const ul = target.nextElementSibling; // El siguiente elemento es la lista <ul>
        const grupos = Array.from(ul.querySelectorAll("li")).map(li => li.textContent);
  
        // Construimos el mensaje
        const mensaje = `
          Has elegido ${h3Text} que se imparte en turno de ${turno}.
          Los nº de grupos que se imparten son ${grupos.length}: ${grupos.join(", ")}.
        `;
  
        // Sustituimos el contenido del contenedor con el mensaje
        output.textContent = mensaje;
      });
    });
});  
  