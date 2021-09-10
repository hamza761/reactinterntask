import axios from "axios";

export const manageCountries = () => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/countries?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        dispatch({
          type: "set_countries",
          payload: { ...res.data, _err: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: "set_countries",
          payload: { err, _err: true },
        });
        alert(err);
      });
  };
};

export const manageEvents = (country) => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/holidays?api_key=${process.env.REACT_APP_API_KEY}&country=${country}&year=2021`
      )
      .then((res) => {
        dispatch({
          type: "set_holidays",
          payload: { ...res.data, _err: false },
        });
      })
      .catch((err) => {
        dispatch({
          type: "set_holidays",
          payload: { err, _err: true },
        });
        alert(err);
      });
  };
};

export const changeLoadingState = (payload) => {
  return (dispatch) => {
    dispatch({ type: "change_loading_state", payload });
  };
};
