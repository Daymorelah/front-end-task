import React from 'react';
import PropTypes from 'prop-types';

const WelcomePlayer = (props) => {
  let width = null; let height = null;
  return (
    <div>
      <div className="container">
        <div className="col-sm-12 col-lg-4" />
        <div className="col-sm-12 col-lg-4" >
          <div className="jumbotron">
            <h3 className="text-center text-primary">Welcome to the maze game</h3>
            <form onSubmit={(event) => {
              event.preventDefault();
              const boardDimension = {
                width: width.value,
                height: height.value,
              };
              props.submitBoardDimensions(boardDimension);
              event.target.reset();
            }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter number of rows here"
                  className="form-control"
                  id="boardWidth"
                  required
                  ref={(node) => { width = node; }}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter number of columns here"
                  className="form-control"
                  id="boardHeight"
                  required
                  ref={(node) => { height = node; }}
                />
              </div>

              <button className="btn btn-primary form-control" type="submit">Play</button>

            </form>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4" />
      </div>
    </div>
  );
};

WelcomePlayer.propTypes = {
  submitBoardDimensions: PropTypes.func.isRequired,
};

export default WelcomePlayer;
