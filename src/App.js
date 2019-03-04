// module imports
import React, { Component } from "react";
// lib imports
import data from "./lib/testdata.json";
import shuffle from "./lib/shuffle";
// component imports
import Back from "./Back";
import Front from "./Front";
// styled-component imports
import Card from "./styles/Card";
import Character from "./styles/Character";
import Hana from "./styles/Hana";
import Theme from "./styles/Theme";

const setTest = data => {
  let selection = shuffle(data).slice(0, 4);
  let question = selection[0];
  let choices = shuffle(selection).map(item => item.answer);
  return { question: question, choices: choices };
};

const quiz = setTest(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      test: quiz.question,
      choices: quiz.choices,
      flipped: false
    };
  }

  handleSubmit(value) {
    this.setState({ flipped: true });
  }

  handleReset(e) {
    let quiz = setTest(data);
    this.setState({
      test: quiz.question,
      choices: quiz.choices,
      flipped: false
    });
  }

  render() {
    const flipped = this.state.flipped;
    return (
      <Theme>
        <Card>
          {flipped && <Hana label="white-flower" value="💮" />}
          <Character>{this.state.test.question}</Character>
          {!flipped ? (
            <Front
              choices={this.state.choices}
              answer={this.state.test.answer}
              onSubmit={this.handleSubmit}
            />
          ) : (
            <Back answer={this.state.test.answer} onSubmit={this.handleReset} />
          )}
        </Card>
      </Theme>
    );
  }
}

export default App;
