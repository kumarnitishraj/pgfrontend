import { call, put, takeLatest } from 'redux-saga/effects';
import { login, register } from '../../network';
import {
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    LOGIN_SUCESS,
    REGISTER_SUCESS,
    AUTH_ERROR,
    LOGIN_ERROR,
    START_NETWORK_CALL
} from '../../../config/Constants';

function* loginUser(params){
    
    try {
        put({type:START_NETWORK_CALL})
        const response = yield login(params.params)
        yield put({
            type : LOGIN_SUCESS,
            data : response.data,
            token: response.token
        })
        yield localStorage.setItem("token", response.token);
        yield localStorage.setItem("auth", JSON.stringify(response.data))
    } catch (error) {
        yield put({
            type: LOGIN_ERROR,
            message: "Email and password is incorrect !",
        })
    }

}

function* registerUser(params){
    try {
        put({type:START_NETWORK_CALL})
        const response = yield call(register, params.params);
        yield put({
            type : REGISTER_SUCESS,
            data : response.data,
            token: response.token
        })
        yield localStorage.setItem("token", response.token);
        yield localStorage.setItem("auth", JSON.stringify(response.data))
    } catch (error) {
        yield put({
            type: AUTH_ERROR,
            message: 'Email already exist please try diffrent !',
        })
    }
}

function* authWatcher(){
    // yield takeLatest(LOGIN_REQUEST, loginUser)
    yield takeLatest(REGISTER_REQUEST, registerUser)
    yield takeLatest(LOGIN_REQUEST, loginUser)
}


export default authWatcher;