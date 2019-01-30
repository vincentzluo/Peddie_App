import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

 const config = {
    apiKey: "AIzaSyD2ZC3HzFpXcNsf3HawK_XZ4oZXK8cklL0",
    authDomain: "peddie-answers.firebaseapp.com",
    databaseURL: "https://peddie-answers.firebaseio.com",
    projectId: "peddie-answers",
    storageBucket: "peddie-answers.appspot.com",
    messagingSenderId: "766735647470"
  };

  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;