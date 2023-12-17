import useGraphData from "../GraphComponent/useGraphData";


const ComplaintsCountComp = () => {
    const { graphDataFromApi } = useGraphData();

  return (
    <div className="container-fluid d-flex flex-row m-0 p-5">
      {graphDataFromApi?.Data.map((each_issue_type) => (
        <div className=" card container-fluid m-0 mx-5 p-0">
          <div className="card-header">Complaints Received</div>
          <div className="card-body">
            <p>{each_issue_type.issues}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComplaintsCountComp;
