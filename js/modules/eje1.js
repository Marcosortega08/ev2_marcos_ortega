export default {
                   
    trabajadores:[                     
        {numero :1 ,nombre:'Rigby', sueldo:300000},                     
        {numero :2 ,nombre:'Papaleta', sueldo:450000},                     
        {numero :3 ,nombre:'Mordecay', sueldo:350000},                     
        {numero :4 ,nombre:'Thomas', sueldo:270000},                     
        {numero :5,nombre:'Benson', sueldo:700000},                     
        {numero :6,nombre:'Skip', sueldo:450000}         
            ],
data:`
<h3>autor : Marcos Ortega</h3>
<h2>Nombre: El Parque Web</h2>
<h2>Empresa : Cartoon</h2>
<div id="salida"></div>
`,
cargarTabla:function(){
    var salida = document.getElementById('salida');
    var tabla =`
        <table border='1' width='400'>
        <tr>
            <th>id</th>
            <th>nombre</th>
            <th>sueldo</th>
        </tr>
    `;

    this.trabajadores.forEach(item => {
        tabla +=`
        <tr class="${item.nombre > 350000 ? "sueldo_Mayor" : "sueldo_Menor"}">
             <td>${item.numero}</td>
             <td>${item.nombre}</td>
             <td>${item.sueldo}</td> 
        </tr>
        `;
    });

    tabla +=`</table>`;

    salida.innerHTML = tabla;
},            

};