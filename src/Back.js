import React, { Component } from "react";
import styled from "styled-components";
import Button from "./styles/Button";
import Container from "./styles/Container";

const Info = styled.div`
  width: 220px;
  text-align: left;
  margin-top: 0;
  font-size: 50px;
  display: flex;
  justify-content: center;
  p {
    margin: 0;
    font-style: italic;
    font-weight: 400;
  }
`;

class Back extends Component {
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
        <Info>
          <p>{this.props.answer}</p>
        </Info>
        <Button onClick={this.handleSubmit}>Go again</Button>
      </Container>
    );
  }
}

export default Back;
