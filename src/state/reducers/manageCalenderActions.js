const initialState = {
  loading: null,
  holidays: [],
  countries: [{ country_name: "Pakistan", "iso-3166": "PK" }],
};
function toCalenderForm(arr) {
  return arr.map((el) => ({
    title: el.name,
    start: new Date(el.date.iso),
    end: new Date(el.date.iso),
  }));
}
export const calenderActionsManager = (state = initialState, action) => {
  switch (action.type) {
    case "set_holidays":
      if (action.payload._err) {
        return { ...state, loading: false };
      } else {
        console.log(action.payload);
        return {
          ...state,
          holidays: toCalenderForm(action.payload["response"]["holidays"]),
          loading: false,
        };
      }
    case "set_countries":
      if (action.payload._err) {
        return { ...state, loading: false };
      } else {
        return {
          ...state,
          countries: action.payload["response"]["countries"],
          loading: false,
        };
      }
    case "change_loading_state":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
