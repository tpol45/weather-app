const SET_WEATHER_INFO = "SET_WEATHER_INFO";

export const setWeatherInfo = weatherInformation => ({ type: SET_WEATHER_INFO, weatherInformation });

export const getWeatherInfo = (zipCode) => async dispatch => {
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=38435a4996663dffe589a761d1f12028`)
    let json = await response.json()
    console.log(json)
    let celsius = json.main.temp - 273.15
    dispatch(setWeatherInfo({zipcode: zipCode, temperature: celsius, description: json.weather[0].main}))
  } catch (err) {
    console.error(err)
  }
}

const weatherReducer = (state = {}, action) => {
    switch (action.type) {
      case SET_WEATHER_INFO: {
        return action.weatherInformation;
      }
      default: {
        return state;
      }
    }
};

export default weatherReducer;
