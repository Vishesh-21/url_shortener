import { Toaster } from "./components/ui/sonner";
import { HomePage } from "./pages/home-page";

const App = () => {
  return (
    <>
      {/* page components  */}
      <HomePage />

      {/* sonner component  */}
      <Toaster position="top-right"/>
    </>
  );
};

export default App;
