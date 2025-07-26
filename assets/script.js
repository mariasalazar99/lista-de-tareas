//Lista de Tarea Predeterminada:
const tareasIniciales = [
    "¡Hola! Soy una tarea de ejemplo.",
];
const lista = document.getElementById('lista-tareas');
function crearElementoTarea(texto) {
  const li = document.createElement('li');
  li.className = "list-group-item task-item";

// ID de cada tarea:
  const id = Math.floor(Math.random() * 1000);

// Al agregar tarea, se añade la fecha y hora:
  const fecha = new Date().toLocaleString();

  const span = document.createElement('span');
  span.textContent = `(${id}) ${texto} | Fecha: ${fecha}`;
  span.onclick = () => span.classList.toggle('completed');

  const btnEliminar = document.createElement('button');
  btnEliminar.className = "btn btn-sm btn-outline-pink ms-2";
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(btnEliminar);
  lista.appendChild(li);
}

// Agregar una tarea:
function agregarTarea() {
  const input = document.getElementById('nueva-tarea');
  const texto = input.value.trim();
  const advertencia = document.getElementById('mensaje-advertencia');

  if (texto === "") {
    advertencia.textContent = "Hey! Debes agregar una tarea.";
  } else {
    advertencia.textContent = "";
    crearElementoTarea(texto);
    input.value = "";
  }
}

// Tareas predeterminadas:
tareasIniciales.forEach(t => crearElementoTarea(t));


// Sonido al agregar una tarea:
const sonido = new Audio("https://example.com/kawaii-pop.mp3");
sonido.play();