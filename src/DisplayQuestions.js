import React from 'react'

export default class DisplayQuestions extends React.Component
{
  render() {
    var today = new Date();
    var hours = today.getHours();
    var currentTime;
    if (hours > 12)
    {
      hours %= 12;
      if (today.getMinutes() < 10)
      {
        currentTime = hours + ':0' + today.getMinutes() + " PM"
      } else {
        currentTime = hours + ':' + today.getMinutes() + " PM"
      }
    } else {
      if (today.getMinutes() < 10)
      {
        currentTime = hours + ':0' + today.getMinutes() + " AM"
      } else {
        currentTime = hours + ':' + today.getMinutes() + " AM"
      }
    }
    var currentDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear()
      return (
        <div>
          <h3> Questions </h3>
            {this.props.list.map((question) => {
              return <li> {question} </li>
            })}
         </div>
      )
    }
}
