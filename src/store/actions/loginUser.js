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

// This query method is incorrect from data structure perspective, 
// in order to load online images for user's profile,
// for simplify the query, I just force to use photo whose id equals to user id as user's profile image
// the correct way is find out the user's album and pick one photo from there.

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
