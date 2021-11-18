//Datos
let lista = ['img/blade.jpg','img/cups.png','img/shaolin.jpg','img/watch.jpg'];
var indice = 0;
//Seleccionar los botones
let botones = document.querySelectorAll('.contenedorBotones img');
let btnAgregar = botones[0];
let btnEliminar = botones[1];

btnAgregar.addEventListener('click', function(){ agregar(lista) } );
btnEliminar.addEventListener('click', eliminar );

function agregar( lista ){
    //Creamos elemento
    let imgCreada = document.createElement('img');
    //Definir parametros
    imgCreada.src = lista[indice];
    //Seleccionar el contenedor
    let contenedorPeliculas = document.querySelector('.contenedorPeliculas');
    //Agregar el elemento
    contenedorPeliculas.appendChild(imgCreada);

    indice = (++indice>3)? 0 : indice;
}

function eliminar(){
    //Seleccion de contenedor
    let contenedorPeliculas = document.querySelector('.contenedorPeliculas');
    //Seleccion de elemento a eliminar
    let ultimo = contenedorPeliculas.lastChild;
    //Eliminar el elemento-
    contenedorPeliculas.removeChild(ultimo);
}
