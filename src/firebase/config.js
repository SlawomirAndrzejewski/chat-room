import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDzDLdHH4fTvZv4fKxuhRxG40ECRt3DOyw",
    authDomain: "chat-room-165f1.firebaseapp.com",
    projectId: "chat-room-165f1",
    storageBucket: "chat-room-165f1.appspot.com",
    messagingSenderId: "89235164020",
    appId: "1:89235164020:web:c6d97d858b70f81336ba21",
    measurementId: "G-7H7MG7DPZS"
};

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, timestamp }