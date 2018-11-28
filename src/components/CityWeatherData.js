import React from 'react';
import APP_CONSTANT from '../WEATHER_APP_CONSTANT';
import '../css/customGauge.css';

class CityWeatherData extends React.Component {

    componentDidMount(){
      this._getDataFromApi();
      setInterval(() => this._getDataFromApi(),APP_CONSTANT.API_CALL_INTERVAL);
    }

    shouldComponentUpdate(nextProps) {
      let checkReRender = false;
      if(nextProps.cityWeatherData.value !== this.props.cityWeatherData.value){
        checkReRender = true;
      }
      return checkReRender;
    }

    _getDataFromApi(){
      this.props.getWeather(this.props.cityName,this.props.countryCode);
    }

    render() {
        let divStyle = {
          backgroundImage: `linear-gradient(white ${this.props.cityWeatherData.value}%,green 30%,yellow 75%,red 90%)`,
        };

        return (
          <div>
            <div className="container" style = {divStyle}></div>
            <div>{this.props.cityWeatherData.name}</div>
          </div>
        );
      }

}

export default CityWeatherData;
