import { takeLatest, call, put } from "redux-saga/effects";

// events saga: watches for actions dispatched to the store, starts worker saga
export function* eventsSagas() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchEvents() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        const events = JSON.parse(localStorage.getItem("events"));
        resolve(events);
      } catch (error) {
        reject(error);
      }
    }, 3000);
  })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchEvents);
    const events = response;
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", events });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}