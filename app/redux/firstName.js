const SET_FIRST_NAME = "SET_FIRST_NAME";

export const setFirstName = firstName => ({ type: SET_FIRST_NAME, firstName });

const firstNameReducer = (state = '', action) => {
    switch (action.type) {
      case SET_FIRST_NAME: {
        return action.firstName;
      }
      default: {
        return state;
      }
    }
};

export default firstNameReducer;
