//poner un contador de visita. 
//Suma cada visita al recargarla pag. Tiene que quedar guardadas en localStorage
//Hacer funcionar el boton de "restablecer contador"". Pero que comience desde 1
localStorage.setItem("visitCounter",1);
console.log(localStorage.getItem("visitCounter"));
let btnCero = document.getElementById("btnReestablecer");

const visitCounter = localStorage.getItem("contadorVisitas");

const visitConter={
    counter: 1,
};
if(!visitCounter){
    counter = 0;
    localStorage.setItem(visitCounter, counter);
} else {
    counter = localStorage.getItem(visitCounter);
    counter++;
    localStorage.setItem(visitCounter, counter);
}

document.getElementById("contadorVisitas").innerHTML = counter;


btnCero.addEventListener('click',()=> {
    if (counter > 0) {
        counter --;
        btnCero.addEventListener = " ";
    }
});
getComputedStyle.btnCero
