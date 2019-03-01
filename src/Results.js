import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './styles/Button';
import Container from './styles/Container'

const Info = styled.table`
  width: 220px;
  text-align: left;
  margin-top: 0;
  font-size: 22px;
  tr {
      margin: 0;
      padding: 0;
      td {
          margin-top: 5px;
          padding: 5px 0;
      }
      .centred {
          text-align: center;
          text-decoration: none;
          font-style: italic;
      }
  }
`;

export default class Results extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(value) {
        this.props.onSubmit(value)
    }


    render() {
        return (
            <Container>
                <Info>
                    <tr>
                        <td>
                            <b>
                                Your answer:
        
                            </b>
                        </td>
                        <td className="centred">
                            {this.props.results}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>
                                Correct answer:
                            </b>
                        </td>
                        <td className="centred">
                            {this.props.answer}
                        </td>
                    </tr>
                </Info>
                <Button onClick={this.handleSubmit}>Go again</Button>
            </Container>
        )
    }
};
