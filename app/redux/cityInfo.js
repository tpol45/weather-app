const SET_CITY_INFO = "SET_CITY_INFO";

export const setCityInfo = cityInformation => ({ type: SET_CITY_INFO, cityInformation });

export const getCityInfo = (zipCode) => async dispatch => {
  try {
    let response = await fetch(`https://www.zipcodeapi.com/rest/js-me32Z498UeJ3jTf3HyT1qCHrQT31qhZH2IMFgNR4Apb2zvXmhGR7uCBDqtJZX5Yn/info.json/${zipCode}/degrees`)
    let json = await response.json()
    dispatch(setCityInfo({city: json.city, state: json.state, zipCode: zipCode}))
  } catch (err) {
    console.error(err)
  }
}

const cityInfoReducer = (state = {}, action) => {
    switch (action.type) {
      case SET_CITY_INFO: {
        return action.cityInformation;
      }
      default: {
        return state;
      }
    }
};

export default cityInfoReducer;
