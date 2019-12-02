import React, { Component } from 'react'
import QuestionsList from './QuestionsList'
import * as firebase from 'firebase';
import 'firebase/firestore';
	
class Questions extends Component {

	constructor(props) {
		super(props)
		this.state = {
			questionID: '',
			questionName: '',
			user:'',
			date:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		const itemName = e.target.name
		const itemValue = e.target.value
		this.setState({[itemName]: itemValue})																																									
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.addQuestion(this.state.questionName)
		this.setState({questionName: ''})
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



	render() {

		return(
			<div className="container mt-4">
			  <div className="row justify-content-center">
			    <div className="col-md-8 text-center">
			      <h1 className="font-weight-light">Ask a Question</h1>
			      <div className="card bg-light">
			        <div className="card-body text-center">
			          <form className="formgroup" onSubmit={this.handleSubmit}>
			            <div className="input-group input-group-lg">
			              <input
			                type="text"
			                className="form-control"
			                name="questionName"
			                placeholder="Question name"
			                aria-describedby="buttonAdd"
			                value={this.state.questionName}
			                onChange={this.handleChange}
			              />
			              <div className="input-group-append">
			                <button
			                  type="submit"
			                  className="btn btn-sm btn-info"
			                  id="buttonAdd"
			                >
			                  +
			                </button>
			              </div>
			            </div>
			          </form>
			        </div>
			      </div>
			     </div>
			     <div className="col-11 col-md-6 text-center">
			      	<div className="card border-top-0 rounded-0">
				      {this.props.questions && this.props.questions.length ? (
				      	<div className="card-body py-2">
				      		<h4 className="card-title font-weight-light m-0">
				      			Question Feed
				      		</h4>
				      	</div>
				      ) : null}

				      {this.props.questions && (
				      	<div className="list-group list-group-flush">
				      		<QuestionsList timeSince={this.timeSince} getDate={this.getDate} user={this.state.userID} questions={this.props.questions} showComments={this.props.showComments}/>
				      	</div>

				      )}

				    </div>
			    </div>
			  </div>
			</div>
		);
	}
}

export default Questions;