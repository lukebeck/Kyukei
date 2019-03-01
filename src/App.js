import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import data from './lib/data.json';
import shuffle from './lib/shuffle';
import Options from './Options';
import Results from './Results';

const setTest = (data) => {
  let choices = shuffle(data).slice(0, 4)
  let question = choices[0]
  let answers = shuffle(choices).map(choice => choice.answer)
  return { question: question, answers: answers }
};

const quiz = setTest(data);

const theme = {
  bg: "#fff",
  fg: "rgb(10,10,10)",
  main: "pink"
};

// const invertTheme = ({ fg, bg }) => ({
//   fg: bg,
//   bg: fg,
//   main: "pink"
// });

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background: ${props => props.theme.main};
};

h1 {
  font-size: 100px;
  margin: 3rem;
}
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Card = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  flex: none;
  height: 350px;
  width: 300px;
  margin-top: 100px;
  padding: 30px 0;
  border: solid 1px ${props => props.theme.fg};
  border-radius: 30px;
  box-shadow: 3px 3px 3px rgb(30,30,30);
  text-align: center;
`;

const Hana = styled.div`
  position: absolute;
  font-size: 60px;
  margin: 0 30px;
  transform: rotate(330deg);
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReplaySubmit = this.handleReplaySubmit.bind(this)
    this.state = {
      test: quiz.question,
      answers: quiz.answers,
      response: "",
      flipped: false
    }
  }

  handleSubmit(value) {
    this.setState({ answer: value, flipped: true })
  }

  handleReplaySubmit(e) {
    let quiz = setTest(data)
    this.setState({
      test: quiz.question,
      answers: quiz.answers,
      response: "",
      flipped: false
    })
  }

  render() {
    const flipped = this.state.flipped
    return (
      <Main>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />
            {!flipped
              ? <ThemeProvider theme={theme}>
                {/* theme={invertTheme} */}
                <Card>
                  <h1>{this.state.test.question}</h1>
                  <Options options={this.state.answers} onSubmit={this.handleSubmit} />
                </Card>
              </ThemeProvider>
              : <Card>
                {(this.state.answer === this.state.test.answer) && <Hana><span role="img" aria-label="white-flower">💮</span></Hana>}
                <h1>{this.state.test.question}</h1>
                <Results answer={this.state.test.answer} results={this.state.answer} onSubmit={this.handleReplaySubmit} />
              </Card>
            }
          </Fragment>
        </ThemeProvider>
      </Main>
    );
  }
};

export default App;
