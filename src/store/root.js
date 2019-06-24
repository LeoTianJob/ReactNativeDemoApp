const initState = {
    loginUser: {
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
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;