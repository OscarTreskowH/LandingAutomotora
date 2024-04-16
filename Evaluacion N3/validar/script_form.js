function validarRut(rut){
    var suma=0;
    var arrRut = rut.split("-");
    var rutSolo = arrRut[0];
    var verif = arrRut[1];
    var continuar = true;
    for(i=2;continuar;i++){
        suma += (rutSolo%10)*i;
        rutSolo = parseInt((rutSolo /10));
        i=(i==7)?1:i;
        continuar = (rutSolo == 0)?false:true;
    }
    resto = suma%11; dv = 11-resto;
    if(dv==10){  
    if(verif.toUpperCase() == 'K') return true;
    }else if (dv == 11 && verif == 0)
        return true;
        else if (dv == verif) return true;
        return false;
}

function validar(){
    
    
    var rut = validarRut(document.getElementById(
        "rutTxt").value);
        if (rut==false){
            alert("Rut incorrecto, ingreselo en el formato 11111111-k");
            return;
        }
        var nombre = document.getElementById("nombreTxt").value;
        if(nombre.trim().length == 0){
            alert("Error, el campo nombre es obligatorio.");
            return;
        }
        var apellido = document.getElementById("apellidoTxt").value;
        if(apellido.trim().length == 0){
            alert("Error, el campo apellido es obligatorio.");
            return;
        }

        var edad = document.getElementById("edadTxt").value;

        if(edad.trim().length == 0){
            alert("Error, debe de ingresar su edad");
            return;
        }else{
            if(edad < 18){
                alert("Usted debe de ser mayor de edad");
                return;
            }
        }
        var telefono = document.getElementById("telefonoTxt").value;
        if( !(/^\d{9}$/.test(telefono)) ) {
            alert("Error, el numero de telefono debe contener 9 digitos. ");
            return;
        }

        var correo = document.getElementById("correoTxt").value; 
        if (!/^[a-zA-Z0-9]+[a-zA-Z0-9._]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z.]+/.test(correo)){
            alert("La dirección de email es incorrecta.");
            return;
        }

        var p1 = document.getElementById("pass1").value;
        var p2 = document.getElementById("pass2").value;
        if(p1.trim().length == 0){
            alert("Error, clave es obligatoria.");
            return;
        }else{
            if(p1 != p2){
                alert("Las contraseñas deben coincidir.");
                return;
            }

        alert("¡¡¡ Registro Completado / Todos los Datos Ingresados Correctamente !!!");    
        }
        
}

let rutForm = document.getElementById("rutTxt");
let nombreForm = document.getElementById("nombreTxt");
let apellidoForm = document.getElementById("apellidoTxt");
let edadForm = document.getElementById("edadTxt");
let telefonoForm = document.getElementById("telefonoTxt");
let correoForm = document.getElementById("correoTxt");
let claveForm = document.getElementById("pass1");
let rclaveForm = document.getElementById("pass2");


function validarm(){
               
    //validación de campo obligatorio para código
    var rut = validarRut(document.getElementById("rutTxt").value);
    if (rut == false){
        alert("Rut incorrecto, ingréselo en el formato 11111111-1.");
        return;
    }
    
    var nombre = document.getElementById("nombreTxt").value;
    if(nombre.trim().length == 0){
        alert("Error, el nombre del objeto es obligatorio.");
        return;
    }
    var apellido = document.getElementById("apellidoTxt").value;
    if(apellido.trim().length == 0){
        alert("Error, el Apellido Paterno es obligatorio.");
        return;
    }

    var telefono = document.getElementById("telefonoTxt").value;
    if( !(/^\d{9}$/.test(telefono)) ) {
        alert("Error, el numero de telefono debe contener 9 digitos. ");
        return;
    }

    var correo = document.getElementById("correoTxt").value; 
    if (!/^[a-zA-Z0-9]+[a-zA-Z0-9._]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z.]+/.test(correo)){
        alert("La dirección de email es incorrecta.");
        return;
    }
 

    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    if(p1.trim().length == 0){
        alert("Error, clave es obligatoria.");
        return;
    }else{
        if(p1 != p2){
            alert("Las contraseñas deben coincidir.");
            return;
        }
    }

    var edad = document.getElementById("edadTxt").value;

    if(edad.trim().length == 0){
        alert("Error, debe de ingresar su edad.");
        return;
    }else{
        if(edad < 18){
            alert("Usted debe de ser mayor de edad.");
            return;
        }
        
    }

}


