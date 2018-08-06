import axios from 'axios'
import { request } from './helpers'

export const GET_USER = 'GET_USER'
export const GET_AUTH = 'GET_AUTH'
//export const GET_ALL_USERS = 'GET_ALL_USERS'

export const getAuth = () => (
  dispatch => {
    axios.get(`${API}/auth/`)
    .then((response) => {
      dispatch({
        type: GET_AUTH,
        payload: response.data.data
      })
    })
  }
)

export const getUser = () => (
  dispatch => {
    axios.get(`${API}/users/`)
    .then((response) => {
      dispatch({
        type: GET_USER,
        payload: response.data.data
      })
    })
  }
)

// export const visionAPI = (body) => (
//   dispatch => {
//     axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${googleAPIkey}`, body)
//     .then((response) => {
//       dispatch({
//         type: POST_GOOGLE_API,
//         payload: response.data
//       })
//     })
//     .catch((error) => console.log(`Vision API Error - ${error}`))
//   }
// )


// export const getAllUsers = () => (
//   dispatch => {
//     axios.get(`${API}/users/`)
//     .then((response) => {
//       dispatch({
//         type: GET_ALL_USERS,
//         payload: response.data.data
//       })
//     })
//   }
// )
