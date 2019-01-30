import React , {Component} from 'react';
import {Router, navigate} from '@reach/router';
import * as firebase from 'firebase';
import 'firebase/firestore';
// import firebase from './Firebase'

import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login'
import Register from './Register'
import Questions from './Questions'
import Board from './Board'



class App extends Component {

	constructor() {
		super();
		this.state = {
			user: "",
			email: "",
			displayName: null,
			userID: null

		}
	}

	componentDidMount() {
		// const db = firebase.firestore()
		// // var name
		// // var email
	 //    db.collection("users").where("name", "==", "Vincent Luo").get().then((snapshot) => {
		// 	snapshot.docs.forEach(doc => {
		// 		let user = doc.data().name
		// 		let email = doc.data().email
		// 		this.setState({ user: user, email: email  })
		// 	})
		// })
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					user: user,
					displayName: user.displayName,
					userID: user.uid
				})
			}
		})
	}

	registerUser = userName => {
		firebase.auth().onAuthStateChanged(user => {
			user.updateProfile({
				displayName: userName
			}).then(()=>{
				this.setState({
					user: user,
					displayName: user.displayName,
					userID: user.uid
				})
				navigate('./questions')
			})
		})
	}

	logOutUser = e => {
		e.preventDefault()
		this.setState({
			user: null,
			displayName: null,
			userID: null
		})
		firebase.auth().signOut().then(()=>{
			navigate('./login')
		})
	}


	addQuestion = questionName => {
		const db = firebase.firestore()
		db.collection("questions").doc(questionName).set({
			asker: this.state.displayName
		})
	}

	render() {
		return (
			<div>
				<Navigation user={this.state.user} logOutUser={this.logOutUser}/>
				{this.state.user && <Welcome userName={this.state.displayName} logOutUser={this.logOutUser}/>}
				<Router>
					<Home path="/" user={this.state.user}/>
					<Login path="/login" user={this.state.user}/>
					<Questions path="/questions" addQuestion={this.addQuestion}/>
					<Register path="/register" registerUser={this.registerUser}/>
				</Router>
			</div>
		)
	}
}

export default App;
