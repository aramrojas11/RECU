const form = document.getElementById('registro');
const lista = document.getElementById('nombres');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cancion = document.getElementById('cancion').value;
  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
 
  const datos = { nombre,cancion,fecha};
  const nombres = JSON.parse(localStorage.getItem('nombres') || '[]');
  nombres.push(datos);
  localStorage.setItem('nombres', JSON.stringify(nombres));


//fraces
  alert(`El ${nombre} registrado correctamente`);
  form.reset();
  
  // Actualizar la lista de nombres registrados
  actualizarLista();
});

function actualizarLista() {
  lista.innerHTML = '';
  const nombres = JSON.parse(localStorage.getItem('nombres') || '[]');
  for (const datos of nombres) {
    const item = document.createElement('li');

    // frase completa 

    item.textContent = `Tu nombre es ${datos.nombre} la cancion que elejiste fue ${datos.cancion} y se lanzo el ${datos.fecha}}`;
    lista.appendChild(item);
  }
}

// Actualizar la lista de nombres registrados al cargar la página
actualizarLista();
