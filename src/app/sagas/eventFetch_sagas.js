import { takeLatest, call, put } from "redux-saga/effects";

// events saga: watches for actions dispatched to the store, starts worker saga
export function* eventFetchSagas() {
  yield takeLatest("EVENT_LOADING", workerSaga);
}

// function that makes the api request and returns a Promise for response
function getEventById(event_id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        const events = JSON.parse(localStorage.getItem("events"));
        const event = events.filter(event => event.event_id == event_id)[0];
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
    const response = yield call(getEventById, action.event_id);
    const event = response;
    // dispatch a success action to the store with the new dog
    yield put({ type: "EVENT_LOADED", event });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "EVENT_LOAD_ERR", error });
  }
}