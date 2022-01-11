const carrito = document.querySelector('#carrito');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarrito = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();

function cargarEventListeners() {
    //agregar un curso al carrito
    listaCursos.addEventListener('click', agregarCursos)
}

function agregarCursos(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('diste click en agregar carrito');
    }
}