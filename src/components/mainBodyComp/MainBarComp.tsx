import CategoryFilterDropdownComponent from "./DropdownFilterComponent/CategoryFilterDropdownComponent";
import TimeRangeComp from "./DropdownFilterComponent/TimeRangeComp";
import GraphComp from "./GraphComponent/GraphComp";
import ComplaintsCountComp from "./HeaderCountComponent/ComplaintsCountComp";

const MainComp = () => {
  return (
    <div className="mainBgColor m-0 p-5">
      <div className="container-fluid d-flex flex-row p-5 m-0">
        <TimeRangeComp/>
        <CategoryFilterDropdownComponent/>
      </div>
      <ComplaintsCountComp />
      <GraphComp />
    </div>
  );
};

export default MainComp;
