import ThemeAPI from '../services/themeAPI.js';

export const SET_THEME = 'SET_THEME';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const START_GAME = 'START_GAME';

export const setTheme = themeId => {
  return function(dispatch) {
    ThemeAPI.getCurrent(themeId).then(theme => {
      dispatch({ type: SET_THEME, payload: theme });
    });
  };
};
//toggleActive might be redundant with start game.
export const toggleActive = () => {
  return { type: TOGGLE_ACTIVE };
};

export const startGame = () => {
  return { type: START_GAME };
};
