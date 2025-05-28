let formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  document.querySelector('.formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  let nombre = document.getElementById('name').value; // 
  let edad = document.getElementById('age').value; // 
  let nacionalidad = document.getElementById('nationality').value;  // 

  console.log(nombre, edad); // Imprime nombre y edad en la consola
  console.log(nacionalidad); // Imprime nacionalidad en la consola  
  if (nombre.length === 0) { // Verifica si el nombre está vacío
    n.classList.add("error"); // Agrega la clase "error" al campo nombre si está vacío
  } else if (edad < 18 || edad > 120) { // Verifica si la edad es menor a 18 o mayor a 120
    e.classList.add("error"); // Agrega la clase "error" al campo edad si no es válida
  } else if (nombre.length > 0 && (edad > 18 && edad < 120)) { // Verifica si el nombre no está vacío y la edad es válida
    agregarInvitado(nombre, edad, nacionalidad); // Llama a la función para agregar el invitado
  }
  
});

let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  let lista = document.getElementById("lista-de-invitados")

  let elementoLista = document.createElement("div")
  elementoLista.classList.added("elemento-lista")
  lista.appendChild(elementoLista)

  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span")
    let inputNombre = document.createElement("input")
    let espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  let botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  let corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}