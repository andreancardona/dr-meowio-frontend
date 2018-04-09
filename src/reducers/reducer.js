import { SET_THEME, TOGGLE_ACTIVE, START_GAME, ADD_POINTS } from '../actions/actions';

const defaultState = {
  active: false,
  currentScore: 0,
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
    case ADD_POINTS:
      return { ...state, currentScore: state.currentScore + 100 };

    default:
      return state;
  }
};

export default meowReducer;
