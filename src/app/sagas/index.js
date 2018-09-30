import { all } from 'redux-saga/effects';
import { eventsSagas } from './events_sagas'
import { eventFetchSagas } from './eventFetch_sagas'
import { eventAddSagas } from './eventAdd_sagas'
import { eventEditSagas } from './eventEdit_sagas'

export default function *watchAll() {
    yield all([
        eventsSagas(),
        eventFetchSagas(),
        eventAddSagas(),
        eventEditSagas()
    ]);
}