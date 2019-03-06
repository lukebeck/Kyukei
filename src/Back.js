import React, { Component } from "react";
import styled from "styled-components";
import Button from "./styles/Button";
import Container from "./styles/Container";

const Info = styled.div`
  width: 220px;
  text-align: left;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  p {
    margin: 0 0 2.5rem 0;
    font-style: italic;
  }
`;

class Back extends Component {
  handleSubmit = (handleSubmitEvent) => {
    this.props.onSubmit(handleSubmitEvent);
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
