const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is my resolved data');
	}, 2000);
});
console.log('resolving data....');

promise.then(data => {
	console.log(data);
});
console.log('data resolved....');
