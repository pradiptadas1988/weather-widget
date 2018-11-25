import APP_CONSTANT from '../WEATHER_APP_CONSTANT';

export const _calculateWeatherValue = (responseData) => {
    let finalWeatherValue = 0;
    finalWeatherValue = finalWeatherValue + _getValueForWindSpeed(responseData.list);
    finalWeatherValue = finalWeatherValue + _getValueForTemparature(responseData.list);
    finalWeatherValue = finalWeatherValue + _getValueForPressure(responseData.list);
    finalWeatherValue = finalWeatherValue + _getValueForHumidity(responseData.list);

    finalWeatherValue = _getGradientValue(finalWeatherValue);
    return {
        value: finalWeatherValue,
        name: responseData.city.name
    };
};

const _getAverageValue = (dataArray) =>{
    let totalValue = 0;
    for(let i = 0;i < dataArray.length; i++){
        totalValue = totalValue + dataArray[i];
    }
    return totalValue / dataArray.length;
}

const _getFinalData = (avg, min, max, weight) => {
    let finalValue = 0;
    if(avg > min && avg < max){
        let percentage = ((avg / (max)) * 100);
        finalValue = Math.floor(((weight * percentage) / 100));
    }
    return finalValue;
}

const _getGradientValue = (rawValue) => {
    let gradientValue = 50;
    switch (true) {
        case (rawValue > 0 && rawValue < 20): 
            gradientValue = 100;
            break;
        case (rawValue > 19 && rawValue < 40): 
            gradientValue = 90;
            break;
        case (rawValue > 39 && rawValue < 60): 
            gradientValue = 80;
            break;
        case (rawValue > 59 && rawValue < 80): 
            gradientValue = 70;
            break;
        case (rawValue > 79 && rawValue < 100): 
            gradientValue = 60;
            break;
        default:
            break;
    }
    //console.log("finalValue:",rawValue);
    //console.log("g value:",gradientValue)
    return gradientValue;
}

const _getValueForWindSpeed = (listData) => {
    let allWindData = [];
    for(let i = 0;i < listData.length; i++){
        allWindData.push(listData[i].wind.speed);
    }
    return _getFinalData(_getAverageValue(allWindData), APP_CONSTANT.WEATHER_PARAM_VALUES.WIND_SPEED_MIN,
         APP_CONSTANT.WEATHER_PARAM_VALUES.WIND_SPEED_MAX, APP_CONSTANT.WEATHER_CALCULATION_WEIGHT.WIND_SPEED_WEIGHT);
};

const _getValueForHumidity = (listData) => {
    let allHumidityData = [];
    for(let i = 0;i < listData.length; i++){
        allHumidityData.push(listData[i].main.humidity);
    }
    return _getFinalData(_getAverageValue(allHumidityData), APP_CONSTANT.WEATHER_PARAM_VALUES.HUMIDITY_MIN,
         APP_CONSTANT.WEATHER_PARAM_VALUES.HUMIDITY_MAX, APP_CONSTANT.WEATHER_CALCULATION_WEIGHT.HUMIDITY_WEIGHT);
};

const _getValueForTemparature = (listData) => {
    let allTempData = [];
    for(let i = 0;i < listData.length; i++){
        allTempData.push(listData[i].main.temp);
    }
    return _getFinalData(_getAverageValue(allTempData), APP_CONSTANT.WEATHER_PARAM_VALUES.TEMP_MIN,
         APP_CONSTANT.WEATHER_PARAM_VALUES.TEMP_MAX, APP_CONSTANT.WEATHER_CALCULATION_WEIGHT.TEMPARATURE_WEIGHT);
};

const _getValueForPressure = (listData) => {
    let allPressureData = [];
    for(let i = 0;i < listData.length; i++){
        allPressureData.push(listData[i].main.pressure);
    }
    return _getFinalData(_getAverageValue(allPressureData), APP_CONSTANT.WEATHER_PARAM_VALUES.PRESSURE_MIN,
         APP_CONSTANT.WEATHER_PARAM_VALUES.PRESSURE_MAX, APP_CONSTANT.WEATHER_CALCULATION_WEIGHT.PRESSURE_WEIGHT);
}
