import Home from "./components/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Products from "./components/Products";
import Product from "./components/Product/Product";
import Order from "./components/Order";
import Myorders from "./components/MyOrders";
import AdminPage from "./components/AdminPage";
import Navbar from "./layouts/Navbar";
import PrivateRoute from "./routing/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Admin from "./components/admin/Admin";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:productId" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
