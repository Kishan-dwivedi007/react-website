import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Products from "./Pages/Products.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import mens_banner from "./Components/assets/banner_mens.png";
import women_banner from "./Components/assets/banner_women.png";
import kids_banner from "./Components/assets/banner_kids.png";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={mens_banner} category="men" />}
            />
            <Route
              path="/womens"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kids_banner} category="kid" />}
            />
            <Route path="/" element={<Shop />} />
            <Route path="/product" element={<Products />}>
              <Route path=":productid" element={<Products />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
