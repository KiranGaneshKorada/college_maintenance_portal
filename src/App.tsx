import { QueryClient, QueryClientProvider } from "react-query";
import MainComp from "./components/HomePageComponents/HomePage";
import Navbar from "./components/Navbar/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <MainComp />
    </QueryClientProvider>
  );
}

export default App;
