import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Button = styled.button`
  border: none;
  border-bottom: black solid 3px;
  padding: 10px;
  margin: 10px;
  width: 120px;
  flex: none;
  display: flex;
  justify-content: center;
  :hover {
      color: ${props => props.theme.main};
      border-bottom: ${props => props.theme.main} solid 3px;
      outline: 0;
  }
  a {
      text-decoration: none;
      :visited{
          color: black;
      }
      :hover {
          color: ${props => props.theme.main};
        }
  }
`;

const Info = styled.table`
  width: 220px;
  text-align: left;
  margin-top: 15px;
  tr {
      margin: 5px 0;
      padding: 5px;
      td {
          margin: 5px 0;
          padding: 5px;
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
}


