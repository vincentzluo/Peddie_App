import React, { Component } from 'react'


class QuestionsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: "",
			email: "",
			displayName: null,
			userID: this.props.user,
		}
	}

	render() {

		const user = this.props.user
		const {questions} = this.props;
		const myQuestions = questions.map(item => {
			return(
				<div id="post" onClick={() => {this.props.showComments(item)}} className="list-group-item d-flex" key={item.questionID}>
					
					<section className="pl-3 text-left align-slf-center">
							{item.questionName}
							<p>posted {this.props.timeSince(item.date)} ago by {item.askerName}</p>
					</section>

				</div>
				

			)
		})


		return <div>{myQuestions}</div>

	}




}


export default QuestionsList


