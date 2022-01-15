//---------------------------------------------------FUNCIONES-----------------------------------------------------------------------------

//llamada local JSON

function callJSON() {

    $.get("data/VAR_DATA.json", function(respuesta, estado) {

        if (estado == 'success') {
            for (const gen of respuesta) {
                equiposLista.push(new Equipo(gen.nroEquipo, gen.marca, gen.estado));
            }

            aniadirDOMjQuery(equiposLista, '#listaVariadores');
        } else {
            console.log("Error en la carga de los datos");
        }
    });
}




//pushear DOM

function aniadirDOMjQuery(equiposLista, id) {

    $(id).empty();

    for (const eqp of equiposLista) {
        $(id).append(`<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Nro. equipo: ${eqp.nroEquipo}</h5>
                      <p class="card-text">${eqp.marca}</p>
                      <p class="card-text">${eqp.estado} </p>
                    </div>
                  </div>`);

    }
}



function saveVariadores() {

    almacenVariadores = [];

    almacenVariadores = JSON.parse(localStorage.getItem('saveVFDs'));

    newEquiposLista = [];

    newEquiposLista = equiposLista.concat(almacenVariadores);

    localStorage.setItem('saveVFDs', JSON.stringify(newEquiposLista));

}


// FUNCION PARA PUSHEAR EL OBJETO AL ARRAY 
function agregarVariador() {
    equiposLista.push(new Equipo(nroEquipo, marcaEquipo, estado));
    //idEquipo++;
    //console.log(equiposLista);
}

//  FUNCION PARA BUSCAR POR NRO DE EQUIPO EL VARIADOR
/*
function verVariador() {
    let encontrado = equiposLista.find(equipo => equipo.nroEquipo == nroEquipo);
    console.log(encontrado);

}
*/