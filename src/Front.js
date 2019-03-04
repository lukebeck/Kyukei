import React, { Component } from "react";
import Button from "./styles/Button";
import Container from "./styles/Container";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      class: ""
    };
  }

  handleClick(value) {
    this.props.answer === this.props.value
      ? this.props.onClick()
      : this.setState({ class: "incorrect" });
  }

  render() {
    return (
      <Button onClick={this.handleClick} className={this.state.class}>
        {this.props.children}
      </Button>
    );
  }
}

class Front extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    this.props.onSubmit(value);
  }

  render() {
    return (
      <Container>
        {this.props.choices.map(choice => (
          <Choice
            key={choice}
            value={choice}
            answer={this.props.answer}
            onClick={() => this.handleSubmit(choice)}
          >
            {choice}
          </Choice>
        ))}
      </Container>
    );
  }
}

export default Front;
