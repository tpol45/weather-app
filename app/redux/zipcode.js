const SET_ZIP_CODE = "SET_ZIP_CODE";

export const setZipCode = zipCode => ({ type: SET_ZIP_CODE, zipCode });

// export const setZipCodeData = zipCode => {
//   return dispatch => {
//     try {
//       console.log('hey')
//       dispatch(setZipCode('60025'));
//     } catch (error) {
//       console.error(error)
//     }
    // console.log('here!!')
    // let data = 'hey'
    // var request = new XMLHttpRequest()
    // request.open('GET', `https://api.openweathermap.org/data/2.5/weather?zip=${this.props.zipCode}&appid=38435a4996663dffe589a761d1f12028`, true)
    // request.onload = function () {
    //   data = JSON.parse(this.response)
    //   console.log(data)
    //   let hello = 'yolo'
    //   console.log('1', hello)
    // }
    // await request.send()
//   };
// };

export const setZipCodeDataThunk = (zipCode) => async dispatch => {
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=38435a4996663dffe589a761d1f12028`)
    let json = await response.json()
    let celsius = json.main.temp - 273.15
    dispatch(setZipCode({zipcode: zipCode, temperature: celsius, description: json.weather[0].main}))
  } catch (err) {
    console.error(err)
  }
}

const zipCodeReducer = (state = {}, action) => {
    switch (action.type) {
      case SET_ZIP_CODE: {
        return action.zipCode;
      }
      default: {
        return state;
      }
    }
};

export default zipCodeReducer;
