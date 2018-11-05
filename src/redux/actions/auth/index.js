
// import {
//     LOGIN_REQUEST,
//     REGISTER_REQUEST
// } from '../../../config/Constants';

// export const loginUser = (params) => {
//     return {type:LOGIN_REQUEST, params}
// }

// export const registerUser = (params) => {
//     return {type:REGISTER_REQUEST,params}
// }

// export const loginUser = (params) => {

//     return dispatch => {
//         dispatch({type:START_NETWORK_CALL})
//         login(params)
//             .then((response) => {
//                 console.log(response)
//                 localStorage.setItem("token", response.token);
//                 localStorage.setItem("auth", JSON.stringify(response.data))
//                 dispatch({
//                     type : LOGIN_SUCESS,
//                     data : response.data,
//                     token: response.token
//                 })
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: LOGIN_ERROR,
//                     message: "Email and password is incorrect !",
//                 })
//             })
//     }
// }

// export const registerUser = (params) => {

//     return dispatch => {
//         dispatch({type:START_NETWORK_CALL})

//         register(params)
//             .then((response) => {
//                 localStorage.setItem("token", response.token);
//                 localStorage.setItem("auth", JSON.stringify(response.data))
//                 dispatch({
//                     type : REGISTER_SUCESS,
//                     data : response.data,
//                     token: response.token
//                 })
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: AUTH_ERROR,
//                     message: 'Email already exist please try diffrent !',
//                 })
//             })
//     }
// }

