import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import useHomePageData from "../useHomePageData";



Chart.register(CategoryScale);

const GraphComp = () => {



  const {data,error,isLoading}=useHomePageData()

 

  

  return (
    <>
      {error && <h1>"error occurred"</h1>}
      {!error && (
        <div className="chart-container container-fluid  p-5">
          <h2 style={{ textAlign: "center" }}>Complaints Graph</h2>
          <Bar
            data={{
              labels: data?.Data.map(
                (each_issue: { issue_type: string; issues: number }) =>
                  each_issue.issue_type
              ),
              datasets: [
                {
                  label: "Issues",
                  data: data?.Data.map(
                    (each_issue: { issue_type: string; issues: number }) =>
                      each_issue.issues
                  ),
                  backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                  ],
                  borderColor: "black",
                  borderWidth: 2,
                },
              ],
            }}
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
