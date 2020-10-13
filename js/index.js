import eje1 from './modules/eje1.js';
import eje2 from './modules/eje2.js';

var caja = document.getElementById("caja");

window.cargarTabla = eje1.cargar;
window.Mario = eje2.estado;

document.getElementById("eje1").addEventListener("click",() => {
    caja.innerHTML = eje1.data;
    eje1.cargar();

});

document.getElementById("eje2").addEventListener("click",() => {
    caja.innerHTML = eje2.data;

});