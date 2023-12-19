import { useQuery } from "react-query";
import baseApiUrl from "../../baseApi/baseApiUrl";
import useCategoryState from "./Filters/CategoryFilter/useCategoryState";
import useTimeRangeState from "./Filters/TimeRangeFilter/useTimeRangeState";

interface HomePageData {
  Data: { issue_type: string; issues: number }[];
}

const useHomePageData = () => {
  const { category } = useCategoryState();
  const { timeRange } = useTimeRangeState();

  const { data, error, isLoading } = useQuery<HomePageData, Error>({
    queryKey: ["HomePageData", category, timeRange],
    queryFn: () =>
      baseApiUrl
        .get("get_issue_status_graph_data", {
          params: { category: category, time_range: timeRange },
        })
        .then((response) => response.data),
  });

  return { data, error, isLoading };
};

export default useHomePageData;
