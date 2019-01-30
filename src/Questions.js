import React, { Component } from 'react'
import Board from './Board'

class Questions extends Component {

	constructor(props) {
		super(props)
		this.state = {
			questionName: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		const itemName = e.target.name
		const itemValue = e.target.value
		this.setState({[itemName]: itemValue}, () => {
			if (this.state.passOne != this.state.passTwo) {
				this.setState({ errorMessage: "Passwords do not match"})
			}
			else {
				this.setState({ errorMessage: null})
			}
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.addQuestion(this.state.questionName)
		this.setState({questionName: ''})
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
						<Board board/>
			    </div>
			  </div>
			</div>
		);
	}
}

export default Questions;
