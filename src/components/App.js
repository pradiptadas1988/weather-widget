import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/callWeatherApi';
import CityWeatherData from './CityWeatherData';
import '../css/App.css';
import APP_CONSTANT from '../WEATHER_APP_CONSTANT';
import {_handleTabVisibility} from '../utils/weatherWidgetUtil';

class App extends React.Component {

  constructor(props){
    super(props);
    this.tabRef = React.createRef();
    this.state = {
      secondTabVisble: false,
      thridTabVisble: false
    };
  }

  componentDidMount(){
    this.tabRef.current.click();
  }

  _handleClick(cityName) {
    _handleTabVisibility(cityName);

    if(cityName === APP_CONSTANT.CITY_NAMES.MOSCOW && this.state.secondTabVisble === false){
      this.setState({ secondTabVisble:true });
    }
    else if(cityName === APP_CONSTANT.CITY_NAMES.LONDON && this.state.thridTabVisble === false){
      this.setState({ thridTabVisble:true });
    }
  }

  render() {
    return (
      <div>
          <div className="tab">
            <button id = "defaultOpen"  ref = {this.tabRef} 
              onClick={() => this._handleClick(APP_CONSTANT.CITY_NAMES.AMASTERDAM)}>{APP_CONSTANT.CITY_NAMES.AMASTERDAM} </button>
            <button onClick={() => this._handleClick(APP_CONSTANT.CITY_NAMES.MOSCOW)}>{APP_CONSTANT.CITY_NAMES.MOSCOW}</button>
            <button onClick={() => this._handleClick(APP_CONSTANT.CITY_NAMES.LONDON)}>{APP_CONSTANT.CITY_NAMES.LONDON}</button>
          </div>
          <div id = {APP_CONSTANT.CITY_NAMES.AMASTERDAM} className="tabcontent">
            <CityWeatherData cityName = {APP_CONSTANT.CITY_NAMES.AMASTERDAM} countryCode = {APP_CONSTANT.COUNTRY_CODE.NETHERLANDS}
                  cityWeatherData = {this.props.amsterdamWeathers} getWeather={this.props.actions.getWeatherData}/>
          </div>

          <div id = {APP_CONSTANT.CITY_NAMES.MOSCOW} className="tabcontent">
            {this.state.secondTabVisble && <CityWeatherData cityName = {APP_CONSTANT.CITY_NAMES.MOSCOW} countryCode = {APP_CONSTANT.COUNTRY_CODE.RUSSIA} 
                cityWeatherData = {this.props.moscowWeathers} getWeather={this.props.actions.getWeatherData}/>}
          </div>

          <div id = {APP_CONSTANT.CITY_NAMES.LONDON} className="tabcontent">
            {this.state.thridTabVisble && <CityWeatherData cityName = {APP_CONSTANT.CITY_NAMES.LONDON} countryCode = {APP_CONSTANT.COUNTRY_CODE.UNITED_KINGDOM}
                cityWeatherData = {this.props.londonWeathers} getWeather={this.props.actions.getWeatherData}/>}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    amsterdamWeathers: state.weatherReducer.amsterdamWeathers,
    moscowWeathers: state.weatherReducer.moscowWeathers,
    londonWeathers: state.weatherReducer.londonWeathers,
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
