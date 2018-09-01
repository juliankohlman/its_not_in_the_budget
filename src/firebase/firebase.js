import * as firebase from 'firebase';
// Initialize Firebase
const config = {
	apiKey: 'AIzaSyCV6YNROyjGEOy9bwbTpmU7iwkbIfgxZ98',
	authDomain: 'expenses-cac5e.firebaseapp.com',
	databaseURL: 'https://expenses-cac5e.firebaseio.com',
	projectId: 'expenses-cac5e',
	storageBucket: 'expenses-cac5e.appspot.com',
	messagingSenderId: '766054544742'
};

firebase.initializeApp(config);
const database = firebase.database();

database.ref().on('value', snapshot => {
	console.log(snapshot.val());
});

setTimeout(() => {
	database.ref('InterstellarCredits').set(2000);
}, 3500);

// database
// 	.ref('ship') // for specific data add inside ref() call
// 	.once('value')
// 	.then(data => {
// 		console.log(data.val());
// 	})
// 	.catch(error => {
// 		console.log('Oops', error);
// 	});

// database
// 	.ref()
// 	.set({
// 		name: 'Jango Fett',
// 		hobby: 'Horansi',
// 		dreamJob: 'Sith Lord',
// 		homeworld: 'Mandalore',
// 		InterstellarCredits: 1500,
// 		ship: {
// 			class: 'Patrol Craft',
// 			hyperDrive_Rating: 3.0
// 		}
// 	})
// 	.then(() => {
// 		console.log('Data saved');
// 	})
// 	.catch(e => {
// 		console.log('This failed', e);
// 	});

// database.ref().update({
// 	dreamJob: 'Smuggler',
// 	homeworld: 'Coruscant'
// });

// database.ref('location/city').set(null)

// database
// 	.ref('location/city')
// 	.remove()
// 	.then(() => {
// 		console.log('Remove succeeded.');
// 	})
// 	.catch(error => {
// 		console.log('Remove failed', error);
// 	});
