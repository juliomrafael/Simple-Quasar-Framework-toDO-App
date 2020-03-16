// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/hosting'

const firebaseConfig = {
  apiKey: 'AIzaSyBRnLrLjri6dBlBEHVkOTGcAZOGGylpfMo',
  authDomain: 'todo-ccff2.firebaseapp.com',
  databaseURL: 'https://todo-ccff2.firebaseio.com',
  projectId: 'todo-ccff2',
  storageBucket: 'todo-ccff2.appspot.com',
  messagingSenderId: '1011038242764',
  appId: '1:1011038242764:web:dd3affd5f1ad6494d1ff69'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
