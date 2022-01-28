$(document).ready(function() {
   $('#dataTable').DataTable();
   cargarUsuarios();
});

//Variables globales
let datos = {};

<<<<<<< HEAD
function cargarUsuarios(){
	datos.id = document.getElementById('id').innerHTML = '1116666729';
	datos.nombres = document.getElementById('nombres').innerHTML = 'Endo Rodrigo';
	datos.apellidos = document.getElementById('apellidos').innerHTML = 'Rodriguez Ariza';
	datos.correo = document.getElementById('correo').innerHTML = 'endo@gmail.com';

=======
async function cargarUsuarios(){
	const request = await fetch('api/alumnos',{
		method: 'GET',
    	headers: {
    	  	'Accept': 'application/json',
      		'Content-Type': 'application/json'
    }
	});

	const response = await request.json();
	console.log(response);
	
	let estudianteTable = '';
	for (var valor of response) {
		
		estudianteInfo= '<tr><td>'+valor.id+'</td><td>'+valor.nombres+'</td><td>'+valor.apellidos+'</td><td>'
                              +valor.genero+'</td ><td>'+valor.edad+'</td ><td>'+valor.correo+'</td ><td>'
                              +valor.celular+'</td ><td>'+valor.matricula+'</td><td>'+valor.grado+'</td ><td>'
                              +valor.colegio+'</td><td>'+valor.fechaNacimiento+'</td></tr>';
        estudianteTable += estudianteInfo;
        
     
	}
	
	document.querySelector('#dataTable tbody').outerHTML = estudianteTable;
	
}

async function registrarEstudiante(){
	datos.nombres = document.getElementById('nombres').value;
	datos.apellidos = document.getElementById('apellidos').value;
	let selecionado = document.getElementById('genero');
	datos.genero = selecionado.options[selecionado.selectedIndex].value;
	datos.edad = document.getElementById('edad').value;
	datos.correo = document.getElementById('correo').value;
	datos.celular = document.getElementById('celular').value;
	datos.Matricula = document.getElementById('matricula').checked;
	datos.grado = document.getElementById('grado').value;
	datos.colegio = document.getElementById('colegio').value;
	datos.fechaNacimiento = document.getElementById('fecha').value;

		const request = await fetch('api/registrarAlumno',{
		method: 'POST',
    	headers: {
    	  	'Accept': 'application/json',
      		'Content-Type': 'application/json'
    },
    
    	body: JSON.stringify(datos)
	});

	const response = await request.json();
	console.log(response);
	window.location.href = 'tables.html'
	
}

async function consultarEstudiante(){
	datos.id = document.getElementById('id').value;
	
	const request = await fetch('api/alumno/'+datos.id,{
		method : 'GET',
		headers : {
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
		}
	});
	const response = await request.json();
	console.log(response);
	
	document.getElementById('nombres').value = response.nombres;
	document.getElementById('apellidos').value = response.apellidos;
	document.getElementById('genero').value = response.genero;
	document.getElementById('edad').value = response.edad;
	document.getElementById('correo').value = response.correo;
	document.getElementById('celular').value = response.celular;
	document.getElementById('matricula').checked = response.matricula;
	document.getElementById('grado').value = response.grado;
	document.getElementById('colegio').value = response.colegio;
	document.getElementById('fecha').value = response.fechaNacimiento;
}

async function actualizarEstudiante(){
	datos.id = parseInt(document.getElementById('id').value);
	datos.nombres = document.getElementById('nombres').value;
	datos.apellidos = document.getElementById('apellidos').value;
	let selecionado = document.getElementById('genero');
	datos.genero = selecionado.options[selecionado.selectedIndex].value;
	datos.edad = parseFloat(document.getElementById('edad').value);
	datos.correo = document.getElementById('correo').value;
	datos.celular = parseInt(document.getElementById('celular').value) ;
	datos.Matricula = document.getElementById('matricula').checked;
	datos.grado = document.getElementById('grado').value;
	datos.colegio = document.getElementById('colegio').value;
	datos.fechaNacimiento = document.getElementById('fecha').value;
	
		const request = await fetch('api/actualizarAlumno',{
		method : 'PUT',
		headers : {
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	const response = await request.json();
	console.log(response);
	
	window.location.href = 'tables.html'
}

async function elimairEstudiante(){
	
	datos.id = document.getElementById('id').value;
	datos.nombres = document.getElementById('nombres').value;
	datos.apellidos = document.getElementById('apellidos').value;
	let selecionado = document.getElementById('genero');
	datos.genero = selecionado.options[selecionado.selectedIndex].value;
	datos.edad = document.getElementById('edad').value;
	datos.correo = document.getElementById('correo').value;
	datos.celular = document.getElementById('celular').value;
	datos.Matricula = document.getElementById('matricula').checked;
	datos.grado = document.getElementById('grado').value;
	datos.colegio = document.getElementById('colegio').value;
	datos.fechaNacimiento = document.getElementById('fecha').value;
	
	const request = await fetch('api/eliminarAlumno',{
		method : 'DELETE',
		headers : {
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	//const response = await request.json();
	//console.log(response);
	window.location.href = 'tables.html'

	
>>>>>>> d168083 (Finalizacion del Front para CRUD ESTUDIANTES)
}