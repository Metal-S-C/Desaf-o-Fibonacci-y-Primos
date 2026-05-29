function esPrimo(numero){

    if(numero < 2){
        return false;
    }

    let divisores = 0;

    for(let i = 1; i <= numero; i++){

        if(numero % i == 0){
            divisores++;
        }
    }

    if(divisores == 2){
        return true;
    }
    else{
        return false;
    }
}

function generarSerie(){

    let cantidad =
    parseInt(document.getElementById("cantidad").value);

    let resultado =
    document.getElementById("resultado");

    if(isNaN(cantidad) || cantidad <= 0){

        resultado.innerHTML =
        "Ingrese una cantidad válida.";

        return;
    }

    let a = 0;
    let b = 1;
    let c;

    let texto = "";

    for(let i = 1; i <= cantidad; i++){

        let primo = esPrimo(a);

        if(primo){

            texto +=
            "<p class='primo'>" +
            a +
            " → Fibonacci y Primo" +
            "</p>";
        }
        else{

            texto +=
            "<p class='noPrimo'>" +
            a +
            " → Fibonacci" +
            "</p>";
        }

        c = a + b;
        a = b;
        b = c;
    }

    resultado.innerHTML = texto;
}

function mostrarNombre(){

    let nombre =
    document.getElementById("nombre").value;

    document.getElementById("mostrarNombre").innerHTML =
    "Estudiante: " + nombre;
}