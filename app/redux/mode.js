export const SET_MODE = "SET_MODE";

export const setMode = mode => ({ type: SET_MODE, mode });

const modeReducer = (state = 'entry', action) => {
    switch (action.type) {
      case SET_MODE: {
        return action.mode;
      }
      default: {
        return state;
      }
    }
};

export default modeReducer;
