import CategoryFilterDropdownComponent from "./Filters/CategoryFilter/CategoryFilterDropdownComponent";
import TimeRangeComp from "./Filters/TimeRangeFilter/TimeRangeComp";
import GraphComp from "./BarGraph/BarGraph";
import ComplaintsCountComp from "./Count/Count";

const MainComp = () => {
  return (
    <div className="mainBgColor m-0 p-5">
      <div className="container-fluid d-flex flex-row p-5 m-0">
        <TimeRangeComp />
        <CategoryFilterDropdownComponent />
      </div>
      <ComplaintsCountComp />
      <GraphComp />
    </div>
  );
};

export default MainComp;
