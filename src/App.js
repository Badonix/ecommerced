import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/footer";
import Main from "./pages/main";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { AboutUs } from "./pages/AboutUs";
import Panel from "./pages/panel/panel";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/sales/:id" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
