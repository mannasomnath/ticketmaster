const initialState = {
    userType: 'organizer'
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'CHANGE_USER_TYPE': 
            newState.userType = action.payload;
            break;
    }
    return newState;
}