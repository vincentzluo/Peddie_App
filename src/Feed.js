import React, { Component } from 'react'
import Question from './Question'
import Answer from './Answer'

export default class Feed extends React.Component
{
  constructor(props)
  {
    super(props)
    var today = new Date();
    this.state =
    {
        newQuestion: "",
        allQuestions: [],
        date: "1/1/2019",
        time: "12:00"
    }
    //  this.getQuestions = this.getQuestions.bind(this) // dump all questions in the Feed
    // ^ probably for debugging
    this.handleAddNew = this.handleAddNew.bind(this) // add questions
    this.updateNewQuestion = this.updateNewQuestion.bind(this) // update question already existing in the Feed
  }

  handleAddNew()
  {
    this.props.addNew(this.state.newQuestion)
    var today = new Date();
    var hours = today.getHours();
    var currentTime;
    if (hours > 12)
    {
      hours %= 12;
      currentTime = hours + ':' + today.getMinutes() + ":" + today.getSeconds() + " PM"
    } else {
      currentTime = hours + ':' + today.getMinutes() + ":" + today.getSeconds() + " AM"
    }
    var currentDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear()
    this.setState({
      newQuestion: "",
      time: currentTime,
      date: currentDate
    })
  }

  updateNewQuestion(text)
  {
    this.setState
    (
      {
        newQuestion: text.target.value,
      }
    )
  }

  render ()
  {
    return (
      <div>
        <input
          type = "text"
          value = {this.state.newQuestion}
          onChange = {this.updateNewQuestion}
        />
        <button onClick = {this.handleAddNew}> Enter a Question </button>
      </div>);
  }
}
