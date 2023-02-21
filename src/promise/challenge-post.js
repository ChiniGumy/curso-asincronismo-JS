import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {

	const response = fetch(urlAPI, {
		method: 'POST',
		mode: 'cors',
		credential: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return response

}

const data = {
	'title': '212',
	'price': 212,
	'description': 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
	'categoryId': 1,
	'images': [
		'https://placeimg.com/640/480/any'
	]
}

postData(`${API}/products`, data)
	.then(response => response.json())
	.then(data => console.log(data))