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
import Comments from './Comments'
// import * as admin from 'firebase-admin'


class App extends Component {

	constructor() {
		super();
		this.state = {
			user: "",
			email: "",
			displayName: null,
			userID: null,
			questionID: "",
			questions: [],
			question: ""
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
							questionName: doc.data().questionName,
							askerName: doc.data().askerName,
							questionID: doc.id,		
							date: doc.data().date
						})
					})
					
					this.setState({
					questions: questionsList,
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
		let questionID = Date.now().toString(36) + Math.random().toString(36).substr(2, 5).toUpperCase();
		db.collection("questions").doc(questionID).set({
			questionName: questionName,
			askerID: this.state.user.uid,
			askerName: this.state.user.displayName,
			date: new Date().getTime()
		})
	}

	timeSince(date) {

	  var seconds = Math.floor((new Date() - date) / 1000);

	  var interval = Math.floor(seconds / 31536000);

	  if (interval > 1) {
	    return interval + " years";
	  }
	  interval = Math.floor(seconds / 2592000);
	  if (interval > 1) {
	    return interval + " months";
	  }
	  interval = Math.floor(seconds / 86400);
	  if (interval > 1) {
	    return interval + " days";
	  }
	  interval = Math.floor(seconds / 3600);
	  if (interval > 1) {
	    return interval + " hours";
	  }
	  interval = Math.floor(seconds / 60);
	  if (interval > 1) {
	    return interval + " minutes";
	  }
	  return Math.floor(seconds) + " seconds";
	}

	showComments = question => {
		this.setState({
			question: question,
			questionID: question.questionID
		}) 
		navigate('./comments/'+this.state.questionID)
	}


	render() {
		return (
			<div>
				<Navigation user={this.state.user} logOutUser={this.logOutUser}/>
				<Router>
					<Home path="/" user={this.state.user}/>
					<Login path="/login" user={this.state.user}/>
					<Questions path="/questions" timeSince={this.timeSince} user={this.state.user} questions={this.state.questions} addQuestion={this.addQuestion} showComments={this.showComments}/>
					<Register path="/register" registerUser={this.registerUser}/>
					<Comments path="/comments/:this.state.questionID" timeSince={this.timeSince} question={this.state.question} user={this.state.user}/>
				</Router>
			</div>
		)
	}
}

export default App;