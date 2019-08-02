
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyBU-cLT5o3o8fz2NmfxWTAGyWnuThGotiU",
    authDomain: "crud-8b7ac.firebaseapp.com",
    databaseURL: "https://crud-8b7ac.firebaseio.com",
    projectId: "crud-8b7ac",
    storageBucket: "crud-8b7ac.appspot.com",
    messagingSenderId: "282053509887",
    appId: "1:282053509887:web:c9cc6a612980ceeb"
};

firebase.initializeApp(config);



firebase.firestore().settings(settings);

export default firebase;