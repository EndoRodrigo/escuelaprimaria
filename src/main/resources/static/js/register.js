$(document).ready(function() {
   // on ready
});

//Variables globales
const expresiones = {
	letras: /^[a-zA-Z ]{1,16}$/, // Letras
	numeros: /^[0-9]{1,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

let datos = {};
let confirmarPassword;


//Selecionar el formulario y todos los input
const inputs = document.querySelectorAll('#formulario input');

//Validacion evento de teclado
inputs.forEach(function(input) {
	input.addEventListener('keyup',validarFormulario);  //teclado
});

function validarFormulario(e){
	switch(e.target.name){
		case "nombres":
			validarTexto(e.target, 'errorNombre');
			datos.nombres = document.getElementById('exampleFirstName').value;
		break;
		case "apellidos":
			validarTexto(e.target, 'errorApellido');
			datos.apellidos = document.getElementById('exampleLastName').value;
		break;
		case "correo":
			validarCorreo(e.target);
			datos.correo = document.getElementById('exampleInputEmail').value;
		break;
		case "password":
			validarNumerico(e.target, 'errorPassword');
			datos.password = document.getElementById('exampleInputPassword').value;
		break;
		case "confpass":
			validarNumerico(e.target, 'errorConf');
			confirmarPassword = document.getElementById('exampleRepeatPassword').value;
		break;

	}
}

function validarTexto(input,error){
	if(expresiones.letras.test(input.value)){
		document.getElementById(error).innerHTML = '';
	} 
	else if(expresiones.numeros.test(input.value)){
		document.getElementById(error).innerHTML = '<small>No se permite datos numericos</small>';
	}
	else{
		document.getElementById(error).innerHTML = '<small>No se permite caracteres especiales</small>';

	}

}

function validarNumerico(input, error){
	if(expresiones.numeros.test(input.value)){
		document.getElementById(error).innerHTML = '<small></small>';
	}else if(expresiones.letras.test(input.value)){
		document.getElementById(error).innerHTML = '<small>No se permite letras</small>';
	}else{
		document.getElementById(error).innerHTML = '<small>No se permite caracteres especiales</small>';
	}
}

function validarCorreo(input){
	if(expresiones.correo.test(input.value)){
		document.getElementById('errorCorreo').innerHTML = '<small></small>';
	}else{
		document.getElementById('errorCorreo').innerHTML = '<small>Estructura invalida</small>';

	}
}


async function registrarUsusario(){
	
	if (confirmarPassword != datos.password) {
    alert('La contraseña que escribiste es diferente.');
    return;
  }
	
	const request = await fetch('api/registrar', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const respuesta = await request.text();
  console.log(respuesta);
  
  if(respuesta == 'OK'){	
	window.location.href = 'tables.html'
	}else{
		return;
	}
}
