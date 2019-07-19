const SET_ZIP_CODE = "SET_ZIP_CODE";

export const setZipCode = zipCode => ({ type: SET_ZIP_CODE, zipCode });

const zipCodeReducer = (state = '', action) => {
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
