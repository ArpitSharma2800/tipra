
import API from '../../utils/API'
import { CONFIG } from '../../utils/constant'

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USERS_REQUEST'
  }
}
export const fetchUserSuccess = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: users
  }
}
export const fetchUserFailure = (error) => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error
  }
}

export const loginAction = (data) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest)
    // const dataValue = JSON.stringify(data)
    try {
      const _API = API(CONFIG.LOGIN.BASE_URL)
      const response = await _API.post(CONFIG.LOGIN.DATA, data)
      // console.log("Returned data:", response);
      if (response) {
        if (response.status === 200) {
          // console.log(response.data);
          const users = response.data
          dispatch(fetchUserSuccess(users))
          sessionStorage.setItem('key', users.token)
          sessionStorage.setItem('address', users.address)
          sessionStorage.setItem('name', users.username)
        } else {
          // console.log("NOT FOUND");
          dispatch(fetchUserFailure(response.status))
        }
      }
    } catch (error) {
      // console.log(`API request failed for POST file upload : ${error}`);
      // console.log(error);
      dispatch(fetchUserFailure(error))
    }
  }
}
