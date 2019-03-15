import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectWatherForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getWather } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class WatherForm extends React.PureComponent {
  componentDidMount() {
    console.log('this props from WatherForm:', this.props);
    // this.props.getWather();
  }

  render() {
    return (
      <form onClick={this.props.getMyWather}>
        <div className="form-group">
          <input type="text" name="city" className="" />
          <button className="btn btn-primary" type="button">
            Get wather
          </button>
        </div>
      </form>
    );
  }
}

WatherForm.propTypes = {
  // getWather: PropTypes.func.isRequired,
  getMyWather: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  watherForm: makeSelectWatherForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    getWather: () => dispatch(getWather()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'watherForm', reducer });
const withSaga = injectSaga({ key: 'watherForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WatherForm);
