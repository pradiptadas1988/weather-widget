import React from 'react';
import APP_CONSTANT from '../WEATHER_APP_CONSTANT';

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
        return (
          <div >
            {this.props.cityWeatherData && this.props.cityWeatherData.name}
            <br />
            {this.props.cityWeatherData && this.props.cityWeatherData.value}
            {console.log("Re-rendered:",this.props.cityName)}
          </div>
        );
      }

}

export default CityWeatherData;
