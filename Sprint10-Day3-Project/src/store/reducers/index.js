import { movies } from './../../data.js';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  NEXT_MOVIE,
  PREVIOUS_MOVIE,
} from './../actions/index';

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const newFavMovies = [...state.favMovies, state.movies[state.sira]];
      const remainingMovies = state.movies.filter(
        (_, index) => index !== state.sira
      );
      return {
        ...state,
        favMovies: newFavMovies,
        movies: remainingMovies,
        sira: state.sira !== 0 ? state.sira - 1 : state.sira,
      };
    case REMOVE_FROM_FAVORITES:
      const movieToRemove = state.favMovies.find(
        (movie) => movie.id === action.payload
      );
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
        movies: [...state.movies, movieToRemove],
      };

    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case PREVIOUS_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };
    default:
      return state;
  }
};

export default movieReducer;
