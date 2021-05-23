import {
  ADD_FAVORITE,
  TOGGLE_FAVORITES,
  REMOVE_FAVORITE,
} from '../actions/favoriteActions';

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    case ADD_FAVORITE:
      const newFav = {
        ...action.payload,
      };
      return {
        ...state,
        favorites: [...state.favorites, newFav],
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
