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

database
	.ref()
	.set({
		name: 'J. Kohlman',
		hobby: 'Daily Fantasy Sports',
		dreamJob: 'Cinematographer',
		location: {
			city: 'Westminster'
		}
	})
	.then(() => {
		console.log('Data saved');
	})
	.catch(e => {
		console.log('This failed', e);
	});

database.ref().update({
	name: 'Julian J. Kohlman',
	hobby: 'Reading',
	location: {
		city: 'Seattle'
	}
});

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
