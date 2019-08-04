import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAxr7iN_mngkecm_04ay9-JXsJQefvGODA",
    authDomain: "tienda-virtual-geek.firebaseapp.com",
    databaseURL: "https://tienda-virtual-geek.firebaseio.com",
    projectId: "tienda-virtual-geek",
    storageBucket: "tienda-virtual-geek.appspot.com",
    messagingSenderId: "1074466645250",
    appId: "1:1074466645250:web:d7d7956c9c2d53c3"
};

const firebaseApp = firebase.initializeApp(config);


const db = firebaseApp.firestore();

const traerTodo = () => {

    return db.collection("products").get().then(querySnapshot => {

        querySnapshot.docs.map(doc => doc.data().title);

    }).catch(error => console.log(error))
}

const baseDatos = {

    traerSincro: () => {
        return db.collection('products').onSnapshot(querySnapshot => {
            const queryOutput = []
            querySnapshot.forEach(doc => {
                const { title, description, tipo } = doc.data();

                queryOutput.push({
                    key: doc.id,
                    doc, // DocumentSnapshot
                    title,
                    description,
                    tipo,
                });
            })

            // querySnapshot.forEach(doc => {
            //     queryOutput.push(doc.data().title)
            // })
            return queryOutput
        })
    }



}






// const db = conection.database();
// const productsRef = db.collection('products');
// console.log(productsRef.get()
//     .then(doc => {
//         if (!doc.exists) {
//             console.log('No such document!');
//         } else {
//             console.log('Document data:', doc.data());
//         }
//     })
//     .catch(err => {
//         console.log('Error getting document', err);
//     }));


export default firebase

// export default db;


