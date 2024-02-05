import useTimeRangeState from "./useTimeRangeState";
import moment from "moment";

const TimeRangeComp = () => {
  const { onClickingOnTimeRange } = useTimeRangeState();
  const date=new Date();
  return (
    <div className="d-flex flex-column p-0 m-2">
      <label className="dropdown-css">Time range </label>

      <select
        onChange={(e) => {
          onClickingOnTimeRange(e.currentTarget.value);
          console.log(e.target.value)
          e.preventDefault();
        }}
      >
        <option value="">all time</option>
        <option value={moment(date).startOf("week").format("YYYY-MM-DD")}>
          this week
        </option>
        <option value={moment(date).startOf("month").format("YYYY-MM-DD")}>
          this month
        </option>
        <option value={moment(date).startOf("year").format("YYYY-MM-DD")}>
          this year
        </option>
      </select>
    </div>
  );
};

export default TimeRangeComp;
