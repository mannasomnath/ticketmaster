// action types
const EVENT_LOADING = "EVENT_LOADING";
const EVENT_LOADED = "EVENT_LOADED";
const EVENT_LOAD_ERR = "EVENT_LOAD_ERR";

// reducer with initial state
const initialState = {
  event_loading: false,
  event: null,
  event_load_err: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENT_LOADING:
      return { ...state, event_loading: true, event_load_err: null };
    case EVENT_LOADED:
      return { ...state, event_loading: false, event: action.event };
    case EVENT_LOAD_ERR:
      return { ...state, event_loading: false, event: null, event_load_err: action.err };
    default:
      return state;
  }
}