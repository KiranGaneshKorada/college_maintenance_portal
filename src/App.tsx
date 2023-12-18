import { QueryClient, QueryClientProvider } from "react-query";
import MainComp from "./components/mainBodyComp/MainBarComp";
import Navbar from "./components/navbarComponent/Navbar";

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
