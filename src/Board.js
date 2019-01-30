import React, { Component } from 'react'
import Feed from './Feed'
import Question from './Question'
import Answer from './Answer'
import DisplayQuestions from './DisplayQuestions'

export default class Board extends React.Component{
	constructor(props){
		super(props)
		this.state={
			name: "Winston Yang",
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
		return (
			<div>
        <h2> Feed for: {this.state.name} </h2>
        <Feed addNew={this.addQuestion} />
        <DisplayQuestions list={this.state.questions} />
      </div>
		)
	}
}
