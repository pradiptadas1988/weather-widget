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

export const _weatherDataSuccess = (responseData,cityName) => {
    let data = _calculateWeatherValue(responseData);
    let resultData = {payload: data, type:cityName};
    
    console.log("rtrn data:",resultData);
    return resultData;
};
