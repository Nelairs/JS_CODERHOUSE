let contador = 0;
let opt = prompt('Promediador de edades.\nDesea ingresar datos? S/N');
let salida = ' ';
let edadTotal = 0;



//let contador = 0;
//let opt = prompt('Promediador de edades.\nDesea ingresar datos? S/N');
//let edadTotal = 0;

if (opt != 'N') {


    while (salida != 'ESC') {
        agregarEdad()

    }
    alert('El promedio es: ' + edadTotal / contador + '.\nTotal de personas: ' + contador);
} else {
    alert('Programa abortado por usuario.');
    opt = 'x';
}

function agregarEdad() {
    edadTotal = edadTotal + parseInt(prompt('Ingrese edad.'));
    contador++;
    salida = prompt('Desea continuar?\nPara salir envie ESC.');

}





/*function saludar(){
    let nombre = prompt("INGRESAR NOMBRE");
    alert('EL NOMBRE ES '+ nombre);
}

let nombre = prompt('Ingrese nombre.');

function saludar(nombre) {
    alert('Bienvenido, ' + nombre);
}

saludar(nombre);
*/