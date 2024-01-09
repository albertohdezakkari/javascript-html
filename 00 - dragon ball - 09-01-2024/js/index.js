let pos = 610;
const $bola = document.getElementById("bola");

function moverBola(){
    pos = pos + 100;
    $bola.style.left = pos + "px";
}



function cambiarPeloPersonaje(){
   const $songoku = document.getElementById("songoku");
   console.log("llego");
   $songoku.src="./img/saiyan.jpg";
}
function moverPersonaje(){
    setInterval(
        moverBola
    ,1000);
    // let pos = $bola.style.left;
    // alert("pos bola=" + pos);
    // console.log("pos bola=" + pos);
   
}
function move(){
    cambiarPeloPersonaje();
    moverPersonaje();
}



