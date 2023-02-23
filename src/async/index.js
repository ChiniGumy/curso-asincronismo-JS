const funcionAsincrona = () => {
	return new Promise((resolve, reject) => {
		(true)
			? setTimeout(() => resolve('resuelto'), 2000)
			: reject(new Error('Error!'));
	}) 
}

const otraFuncion = async () => {
	const elPene = await funcionAsincrona();
	console.log(elPene);
	console.log('ASDASDASDASD');
}

console.log('Antes');
otraFuncion();
console.log('Despues');