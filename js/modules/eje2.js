export default{
    Mario:[{estado:"normal",vidas:3}],


data:`
    <h1>Autor: Marcos Ortega </h1>
    <h3 id="txt1">Estado: Normal</h3>
    <h3 id=txt2>vidas: 3</h3>
    <img src="img/1.png" alt="" id="imagen"/>
    <button onclick="flor()">Flor</button><br>
    <button onclick="pluma()">Pluma</button><br>
    <button onclick="pierde()">Pierde</button><br>
   

    `,
    pierde:function(){
       var imagen = document.getElementById("imagen")
       var estado = document.getElementById("txt1");
       var vidas = document.getElementById("txt2");
       estado = "Estado: Normal"
       vidas = "Vidas: 3"
       imagen.innerHtml='<img src="img/1.jpg">' 
    },

    flor:function(){
        var imagen = document.getElementById("imagen")
       var estado = document.getElementById("txt1");
       var vidas = document.getElementById("txt2");
       estado = "Estado: Fuego"
       vidas = "Vidas: 3"
       imagen.innerHtml='<img src="img/3.jpg">' 
    },

    pluma:function(){
        var imagen = document.getElementById("imagen")
       var estado = document.getElementById("txt1");
       var vidas = document.getElementById("txt2");
       estado = "Estado: Volador"
       vidas = "Vidas: 3"
       imagen.innerHtml='<img src="img/2.jpg">' 
    },
};
