const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let n = 5;
		n <= 2
			? resolve('This is my resolved data')
			: reject('Error: Opps something went wrong');
	}, 2000);
});
console.log('resolving data....');

promise.then(
	data => {
		console.log('1', data);
		console.log('data resolved....');
	}, // without .catch() example
	error => {
		console.log('error:', error);
	}
);

promise
	.then(data => {
		console.log('2', data);
		console.log('data resolved....');
	})
	.catch(error => {
		console.log('error:', error);
	});
