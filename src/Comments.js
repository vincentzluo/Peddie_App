import React, { Component } from 'react'
import {Link} from '@reach/router'
import './Comments.css'
// import CommentList from './CommentsList'

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
			email: "",
			commentInput: ""
		}

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

	  handleChange(e) {
			const itemName = e.target.name
			const itemValue = e.target.value
			this.setState({[itemName]: itemValue})
		}

	 
	  handleSubmit(e) {
	    e.preventDefault();
	    this.setState({commentInput: ''})
	  }

	  render() {
	    return (
	      <div className="row justify-content-center">
	      	<div className="pl-3 text-left align-slf-center">
							{this.props.question.questionName}
							<p>posted {this.props.timeSince(this.props.question.date)} ago by {this.props.question.askerName}</p>
			</div>
	        <form className="form-group" onSubmit={this.handleSubmit}>
	          <div className="input-group">
	            <textarea
	              className="commentForm"
	              onChange={this.handleChange}
	              value={this.state.commentInput}
	              placeholder="Share Your Thoughts"
	              name="commentInput"
	            />
	          </div>

	          <div className="form-group">
	            <button className="commentButton btn-primary">
	              Comment ➤
	            </button>
	          </div>
	        </form>
	      </div>
	    );
	  }
	}
	
	export default Comments;