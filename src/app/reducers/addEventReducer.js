// action types
const API_ADD_REQUEST = "API_ADD_REQUEST";
const API_ADD_SUCCESS = "API_ADD_SUCCESS";
const API_ADD_FAILURE = "API_ADD_FAILURE";
const RESET_ADD = "RESET_ADD";

// reducer with initial state
const initialState = {
    add_event: false,
    add_event_success: false,
    add_event_err: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case API_ADD_REQUEST:
          return { ...state, add_event: true, add_event_err: null };
        case API_ADD_SUCCESS:
          return { ...state, add_event: false, add_event_success: true };
        case API_ADD_FAILURE:
          return { ...state, add_event: false, add_event_success: false, add_event_err: action.error };
        case RESET_ADD:
          return { ...state, add_event: false, add_event_success: false, add_event_err: null };
        default:
          return state;
    }
}
