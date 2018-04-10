import {
  SET_THEME,
  SET_LEVEL,
  TOGGLE_ACTIVE,
  START_GAME,
  ADD_POINTS,
  GET_HIGHSCORES
} from '../actions/actions';

const defaultState = {
  active: false,
  currentScore: 0,
  currentLevel: 1,
  currentTheme: {
    colorOne: 'powColorOne',
    colorTwo: 'powColorTwo',
    colorThree: 'powColorThree',
    colorFour: 'powColorFour',
    name: 'Pow',
    background: 'powBackground'
  },
  highScores: []
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
    case SET_LEVEL:
      return { ...state, currentLevel: action.payload };
    case GET_HIGHSCORES:
      return { ...state, highScores: action.payload };

    default:
      return state;
  }
};

export default meowReducer;
