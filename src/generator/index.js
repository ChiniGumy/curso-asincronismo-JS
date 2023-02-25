function* gen() {
	yield 1;
	yield 2;
	yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterable(array) {
	for (let value of array) {
		yield value;
	}
}

const aaaaa = iterable(['dome', 'david', 'miguel', 'angel', 'paty']);
console.log(`\n\n\n\n${aaaaa.next().value}`);
console.log(`\n\n\n\n${aaaaa.next().value}`);
console.log(`\n\n\n\n${aaaaa.next().value}`);
console.log(`\n\n\n\n${aaaaa.next().value}`);
console.log(`\n\n\n\n${aaaaa.next().value}`);
console.log(`\n\n\n\n${aaaaa.next().value}`);