export default {
trabajadores: [
    {nombre:'Rigby', sueldo:300000},
    {nombre:'Papaleta', sueldo:450000},
    {nombre:'Mordecay', sueldo:350000},
    {nombre:'Thomas', sueldo:270000},
    {nombre:'Benson', sueldo:700000},
    {nombre:'Skip', sueldo:450000} 
],
data: `
    <h1>autor: marcos ortega</h1>
    Nombre: El Parque Wed <br />
    Empresa: Cartoon <br />
    <div id="salida"></div>
`,
cargar: function () {
    var result = document.getElementById("salida");
    var tabla = `
            <table border='1' width='400'>
                <tr>
                    <th>nombre</th>
                    <th>sueldo</th>
                </tr>
      `;

    this.trabajadores.forEach((item) => {
      tabla += `
            <tr>
              <td>${item.nombre}</td>
              <td>${item.sueldo}</td>
            </tr>
          `;
    });

    tabla += "</table>";

    result.innerHTML = tabla;
  },


};