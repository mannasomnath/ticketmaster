import { takeLatest, call, put } from "redux-saga/effects";

// events saga: watches for actions dispatched to the store, starts worker saga
export function* eventLoadSagas() {
  yield takeLatest("API_LOAD_EVENT_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function loadEvent(event_id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        let events = JSON.parse(localStorage.getItem("events"));
        let event = events.filter((evt => evt.event_id == event_id))[0];
        resolve(event);
      } catch (error) {
        reject(error);
      }
    }, 3000);
  })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(loadEvent, action.event_id);
    const event = response;
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_LOAD_EVENT_SUCCESS", event });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_LOAD_EVENT_FAILURE", error });
  }
}