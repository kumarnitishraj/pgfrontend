import { getPgLists, register } from '../../network';
import {
    START_NETWORK_CALL,
    NETWORK_ERROR,
    LOGIN_SUCESS,
    PG_LIST_SUCESS
} from '../../../config/Constants';


export const getPgs = (params) => {

    return dispatch => {
        dispatch({type:START_NETWORK_CALL})
        getPgLists(params)
            .then((response) => {
            
                dispatch({
                    type : PG_LIST_SUCESS,
                    data : response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: NETWORK_ERROR,
                    error: error.data,
                })
            })
    }
}

// export const registerUser = (params) => {

//     return dispatch => {
//         dispatch({type:START_NETWORK_CALL})

//         register(params)
//             .then((response) => {
//                 localStorage.setItem("token", response.token);
//                 localStorage.setItem("auth", response.data)
//                 dispatch({
//                     type : REGISTER_SUCESS,
//                     data : response.data,
//                     token: response.token
//                 })
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: NETWORK_ERROR,
//                     error: error.data,
//                 })
//             })
//     }
// }

