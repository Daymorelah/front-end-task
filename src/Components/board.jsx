import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import GameBoard from './gameBoard';
import mario from '../Images/mario.png';

class Board extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pic: mario,
      renderBoard: true,
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }
  componentWillMount() {
    if (this.props.boardDimension.length === 0) {
      this.setState({ renderBoard: false });
    }
  }
  handleClickEvent(event, num) {
    /* eslint-disable no-param-reassign,no-undef */
    const aPicture = document.getElementById('aPic');
    const parentButtonClass = document.getElementsByClassName('boardSquare');
    const parentButtonId = document.getElementById(`boardSquare${num}`);
    for (let i = 0; i < parentButtonClass.length; i += 1) {
      if (parentButtonClass[i].contains(aPicture)) {
        parentButtonClass[i].removeChild(aPicture);
      }
    }
    const imageTag = document.createElement('IMG');
    imageTag.setAttribute('src', this.state.pic);
    imageTag.setAttribute('width', '25px');
    imageTag.setAttribute('id', 'aPic');
    imageTag.setAttribute('height', '25px');
    parentButtonId.appendChild(imageTag);
  }
  render() {
    return (
      <div>{
        this.state.renderBoard ?
          <GameBoard
            handleClickEvent={this.handleClickEvent}
            dimensions={this.props.boardDimension}
          /> : <Redirect to="/welcome" />
        }
      </div>
    );
  }
}

Board.propTypes = {
  boardDimension: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    boardDimension: state.dimensions,
  };
}

export default connect(mapStateToProps)(Board);
