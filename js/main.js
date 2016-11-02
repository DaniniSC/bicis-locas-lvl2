function validateForm(){
	//elementos rescatados del index
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var bici = document.querySelector("select").value;

	//agregar atributos
	.setAttribute("class", ".input-box");

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

	//VALIDAR CONTRASEÑA
	function validarContraseña(){
		if (contraseña.length<6 || contraseña=="password" || contraseña==123456 || contraseña==098754) {
			var divContraseña = document.getElementsByClassName('form-group')[0];
			var spanContraseña = document.createElement('span');
			var nodoContraseña = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
			spanContraseña.appendChild(nodoContraseña);
			divContraseña.appendChild(spanContraseña);
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
}
validateForm();