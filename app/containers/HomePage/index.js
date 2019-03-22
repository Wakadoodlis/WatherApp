import React from 'react';
import Title from '../../components/Title';
import WeatherForm from '../WeatherForm';
import Weather from '../Weather';
/* eslint-disable react/prefer-stateless-function */
// const apikey = 'bd9180a8272e9b7ee9b7e0856c22b16e';

export default class HomePage extends React.PureComponent {
  // getMyWeather = async e => {
  //   e.preventDefault();
  //   const apiCall = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apikey}&units=metric`,
  //   );
  //   const data = await apiCall.json();

  //   console.log(data);
  //   console.log('laba diena');
  // };
  // from watherForm props getMyWather={this.getMyWather}

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Title />
          <WeatherForm />
          <Weather />
        </div>
      </React.Fragment>
    );
  }
}
