import { SET_THEME, TOGGLE_ACTIVE, START_GAME } from '../actions/actions';

const defaultState = {
  active: false,
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
    case TOGGLE_ACTIVE:
      return { ...state, active: !state.active };
    case START_GAME:
      return { ...state, active: !state.active };

    default:
      return state;
  }
};

export default meowReducer;
