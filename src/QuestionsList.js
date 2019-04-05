import React, { Component } from 'react'
import {Link} from '@reach/router'

class QuestionsList extends Component {

	render() {

		const user = this.props.user
		const {questions} = this.props;
		const myQuestions = questions.map(item => {
			return(
				<div className="list-group-item d-flex" key={item.questionID}>
					<section className="pl-3 text-left align-self-center">
						{item.questionName}
						<p>posted {this.props.timeSince(item.date)} ago by {user.displayName}</p>
					</section>
					
				</div>
			)
		})
		// console.log(getTime("hello"))
		return <div>{myQuestions}</div>

	}


}
export default QuestionsList
