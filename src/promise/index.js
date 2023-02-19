// Promise, algo que va a pasar, ahora, despuesito, mas tarde o nunca.

const promise = new Promise(function(resolve, reject) {
	resolve('correcto');
	reject('No');
});


// Cuantas vacas tenemos y podemos contarlas, y dependiendo del numero de vacas saber si podemos ordenar para llegar hasta cierto L, o si no podemos.

const cows = 9;

const countCows = new Promise(function(resolve, reject) {

	if (cows > 10) {
		resolve(`Tenemos ${cows} vacas en la granja!`);
	} else {
		reject('No tenemos vacas en la granja');
	}

})


// .then sirve para el resolve

countCows.then((result) => {
	console.log(result);

}).catch((error) => {
	// .catch sirve para agarrar los reject.
	console.log(error);

}).finally(() => console.log('Se ha terminado la funcion'))

// .finally sirve para dar a entender que la ejecucion de la promesa ha acabado