import { GET_USER_TODO_ITEMS } from './actionTypes';

export const getUserTodoItems = (userId) => {
    return {
        type: GET_USER_TODO_ITEMS,
        payload: {
            request: {
                url: `/todos?userId=${userId}`
            }
        }
    };
}
