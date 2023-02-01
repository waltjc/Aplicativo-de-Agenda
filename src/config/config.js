
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKPkORPGu4nAhK9kQjHriIJI9r81kMN1s",
  authDomain: "pdm-reactnative-b7c7b.firebaseapp.com",
  projectId: "pdm-reactnative-b7c7b",
  storageBucket: "pdm-reactnative-b7c7b.appspot.com",
  messagingSenderId: "185077418646",
  appId: "1:185077418646:web:2a4d776aba950b89fe10b7",
  measurementId: "G-RYKWSK73PP"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };