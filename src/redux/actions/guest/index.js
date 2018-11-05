import { call, put, takeLatest } from 'redux-saga/effects';
import { getGuestReletedPg } from '../../network';
import {
    GUEST_LIST_REQUEST,
    NETWORK_ERROR,
    GUEST_LIST_SUCESSS,
} from '../../../config/Constants';

function* getGuest(params){
    try {
        const response = yield getGuestReletedPg(params.params)
        yield put({
            type : GUEST_LIST_SUCESSS,
            data : response.data
        })
    } catch (error) {
        yield put({
            type: NETWORK_ERROR,
            error: error.data,
        })
    }
}

function* guestWatcher(){
    yield takeLatest(GUEST_LIST_REQUEST, getGuest)
}


export default guestWatcher;