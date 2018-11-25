import APP_CONSTANT from '../WEATHER_APP_CONSTANT';
import {_calculateWeatherValue} from './calculateWeatherValue';

export const createUrl = (cityName,countryCode) => {
    return `${APP_CONSTANT.BASE_URL}${cityName},${countryCode}&units=metric&APPID=${APP_CONSTANT.API_KEY}`;
}

export const _handleTabVisibility = (cityName) => {
    let i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

export const _weatherDataSuccess = (responseData) => {
    let data = _calculateWeatherValue(responseData);
    let resultData = {payload: data};

    if(data.name === APP_CONSTANT.CITY_NAMES.AMASTERDAM){
        resultData.type = APP_CONSTANT.ACTION_CITY_DATA.AMASTERDAM_DATA;
    }
    else if(data.name === APP_CONSTANT.CITY_NAMES.MOSCOW){
        resultData.type = APP_CONSTANT.ACTION_CITY_DATA.MOSCOW_DATA; 
    }
    else if(data.name === APP_CONSTANT.CITY_NAMES.LONDON){
        resultData.type = APP_CONSTANT.ACTION_CITY_DATA.LONDON_DATA; 
    }
    //console.log("rtrn data:",resultData);
    return resultData;
};
