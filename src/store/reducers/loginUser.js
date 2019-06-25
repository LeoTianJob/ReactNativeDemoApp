import { 
    GET_LOGIN_USER,
    GET_LOGIN_USER_SUCCESS,
    GET_LOGIN_USER_FAIL,
    RESET_LOGIN_USER,
    GET_LOGIN_USER_IMG,
    GET_LOGIN_USER_IMG_SUCCESS,
    GET_LOGIN_USER_IMG_FAIL
} from '../actions/actionTypes';

// Just use redux for handling user information
const initState = {
    userInfo: {
        id: 0,
        name: "",
        username: "",
        email: "",
        url: "",
        thumbnailUrl: "",
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
    loadingUser: false,
    loadingImg: false,
    error: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_LOGIN_USER:
            return {...state, loadingUser: true};
        case GET_LOGIN_USER_SUCCESS:
            return {
                ...state,
                userInfo: {
                    url: state.userInfo.url,
                    thumbnailUrl: state.userInfo.thumbnailUrl,
                    ...action.payload.data
                },
                loadingUser: false
            };
        case GET_LOGIN_USER_FAIL:
            return {
                userInfo: initState,
                loadingUser: false,
                error: action.error
            };
        case RESET_LOGIN_USER:
            return {...initState};
        case GET_LOGIN_USER_IMG: 
            return {...state, loadingImg: true};
        case GET_LOGIN_USER_IMG_SUCCESS:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    url: action.payload.data[0].url,
                    thumbnailUrl: action.payload.data[0].thumbnailUrl
                },
                loadingImg: false
            };
        case GET_LOGIN_USER_IMG_FAIL:
            return {
                userInfo: initState,
                loadingImg: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;
