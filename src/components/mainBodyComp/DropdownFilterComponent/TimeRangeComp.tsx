const TimeRangeComp = () => {
  return (
    <div className="d-flex flex-column p-0 m-2">
      <label className="dropdown-css">Time range </label>

      <select>
        <option value="all_time">all time</option>
        <option value="this_week">this week</option>
        <option value="this_month">this month</option>
        <option value="this_year">this year</option>
      </select>
    </div>
  );
};

export default TimeRangeComp;
