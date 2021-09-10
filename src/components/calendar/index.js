import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./style.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ld from "../../images/loading.gif";
import * as actionCreators from "../../state/action-creators/calenderActions";
import { bindActionCreators } from "redux";
const localizer = momentLocalizer(moment);
export const HolidaysCalendar = (props) => {
  const allData = useSelector((state) => state.allData);
  const [country, setCountry] = useState("PK");
  console.log(allData);
  const dispatch = useDispatch();
  const { manageCountries, manageEvents, changeLoadingState } =
    bindActionCreators(actionCreators, dispatch);
  function countryChanged(e) {
    setCountry(e.currentTarget.value);
    changeLoadingState(true);
    manageEvents(e.currentTarget.value);
  }
  useEffect(() => {
    changeLoadingState(true);
    manageCountries();
    manageEvents(country);
  }, []);
  return (
    <div>
      {allData.loading && <img src={ld} className="_img" />}
      <div className="select_area">
        <select
          disabled={allData.loading}
          value={country}
          onChange={(e) => {
            countryChanged(e);
          }}
        >
          {allData.countries.map((country) => (
            <option key={country["uuid"]} value={country["iso-3166"]}>
              {country["country_name"]}
            </option>
          ))}
        </select>
      </div>
      <Calendar
        localizer={localizer}
        defaultView="month"
        events={allData.holidays}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
