import eje1 from './modules/eje1.js';

var caja = document.getElementById("caja");

window.cargarTabla = eje1.cargarTabla;


document.getElementById("eje1").addEventListener("click",() => {
    caja.innerHTML = eje1.data;
    eje1.cargar();

});