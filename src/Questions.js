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

	componentDidMount() {
		document.getElementById("buttonAdd").disabled = true;
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

	buttonEnabler() {
		if (document.getElementById("questionInput").value === "") {
			document.getElementById("buttonAdd").disabled = true;
		} else {
			document.getElementById("buttonAdd").disabled = false;
		}
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
			                id="questionInput"
			                onKeyUp={this.buttonEnabler}
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
				      		<QuestionsList timeSince={this.props.timeSince} getDate={this.getDate} user={this.state.userID} questions={this.props.questions} showComments={this.props.showComments}/>
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