// module imports
import React, { Component } from "react";
// lib imports
import data from "./lib/testdata.json";
import shuffle from "./lib/shuffle";
// component imports
import Back from "./Back";
import Front from "./Front";
import Settings from "./Settings";
// styled-component imports
import Card from "./styles/Card";
import Character from "./styles/Character";
import Hana from "./styles/Hana";
import Theme from "./styles/Theme";

const all = Object.keys(data);
const settings = all;

class App extends Component {
  constructor(props) {
    console.log("constructor")
    super(props);
    this.state = {
      data: data,
      settings: settings,
      flipped: false,
      test: {},
      choices: []
    };
    console.log("state set")
  }

  componentWillMount(){
    console.log("componentWillMount")
    this.setQuiz();
  }

  setQuiz = () => {
    console.log("setQuiz")
    const settings = this.state.settings
    const data = this.state.data
    const filteredData = this.filterData(settings,data)
    const quiz = this.generateQuiz(filteredData)
    this.setState({
      test: quiz.question,
      choices: quiz.choices
    })
  }

  generateQuiz = (data) => {
    console.log("generateData")
    let selection = shuffle(data).slice(0, 4);
    let question = selection[0];
    let choices = shuffle(selection).map(item => item.answer);
    return { question: question, choices: choices };
  }

  filterData = (settings, data) => {
    console.log("filterData")
    return settings.reduce(
        (options, option) => [...options, ...data[option]],
        []
      );
  };

  handleSubmit = (handleSubmitEvent) => {
    console.log("handleSubmit")
    this.setState({ flipped: true})
  }

  handleReset = (handleResetEvent) => {
    console.log("handleReset")
    this.setQuiz();
    this.setState({
      flipped: false
    })
  }

  handleSetting = (handleSettingEvent) => {
    this.setState({settings: handleSettingEvent})
    console.log(handleSettingEvent);
  }

  render() {
    console.log("render")
    const flipped = this.state.flipped;
    return (
      <Theme>
        <Settings onSubmit={this.handleSetting}/>
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
