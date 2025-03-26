import { Toaster } from "./components/ui/sonner";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import WeatherDashboard from "./pages/WeatherDashboard";
import CityPage from "./pages/CityPage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/city/:cityName" element={<CityPage />} />
        </Routes>
      </Layout>
      <Toaster richColors />
    </>
  );
};

export default App;
