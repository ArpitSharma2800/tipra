const initState = {
  isAuthenticated: false,
  isAuthenticating: sessionStorage.getItem('key'),
  loading: false,
  data: [],
  error: ''
}

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        data: action.payload,
        error: ''
      }
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default loginReducer
