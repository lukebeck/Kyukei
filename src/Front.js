import React, { Component } from "react";
import Button from "./styles/Button";
import Container from "./styles/Container";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: ""
    };
  }

  handleClick = (handleClickEvent) => {
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
  handleSubmit = (handleSubmitEvent) => {
    this.props.onSubmit(handleSubmitEvent);
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
