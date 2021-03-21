import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfBlPU821SyM8QDz32wYyU1XauSLzxGZs",
    authDomain: "getintobook-ea4ea.firebaseapp.com",
    projectId: "getintobook-ea4ea",
    storageBucket: "getintobook-ea4ea.appspot.com",
    messagingSenderId: "597781212080",
    appId: "1:597781212080:web:ffc524579c80bc5e218475",
    measurementId: "G-G2S6N4PQGB"
  });

  // const firebase = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth };