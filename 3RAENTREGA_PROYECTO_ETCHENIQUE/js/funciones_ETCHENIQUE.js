//---------------------------------------------------FUNCIONES-----------------------------------------------------------------------------

//llamada local JSON

function getJSON() {

    //GET AJAX PARA TRAER DATA GUARDADA EN JSON

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
                    <img src="${selectIMG(eqp.marca)}" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">Nro. equipo: ${eqp.nroEquipo}</h5>
                      <p class="card-text">${eqp.marca}</p>
                      <p class="card-text">${eqp.estado} </p>
                    </div>
                  </div>`);

    }
}


function selectIMG(marca) {

    let imgURL = "";

    switch (marca) {
        case 'SCH':
            imgURL = "/3RAENTREGA_PROYECTO_ETCHENIQUE/img/sch.png";
            break;

        case 'DAN':
            imgURL = "/3RAENTREGA_PROYECTO_ETCHENIQUE/img/dan.png";
            break;

        case 'LS':
            imgURL = "/3RAENTREGA_PROYECTO_ETCHENIQUE/img/ls.png";
            break;

        case 'ABB':
            imgURL = "/3RAENTREGA_PROYECTO_ETCHENIQUE/img/abb.png";
            break;

        default:
            break;
    }

    return imgURL;
}



function postJSON() {

    //$.post("data/VAR_TEST.json", JSON.stringify(equiposLista)

    $.ajax({
        type: 'POST',
        url: 'data/VAR_TEST.json',
        data: JSON.stringify(equiposLista), // or JSON.stringify ({name: 'jonas'}),
        success: function(data) { alert('data: ' + data); },
        contentType: "application/json",
        dataType: 'json'
    });

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