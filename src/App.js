import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import db from './Firebase';
// import traerTodo from './Firebase';
import firebase from './Firebase';







class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('pruebas');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };

  }


  onCollectionUpdate = (querySnapshot) => {

    const boards = [];
    const keys = []
    querySnapshot.forEach((doc) => {
      const {
        title, description, foto,
        talla, color, tipo,
        destacados, novedades, promociones, precio
      } = doc.data();
      keys.push(doc.id)
      boards.push({
        key: doc.id,
        // doc, // DocumentSnapshot
        title, description,
        foto, talla, color,
        tipo, destacados,
        novedades, promociones, precio
      });

    });
    this.setState({
      boards
    });




    const sendPrecios = () => {

      const resto = this.state.boards;

      keys.map((key, i) => {
        const { title, description, foto, talla, color, tipo, destacados, novedades, promociones } = resto[i]
        const precio = Math.floor(Math.random() * 300) + 90;
        const updateRef = firebase.firestore().collection('pruebas').doc(key);
        updateRef.set({
          title, description, foto, talla, color, tipo, destacados, novedades, promociones, precio
        })
      })
    }
    const download = () => {
      const textToSave = JSON.stringify(this.state.boards);
      const hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'boardssss.json';
      hiddenElement.click();
      console.log(this.state.boards);
    }



  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);




    // // const promise = traerTodo();
    // // this.setState({
    // //   boards: promise
    // // })
    // // console.log(this.state.boards);
    // // console.log(promise);
    // db.collection("users")
    //   .get()
    //   .then(querySnapshot => {
    //     let data = querySnapshot.docs.map(doc => doc.data());

    //     console.log(data);
    //     this.setState({ boards: data });
    //   });

  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              BOARD LIST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>

                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.tipo}</td>
                  </tr>
                )}

              </tbody>
            </table>
            {/* <p>{this.state.boards}</p> */
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
