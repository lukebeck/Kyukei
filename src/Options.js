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
                    (option) => <Option
                        key={option}
                        id={option}
                        onClick={() => this.handleSubmit(option)}>{
                            option}
                    </Option>
                )}
            </Container>
        )
    }
};

class Option extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            class: this.props.className

        }
    }

    handleClick(value){
        this.setState({ class: "incorrect"});
        this.props.onClick()
    }

    render(){
        return(
            <Button
                onClick={this.handleClick}
                className={this.state.class}
                >
                {this.props.children}
            </Button>
        )
    }
}
