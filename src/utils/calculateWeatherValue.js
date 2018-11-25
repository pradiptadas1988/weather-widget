import APP_CONSTANT from '../WEATHER_APP_CONSTANT';

export const _calculateWeatherValue = (responseData) => {
    let finalWeatherValue = 0;
    finalWeatherValue = finalWeatherValue + _getValueForWindSpeed(responseData.list) + _getValueForTemparature(responseData.list);
    finalWeatherValue = finalWeatherValue + _getValueForPressure(responseData.list);
    console.log("wind, temp, press:",_getValueForWindSpeed(responseData.list),_getValueForTemparature(responseData.list),_getValueForPressure(responseData.list));
    return {
        value: finalWeatherValue,
        name: responseData.city.name
    };
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

const _getValueForPressure = (listData) => {
    let allPressureData = [];
    for(let i = 0;i < listData.length; i++){
        allPressureData.push(listData[i].main.pressure);
    }
    return _getFinalData(_getAverageValue(allPressureData), APP_CONSTANT.WEATHER_PARAM_VALUES.PRESSURE_MIN,
         APP_CONSTANT.WEATHER_PARAM_VALUES.PRESSURE_MAX, APP_CONSTANT.WEATHER_CALCULATION_WEIGHT.PRESSURE_WEIGHT);
}
