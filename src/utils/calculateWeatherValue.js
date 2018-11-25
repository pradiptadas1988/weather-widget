import APP_CONSTANT from '../WEATHER_APP_CONSTANT';

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
    let data = _calculateWeatValue(responseData);
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
    console.log("rtrn data:",resultData);
    return resultData;
};

const _getFinalData = (avg, min, max, weight) =>{
    let finalValue = 0;
    if(avg > min && avg < max){
        let percentage = ((avg / (max)) * 100);
        finalValue = Math.floor(((weight * percentage) / 100));
    }
    return finalValue;
}

const _getAverageValue = (dataArray) =>{
    let totalValue = 0;
    for(let i = 0;i < dataArray.length; i++){
        totalValue = totalValue + dataArray[i];
    }
    return totalValue / dataArray.length;
}

const _calculateWeatValue = (responseData) => {
    let finalWeatherValue = 0;
    finalWeatherValue = finalWeatherValue + _getValueForWindSpeed(responseData.list) + _getValueForTemparature(responseData.list);
    return {
        value: finalWeatherValue,
        name: responseData.city.name
    };
};

const _getValueForWindSpeed = (listData) => {
    let allWindData = [];
    for(let i = 0;i < listData.length; i++){
        allWindData.push(listData[i].wind.speed);
    }
    return _getFinalData(_getAverageValue(allWindData), APP_CONSTANT.WEATHER_PARAM_VALUES.WIND_SPEED_MIN,
         APP_CONSTANT.WEATHER_PARAM_VALUES.WIND_SPEED_MAX, APP_CONSTANT.WEATHER_CALCULATION_WEIGHT.WIND_SPEED_WEIGHT);
};

const _getValueForTemparature = (listData) => {
    let allTempData = [];
    for(let i = 0;i < listData.length; i++){
        allTempData.push(listData[i].main.temp);
    }
    return _getFinalData(_getAverageValue(allTempData), APP_CONSTANT.WEATHER_PARAM_VALUES.TEMP_MIN,
         APP_CONSTANT.WEATHER_PARAM_VALUES.TEMP_MAX, APP_CONSTANT.WEATHER_CALCULATION_WEIGHT.TEMPARATURE_WEIGHT);
};
