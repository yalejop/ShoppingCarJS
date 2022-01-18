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
        const cursoSeleccionado = e.target.parentElement.parentElement;
        // console.log(cursoSeleccionado)
        leerDatosCurso(cursoSeleccionado);
    }
}

//lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    console.log(curso);

    //crear un objeto para almacenar la información del curso

    const infoCurso = {
    imagen : curso.querySelector('img').src,
    titulo : curso.querySelector('h4').textContent,
    precio : curso.querySelector('p span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad : 1,

    }

    console.log(infoCurso)
}



