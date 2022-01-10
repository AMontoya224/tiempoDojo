function alerta(){
    alert("Loading weather report...");
}

let rem = document.getElementById("cookie");
function remove(){
    rem.remove()
}

let temp11 = document.getElementById("alta1");
let temp12 = document.getElementById("baja1");
let temp21 = document.getElementById("alta2");
let temp22 = document.getElementById("baja2");
let temp31 = document.getElementById("alta3");
let temp32 = document.getElementById("baja3");
let temp41 = document.getElementById("alta4");
let temp42 = document.getElementById("baja4");
function escogertemperatura(element) {
    element.value == "°C"; //necesario para que me reconozca el if de abajo
    if (element.value == "°C"){
        temp11.innerHTML = "24°";
        temp12.innerHTML = "18°";
        temp21.innerHTML = "27°";
        temp22.innerHTML = "19°";
        temp31.innerHTML = "21°";
        temp32.innerHTML = "16°";
        temp41.innerHTML = "26°";
        temp42.innerHTML = "21°";
    }
    else{
        temp11.innerHTML = "75°";
        temp12.innerHTML = "65°";
        temp21.innerHTML = "80°";
        temp22.innerHTML = "66°";
        temp31.innerHTML = "69°";
        temp32.innerHTML = "61°";
        temp41.innerHTML = "78°";
        temp42.innerHTML = "70°";
    }
}