
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyAxr7iN_mngkecm_04ay9-JXsJQefvGODA",
    authDomain: "tienda-virtual-geek.firebaseapp.com",
    databaseURL: "https://tienda-virtual-geek.firebaseio.com",
    projectId: "tienda-virtual-geek",
    storageBucket: "tienda-virtual-geek.appspot.com",
    messagingSenderId: "1074466645250",
    appId: "1:1074466645250:web:d7d7956c9c2d53c3"
};

firebase.initializeApp(config);



firebase.firestore().settings(settings);

export default firebase;