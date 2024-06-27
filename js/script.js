//poner un contador de visita. 
//Suma cada visita al recargarla pag. Tiene que quedar guardadas
//Hacer funcionar el boton de "restablecer contador"". Pero que comience desde 1

localStorage.setItem("visitCounter", 1);
console.log(localStorage.getItem("visitCounter"));

const btncero = document.getElementById("btnReestablecer");


const visitCounter= {
    counter: 1,
};
console.log(visitCounter);

const visitCouenter = localStorage.getItem(visitCounter);
let counter;

if(!visitCounter){
    counter = 0;
    localStorage.setItem(visitCounter, counter);
} else {
    counter = localStorage.getItem(visitCounter);
    counter++;
    localStorage.setItem(visitCounter, counter);
}

document.getElementById("contadorVisitas").innerHTML = counter;


function reestablecer (){
    localStorage.removeItem("contadorVisitas");
    location.reload();
}
console.log(reestablecer);

btncero.addEventListener('click',()=> {
    if (counter > 0) {
        counter --;
        btncero.addEventListener = " ";
    }
});
getComputedStyle.btncero
