//variables
const carrito = document.querySelector('#carrito');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarrito = document.querySelector('#vaciar-carrito');

const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    //agregar un curso al carrito
    listaCursos.addEventListener('click', agregarCursos);

    //eliminar un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //cargar los articulos guardados en el localstorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    //vaciar el carrito
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo

        limpiarHTML(); // eliminamos todo el HTML
    })
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

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')
        
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        
        carritoHTML(); //iterar sobre el carrito y mostrar su html
    };
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
    //revisar si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)
    if (existe) {
        //actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return curso //retorna el objeto actualizado
            } else {
                return curso//retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //agregar elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    

    console.log(articulosCarrito)

    carritoHTML();
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

    //agregar el carrito de compras al storage
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}

function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    //forma rápida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito. firstChild)
    }
}




