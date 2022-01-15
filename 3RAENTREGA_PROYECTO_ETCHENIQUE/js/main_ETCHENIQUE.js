//PROGRAMA DATOS VARIADORES

//  SE TRATA DE UN PROGRAMA PARA GUARDAR Y LISTAR LOS VARIADORES QUE SE REVISAN Y SE HACEN MANTENIMIENTOS
//  EN UN FUTURO LO INTEGRARIA CON UN BASE DE DATOS


// DECLARACION DE CLASE CONSTRUCTORA PARA EL ARMADO DE OBJETO
class Equipo {

    constructor(nroEquipo, marca, estado) {
        this.nroEquipo = parseInt(nroEquipo);
        this.marca = marca;
        this.estado = parseInt(estado);
    }
}

//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

// INICIO DEL PROGRAMA

callJSON();

$('#registroVariadores').submit(function(e) {

    e.preventDefault();

    nroEquipo = $('#numeroVariador').val();

    marcaEquipo = $('#marcaVariador').val();

    estado = $('#estadoVariador').val();

    agregarVariador();

    saveVariadores();

    $('#alertaCarga').fadeIn(1500).delay(2000).fadeOut(1500);

});