$(document).ready(function() {
   // on ready
});

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//Selecionar el formulario y todos los input
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

//Validacion evento de teclado
inputs.forEach(function(input) {
	input.addEventListener('keyup',validarFormulario);  //teclado
	input.addEventListener('blur',validarFormulario);   //mause
});

//Validar campos a campo
function validarCampos(expresion, input, campo, error){
	if(expresion.test(input.value)){
			document.getElementById(campo).classList.remove('border','border-danger');
			document.getElementById(campo).classList.add('border','border-primary');
			document.getElementById(error).innerHTML = '';

		}else{
			document.getElementById(campo).classList.add('border','border-primary');
			document.getElementById(campo).classList.add('border','border-danger');
			document.getElementById(error).innerHTML = '<small>Valor ingresado invalido</small>';
		}
}

function validarFormulario(e){
	switch(e.target.name){
		case 'correo':
			validarCampos(expresiones.correo,e.target,'correo', 'errorCorreo');
		break;
		case 'password':
			validarCampos(expresiones.password,e.target,'password','errorPassword');
		break;
	}
}

async function validarIdentidad(){
	//Capturando la informacion del formulario
	let datos = {};
	datos.correo = document.getElementById('correo').value;
	datos.password = document.getElementById('password').value;
	
	const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  const respuesta = await request.text();
  
  if(respuesta == 'FAILED'){
		document.getElementById('errorlogin').innerHTML = '<small>Correo electronico o Contraseña incorrecta</small>';
	}else{
		console.log(respuesta);
    	window.location.href = 'tables.html'
	}
	

}
