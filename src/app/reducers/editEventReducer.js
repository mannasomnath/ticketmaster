// action types
const API_EDIT_REQUEST = "API_EDIT_REQUEST";
const API_EDIT_SUCCESS = "API_EDIT_SUCCESS";
const API_EDIT_FAILURE = "API_EDIT_FAILURE";
const RESET_VIEW = "RESET_VIEW";

// reducer with initial state
const initialState = {
  edit_event: false,
  edit_event_success: false,
  edit_event_err: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case API_EDIT_REQUEST:
      return { ...state, edit_event: true, edit_event_err: null };
    case API_EDIT_SUCCESS:
      return { ...state, edit_event: false, edit_event_success: true };
    case API_EDIT_FAILURE:
      return { ...state, edit_event: false, edit_event_success: false, edit_event_err: action.error };
    case RESET_VIEW:
      return { ...state, edit_event: false, edit_event_success: false, edit_event_err: null };
    default:
      return state;
  }
}
