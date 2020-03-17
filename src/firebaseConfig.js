import firebase from "firebase/app";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyBzcdFqH6FOtGZ6L9TXzs98ROG9hx42v80",
    authDomain: "nhan-cv.firebaseapp.com",
    databaseURL: "https://nhan-cv.firebaseio.com",
    projectId: "nhan-cv",
    storageBucket: "nhan-cv.appspot.com",
    messagingSenderId: "254158020697",
    appId: "1:254158020697:web:d841552e64d96da3af5148"
};
firebase.initializeApp(firebaseConfig);

// firebase utils
const firestore = firebase.firestore();

export { firestore };