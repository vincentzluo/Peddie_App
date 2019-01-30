import app from 'firebase/app'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyD2ZC3HzFpXcNsf3HawK_XZ4oZXK8cklL0",
    authDomain: "peddie-answers.firebaseapp.com",
    databaseURL: "https://peddie-answers.firebaseio.com",
    projectId: "peddie-answers",
    storageBucket: "peddie-answers.appspot.com",
    messagingSenderId: "766735647470"
};

class Firebase {
	constructor(){
		app.initializeApp(config)
		this.auth = app.auth();
	}
	doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;