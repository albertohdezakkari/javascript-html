// CONSTANTES
const $div1 = document.getElementById("1");   
// VARIABLES
let divEstado1 = true;

// PROGRAMACIÓN MODULAR, A TRAVÉS DE FUNCIONES
function saludar(){
    alert("Mi primera función");
}
function cambiaColor(objeto){
    // let $caja1 = document.getElementById("1");
    objeto.style.backgroundColor = "yellow";
}

// FUNCIÓN REPETITIVA
function cambiaColorDeFormaRepetida($objeto){
    setInterval(
        alert("Hola")
        (a)=>{
            alert("variable=" + a);
        }
        ,
        2000
    );
}
//

// HASTA QUE LLEGUEMOS A TYPESCRIPT
function cambiaColor1(){
    // DOM -> DOCUMENT OBJECT MODEL
        // ÁRBOL DE OBJETOS
    alert("Has pulsado el box 1");
    if(divEstado1){
        $div1.style.backgroundColor="#AA9C39";
        divEstado1 = false;
    }else{
        $div1.style.backgroundColor="blue";
        divEstado1 = true;
    }
    
}
function cambiaColor2(){
    let div1 = document.getElementById("2");   
    alert("Has pulsado el box 2");
}
function cambiaColor3(){
    let div1 = document.getElementById("3");   
    alert("Has pulsado el box 3");
}
function cambiaColor4(){
    let div1 = document.getElementById("4");   
    alert("Has pulsado el box 4");
}
function cambiaColor5(){
    let div1 = document.getElementById("5");   
    alert("Has pulsado el box 5");
}
function cambiaColor6(){
    let div1 = document.getElementById("6");   
    alert("Has pulsado el box 6");
}
function cambiaColor7(){
    let div1 = document.getElementById("7");   
    alert("Has pulsado el box 7");
}
function cambiaColor8(){
    let div1 = document.getElementById("8");   
    alert("Has pulsado el box 8");
}