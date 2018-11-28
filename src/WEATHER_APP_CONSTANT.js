const APP_CONSTANT = {
    ACTION_CITY_DATA : {
        AMASTERDAM_DATA : 'Amsterdam',
        MOSCOW_DATA : 'Moscow',
        LONDON_DATA : 'London'
    },
    CITY_DETAILS : [
        {
            city : 'Amsterdam',
            country_code : 'nl',
            city_weather : 'amsterdamWeathers',
            tabVisibility : true
        },
        {
            city : 'Moscow',
            country_code : 'ru',
            city_weather : 'moscowWeathers',
            tabVisibility : false
        },
        {
            city : 'London',
            country_code : 'uk',
            city_weather : 'londonWeathers',
            tabVisibility : false
        }
    ],
    WEATHER_CALCULATION_WEIGHT : {
        WIND_SPEED_WEIGHT : 30,
        TEMPARATURE_WEIGHT : 40,
        PRESSURE_WEIGHT : 10,
        HUMIDITY_WEIGHT : 20
    },
    WEATHER_PARAM_VALUES : {
        WIND_SPEED_MAX : 8,
        WIND_SPEED_MIN : 2,
        TEMP_MAX : 15,
        TEMP_MIN : -5,
        PRESSURE_MAX : 1200,
        PRESSURE_MIN : 900,
        HUMIDITY_MAX : 100,
        HUMIDITY_MIN : 70
    },
    ACTION_TYPE_DATA : 'WEATHER_DATA',
    BASE_URL: 'http://api.openweathermap.org/data/2.5/forecast?q=',
    API_KEY : '38cffa4e02fcc6aa12d750a37dbb822c',
    API_CALL_INTERVAL: 600000
};

export default APP_CONSTANT;
