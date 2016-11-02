function validateForm(){
	//elementos rescatados del index
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	var bici = document.querySelector("select").value;

	//VALIDAR NOMBRE
	function validarNombre(){
		if (nombre==null || nombre.length==0) {
			var divNombre = document.getElementsByClassName('name-container')[0];
			var spanNombre = document.createElement('span');
			var nodoNombre = document.createTextNode("Debe ingresar su nombre");
			spanNombre.appendChild(nodoNombre);
			divNombre.appendChild(spanNombre);
			return false;
		}
		if (/[0-9]/.test(nombre)) {
			var divNombre = document.getElementsByClassName('name-container')[0];
			var spanNombre = document.createElement('span');
			var nodoNombre = document.createTextNode("Debe ingresar su nombre");
			spanNombre.appendChild(nodoNombre);
			divNombre.appendChild(spanNombre);
			return false;
		}
		if (!(/[A-Z]/.test(nombre.charAt(0)))){
			var divNombre = document.getElementsByClassName('name-container')[0];
			var spanNombre = document.createElement('span');
			var nodoNombre = document.createTextNode("Debe ingresar su nombre");
			spanNombre.appendChild(nodoNombre);
			divNombre.appendChild(spanNombre);
			return false;
		}
	}

	//VALIDAR APELLIDO
	function validarApellido(){
		if (apellido==null || apellido.length==0) {
			var divApellido = document.getElementsByClassName('lastname-container')[0];
			var spanApellido = document.createElement('span');
			var nodoApellido = document.createTextNode("Debe ingresar su apellido");
			spanApellido.appendChild(nodoApellido);
			divApellido.appendChild(spanApellido);
			return false;
		}
		if (/[0-9]/.test(apellido)) {
			var divApellido = document.getElementsByClassName('lastname-container')[0];
			var spanApellido = document.createElement('span');
			var nodoApellido = document.createTextNode("Debe ingresar su apellido");
			spanApellido.appendChild(nodoApellido);
			divApellido.appendChild(spanApellido);
			return false;
		}
		if (!(/[A-Z]/.test(apellido.charAt(0)))){
			var divApellido = document.getElementsByClassName('lastname-container')[0];
			var spanApellido = document.createElement('span');
			var nodoApellido = document.createTextNode("Debe ingresar su apellido");
			spanApellido.appendChild(nodoApellido);
			divApellido.appendChild(spanApellido);
			return false;
		}
	}

	//VALIDAR EMAIL
	function validarEmail(){
		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
			var divEmail = document.getElementsByClassName('email-container')[0];
			var spanEmail = document.createElement('span');
			var nodoEmail = document.createTextNode("Verifique su email");
			spanEmail.appendChild(nodoEmail);
			divEmail.appendChild(spanEmail);
			return false;
		}
	}

	//VALIDAR CONTRASEnA
	function validarContrasena(){
		if (contrasena.length<6 || contrasena=="password" || contrasena=='123456' || contrasena=='098754') {
			var divContrasena = document.getElementsByClassName('form-group')[0];
			var spanContrasena = document.createElement('span');
			var nodoContrasena = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
			spanContrasena.appendChild(nodoContrasena);
			divContrasena.appendChild(spanContrasena);
			return false;
		}
	}

	//VALIDAR SELECCIÓN
	function validarSeleccion(){
		if (bici==0) {
			var divSeleccion = document.getElementsByClassName('form-group')[1];
			var spanSeleccion = document.createElement('span');
			var nodoSeleccion = document.createTextNode("Debe seleccionar al menos un tipo de bici");
			spanSeleccion.appendChild(nodoSeleccion);
			divSeleccion.appendChild(spanSeleccion);
			return false;
		}
	}

	validarNombre();
	validarApellido();
	validarEmail();
	validarContrasena();
	validarSeleccion();

}
