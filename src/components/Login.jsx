import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'



class Login extends Component {

    state = {
        isSignedIn: false,
        userData: { name:"oe" }
    }
    uiConfig = {
        signInFlow: 'pop-up',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
    }

    logged(user){

        if (user != null){
            this.setState({
                name : firebase.auth().currentUser.displayName,
                email : user.email,
                photoUrl :user.photoURL,
                emailVerified : user.emailVerified,
                uid : user.uid,
            })
            console.log(user);

        }
    }

    componentDidMount() {
        
        firebase.auth().onAuthStateChanged(user => {

            this.setState({ isSignedIn: !!user });
            this.logged(user)
        })

    }

    render() {


        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-8 text-center">


                                <h1 className="">//hola</h1>


                            {this.state.isSignedIn ?
                                (
                                <>
                                {console.log("render", this.state.userData)}
                                <img  src={firebase.auth().currentUser.photoURL} alt="profil pic"/>

                                <h3>Hola, {firebase.auth().currentUser.displayName}!</h3>
                                <p> email: {firebase.auth().currentUser.email}</p>
                                <p>{firebase.auth().currentUser.uid}</p>
                                <span>

                                <button  className="btn btn-danger mr-4" onClick={ () => firebase.auth().signOut()} >
                                    sign Out!
                                </button>
                                    <Link to="/app">
                                        <button className="btn btn-success">
                                         home
                                        </button>
                                    </Link>
                                </span>
                                    </>)
                                :
                                (<StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />)}



                        </div>
                      
                    </div>
                </div>
            </>

        );
    }
}

export default Login;