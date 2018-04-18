import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Welcomeplayer from './welcomePlayer';
import setBoardDimensions from './Actions/boardDimentionsAction';

class Welcome extends Component {
  constructor(props, context) {
    super(props, context);
    this.submitBoardDimensions = this.submitBoardDimensions.bind(this);
  }
  submitBoardDimensions(boardDimensions) {
    this.props.setBoardDimensions(boardDimensions);
    this.props.history.push('/play');
  }
  render() {
    return (
      <div>
        <Welcomeplayer submitBoardDimensions={this.submitBoardDimensions} />
      </div>
    );
  }
}

Welcome.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  setBoardDimensions: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    setBoardDimensions: (dimensions) => { dispatch(setBoardDimensions(dimensions)); },
  };
}

export default connect(null, mapDispatchToProps)(Welcome);
