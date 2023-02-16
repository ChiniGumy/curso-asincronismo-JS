function suma(num1, num2) {
	return num1 + num2;
}

// Va a recibir como argumento una funcion, esto hara que se muestre el resultado y los dos numeros.

function calc(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calc(2, 2, suma));

// ========================================================================================

setTimeout(function () {
	console.log('Ola Mundo');
}, 2000);

function greetig(name) {
	console.log(`Ola ${name}`)
}

setTimeout(greetig, 3500, 'David');