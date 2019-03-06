import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Checkbox from "./styles/Checkbox";
import data from "./lib/testdata.json";

const all = Object.keys(data);

const OPTIONS = all;

const Button = styled.div`
  position: absolute;
  margin: 20px;
  padding: 20px;
  font-size: 20px;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: absolute;
  margin: 20px;
  padding: 20px;
  border: 2px solid black;
  background: white;
  width: 150px;
  justify-content: center;
  box-shadow: 5px 5px #fff, -5px -5px #fff, 5px -5px #fff, -5px 5px #fff;
  button {
    display: block;
    width: 150px;
    margin: 10px auto;
    background: white;
    border: 2px solid black;
    color: black;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    flex: 1 1 auto;
  }
`;

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: true
        }),
        {}
      )
    };
  }

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    const checkboxes = Object.keys(this.state.checkboxes).filter(
      checkbox => this.state.checkboxes[checkbox]
    );
    checkboxes.length < 1
      ? alert("At least one row must be selected")
      : this.props.onSubmit(checkboxes);
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  handleClick = handleclickEvent => {
    const open = this.state.open;
    this.setState({ open: !open });
  };

  render() {
    const open = this.state.open;
    return (
      <Fragment>
        <Button onClick={this.handleClick}>{open ? "⤫" : "☰"}</Button>

        {open && (
          <Wrapper>
            <form onSubmit={this.handleFormSubmit}>
              <Container>{this.createCheckboxes()}</Container>
              <button type="button" onClick={this.selectAll}>
                Select All
              </button>
              <button type="button" onClick={this.deselectAll}>
                Deselect All
              </button>
              <button type="submit">Save</button>
            </form>
          </Wrapper>
        )}
      </Fragment>
    );
  }
}

export default Settings;
