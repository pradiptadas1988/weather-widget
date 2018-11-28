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
      tabVisibility:[],
    };
  }

  componentDidMount(){
    this.tabRef.current.click();
    let tempVisibilityArray =  APP_CONSTANT.CITY_DETAILS.map((value) => (value.tabVisibility));
    this.setState({tabVisibility : tempVisibilityArray});
  }

  _handleClick(cityName,index) {
    _handleTabVisibility(cityName);
    let newTabVisibility = this.state.tabVisibility;
    newTabVisibility[index] = true;
    this.setState({tabVisibility : newTabVisibility});
  }

  render() {
    const allCityButton = APP_CONSTANT.CITY_DETAILS.map((value, index) => {
      if(index===0){
        return(<button ref = {this.tabRef} key={index} onClick={() => this._handleClick(value.city,index)}>{value.city} </button>);
      }
      else{
        return(<button key={index} onClick={() => this._handleClick(value.city,index)}>{value.city} </button>);
      }
    });

    const allCityTab = APP_CONSTANT.CITY_DETAILS.map((value, index) => (
      <div id = {value.city} className="tabcontent" key={index}>
          {this.state.tabVisibility[index] && <CityWeatherData cityName = {value.city} countryCode = {value.country_code}
              cityWeatherData = {this.props.amsterdamWeathers} getWeather={this.props.actions.getWeatherData}/>}
      </div>
    ));

    return (
      <div>
          <div className="tab">
            {allCityButton}
          </div>
          {allCityTab}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    amsterdamWeathers: state.weatherReducer.amsterdamWeathers,
    moscowWeathers: state.weatherReducer.moscowWeathers,
    londonWeathers: state.weatherReducer.londonWeathers
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
