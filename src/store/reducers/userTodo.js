import { 
    GET_USER_TODO_ITEMS,
    GET_USER_TODO_ITEMS_SUCCESS,
    GET_USER_TODO_ITEMS_FAIL,
} from '../actions/actionTypes';

const initState = {
    todoList: [],
    loading: false,
    error: ""
}

const reducer = (state = initState, action) => {

    switch(action.type) {
        case GET_USER_TODO_ITEMS:
            return { ...state, loading: true };
        case GET_USER_TODO_ITEMS_SUCCESS:
            return {
                todoList: action.payload.data,
                loading: false
            }
        case GET_USER_TODO_ITEMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }

}

export default reducer;
