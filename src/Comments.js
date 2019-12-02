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
			displayName: null,
			userID: this.props.userID,
			questionID: "",
			comment: ""
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
	    // prevent default form submission
	    e.preventDefault();
	    this.setState({comment: ''})
	    //...
	  }

	  render() {
	    return (
	      <div className="row justify-content-center">
	        <form className="form-group" onSubmit={this.handleSubmit}>
	          <div className="input-group">
	            <textarea
	              className="commentForm"
	              onChange={this.handleChange}
	              value={this.state.comment}
	              placeholder="Share Your Thoughts"
	              name="comment"

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