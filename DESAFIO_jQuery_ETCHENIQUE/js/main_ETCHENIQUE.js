//PROGRAMA DATOS VARIADORES

//  SE TRATA DE UN PROGRAMA PARA GUARDAR Y LISTAR LOS VARIADORES QUE SE REVISAN Y SE HACEN MANTENIMIENTOS
//  EN UN FUTURO LO INTEGRARIA CON UN BASE DE DATOS


// DECLARACION DE CLASE CONSTRUCTORA PARA EL ARMADO DE OBJETO
class Equipo {

    constructor(idEquipo, nroEquipo, marca, estado) {
        this.idEquipo = parseInt(idEquipo);
        this.nroEquipo = parseInt(nroEquipo);
        this.marca = marca;
        this.estado = parseInt(estado);
    }
}

//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

// INICIO DEL PROGRAMA

//console.log(JSON.parse(localStorage.getItem('saveVFDs')));

let miForm = document.getElementById('registroVariadores');
//let miForm = $('#registroVariadores');

console.log(miForm);

miForm.onsubmit = (e) => {

    e.preventDefault();

    const inputs = miForm.children;

    nroEquipo = inputs[0].value;

    //marcaEquipo = inputs[2].value;

    let obt = document.getElementById('marcaVariador').value;
    //let obt = $('#marcaVariador').value;

    marcaEquipo = obt;

    obt = document.getElementById('estadoVariador').value;
    //obt = $('#estadoVariador').value;

    estado = obt;

    agregarVariador();

    //aniadirDOM();

    aniadirDOMjQuery();

    saveVariadores();
}