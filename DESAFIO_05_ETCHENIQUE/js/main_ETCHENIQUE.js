//PROGRAMA DATOS VARIADORES

//  SE TRATA DE UN PROGRAMA PARA GUARDAR Y LISTAR LOS VARIADORES QUE SE REVISAN Y SE HACEN MANTENIMIENTOS
//  EN UN FUTURO LO INTEGRARIA CON UN BASE DE DATOS



//SE DECLARAN VARIABLES UTILIZADAS EN EL PROGRAMA
let opt = ' ';
let exit = true;
let idEquipo = 0;
let nroEquipo = 0;
let marcaEquipo = 0;
let nroEstado = 0;
const equiposLista = [];


// DECLARACION DE CLASE CONSTRUCTORA PARA EL ARMADO DE OBJETO
class Equipo {

    constructor(idEquipo, nroEquipo, marca, estado) {
        this.idEquipo = parseInt(idEquipo);
        this.nroEquipo = parseInt(nroEquipo);
        this.marca = marca.toUpperCase();
        this.estado = parseInt(estado);
    }
}


// INICIALIZACION DEL PROGRAMA
alert('Bienvenido al ingreso de Variadores.\nEnter para continuar.');

while (exit) {
    opt = parseInt(prompt('Que desea hacer? \n1-Cargar Variador.\n2-Ver variador \n3-Total variadores.\n4-Salir.'));

    switch (opt) {
        case 1:
            idEquipo = parseInt(prompt('Asigne ID al equipo.'));
            nroEquipo = parseInt(prompt('Ingrese numero de equipo.'));
            marcaEquipo = prompt('Ingrese marca del equipo.');
            nroEstado = parseInt(prompt('Ingrese numero de estado. \n1-Reparado. \n2-Limpieza/Mantenimiento. \n3-En Espera.'));
            agregarVariador();
            break;
        case 2:
            nroEquipo = parseInt(prompt('Ingrese numero de equipo a buscar.'));
            verVariador();
            break;
        case 3:
            totalVariadores();
            break;
        case 4:
            exit = false;
            aniadirDOM();
            break;
        default:
            alert('Error.\nOpcion invalida.')
            break;
    }

}

// FUNCION PARA PUSHEAR EL OBJETO AL ARRAY 
function agregarVariador() {
    equiposLista.push(new Equipo(idEquipo, nroEquipo, marcaEquipo, nroEstado));
    console.log(equiposLista);
}

//  FUNCION PARA BUSCAR POR NRO DE EQUIPO EL VARIADOR
function verVariador() {
    let encontrado = equiposLista.find(equipo => equipo.nroEquipo == nroEquipo);
    console.log(encontrado);

}

//  CONTEO TOTAL DE VARIADORES LISTADOS
function totalVariadores() {
    let total = 0;
    for (const idEquipo of equiposLista) {
        total++;
    }

    console.log('El total de variadores almacenados es:' + total);
}

//pushear DOM

function aniadirDOM() {
    let espacioEquipos = document.getElementById('listaVariadores');

    let divEquipos = document.createElement('div');

    divEquipos.innerHTML = `<h3> LISTA VARIADORES`;

    espacioEquipos.appendChild(divEquipos);

    for (const eqp of equiposLista) {

        let divEquipos = document.createElement('div');

        divEquipos.innerHTML = ` Marca Variador: ${eqp.marca} <br> 
        Numero Equipo: ${eqp.nroEquipo} <br> `;

        espacioEquipos.appendChild(divEquipos);
    }
}