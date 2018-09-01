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

firebase
	.database()
	.ref()
	.set({
		name: 'J. Kohlman'
	});
