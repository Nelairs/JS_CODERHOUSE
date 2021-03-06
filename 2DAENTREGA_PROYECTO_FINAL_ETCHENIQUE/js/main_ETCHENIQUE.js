//PROGRAMA DATOS VARIADORES

//  SE TRATA DE UN PROGRAMA PARA GUARDAR Y LISTAR LOS VARIADORES QUE SE REVISAN Y SE HACEN MANTENIMIENTOS
//  EN UN FUTURO LO INTEGRARIA CON UN BASE DE DATOS



//SE DECLARAN VARIABLES UTILIZADAS EN EL PROGRAMA
let idEquipo = 0;
let nroEquipo = 0;
let marcaEquipo = ' ';
let equiposLista = [];
let newEquiposLista = [];
let almacenVariadores = [];


// DECLARACION DE CLASE CONSTRUCTORA PARA EL ARMADO DE OBJETO
class Equipo {

    constructor(idEquipo, nroEquipo, marca, estado) {
        this.idEquipo = parseInt(idEquipo);
        this.nroEquipo = parseInt(nroEquipo);
        this.marca = marca;
        this.estado = parseInt(estado);
    }
}

// FUNCION PARA PUSHEAR EL OBJETO AL ARRAY 
function agregarVariador() {
    equiposLista.push(new Equipo(idEquipo, nroEquipo, marcaEquipo, estado));
    idEquipo++;
    //console.log(equiposLista);
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

//---------------------------------------------------FUNCIONES-----------------------------------------------------------------------------

//pushear DOM

function aniadirDOM() {
    let espacioEquipos = document.getElementById('listaVariadores');

    let divEquipos = document.createElement('div');

    espacioEquipos.innerHTML = ' ';

    divEquipos.innerHTML = `<h3> LISTA VARIADORES`;

    espacioEquipos.appendChild(divEquipos);

    for (const eqp of equiposLista) {

        let divEquipos = document.createElement('div');

        divEquipos.innerHTML = `ID: ${eqp.idEquipo} <br> 
        Marca Variador: ${eqp.marca} <br> 
        Numero Equipo: ${eqp.nroEquipo} <br>
        Estado actual: ${eqp.estado}    <br>
        <br> `;

        espacioEquipos.appendChild(divEquipos);
    }
}

function saveVariadores() {

    almacenVariadores = [];

    almacenVariadores = JSON.parse(localStorage.getItem('saveVFDs'));

    newEquiposLista = [];

    newEquiposLista = equiposLista.concat(almacenVariadores);

    //console.log(almacenVariadores);
    //console.log(equiposLista);
    //console.log(newEquiposLista);


    localStorage.setItem('saveVFDs', JSON.stringify(newEquiposLista));

}

function loadVariadores() {

    let almacenVariadores = JSON.parse(localStorage.getItem('saveVFDs'));

    for (const obj of almacenVariadores) {
        equiposLista.push(new Equipo(obj));
    }


}

//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

// INICIO DEL PROGRAMA

console.log(JSON.parse(localStorage.getItem('saveVFDs')));

let miForm = document.getElementById('registroVariadores');

miForm.onsubmit = (e) => {

    e.preventDefault();

    const inputs = miForm.children;

    nroEquipo = inputs[0].value;

    //marcaEquipo = inputs[2].value;
    let obt = document.getElementById('marcaVariador').value;

    marcaEquipo = obt;

    obt = document.getElementById('estadoVariador').value;

    estado = obt;

    agregarVariador();

    aniadirDOM();

    saveVariadores();
}