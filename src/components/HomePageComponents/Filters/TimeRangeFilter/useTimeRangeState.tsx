import { create } from "zustand";

interface TimeRangeStateInterface {
  timeRange: string ;
  onClickingOnTimeRange: (category: string ) => void;
}

const useTimeRangeState = create<TimeRangeStateInterface>((setState) => ({
  timeRange: "",
  onClickingOnTimeRange: (timeRange) =>
    setState(() => ({ timeRange: timeRange })),
}));

export default useTimeRangeState;
