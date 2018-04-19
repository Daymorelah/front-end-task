import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import GameBoard from './gameBoard';
import NumberOfMoves from './numberOfMoves';
import mario from '../../Images/mario.png';
import princess from '../../Images/princess.png';

class Board extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mario,
      princess,
      renderBoard: true,
      moves: 0,
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }
  /* eslint-disable no-param-reassign,no-undef */
  componentWillMount() {
    if (this.props.boardDimension.length === 0) {
      this.setState({ renderBoard: false });
    }
  }
  componentDidMount() {
    if (this.props.boardDimension.length !== 0) {
      const { width, height } = this.props.boardDimension[0];
      const widthInInteger = parseInt(width, 10);
      const range = (width * height) + widthInInteger;
      const num = [];
      for (let i = 0; i < 5; i += 1) {
        const randomNumber = Math.floor((Math.random() * (range)) + 1);
        if (randomNumber % (widthInInteger + 1) !== 0) {
          if (num.indexOf(randomNumber) === -1) {
            num.push(randomNumber);
          }
        } else {
          i -= 1;
        }
      }
      for (let i = 0; i < num.length; i += 1) {
        const princessImage = document.createElement('IMG');
        princessImage.setAttribute('src', this.state.princess);
        princessImage.setAttribute('width', '25px');
        princessImage.setAttribute('id', 'princessPicture');
        princessImage.setAttribute('height', '25px');
        document.getElementById(`boardSquare${num[i]}`).appendChild(princessImage);
      }
    }
  }
  handleClickEvent(event, num) {
    const marioImage = document.createElement('IMG');
    marioImage.setAttribute('src', this.state.mario);
    marioImage.setAttribute('width', '25px');
    marioImage.setAttribute('id', 'mariosPicture');
    marioImage.setAttribute('height', '25px');

    const mariosPicture = document.getElementById('mariosPicture');
    const princessPicture = document.getElementById('princessPicture');
    const parentButtonClass = document.getElementsByClassName('boardSquare');
    const parentButtonId = document.getElementById(`boardSquare${num}`);

    for (let i = 0; i < parentButtonClass.length; i += 1) {
      if (parentButtonClass[i].contains(mariosPicture)) {
        parentButtonClass[i].removeChild(mariosPicture);
      }
    }

    if (parentButtonId.contains(princessPicture)) {
      parentButtonId.replaceChild(marioImage, princessPicture);
      this.setState({ moves: this.state.moves + 1 });
    } else {
      parentButtonId.appendChild(marioImage);
      this.setState({ moves: this.state.moves + 1 });
    }
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
        <NumberOfMoves moves={this.state.moves} />
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
