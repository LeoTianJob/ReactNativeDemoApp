import { GET_LOGIN_USER, GET_LOGIN_USER_IMG } from './actionTypes';

export const getLoginUser = (userId) => {
    return {
        type: GET_LOGIN_USER,
        payload: {
            request: {
                url: `/users/${userId}`
            }
        }
    };
}

export const getLoginUserImg = (userId) => {
    return {
        type: GET_LOGIN_USER_IMG,
        payload: {
            request: {
                url: `/photos?id=${userId}`
            }
        }
    }
    
} 
