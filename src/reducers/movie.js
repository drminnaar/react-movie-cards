import {
    MOVIES_GET_REQUEST_SUCCESS,
    MOVIES_GET_REQUEST_ERROR,
} from '../actions/movie';

const initialState = {
    movies: [],
    ratings: [],
    error: '',
};

export const movie = (state = initialState, action) => {
    switch (action.type) {
    case MOVIES_GET_REQUEST_SUCCESS:
        return Object.assign({}, state, { 
            movies: action.payload.movies,
            ratings: action.payload.ratings,
        });
    case MOVIES_GET_REQUEST_ERROR:
        return Object.assign({}, state, { error: action.payload.error });
    default:
        return state;
    }
};
