function validateForm(){
	//elementos rescatados del index
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var bici = document.querySelector("select").value;

	//acá irá nuestro mensaje
	var agregarMensajeAca = document.getElementsByClassName("input-box");

	//div que recibirá el span
	var mensajeError = document.createElement("div");

	//span que recibirá nuestro mensaje
	var elementoSpan = document.createElement("span");

	//crear nodos
	var nodoNombre = document.createTextNode("Debe ingresar su nombre");
	var nodoApellido = document.createTextNode("Debe ingresar su apellido");
	var nodoEmail = document.createTextNode("Verifique su email");
	var nodoContraseña = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
	var nodoBici = document.createTextNode("Debe seleccionar al menos un tipo de bici");

	//meter elementos dentro del div
	mensajeError.appendChild(elementoSpan);
	agregarMensajeAca.appendChild(mensajeError);

	//agregar atributos
	mensajeError.setAttribute("class", ".input-box");


	//"Debe ingresar su nombre"
	//"Debe ingresar su apellido"
	//"Verifique su email"
	//"La contraseña debe tener al menos 6 caracteres"
	//"Debe seleccionar al menos un tipo de bici"

	//VALIDAR NOMBRE
	if (nombre==null || nombre.length==0) {
		elementoSpan.appendChild(nodoNombre);
		agregarMensajeAca;
		return false;
	}
	if (/[0-9]/.test(nombre)) {
		elementoSpan.appendChild(nodoNombre);
		agregarMensajeAca;
		return false;
	}
	if (!(/[A-Z]/.test(nombre.charAt(0)))){
		elementoSpan.appendChild(nodoNombre);
		agregarMensajeAca;
		return false;
	}

	//VALIDAR APELLIDO
	if (apellido==null || apellido.length==0) {
		elementoSpan.appendChild(nodoApellido);
		agregarMensajeAca;
		return false;
	}
	if (/[0-9]/.test(apellido)) {
		elementoSpan.appendChild(nodoApellido);
		agregarMensajeAca;
		return false;
	}
	if (!(/[A-Z]/.test(apellido.charAt(0)))){
		elementoSpan.appendChild(nodoApellido);
		agregarMensajeAca;
		return false;
	}

	//VALIDAR EMAIL
	if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
		elementoSpan.appendChild(nodoEmail);
		agregarMensajeAca;
		return false;
	}

	//VALIDAR CONTRASEÑA
	if (contraseña.length<6 || contraseña=="password" || contraseña==123456 || contraseña==098754) {
		elementoSpan.appendChild(nodoContraseña);
		agregarMensajeAca;
		return false;
	}

	//VALIDAR SELECCIÓN
	if (bici==0) {
		elementoSpan.appendChild(nodoBici);
		agregarMensajeAca;
		return false;
	}
}