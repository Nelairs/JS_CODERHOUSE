//---------------------------------------------------FUNCIONES-----------------------------------------------------------------------------

//pushear DOM

function aniadirDOMjQuery() {

    $('#listaVariadores').empty();

    $('#listaVariadores').append(`<h3> LISTA VARIADORES`);
    for (const eqp of equiposLista) {
        $('#listaVariadores').append(`ID: ${eqp.idEquipo} <br> 
        Marca Variador: ${eqp.marca} <br> 
        Numero Equipo: ${eqp.nroEquipo} <br>
        Estado actual: ${eqp.estado}    <br>
        <br> `);
    }

}



function saveVariadores() {

    almacenVariadores = [];

    almacenVariadores = JSON.parse(localStorage.getItem('saveVFDs'));

    newEquiposLista = [];

    newEquiposLista = equiposLista.concat(almacenVariadores);

    localStorage.setItem('saveVFDs', JSON.stringify(newEquiposLista));

}

function loadVariadores() {

    let almacenVariadores = JSON.parse(localStorage.getItem('saveVFDs'));

    for (const obj of almacenVariadores) {
        equiposLista.push(new Equipo(obj));
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