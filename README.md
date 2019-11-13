# VueCrud
VueCrud test.
Sitio de ejemplo para ver como funciona Vuejs asociado a una web se tienen en cuenta diferentes aspectos:

-Uso de HTML CSS y por supuesto Vuejs
-Maquetación hecha en Bootstrap 4
-Uso de modales creados desde 0
-Validaciones del formulario dentro de uno de los métodos del codigo.js, el nombre usa una regexp y la edad un rango
-Simulación de entrada de datos a Base de Datos{se parte desde un modelo,en el que introducir la información}

Algunos datos de prueba por si se quiere empezar el array con algún ejemplo:
(En codigo.js, meter en new Vue ->"data"->pacientes , lo siguiente)

pacientes:[{id:1,nombre:"Pepe", edad: 55},{id:2,nombre:"Sara", edad: 42},{id:3,nombre:"Ivan", edad: 26}];
NOTA: no se coge el último id del array cuando se construyen los pacientes, es decir, al no ser una base de datos
no nos autoincrementa el id de forma automática, con lo que si se empieza con datos de pruebas citados anteriormente
va a coger el id 1 como el primero, aunque hayan 3. Se puede corregir, haciendo que this.id sea igual al resultado de la siguiente variable:
var idFinal = this.pacientes[this.pacientes.length - 1]; ya que esto nos devuelve el último elemento de la tabla



