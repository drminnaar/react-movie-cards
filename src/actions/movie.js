import { asyncActionCreator } from '../utils/utils';

const MOVIES_PATH = '/movies';

export const MOVIES_GET_REQUEST = 'MOVIES_GET_REQUEST';
export const MOVIES_GET_REQUEST_SUCCESS = 'MOVIES_GET_REQUEST_SUCCESS';
export const MOVIES_GET_REQUEST_ERROR = 'MOVIES_GET_REQUEST_ERROR';

export const moviesGetRequest = () => ({
    type: MOVIES_GET_REQUEST,
});

export const moviesGetRequestSuccess = ({ movies, ratings }) => ({
    type: MOVIES_GET_REQUEST_SUCCESS,
    payload: {
        movies,
        ratings,
    }
});

export const moviesGetRequestError = error => ({
    type: MOVIES_GET_REQUEST_ERROR,
    payload: {
        error,
    }
});

export const loadMovies = () => asyncActionCreator(
    {
        onRequest: moviesGetRequest,
        onSuccess: moviesGetRequestSuccess,
        onFailure: moviesGetRequestError
    },
    {
        path: MOVIES_PATH,
        method: 'get',
    }
);
