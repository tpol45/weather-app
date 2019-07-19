const SET_LAST_NAME = "SET_LAST_NAME";

export const setLastName = lastName => ({ type: SET_LAST_NAME, lastName });

const lastNameReducer = (state = '', action) => {
    switch (action.type) {
      case SET_LAST_NAME: {
        return action.lastName;
      }
      default: {
        return state;
      }
    }
};

export default lastNameReducer;
