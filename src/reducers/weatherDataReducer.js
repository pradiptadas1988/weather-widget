import APP_CONSTANT from '../WEATHER_APP_CONSTANT';

const initialState = {
    amsterdamWeathers: {},
    moscowWeathers: {},
    londonWeathers: {}
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_CONSTANT.ACTION_CITY_DATA.AMASTERDAM_DATA: {
            return {
                ...state, amsterdamWeathers : action.payload
            }
        }
        case APP_CONSTANT.ACTION_CITY_DATA.MOSCOW_DATA: {
            return {
                ...state, moscowWeathers : action.payload
            }
        }
        case APP_CONSTANT.ACTION_CITY_DATA.LONDON_DATA: {
            return {
                ...state, londonWeathers : action.payload
            }
        }
        
        default:
            return state;
    }
}

export default weatherReducer;
