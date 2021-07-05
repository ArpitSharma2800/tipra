
const local = {
  LOGIN: {
    BASE_URL: process.env.REACT_APP_API_BASE,
    DATA: '/signin'
  }
}

const dev = {
  LOGIN: {
    BASE_URL: process.env.REACT_APP_API_BASE,
    DATA: '/login'
  },
  LOGOUT: {
    BASE_URL: process.env.REACT_APP_API_BASE,
    DATA: '/logout'
  },
  LOGOUT_URI: {
    BASE: 'https://letusorder.in/'
  }
}

const uat = {
  LOGOUT: {
    BASE_URL: process.env.REACT_APP_API_BASE,
    DATA: '/logout'
  },
  LOGOUT_URI: {
    BASE: 'https://letusorder.in/'
  }
}

const prod = {
  LOGOUT: {
    BASE_URL: process.env.REACT_APP_API_BASE,
    DATA: '/logout'
  },
  LOGOUT_URI: {
    BASE: 'https://letusorder.in/'
  }
}

export const CONFIG = (() => {
  let environment
  if (process.env.REACT_APP_ENVIRONMENT === 'uat') {
    environment = uat
    return environment
  }
  if (process.env.REACT_APP_ENVIRONMENT === 'prod') {
    environment = prod
    return environment
  }
  if (process.env.REACT_APP_ENVIRONMENT === 'local') {
    environment = local
    return environment
  } else {
    environment = dev
    return environment
  }
})()
