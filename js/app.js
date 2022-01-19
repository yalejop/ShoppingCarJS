//variables
const carrito = document.querySelector('#carrito');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarrito = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    //agregar un curso al carrito
    listaCursos.addEventListener('click', agregarCursos)
}

//functiones

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
    //console.log(curso);

    //crear un objeto para almacenar la información del curso

    const infoCurso = {
    imagen : curso.querySelector('img').src,
    titulo : curso.querySelector('h4').textContent,
    precio : curso.querySelector('p span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad : 1,

    }

    carritoHTML();

    //agregar elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso]

    console.log(articulosCarrito)
}

//mostrar el carrito de compras en el HTML

function carritoHTML() {

    //limpiar el HTML
    limpiarHTML();

    //recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src=${imagen} width = 100px>
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>  
        <td> 
            <a href='#' class='borrar-curso' data-id='${id}'> X </a>
        </td>
        `;

        //agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    //forma rápida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito. firstChild)
    }
}




