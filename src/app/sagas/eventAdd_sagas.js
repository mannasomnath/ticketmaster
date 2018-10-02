import { takeLatest, call, put } from "redux-saga/effects";

// events saga: watches for actions dispatched to the store, starts worker saga
export function* eventAddSagas() {
  yield takeLatest("API_ADD_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function addEvent(event) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        let events = [];
        if (localStorage.getItem("events")) {
          events = JSON.parse(localStorage.getItem("events"));
        }
        events = [...events, event];
        localStorage.setItem("events", JSON.stringify(events));
        resolve();
      } catch (error) {
        reject(error);
      }
    }, 3000);
  })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(addEvent, action.event);
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_ADD_SUCCESS" });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_ADD_FAILURE", error });
  }
}