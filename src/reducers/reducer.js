import {
  SET_THEME,
  SET_LEVEL,
  TOGGLE_ACTIVE,
  START_GAME,
  ADD_POINTS,
  GET_HIGHSCORES,
  GAME_OVER
} from '../actions/actions';

const defaultState = {
  active: false,
  activePillColor: '',
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
  gameOver: false,
  highScores: [],
  initials: '???'
};

const meowReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, currentTheme: action.payload };
    case TOGGLE_ACTIVE:
      return { ...state, active: !state.active };
    case START_GAME:
      return { ...state, active: !state.active };
    case GAME_OVER:
      return { ...state, gameOver: true, active: false };
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
