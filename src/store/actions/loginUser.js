import { GET_CURRENT_USER } from './actionTypes';

export const getCurrentUser = (userId) => {
    return {
        type: GET_CURRENT_USER,
        payload: {
            request: {
                url: `/users/${userId}`
            }
        }
    };
}
