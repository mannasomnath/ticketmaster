import { combineReducers } from 'redux';
import userType from './userTypeReducer';
import events from './eventReducer';
import eventsManipulate from './eventsManipulate';
import addEvent from './addEventReducer';
import editEvent from './editEventReducer';
import loadEditEvent from './loadEditEventReducer';

export default combineReducers({
  userType: userType,
  events: events,
  eventsManipulate: eventsManipulate,
  addEvent: addEvent,
  editEvent: editEvent,
  loadEditEvent: loadEditEvent
});