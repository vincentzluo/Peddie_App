import React, { Component } from 'react'
import Feed from './Feed'
import Question from './Question'
import Answer from './Answer'
import DisplayQuestions from './DisplayQuestions'
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Board extends React.Component{
	constructor(props){
		super(props)
		this.state={
			questions: ["test1", "test2", "test3"],
		}
		this.addQuestion = this.addQuestion.bind(this)
	}

	addQuestion(question){
		this.setState((state) => ({
      questions: state.questions.concat([question])
    }))
	}

	render() {
		const db = firebase.firestore()
		return (
			<div>
        <DisplayQuestions list={this.state.questions} />
      </div>
		)
	}
}
