import React, { Component } from 'react';
import './Poll.css';

class Poll extends Component {

  constructor(props) {
    super(props);
    this.state = {

      selectedOption: '',

      questions:[{
        "id": 1,
        "text": "Favorite color",
        "answers": [{
          "id": 1,
          "text": "Red",
          "responses": 10
        }, {
          "id": 2,
          "text": "Green",
          "responses": 20
        }, {
          "id": 3,
          "text": "Blue",
          "responses": 5
        }]
      },{
        "id": 2,
        "text": "Favorite animal",
        "answers": [{
          "id": 1,
          "text": "Dog",
          "responses": 150
        }, {
          "id": 2,
          "text": "Cat",
          "responses": 100
        }, {
          "id": 3,
          "text": "Bird",
          "responses": 17
        }]
      }
      ]
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }



  handleOptionChange(changeEvent) {
    console.log(changeEvent.target.value, this)
    var result=changeEvent.target.value
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }



  render() {

    var questions = this.state.questions.map((question) =>

      <li key={question.id}>
      <h3>{question.text}</h3>  
      </li>
      );

    var index = Math.floor(Math.random() * questions.length)
    var randomQuestion = questions[index];

    var question = this.state.questions.find((question) =>
     question.id === index+1
     );


    var answers = question.answers
    var responses = answers.map((a) =>
      <li key={a.id}>
      <h3>{a.text}</h3>  
      </li>
    );


    return (
      <div className="Poll">
      <div className="Poll-header">
        <h2>World</h2>

        <ul>{randomQuestion}</ul>
        <p>{console.log(answers[0].text)}</p>

      </div>

        <ul>{responses}</ul>



      <form>
        <div className="radio">
          <label>
            <input type="radio" value={answers[0].text}
            checked={this.state.selectedOption === answers[0].text}
            onChange={this.handleOptionChange}  /><span>{answers[0].text}</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={answers[1].text}
            checked={this.state.selectedOption === answers[1].text}
            onChange={this.handleOptionChange}  /><span>{answers[1].text}</span>
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value={answers[2].text}
            checked={this.state.selectedOption === answers[2].text}
            onChange={this.handleOptionChange}  /><span>{answers[2].text}</span>
          </label>
        </div>
      </form>    


      </div>
    );
  }
}

export default Poll;
