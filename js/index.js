import eje1 from "./modules/eje1.js";

var caja = document.getElementById("caja");

window.cargar = eje1.cargar;

document.getElementById("eje1").addEventListener("click", () => {
    caja.innerHTML = eje1.data;
  });