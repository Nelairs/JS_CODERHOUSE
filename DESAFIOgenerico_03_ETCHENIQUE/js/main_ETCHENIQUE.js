let word = prompt('Bienvenido al programa\nIngrese palabra a repetir.\nO ingrese ESC para cancelar.'); //Primera entrada
if (word != 'ESC') {

    while (word != 'ESC') {
        let repetir = parseInt(prompt('Ingrese cantidad de veces que desea repetir.')); //Ingreso cantidad
        for (let i = repetir; i > 0; i--) {
            console.log(word);
        }
        let opt = (prompt('Desea repetir la misma palabra?  S/N')); //Posibilidad de repetir nueva cantidad misma palabra

        if (opt == 'S') {
            continue;
        } else {
            word = prompt('Ingrese nueva palabra.\nO ESC para cancelar.'); //Nueva palabra o salida
        }
    }

    alert('Gracias por utilizar el programa :D')
} else {
    alert('Programa cancelado por usuario.'); //Caso de cancelar al principio
}






//EJERCICIOS DE CLASE
//OBVIAR



//let nombre = prompt("INGRESAR NOMBRE");
//alert('EL NOMBRE ES '+nombre);
/*
let producto    =   prompt('Ingrese un producto: \nPara salir ingrese ESC');

while (producto != 'ESC'){
    alert('El producto ingresado es ' + producto);

    producto    =   prompt('Ingrese un producto \n Ingrese ESC para salir');
    
}*/
/*
let n1 = parseInt(prompt('Ingrese primer numero.'));
let n2 = parseInt(prompt('Ingrese segundo numero.'));
let operacion = prompt('Ingrese operacion a realizar \n+ - * /\n Para salir ingrese ESC');

while (operacion != 'ESC') {
    switch (operacion) {
        case '+':
            let numero = n1 + n2;
            alert(numero);
            break;
        case '-':
            let numero = n1 - n2;
            alert(numero);
            break;
        case '*':
            let numero = n1 * n2;
            alert(numero);
            break;
        case '/':
            if (n2 > 0) {
                let numero = n1 / n2;
                alert(numero);
            } else {
                alert('NO SE PUEDE DIVIDIR POR CERO');
                break;
            }
            break;

        default:
            alert('Ingresaste operacion incorrecta.');

    }
}
*/