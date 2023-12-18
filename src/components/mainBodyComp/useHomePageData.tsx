import { useQuery } from "react-query";
import baseApiUrl from "../../baseApi/baseApiUrl";

interface HomePageData {
  Data: { issue_type: string; issues: number }[];
}

const useHomePageData = () => {
  const { data, error, isLoading } = useQuery<HomePageData, Error>({
    queryKey: ["HomePageData"],
    queryFn: () =>
      baseApiUrl
        .get("get_issue_status_graph_data")
        .then((response) => response.data),
  });

  return { data, error, isLoading };
};

export default useHomePageData;
