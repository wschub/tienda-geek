import firebase from './Firebase';
import firestore from 'firebase/firestore';



const dataBase = {
    productsRef: firebase.firestore().collection('products'),

    historyRef: firebase.firestore().collection('history'),
    comprasRef: firebase.firestore().collection('compras'),
    traerTodo: () => {
        const consulta = this.productsRef.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    console.log('Document data:', doc.data());
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
        return consulta
    },
    enviarDemo(title, description) { }
    // traerTodo: () => {
    //     const peticion = this.productsRef.get().then(snapshot => {
    //         snapshot.forEach((doc) => {
    //             const data = [];
    //             const { title, description, foto, talla, color, tipo, destacados, novedades, promociones } = doc.data();
    //             data.push({
    //                 key: doc.id, doc,  // DocumentSnapshot
    //                 title, description, foto, talla, color, tipo, destacados, novedades, promociones
    //             });
    //             return data;
    //         });
    //     }).catch(err => {
    //         console.log('Error getting documents', err);
    //     });
    //     return peticion
    // },
    // traerTodo: (querySnapshot) => {
    //     return (querySnapshot) => {
    //         const data = [];
    //         querySnapshot.forEach((doc) => {
    //             const { title, description, foto, talla, color, tipo, destacados, novedades, promociones } = doc.data();
    //             data.push({
    //                 key: doc.id, doc,  // DocumentSnapshot
    //                 title, description, foto, talla, color, tipo, destacados, novedades, promociones
    //             });
    //         });
    //         return data;
    //     }
    // },

}

export default dataBase;




// const baseDatos = {
//     traerTodo: ref.get()
//         .then(snapshot => {
//             if (snapshot.empty) {
//                 console.log('No matching documents.');
//                 return;
//             } else {
//                 const data = [];
//                 snapshot.forEach(doc => {
//                     const { title, description, tipo } = doc.data();
//                     data.push({
//                         key: doc.id,
//                         doc, // DocumentSnapshot
//                         title,
//                         description,
//                         tipo,
//                     });
//                 })
//                 console.log(data);

//                 return data
//             }
//         })
//         .catch(err => {
//             console.log('Error getting documents', err);
//         }),
// }

// const traerTodo = ref.get()
//     .then(snapshot => {
//         if (snapshot.empty) {
//             console.log('No matching documents.');
//             return;
//         } else {




//             snapshot.forEach(doc => {
//                 const data = [];

//                 const { title, description, tipo } = doc.data();
//                 data.push({
//                     key: doc.id,
//                     doc, // DocumentSnapshot
//                     title,
//                     description,
//                     tipo,
//                 });
//                 console.log(data
//                 );

//                 return data
//             })

//         }




//     })

//     .catch(err => {
//         console.log('Error getting documents', err);
//     });
