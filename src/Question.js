import React, { Component } from 'react'
import Answer from './Answer'
import Time from 'react-time'
// Question has to contains name of the question, timestamp, # of up/downvotes, # of answers
// Click on the question to reveal all the answers with their votes and timestamps and stuff
export default class Question extends React.Component
{
  constructor(props)
  {
      super (props)
      this.state =
      {
        text: "",
        numAnswers: 0,
        numVotes: 0,
      }
  }

  render ()
  {
    return (
      <div>
         {this.props.time}
         <div> </div>
         {this.props.date}
         <div> </div>
         {this.props.text}
         <div> </div>
      </div>
    );
  }
}

Question.defaultProps = {
  numVotes: 0,
  numAnswers: 0
};
