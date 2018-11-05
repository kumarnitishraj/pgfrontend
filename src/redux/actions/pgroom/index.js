import { call, put, takeLatest } from 'redux-saga/effects';
import { getPgLists } from '../../network';
import {
    PG_LIST_SUCESS,
    NETWORK_ERROR,
    PG_LIST_REQUEST
} from '../../../config/Constants';

function* getPgs(params){
    
    try {
        const response = yield getPgLists(params.params)
        yield put({
            type : PG_LIST_SUCESS,
            data : response.data
        })
    } catch (error) {
        yield put({
            type: NETWORK_ERROR,
            error: error.data,
        })
    }

}
function* pgWatcher(){
    yield takeLatest(PG_LIST_REQUEST, getPgs);
}
export default pgWatcher;