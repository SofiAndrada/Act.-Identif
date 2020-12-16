let user = ' ';
let password = ' ';
function identificacion(user, password){
	switch (true) {
		case (user === 'admin') && (password === 'calleFalsa123'):
			console.log("Bienvenido a nuestro sitio!");
			break;
		case (user === 'admin') && (password !== 'calleFalsa123'):
			console.log("Contraseña incorrecta!");
			break;
		case (user !== 'admin') && (password === 'calleFalsa123'):
			console.log("Usuario incorrecto!");
			break;
		case (user !== 'admin') && (password !== 'calleFalsa123'):
			console.log("Usuario y Contraseña incorrectas!");
			break;
		default:
			console.log("No detectó ningun usuario");
			break;
	}
}

console.log(identificacion('admin', 'calleFalsa123'));