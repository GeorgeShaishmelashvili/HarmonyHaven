import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import EarphonePage from "./pages/CategoryPage/Earphone";
import HeadphonePage from "./pages/CategoryPage/Headphone";
import SpeakerPage from "./pages/CategoryPage/Speaker";
import Product from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage/Checkout";

import ScrollButton from "./components/ScrollButton";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/speaker/:slug" element={<Product />} />
        <Route path="/headphone" element={<HeadphonePage />} />
        <Route path="/headphone/:slug" element={<Product />} />
        <Route path="/earphone" element={<EarphonePage />} />
        <Route path="/earphone/:slug" element={<Product />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <ScrollButton />
    </Router>
  );
}

export default App;
