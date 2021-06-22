export const fetchUserRequestDashboard = () => {
  return {
    type: "FETCH_USERS_REQUEST_DASHBOARD",
  };
};
//increment
export const fetchUserSuccessCard1 = () => {
  return {
    type: "FETCH_USERS_SUCCESS_DASHBOARD_CARD1",
  };
};
export const fetchUserSuccessCard2 = () => {
  return {
    type: "FETCH_USERS_SUCCESS_DASHBOARD_CARD2",
  };
};
export const fetchUserSuccessCard3 = () => {
  return {
    type: "FETCH_USERS_SUCCESS_DASHBOARD_CARD3",
  };
};
export const fetchUserSuccessCard4 = () => {
  return {
    type: "FETCH_USERS_SUCCESS_DASHBOARD_CARD4",
  };
};
//decrement
export const fetchUserDecCard1 = () => {
  return {
    type: "FETCH_USERS_DEC_DASHBOARD_CARD1",
  };
};
export const fetchUserDecCard2 = () => {
  return {
    type: "FETCH_USERS_DEC_DASHBOARD_CARD2",
  };
};
export const fetchUserDecCard3 = () => {
  return {
    type: "FETCH_USERS_DEC_DASHBOARD_CARD3",
  };
};
export const fetchUserDecCard4 = () => {
  return {
    type: "FETCH_USERS_DEC_DASHBOARD_CARD4",
  };
};
//null
export const fetchUserDeleteData = (error) => {
  return {
    type: "FETCH_USERS_NULL_DASHBOARD",
  };
};
export const menuEmpty = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequestDashboard());
    try {
      dispatch(fetchUserDeleteData());
    } catch (error) {
      console.log("clear cart didn't work");
    }
  };
};

export const menucard = (num) => {
  return async (dispatch) => {
    dispatch(fetchUserRequestDashboard());
    try {
      if (num == 1) {
        dispatch(fetchUserSuccessCard1());
      } else if (num == 2) {
        dispatch(fetchUserSuccessCard2());
      } else if (num == 3) {
        dispatch(fetchUserSuccessCard3());
      } else if (num == 4) {
        dispatch(fetchUserSuccessCard4());
      }
    } catch (error) {
      console.log("didn't work");
    }
  };
}

export const menucardDec = (num) => {
  return async (dispatch) => {
    dispatch(fetchUserRequestDashboard());
    try {
      if (num == 1) {
        dispatch(fetchUserDecCard1());
      } else if (num == 2) {
        dispatch(fetchUserDecCard2());
      } else if (num == 3) {
        dispatch(fetchUserDecCard3());
      } else if (num == 4) {
        dispatch(fetchUserDecCard4());
      }
    } catch (error) {
      console.log("didn't work");
    }
  };
}