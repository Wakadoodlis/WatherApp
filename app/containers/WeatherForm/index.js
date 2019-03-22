import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectWeatherForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getWeather } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class WeatherForm extends React.PureComponent {
  componentDidMount() {
    console.log(
      'this props from WeatherForm:',
      this.props,
      this.props.getWeather(),
    );
    this.props.getWeather();
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" name="city" className="" />
          <button className="btn btn-primary" type="button">
            Get weather
          </button>
        </div>
      </form>
    );
  }
}

WeatherForm.propTypes = {
  getWeather: PropTypes.func.isRequired,
  // getMyWeather: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectWeatherForm();

function mapDispatchToProps(dispatch) {
  return {
    getWeather: () => dispatch(getWeather()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'weatherForm', reducer });
const withSaga = injectSaga({ key: 'weatherForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WeatherForm);
