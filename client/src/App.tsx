import { Toaster } from "./components/ui/sonner";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/router";

const App = () => {
  return (
    <BrowserRouter>
      {/* app routes  */}
      <AppRoutes />

      {/* sonner component  */}
      <Toaster position="top-right" />
    </BrowserRouter>
  );
};

export default App;
