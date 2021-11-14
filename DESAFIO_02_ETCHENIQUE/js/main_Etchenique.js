const   psw =   'CoderHouseJS'
let     flag    =   true;
let user    =   prompt('Ingrese nombre de usuario.');


    if(user != ''){

        console.log('Bienvenido '   +   user);

        if(prompt('Bienvenido ' + user + '\nIngrese Llave de Acceso') == psw){
            alert('Ingreso con exito');

        }
        else{
            alert('Llave erronea.')
        }
        
    }
        
            
        
else{
    
    alert('Usuario Invalido. \nPor favor intente otra vez.');  
    }