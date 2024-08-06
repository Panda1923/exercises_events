// Array para guardar las notas
let notas = [
    
]

// Variable para el control del id
let idGlobal = 2;

// Función para pintar las notas
function pintarNotas() {
    const contenedor = document.getElementById('contenedorNotas');
    contenedor.innerHTML = '';

    if (notas.length === 0) {
        contenedor.innerHTML = '<p class="text-center w-100">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    notas.forEach(nota => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'note-card');
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${nota.titulo}</h5>
                    <p class="card-text">${nota.texto}</p>
                    <button class="btn btn-danger" onClick="borrarNota(${nota.id})">Borrar Nota</button>
                    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Función para agregar una nueva nota
function agregarNota(titulo, texto) {
    idGlobal++;
    const nuevaNota = { id: idGlobal, titulo, texto, realizada: false };
    notas.push(nuevaNota);
    pintarNotas();
}

// Función para borrar una nota
function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
}

// Función para marcar una nota como realizada
function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
    }
    pintarNotas();
}

// Función para filtrar notas por texto
function filtrarPorTexto(array, texto) {
    return texto ? array.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto)) : array;
}

// Función para filtrar notas por estado
function filtrarPorEstado(array) {
    return array.filter(nota => nota.realizada);
}

// Función para actualizar la lista de notas filtradas
function actualizarNotasFiltradas() {
    let notasFiltradas = [...notas];

    const textoFiltro = document.getElementById('buscar').value;
    notasFiltradas = filtrarPorTexto(notasFiltradas, textoFiltro);

    const estadoFiltro = document.getElementById('filtroRealizadas').checked;
    if (estadoFiltro) {
        notasFiltradas = filtrarPorEstado(notasFiltradas);
    }

    pintarNotasFiltradas(notasFiltradas);
}

// Función para pintar las notas filtradas
function pintarNotasFiltradas(notasFiltradas) {
    const contenedor = document.getElementById('contenedorNotas');
    contenedor.innerHTML = '';

    if (notasFiltradas.length === 0) {
        contenedor.innerHTML = '<p class="text-center w-100">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    notasFiltradas.forEach(nota => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'note-card');
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${nota.titulo}</h5>
                    <p class="card-text">${nota.texto}</p>
                    <button class="btn btn-danger" onClick="borrarNota(${nota.id})">Borrar Nota</button>
                    <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Event listeners para los botones y filtros
document.getElementById('guardar').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    if (titulo && texto) {
        agregarNota(titulo, texto);
        document.getElementById('titulo').value = '';
        document.getElementById('texto').value = '';
    } else {
        alert('Por favor, complete todos los campos');
    }
});

document.getElementById('limpiar').addEventListener('click', () => {
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
});

document.getElementById('buscar').addEventListener('input', actualizarNotasFiltradas);
document.getElementById('filtroRealizadas').addEventListener('change', actualizarNotasFiltradas);

// Pintar notas iniciales
pintarNotas();
