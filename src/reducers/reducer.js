import { SET_THEME } from '../actions/actions';

const defaultState = {
  currentTheme: {
    colorOne: 'powColorOne',
    colorTwo: 'powColorTwo',
    colorThree: 'powColorThree',
    colorFour: 'powColorFour',
    name: 'Pow',
    background: 'powBackground'
  }
};

const meowReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, currentTheme: action.payload };

    default:
      return state;
  }
};

export default meowReducer;
