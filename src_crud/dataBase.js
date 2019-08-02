import firebase from './Firebase';

const dataBase = {
    productsRef: firebase.firestore().collection('products'),
    historyRef: firebase.firestore().collection('history'),
    comprasRef: firebase.firestore().collection('compras'),



    hola: "ola"
}

export default dataBase;