import * as firebase from 'firebase';

import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB5n5TSX4xfXzDIwyJYrBHRoB6fCftsfsc',
  authDomain: 'elearning-825d0.firebaseapp.com',
  databaseURL: 'https://elearning-825d0.firebaseio.com',
  projectId: 'elearning-825d0',
  storageBucket: 'elearning-825d0.appspot.com',
  messagingSenderId: '591360525407',
  appId: '1:591360525407:web:23f1e5057997bb2b2647ea',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
