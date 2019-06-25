import { 
    GET_CURRENT_USER,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL,
    RESET_CURRENT_USER
} from '../actions/actionTypes';

// Just use redux for handling user information
const initState = {
    userInfo: {
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
            street: null,
            suite: null,
            city: null,
            zipcode: null,
            geo: {
                lat: null,
                lng: null
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    },
    loading: false,
    error: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {...state, loading: true};
        case GET_CURRENT_USER_SUCCESS:
            return {
                userInfo: action.payload.data,
                loading: false
            };
        case GET_CURRENT_USER_FAIL:
            return {
                userInfo: initState,
                loading: false,
                error: action.error
            };
        case RESET_CURRENT_USER:
            return {...initState};
        default:
            return state;
    }
};

export default reducer;
