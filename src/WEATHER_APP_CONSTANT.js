const APP_CONSTANT = {
    ACTION_CITY_DATA : {
        AMASTERDAM_DATA : 'AMASTERDAM_DATA',
        MOSCOW_DATA : 'MOSCOW_DATA',
        LONDON_DATA : 'LONDON_DATA'
    },
    CITY_NAMES : {
        AMASTERDAM : 'Amsterdam',
        MOSCOW : 'Moscow',
        LONDON : 'London'
    },
    COUNTRY_CODE : {
        NETHERLANDS : 'nl',
        RUSSIA : 'ru',
        UNITED_KINGDOM : 'uk',
    },
    WEATHER_CALCULATION_WEIGHT : {
        WIND_SPEED_WEIGHT : 30,
        TEMPARATURE_WEIGHT : 40
    },
    WEATHER_PARAM_VALUES : {
        WIND_SPEED_MAX : 8,
        WIND_SPEED_MIN : 2,
        TEMP_MAX : 15,
        TEMP_MIN : 0,
    },
    BASE_URL: 'http://api.openweathermap.org/data/2.5/forecast?q=',
    API_KEY : '38cffa4e02fcc6aa12d750a37dbb822c',
    API_CALL_INTERVAL: 600000
};

export default APP_CONSTANT;