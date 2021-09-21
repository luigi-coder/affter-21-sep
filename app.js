
/* function guardarEnLocalStorage(){

    let alumno = {
        nombre: 'Carlos',
        apellido: 'Perez',
        edad: 29
    }

    let alumno2 = 'Francisco'
    localStorage.setItem('nombre',alumno2)

    localStorage.setItem('alumno',JSON.stringify(alumno))

}
guardarEnLocalStorage()

function obtenerEnLocalStorage(){

    if(localStorage.getItem('nombre')){

        let nombre = localStorage.getItem('nombre');
        console.log(nombre)
    }
    if(localStorage.getItem('alumno')){ 

        let alumno = localStorage.getItem('alumno');
        alumno = JSON.parse(alumno)
        console.log(alumno.nombre) 
    }else {
        console.log('No se encontraron datos en local')
    }

}
obtenerEnLocalStorage()*/
document.getElementById('formulario').addEventListener('submit',crear);

function crear(e) {
    e.preventDefault();
    // Capturando valores del input
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = document.getElementById('precio').value;

    let libro = {
        titulo,
        descripcion,
        precio
    }

    if(localStorage.getItem('libros') === null){

        let libros = [];
        libros.push(libro)
        localStorage.setItem('libros', JSON.stringify(libros))
    }else {
        let libros = JSON.parse(localStorage.getItem('libros'))
        libros.push(libro)
        localStorage.setItem('libros', JSON.stringify(libros))
    }
    leer();
    document.getElementById('formulario').reset();

}

function leer(){

    let libros = JSON.parse(localStorage.getItem('libros'));

    document.getElementById('tbody').innerHTML = "";

    for (let i = 0; i < libros.length; i++) {
        
        let titulo = libros[i].titulo;
        let descripcion = libros[i].descripcion;
        let precio = libros[i].precio;

        document.getElementById('tbody').innerHTML += 
        `
        <tr>
            <td>${titulo}</td>
            <td>${descripcion}</td>
            <td>${precio}</td>
        </tr>
        `
    }
}
leer();