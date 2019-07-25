import { API_HOST } from '../config/config';

export const asyncActionCreator = (actions, passedOptions) => dispatch => {
    dispatch(actions.onRequest());

    return fetch(`${API_HOST}${passedOptions.path}`, {method: passedOptions.method})
        .then(response => {
            if (!response.ok) {
                return Promise.reject('An error occurs during request');
            }

            return response;
        })
        .then(response => response.json())
        .then(response => dispatch(actions.onSuccess(response)))
        .catch(err => dispatch(actions.onFailure(err)));
};
