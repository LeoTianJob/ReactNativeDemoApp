import { 
    GET_CURRENT_USER,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL
} from './actionTypes';

export const getCurrentUser = (userId) => {
    console.log(' Action -----> getCurrentUser ')
    return {
        type: GET_CURRENT_USER,
        payload: {
            request: {
                url: `/users/${userId}`
            }
        }
    };
}
