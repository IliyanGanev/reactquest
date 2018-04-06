import React, { Component } from 'react';
import './Poll.css';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {

      selectedOption: '',
      isSelected: false,
      id: 1,

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleOptionChange(changeEvent) {
    changeEvent.preventDefault();
    this.setState({
      selectedOption: changeEvent.target.value,
      isSelected: true,
      id: changeEvent.target.id
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      selectedOption: '',
      isSelected: false
    });   
  }


  render() {

    const isSelected = this.state.isSelected;

    const questions = this.state.questions.map((question) =>
      <li key={question.id}>
      <h3>{question.text}</h3>  
      </li>
      );

    const index = Math.floor(Math.random() * questions.length)
    const randomQuestion = questions[index];


    const question = this.state.questions.find((question) =>
     question.id === index+1
     );

    const answers = question.answers

    const currentQuestion = this.state.questions.find((question) =>
      question.id === Number(this.state.id)
    );
    const currentAnswers = currentQuestion.answers

    const currentResponses = currentAnswers.map((a) =>
      <li key={a.id}>
      <h2>{a.text}: {a.responses} responses</h2> 
      </li>
    );


    const details = isSelected ? (
      <div>
        <h4>You selected: <span className={(this.state.selectedOption).toLowerCase()}>{this.state.selectedOption}</span></h4>
        <ul>{currentResponses}</ul>
      </div>
    ) : (<p>Choose your {question.text} !</p>);



    return (
      <div className="Poll">
        <div className="Poll-header">
          <h2 className="helloworld">Hello {this.props.name}</h2>
          {details}
        </div>
        
        <ul>{randomQuestion}</ul>

        <form onSubmit={this.handleSubmit}>
          <div className="radio">
            <label>
              <input type="radio" value={answers[0].text}
                id={question.id}
                checked={this.state.selectedOption === answers[0].text}
                onChange={this.handleOptionChange}  /><span>{answers[0].text}</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value={answers[1].text}  
                id={question.id}     
                checked={this.state.selectedOption === answers[1].text}
                onChange={this.handleOptionChange}  /><span>{answers[1].text}</span>
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value={answers[2].text}  
                id={question.id}       
                checked={this.state.selectedOption === answers[2].text}
                onChange={this.handleOptionChange}  /><span>{answers[2].text}</span>
            </label>
          </div>
          <button type="submit">Clear selection</button>
        </form>    
      </div>
    );
  }
}

export default Poll;
