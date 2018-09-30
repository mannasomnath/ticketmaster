import { takeLatest, call, put } from "redux-saga/effects";

// events saga: watches for actions dispatched to the store, starts worker saga
export function* eventEditSagas() {
  yield takeLatest("API_EDIT_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function editEvent(event) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            try {
                let events = JSON.parse(localStorage.getItem("events"));
                let index = events.findIndex((evt => evt.event_id == event.id));
                events = [
                    ...events.slice(0, index),
                    event,
                    ...events.slice(index + 1)
                ]
                localStorage.setItem("events", JSON.stringify(events));
                resolve();
            } catch(error) {
                reject(error);
            }           
        }, 3000);
    })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(editEvent, action.event);
    console.log("Inside workerSaga")
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_EDIT_SUCCESS" });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_EDIT_FAILURE", error });
  }
}