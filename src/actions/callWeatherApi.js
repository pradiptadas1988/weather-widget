import axios from 'axios';
import {createUrl, _weatherDataSuccess} from '../utils/weatherWidgetUtil';

export const getWeatherData = (cityName,countryCode) => {
    return (dispatch) => {
        let url = createUrl(cityName,countryCode);
        axios.get(url).then(res => {
            dispatch(_weatherDataSuccess(res.data,cityName));
        })
    }
};
