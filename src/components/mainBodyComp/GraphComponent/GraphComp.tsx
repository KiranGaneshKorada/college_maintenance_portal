import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
// import {  useEffect, useState } from "react";
import useGraphData from "./useGraphData";



Chart.register(CategoryScale);

const GraphComp = () => {


  // useEffect(() => {
  //   setChartData({
  //     labels: graphDataFromApi?.Data.map((each_issue) => each_issue.issue_type),
  //     datasets: [
  //       {
  //         label: "Issues",
  //         data: graphDataFromApi?.Data.map(
  //           (each_issue) => each_issue.issues + 50
  //         ),
  //         backgroundColor: [
  //           "rgba(75,192,192,1)",
  //           "#50AF95",
  //           "#f3ba2f",
  //           "#2a71d0",
  //         ],
  //         borderColor: "black",
  //         borderWidth: 2,
  //       },
  //     ],
  //   });
  // }, []);
  

  const {chartData,error} =useGraphData();

  // const [chartData,setChartData] = useState({
  //   labels: graphDataFromApi?.Data.map((each_issue) => each_issue.issue_type),
  //   datasets: [
  //     {
  //       label: "Issues",
  //       data: graphDataFromApi?.Data.map(
  //         (each_issue) => each_issue.issues + 50
  //       ),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  

  return (
    <>
      {error && <h1>"error occurred"</h1>}
      {!error && (
        <div className="chart-container container-fluid  p-5">
          <h2 style={{ textAlign: "center" }}>Complaints Graph</h2>
          <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "No of solved complaints and unsolved complaints",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default GraphComp;
