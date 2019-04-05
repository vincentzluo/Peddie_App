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
// import * as admin from 'firebase-admin'


class App extends Component {

	constructor() {
		super();
		this.state = {
			user: "",
			email: "",
			displayName: null,
			userID: null,
		}
	}

	componentDidMount() {

		firebase.auth().onAuthStateChanged(FBUser => {
			if (FBUser) {
				this.setState({
					user: FBUser,
					displayName: FBUser.displayName,
					userID: FBUser.uid
				})
				const db = firebase.firestore()
				db.collection("questions").orderBy("date", "desc").onSnapshot((querySnapshot) => {
					let questionsList = []	
					querySnapshot.forEach(function(doc) {
						questionsList.push({
							question: doc.data,
							questionName: doc.id,
							date: doc.data().date
						})
					})
					
					this.setState({
					questions: questionsList,
					numQuestions: questionsList.length
					})

			})

			}
			else {
				this.setState({
					user: null
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
			askerID: this.state.user.uid,
			askerName: this.state.user.displayName,
			date: new Date().getTime()
		})
	}


	render() {
		return (
			<div>
				<Navigation user={this.state.user} logOutUser={this.logOutUser}/>
				<Router>
					<Home path="/" user={this.state.user}/>
					<Login path="/login" user={this.state.user}/>
					<Questions path="/questions" user={this.state.user} questions={this.state.questions} addQuestion={this.addQuestion} />
					<Register path="/register" registerUser={this.registerUser}/>
				</Router>
			</div>
		)
	}
}

export default App;