import React, { Component } from 'react';
import Button from './styles/Button';
import Container from './styles/Container';

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
};
