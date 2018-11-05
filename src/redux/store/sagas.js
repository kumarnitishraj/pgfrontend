import authWatcher from "../actions/auth/sagas";
import pgWatcher from '../actions/pgroom';
import guest from '../actions/guest';

export default function* IndexSaga () {
    yield[
        authWatcher(),
        pgWatcher(),
        guest()
    ]
}