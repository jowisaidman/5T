import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyA8vNmJiLqHHBH7S-wLxIf81NvvN1umR2o",
    authDomain: "tenedores-f74fb.firebaseapp.com",
    databaseURL: "https://tenedores-f74fb.firebaseio.com",
    projectId: "tenedores-f74fb",
    storageBucket: "tenedores-f74fb.appspot.com",
    messagingSenderId: "366376161194",
    appId: "1:366376161194:web:1429ee85ee9bf9d76a65d3"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);