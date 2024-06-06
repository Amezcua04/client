import { useFetch } from "./useFetch";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home"
import Navbar from "./scenes/global/Navbar";
import Details from "./scenes/details/Details";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { items, loading, error } = useFetch(
    "https://popular-nurture-36b9643220.strapiapp.com/api/vehiculos"
  );

  return (
  <div className="app">
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehiculos/:url" element={<Details />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
