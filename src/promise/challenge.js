import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// fetch() ya es una promesa

function fetchData(urlApi){
	return fetch(urlApi);
};

// fetchData(`${API}/products`)
// 	.then(response => response.json())
// 	.then(products => {
// 		console.log(products);
// 	})
// 	.then(() => console.log('ola'))
// 	.catch(error => console.log(error));


// Varios llamados, traer informacion de cada peticion

fetchData(`${API}/products`)

   // Mostrar todos los productos
	.then(response => response.json())				// Con esto ya tenemos los productos
	.then(products => {
		console.log(products)
		return fetchData(`${API}/products/${products[0].id}`)	// Con esto llamas a un producto en particular
	})


   // Mostrar el Title del producto que accedimos
	.then(response => response.json())
	.then(product => {
		console.log(product.title)
		return fetchData(`${API}/categories/${product.category.id}`)
	})


   // Llamado
	.then(response => response.json())
	.then(category => {
      console.log(category.name);
   })

   .catch(error => console.log(error))
   .finally(() => console.log('Como dijo Gushcmer, se acabo esta huevada (.finally)'))