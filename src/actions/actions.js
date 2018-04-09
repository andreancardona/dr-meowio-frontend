import ThemeAPI from '../services/themeAPI.js';

export const SET_THEME = 'SET_THEME';

export const setTheme = themeId => {
  return function(dispatch) {
    ThemeAPI.getCurrent(themeId).then(theme => {
      dispatch({ type: SET_THEME, payload: theme });
    });
  };
};
