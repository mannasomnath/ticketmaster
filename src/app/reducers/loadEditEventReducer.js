// action types
const API_LOAD_EVENT_REQUEST = "API_LOAD_EVENT_REQUEST";
const API_LOAD_EVENT_SUCCESS = "API_LOAD_EVENT_SUCCESS";
const API_LOAD_EVENT_FAILURE = "API_LOAD_EVENT_FAILURE";

// reducer with initial state
const initialState = {
    load_event: false,
    load_event_success: {},
    load_event_err: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case API_LOAD_EVENT_REQUEST:
          return { ...state, load_event: true, load_event_err: null };
        case API_LOAD_EVENT_SUCCESS:
          return { ...state, load_event: false, load_event_success: action.event };
        case API_LOAD_EVENT_FAILURE:
          return { ...state, load_event: false, load_event_success: {}, load_event_err: action.error };
        default:
          return state;
    }
}
