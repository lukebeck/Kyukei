import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Button = styled.button`
    background: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    border: none;
    border-bottom: ${props => props.theme.fg} solid 3px;
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
`;



export default class Options extends Component {
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
                {this.props.options.map(
                    (option) => <Button
                        key={option}
                        onClick={() => this.handleSubmit(option)}>{
                            option}
                    </Button>
                )}
            </Container>
        )
    }
}