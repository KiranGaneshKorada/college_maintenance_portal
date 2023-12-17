import baseApiUrl from "../../../baseApi/baseApiUrl";
import { useEffect, useState } from "react";

export interface GraphDataFromApi {
  Data: { issue_type: string; issues: number }[];
}

function useGraphData() {
  const [graphDataFromApi, setGraphDataFromApi] =
    useState<GraphDataFromApi | null>(null);

  const [error, setError] = useState(null);

  useEffect(()=>{baseApiUrl
    .get("get_issue_status_graph_data")
    .then((response) => {
      setGraphDataFromApi(response.data);
      setChartData({
        labels: response.data.Data.map(
          (each_issue: { issue_type: string; issues: number }) =>
            each_issue.issue_type
        ),
        datasets: [
          {
            label: "Issues",
            data: response.data.Data.map(
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
      });
    })
    .catch((error) => setError(error));},[])
   

  const [chartData, setChartData] = useState({
    labels: graphDataFromApi?.Data.map((each_issue) => each_issue.issue_type),
    datasets: [
      {
        label: "Issues",
        data: graphDataFromApi?.Data.map(
          (each_issue) => each_issue.issues 
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
  });

  return { chartData, error,graphDataFromApi };
}

export default useGraphData;
