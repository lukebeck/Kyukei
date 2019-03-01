import React, { Component } from 'react'
import styled from 'styled-components'
import data from './lib/data.json'
import shuffle from './lib/shuffle'

const setTest = (data) => {
  let choices = shuffle(data).slice(0,4)
  let question = choices[0]
  let answers = shuffle(choices).map(choice => choice.answer)
  return {question: question, answers: answers}
}

const quiz = setTest(data)

const Main = styled.div`
  background: white;
  margin: 100px 300px;
  width: 300px;
  padding: 30px 0;
  text-align: center;
  border: solid 1px black;
  border-radius: 30px;
  box-shadow: 2px 2px rgb(50,50,50);
`;

const Char = styled.h1`
  font-size: 100px;
  margin: 3rem;
`;

const Button = styled.button`
  margin: 10px;
  border: none;
  border-bottom: black solid 2px;
  padding: 10px;
`;

class App extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReplaySubmit = this.handleReplaySubmit.bind(this)
    this.state = {
      test: quiz.question,
      answers: quiz.answers,
      response: "",
      flipped: false
    }
    console.log(`answer: ${this.state.test.answer}`)
  }

  handleSubmit(value){
    this.setState({answer: value, flipped: true})
  }

  handleReplaySubmit(e){
    let quiz = setTest(data)
    console.log(`answer: ${quiz.question.answer}`)
    this.setState({
      test: quiz.question,
      answers: quiz.answers,
      response: "",
      flipped: false
    })
  }

  render() {
    return (
      <Main>
        <Char>{this.state.test.question}</Char>
        <Options options={this.state.answers} onSubmit={this.handleSubmit}/>
        <Button onClick={this.handleReplaySubmit}>Reset</Button>        
      </Main>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(value){
    this.props.onSubmit(value)
  }

  render() {
    return (
      <div>
        {this.props.options.map(
          (option) => <Button 
            key={option} 
            onClick={() => this.handleSubmit(option)}>{
              option}
            </Button>
          )}
      </div>
    )
  }
}


export default App;
